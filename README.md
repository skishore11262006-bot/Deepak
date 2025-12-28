# Portfolio Website

This repository contains a customized portfolio for Kishore, including a printable poster and a simple SVG logo.

Files in this repo:

- `index.html` — main portfolio page (customized for Kishore)
- `styles.css` — themed styles and responsive layout
- `script.js` — small interactions (nav toggle, form demo, year)
- `assets/logo.svg` — vector logo suitable for web and print
- `poster.svg` — printable A3-style poster showcasing Kishore and projects

How to view locally:

1. Open `index.html` in your browser (double-click or serve with a static server).

Quick serve (Python 3):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Printing the poster:

- Open `poster.svg` in a browser or an editor that supports SVG and export as PDF for printing.

Deploy:

- GitHub Pages: push to `main`; a GitHub Actions workflow is included at `.github/workflows/pages.yml` to deploy automatically.
- Netlify: drag-and-drop the repository/build output or connect the GitHub repo for continuous deploys.

Next customization I can do:

- Hook the contact form to Formspree, Netlify Forms, or a server endpoint.
- Replace placeholder project links with real URLs and screenshots.
- Add custom fonts or analytics.
# Deepak
I build a website 
