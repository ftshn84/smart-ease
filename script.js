const yearOfBirth = 1984;
var yearFuture = 2026;
var Age = yearFuture - yearOfBirth;

const dogYearOfBirth = 0;
var dogYearFuture = 2027;
var dogYear = dogYearFuture - dogYearOfBirth;
var shouldShowResultInDogYears = true;
if ((shouldShowResultInDogYears = true)) {
  console.log("Dog will be " + dogYear + "years old in " + dogYearFuture);
} else console.log("You will be " + Age + "years old in " + yearFuture);
