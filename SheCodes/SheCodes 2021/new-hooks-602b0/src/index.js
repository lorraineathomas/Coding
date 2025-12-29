//display day and time above weather
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

let hours = date.getHours();
let minutes = date.getMinutes();

let time;

if (hours > 12) {
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  time = hours - 12 + ":" + minutes + "PM";
} else {
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  time = `${hours}:${minutes}AM`;
}

let currentDateTime = `${days[date.getDay()]} ${time}`;
document.getElementById("current-date-time").innerHTML = `${currentDateTime}`;

//search engine results display
function handleSubmit(event) {
  event.preventDefault();
  let searchbarCity = document.querySelector(".searchbar-city");
  let changeCity = document.querySelector(".city-search");
  changeCity.innerHTML = `${searchbarCity.value}`;
}

let searchbarForm = document.querySelector(".searchbar-submit");
searchbarForm.addEventListener("click", handleSubmit);

// change Celcius or Fahrenheit
function celciusFahrenheit(event) {
  event.preventDefault;
  let letter = document.querySelector(".degrees-letter");
  let number = document.querySelector(".degrees-number");
  if (letter.innerHTML === "F") {
    let celcius = Math.round(((`${number.innerHTML}` - 32) * 5) / 9);
    number.innerHTML = `${celcius}`;
    letter.innerHTML = "C";
  } else {
    let fahrenheit = Math.round((`${number.innerHTML}` * 9) / 5 + 32);
    number.innerHTML = `${fahrenheit}`;
    letter.innerHTML = "F";
  }
}

let changeCelciusFahrenheit = document.querySelector(".celcius-fahrenheit");
changeCelciusFahrenheit.addEventListener("click", celciusFahrenheit);
