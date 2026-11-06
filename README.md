# Learning Management System (LMS)

A simple, functional, and professional Learning Management System built with Next.js, TypeScript, and Tailwind CSS. This project showcases core LMS features with a clean, responsive interface and is ready for a GitHub portfolio.

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [GitHub Milestones](#-github-milestones)
- [GitHub Issues](#-github-issues)
- [Contributing](#-contributing)

## 📖 Overview

The **LMS** is a complete learning management platform that enables students to discover courses, track their learning progress, and engage with instructional content. Instructors can manage courses and monitor student progress, while administrators can oversee the entire platform.

This project was built with a "fast development" philosophy - focusing on functional features, clean code, and a professional UI without unnecessary complexity.

## ✨ Features

### Core Features

- **Authentication**: Login and Registration flows
- **Course Library**: Browse and search available courses
- **Course Details**: View course information, instructor, and lesson progress
- **Student Dashboard**: Track learning progress and enrolled courses
- **Instructor Dashboard**: Manage courses and view analytics
- **Admin Panel**: User management and system settings
- **Learning Progress**: Visual progress tracking with progress bars
- **Lesson Management**: Create and manage lessons within courses

### UI Features

- **Responsive Layout**: Works mobile to desktop
- **Professional Sidebar**: Persistent navigation on desktop
- **Navigation Bar**: Top bar with quick access to key sections
- **Course Cards**: Grid layout with hover effects and progress indicators
- **Progress Bars**: Visual representation of course completion
- **Clean Typography**: Inter font with Geist Mono for code
- **Dark Mode Support**: Automatic color scheme adaptation

### Technical Features

- **TypeScript**: Full type safety throughout
- **Next.js 16**: App Router with server components
- **Tailwind CSS v4**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Reusable Components**: Sidebar, Navbar, Cards, Progress components

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.4.5 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Geist Sans & Geist Mono (Google Fonts) |
| State | React Context (mock authentication) |
| Data | Mock data (no backend required) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun/pnpm
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lms-app.git
   cd lms-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
lms-app/
├── src/
│   ├── app/           # Next.js 14 App Router
│   │   ├── 404.tsx    # Not found page
│   │   ├── login/     # Authentication pages
│   │   ├── register/  # Registration pages
│   │   ├── courses/   # Course listing
│   │   ├── course-detail/  # Individual course page
│   │   ├── instructor/  # Instructor dashboard
│   │   ├── admin/     # Admin panel
│   │   ├── progress/  # Learning progress tracking
│   │   ├── lessons/   # Lesson management
│   │   └── profile/   # User profile
│   ├── components/
│   │   └── ui/        # UI components (Sidebar, Navbar)
│   ├── lib/           # Utilities and helpers
│   └── styles/        # Global styles
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## 📸 Screenshots

| Feature | Description |
|---------|-------------|
| Homepage | Course library with grid layout |
| Course Details | Lesson progress and course information |
| Student Dashboard | Learning progress overview |
| Instructor Dashboard | Course management and analytics |
| Admin Panel | User and course management |

## 🏆 GitHub Milestones

This project is organized into 8 development milestones:

1. **Project Setup** - Initial setup, configuration, and folder structure
2. **UI Foundation** - Navigation, layouts, and core UI components
3. **Authentication** - Login and registration functionality
4. **Course Management** - Course listing, details, and enrollment
5. **Student Dashboard** - Student-facing features and progress tracking
6. **Instructor Features** - Course creation and management tools
7. **Admin Panel** - Administrative controls and user management
8. **Testing & Release** - Bug fixes, documentation, and final release

## 📋 GitHub Issues (25 Total)

| Issue # | Title | Milestone | Labels |
|---------|-------|-----------|--------|
| 1 | Project initialization | Project Setup | setup, config |
| 2 | Setup Tailwind CSS and custom colors | Project Setup | css, config |
| 3 | Create project folder structure | Project Setup | structure, organization |
| 4 | Implement Navbar component | UI Foundation | component, navigation |
| 5 | Implement Sidebar component | UI Foundation | component, navigation |
| 6 | Create Login page | Authentication | auth, ui |
| 7 | Create Register page | Authentication | auth, ui |
| 8 | Implement course listing grid | Course Management | courses, grid |
| 9 | Create course detail page | Course Management | courses, detail |
| 10 | Add progress tracking to course detail | Course Management | progress, ui |
| 11 | Build Student Dashboard | Student Dashboard | dashboard, student |
| 12 | Implement learning progress card | Student Dashboard | progress, visualization |
| 13 | Build Instructor Dashboard | Instructor Features | dashboard, instructor |
| 14 | Add course management to instructor | Instructor Features | courses, management |
| 15 | Build Admin Panel | Admin Panel | admin, management |
| 16 | Add user management to admin | Admin Panel | admin, users |
| 17 | Implement lesson management | Lesson Management | lessons, management |
| 18 | Add lesson completion tracking | Lesson Management | lessons, tracking |
| 19 | Create course enrollment flow | Course Management | enrollment, user-experience |
| 20 | Add responsive design improvements | UI Foundation | responsive, mobile |
| 21 | Implement dark mode support | UI Foundation | dark-mode, ui |
| 22 | Add course search and filter | Course Management | search, filter |
| 23 | Write project README.md | Documentation | documentation |
| 24 | Add TypeScript type safety | Code Quality | typescript, types |
| 25 | Final testing and bug fixes | Testing & Bug Fixes | testing, bug-fixes |

## 🛠 Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `feature/*` - Feature development branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Hotfix branches for production issues

### Pull Request Process

1. Create a feature branch from `main`
2. Implement the feature with clean, readable code
3. Write meaningful commit messages
4. Open a Pull Request referencing the corresponding issue
5. Ensure all tests pass
6. Merge into `main` after review

### Commit Message Format

```
feat: add course enrollment functionality
fix: resolve responsive sidebar issue on mobile
docs: update README with new milestones
refactor: improve component prop naming
style: format code with Prettier
test: add unit tests for progress tracking
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please follow the existing code style, write meaningful commit messages, and ensure all new features are accompanied by appropriate updates to the README.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ for GitHub portfolio showcase. Fast, functional, and professional.*