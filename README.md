# AgroNode Website

Official public showcase website for the AgroNode open-source project.

## Purpose

AgroNode is **open infrastructure for the physical world**.

This website explains AgroNode architecture and direction for:

- FOSDEM attendees
- Open-source developers
- IoT and embedded developers
- Backend and DevOps engineers
- Makers, researchers and contributors

This is **not** the AgroNode dashboard/admin panel.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS (v4)
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Default local URL:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

Preview build output:

```bash
npm run preview
```

## Environment

Set production site URL for canonical, Open Graph URL, robots and sitemap generation:

```bash
VITE_SITE_URL=https://example.com
```

Example:

```bash
VITE_SITE_URL=https://agronode.example npm run build
```

## SEO assets

Generated automatically before dev/build/preview by `scripts/generate-seo.mjs`:

- `public/robots.txt`
- `public/sitemap.xml`

## Project structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Architecture.tsx
│   ├── UseCases.tsx
│   ├── TelemetryDemo.tsx
│   ├── Hardware.tsx
│   ├── Security.tsx
│   ├── TechStack.tsx
│   ├── OpenSource.tsx
│   ├── Roadmap.tsx
│   ├── Fosdem.tsx
│   └── Footer.tsx
├── data/
│   └── project.ts
├── config/
│   └── site.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment notes

1. Build with the production URL set:
   - `VITE_SITE_URL=https://your-domain.tld npm run build`
2. Deploy `dist/` to your static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, Nginx, etc.).
3. Ensure host serves:
   - `/robots.txt`
   - `/sitemap.xml`

## Repository target

Intended separate repository:

- `https://github.com/osmanhadzic/agronode-website`

This local project is prepared independently and does not modify the AgroNode app repository.
