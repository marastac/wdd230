// weather.js

const apiKey = "29b85a81ca0fd9f1a73b35125a2d2d8e"; // Puedes reemplazar por tu propia API Key
const lat = -7.1635;
const lon = -78.5138;
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response failed");
    const data = await response.json();

    // Clima actual
    const current = data.list[0];
    document.getElementById("current-temp").textContent = `${current.main.temp.toFixed(1)} °C`;
    document.getElementById("weather-desc").textContent = current.weather[0].description;

    // Pronóstico para los próximos 3 días (al mediodía)
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    const days = {};
    data.list.forEach((entry) => {
      const date = new Date(entry.dt_txt);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      if (!days[day] && date.getHours() === 12) {
        days[day] = entry.main.temp;
      }
    });

    Object.entries(days).slice(0, 3).forEach(([day, temp]) => {
      const p = document.createElement("p");
      p.textContent = `${day}: ${temp.toFixed(1)} °C`;
      forecastDiv.appendChild(p);
    });

  } catch (error) {
    console.error("Error getting weather:", error);
    const fallback = document.getElementById("forecast");
    if (fallback) {
      fallback.innerHTML = `<p class="error-message">⚠️ Weather data unavailable.</p>`;
    }
  }
}

getWeather();
