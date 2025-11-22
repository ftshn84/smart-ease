const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText(series) {
  const humanTimeInMin = 80 * 365 * 24 * 60;
  const totalMoveTime = 0;
  //return humanTimeInMin;
  for (i = 0; i < series.length; i++) {
    const seryTime =
      (series[i].days * 24 + series[i].hours) * 60 + series[i].minutes;
    totalMoveTime += seryTime;
    console.log(
      series[i].title +
        " took " +
        ((seryTime / humanTimeInMin) * 100).toFixed(4) +
        "% of my life"
    );
  }

  console.log(
    "In total that is " +
      ((totalMoveTime / humanTimeInMin) * 100).toFixed(3) +
      " of my life"
  );
}
logOutSeriesText(seriesDurations);
//Game of thrones took 0.01% of my life
//Sopranos took 0.012% of my life
//The Wire took 0.007% of my life

//In total that is 0.2% of my life
