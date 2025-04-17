// main.js

// Toggle del menú hamburguesa
const hamButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("menu");

hamButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Fecha de última modificación en el footer
const lastModified = document.getElementById("last-modified");
if (lastModified) {
  lastModified.textContent = document.lastModified;
}
// 🌙 Dark mode toggle
const toggleButton = document.querySelector("#darkModeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");


  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
