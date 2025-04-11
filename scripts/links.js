// Detecta si estás en GitHub Pages o en local
const isLocal = location.hostname === "127.0.0.1" || location.hostname === "localhost";
const baseURL = isLocal ? "http://127.0.0.1:5500/" : "https://marastac.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error cargando los enlaces:", error);
  }
}

function displayLinks(weeks) {
  const ul = document.querySelector(".learning-activities ul");
  ul.innerHTML = "";

  weeks.forEach((week) => {
    const li = document.createElement("li");
    li.innerHTML = `${week.week}: `;

    week.links.forEach((link, index) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.title;
      li.appendChild(a);

      if (index < week.links.length - 1) {
        li.innerHTML += " | ";
      }
    });

    ul.appendChild(li);
  });
}

getLinks();
