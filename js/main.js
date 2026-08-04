/**
 * Ibro Creations — site behavior
 * Renders portfolio & services from js/content.js, handles tabs, nav, scroll reveal, and form submission feedback.
 */

(function () {
  const C = window.SITE_CONTENT;

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Nav: scroll shadow + mobile toggle ---------- */
  const nav = document.getElementById("site-nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  /* ---------- Icons ---------- */
  const ICONS = {
    image: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.8"/><path d="M21 15l-5-5-9 9"/></svg>',
    video: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l4-2.5v9L17 14"/></svg>',
    "book-open": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 6c-1.5-1.2-4-2-8-2v14c4 0 6.5.8 8 2 1.5-1.2 4-2 8-2V4c-4 0-6.5.8-8 2z"/><path d="M12 6v14"/></svg>',
    "layout-grid": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    sparkles: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v5M12 16v5M4 12h5M15 12h5"/><path d="M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5L15 9M9 15l-2.5 2.5"/></svg>',
  };

  /* ---------- Render Work Grids ---------- */
  function cardHTML(item) {
    return `
      <article class="work-card">
        <div class="work-card-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          ${item.placeholder ? '<span class="placeholder-tag">Placeholder</span>' : ""}
        </div>
        <div class="work-card-body">
          <span class="work-card-category">${item.category}</span>
          <h3 class="work-card-title">${item.title}</h3>
          <p class="work-card-desc">${item.description}</p>
        </div>
      </article>
    `;
  }

  document.getElementById("work-grid-travel").innerHTML = C.work.tabs.travel.items.map(cardHTML).join("");
  document.getElementById("work-grid-brand").innerHTML = C.work.tabs.brand.items.map(cardHTML).join("");

  /* ---------- Render Services ---------- */
  document.getElementById("services-grid").innerHTML = C.services.items.map(
    (s) => `
      <div class="service-card reveal">
        <div class="service-icon">${ICONS[s.icon] || ""}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>
    `
  ).join("");

  /* ---------- Work Tabs ---------- */
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".work-panel");

  function activateTab(tabId) {
    tabBtns.forEach((btn) => {
      const active = btn.dataset.tab === tabId;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active);
    });
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tabId));
  }

  tabBtns.forEach((btn) =>
    btn.addEventListener("click", () => activateTab(btn.dataset.tab))
  );

  // Deep-link support: #work-travel / #work-brand jump straight to the right tab
  function handleHashTab() {
    const hash = window.location.hash;
    if (hash === "#work-travel") activateTab("travel");
    if (hash === "#work-brand") activateTab("brand");
  }
  window.addEventListener("hashchange", handleHashTab);
  handleHashTab();

  /* ---------- Scroll Reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal, .work-card, .service-card");
  revealEls.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));

  /* ---------- Contact Form (AJAX submit to Netlify Forms) ---------- */
  const form = document.getElementById("contact-form");
  const successBox = document.getElementById("form-success");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      if (response.ok) {
        successBox.classList.add("show");
        form.reset();
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      alert("Something went wrong sending your message. Please email hello@ibrocreations.online directly.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
})();
