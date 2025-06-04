// Toggle light/dark mode
const toggleButton = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
    icon.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    icon.textContent = '🌙';
  }
  localStorage.setItem('theme', mode);
}

// Load theme from storage
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle on button click
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  setTheme(isDark ? 'light' : 'dark');
});
