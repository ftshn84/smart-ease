const age = 51;
const continent = "Asia";

let category = "";

if (continent === "Asia") {
  if (age < 15) {
    category = "a child";
  } else if (age <= 50) {
    category = "an adult";
  } else {
    category = "old";
  }
} else if (continent === "Europe") {
  if (age < 17) {
    category = "a child";
  } else if (age <= 80) {
    category = "an adult";
  } else {
    category = "old";
  }
} else if (continent === "Africa") {
  if (age < 15) {
    category = "a child";
  } else if (age <= 64) {
    category = "an adult";
  } else {
    category = "old";
  }
}

function showMessage() {
  let message =
    "She/He is " +
    age +
    " .This age in " +
    continent +
    " is considered " +
    category;
  console.log(message);
}

showMessage();
