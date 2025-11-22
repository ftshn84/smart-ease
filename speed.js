const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function timeTravel(travelInformation) {
  const travelDuration =
    travelInformation.destinationDistance / travelInformation.speed;
  const travelHours = Math.floor(travelDuration);
  const travelMinutes = ((travelDuration - travelHours) * 60).toFixed(0);
  return travelHours + " hours and " + travelMinutes + " minutes";
}
const travelTime = timeTravel(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
