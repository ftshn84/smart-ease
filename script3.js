// Arrays of possible startup name words
const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Dodo",
  "Baba",
  "cafe",
  "Quin",
  "Goff",
  "Matte",
  "Rona",
];
const secondWords = [
  "Tech",
  "Solutions",
  "Corp",
  "Labs",
  "Systems",
  "Industries",
  "Hub",
  "3Works",
  "World",
  "Innovations",
];

// Generate random number between 0 and 9
const randomNumber = Math.floor(Math.random() * 10);

// Create the startup name
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

// Count total characters (including space)
const nameLength = startupName.length;

// Log the result
console.log(
  'The startup: "' + startupName + '" contains ' + nameLength + " characters"
);
