// Selección de elementos HTML
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Coordenadas de Trier, Alemania con tu clave API personal
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=29b85a81ca0fd9f1a73b35125a2d2d8e';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Para verificar los datos
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Error al obtener datos del clima:', error);
  }
}

function displayResults(data) {
  const temperature = data.main.temp.toFixed(1);
  const description = data.weather[0].description;

  // Ícono forzado para que se vea como en el ejemplo (lluvia de día)
  const iconCode = '10d';
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;

  currentTemp.innerHTML = `${temperature}&deg;F`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

apiFetch();
