<div align="center">

<img src="assets/patangwala-og.jpg" alt="Patangwala.in: Where Tradition Meets the Sky, with colourful Indian kites flying in a midnight blue sky" width="100%">

# Patangwala.in

### Where Tradition Meets the Sky.

Patangwala.in is a modern digital brand presence for an Indian wholesale kite business, celebrating the vibrant tradition of kite flying through a creative and professional web experience.

![HTML5](https://img.shields.io/badge/HTML5-0B1B3A?style=flat-square&logo=html5&logoColor=F28C1B)
![CSS3](https://img.shields.io/badge/CSS3-0B1B3A?style=flat-square&logo=css3&logoColor=7CC4EC)
![JavaScript](https://img.shields.io/badge/Vanilla_JavaScript-0B1B3A?style=flat-square&logo=javascript&logoColor=F28C1B)
![SVG](https://img.shields.io/badge/Inline_SVG-0B1B3A?style=flat-square&logo=svg&logoColor=7CC4EC)

[Website](https://patangwala.in/) &nbsp;|&nbsp; [Repository](https://github.com/webers-x-world/patangwala.in) &nbsp;|&nbsp; [WhatsApp](https://wa.me/918866159111) &nbsp;|&nbsp; [Call](tel:+918866159111) &nbsp;|&nbsp; [Report an issue](https://github.com/webers-x-world/patangwala.in/issues)

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
- [Custom Domain Setup](#custom-domain-setup)
- [GoDaddy DNS Configuration](#godaddy-dns-configuration)
- [GitHub Pages Configuration](#github-pages-configuration)
- [Preferred Domain and Redirects](#preferred-domain-and-redirects)
- [Verifying the Social Sharing Preview](#verifying-the-social-sharing-preview)
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
| Official website | [patangwala.in](https://patangwala.in/) |
| Canonical address | `https://patangwala.in/`. The `www` version, `https://www.patangwala.in/`, should redirect to it |
| Domain registrar | GoDaddy |
| GitHub repository | [webers-x-world/patangwala.in](https://github.com/webers-x-world/patangwala.in) (source code only, not the website address) |
| Development / preview URL | [webers-x-world.github.io/patangwala.in](https://webers-x-world.github.io/patangwala.in/), for development and preview only. It is not the official website |

`patangwala.in` is the official production domain. DNS and hosting must be configured before the domain serves the site (see [Custom Domain Setup](#custom-domain-setup)). This README does not claim that any of that is done yet.

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
├── CNAME
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
| `CNAME` | Custom domain file for GitHub Pages (`patangwala.in`). It is only used by GitHub Pages and is harmless on other hosts |
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

All page, canonical and image URLs use the official domain. The canonical URL is `https://patangwala.in/` and the social image is `https://patangwala.in/assets/patangwala-og.jpg`, an absolute HTTPS URL pointing at the actual 1200 x 630 JPEG file. These improve how the site can be discovered and previewed when shared, but they do not guarantee any search ranking.

See [Verifying the Social Sharing Preview](#verifying-the-social-sharing-preview) to test the preview and refresh cached copies.

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

This repository stores the website source code. The site is plain static files with no build step, so it can be served from any static hosting provider.

| Address | Role |
| --- | --- |
| `https://patangwala.in/` | Official production website and canonical address |
| `https://www.patangwala.in/` | Alias that should redirect to the canonical address |
| `https://github.com/webers-x-world/patangwala.in` | GitHub repository (source code), not a website address |
| `https://webers-x-world.github.io/patangwala.in/` | Development and preview URL only |

**Choosing a host**

| Option | Notes |
| --- | --- |
| Cloudflare Pages | A suitable static host for a commercial business site. Connect this repository, leave the build command empty and set the output directory to the repository root. |
| GitHub Pages | Works for development and previews. GitHub Pages has restrictions on commercial hosting, so verify GitHub's current policy before using it for the business website. It is not presented here as an approved production solution. |

DNS records depend on the host you choose. Follow your hosting provider's own instructions for the exact records.

---

## Custom Domain Setup

The same steps apply to any host:

1. **Add the domain.** Add `patangwala.in` in your hosting provider's custom domain settings, and add `www.patangwala.in` as well if the provider asks for it.
2. **Configure DNS.** Create the DNS records your provider specifies inside GoDaddy (see [GoDaddy DNS Configuration](#godaddy-dns-configuration)).
3. **Verify DNS.** Wait for the records to propagate, then use the provider's domain check. Propagation can take some time.
4. **Enable HTTPS.** Once the provider has issued the SSL certificate, turn on its HTTPS option (on GitHub Pages this is **Enforce HTTPS**). It may not be available until DNS has been verified.
5. **Test both addresses.** Open `https://patangwala.in/` and `https://www.patangwala.in/` and confirm both load over HTTPS without certificate warnings.
6. **Set one preferred domain.** Keep `https://patangwala.in/` as the canonical address and redirect the other version to it (see [Preferred Domain and Redirects](#preferred-domain-and-redirects)).

---

## GoDaddy DNS Configuration

DNS for `patangwala.in` is managed in **GoDaddy DNS Management** (open your domain in your GoDaddy account and choose its DNS settings). Nothing in this repository changes DNS, and no DNS records are claimed to be configured yet.

> **The records below are for GitHub Pages only.** Use them as an example only if GitHub Pages is selected as the hosting provider. If a different provider such as Cloudflare Pages is used, follow that provider's DNS instructions instead. The records must match the actual hosting provider.

**A records (host `@`)**

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**AAAA records (host `@`)**

| Type | Host | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**CNAME record**

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `webers-x-world.github.io` |

Notes:

- Remove or replace any existing default GoDaddy records for `@` and `www` that conflict with the new ones, such as parking records.
- Compare the values with GitHub's current custom domain documentation before saving, in case they have changed.
- Changes can take time to propagate.

---

## GitHub Pages Configuration

Only needed if GitHub Pages is the hosting target.

- The `CNAME` file in the repository root contains one line: `patangwala.in`.
- In the GitHub repository, open **Settings**, then **Pages**, and enter `patangwala.in` under **Custom domain**.
- After the DNS check passes and the certificate is issued, tick **Enforce HTTPS**.
- Do not confuse the repository URL (`https://github.com/webers-x-world/patangwala.in`) with the website address (`https://patangwala.in/`).
- Keep GitHub's commercial hosting restrictions in mind (see [Deployment](#deployment)), and consider Cloudflare Pages for the business website.

---

## Preferred Domain and Redirects

The canonical address is `https://patangwala.in/`, as set in the canonical link, `og:url`, the sitemap and the structured data. The `www` version should redirect to it so visitors and search engines see a single address.

- On GitHub Pages, with `patangwala.in` set as the custom domain and the `www` CNAME record in place, GitHub redirects between the two versions automatically.
- On other hosts, create a redirect from `www.patangwala.in` to `patangwala.in` using the provider's redirect or rules feature.

If you later decide to make `www` the canonical address, change every URL in `index.html`, `robots.txt` and `sitemap.xml` to the `www` form.

---

## Verifying the Social Sharing Preview

Once the domain is serving the site:

1. Open `https://patangwala.in/assets/patangwala-og.jpg` in a browser. The image must load directly, not a page around it.
2. View the page source and check the canonical link, Open Graph and Twitter tags all use `https://patangwala.in/`.
3. Check the structured data with the Schema.org validator or Google's Rich Results Test.
4. Test the link preview with Facebook's Sharing Debugger, and optionally LinkedIn's Post Inspector.
5. Share the link on WhatsApp. WhatsApp caches previews, so if an old preview appears, share the link with a throwaway query string such as `https://patangwala.in/?v=2`.

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
| Official website | [https://patangwala.in/](https://patangwala.in/) |
| Repository | [github.com/webers-x-world/patangwala.in](https://github.com/webers-x-world/patangwala.in) |
| Development / preview URL | [webers-x-world.github.io/patangwala.in](https://webers-x-world.github.io/patangwala.in/) (not the official website) |

---

## Developer

Made by Salik Shaikh &middot; Developer of Patangwala.in

---

<div align="center">

&copy; 2026 Patangwala.in. All rights reserved.

</div>
