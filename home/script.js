// Dropdown menu functionality
function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  menu.classList.toggle("show");
  document.body.classList.toggle("menu-open");

  // Change button icon based on menu state
  menuToggle.innerHTML = menu.classList.contains("show") ? "×" : "☰";
}

// Close menu function
function closeMenu() {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  menu.classList.remove("show");
  document.body.classList.remove("menu-open");
  menuToggle.innerHTML = "☰";
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMenu();
  }
});

// Close menu when clicking on a menu item
document.getElementById("menu").addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    closeMenu();
  }
});

// Close menu on mouse leave for non-touch devices
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
if (!isTouchDevice) {
  document.getElementById("menu").addEventListener("mouseleave", closeMenu);
}
