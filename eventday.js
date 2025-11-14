function getCurrentDayAndTime() {
  const now = new Date();

  // Get day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];

  // Get hours and minutes
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // Format time
  const time = `${hours}:${minutes}`;

  return `Today is ${day}, and the current time is ${time}`;
}

// Example usage:
console.log(getCurrentDayAndTime());

function getEventWeekday() {}
