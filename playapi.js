window.addEventListener("DOMContentLoaded", () => {
  const weatherElement = document.getElementById("weather-info");

  if (!weatherElement) return; 
  // prevents errors if script loads on other pages

  fetch("https://api.open-meteo.com/v1/forecast?latitude=53.35&longitude=-6.26&current_weather=true") //taking weather data for outdoor shows
    .then(response => response.json()) //this puts the data from plain text into the actual temperature or windspeed
    .then(data => {
      const temp = data.current_weather.temperature;
      const wind = data.current_weather.windspeed;

      weatherElement.innerHTML =
        `Current temperature: ${temp}°C <br> Wind speed: ${wind} km/h`;
    })
    .catch(error => {
      weatherElement.innerText = "Unable to load weather data.";
      console.error("Weather API error:", error);
    });
});
