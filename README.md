# adriangg.dev

Personal portfolio of Juan Adrian Garcia Garcia -- software developer with experience in frontend, backend and mobile development.

**Live site:** [adriangg.dev](https://adriangg.dev)

## Tech Stack

- **[Astro 5](https://astro.build)** -- static site generation, file-based routing
- **[Tailwind CSS 4](https://tailwindcss.com)** -- utility-first styling via Vite plugin
- **[TypeScript](https://www.typescriptlang.org)** -- strict mode
- **[Bun](https://bun.sh)** -- package manager and runtime
- **[Cloudflare Workers](https://workers.cloudflare.com)** -- static asset serving and deployment

## Project Structure

```
/
├── public/                  # Static assets (favicons, robots.txt, llms.txt)
├── src/
│   ├── assets/              # SVG images processed by Astro
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   └── SEO.astro
│   ├── i18n/                # Internationalisation
│   │   ├── ui.ts            # Translation strings (ES/EN)
│   │   └── utils.ts         # Language helpers
│   ├── layouts/
│   │   └── Layout.astro     # Main HTML shell (SEO, Header, <slot />, Footer, JSON-LD)
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # / (Spanish, default)
│   │   ├── about.astro      # /about
│   │   ├── projects.astro   # /projects
│   │   ├── contact.astro    # /contact
│   │   ├── 404.astro        # /404
│   │   └── en/              # /en/* (English variants)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── wrangler.jsonc
```

## Commands

All commands are run from the root of the project using Bun:

| Command                           | Action                                      |
| :-------------------------------- | :------------------------------------------ |
| `bun install`                     | Install dependencies                        |
| `bun run dev`                     | Start dev server at `localhost:4321`         |
| `bun run build`                   | Build static site to `./dist/`              |
| `bun run preview`                 | Preview the build locally                   |
| `bun run astro check`             | Type-check `.astro` and `.ts` files         |
| `bun run build && bunx wrangler deploy` | Build and deploy to Cloudflare Workers |

## Features

- **Static site** -- no client-side framework; the only runtime JS is a ~30-line mobile menu toggle
- **Bilingual** -- Spanish (default) and English with file-based i18n and `hreflang` alternate links
- **SEO** -- sitemap, Open Graph tags, Twitter cards, JSON-LD structured data (Person + WebSite schemas)
- **Accessible** -- skip-to-content link, `focus-visible` outlines on all interactive elements, ARIA landmarks and attributes, `sr-only` hints for external links, keyboard-navigable mobile menu with Escape support
- **Performance** -- 100% static output, lazy-loaded images, minimal CSS via Tailwind

## License

This is a personal portfolio. All rights reserved.
