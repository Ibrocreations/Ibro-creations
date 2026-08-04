# AGENTS.md

Guidance for AI agents working in this repository.

## What this is

A static marketing/portfolio site for Ibro Creations, an AI-visual-content studio. Single HTML page (`index.html`) with anchor-based navigation, styled with plain CSS, behavior in vanilla JS. No framework, no bundler, no package.json dependencies — this is intentional, keeping the project trivially deployable and editable by a non-developer.

## Architecture

- `index.html` — page structure and static sections (nav, hero, intro, work tabs shell, services shell, approach/about, contact form, footer). Portfolio cards and service cards are NOT hardcoded here — they're injected by `js/main.js` from `js/content.js`.
- `js/content.js` — the single source of truth for editable copy: brand info, nav labels, hero text, portfolio items (split into `work.tabs.travel` and `work.tabs.brand`), services list, about copy, contact copy. Attached to `window.SITE_CONTENT`.
- `js/main.js` — reads `window.SITE_CONTENT`, renders the two portfolio grids and the services grid, wires up the Travel/Brand tab switcher, mobile nav toggle, scroll-triggered reveal animations (IntersectionObserver), and submits the contact form via fetch to Netlify Forms.
- `css/styles.css` — all styling. CSS custom properties at the top (`:root`) define the palette, type stack, spacing scale, and radii — change brand colors/fonts there rather than hunting through selectors.
- `assets/img/logo.png` — the provided brand logo, used in nav and footer (footer version is inverted via CSS filter since the background is dark).
- `assets/img/hero.svg` and `assets/img/portfolio/*.svg` — generated placeholder visuals (gradient + label), standing in for real photography/video until the client supplies final assets.
- `netlify.toml` — sets publish directory to repo root, adds basic security headers.

## Conventions

- Content and layout are deliberately decoupled: any copy or portfolio change should go in `js/content.js`, not `index.html` or `main.js`, unless adding a new section.
- Portfolio items carry a `placeholder: true` flag; cards render a "Placeholder" badge when set. Remove the flag when a real image replaces the SVG placeholder.
- Palette and type follow the brand guidelines: Deep Terracotta (#A04F2B) as primary accent, Cormorant Garamond for headings, Inter for body — see CSS variables in `css/styles.css`.
- Netlify Forms handles the contact form (`data-netlify="true"` on the `<form>`, honeypot field for spam). No serverless function or database is used — this form is presentation-only and doesn't need custom backend handling.
- Motion is intentionally subtle (300–500ms fades/slides) per brand guidance — avoid adding flashy animation.

## Non-obvious decisions

- Chosen as a static HTML/CSS/JS site rather than a JS framework template because the brief calls for extremely easy, non-technical content editing later — a plain data object in `content.js` is the simplest thing a non-developer (or future agent) can safely edit without breaking layout.
- Portfolio and service images are SVGs generated as colored placeholders rather than stock photography, since real client visuals weren't provided — this keeps placeholder status visually obvious and avoids implying finished work.
