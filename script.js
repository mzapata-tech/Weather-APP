const apiKey = "YOUR_API_KEY"; // <-- Replace with your actual API key
const button = document.getElementById("getWeatherBtn");

button.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  getWeather(city);
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>☁️ Weather: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}
