const input = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

addButton.addEventListener("click", () => {
    const chapter = input.value.trim();

    if (chapter === "") {
        alert("Please enter a chapter.");
        return;
    }

    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    listItem.textContent = chapter;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        input.focus();
    });

    input.value = "";
    input.focus();
});
