// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile = document.getElementById("themeToggleMobile");

function toggleTheme() {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

if (themeToggleMobile) {
  themeToggleMobile.addEventListener("click", toggleTheme);
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Check for saved theme preference
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
