/* The feed: every block arrives as it comes into view and fades back out as
   it leaves, plus a scroll-progress hairline across the top of the screen.

   Loads after site.js, on index.html only — booking.html is a form to fill
   in, and fields that fade while you are typing in them are no help.

   Most of this page is built by PAGE_RENDER, which replaces whole subtrees
   on every language switch, so this re-reads the page on the "site:render"
   event rather than once at load. */

(function () {
  "use strict";

  /* Containers, not elements: what moves is each container's own children.
     A child that is itself in this list is left alone — it reveals its own
     children, and animating both would double up. */
  var CONTAINERS = [
    ".hero-inner", ".stats",
    ".services", ".service-list",
    ".split-inner", ".split-inner > div", ".why",
    ".about-section", ".team-grid",
    "#kontakt", ".contact-grid", ".contact-list",
    ".cta-band .wrap"
  ].join(",");

  var STAGGER = 70;      /* ms between siblings */
  var STAGGER_CAP = 5;   /* and no further, or the last items crawl in */

  var io = null;
  var bar = null;
  var reduced = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;

  function motionOK() {
    return !(reduced && reduced.matches) && typeof IntersectionObserver === "function";
  }

  function onEntries(entries) {
    entries.forEach(function (entry) {
      var node = entry.target;
      if (entry.isIntersecting) {
        node.classList.add("is-in");
        node.classList.remove("out-up");
        return;
      }
      node.classList.remove("is-in");
      /* leaving over the top drifts up and away; still below the fold, it
         waits underneath where it will rise from */
      if (entry.boundingClientRect.top < 0) node.classList.add("out-up");
      else node.classList.remove("out-up");
    });
  }

  function mark() {
    if (io) { io.disconnect(); io = null; }

    /* nothing is hidden unless this script is running and motion is wanted,
       so the page still reads with JavaScript off */
    if (!motionOK()) {
      document.documentElement.classList.remove("js-reveal");
      return;
    }

    var boxes = Array.prototype.slice.call(document.querySelectorAll(CONTAINERS));
    if (!boxes.length) return;

    document.documentElement.classList.add("js-reveal");

    /* inset top and bottom, so nothing changes while it is sitting
       comfortably in the middle of the screen */
    io = new IntersectionObserver(onEntries, { rootMargin: "-6% 0px -10% 0px" });

    boxes.forEach(function (box) {
      var step = 0;
      Array.prototype.forEach.call(box.children, function (node) {
        if (boxes.indexOf(node) !== -1) return;
        node.classList.add("reveal");
        node.style.setProperty("--d", Math.min(step, STAGGER_CAP) * STAGGER + "ms");
        step += 1;
        io.observe(node);
      });
    });
  }

  /* ---------------------------------------------------------------------- */

  function progress() {
    if (!bar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 8 ? window.scrollY / max : 0;
    bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, p)).toFixed(4) + ")";
  }

  var queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; progress(); });
  }

  function start() {
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "scroll-progress";
      bar.setAttribute("aria-hidden", "true");
      document.body.appendChild(bar);
    }
    mark();
    progress();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  document.addEventListener("site:render", start);
  if (reduced && reduced.addEventListener) reduced.addEventListener("change", mark);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
