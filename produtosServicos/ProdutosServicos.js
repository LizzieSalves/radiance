let nav = document.getElementById('nav-mobile');

function navMobileMostrar() {
    nav.style.display = 'block';
    document.addEventListener('click', (event) => {
        if (event.target !== nav && !nav.contains(event.target)){
            ocultarNav();
        }
    });
    document.addEventListener('touchend', (event) => {
        if (event.target !== nav && !nav.contains(event.target)) {
          ocultarNav();
        }
    });
}

function ocultarNav() {
    nav.style.display = 'none';
    document.removeEventListener('click', ocultarNav);
    document.removeEventListener('touchend', ocultarNav);
}

