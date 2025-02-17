// Dropdown menu functionality
function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // Toggle the 'show' class to open/close the menu
  menu.classList.toggle("show");

  // Update aria-expanded attribute for accessibility
  const isExpanded = menu.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", isExpanded);
}

// Close menu when clicking/tapping outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // Close the menu if the click/tap is outside the menu and hamburger icon
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Close menu when tapping on a menu item (optional, for better UX on mobile)
document.getElementById("menu").addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // If the user taps a menu item (link), close the menu
  if (event.target.tagName === "A") {
    menu.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Remove onmouseleave for mobile (optional, but recommended)
function closeMenu() {
  const menu = document.getElementById("menu");
  const menuToggle = document.querySelector(".menu-toggle");
  menu.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
}

// Optional: Detect touch devices and adjust behavior
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
if (!isTouchDevice) {
  // Only use onmouseleave for non-touch devices (desktop)
  document.getElementById("menu").addEventListener("mouseleave", closeMenu);
}
