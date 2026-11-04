<div align="center">

<img src="assets/patangwala-og.jpg" alt="Patangwala.in: Where Tradition Meets the Sky, with colourful Indian kites flying in a midnight blue sky" width="100%">

# Patangwala.in

### Where Tradition Meets the Sky.

Patangwala.in is a modern digital brand presence for an Indian wholesale kite business, celebrating the vibrant tradition of kite flying through a creative and professional web experience.

![HTML5](https://img.shields.io/badge/HTML5-0B1B3A?style=flat-square&logo=html5&logoColor=F28C1B)
![CSS3](https://img.shields.io/badge/CSS3-0B1B3A?style=flat-square&logo=css3&logoColor=7CC4EC)
![JavaScript](https://img.shields.io/badge/Vanilla_JavaScript-0B1B3A?style=flat-square&logo=javascript&logoColor=F28C1B)

[Visit the website](https://patangwala.in/) &nbsp;|&nbsp; [WhatsApp](https://wa.me/918866159111) &nbsp;|&nbsp; [Report an issue](https://github.com/webers-x-world/patangwala.in/issues)

</div>

---

## Overview

This repository holds the source code of the **Patangwala.in brand welcome and landing page**. It introduces the brand, presents proposed kite categories and gives wholesale buyers a direct way to get in touch.

> **Project status:** this is a brand welcome and landing page. It is **not** a completed e-commerce platform. It has no shopping cart, checkout, payment gateway, inventory management or customer accounts.

The page is built with plain HTML, CSS and JavaScript, with no frameworks, no backend and no build step, so it can be served from any static host.

---

## Features

| Area | What it includes |
| --- | --- |
| Design | Premium responsive layout for desktop, tablet and mobile |
| Graphics | Custom inline SVG kite illustrations and icons |
| Hero | Animated hero section with layered clouds, flying kites and parallax movement |
| Navigation | Smooth-scrolling menu with an animated mobile hamburger navigation |
| Content | Brand introduction, kite collection showcase and wholesale enquiry section |
| Contact | WhatsApp direct messaging with a pre-filled enquiry, and direct phone calling |
| SEO | SEO-friendly metadata, canonical URL, structured data, `robots.txt` and `sitemap.xml` |
| Social sharing | Open Graph and Twitter Card metadata with custom Open Graph artwork |
| Branding | Custom kite favicon |
| Accessibility | Semantic HTML, keyboard focus styles, Escape key closes the mobile menu, `prefers-reduced-motion` support and accessible labels on contact links |

The collection categories shown on the page are proposed display categories, not confirmed inventory.

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
| `assets/patangwala-og.jpg` | 1200 x 630 social sharing image |

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

**4. Modify the content**

Edit the text and sections in `index.html`, and the colours, spacing and typography in `style.css`. Colours and fonts are defined as CSS variables at the top of the file.

**5. Update the contact configuration**

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

If you change the phone number or WhatsApp number, also update the matching links in `index.html` and the `telephone` values in its JSON-LD block, so the page works without JavaScript and the structured data stays consistent.

---

## SEO Implementation

The project includes:

- SEO title and meta description
- Canonical URL
- Meta robots tag (`index, follow`)
- Open Graph metadata
- Twitter Card metadata
- JSON-LD structured data (Organization and WebSite)
- `robots.txt`
- `sitemap.xml`
- Custom social sharing image (`assets/patangwala-og.jpg`)
- Favicon (`assets/favicon.svg`)

These improve how the site can be discovered and previewed when shared, but they do not guarantee any search ranking.

---

## Deployment

This repository stores the website source code. The site is plain static files, so it can be deployed to a static hosting provider such as **Cloudflare Pages**:

1. Create a new project on the hosting provider and connect this repository.
2. Leave the build command empty and set the output directory to the repository root.
3. Add `patangwala.in` as a custom domain.
4. Create the DNS records the provider asks for. Custom domain setup depends on the correct DNS configuration.

GitHub Pages is not recommended for running this commercial business website, because of GitHub's acceptable-use restrictions for Pages.

---

## Contact

| | |
| --- | --- |
| Phone | [+91 8866159111](tel:+918866159111) |
| WhatsApp | [https://wa.me/918866159111](https://wa.me/918866159111) |
| Website | [https://patangwala.in/](https://patangwala.in/) |

---

## Developer

Made by Salik Shaikh &middot; Developer of Patangwala.in

---

<div align="center">

&copy; 2026 Patangwala.in. All rights reserved.

</div>
