document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleButton = document.getElementById("theme-toggle");

  // Apply stored theme preference on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
  }

  // Toggle theme and store preference
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    const currentTheme = body.classList.contains("light-theme") ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
  });
});
