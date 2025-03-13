document.addEventListener("DOMContentLoaded", () => {
    // Año actual en el footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Última modificación de la página
    document.getElementById("lastModified").textContent = "Last Modification: 01/01/1970 12:00:00";
});


