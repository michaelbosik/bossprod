// script.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a[data-section]");
    const sections = document.querySelectorAll("main .section");
  
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-section");
  
        sections.forEach(section => {
          section.classList.add("hidden");
        });
  
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.remove("hidden");
        }
      });
    });
  });
  