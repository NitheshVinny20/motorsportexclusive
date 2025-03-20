// Menu Toggle Function
function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  menu.classList.toggle("show");
  menuToggle.innerHTML = menu.classList.contains("show") ? "×" : "☰";
}

// Close Menu on Outside Click
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("show");
    menuToggle.innerHTML = "☰";
  }
});

// Scroll Animation for Image Sections
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".image-section");
  const triggerPoint = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < triggerPoint && sectionBottom > 0) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});

// Preload First Section on Load
window.addEventListener("load", function () {
  const firstSection = document.querySelector(".image-section");
  if (firstSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
    firstSection.classList.add("active");
  }
});
