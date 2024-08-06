# Horizon Dashboard

## Overview

- This is a big practice that will implement the dashboard like a real system.
- [Design](<https://www.figma.com/design/OKVY6HzWJ2GbbETRRFO3d9/Horizon-UI---Trendiest-Open-Source-Admin-Template-Dashboard-(Community)?node-id=0-1&t=BrZhkCnC3DM8ALT1-0>)
- You can find more details on [Requirements and plan](https://docs.google.com/document/d/1_vNY2DaWmd-jUsPlPdJx-cx7xznDi0oM/edit) document. (Please contact the team if you don't have permission to access)

### Timeline

- Estimate time: **7 weeks** (Start date: **07 Aug, 2024** - End date: **25 Sep, 2024**).

### Task Management

- [GitLab](https://gitlab.asoft-python.com/du.nguyen/horizon-dashboard/-/boards)

## Tech stacks

### Libraries

- [React](https://react.dev/learn): is a JavaScript library for building user interfaces.
- [React Hook Form](https://react-hook-form.com/): React Hook Form reduces the amount of code you need to write while removing unnecessary re-renders.
- [TailwindCSS](https://tailwindcss.com/): Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
- [NextJS](https://nextjs.org/): Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
- [NextUI](https://nextui.org/): NextUI is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of [Tailwind CSS](https://tailwindcss.com/) and [React Aria](https://react-spectrum.adobe.com/react-aria/index.html).
- [Zustand](https://github.com/pmndrs/zustand):A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplate or opinionated, but has enough convention to be explicit and flux-like.
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.
- [Storybook](https://storybook.js.org/): captures the rendered state of a UI component. Developers write multiple stories per component that describe all the "interesting" states a component can support.
- Editor: Visual Studio Code.

### Testing tools

- [React Testing Library](https://testing-library.com/): Simple and complete testing utilities that encourage good testing practices. Is a light-weight solution for testing web pages by querying and interacting with DOM nodes.

### Debug tools

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.
- [Responsively App](https://responsively.app/): A simple application for developing, help dev test design in many screens.

## Deployment

- Develop build:
  - Application: [here](https://horizon-dashboard-one.vercel.app/)
  - Storybook: [here](https://horizon-dashboard-storybook.vercel.app/)

## How to run

### Prerequisites

Make sure you install packages with correct version below:

- [node v18.18.2+](https://nodejs.org/en/download/package-manager)
- [pnpm 9.1.2+](https://pnpm.io/installation)

- **Note:**:
  - Please add `.env` into root of project source code, refer `.env.sample`.

Check and update config image hosting on `next.config.mjs` file follow [Next.js document](https://nextjs.org/docs/messages/next-image-unconfigured-host)

### Get source code

| Command                                                                 | Action                    |
| :---------------------------------------------------------------------- | :------------------------ |
| `git clone git@gitlab.asoft-python.com:du.nguyen/horizon-dashboard.git` | Clone Repository with SSH |
| `$ cd nextjs-project`                                                   | Redirect to folder        |

### Build and Run app

| Command            | Action                                     | Port                  |
| :----------------- | :----------------------------------------- | :-------------------- |
| `$ pnpm install`   | Install packages dependencies              | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode   | N/A                   |
| `$ pnpm start`     | Starts the application in production mode. | http://localhost:3000 |
| `$ pnpm dev`       | Run the app in development mode            | http://localhost:3000 |
| `$ pnpm storybook` | Run Storybook.                             | http://localhost:6006 |
| `$ pnpm test`      | Run Unit Test                              | N/A                   |
| `$ pnpm coverage`  | Generate code coverage                     | N/A                   |

### Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── api                         # Handle data with API: GET, POST, PUT, DELETE
│   ├── app                         # Next.js App (App Router)
│   ├── components                  # React components
│   ├── constants                   # App constants
│   ├── icons                       # Icons folder
│   ├── layouts                     # React components for app layout
│   ├── models                      # Model type definitions
│   ├── types                       # Type definitions
│   ├── ui                          # React components by feature
│   ├── utils                       # Utilities folder
├── .eslintrc.json                  # ESLint configuration
├── .lintstagedrc                   # Lint-stage
├── .prettierrc                     # Prettier configuration
├── jest.config.ts                  # Jest configuration
├── next.config.mjs                 # Next.js configuration
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # Post CSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## Maintainers

This project is maintained by:

- **Du Nguyen Huu**
  - Email: du.nguyen@asnet.com.vn
  - GitLab: [@du.nguyen](https://gitlab.asoft-python.com/du.nguyen)
  - Slack: du.nguyen
