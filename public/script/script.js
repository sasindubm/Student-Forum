// dropdown menu functionality
const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.dropdown-button');
const menu = document.querySelector('.dropdown-menu');

// Toggle menu on button click
button.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        menu.classList.remove('show');
    }
});

