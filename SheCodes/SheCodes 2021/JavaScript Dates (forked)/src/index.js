let date = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let weekDay = week[date.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();
let milli = date.getMilliseconds();

//JS Challenge 1
let one = `Current day: ${day}`;
console.log(one);

//JS Challenge 2
let two = `Milliseconds in the current time: ${milli} milliseconds`;
console.log(two);

//JS Challenge 3
let three = `Current day: ${day}`;
console.log(three);

//JS Challenge 4
let four = `Current year: ${year}`;
console.log(four);

//JS Challenge 5
let five = `Current month: ${month}`;
console.log(five);

//JS Challenge 6
let six = `Today is ${weekDay}, ${month} ${day}, ${year}`;
console.log(six);

//JS Challenge 7
function formatDate(date) {
  return `${week[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

console.log(formatDate(new Date()));
