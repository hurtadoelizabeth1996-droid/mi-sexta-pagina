document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar página actual en el menú
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // 2. Alerta de Formulario
    const form = document.getElementById('registroForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito a MARKET MOVIL!');
            form.reset();
        });
    }
});