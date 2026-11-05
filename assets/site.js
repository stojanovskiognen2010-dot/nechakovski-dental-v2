/* Shared chrome, language switching and content hydration.
   Loads after i18n.js. Each page may define window.PAGE_RENDER(t, lang). */

(function () {
  "use strict";

  var ICONS = {
    arrow: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    arrow16: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>',
    phone12: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>',
    phone18: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    pin: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    /* One mark per service category. Line drawings at 24, stroked in
       currentColor so they take the gold from the card they sit in. They are
       a visual language for the six groups, nothing more — every word of what
       the practice actually does still comes from i18n.js. */
    svcTooth: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.2c-2.3 0-3 1.1-4.7 1.1S4 3.9 4 5.6c0 1.7.6 3.1 1.1 4.9.4 1.5.5 3.3.8 4.7.2 1.2.6 2.1 1.4 2.1.9 0 1.2-1.2 1.4-2.5.2-1.2.4-2.6.8-2.6s.6 1.4.8 2.6c.2 1.3.5 2.5 1.4 2.5.8 0 1.2-.9 1.4-2.1.3-1.4.4-3.2.8-4.7.5-1.8 1.1-3.2 1.1-4.9 0-1.7-.8-1.3-2.3-1.3S14.3 3.2 12 3.2z"/></svg>',
    svcCrown: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.6 9.4c-.4-1.3-.6-2.3-.6-3.2 0-1.7.8-1.3 2.3-1.3S9.7 3.8 12 3.8s3 1.1 4.7 1.1 2.3-.4 2.3 1.3c0 .9-.2 1.9-.6 3.2"/><path d="M4.6 9.4h14.8"/><path d="M5.6 12.2c.2 1.2.3 2.4.5 3.4.2 1.2.6 2.1 1.4 2.1.9 0 1.2-1.2 1.4-2.5.2-1.2.4-2.6.8-2.6s.6 1.4.8 2.6c.2 1.3.5 2.5 1.4 2.5.8 0 1.2-.9 1.4-2.1.2-1 .3-2.2.5-3.4"/></svg>',
    svcChild: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5.4c-1.8 0-2.4.9-3.7.9S6 5.9 6 7.2c0 1.4.5 2.4.9 3.8.3 1.2.4 2.6.6 3.7.2.9.5 1.6 1.1 1.6.7 0 .9-.9 1.1-2 .2-.9.3-2 .6-2s.4 1.1.6 2c.2 1.1.4 2 1.1 2 .6 0 .9-.7 1.1-1.6.2-1.1.3-2.5.6-3.7.4-1.4.9-2.4.9-3.8 0-1.3-.6-.9-1.8-.9S13.8 5.4 12 5.4z"/><path d="M19.2 5.6l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z"/></svg>',
    svcGum: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14.5c1.5 0 1.8-2.2 3-2.2s1.5 2.2 3 2.2 1.8-2.2 3-2.2 1.5 2.2 3 2.2 1.8-2.2 3-2.2 1.5 2.2 3 2.2"/><path d="M6 12.3V8.6M12 12.3V7.8M18 12.3V8.6"/><path d="M3 18.6c1.5 0 1.8-1.4 3-1.4s1.5 1.4 3 1.4 1.8-1.4 3-1.4 1.5 1.4 3 1.4 1.8-1.4 3-1.4 1.5 1.4 3 1.4"/></svg>',
    svcLaser: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.2 3.2l9.6 9.6"/><path d="M14.9 14.9l1.6 1.6"/><circle cx="13.8" cy="13.8" r="1.5"/><path d="M20.8 9.6h-3M19.4 5.3l-2.1 2.1M15.1 3.9v3"/><path d="M9.2 17.4l-2 2M12.6 19.1l-1 2M5.6 15.1l-2.4.8"/></svg>',
    svcScan: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8V5.4A1.4 1.4 0 0 1 4.4 4H7M17 4h2.6A1.4 1.4 0 0 1 21 5.4V8M21 16v2.6a1.4 1.4 0 0 1-1.4 1.4H17M7 20H4.4A1.4 1.4 0 0 1 3 18.6V16"/><path d="M12 7.6c-1.3 0-1.7.7-2.7.7S7.8 7.7 7.8 8.7c0 1 .4 1.8.7 2.8.2.9.3 1.9.4 2.7.1.7.4 1.2.8 1.2.5 0 .7-.7.8-1.4.1-.7.2-1.5.4-1.5s.3.8.4 1.5c.1.7.3 1.4.8 1.4.5 0 .7-.5.8-1.2.2-.8.3-1.8.4-2.7.3-1 .7-1.8.7-2.8 0-1-.4-.7-1.3-.7S13.3 7.6 12 7.6z"/></svg>',
    check40: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>'
  };

  /* The site is one page you scroll — the practice asked for a feed rather
     than a menu to click through on a phone. These are sections of index.html,
     so from booking.html they need the filename in front of the hash. */
  var NAV = [
    { hash: "pocetna", key: "home" },
    { hash: "uslugi", key: "services" },
    { hash: "za-nas", key: "about" },
    { hash: "vesti", key: "news" },
    { hash: "kontakt", key: "contact" }
  ];

  function tel(number) {
    return "tel:+389" + String(number).replace(/\s/g, "").replace(/^0/, "");
  }

  function onIndex() {
    return currentPage === "index.html" || currentPage === "";
  }

  /* booking.html is still its own page, so links out of it need the filename */
  function navHref(hash) {
    return (onIndex() ? "" : "index.html") + "#" + hash;
  }

  function closeMenu(panel, toggle) {
    panel.classList.remove("open");
    toggle.innerHTML = ICONS.menu;
    toggle.setAttribute("aria-expanded", "false");
  }

  function pick(dict, path) {
    return path.split(".").reduce(function (o, k) {
      return o == null ? undefined : o[k];
    }, dict);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------------------------------------------------------------- state */

  var STORE = "lang";
  var lang = "mk";
  try {
    var saved = localStorage.getItem(STORE);
    if (saved && window.I18N[saved]) lang = saved;
  } catch (e) { /* private mode */ }

  var currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (currentPage === "") currentPage = "index.html";

  /* --------------------------------------------------------------- chrome */

  function buildHeader(t) {
    var header = el("header", "site-header");

    var bar = el("div", "wrap header-bar");

    var brand = el("a", "brand");
    brand.href = navHref("pocetna");
    /* the practice's own mark, masked so it takes the colour around it */
    brand.appendChild(el("span", "brand-mark"));
    var brandText = el("span", "brand-text");
    brandText.appendChild(el("span", "brand-name", "Д-⁠р Нечаковски"));
    brandText.appendChild(el("span", "brand-sub", "Стоматолошка ординација"));
    brand.appendChild(brandText);
    bar.appendChild(brand);

    var nav = el("nav", "nav-desktop");
    NAV.forEach(function (item) {
      var a = el("a", null, t.nav[item.key]);
      a.href = navHref(item.hash);
      a.dataset.section = item.hash;
      nav.appendChild(a);
    });
    nav.appendChild(buildLangSwitch());
    var book = el("a", "nav-book", t.nav.book);
    book.href = "booking.html";
    nav.appendChild(book);
    bar.appendChild(nav);

    var mob = el("div", "header-mobile");
    mob.appendChild(buildLangSwitch());
    var toggle = el("button", "menu-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = ICONS.menu;
    mob.appendChild(toggle);
    bar.appendChild(mob);

    header.appendChild(bar);

    var panel = el("nav", "nav-mobile");
    NAV.forEach(function (item) {
      var a = el("a", "m-link", t.nav[item.key]);
      a.href = navHref(item.hash);
      a.dataset.section = item.hash;
      /* An in-page jump does not reload, so the panel has to close itself —
         but hiding the panel in the same handler cancels the browser's own
         scroll to the anchor, so do the scrolling here instead. */
      a.addEventListener("click", function (ev) {
        var target = onIndex() ? document.getElementById(item.hash) : null;
        closeMenu(panel, toggle);
        if (!target) return;
        ev.preventDefault();
        history.replaceState(null, "", "#" + item.hash);
        target.scrollIntoView();           // honours scroll-padding-top
      });
      panel.appendChild(a);
    });
    var mbook = el("a", "m-book", t.nav.book);
    mbook.href = "booking.html";
    panel.appendChild(mbook);
    header.appendChild(panel);

    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.innerHTML = open ? ICONS.close : ICONS.menu;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    return header;
  }

  function buildLangSwitch() {
    var box = el("div", "lang");
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", "Language");
    window.LANGS.forEach(function (l) {
      var b = el("button", null, l.label);
      b.type = "button";
      b.lang = l.code;
      b.setAttribute("aria-pressed", l.code === lang ? "true" : "false");
      b.addEventListener("click", function () { setLang(l.code); });
      box.appendChild(b);
    });
    return box;
  }

  function buildFooter(t) {
    var c = window.CLINIC;
    var footer = el("footer", "site-footer");

    var grid = el("div", "wrap footer-grid");

    var col1 = el("div");
    var fBrand = el("div", "f-brand");
    fBrand.appendChild(el("span", "brand-mark"));
    fBrand.appendChild(el("p", "f-name", t.clinic));
    col1.appendChild(fBrand);
    col1.appendChild(el("span", "gold-rule"));
    grid.appendChild(col1);

    var col2 = el("div", "f-col");
    col2.appendChild(el("p", null, c.address));
    var mail = el("a", null, c.email);
    mail.href = "mailto:" + c.email;
    col2.appendChild(mail);
    c.phones.forEach(function (p) {
      var a = el("a", "phone");
      a.href = tel(p);
      a.innerHTML = ICONS.phone12;
      a.appendChild(document.createTextNode(" " + p));
      col2.appendChild(a);
    });
    grid.appendChild(col2);

    var col3 = el("div", "f-col f-hours");
    col3.appendChild(el("p", "eyebrow", t.hours));
    col3.appendChild(el("p", null, t.hoursText));
    col3.appendChild(el("p", null, t.closedWeekend));
    grid.appendChild(col3);

    footer.appendChild(grid);
    footer.appendChild(el("p", "copyright",
      "© " + new Date().getFullYear() + " " + t.clinic + ". " + t.footer));
    return footer;
  }

  /* ------------------------------------------------------------- hydrate */

  function applyText(t) {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var v = pick(t, node.getAttribute("data-i18n"));
      if (typeof v === "string") node.textContent = v;
    });

    /* Headings built as "plain text" + gold <em> accent */
    document.querySelectorAll("[data-i18n-pair]").forEach(function (node) {
      var parts = node.getAttribute("data-i18n-pair").split("|");
      var head = pick(t, parts[0]);
      var accent = pick(t, parts[1]);
      node.textContent = "";
      if (head) node.appendChild(document.createTextNode(head + " "));
      if (accent) node.appendChild(el("em", null, accent));
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (node) {
      node.getAttribute("data-i18n-attr").split(";").forEach(function (pairStr) {
        var bits = pairStr.split(":");
        var v = pick(t, bits[1]);
        if (typeof v === "string") node.setAttribute(bits[0], v);
      });
    });
  }

  function applyMeta(t) {
    var titleKey = document.documentElement.getAttribute("data-title-key");
    var title = t.metaTitle;
    if (titleKey) {
      var part = pick(t, titleKey);
      if (part) title = part + " · " + t.clinic;
    }
    /* the word joiner that keeps "Д-р" whole on screen would show as a gap in
       the browser tab, so it never reaches the title */
    document.title = title.replace(/⁠/g, "");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.metaDesc);
  }

  function render() {
    var t = window.I18N[lang];

    document.documentElement.lang = t.htmlLang;

    var headerSlot = document.getElementById("site-header");
    if (headerSlot) headerSlot.replaceChildren(buildHeader(t));

    var footerSlot = document.getElementById("site-footer");
    if (footerSlot) footerSlot.replaceChildren(buildFooter(t));

    applyText(t);
    applyMeta(t);

    if (typeof window.PAGE_RENDER === "function") window.PAGE_RENDER(t, lang);

    watchSections();

    /* feed.js re-reads the page from here: everything above replaces whole
       subtrees, so the scroll reveals have to be re-attached each time */
    document.dispatchEvent(new CustomEvent("site:render"));
  }

  /* Marks the nav item for whichever section is in the middle of the screen.
     The header is rebuilt on every language switch, so the old observer is
     thrown away first. */
  var sectionIO = null;
  function watchSections() {
    if (sectionIO) { sectionIO.disconnect(); sectionIO = null; }
    if (!onIndex() || typeof IntersectionObserver !== "function") return;

    var links = {};
    document.querySelectorAll("[data-section]").forEach(function (a) {
      (links[a.dataset.section] = links[a.dataset.section] || []).push(a);
    });

    sectionIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(links).forEach(function (id) {
          links[id].forEach(function (a) {
            if (id === entry.target.id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    NAV.forEach(function (item) {
      var section = document.getElementById(item.hash);
      if (section) sectionIO.observe(section);
    });
  }

  function setLang(code) {
    if (!window.I18N[code] || code === lang) return;
    lang = code;
    try { localStorage.setItem(STORE, code); } catch (e) { /* ignore */ }
    render();
  }

  /* -------------------------------------------------------------- export */

  window.SITE = {
    icons: ICONS,
    tel: tel,
    el: el,
    getLang: function () { return lang; },
    setLang: setLang,
    render: render
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
