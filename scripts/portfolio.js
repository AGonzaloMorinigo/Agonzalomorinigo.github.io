
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("#header > *"); // Selecciona solo los elementos directos dentro del header
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("appear");
        }, index * 300); // Añade un pequeño retraso entre las animaciones de cada elemento
    });
});
/*
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.language-btn');
    const elements = document.querySelectorAll('[data-lang-es]');

    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const lang = button.id === 'btn-es' ? 'es' : 'en';
            changeLanguage(lang);
        });
    });

    function changeLanguage(lang) {
        elements.forEach((el) => {
            const text = el.getAttribute(`data-lang-${lang}`);
            if (text) {
                el.innerHTML = text; // Cambia textContent por innerHTML
            }
        });
    }

    // Establece el idioma predeterminado (español)
    changeLanguage('es');
});
*/
