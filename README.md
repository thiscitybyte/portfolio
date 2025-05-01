# Milo Astro Theme

Modern Astro website theme with fully responsive, customizable TailwindCSS components and Keystatic CMS integration.

![milo-theme](https://oxygenna-themes.b-cdn.net/milo-astro/milo-theme.png)

[![View live Demo](https://oxygenna-themes.b-cdn.net/milo-astro/button-demo.svg)](https://milo-astro.netlify.app) [![Page Speed Insights (100%)](https://oxygenna-themes.b-cdn.net/milo-astro/button-pagespeed.svg)](https://pagespeed.web.dev/analysis/https-milo-astro-netlify-app/noql4g17gc?form_factor=desktop)

## 1. Introduction

Milo is a modern, feature-rich Astro theme designed for developers and content creators. Built with TailwindCSS and integrated with Keystatic CMS, it provides a perfect balance of performance, flexibility, and ease of use.

## 2. Getting Started

### Commands

After downloading the theme, install the dependencies and run it on your local server. Check the package.json file for available scripts.

You will need to use Node.js version 20.3.0 or later.

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

### Folder structure

Inside Milo Astro project, you'll see the following folders and files:

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   │   └── ...
│   │   ├── scripts/
│   │   │   └── ...
│   │   └── ui/
│   │       └── ...
│   ├── config/
│   │   └── ...
│   ├── content/
│   │   └── caseStudies/
│   │       └── ...
│   ├── data/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

| Directory/File           | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                | Contains static assets like images and the favicon. These files are served directly at the root URL.                               |
| `src/assets/`            | Contains all images and assets used in the project.                                                                                |
| `src/components/`        | Contains reusable components for your site. This directory is divided into `ui` for UI components and `blocks` for section blocks. |
| `src/components/blocks/` | Contains Section blocks used throughout the site.                                                                                  |
| `src/components/ui/`     | Contains individual UI components.                                                                                                 |
| `src/config/`           | Contains configuration files for the project in typescript format.                                                                 |
| `src/content/`          | Holds collection data, such as case studies.                                                                                       |
| `src/data/`             | Contains JSON files with content data (like features, testimonials etc).                                                           |
| `src/icons/`            | Contains all icons used in the project, sourced from [Heroicons](https://heroicons.com/).                                          |
| `src/layouts/`          | Contains layout components that define the overall structure of your pages.                                                        |
| `src/pages/`            | Contains `.astro` files for each page. Each file here is exposed as a route based on its file name.                               |
| `package.json`          | Lists dependencies and scripts for your project, including metadata and various package requirements.                              |

## 3. Theme Configuration

The configuration files are located in the `src/config` directory, written in TypeScript. They contain various settings for the theme, including:

| Configuration Files      | Description                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| `src/config/config.ts`  | Basic configuration settings including SEO, mode, and scroll animations.                         |
| `src/config/navigation.ts` | Menu TypeScript interface options and JSON files for navigation.                              |

## 4. Content Management

Milo includes Keystatic CMS integration for Case Studies collection management. The configuration can be found in `keystatic.config.ts`, which defines:

- Content collections structure
- Field configurations
- Storage settings

To use Keystatic:

1. Run the development server
2. Access the dashboard at `http://127.0.0.1:4321/keystatic`
3. Configure cloud storage in production:

```typescript
storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
cloud: {
  project: '[TEAM_NAME]/[PROJECT_NAME]',
},
```

For more details, see [Keystatic's documentation](https://keystatic.com/docs/introduction).

## 5. License

Copyright 2025 - Designed & Developed by [Oxygenna](http://www.oxygenna.com/)

[![Hire Us](https://oxygenna-themes.b-cdn.net/milo-astro/hireus.png)](mailto:info@oxygenna.com)
