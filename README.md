# Д-р Нечаковски · Dental Practice

A static rebuild of the Lovable preview, in Macedonian, English and Greek.
No build step — plain HTML, CSS and JavaScript. Open `index.html`, or serve
the folder.

```bash
node "C:/Users/user/Desktop/.claude/static-serve.mjs" "C:/Users/user/OneDrive/Desktop/necako" 5300
```

## One page you scroll

The practice asked for a feed rather than a menu to click through — clicking
around is awkward on a phone. So everything that used to be a separate page is
now a section of `index.html`, and the nav scrolls to it:

| Section | id |
| --- | --- |
| Hero | `#pocetna` |
| All six service categories, in full | `#uslugi` |
| Why us, then the team and the founder | `#za-nas` |
| Address, phones, email, hours, map | `#kontakt` |

`booking.html` is still a page of its own — it is a form to work through, not
something to scroll past — and its nav links point back at `index.html#...`.

`services.html`, `about.html` and `contact.html` are two-line stubs that
redirect to the matching section, so links shared before the change still
land in the right place.

The nav item for whatever section is on screen is marked with `aria-current`
by an `IntersectionObserver` in `site.js`. Tapping a link in the mobile menu
scrolls explicitly rather than letting the browser follow the anchor: hiding
the menu panel in the same handler cancels the browser's own jump.

## Text that arrives and leaves

`assets/feed.js` gives the one page the feel of a feed: each block fades up
as it comes into view and fades back out as it leaves over the top of the
screen. Siblings are staggered 70ms apart, capped after the fifth so a long
list does not crawl in.

It works off containers rather than individual elements, because almost
everything here is built by `PAGE_RENDER`, which replaces whole subtrees on
every language switch. `site.js` fires a `site:render` event at the end of
each render and `feed.js` re-reads the page from that. A container listed in
`CONTAINERS` that is itself a child of another listed container is skipped as
a unit — it animates its own children instead, so nothing is animated twice.

Two things keep it safe:

- Nothing is hidden until `feed.js` has added `js-reveal` to `<html>`, so the
  page reads normally with JavaScript off or if the script fails.
- It does not run at all under `prefers-reduced-motion`, and the CSS forces
  everything visible in that case as well.

`booking.html` deliberately does not load it. Form fields that fade while
you are typing in them are no help to anyone.

A gold hairline across the very top of the screen tracks how far down the
page you are.

## Motion the scroll drives

`feed.js` writes a `--p` of 0 to 1 onto each moving part, saying how far
through its own travel it is, and the stylesheet does the rest in `calc()`.
Nothing here has a duration: scroll back up and it all runs backwards,
because `--p` is only ever a statement about where you are on the page.

**The hero pins.** `.hero-stage` is 150svh tall and `.hero` inside it is
sticky, so the hero holds still while `.stack` — everything below it —
scrolls up over it on its own plane, with a rounded top edge and a shadow.
Across that travel the photograph settles out of its own zoom (1.18 → 1),
the veil over it deepens, and the words rise and fade, clear by 80% of the
way through, just as the sheet arrives.

The hero sticks at `top: var(--header-h)` and is short by exactly that much,
so the frame it occupies is identical before and after it pins. Sticking at
0 instead left it hanging a header's height below the fold at rest, which
pushed the bottom row of figures off the screen.

**It only pins when the hero fits.** `decidePin()` measures the hero's
content against the screen and adds `.pin-hero` to `<html>` only if there is
room — a 375x667 phone scrolls its hero normally and keeps everything else.
The measurement subtracts the padding that disappears once pinned, or it
would refuse on screens where the content fits perfectly well.

**The two photographs travel inside their frames.** `.frame` clips, and the
image inside is scaled 1.14 and moved on `--p`, so it drifts as it crosses
the screen. The `height: 100%` on `.frame img` is load-bearing: both images
carry `width`/`height` attributes, and those outrank a CSS `aspect-ratio`
unless a height is given.

All of it is off under `prefers-reduced-motion` — no pin, no travel, no
reveals — and none of it runs without JavaScript, where the `var(--p, …)`
fallbacks leave everything in its resting state.

### Measuring it

Don't use headless Chrome for any of this. CSS transitions don't advance
under `--virtual-time-budget`, so scrolled captures come out blank, and its
layout viewport is wider than `--window-size`, so stills look clipped. Use
the browser pane: `resize_window`, scroll with `behavior: "instant"`, wait a
beat and read the computed values. Headless is good for exactly one thing
here — `--force-prefers-reduced-motion --dump-dom` to confirm `<html>` comes
back without `pin-hero` or `js-reveal`.

## Devices

The whole thing is one column that has to hold from a 320px phone to a 4K
monitor, so most of the sizing is fluid — `--gutter`, the hero padding, the
headings, the map — rather than stepped at breakpoints.

Things worth knowing before changing the header:

- **The desktop nav appears at 60rem, not 48rem.** At 768px the four labels,
  the language switch and the booking button sat flush against the wordmark
  with no gap at all, and the Greek labels are longer still. A tablet in
  portrait gets the menu button instead, which is the easier target anyway.
- **`#site-header` is `display: contents`.** A sticky element can only travel
  inside its parent's box, and that wrapper is exactly one header tall, so
  `.site-header` declared `position: sticky` and then scrolled away with the
  page regardless. Taking the wrapper out of the box tree hands the header
  back to `<body>`, where it sticks for real. On a page this long that is the
  difference between having a menu and not.
- **The wordmark subtitle** needs 186px and only has about 155px on a phone,
  so it steps down under 26rem and goes entirely under 22rem.
- `html` uses `overflow-x: clip`, never `hidden` — `hidden` would make `html`
  a scroll container and break the sticky header all over again.

Touch targets are brought up to 44px under `pointer: coarse`, and the hover
states that change a background are only promised to a real pointer, so a tap
does not leave one stuck on. In landscape on a phone the hero heading is
sized against the viewport height instead of its width: 8.5vw of a 740px
screen is a 63px heading on a 360px-tall one.

## Languages

The МК / EN / ΕΛ buttons in the header switch the whole site instantly. The
choice is remembered in `localStorage` and `<html lang>` follows it.

All copy lives in **`assets/i18n.js`** — one object per language, same keys.
Change the text there and it updates everywhere. Practice details (address,
phones, email, map) sit at the top of that file in `window.CLINIC`, shared by
all three languages.

In the markup:

- `data-i18n="key"` — replaces the element's text
- `data-i18n-pair="key|accentKey"` — heading plus the gold accent phrase
- `data-i18n-attr="alt:key"` — fills an attribute

Lists (services, team, stats, days) are rendered from the dictionary by each
page's `PAGE_RENDER` function.

Macedonian copy carries a **word joiner (U+2060) inside "Д-р"**. Without it the
line can break after the hyphen and the name splits as "Д-" / "р", which the
practice flagged. The joiner is invisible and needs no glyph, unlike a
non-breaking hyphen. It is stripped out of `document.title`, where it would
show as a gap in the browser tab.

## Typography

`EB Garamond` (display) + `Commissioner` (text). The original used Cormorant
Garamond, which ships **no Greek glyphs** — Greek headings silently fell back
to Georgia. Both fonts here carry Latin, Cyrillic and Greek.

**Nothing on the site is italic, in any language**, at the practice's request:
a Garamond italic turns Cyrillic т into a handwritten form that reads as a
Bulgarian m. The accent phrase is gold and upright, the founder line is
upright, and the italic font faces are no longer even requested from Google
Fonts — the `<link>` asks for `wght@400;500;600`, not `ital,wght@...`. If
italic is ever wanted back, both the `font-style` and that URL need changing.

Dates on the booking page are spelled out from `weekdaysLong` / `monthsLong`
in `i18n.js` rather than through `Intl`, because Chrome has no Macedonian
date data and quietly returns English.

## What is on the page

The middle of this site used to be six bare lists of text and a grid of four
names, which read as a document rather than a practice. What it has now, all
of it built from material the practice actually has:

- **Services as cards**, one per category, each with its own drawn mark. The
  six icons live in `site.js` under `svc*` and are matched to categories by
  order in `SERVICE_ICONS`, so re-ordering `categories` in `i18n.js` means
  re-ordering that array too.
- **Equipment** — the Sirolaser Blue and the KaVo OP 3D, both named in the
  service lists above them. The KaVo shot is the practice's own, off their old
  site; the curing light came from the Google listing and has **not** been
  confirmed with them — see the warning below.
- **The team by year** — 2019, 2022 and 2025. The practice has these three
  photographs and no others, which is the point: the copy claims three decades
  of continuity and these are the evidence of it.
- **Reviews** — three real five-star reviews from the Google listing, quoted
  word for word. They live in `REVIEWS` in `index.html`, not in `i18n.js`,
  because a quote is not ours to translate: each keeps its own `lang`
  attribute so a screen reader does not read Macedonian in an English voice.
  **Do not invent more.** If the practice wants others, take them from the
  listing verbatim.
- **News** — the three most recent posts, with the whole archive on
  `vesti.html`. See below.

Alternating sections carry `.band`, which paints a 100vw strip behind a
container that is capped at 72rem. That works only because `<html>` has
`overflow-x: clip`; with `visible` it would produce a horizontal scrollbar.

Photographs in the years section drift inside their frames on scroll, the same
`--p` mechanism the hero uses. The equipment shots sit side
by side and are deliberately left still — two small images jostling against
each other reads as fidgety rather than as depth.


## The news

The practice asked for every piece of news from their old site, carried over
as posts. It is all in `assets/news.js` — data only, plus one `NEWS_CARD`
builder shared by both places it is drawn:

- `index.html#vesti` draws the three most recent, first paragraph only
- `vesti.html` draws all 29, in two groups

The groups follow the old site, not a judgement of ours: `news` is what was
under **Новости од ординацијата** on its homepage (13 posts, 2016–2024), and
`press` is what was on its PRESS pages, which the English version of that site
called the News Archive (16 posts, 2001–2008). The pictures are its own, out
of `/sliki`; none is wider than 470px, so the cards give them a 17rem column
rather than stretching them. The TOP-100 thumbnail links to the full scan, the
way the old site opened it in a window of its own.

Dates are **strings in dd.mm.yyyy**, the way the practice wrote them, with an
`iso` field only to sort by. Chrome's `Intl` has no Macedonian, so a formatted
date would come out silently in English.

### What was left out, and what still needs a native read

Two posts from the old English homepage are **not** here, and the practice
should be asked whether they want them:

- **02.07.2014** — a Foursquare check-in offering a gift, "valid until
  01.09.2014". A dead offer behind a dead QR code.
- **24.09.2013** — "visit our Facebook page", a call to action rather than news.

Everything else is in, the two March 2020 COVID notices included. They read as
history because every post carries its date and the 12.05.2020 post above them
says work resumed.

The Macedonian is the old site's own wording, tidied for punctuation only.
Where the practice published its own English for a post, that English is
theirs. Everything else in English, and **all** of the Greek, is translated
here and still wants a native read.

## Booking

`assets/config.js` points at the same database as the Lovable project, using
its public key:

- `taken_slots(_date)` returns the slots already booked for a day
- the form inserts into `appointments`

Weekdays only, 09:00–19:00 in 30-minute slots, 15 working days ahead.

**Only two slots a day are offered** — `freeSlots` in `config.js`, currently
`10:00` and `17:00`, one morning and one afternoon. The practice asked for
this. The rest of the day is still drawn, greyed out and struck through, so a
patient can see the day is otherwise full; those buttons are `disabled` and
labelled "Зафатен" / "Taken" / "Κλεισμένο". A slot that is in `freeSlots` but
already booked in the database, or already past today, also falls back to the
taken state. Change the two times in `config.js` and the grid follows; add a
third and three become bookable.

Swap `url` and `key` in `config.js` to move the site onto a different database.

## Still to confirm with the practice

- Opening hours and the closed-weekend line
- Whether the English and Greek copy reads right to them
- The Greek spelling of the doctors' names
- `<meta name="robots" content="noindex, nofollow">` is on every page —
  remove it when the site goes live for real
- **Which photographs are actually theirs.** On 05.11.2026 the practice looked
  at the gallery section and said of the two pictures in it — a procedure, and
  a reception — "these are other people, it is not us". Both are gone, from
  this build and from `Website Nechakovski`, and the section with them. They
  came from the Google listing, where anyone can upload: an earlier pass had
  already found one listing photo belonging to a different practice
  ("MAK DENTAL") and left it out. **`curing-light.webp` comes from that same
  listing and has not been confirmed.** `team-2019/2022/2025.webp` and
  `kavo-op3d.webp` are safe — the team photographs show the founder and
  Dr. Aleksandar, and the KaVo is off the practice's own old site.
- Whether the two posts listed under "The news" above should be carried over
  as well
