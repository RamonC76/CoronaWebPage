// Animación de línea de tiempo al scroll
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Crear Intersection Observer para detectar cuando los elementos entran en la vista
    const observerOptions = {
        threshold: 0.5, // Se activa cuando el 50% del elemento es visible
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar la clase 'visible' al contenido del evento
                const contenido = entry.target.querySelector('.contenido-evento');
                if (contenido) {
                    contenido.classList.add('visible');
                }
                // Opcional: dejar de observar después de que sea visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos los elementos de la línea de tiempo
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const toggleIcon = navToggle.querySelector('i');

    // Abre o cierra el menú al hacer clic en el botón de hamburguesa
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-visible');

        // Alterna el ícono entre barras y "X"
        if (navMenu.classList.contains('nav-visible')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });

    // Cierra el menú automáticamente al hacer clic en un enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-visible');
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        });
    });
});