// Show current day and time in the <h4>
document.querySelector(".fulltime").innerHTML = getCurrentDayAndTime();

function getCurrentDayAndTime() {
  const now = new Date();

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

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  return `Today is ${day}, and the current time is ${hours}:${minutes}`;
}

// Handle form submission
function setupEventForm() {
  const form = document.getElementById("eventForm");
  const dateInput = document.getElementById("birthday");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    const selectedDate = new Date(dateInput.value);
    const today = new Date();

    // Calculate difference in days
    const diffTime = selectedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    result.innerHTML =
      "You selected: " +
      dateInput.value +
      ". That is" +
      diffDays +
      "day(s) from today.";
  });
}

// Call the function after the page loads
setupEventForm();
