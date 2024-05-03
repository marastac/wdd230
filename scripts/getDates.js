var yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

var lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last modified: " + document.lastModified;
