## SLIDESHOW_JS_NATIVO

Para debuggear (BUSCAR Y SOLUCIONAR ERRORES) el código de una forma más precisa, podemos incluir dentro de nuestros script la orden "debbuger

Podemos salir del modo debugger o pasar a otra orden debugger o a otro breakpoint con F8 o ir ejecutando el código linea por linea con F10. 

WARNING: Nunca, bajo ningun concepto, podemos dejarnos olvidada una orden debugger en el código cuando este código pase a producción.

arrExample[2][3]

Tenemos que definir los eventos de click sobre los puntos (dot) dentro del archivo js 

1) Eliminamos los eventos del DOM de onclick
2) Sacamos la variable dots fuera de la funcion showSlide()  let dots = document.querySelectorAll(".dot");
3) Recorremos el array dots con un bucle for y a cada dot le asociamos un evento click
4) Dentro del evento tendremos que definir la logica de:
    - stopAutoSlide()
    - currentSlide() -> Aquí tendremos que pasar como parametro el indice del punto
    - startAutoSlide()

