//popup start
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
  // Here you can add the logic to navigate to the home section if needed
});
//popup end
