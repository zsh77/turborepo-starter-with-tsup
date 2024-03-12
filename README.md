# Turborepo starter with tsup

This is an unofficial starter Turborepo with multiple meta-frameworks all working in harmony and sharing packages.

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `nextjs-app`: a [Next.js](https://nextjs.org/) app
- `vite-app`: a [Vite](https://vitejs.dev/) single page app
- `@repo/eslint-config`: eslint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations and scripts
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo
- `@repo/tailwind-config`: a reusable tailwind config
- `@repo/ui`: a React UI library bundled with `tsup`
- `@repo/utils`: a Typescript library of tools bundled with `tsup`

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
