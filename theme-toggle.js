// Theme toggle button handler
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save preference
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  });
});
