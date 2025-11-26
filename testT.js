// 🏪 STORE OPENING HOURS - EXERCISE
//====================================

const opening_hours = [
  {
    day: "Saturday",
    open: 10,
    close: 16,
  },
  {
    day: "Sunday",
    open: "Closed",
    close: "Closed",
  },
  {
    day: "Monday",
    open: 9,
    close: 19,
  },
  {
    day: "Tuesday",
    open: 9,
    close: 19,
  },
  {
    day: "Wednesday",
    open: 9,
    close: 19,
  },
  {
    day: "Thursday",
    open: 9,
    close: 19,
  },
  {
    day: "Friday",
    open: 9,
    close: 20,
  },
];

function getOpeningHours(dayName) {
  // Find the matching day in the array
  const dayInfo = opening_hours.find((item) => item.day === dayName);

  if (!dayInfo) return "Day not found";

  // If closed that day
  if (dayInfo.open === "Closed") {
    return { day: dayInfo.day, open: "Closed", close: "Closed" };
  }

  // Convert numbers to HH:MM
  const formatTime = (time) => String(time).padStart(2, "0") + ":00";

  return {
    day: dayInfo.day,
    open: formatTime(dayInfo.open),
    close: formatTime(dayInfo.close),
  };
}

// ========================================
// EXERCISE 1: Get Opening Hours for a Day
// ========================================

/*
EXAMPLE:
getOpeningHours("Monday") 
// Should return: { day: "Monday", open: "09:00", close: "19:00" }

*/

// ========================================
// EXERCISE 2: Check If Store Is Open
// ========================================
/*
EXAMPLE:
isOpenNow("Monday", "10") // "open"
isOpenNow("Monday", "20") // "closed"
isOpenNow("Friday", "18") // "open"
isOpenNow("Sunday", "11") // "closed"
*/

// ========================================
// EXERCISE 3: Special Event Hours
// ========================================
/*
TASK: During special events, the store opens 1 hour earlier and closes 1 hour later.
Create a function that checks if the store is open considering special events.

INPUT: 
  - day (string): Day name
  - time (string): Time in format "HH:MM"
  - isSpecialEvent (boolean): true if there's a special event
*/

// console.log(isOpenWithEvent("Monday", "8", false)); // "closed"
// console.log(isOpenWithEvent("Monday", "8", true));  // "open"
// console.log(isOpenWithEvent("Friday", "21", true));  // "closed"
