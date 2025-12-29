let apiKey = "1210725e217bb8d60abbde5d3ee94832";
let city = "Sydney";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let responseFromAPI = document.querySelector("h1");
  let city = response.data.name;
  responseFromAPI.innerHTML = `It is ${temperature}°C in ${city}`;
}

axios.get(apiUrl).then(showTemperature);
