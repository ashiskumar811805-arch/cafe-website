# Aurora Café Website

A modern, responsive React + Vite cafe landing page designed for mobile, tablet, and desktop devices.

## Project structure

- `src/App.jsx` — main page layout and section content
- `src/styles.css` — all design styling and responsive behavior
- `src/config/siteConfig.js` — centralized settings for easy editing
- `src/main.jsx` — app entry file
- `index.html` — HTML entry page
- `package.json` — scripts and dependencies
- `vite.config.js` — Vite configuration

## How to edit the website

### 1. Main configuration file
Open `src/config/siteConfig.js`.

This file controls most of the website content, including:

- `brand`: café name, tagline, contact details
- `theme`: colors used across the site
- `navLinks`: navigation menu items
- `hero`: headline, description, CTA buttons, statistics
- `about`: story section content
- `menu`: menu items, prices, descriptions, tags
- `features`: experience section entries
- `gallery`: image URLs for gallery section
- `testimonials`: visitor reviews
- `visit`: address, hours, reservation CTA
- `socialLinks`: footer social links
- `footer`: footer note

### 2. Styling
Edit `src/styles.css` to update:

- colors
- spacing
- typography
- section backgrounds
- mobile responsiveness

### 3. Page layout
Edit `src/App.jsx` if you want to:

- add new sections
- rearrange sections
- change component structure

### 4. Run locally
```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

### 5. Build for production
```bash
npm run build
```

## Notes

- The site is responsive and optimized for mobile, tablet, and desktop.
- Image URLs are currently loaded from Unsplash for a polished demo look.
- You can replace any text or image by editing the config file.
