// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Sidebar Navigation

const menuItems = document.querySelectorAll(".menu-item");
const pageTitle = document.getElementById("pageTitle");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => {
      i.classList.remove("active");
    });

    item.classList.add("active");

    pageTitle.textContent = item.getAttribute("data-title");
  });
});

// Search Table

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const text = row.innerText.toLowerCase();

    row.style.display = text.includes(value) ? "" : "none";
  });
});

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.dataset.target;

    const current = +counter.innerText.replace(/[^0-9]/g, "");

    const increment = Math.ceil(target / 100);

    if (current < target) {
      const value = Math.min(current + increment, target);

      if (counter.dataset.type === "currency") {
        counter.innerText = "$" + value.toLocaleString();
      } else {
        counter.innerText = value.toLocaleString();
      }

      setTimeout(updateCounter, 20);
    } else {
      if (counter.dataset.type === "currency") {
        counter.innerText = "$" + target.toLocaleString();
      } else {
        counter.innerText = target.toLocaleString();
      }
    }
  };

  updateCounter();
});
