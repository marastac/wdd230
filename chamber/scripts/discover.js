// Toggle menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Last visit message using localStorage
const visitMessage = document.getElementById("visitMessage");
const currentVisit = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisit"));

if (!lastVisit) {
  visitMessage.textContent = "Welcome! If you have any questions, let us know.";
} else {
  const difference = currentVisit - lastVisit;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMessage.textContent = "You're back so soon! Awesome!";
  } else {
    visitMessage.textContent =
      days === 1
        ? "Your last visit was 1 day ago."
        : `Your last visit was ${days} days ago.`;
  }
}
localStorage.setItem("lastVisit", currentVisit);

// Display today's date in calendar
const today = new Date();
document.getElementById("today-date").textContent = today.toLocaleDateString();

// Footer last modified
const lastModifiedElement = document.getElementById("last-modified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = document.lastModified;
}
