// Set the target date
const targetDate = new Date("February 22, 2025 00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance >= 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  } else {
    document.querySelector(".timer").innerHTML =
      "<h2>The Race Has Begun! 🏁</h2>";
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer();
