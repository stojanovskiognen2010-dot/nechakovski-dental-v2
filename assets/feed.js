/* The feed, and the motion the scroll drives.

   Two things live here:

   1. Reveals — every block fades up as it comes into view and fades back
      out as it leaves over the top of the screen.
   2. Tracks — the hero and the two photographs are given a --p of 0 to 1
      saying how far through their own travel they are, and the stylesheet
      does the rest in calc(). Nothing here is an animation with a duration:
      scroll back up and it all runs backwards, because --p is only ever a
      statement about where you are on the page.

   Loads after site.js, on index.html only — booking.html is a form to fill
   in, and fields that move while you are typing in them are no help.

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
    ".split-inner", ".split-copy", ".why",
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

  function clamp01(n) { return n < 0 ? 0 : n > 1 ? 1 : n; }

  /* ------------------------------------------------------------- reveals */

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

  /* -------------------------------------------------------------- tracks */

  var tracks = [];
  var heroTop = 0;
  var heroTravel = 1;

  /* Measured once per load and resize, never per frame: offsetTop and
     offsetHeight force layout, and reading them inside the scroll handler
     would thrash it against the --p we write straight afterwards. */
  function measureHero(stage, hero) {
    /* how far the sticky hero can move inside its stage */
    var travel = stage.offsetHeight - hero.offsetHeight;
    /* unpinned the stage is only as tall as the hero, so there is no travel
       to speak of — borrow most of a screen so the photograph and the words
       still move on their way past */
    if (travel < 120) travel = Math.max(240, window.innerHeight * 0.7);
    /* it is already stuck the moment its top reaches its own sticky offset */
    heroTop = stage.offsetTop - (parseFloat(getComputedStyle(hero).top) || 0);
    heroTravel = travel;
  }

  /* 0 at the top of the page, 1 once the stage has been scrolled through */
  function heroProgress() {
    return clamp01((window.scrollY - heroTop) / heroTravel);
  }

  /* 0 as the frame comes up from below, .5 crossing the middle of the
     screen, 1 once it has gone off the top */
  function frameProgress(node) {
    var r = node.getBoundingClientRect();
    return clamp01((window.innerHeight - r.top) / (window.innerHeight + r.height));
  }

  /* The hero only pins if its content actually fits the screen. On a short
     phone a pinned hero would simply cut the bottom off it, so that one
     scrolls normally and keeps the rest of the motion. */
  function decidePin() {
    var root = document.documentElement;
    var inner = document.querySelector(".hero-inner");
    if (!inner || !motionOK()) { root.classList.remove("pin-hero"); return; }

    /* Measure unpinned, and take off the padding — that padding goes away
       once it pins, so counting it would refuse to pin on screens where the
       content fits perfectly well. */
    root.classList.remove("pin-hero");
    var cs = getComputedStyle(inner);
    var pad = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    var content = inner.getBoundingClientRect().height - pad;
    var header = document.querySelector(".site-header");
    var headerH = header ? header.getBoundingClientRect().height : 64;

    root.classList.toggle("pin-hero", content + 48 <= window.innerHeight - headerH);
  }

  function collectTracks() {
    tracks = [];
    if (!motionOK()) return;

    var stage = document.querySelector(".hero-stage");
    var hero = stage && stage.querySelector(".hero");
    if (hero) {
      measureHero(stage, hero);
      tracks.push({ node: hero, read: heroProgress, last: -1 });
    }

    document.querySelectorAll(".frame").forEach(function (f) {
      tracks.push({
        node: f,
        read: function () { return frameProgress(f); },
        last: -1
      });
    });
  }

  /* every read first, then every write — never one of each, in turn */
  function drive() {
    if (!tracks.length) return;
    var values = tracks.map(function (t) { return t.read(); });
    for (var i = 0; i < tracks.length; i++) {
      if (values[i] === tracks[i].last) continue;
      tracks[i].node.style.setProperty("--p", values[i].toFixed(4));
      tracks[i].last = values[i];
    }
  }

  /* ------------------------------------------------------------ progress */

  function progress() {
    if (!bar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 8 ? window.scrollY / max : 0;
    bar.style.transform = "scaleX(" + clamp01(p).toFixed(4) + ")";
  }

  /* ----------------------------------------------------------------- run */

  var queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      drive();
      progress();
    });
  }

  function start() {
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "scroll-progress";
      bar.setAttribute("aria-hidden", "true");
      document.body.appendChild(bar);
    }
    decidePin();      /* changes the layout, so it goes before the measuring */
    collectTracks();
    mark();
    drive();
    progress();
  }

  var resizing = null;
  function onResize() {
    clearTimeout(resizing);
    resizing = setTimeout(function () {
      decidePin();
      collectTracks();
      drive();
      progress();
    }, 150);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("load", onResize);   /* once the photographs land */
  document.addEventListener("site:render", start);
  if (reduced && reduced.addEventListener) reduced.addEventListener("change", start);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
