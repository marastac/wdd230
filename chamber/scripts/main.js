const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const lastModifiedElement = document.getElementById("last-modified");

if (lastModifiedElement) {
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last updated: ${lastModifiedDate.toLocaleString()}`;
}
