/* Booking flow: weekday picker, 30-minute slots, validation, insert.
   Dates are spelled out from the dictionaries rather than through Intl,
   because Chrome has no Macedonian date data and silently falls back to
   English. */

(function () {
  "use strict";

  var CFG = window.BOOKING;

  var selectedDay = null;
  var selectedSlot = null;
  var freeSlots = null;      /* null = loading */
  var days = [];
  var errors = {};
  var state = "idle";        /* idle | sending | done */
  var reload = 0;

  function isWeekday(d) { var n = d.getDay(); return n >= 1 && n <= 5; }

  function iso(d) {
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }

  function nextWeekdays(from, count) {
    var out = [];
    var cursor = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    var guard = 0;
    while (out.length < count && guard < 60) {
      if (isWeekday(cursor)) out.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
      guard++;
    }
    return out;
  }

  function allSlots() {
    var out = [];
    for (var h = CFG.openHour; h < CFG.closeHour; h++) {
      for (var m = 0; m < 60; m += CFG.slotMinutes) {
        out.push(String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0"));
      }
    }
    return out;
  }

  /* The whole day is shown, but only the two slots the practice opens are
     bookable — one in the morning, one in the afternoon. Everything else is
     drawn greyed out, so a patient can see the day is otherwise full. */
  function daySlots(day, taken, now) {
    if (!isWeekday(day)) return [];
    var busy = new Set((taken || []).map(function (s) { return String(s).slice(0, 5); }));
    var offered = CFG.freeSlots || [];
    var isToday = iso(day) === iso(now);
    var nowMinutes = now.getHours() * 60 + now.getMinutes();

    return allSlots().map(function (s) {
      var bits = s.split(":");
      var past = isToday && Number(bits[0]) * 60 + Number(bits[1]) <= nowMinutes;
      return { time: s, free: offered.indexOf(s) > -1 && !busy.has(s) && !past };
    });
  }

  /* ------------------------------------------------------------- backend */

  function api(path, body) {
    return fetch(CFG.url + path, {
      method: "POST",
      headers: {
        "apikey": CFG.key,
        "Authorization": "Bearer " + CFG.key,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(body)
    });
  }

  function fetchTaken(day) {
    return api("/rest/v1/rpc/" + CFG.takenSlotsRpc, { _date: iso(day) })
      .then(function (r) { return r.ok ? r.json() : []; })
      .catch(function () { return []; });
  }

  function insertAppointment(payload) {
    return api("/rest/v1/" + CFG.table, payload).then(function (r) {
      if (r.ok) return { ok: true };
      return r.text().then(function (txt) {
        var code = "";
        try { code = (JSON.parse(txt) || {}).code || ""; } catch (e) { /* non-JSON */ }
        return { ok: false, code: code, status: r.status };
      });
    }).catch(function () {
      return { ok: false, code: "network" };
    });
  }

  /* ----------------------------------------------------------- rendering */

  function dateLine(t, day, slot) {
    return t.weekdaysLong[day.getDay()] + ", " +
      day.getDate() + " " + t.monthsLong[day.getMonth()] + " · " + slot;
  }

  function loadSlots(t) {
    if (!selectedDay) return;
    freeSlots = null;
    selectedSlot = null;
    paint(t);
    var want = reload;
    var day = selectedDay;
    fetchTaken(day).then(function (taken) {
      if (want !== reload || day !== selectedDay) return;
      freeSlots = daySlots(day, taken, new Date());
      paint(t);
    });
  }

  function paint(t) {
    var el = window.SITE.el;

    var form = document.getElementById("booking-form");
    var done = document.getElementById("booking-done");

    if (state === "done") {
      form.hidden = true;
      done.hidden = false;
      done.replaceChildren();
      var icon = el("span");
      icon.innerHTML = window.SITE.icons.check40;
      done.appendChild(icon);
      done.appendChild(el("h2", null, t.successTitle));
      done.appendChild(el("p", null, t.successText));
      if (selectedDay && selectedSlot) {
        done.appendChild(el("p", "when", dateLine(t, selectedDay, selectedSlot)));
      }
      return;
    }

    form.hidden = false;
    done.hidden = true;

    /* Day strip */
    var strip = document.getElementById("day-strip");
    strip.replaceChildren.apply(strip, days.map(function (d) {
      var b = el("button", "day");
      b.type = "button";
      b.setAttribute("aria-pressed", selectedDay && iso(d) === iso(selectedDay) ? "true" : "false");
      b.appendChild(el("span", "dow", t.weekdays[d.getDay()]));
      b.appendChild(el("span", "dom", String(d.getDate())));
      b.appendChild(el("span", "mon", t.months[d.getMonth()]));
      b.addEventListener("click", function () {
        selectedDay = d;
        reload++;
        loadSlots(t);
      });
      return b;
    }));

    /* Slots */
    var slotBox = document.getElementById("slot-box");
    slotBox.replaceChildren();
    if (freeSlots === null) {
      slotBox.appendChild(el("p", "muted", "…"));
    } else if (!freeSlots.some(function (s) { return s.free; })) {
      slotBox.appendChild(el("p", "muted", t.noSlots));
    } else {
      var grid = el("div", "slot-grid");
      freeSlots.forEach(function (s) {
        var b = el("button", s.free ? "slot" : "slot slot--taken", s.time);
        b.type = "button";
        if (!s.free) {
          b.disabled = true;
          b.title = t.slotTaken;
          b.setAttribute("aria-label", s.time + " — " + t.slotTaken);
          grid.appendChild(b);
          return;
        }
        b.setAttribute("aria-pressed", selectedSlot === s.time ? "true" : "false");
        b.addEventListener("click", function () {
          selectedSlot = s.time;
          delete errors.slot;
          paint(t);
        });
        grid.appendChild(b);
      });
      slotBox.appendChild(grid);
    }
    if (errors.slot) slotBox.appendChild(el("p", "err", errors.slot));

    /* Field errors */
    ["name", "phone", "email"].forEach(function (k) {
      var holder = document.getElementById("err-" + k);
      holder.textContent = errors[k] || "";
      holder.hidden = !errors[k];
    });

    /* Submit label */
    var submit = document.getElementById("submit");
    submit.textContent = state === "sending" ? t.sending : t.submit;
    submit.disabled = state === "sending";
  }

  /* --------------------------------------------------------- validation */

  function validate(t, values) {
    var next = {};
    var name = values.name.trim();
    if (name.length < 2 || name.length > 100) next.name = t.errName;

    var phone = values.phone.trim();
    if (!/^[+\d][\d\s/-]{5,24}$/.test(phone)) next.phone = t.errPhone;

    var email = values.email.trim();
    if (email && (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) next.email = t.errEmail;

    if (!selectedDay || !selectedSlot) next.slot = t.errSlot;
    return next;
  }

  /* --------------------------------------------------------------- init */

  window.PAGE_RENDER = function (t, lang) {
    if (days.length === 0) {
      days = nextWeekdays(new Date(), CFG.daysAhead);
      selectedDay = days[0] || null;
      loadSlots(t);
    }

    var form = document.getElementById("booking-form");
    if (!form.dataset.bound) {
      form.dataset.bound = "1";
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var current = window.I18N[window.SITE.getLang()];
        var values = {
          name: document.getElementById("f-name").value,
          phone: document.getElementById("f-phone").value,
          email: document.getElementById("f-email").value
        };
        errors = validate(current, values);
        if (Object.keys(errors).length) { paint(current); return; }

        state = "sending";
        paint(current);

        insertAppointment({
          full_name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim() || null,
          appointment_date: iso(selectedDay),
          slot_time: selectedSlot,
          language: window.SITE.getLang()
        }).then(function (res) {
          var now = window.I18N[window.SITE.getLang()];
          if (res.ok) {
            state = "done";
            paint(now);
            return;
          }
          state = "idle";
          errors = { slot: res.code === "23505" ? now.errorTaken : now.errorGeneric };
          reload++;
          loadSlots(now);
        });
      });
    }

    paint(t);
  };
})();
