const clothesToWear = outfit(11);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
function outfit(temperature) {
  if (temperature >= 12 && temperature < 25) {
    return "It's warm. A t-shirt and jeans or shorts are perfect.";
  } else if (temperature >= 0 && temperature < 12) {
    return "It's cool. A sweater or light jacket will be comfortable.";
  } else if (temperature > -12 && temperature < -1) {
    return "It's freezing! Wear a heavy winter coat, gloves, scarf, and a hat";
  }
}
