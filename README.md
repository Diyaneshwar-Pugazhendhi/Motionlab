# Animated UI Showcase

A standalone demo/showcase of dynamic, animated UI built with **React + Vite + TypeScript + Tailwind + Framer Motion** (Aceternity-style). Made for previewing and demoing motion-rich components.

## Run it

```bash
cd animated-ui-showcase
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## What's inside

- `Navbar` — slide-down blurred nav with animated gradient wordmark
- `Hero` — spotlight glow, staggered entrance, animated gradient headline
- `AnimatedText` — word-by-word blur-in reveal on scroll
- `FeatureCards` — scroll-triggered grid of cursor-following **spotlight** cards
- `Footer` — stack credit

## Extend it

Drop new sections into `src/App.tsx` and new components into `src/components/`. The `SpotlightCard` wrapper and `text-gradient` / `bg-grid` utilities are reusable building blocks.

## Deploy

```bash
npm run build
npm run preview
```

Or push to Vercel / Netlify for a live demo URL.

## Screenshots

![Animated UI Showcase](https://raw.githubusercontent.com/Diyaneshwar-Pugazhendhi/animated-ui-showcase/main/screenshots/animated-ui.png)
