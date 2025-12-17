<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Pigskins Bar & Grill

Marketing website for Pigskins Bar & Grill, built with **React + TypeScript + Vite**.

## Index

- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Routing Notes](#routing-notes)
- [Project Structure](#project-structure)
- [Build & Deploy](#build--deploy)

## Tech Stack

- **Vite** (dev server + build)
- **React** (TypeScript)
- **React Router** (client-side routing)
- **lucide-react** (icons)

## Requirements

- **Node.js** (LTS recommended)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app:

- `http://localhost:3000`

## Available Scripts

- **dev**: Start Vite dev server

```bash
npm run dev
```

- **build**: Build for production

```bash
npm run build
```

- **preview**: Preview the production build locally

```bash
npm run preview
```

## Routing Notes

This app uses **hash-based routing** (`HashRouter`) to work well on static hosts (no special server rewrite rules required).

Routes are defined in `App.tsx`:

- `/` (Home)
- `/menu`
- `/events`
- `/about`
- `/contact`

## Project Structure

```text
.
├── components/        # shared UI + layout
├── pages/             # route pages
├── services/          # client-side services (currently no AI service)
├── App.tsx            # routes + app shell
├── index.tsx          # app entry
├── constants.tsx      # shared constants
├── types.ts           # shared TS types
└── vite.config.ts     # Vite config
```

## Build & Deploy

1. Build:

```bash
npm run build
```

2. Deploy the `dist/` folder to your static host (Netlify, Vercel static export, Cloudflare Pages, S3, etc.).

3. Optional local sanity check:

```bash
npm run preview
```

