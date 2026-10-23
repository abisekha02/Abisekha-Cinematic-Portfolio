# Abisekha — Cinematic AI Engineer Portfolio

A responsive Next.js App Router portfolio for Abisekha Melfin V, featuring a cinematic hero, animated particle field, scroll progress indicator, motion-led sections, project-specific dashboard-style visual previews, skills, work history, education, certifications, and recruiter-focused contact links.

## Stack
- Next.js 14 App Router + React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Run locally
Requires Node.js 18.17+ (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build and deploy
```bash
npm run build
```

`next.config.mjs` enables static export, so the generated site is written to `out/`. Deploy that output to a static host, or import the source repository into Vercel and let it build the Next.js project.

## Project visuals
Project cards contain animated dashboard-style illustrative previews built in React/CSS. They are custom visuals to communicate each project's theme; they are not screenshots of production software.

## Before publishing
1. Verify each project link and live demo.
2. Replace general GitHub profile links with exact repositories when available.
3. Confirm all project descriptions and outcomes are accurate.
4. The email and phone number are populated from the supplied portfolio details; update them if you prefer different public contact information.
5. Keep secrets and API keys out of the repository.

## Customize projects
Edit `data/projects.ts`. Each project supports `liveUrl`, `githubUrl`, stack tags, a description, and a visual theme.

## Accessibility and performance
Animations respect `prefers-reduced-motion`; the site is responsive and uses CSS/Canvas artwork rather than a heavy video background.
