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
2. The project cards use specific repositories where a public repository was verifiable. EmployeeAssist AI and Kadai ERP do not show a source button until you provide their exact repository URLs.
3. Add your current résumé PDF as `public/resume.pdf` before deploying; the header, hero, and footer buttons point to that file.
4. The contact email is set to `abiicaspia@gmail.com`, based on your existing portfolio.
5. Review the project descriptions and IPCS achievement line before publishing. No unverified performance metrics are included.
6. Add genuine project screenshots or short screen recordings when available; the current cards use themed CSS visuals rather than claiming to be actual product screenshots.
7. The hero artwork is generated in CSS and Canvas, so no image-sequence assets are required. This keeps the experience light and avoids missing `1.webp`–`120.webp` files.

## Customize projects
Edit `data/projects.ts`. Each project supports `liveUrl`, `githubUrl`, stack tags, an explanation, and a visual theme.

## Notes
- Static export means server-only features and API routes are not included.
- Google Fonts are loaded through `next/font/google` at build time; the build environment needs access to Google Fonts unless the font is self-hosted.
- Open Graph and Twitter preview metadata use the bundled `public/og-image.svg`. The résumé PDF still needs to be supplied before the download buttons can work.


## Project cover images

Six optimized 16:9 WebP cover images are included in `public/projects/` and used by the project cards. They are cinematic concept artwork for portfolio presentation; UI details shown in artwork are illustrative, not live application screenshots.
