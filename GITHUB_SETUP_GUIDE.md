# GitHub Setup Guide for LMS Project

This guide will help you create GitHub Issues, Milestones, and set up the project board.

## Prerequisites

1. GitHub account
2. GitHub CLI installed (`brew install gh` or `choco install github-cli`)
3. Authenticated: `gh auth login`

## Step 1: Create Milestones

Create 8 milestones in your GitHub repository:

```bash
# Project Setup
gh milestone create "Project Setup" --body "Initial setup, configuration, and folder structure"

# UI Foundation
gh milestone create "UI Foundation" --body "Navigation, layouts, and core UI components"

# Authentication
gh milestone create "Authentication" --body "Login and registration functionality"

# Course Management
gh milestone create "Course Management" --body "Course listing, details, and enrollment"

# Student Dashboard
gh milestone create "Student Dashboard" --body "Student-facing features and progress tracking"

# Instructor Features
gh milestone create "Instructor Features" --body "Course creation and management tools"

# Admin Panel
gh milestone create "Admin Panel" --body "Administrative controls and user management"

# Testing & Release
gh milestone create "Testing & Release" --body "Bug fixes, documentation, and final release"
```

## Step 2: Create Issues

Create 25 issues and assign them to milestones with labels:

```bash
# Project Setup issues
gh issue create --title "Project initialization" --milestone "Project Setup" --label "setup,config" --body "Issue for: Project initialization"
gh issue create --title "Setup Tailwind CSS and custom colors" --milestone "Project Setup" --label "css,config" --body "Issue for: Setup Tailwind CSS and custom colors"
gh issue create --title "Create project folder structure" --milestone "Project Setup" --label "structure,organization" --body "Issue for: Create project folder structure"

# UI Foundation issues
gh issue create --title "Implement Navbar component" --milestone "UI Foundation" --label "component,navigation" --body "Issue for: Implement Navbar component"
gh issue create --title "Implement Sidebar component" --milestone "UI Foundation" --label "component,navigation" --body "Issue for: Implement Sidebar component"
gh issue create --title "Add responsive design improvements" --milestone "UI Foundation" --label "responsive,mobile" --body "Issue for: Add responsive design improvements"
gh issue create --title "Implement dark mode support" --milestone "UI Foundation" --label "dark-mode,ui" --body "Issue for: Implement dark mode support"

# Authentication issues
gh issue create --title "Create Login page" --milestone "Authentication" --label "auth,ui" --body "Issue for: Create Login page"
gh issue create --title "Create Register page" --milestone "Authentication" --label "auth,ui" --body "Issue for: Create Register page"

# Course Management issues
gh issue create --title "Implement course listing grid" --milestone "Course Management" --label "courses,grid" --body "Issue for: Implement course listing grid"
gh issue create --title "Create course detail page" --milestone "Course Management" --label "courses,detail" --body "Issue for: Create course detail page"
gh issue create --title "Add progress tracking to course detail" --milestone "Course Management" --label "progress,ui" --body "Issue for: Add progress tracking to course detail"
gh issue create --title "Add course search and filter" --milestone "Course Management" --label "search,filter" --body "Issue for: Add course search and filter"
gh issue create --title "Create course enrollment flow" --milestone "Course Management" --label "enrollment,user-experience" --body "Issue for: Create course enrollment flow"

# Student Dashboard issues
gh issue create --title "Build Student Dashboard" --milestone "Student Dashboard" --label "dashboard,student" --body "Issue for: Build Student Dashboard"
gh issue create --title "Implement learning progress card" --milestone "Student Dashboard" --label "progress,visualization" --body "Issue for: Implement learning progress card"

# Instructor Features issues
gh issue create --title "Build Instructor Dashboard" --milestone "Instructor Features" --label "dashboard,instructor" --body "Issue for: Build Instructor Dashboard"
gh issue create --title "Add course management to instructor" --milestone "Instructor Features" --label "courses,management" --body "Issue for: Add course management to instructor"

# Admin Panel issues
gh issue create --title "Build Admin Panel" --milestone "Admin Panel" --label "admin,management" --body "Issue for: Build Admin Panel"
gh issue create --title "Add user management to admin" --milestone "Admin Panel" --label "admin,users" --body "Issue for: Add user management to admin"

# Lesson Management issues
gh issue create --title "Implement lesson management" --milestone "Lesson Management" --label "lessons,management" --body "Issue for: Implement lesson management"
gh issue create --title "Add lesson completion tracking" --milestone "Lesson Management" --label "lessons,tracking" --body "Issue for: Add lesson completion tracking"

# Documentation & Code Quality
gh issue create --title "Write project README.md" --milestone "Documentation" --label "documentation" --body "Issue for: Write project README.md"
gh issue create --title "Add TypeScript type safety" --milestone "Code Quality" --label "typescript,types" --body "Issue for: Add TypeScript type safety"

# Testing & Bug Fixes
gh issue create --title "Final testing and bug fixes" --milestone "Testing & Bug Fixes" --label "testing,bug-fixes" --body "Issue for: Final testing and bug fixes"
```

## Step 3: Create Project Board

```bash
# Create Kanban project
gh project create --title "LMS Project" --template "Project Kanban"

# Add columns (one per milestone)
gh project column add "LMS Project" --name "Project Setup"
gh project column add "LMS Project" --name "UI Foundation"
gh project column add "LMS Project" --name "Authentication"
gh project column add "LMS Project" --name "Course Management"
gh project column add "LMS Project" --name "Student Dashboard"
gh project column add "LMS Project" --name "Instructor Features"
gh project column add "LMS Project" --name "Admin Panel"
gh project column add "LMS Project" --name "Testing & Release"
```

## Step 4: Daily Workflow

### Branching

```bash
# Create feature branch
git checkout -b feature/course-listing main

# Work on feature
# ...

# Commit with conventional format
git commit -m "feat: implement course listing grid"

# Push and open PR
git push origin feature/course-listing
# Then: gh pr create --title "feat: implement course listing grid" --body "See issue #8"
```

### Commit Message Format

```
feat: add course enrollment functionality
fix: resolve responsive sidebar issue on mobile
docs: update README with new milestones
refactor: improve component prop naming
style: format code with Prettier
test: add unit tests for progress tracking
```

### Pull Request Process

1. Create feature branch from `main`
2. Implement the feature with clean, readable code
3. Write meaningful commit messages
4. Open a Pull Request referencing the corresponding issue: `Closes #4`
5. Ensure all tests pass
6. Merge into `main` after review

## Step 5: Verify Setup

Check that everything is set up correctly:

```bash
# List milestones
gh milestone list

# List issues
gh issue list --milestone "Project Setup"

# List project columns
gh project item list --project-number 1 --field-names "column_name"
```