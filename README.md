# Abisekha Cinematic Portfolio

A cinematic, recruiter-facing portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Included
- Cinematic dark hero with restrained orbital animation and a reserved hero slot for a future 3D model.
- Scroll progress, staggered section reveals, subtle gradient movement, and reduced-motion support.
- Nine project cards based on the projects listed on https://abisekha-dev.netlify.app/.
- Project-specific animated interface concept previews (these are illustrations, not screenshots of the running projects).
- Live-demo and GitHub destinations stored in `data/projects.ts` so they can be reviewed and edited in one place.
- Responsive layout, experience, education, certifications, contact, LinkedIn, and GitHub sections.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deployment

Import the repository into Vercel and use the default Next.js build settings.

## Add the 3D model later

The hero has a marked `data-3d-model-slot="hero"` integration point. When the GLB/GLTF asset is ready, replace the decorative orb with a lazy-loaded React Three Fiber/Drei scene. Keep a static fallback and honor `prefers-reduced-motion` for accessibility and performance.

## Notes
- Project-specific preview panels are animated UI concepts; they are not claimed to be screenshots from the actual applications.
- The attendance live-demo URL is preserved from the source portfolio. Check that deployment before sharing it with recruiters, as external availability can change.
- Project URLs are maintained in `data/projects.ts`.
