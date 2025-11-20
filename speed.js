const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function timeTravel(ti) {
  const reTime = ti.destinationDistance / ti.speed;
  const intPart = Math.floor(reTime);
  const decPart = ((reTime - intPart) * 60).toFixed(0);
  return intPart + " hours and " + decPart + " minutes";
}
const travelTime = timeTravel(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
