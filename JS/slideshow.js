/**
 * Funciones en el scripy slideshow.js
 * 
 * estas van a controlar el funcionamiento del componente slideshow
 * 
 * este slideshow tendra unos controladores para pasar hacia alante y hacia atras
 * los slides
 * 
 * tambien tendra unos puntos para poder seleccionar y ver cada slide
 * 
 * tambien sera automatico y podremos ir viendo cada slide cada cierto tiempo.
 */

//inicializamos un contador slideIndex
let slideIndex = 1;

showSlide(slideIndex);

//Seleccionamos las flechas para next y prev slide
let nextSlideArrow = document.querySelector(".next");
let prevSlideArrow = document.querySelector(".prev");

nextSlideArrow.addEventListener("click", function(){
    nextPrevSlide(1);
});

prevSlideArrow.addEventListener("click",  function(){
    nextPrevSlide(-1);
});

/**
 * 
 * @param {number} n 
 * 
 * esta funcion aumenta o disminuye el slideIndex en función de parámetro
 * que le llegue
 */
function nextPrevSlide(n) {
    slideIndex = slideIndex + n;
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

    slides[slideIndex - 1].style.display = "block";
    
}