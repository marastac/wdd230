// featured.js

async function loadFeaturedBusinesses() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Error loading JSON");
  
      const data = await response.json();
      const members = data.members;
  
      // Filtrar solo los miembros con nivel Silver o Gold
      const featured = members.filter(member =>
        member.membership === "Silver" || member.membership === "Gold"
      );
  
      // Mezclar y seleccionar hasta 2 aleatorios
      const randomFeatured = featured.sort(() => 0.5 - Math.random()).slice(0, 2);
  
      const container = document.querySelector(".featured-container");
      container.innerHTML = ""; // limpiar contenido actual
  
      randomFeatured.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
  
        card.innerHTML = `
          <img src="${member.logo}" alt="Logo of ${member.name}" loading="lazy">
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <a href="${member.website}" target="_blank" rel="noopener">Visit Site</a>
        `;
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error("Error displaying featured businesses:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadFeaturedBusinesses);
  