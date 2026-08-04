# Ibro Creations

Portfolio website for Ibro Creations — an AI-powered visual storytelling studio serving travel companies, DMCs, tour operators, and select lifestyle brands.

## Tech

Plain static site: HTML, CSS, and vanilla JavaScript. No build step, no framework, no dependencies. Deploys to Netlify as-is (drag-and-drop or Git-connected).

- `index.html` — single-page site with anchor navigation
- `css/styles.css` — all styling (palette, type, layout, animation)
- `js/content.js` — **all editable copy and portfolio data** lives here as a plain JS object
- `js/main.js` — renders content.js into the page, handles tabs, nav, scroll reveal, and the contact form
- `assets/img/` — logo and placeholder imagery (portfolio pieces are SVG placeholders, clearly marked, ready to be swapped for real work)
- Contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — no backend code needed

## Editing content

Almost everything text- and portfolio-related can be changed in `js/content.js` without touching HTML or CSS: hero copy, bio, skills, services, and every portfolio card (title, category, description, image path) for both the Travel & DMC and Brand & UGC tabs.

To swap in real portfolio images, drop files into `assets/img/portfolio/` and update the `image` path for the relevant item in `js/content.js`. Remove `placeholder: true` once a real image is in place to remove the "Placeholder" badge on the card.

## Running locally

No build tooling is required — open `index.html` directly, or serve the folder with any static server, e.g.:

```bash
npx serve .
```

Or with the Netlify CLI for full platform emulation (forms included):

```bash
netlify dev
```

## Deploying

This repo is deploy-ready for Netlify: connect it as a Git site, or drag the folder into Netlify's manual deploy UI. `netlify.toml` sets the publish directory to the project root and adds baseline security headers.
