// script.js

// Modo Oscuro/Claro
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = 'Modo Oscuro/Claro';
toggleThemeBtn.classList.add('btn', 'btn-secondary', 'my-3');
document.querySelector('header').appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});