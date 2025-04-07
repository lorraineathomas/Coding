let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let currentDateTime = `${days[date.getDay()]} ${date.getTime()}`;
document.getElementById("current-date-time").innerHTML = `${currentDateTime}`;
