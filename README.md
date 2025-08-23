# Overview

This is a portfolio website for Anjo Santos (Software Developer). This project is a React application bootstrapped with Vite, utilizing TypeScript for type safety and modern development practices.

## Features

- Fast development with Vite
- TypeScript for type safety
- Component-based architecture
- Routing setup with React Router

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd anjosantos-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server and open the application in your default browser.

## Docker Commands

DEV:
- docker-compose -f docker/docker-compose.yml down
- docker-compose -f docker/docker-compose.yml up -d --build

PROD:


## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized build of your application in the `dist` directory

## Folder Structure

- `src/`: Contains the source code for the application.
  - `main.tsx`: Entry point of the application.
  - `App.tsx`: Main application component.
  - `components/`: Contains reusable components.
  - `routes/`: Contains routing configuration.
  - `types/`: Contains TypeScript types and interfaces.
- `public/`: Contains static assets like the favicon.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: NPM configuration file.
- `vite.config.ts`: Vite configuration file.

## License

This project is licensed under the MIT License.
