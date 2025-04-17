// banner.js

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("meeting-banner");
    const closeBtn = document.getElementById("close-banner");
  
    if (banner && closeBtn) {
      const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
      // Mostrar solo de lunes a miércoles
      if (today >= 1 && today <= 3) {
        banner.classList.remove("hidden");
      }
  
      // Cerrar banner al hacer clic en la X
      closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
      });
    }
  });
  