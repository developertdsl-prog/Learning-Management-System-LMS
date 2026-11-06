/**
 * GitHub Setup Script for LMS Project
 * 
 * This script helps automate the creation of GitHub Issues, Milestones, and Project board.
 * Run with: node setup-github.js
 * 
 * Prerequisites:
 * - GitHub CLI (gh) installed and authenticated: `gh auth login`
 * - Node.js 18+
 */

const fs = require('fs');
const path = require('path');

// GitHub Issue data from README
const issues = [
  { title: 'Project initialization', milestone: 'Project Setup', labels: ['setup', 'config'] },
  { title: 'Setup Tailwind CSS and custom colors', milestone: 'Project Setup', labels: ['css', 'config'] },
  { title: 'Create project folder structure', milestone: 'Project Setup', labels: ['structure', 'organization'] },
  { title: 'Implement Navbar component', milestone: 'UI Foundation', labels: ['component', 'navigation'] },
  { title: 'Implement Sidebar component', milestone: 'UI Foundation', labels: ['component', 'navigation'] },
  { title: 'Create Login page', milestone: 'Authentication', labels: ['auth', 'ui'] },
  { title: 'Create Register page', milestone: 'Authentication', labels: ['auth', 'ui'] },
  { title: 'Implement course listing grid', milestone: 'Course Management', labels: ['courses', 'grid'] },
  { title: 'Create course detail page', milestone: 'Course Management', labels: ['courses', 'detail'] },
  { title: 'Add progress tracking to course detail', milestone: 'Course Management', labels: ['progress', 'ui'] },
  { title: 'Build Student Dashboard', milestone: 'Student Dashboard', labels: ['dashboard', 'student'] },
  { title: 'Implement learning progress card', milestone: 'Student Dashboard', labels: ['progress', 'visualization'] },
  { title: 'Build Instructor Dashboard', milestone: 'Instructor Features', labels: ['dashboard', 'instructor'] },
  { title: 'Add course management to instructor', milestone: 'Instructor Features', labels: ['courses', 'management'] },
  { title: 'Build Admin Panel', milestone: 'Admin Panel', labels: ['admin', 'management'] },
  { title: 'Add user management to admin', milestone: 'Admin Panel', labels: ['admin', 'users'] },
  { title: 'Implement lesson management', milestone: 'Lesson Management', labels: ['lessons', 'management'] },
  { title: 'Add lesson completion tracking', milestone: 'Lesson Management', labels: ['lessons', 'tracking'] },
  { title: 'Create course enrollment flow', milestone: 'Course Management', labels: ['enrollment', 'user-experience'] },
  { title: 'Add responsive design improvements', milestone: 'UI Foundation', labels: ['responsive', 'mobile'] },
  { title: 'Implement dark mode support', milestone: 'UI Foundation', labels: ['dark-mode', 'ui'] },
  { title: 'Add course search and filter', milestone: 'Course Management', labels: ['search', 'filter'] },
  { title: 'Write project README.md', milestone: 'Documentation', labels: ['documentation'] },
  { title: 'Add TypeScript type safety', milestone: 'Code Quality', labels: ['typescript', 'types'] },
  { title: 'Final testing and bug fixes', milestone: 'Testing & Bug Fixes', labels: ['testing', 'bug-fixes'] },
];

// Milestones definition (from README)
const milestones = [
  { title: 'Project Setup', description: 'Initial setup, configuration, and folder structure' },
  { title: 'UI Foundation', description: 'Navigation, layouts, and core UI components' },
  { title: 'Authentication', description: 'Login and registration functionality' },
  { title: 'Course Management', description: 'Course listing, details, and enrollment' },
  { title: 'Student Dashboard', description: 'Student-facing features and progress tracking' },
  { title: 'Instructor Features', description: 'Course creation and management tools' },
  { title: 'Admin Panel', description: 'Administrative controls and user management' },
  { title: 'Testing & Release', description: 'Bug fixes, documentation, and final release' },
];

// Project board columns
const projectColumns = [
  'Project Setup',
  'UI Foundation', 
  'Authentication',
  'Course Management',
  'Student Dashboard',
  'Instructor Features',
  'Admin Panel',
  'Testing & Release'
];

console.log('🚀 LMS GitHub Setup Script');
console.log('=========================\n');

// Check for GitHub CLI
try {
  require('child_process').execSync('gh --version', { stdio: 'ignore' });
  console.log('✅ GitHub CLI found\n');
} catch (err) {
  console.log('⚠️  GitHub CLI not found. Install from: https://cli.github.com/\n');
  process.exit(1);
}

// Step 1: Create Milestones
async function createMilestones() {
  console.log('1. Creating Milestones...');
  for (const milestone of milestones) {
    try {
      const output = await require('child_process').execSync(
        `gh milestone create "${milestone.title}" --body "${milestone.description}"`,
        { stdio: 'pipe' }
      );
      console.log(`   ✅ Created: ${milestone.title}`);
    } catch (err) {
      // Milestone might already exist - try to get it
      try {
        await require('child_process').execSync(
          `gh milestone view "${milestone.title}"`,
          { stdio: 'pipe' }
        );
        console.log(`   ℹ️  Already exists: ${milestone.title}`);
      } catch (err2) {
        console.log(`   ❌ Failed: ${milestone.title} - ${err2.message}`);
      }
    }
  }
  console.log('');
}

// Step 2: Create Issues
async function createIssues() {
  console.log('2. Creating Issues...');
  for (const issue of issues) {
    try {
      const labelsStr = issue.labels.map(l => `"${l}"`).join(', ');
      const output = await require('child_process').execSync(
        `gh issue create --title "${issue.title}" --milestone "${issue.milestone}" --label ${labelsStr} --body "Issue for: ${issue.title}"`,
        { stdio: 'pipe' }
      );
      console.log(`   ✅ Created: #${output.trim().match(/#(\d+)/)[1]} - ${issue.title}`);
    } catch (err) {
      console.log(`   ❌ Failed: ${issue.title} - ${err.message}`);
    }
  }
  console.log('');
}

// Step 3: Create Project
async function createProject() {
  console.log('3. Creating Project Board...');
  try {
    const output = await require('child_process').execSync(
      `gh project create --title "LMS Project" --template "Project Kanban"`,
      { stdio: 'pipe' }
    );
    const projectNum = output.trim().match(/#(\d+)/)[1];
    console.log(`   ✅ Created project #${projectNum}`);
    
    // Add columns
    for (const column of projectColumns) {
      try {
        await require('child_process').execSync(
          `gh project column add "LMS Project" --name "${column}"`,
          { stdio: 'pipe' }
        );
        console.log(`   ✅ Added column: ${column}`);
      } catch (err) {
        console.log(`   ℹ️  Column may already exist: ${column}`);
      }
    }
  } catch (err) {
    console.log(`   ℹ️  Project may already exist: ${err.message}`);
  }
  console.log('');
}

// Step 4: Summary
function printSummary() {
  console.log('📋 Setup Summary');
  console.log('================');
  console.log(`• Milestones: ${milestones.length} defined`);
  console.log(`• Issues: ${issues.length} to create`);
  console.log(`• Project Board: ${projectColumns.length} columns`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Review created issues and milestones');
  console.log('2. Assign issues to appropriate milestones');
  console.log('3. Start working on feature branches');
  console.log('4. Follow conventional commit format');
  console.log('');
  console.log('Branching workflow:');
  console.log('- `main` - Production-ready code');
  console.log('- `feature/*` - Feature development');
  console.log('- `bugfix/*` - Bug fix branches');
  console.log('- `hotfix/*` - Production hotfixes');
}

 // Run all steps
createMilestones().then(() => {
  return createIssues();
}).then(() => {
  return createProject();
}).then(() => {
  printSummary();
}).catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});