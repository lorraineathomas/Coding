// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

function isWindy(speed, unitName) {
  if (speed > 5 && unitName === "metric") {
    return true;
  } else {
    return false;
  }
}

let speed = prompt("What is the wind speed?");
let unit = "metric";

if (isWindy(speed, unit)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}

// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

console.log(isWindy(2, "imperial"));
console.log(isWindy(20, "metric"));
