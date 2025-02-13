// Popup functionality (unchanged)
document.addEventListener("DOMContentLoaded", (event) => {
  if (!sessionStorage.getItem("popupShown")) {
    document.getElementById("popup").style.display = "block";
    sessionStorage.setItem("popupShown", "true");
  }
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("homeButton").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default action of the link
  // Add logic to navigate to the home section if needed
});

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
