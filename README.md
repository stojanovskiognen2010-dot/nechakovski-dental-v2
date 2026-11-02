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
