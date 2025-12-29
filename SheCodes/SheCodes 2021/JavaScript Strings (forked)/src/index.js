let country = "Guinea Bissau";
country = country.replace(" ", "-");
console.log(country);

let city = " Sydney   ";
city = city.trim();
console.log(city);

let attraction = "Opera House";
attraction = attraction.toLowerCase();
console.log(attraction);

let place = "school";
place = place.toUpperCase();
console.log(place);

let sentence = `I went to visit the ${attraction} in ${city}, right next to my ${place}. Now, I'm getting ready for my trip to ${country}!`;
console.log(sentence);

let change = prompt("Would you like to go to a different city?");
if (change === "yes") {
  attraction = prompt("Where would you like to go?");
} else {
  attraction = "Opera House";
}
