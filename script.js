document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos con la clase fade-in
    const faders = document.querySelectorAll('.fade-in');

    // Opciones para el Intersection Observer
    const appearOptions = {
        threshold: 0.15, // El elemento debe estar 15% visible para animarse
        rootMargin: "0px 0px -50px 0px"
    };

    // Creamos el Observer
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Aplicamos el observer a cada elemento
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
