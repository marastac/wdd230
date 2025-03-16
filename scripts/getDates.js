document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("year").textContent = new Date().getFullYear();

  
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
    
  
    const hamButton = document.getElementById('hamButton');
    const primaryNav = document.getElementById('primaryNav');
    
    hamButton.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        hamButton.textContent = hamButton.textContent === '☰' ? '✕' : '☰';
    });
    
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const main = document.querySelector('main');
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
  
    let visits = localStorage.getItem('visits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visits', visits);
    document.getElementById('visits').textContent = visits;
});