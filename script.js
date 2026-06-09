const themeBtn = document.getElementById("themeBtn");

// Dark Mode Toggle

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load Saved Theme

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Search Table

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const rows = document.querySelectorAll("table tr");

  rows.forEach((row, index) => {
    if (index === 0) return;

    const text = row.innerText.toLowerCase();

    row.style.display = text.includes(value) ? "" : "none";
  });
});
