const API_KEY = "0c0fa11b9034065211b9940d4d79c956";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.getElementById("city");
      const weather = document.getElementById("weather-main");
      const temp = document.getElementById("temp");
      const tempMin = document.getElementById("temp-min");
      const tempMax = document.getElementById("temp-max");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = `🌡${Math.round(data.main.temp)}℃`;
      tempMin.innerText = `▾${Math.round(data.main.temp_min)}℃`;
      tempMax.innerText = `▴${Math.round(data.main.temp_max)}℃`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
