"use strict";

/* DEVELOPER: business details. Leave email/address empty until confirmed; they stay hidden. */
const CONFIG = {
  phone: "+91 8866159111",
  whatsapp: "918866159111",
  email: "",
  address: "",
  whatsappMessage: "Hello Patangwala, I would like to enquire about your wholesale kite collection. Please share more details."
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");

/* Contact details: HTML ships working links; this keeps them in sync with CONFIG */
function initContact() {
  const all = (sel) => document.querySelectorAll(sel);
  const reveal = (field, text, href) => {
    const el = document.querySelector(`[data-field="${field}"]`);
    if (!el || !text) return;
    if (href) {
      const a = document.createElement("a");
      a.href = href;
      a.textContent = text;
      el.replaceChildren(a);
    } else {
      el.textContent = text;
    }
    const li = el.closest("li");
    if (li) li.hidden = false;
  };

  const tel = CONFIG.phone.replace(/[^\d+]/g, "");
  const wa = CONFIG.whatsapp.replace(/\D/g, "");
  const waUrl = wa ? "https://wa.me/" + wa + "?text=" + encodeURIComponent(CONFIG.whatsappMessage) : "";

  if (tel) all("[data-call]").forEach((el) => { el.href = "tel:" + tel; });
  if (waUrl) all("[data-wa]").forEach((el) => { el.href = waUrl; el.target = "_blank"; el.rel = "noopener"; });
  if (CONFIG.email) {
    all("[data-mail]").forEach((el) => { el.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Wholesale enquiry"); });
    reveal("email", CONFIG.email, "mailto:" + CONFIG.email);
  }
  reveal("address", CONFIG.address);
}

/* Navigation */
function initNav() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu");

  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  window.matchMedia("(min-width: 901px)").addEventListener("change", () => setOpen(false));

  const onScroll = () => nav.classList.toggle("solid", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* Scroll reveal */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + "ms";
    io.observe(el);
  });
}

/* Hero parallax: scroll and pointer */
function initParallax() {
  if (reduceMotion) return;
  const hero = document.querySelector(".hero");
  const layers = hero.querySelectorAll("[data-speed]");
  let scrollY = 0, px = 0, ticking = false;

  const render = () => {
    ticking = false;
    layers.forEach((el) => {
      const s = parseFloat(el.dataset.speed);
      el.style.transform = `translate3d(${(px * s * 60).toFixed(1)}px, ${(-scrollY * s).toFixed(1)}px, 0)`;
    });
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(render); } };

  window.addEventListener("scroll", () => {
    if (window.scrollY < hero.offsetHeight) { scrollY = window.scrollY; request(); }
  }, { passive: true });

  if (window.matchMedia("(hover: hover)").matches) {
    hero.addEventListener("pointermove", (e) => {
      px = e.clientX / window.innerWidth - 0.5;
      request();
    });
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
initContact();
initNav();
initReveal();
initParallax();
