// Sample news data
const newsItems = [
  { title: "F1 Safety Car Update", date: "2025-01-08" },
  { title: "New MotoGP Rules for 2025", date: "2025-01-07" },
  { title: "Rallycross Championship Preview", date: "2025-01-06" },
  { title: "Formula E's New Circuit", date: "2025-01-05" },
  { title: "Le Mans 24 Hours Schedule Changes", date: "2025-01-04" },
  { title: "NASCAR's New Rookie", date: "2025-01-03" },
  { title: "IndyCar Team Expansion", date: "2025-01-02" },
  { title: "WRC Driver Lineup", date: "2025-01-01" },
  { title: "Drag Racing Season Highlights", date: "2024-12-31" },
  { title: "Superbike World Championship Teams", date: "2024-12-30" },
];

// Load news items
function loadNews(items) {
  const container = document.getElementById("newsContent");
  container.innerHTML = "";
  if (items.length === 0) {
    container.innerHTML = "<p>No news found for this criteria.</p>";
  } else {
    items.forEach((item) => {
      const newsDiv = document.createElement("div");
      newsDiv.className = "news-item";
      newsDiv.innerHTML = `<h3>${item.title}</h3><p>Date: ${item.date}</p>`;
      container.appendChild(newsDiv);
    });
  }
}

// Initial load of all news
loadNews(newsItems);

// Function for showing autocomplete suggestions
function showSuggestions(value) {
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";
  suggestionsDiv.style.display = "none";

  if (value.length < 2) return; // Only show suggestions if at least 2 characters are entered

  const suggestions = newsItems
    .filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
    .map((item) => item.title);

  if (suggestions.length > 0) {
    suggestionsDiv.style.display = "block";
    suggestions.forEach((suggestion) => {
      const div = document.createElement("div");
      div.textContent = suggestion;
      div.addEventListener("click", () => {
        document.getElementById("searchInput").value = suggestion;
        loadNews(newsItems.filter((item) => item.title === suggestion));
        suggestionsDiv.style.display = "none";
      });
      suggestionsDiv.appendChild(div);
    });
  }
}

// Debounce function to limit the number of function calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Adding event listener for live search
document.getElementById("searchInput").addEventListener(
  "input",
  debounce((e) => {
    loadNews(
      newsItems.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    showSuggestions(e.target.value);
  }, 300)
);

// Existing search functionality with animation
document.getElementById("searchButton").addEventListener("click", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "block"; // Show the loader

  setTimeout(() => {
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const filteredNews = newsItems.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    loadNews(filteredNews); // Only show items matching the search
    loader.style.display = "none"; // Hide the loader after search is done
  }, 1000); // Simulate a 1-second delay for the search animation
});

// Date Selection
document.getElementById("dateSelector").addEventListener("change", function () {
  const selectedDate = this.value;
  const filteredNews = newsItems.filter((item) => item.date === selectedDate);
  loadNews(filteredNews);
});
exports.default = series(SCSSTask, jsTask, browserSyncServe, WatchTask);
exports.build = series(SCSSTask, jsTask);
