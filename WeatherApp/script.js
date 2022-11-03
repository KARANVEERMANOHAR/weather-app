let url;
let key = "18c9ce84016bf39727c21562ee799c1e";
function getdata() {
  let input = document.getElementById("searchTxt").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("location").innerHTML = data.name;
      document.getElementById("locationParts").innerHTML = data.sys.country;
      document.getElementById("temperatureC").innerHTML =
        Math.floor(data.main.temp - 273) + "°C";
      document.getElementById("txtWord").innerHTML = data.weather[0].main;
      document.getElementById("max-temp").innerHTML =
        "Max Temp: " + Math.floor(data.main.temp_max - 273) + "°C";
      document.getElementById("min-temp").innerHTML =
        "Min Temp: " + Math.floor(data.main.temp_min - 273) + "°C";
      document.getElementById("wind").innerHTML =
        "Wind Speed: " + data.wind.speed + " KMPH";
    });
}

function getWeekDay() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  document.getElementById("weekDay").innerText = day;
}
