// House data
var peter = {
  width: 8,
  depth: 10,
  height: 10,
  garden: 100,
  price: 2500000,
};

var julia = {
  width: 5,
  depth: 11,
  height: 8,
  garden: 70,
  price: 1000000,
};

// Formula: house value = volume + garden size
function calculateValue(house) {
  var volume = house.width * house.depth * house.height;
  return volume + house.garden;
}

// Compare price to value
function checkPrice(house) {
  var value = calculateValue(house);
  console.log("House expected value: " + value);

  if (house.price > value) {
    console.log("This house is too expensive.");
  } else if (house.price < value) {
    console.log("This house is a good deal.");
  } else {
    console.log("This house has a fair price.");
  }
}

// Check Peter's house
console.log("Peter's house:");
checkPrice(peter);

// Check Julia's house
console.log("\nJulia's house:");
checkPrice(julia);
