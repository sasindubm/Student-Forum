// Modern slider theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Set initial state
if (localStorage.getItem('theme') === 'dark') {
        themeToggle.checked = true;
        body.classList.remove('light');
        body.classList.add('dark');
}

themeToggle.addEventListener('change', function () {
        if (this.checked) {
                body.classList.remove('light');
                body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
        } else {
                body.classList.remove('dark');
                body.classList.add('light');
                localStorage.setItem('theme', 'light');
        }
});
