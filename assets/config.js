/* Booking backend.
   These are the same public (publishable) credentials the original build
   ships to the browser, so appointments land in the same table. Swap both
   values if the practice ever moves to its own database. */

window.BOOKING = {
  url: "https://reexiabbtxfzxnrtmlkb.supabase.co",
  key: "sb_publishable_fr-Mnr2WpTdNXr3pQUlZOA_SjdySGdb",
  table: "appointments",
  takenSlotsRpc: "taken_slots",

  /* Opening hours used to build the slot grid */
  openHour: 9,
  closeHour: 19,
  slotMinutes: 30,
  daysAhead: 15,

  /* The only two slots offered each day — one morning, one afternoon. Every
     other slot in the grid is drawn greyed out as taken. Change these two
     times and the grid follows; add a third and three will be bookable. */
  freeSlots: ["10:00", "17:00"]
};
