var swiper = new Swiper(".mySwiper", {
    effect: "coverflow", // Efecto de coverflow
    grabCursor: true,    // Para hacer que el cursor tenga forma de mano al arrastrar
    centeredSlides: true, // Centra el primer slide
    slidesPerView: "auto", // Esto ya es dinámico para que se ajuste al tamaño del contenedor
    loop: true,  // Hace que el carrusel sea continuo
    coverflowEffect: {
        rotate: 15,   // Ángulo de rotación de los slides
        stretch: 0,   // Distancia entre los slides
        depth: 300,   // Profundidad del efecto
        modifier: 1,  // Modificador de la intensidad del efecto
        slideShadows: true, // Sombra de los slides
    },
    breakpoints: {
        // Ajustes para pantallas más pequeñas
        320: {
            slidesPerView: 1, // Muestra 1 slide en pantallas pequeñas
            coverflowEffect: {
                rotate: 10, // Reduce la rotación en pantallas pequeñas
                depth: 200, // Reduce la profundidad
            }
        },
        480: {
            slidesPerView: 1.5, // Muestra 1.5 slides en pantallas medianas
            coverflowEffect: {
                rotate: 10,
                depth: 250,
            }
        },
        768: {
            slidesPerView: 2, // Muestra 2 slides en pantallas más grandes
            coverflowEffect: {
                rotate: 15,
                depth: 300,
            }
        },
        1024: {
            slidesPerView: 3, // Muestra 3 slides en pantallas grandes
            coverflowEffect: {
                rotate: 20,
                depth: 300,
            }
        },
        1280: {
            slidesPerView: 4, // Muestra 4 slides en pantallas extra grandes
            coverflowEffect: {
                rotate: 25,
                depth: 350,
            }
        }
    },
});