const url = "data/members.json";
const container = document.querySelector("#members-container");
const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");

// Load and display members
async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    const img = document.createElement("img");
    img.src = member.logo; // <- CAMBIADO de 'member.image' a 'member.logo'
    img.alt = `Logo of ${member.name}`;
    img.loading = "lazy";

    const name = document.createElement("h3");
    name.textContent = member.name;

    const membership = document.createElement("p");
    membership.textContent = `Membership Level: ${member.membership}`;

    const description = document.createElement("p");
    description.textContent = member.description || ""; // si no hay, evita error

    const address = document.createElement("p");
    address.textContent = member.address;

    const phone = document.createElement("p");
    phone.textContent = member.phone;

    const website = document.createElement("a");
    website.href = member.website;
    website.textContent = "Visit Website";
    website.target = "_blank";

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(membership);
    card.appendChild(description);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    container.appendChild(card);
  });
}

// Toggle views
gridBtn.addEventListener("click", () => {
  container.classList.add("grid-view");
  container.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  container.classList.add("list-view");
  container.classList.remove("grid-view");
});

getMembers();
