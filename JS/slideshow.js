
//inicializamos un contador slideIndex
let slideIndex = 1;
let autoSlide;

// Mostramos el primer slide cuando se carga la web
showSlide(slideIndex);

//Iniciamos el funcionamiento automático
startAutoSlide();

//Seleccionamos las flechas para next y prev slide
let nextSlideArrow = document.querySelector(".next");
let prevSlideArrow = document.querySelector(".prev");

nextSlideArrow.addEventListener("click", function(){
    stopAutoSlide();
    nextPrevSlide(1);
    startAutoSlide();
});

prevSlideArrow.addEventListener("click",  function(){
    stopAutoSlide();
    nextPrevSlide(-1);
    startAutoSlide();
});

//Seleccionamos todos los puntos dot del HTML


/**
 * 
 * @param {number} n 
 * 
 * Esta funcion aumenta o disminuye el slideIndex en función de parámetro
 * que le llegue
 */
function nextPrevSlide(n) {
    slideIndex = slideIndex + n;
    showSlide(slideIndex);
}

// El click en los puntos actuliza el slideIndex
/**
 * 
 * @param {number} n 
 */
function currentSlide(n) {

    slideIndex = n;
    showSlide(slideIndex);
}


/**
 * 
 * @param {number} slideNum 
 * 
 * Esta funcion hace que se vea un slide en concreto
 */
function showSlide(slideNum){
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideNum < 1) {
        slideIndex = slides.length;
    }

    // Bucle for para recorrer el array de slides
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    // Bucle for para recorrer el array de dots
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active" , "");
    }

    // Accedemos al indice del array de slides o dots para esto tenemos que restar -1 al slideIndex 
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
}

// Automatizamos la llamada a la funcion nextPrevSlide usando la función built-in setInterval()
// Le pasamos el parametro con el valor 1 para avanzar al siguiente slide
// Iniciamos el funcionamiento automático del slideshow
function startAutoSlide() {
    autoSlide = setInterval(function() {
        nextPrevSlide(1);
    }, 3000);
    }

//Detiene EL FUNCIONAMIENTO AUTOMATICO DEL SLIDESHOW
function stopAutoSlide() {
    clearInterval(autoSlide);
}

// setInterval(nextPrevSlide, 3000);

//cuando el usuario haga hover sobre el elemento h1 del DOM
// Se cambiará el color de fondo del elemento header
// EXTRA: Cuando el usuario dehaga hover sobre el elemento h1
// el color volverá a ser el original.


let btnopenmenu = document.querySelector("#btnopenmenu .fa-bars");
let menuOpts = document.querySelector("#menu .menu-flex");

// Identificamos el contenedor del slideshow
let slideshow = document.querySelector(".slideshow-container");

// Abrir menú
btnopenmenu.addEventListener("click", function () {
    menuOpts.classList.add("show-menu");
    // Ocultamos el slideshow
    slideshow.classList.add("hidden");
});

// Cerrar menú
btnclosemenu.addEventListener("click", function () {
    menuOpts.classList.remove("show-menu");
    // Mostramos el slideshow
    slideshow.classList.remove("hidden"); 
});

let menuLinks = document.querySelectorAll("#menu .menu-flex a");

// Agregamos el evento click a cada enlace
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Cierra el menú al hacer click
        menuOpts.classList.remove("show-menu");
        slideshow.classList.remove("hidden");
    });
});




