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
