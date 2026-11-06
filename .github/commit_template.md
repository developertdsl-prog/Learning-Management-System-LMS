# Commit Message Guidelines

Conventional Commits format: `<type>(<scope>): <subject>`

## Types

- `feat`: A new feature for the user
- `fix`: A bug fix for the user
- `docs`: Documentation only changes
- `style`: Formatting, missing semi colons, etc. (no code change)
- `refactor`: Refactoring production code
- `perf`: A change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Updating build tasks, package manager tickets, etc.

## Examples

```
feat(courses): add course enrollment functionality
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
refactor(navbar): improve responsive menu styles
test(progress): add unit tests for progress tracking
chore(deps): update tailwindcss to latest version
```

# Pull Request Template

## Description

Brief description of the changes and the problem they solve.

## Type

- [ ] feat
- [ ] fix
- [ ] docs
- [ ] style
- [ ] refactor
- [ ] perf
- [ ] test
- [ ] chore

## Checklist

- [ ] Code follows the project's style guidelines
- [ ] TypeScript types are correct
- [ ] Build passes `npm run build`
- [ ] Tested the feature manually
- [ ] Updated README.md if needed
- [ ] Related issue closes #issue-number

## Screenshots (if applicable)

Add screenshots or GIFs demonstrating the changes.

## Issue Reference

Closes #issue-number