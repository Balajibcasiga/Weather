const cityInput = document.getEl ementById('city-input');

const searchBtn = document.getEl

ementById('search-btn');

const weather DataDiv = document.

getElementById('weather-data');

searchBtn.addEventLis

tener('click', () =>

{

const city =

cityInput.value.trim();

if (city) {

fetchWeatherData(city);

} else {

alert('Please enter a city name');

}

});

function fetchWeather Data(city)

{

const apiKey =1bb1ce6e958246e398693705251003';

' const url = `https://api .openweathermap.org/data/2 .5/weather?q=${city}&appid= ${apiKey}&units=metric`;

fetch(url)

.then(response =>

response.json()).then(data =>

updateWeatherData(data))

.catch(error => console.error(error)); }

function updateWeather Data(data) {

const weather Icon = data.weather[0].icon;

const temperature = data.main.temp;

const humidity = data.main.humidity;

const weather Description = data.weather[0].description;

weather DataDiv.innerHTML =

<img src="https: //openweathermap.org/img /wn/${weather Icon}@2x .png" alt="Weather Icon" class="weather-icon">

<h2>Temperature: $ {temperature}°C</h2>

<h2>Humidity: $

{humidity}%</h2>

<h2>Weather: $ {weatherDescription}</h2> `;

}
