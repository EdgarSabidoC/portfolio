const githubLink = 'https://github.com/EdgarSabidoC';
const linkedInLink = 'https://www.linkedin.com/in/edgar-sabido-cortes/?locale=en_US';
const youtubeLink = 'https://www.youtube.com/@edgarsabidoc';

const toggleSwitch = document.getElementById('toggle-dark-mode');
const visitGithub = document.getElementById('github_btn');
const githubIcons = document.querySelectorAll('.fa-github');
const linkedinIcons = document.querySelectorAll('.fa-linkedin');
const youtubeIcons = document.querySelectorAll('.fa-youtube');

// Object to hold the state of each grid
const hiddenGridStates = {};
const gridStates = {};


document.querySelectorAll('.hidden-grid').forEach(grid => {
  // Initialize the states for all grids
  hiddenGridStates[grid.id] = false; // All grids start hidden
});


document.querySelectorAll('.grid-card').forEach(card => {
  // Add event listener to all grid cards
  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-target'); // Get the ID of the target grid
    const targetGrid = document.getElementById(targetId);

    if (targetGrid) {
      // If the target grid is currently visible, hide it
      if (hiddenGridStates[targetId]) {
        targetGrid.style.display = 'none';
        hiddenGridStates[targetId] = false;
        card.style.transform = 'scale(1)';
        card.style.backgroundColor = '';
        card.style.color = '';
      } else {
        // Hide all other grids before showing the selected one
        Object.keys(hiddenGridStates).forEach(gridId => {
          document.getElementById(gridId).style.display = 'none';
          hiddenGridStates[gridId] = false;
        });

        resetCardStyle(card);

        // Show the selected grid
        targetGrid.style.display = 'block';
        hiddenGridStates[targetId] = true;
        card.style.transform = 'scale(1.1)';
        card.style.backgroundColor = 'var(--header-bg)';
        card.style.color = 'white';

      }
    }
  });
});


document.querySelectorAll('.hidden-grid-card').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = card.getAttribute('data-url');
    console.log("Clicked on THe Woods");
  });
});


function resetCardStyle(activeCard) {
  document.querySelectorAll('.grid-card').forEach(card => {
  if (card !== activeCard) {
    card.style.transform = 'scale(1)';
    card.style.backgroundColor = '';
    card.style.color = '';
  }
});
}

// Toggle dark mode
toggleSwitch.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Restore dark mode on load
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true; // Sincroniza el interruptor con el modo oscuro
  } else {
    document.body.classList.remove('dark-mode');
    toggleSwitch.checked = false; // Asegura que el interruptor esté en modo claro
  }
});

// Handle Contact Me field:
function submitForm() {
    const subject = "Web development inquiry";
    const body = "Hello, ";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


// Handle GitHub button and icons
githubIcons.forEach(icon => icon.addEventListener('click', () => window.location.href = githubLink));
visitGithub.addEventListener('click', () => window.location.href = githubLink);

// Handle LinkedIn icons
linkedinIcons.forEach(icon => icon.addEventListener('click', () => window.location.href = linkedInLink));

// Handle YouTube icons
youtubeIcons.forEach(icon => icon.addEventListener('click', () => window.location.href = youtubeLink));

// Handle menu for mobile
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});