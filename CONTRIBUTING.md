# Contributing to SASTOJ Frontend V2

## Project Structure

SASTOJ Frontend V2 uses Module Federation architecture. The project structure is as follows:

```bash
sastoj-frontend-v2/
├── apps/                      # Main applications
│   ├── host-management/       # Competition management system
│   └── host-competition/      # Competition frontend
├── libs/                      # Shared libraries
│   ├── remote-components/     # Shared components
│   ├── remote-pages/         # Shared pages
│   ├── remote-utils/         # Utility functions
│   ├── remote-auth/          # Authentication
│   ├── remote-apis/          # API interfaces
│   └── remote-stores/        # State management
└── types/                    # Type definitions
```

## Development Setup

1. **Requirements**
   - Node.js >= 18
   - pnpm >= 9.6.0

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development Server**
   
   Due to Module Federation, libs remote must be running before starting the hosts:
   ```bash
   # Start remote libs
   pnpm run libs:dev

   # Start management system
   pnpm run management:dev

   # Start competition frontend
   pnpm run competition:dev
   ```

## Development Guidelines

1. **Git Commit Guidelines**
   - Use commitizen for standardized commits
   - lint-staged runs automatically before commit
   ```bash
   pnpm commit
   ```

2. **Code Style**
   - Use ESLint and Prettier for code formatting
   - Run lint check before committing
   ```bash
   pnpm lint
   ```

3. **Module Development Guidelines**
   - Shared components go in `libs/remote-components`
   - Shared pages go in `libs/remote-pages`
   - Utility functions go in `libs/remote-utils`
   - API interface definitions go in `libs/remote-apis`
   - State management related code goes in `libs/remote-stores`

4. **TypeScript Guidelines**
   - All new code must be written in TypeScript
   - Ensure proper type definitions
   - Type definitions go in the `types` directory

## Build and Deploy

1. **Local Build**
   ```bash
   pnpm build
   ```

2. **Docker Deployment**
   ```bash
   # Build Docker image
   pnpm run docker:build

   # Run container
   docker run -d -p 12345:12345 --name sastoj-frontend-v2-container sastoj-frontend-v2
   ```

## Submitting Pull Requests

1. Fork the project and clone it locally
2. Create a new feature branch: `git checkout -b feature/your-feature-name`
3. Commit changes: use `pnpm commit` for standardized commits
4. Push to your fork: `git push origin feature/your-feature-name`
5. Create a Pull Request to the main branch of the main repository

## Issue Reporting

If you find a bug or have a feature suggestion, please raise it in GitHub Issues. When submitting an issue:

1. Check if a similar issue already exists
2. Use a clear title to describe the problem
3. Provide detailed steps to reproduce
4. Include relevant error logs or screenshots
