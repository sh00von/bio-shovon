# bio-shovon — Personal Link-in-Bio Page | Linktree Alternative with HTML, CSS & Tailwind

A lightweight, self-hosted **link-in-bio page** — a free Linktree alternative built with plain HTML, CSS, and Tailwind CSS. One page that collects all of your important links (social profiles, portfolio, projects, contact) into a single shareable URL, perfect for Instagram, TikTok, X, and other social media bios.

Unlike hosted link-in-bio services, this page is fully yours: no monthly fees, no platform lock-in, and it even works as an installable Progressive Web App (PWA).

## Features

- Clean, mobile-first link hub design — built for social bio traffic
- Styled with Tailwind CSS utilities plus a custom stylesheet for fine-grained control
- PWA-ready: includes a web app `manifest.json` and a service worker (`sw.js`) for installability and caching
- Fast by default — static files only, no framework or build server required
- Easy to customize: edit one HTML file to swap in your own name, photo, and links

## Tech Stack

- HTML5
- CSS3 + Tailwind CSS (`input.css` source, compiled `style.css`)
- Vanilla JavaScript service worker for PWA support

## Getting Started

Clone the repository and open the page — no build step is needed to view it:

```bash
git clone https://github.com/sh00von/bio-shovon.git
cd bio-shovon
# Open index.html in your browser, or serve it:
npx serve .
```

To make it yours, edit `index.html` and replace the profile details and link URLs with your own, then deploy the folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

If you change Tailwind utilities in the markup, rebuild the stylesheet from `input.css` with the Tailwind CSS CLI.

## Project Structure

```
bio-shovon/
├── index.html     # The link-in-bio page
├── input.css      # Tailwind CSS source
├── style.css      # Compiled/custom stylesheet
├── manifest.json  # PWA web app manifest
└── sw.js          # Service worker
```

---

⭐ Found this useful as a free Linktree alternative? Give it a star, fork it, and make it your own. Contributions and improvements are welcome!
