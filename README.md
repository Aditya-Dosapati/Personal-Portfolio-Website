# Aditya Dosapati Portfolio

Neo-brutalist developer portfolio built with Next.js App Router, Tailwind CSS, and TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Build

```bash
npm run build
```

This project is configured for static export via Next.js.

## Update Portfolio Content

- Main content source: src/data/portfolio.ts
- Home page composition: src/app/page.tsx
- Global styles and motion system: src/app/globals.css

## Deploy to GitHub Pages

Current config already supports static hosting:

- output: export
- trailingSlash: true
- images.unoptimized: true

If deploying to a repository path such as https://username.github.io/repo-name, set these in next.config.ts:

- basePath: "/repo-name"
- assetPrefix: "/repo-name/"

Then run:

```bash
npm run build
```

Deploy the generated out directory through GitHub Pages workflow or a gh-pages branch.

## Automatic Deployment (GitHub Actions)

This repository includes a workflow at .github/workflows/deploy-pages.yml.

It will:

- run on push to main or master
- build the static export
- publish the out directory to GitHub Pages

One-time GitHub setup:

1. Open repository Settings > Pages.
2. Set Source to GitHub Actions.
3. Push changes to main (or master) to trigger deployment.
