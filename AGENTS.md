# AGENTS.md

Guidelines for agentic coding agents working in this repository.

## Project Overview

Personal portfolio site for Adrian Garcia (`adriangg.dev`). Built with:

- **Astro 5** (static site generation, file-based routing)
- **Tailwind CSS 4** (Vite-native plugin, `@tailwindcss/vite`)
- **TypeScript** (strict mode via `astro/tsconfigs/strict`)
- **Bun** (package manager, declared via `packageManager: bun@1.3.10`)
- **Cloudflare Workers** (static asset serving, deployed via Wrangler)

This is a purely static site with no SSR, no client-side framework (no React/Vue/Svelte), and no API routes. All components are `.astro` server-rendered templates.

---

## Commands

Use `bun run <script>` for all package.json scripts:

```bash
bun run dev        # Start local dev server at localhost:4321 (hot reload)
bun run build      # Build static site to ./dist/
bun run preview    # Serve the built ./dist/ locally for verification
bun run astro      # Run Astro CLI directly (e.g. bun run astro --help)
```

### Type Checking

```bash
bunx astro check   # Type-check all .astro files and TypeScript (runs tsc internally)
```

Run `bunx astro check` before committing to catch type errors. There is no `tsc` script in package.json.

### Deployment

```bash
bun run build && bunx wrangler deploy   # Build then deploy to Cloudflare Workers
```

The Wrangler config (`wrangler.jsonc`) serves `./dist/` as static assets with `404.html` as the fallback page.

### Testing & Linting

**No test framework is configured.** There are no test files, no `test` script, and no testing dependencies. Do not add test commands that do not exist.

**No linter or formatter is configured.** There is no ESLint, Prettier, or Biome config. Do not run `eslint`, `prettier`, or `biome` - they are not installed.

---

## Project Structure

```
/
├── astro.config.mjs       # Astro config: site URL, sitemap integration, Tailwind Vite plugin
├── tsconfig.json          # Extends astro/tsconfigs/strict; excludes dist/
├── wrangler.jsonc         # Cloudflare Workers: serves ./dist/, 404 fallback
├── package.json           # Scripts and dependencies
├── public/                # Static assets served as-is (not processed by Astro)
│   ├── favicon.ico / .svg
│   ├── robots.txt         # Allows all crawlers; references sitemap
│   └── llms.txt           # Plain-text site summary for LLM readability
└── src/
    ├── assets/            # SVG images imported by components (processed by Astro)
    ├── components/        # Reusable Astro components (PascalCase filenames)
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── SEO.astro
    │   └── ProjectCard.astro
    ├── layouts/           # Page layout wrappers (PascalCase filenames)
    │   └── Layout.astro   # Main HTML shell: SEO, Header, <slot />, Footer, JSON-LD
    ├── pages/             # File-based routing (lowercase filenames)
    │   ├── index.astro    # /
    │   ├── about.astro    # /about
    │   ├── projects.astro # /projects
    │   ├── contact.astro  # /contact
    │   └── 404.astro      # /404
    └── styles/
        └── global.css     # Single line: @import "tailwindcss";
```

---

## TypeScript

- Config extends `astro/tsconfigs/strict` -- full strict mode, no exceptions.
- Use **`interface Props`** (not `type Props`) for Astro component prop contracts:

  ```ts
  interface Props {
    title: string;
    description: string;
    image?: string;
    type?: 'website' | 'article';
  }
  ```

- Use union literal types for constrained string values: `'website' | 'article'`.
- Mark optional props with `?:`, provide defaults in destructuring.
- Do not use `any`. Do not disable strict checks with `// @ts-ignore` or `// @ts-expect-error` without a comment explaining why.
- Inline data arrays (e.g. `const navLinks = [...]`) do not need explicit type annotations; rely on inference.
- Components without external props omit the `interface Props` declaration entirely.

---

## Imports

- Use **default imports** for Astro components, layouts, and CSS:

  ```astro
  import Layout from '../layouts/Layout.astro';
  import ProjectCard from '../components/ProjectCard.astro';
  import '../styles/global.css';
  ```

- Use **named imports** for framework utilities and config helpers:

  ```js
  import { defineConfig } from 'astro/config';
  ```

- Use **relative paths** (`../components/...`). There are no path aliases (`@/`, `~/`, etc.) configured or used -- do not introduce them.
- Import ordering: layout imports first, then child component imports, then CSS side-effect imports last.

---

## File & Directory Naming

| Category           | Convention                          | Examples                              |
|--------------------|-------------------------------------|---------------------------------------|
| Pages              | `lowercase` (kebab-case if multi-word) | `index.astro`, `about.astro`, `404.astro` |
| Components         | `PascalCase`                        | `Header.astro`, `ProjectCard.astro`   |
| Layouts            | `PascalCase`                        | `Layout.astro`                        |
| Styles             | `lowercase`                         | `global.css`                          |
| Assets             | `lowercase` / `kebab-case`          | `astro.svg`, `background.svg`         |
| Config files       | `lowercase` with dots               | `astro.config.mjs`, `tsconfig.json`   |
| Variables          | `camelCase`                         | `currentPath`, `navLinks`, `fullTitle` |
| Boolean variables  | `is` prefix                         | `isActive`, `isOpen`                  |
| HTML IDs           | `kebab-case`                        | `mobile-menu`, `hero-heading`         |

---

## Component Patterns

- All components are **Astro Single-File Components** (`.astro`): frontmatter fenced in `---`, followed by the HTML template.
- Destructure props from `Astro.props` with inline defaults:

  ```astro
  ---
  const { title, description, tags = [], image } = Astro.props;
  ---
  ```

- Co-locate static data in the frontmatter as `const` arrays/objects -- do not reach for external data files unless the data genuinely warrants it.
- Use `<slot />` in layouts for child content composition.
- Use spread syntax to pass object props to child components: `<ProjectCard {...project} />`.
- Keep client-side `<script>` tags minimal. The only existing one is a mobile menu toggle (~6 lines of vanilla DOM). Prefer build-time logic over runtime JS wherever possible.

---

## Styling

- **Tailwind CSS 4** only. All styling is done through Tailwind utility classes directly on HTML elements.
- There are no CSS modules, no `<style>` blocks, no styled-components, and no custom CSS rules. Do not add them.
- Use Astro's **`class:list`** directive for conditional classes:

  ```astro
  class:list={[
    'text-sm transition-colors',
    isActive ? 'text-white font-medium' : 'text-neutral-400 hover:text-white',
  ]}
  ```

- **Design system palette** -- use these consistently:
  - Background: `neutral-950`
  - Primary text: `white`
  - Secondary text: `neutral-300`, `neutral-400`
  - Muted/subtle text: `neutral-500`, `neutral-600`
  - Accent: `purple-300`, `purple-400`, `purple-500`, `purple-600`
  - Borders / dividers: `white/10`, `white/30`
  - Surface overlays: `white/5`, `white/8`
- Responsive breakpoints: `sm:` and `lg:`.
- Interactive states: `hover:`, `focus-visible:`, `transition-colors`.

---

## Accessibility

This codebase is accessibility-conscious. Maintain these standards:

- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<dl>/<dt>/<dd>`.
- Add `aria-label`, `aria-labelledby`, `aria-current`, `aria-expanded`, `aria-controls` where appropriate.
- Use `aria-hidden="true"` on decorative SVGs and icons.
- Add `role="list"` on `<ul>` / `<ol>` elements that have `list-style: none` applied via Tailwind.
- Use the `sr-only` Tailwind class for screen-reader-only headings/labels.
- All interactive elements must have a `focus-visible:` outline style.
- Include a skip-to-content link pointing to `id="main-content"` on the `<main>` element.

---

## SEO

Every page is wrapped in `<Layout>` which accepts `title`, `description`, `image?`, and `type?`. The `<SEO>` component renders:

- `<title>`, `<meta name="description">`, canonical URL
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- Twitter/X Card tags
- Sitemap discovery link

JSON-LD structured data (Person + WebSite schemas) is rendered in `Layout.astro`. Keep it up to date when personal info changes.

---

## External Links

Always use `target="_blank" rel="noopener noreferrer"` for links that open in a new tab. Use spread syntax for conditional application:

```astro
{...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
```

---

## Comments

- Use HTML comments sparingly as **section labels** within long templates: `<!-- Hero -->`, `<!-- Skills -->`.
- Code comments in frontmatter should be brief and action-oriented: `// Add your real projects here`.
- No JSDoc, no TODO/FIXME, no commented-out code.

---

## Adding Content

- **New page**: add a `.astro` file to `src/pages/` (lowercase name), wrap content in `<Layout>`, add a nav link in `Header.astro`.
- **New component**: add a PascalCase `.astro` file to `src/components/`, define an `interface Props` if the component accepts props.
- **New project**: add an entry to the `projects` array in `src/pages/projects.astro`.
- **New skill**: add to the `skills` array in `src/pages/about.astro`.
