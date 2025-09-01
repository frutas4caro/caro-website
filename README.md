# PWA Portfolio Starter (React + Vite + GitHub Pages)

Minimal, modern, and free-to-host. Includes:
- React + Vite + TypeScript
- PWA (offline + installable) via `vite-plugin-pwa`
- Hash-based routing (works great on GitHub Pages)
- Pico.css (CDN) for quick modern styling
- Ready-to-embed Hugging Face Gradio app via `<iframe>`

## Quick Start

```bash
npm install
npm run dev
```

## Prepare for GitHub Pages

1) **Set your repo name** in `vite.config.ts` `base: '/REPO_NAME/'`:
   - For a *project site* (https://<user>.github.io/REPO_NAME/), set `base` to `'/REPO_NAME/'`.
   - For a *user site* (https://<user>.github.io), set `base` to `'/'`.

2) Push to GitHub. Enable Pages: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

3) The workflow in `.github/workflows/deploy.yml` will build and publish to `gh-pages` on every push to `main`.

## Build locally

```bash
npm run build
npm run preview
```

## Replace placeholders

- `GradioEmbed.tsx` → your Hugging Face Space URL
- `index.html` title + theme color
- `App.tsx` → your name, links, and copy
- Add `public/resume.pdf` if you want a direct link
- Replace icons in `public/icons`

## Notes

- Using `HashRouter` avoids 404 issues on GitHub Pages.
- The PWA is set to auto-update when you ship a new build.
- Pico.css keeps styles lean; swap for Tailwind later if needed.
