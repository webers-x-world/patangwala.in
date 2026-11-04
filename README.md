<div align="center">

<img src="assets/patangwala-og.jpg" alt="Patangwala.in: Where Tradition Meets the Sky, with colourful Indian kites flying in a midnight blue sky" width="100%">

# Patangwala.in

### Where Tradition Meets the Sky.

Patangwala.in is a modern digital brand presence for an Indian wholesale kite business, celebrating the vibrant tradition of kite flying through a creative and professional web experience.

![HTML5](https://img.shields.io/badge/HTML5-0B1B3A?style=flat-square&logo=html5&logoColor=F28C1B)
![CSS3](https://img.shields.io/badge/CSS3-0B1B3A?style=flat-square&logo=css3&logoColor=7CC4EC)
![JavaScript](https://img.shields.io/badge/Vanilla_JavaScript-0B1B3A?style=flat-square&logo=javascript&logoColor=F28C1B)
![SVG](https://img.shields.io/badge/Inline_SVG-0B1B3A?style=flat-square&logo=svg&logoColor=7CC4EC)

[Live preview](https://webers-x-world.github.io/patangwala.in/) &nbsp;|&nbsp; [WhatsApp](https://wa.me/918866159111) &nbsp;|&nbsp; [Call](tel:+918866159111) &nbsp;|&nbsp; [Report an issue](https://github.com/webers-x-world/patangwala.in/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Page Sections](#page-sections)
- [Design System](#design-system)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Local Development](#installation-and-local-development)
- [Customising the Content](#customising-the-content)
- [SEO and Social Sharing](#seo-and-social-sharing)
- [Performance and Accessibility](#performance-and-accessibility)
- [Deployment](#deployment)
- [Switching to the Production Domain](#switching-to-the-production-domain)
- [Information Still Needed](#information-still-needed)
- [Contact](#contact)
- [Developer](#developer)

---

## Overview

This repository holds the source code of the **Patangwala.in brand welcome and landing page**. It introduces the brand, presents proposed kite categories and gives wholesale buyers a direct way to get in touch by WhatsApp or phone.

> **Project status:** this is a brand welcome and landing page. It is **not** a completed e-commerce platform. It has no shopping cart, checkout, payment gateway, inventory management or customer accounts.

The site is plain HTML, CSS and JavaScript with no frameworks, no backend and no build step, so it can be served from any static host.

| | |
| --- | --- |
| Brand | Patangwala.in |
| Tagline | Where Tradition Meets the Sky. |
| Business type | Indian wholesale kite business |
| Live preview | [webers-x-world.github.io/patangwala.in](https://webers-x-world.github.io/patangwala.in/) |
| Production domain | `patangwala.in`, to be configured separately on a suitable static host (see [Deployment](#deployment)) |

---

## Features

**Design and experience**

- Premium responsive layout designed for desktop, tablet and mobile
- Custom inline SVG kite illustrations, clouds and icons
- Animated hero section with layered clouds, kites at different depths, flying strings and parallax movement
- Subtle scroll reveal animations and card hover effects
- Smooth-scrolling navigation with an animated mobile hamburger menu

**Content and conversion**

- Brand introduction, kite collection showcase and wholesale enquiry section
- WhatsApp direct messaging with a pre-filled enquiry message
- Direct phone calling through a `tel:` link
- Footer with quick navigation and contact details

**Technical**

- SEO-friendly metadata, canonical URL and JSON-LD structured data
- Open Graph and Twitter Card metadata with custom Open Graph artwork
- Custom kite favicon
- `robots.txt` and `sitemap.xml`
- Accessibility considerations (see [Performance and Accessibility](#performance-and-accessibility))

---

## Page Sections

| Section | Anchor | Purpose |
| --- | --- | --- |
| Hero | `#home` | Brand name, headline and the two main calls to action |
| About | `#about` | Brand introduction: "More Than Just Kites." |
| Our Collection | `#collection` | Four proposed kite categories shown as illustrated cards |
| Wholesale | `#wholesale` | Wholesale enquiry with WhatsApp and call buttons |
| Contact (footer) | `#contact` | Navigation, enquiry button and contact details |

The collection categories are proposed display categories, not confirmed inventory.

---

## Design System

The design tokens are CSS variables at the top of `style.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--navy` | `#0B1B3A` | Midnight navy backgrounds and text |
| `--ivory` | `#FBF6EA` | Warm off-white backgrounds |
| `--saffron` | `#F28C1B` | Primary accent and main buttons |
| `--sky` | `#7CC4EC` | Secondary accent |
| `--red` | `#E5484D` | Small accent in kite illustrations |

| Role | Typeface |
| --- | --- |
| Display headings | Fraunces |
| Body text | Manrope |

Kites are defined once as an SVG symbol in `index.html` and recoloured per use through the `--a`, `--b`, `--c` and `--d` custom properties.

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- SVG graphics
- Responsive web design
- SEO metadata
- Open Graph
- JSON-LD structured data

The site loads the Fraunces and Manrope typefaces from Google Fonts. There are no other external libraries or scripts.

---

## Project Structure

```text
patangwala.in/
│
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
│
├── assets/
│   ├── favicon.svg
│   └── patangwala-og.jpg
│
└── README.md
```

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, SEO metadata, social metadata and JSON-LD |
| `style.css` | Design tokens, layout, animations and responsive rules |
| `script.js` | Contact configuration, mobile menu, scroll reveal and hero parallax |
| `robots.txt` | Allows public crawling and points to the sitemap |
| `sitemap.xml` | Lists the site's public URL |
| `assets/favicon.svg` | Kite favicon |
| `assets/patangwala-og.jpg` | 1200 x 630 JPEG used for social sharing previews |

---

## Installation and Local Development

**1. Clone the repository**

```bash
git clone https://github.com/webers-x-world/patangwala.in.git
```

**2. Open the project folder**

```bash
cd patangwala.in
```

**3. Run the site locally**

Open `index.html` directly in your browser, or use the **Live Server** extension in VS Code: open the folder, right-click `index.html` and choose **Open with Live Server**.

**4. Make changes and publish them**

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

If your default branch has a different name, use that name instead of `main`.

---

## Customising the Content

**Text and sections**

Edit the copy in `index.html`. The collection cards sit under the comment `EDIT: card content below is placeholder and not confirmed inventory.` Each card is one `<article class="card ...">` with a title and a short description. Remove the note under the cards once the categories are confirmed.

**Colours, fonts and spacing**

Change the CSS variables at the top of `style.css`.

**Contact configuration**

Business details live in the `CONFIG` object at the top of `script.js`:

```js
const CONFIG = {
  phone: "+91 8866159111",
  whatsapp: "918866159111",
  email: "",
  address: "",
  whatsappMessage: "Hello Patangwala, I would like to enquire about your wholesale kite collection. Please share more details."
};
```

| Field | Notes |
| --- | --- |
| `phone` | Used for the `tel:` calling links |
| `whatsapp` | Digits only, with country code, used to build the `wa.me` link |
| `email` | Empty for now. When set, the email row appears in the footer |
| `address` | Empty for now. When set, the address row appears in the footer |
| `whatsappMessage` | The pre-filled WhatsApp enquiry text |

The phone and WhatsApp links are also written directly in `index.html` so they work without JavaScript. If you change either number, update those links and the `telephone` values in the JSON-LD block as well.

---

## SEO and Social Sharing

The project includes:

| Item | Where |
| --- | --- |
| SEO title and meta description | `index.html` |
| Canonical URL | `index.html` |
| Meta robots tag (`index, follow`) | `index.html` |
| Open Graph metadata | `index.html` |
| Twitter Card metadata | `index.html` |
| JSON-LD structured data (Organization and WebSite) | `index.html` |
| Custom social sharing image | `assets/patangwala-og.jpg` |
| Favicon | `assets/favicon.svg` |
| Crawling rules | `robots.txt` |
| Sitemap | `sitemap.xml` |

The social image must be an absolute HTTPS URL pointing at the actual JPEG file, at 1200 x 630 pixels. These improve how the site can be discovered and previewed when shared, but they do not guarantee any search ranking.

**Link preview not updating?**

WhatsApp and Facebook cache link previews. If you shared the link before the image was online, add a throwaway query string (for example `?v=2`) to the URL you share, or refresh Facebook's copy with its Sharing Debugger.

---

## Performance and Accessibility

**Performance**

- No frameworks or libraries, and no build step
- Illustrations and icons are inline SVG, so there are no image requests for artwork
- Google Fonts stylesheet loads without blocking page rendering
- Script loaded with `defer`
- Parallax updates are batched with `requestAnimationFrame`, and scroll reveal uses `IntersectionObserver`

**Accessibility**

- Semantic HTML5 landmarks and a logical heading order
- Visible keyboard focus styles
- Mobile menu uses `aria-expanded` and closes with the Escape key
- Decorative SVGs are hidden from assistive technology, and informative ones have text alternatives
- Contact links have descriptive labels, and links that open a new tab say so
- Animations are disabled or minimised when the visitor has `prefers-reduced-motion` enabled

---

## Deployment

This repository stores the website source code. The site is plain static files, so it can be served from a static hosting provider.

**Current preview:** the repository is published through GitHub Pages at <https://webers-x-world.github.io/patangwala.in/>. Treat this as a preview link. GitHub Pages is not recommended for running a commercial business website, because of GitHub's acceptable-use restrictions for Pages.

**Production:** use a suitable static host such as **Cloudflare Pages**:

1. Create a new project on the hosting provider and connect this repository.
2. Leave the build command empty and set the output directory to the repository root.
3. Add `patangwala.in` as a custom domain.
4. Create the DNS records the provider asks for. Custom domain setup depends on the correct DNS configuration.

---

## Switching to the Production Domain

When the site goes live on `patangwala.in`, replace the preview address `https://webers-x-world.github.io/patangwala.in/` with `https://patangwala.in/` in these places:

| File | What to update |
| --- | --- |
| `index.html` | Canonical link, `og:url`, `og:image`, `og:image:secure_url`, `twitter:image` |
| `index.html` | JSON-LD: Organization and WebSite `url`, both `@id` values, and the Organization `image` |
| `robots.txt` | The `Sitemap:` line |
| `sitemap.xml` | The `<loc>` URL |

After switching, confirm that `https://patangwala.in/assets/patangwala-og.jpg` opens in a browser before sharing the link.

---

## Information Still Needed

The following details have not been provided and are intentionally not shown on the site:

- Business email address
- Business address
- Confirmed product categories and inventory

---

## Contact

| | |
| --- | --- |
| Phone | [+91 8866159111](tel:+918866159111) |
| WhatsApp | [https://wa.me/918866159111](https://wa.me/918866159111) |
| Live preview | [https://webers-x-world.github.io/patangwala.in/](https://webers-x-world.github.io/patangwala.in/) |
| Production domain | `patangwala.in` (hosting to be configured) |

---

## Developer

Made by Salik Shaikh &middot; Developer of Patangwala.in

---

<div align="center">

&copy; 2026 Patangwala.in. All rights reserved.

</div>
