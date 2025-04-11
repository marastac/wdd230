const apiKey = "29b85a81ca0fd9f1a73b35125a2d2d8e"; // API Key gratuita de OpenWeatherMap
const lat = -12.0464;
const lon = -77.0428;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function getWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en la solicitud");
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("No se pudo cargar el clima:", error);
  }
}

function displayWeather(data) {
  const infoCard = document.querySelector(".information");

  const temp = data.main.temp.toFixed(1);
  const desc = data.weather[0].description;
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const iconAlt = data.weather[0].main;

  // HTML generado dinámicamente para la tarjeta
  infoCard.innerHTML += `
    <p>Lima, Peru</p>
    <p><img src="${icon}" alt="${iconAlt}"> ${temp}°F - ${desc}</p>
    <p>Page Visits: <span id="visits">0</span></p>
  `;
}

getWeather();
