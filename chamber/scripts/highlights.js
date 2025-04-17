// highlights.js

async function getHighlights() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Network error");
  
      const data = await response.json();
      const members = data.members.filter(
        (m) => m.membership === "Gold" || m.membership === "Silver"
      );
  
      const highlightContainer = document.getElementById("highlight-container");
      highlightContainer.innerHTML = "";
  
      if (members.length === 0) {
        highlightContainer.innerHTML = "<p>No featured members available.</p>";
        return;
      }
  
      // Mezclar y seleccionar hasta 3 aleatorios
      const shuffled = members.sort(() => 0.5 - Math.random()).slice(0, 3);
  
      shuffled.forEach((member) => {
        const card = document.createElement("div");
        card.classList.add("member-card");
  
        card.innerHTML = `
          <img src="${member.logo}" alt="Logo of ${member.name}" loading="lazy">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        `;
  
        highlightContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error loading highlights:", error);
      const container = document.getElementById("highlight-container");
      container.innerHTML = `<p class="error-message">⚠️ Unable to load featured members.</p>`;
    }
  }
  
  getHighlights();
  