# Abisekha — Cinematic AI Engineer Portfolio

A responsive Next.js App Router portfolio with Tailwind CSS, Framer Motion, a lightweight animated canvas particle field, project cards, skills, and recruiter-focused contact links.

## Requirements
- Node.js 18.17+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production static export
```bash
npm run build
```
The static site is generated in `out/` because `next.config.mjs` enables `output: 'export'`. Deploy `out/` to Netlify, Vercel static hosting, or another static host.

## Before publishing
1. Verify every project link and ensure each live demo is accessible.
2. Replace any generic GitHub profile links with the exact repository for that project.
3. Add a real public résumé PDF in `public/` and link it from the hero if desired. No résumé file is bundled because one was not provided for this build.
4. Replace the footer's placeholder `mailto:hello@abisekha-dev.netlify.app` with a working email address.
5. Confirm wording and project outcomes are accurate; do not publish metrics you cannot substantiate.
6. The hero artwork is generated in CSS and Canvas, so no image-sequence assets are required. This keeps the experience light and avoids missing `1.webp`–`120.webp` files.

## Customize projects
Edit `data/projects.ts`. Each project supports `liveUrl`, `githubUrl`, stack tags, an explanation, and a visual theme.

## Notes
- Static export means server-only features and API routes are not included.
- Google Fonts are loaded through `next/font/google` at build time; the build environment needs access to Google Fonts unless the font is self-hosted.
- The contact area currently links to LinkedIn and GitHub. Add a real email address or contact form provider before publishing.
"# Abisekha-Cinematic-Portfolio" 
