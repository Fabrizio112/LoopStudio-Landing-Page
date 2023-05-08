const $MENU = document.querySelector("#menu");
let contadorDeInteracciones = 0;
$MENU.addEventListener("click", () => {

    if (contadorDeInteracciones === 1) {
        let $barraDeNavegacion = document.querySelector("nav");
        $barraDeNavegacion.style.backgroundColor = "transparent";
        let $barraDeNavegacionInferior = document.querySelector("#navbar-right");
        $barraDeNavegacionInferior.style.display = "none"
        let contenedorTituloPrincipal = document.querySelector("#header-text")
        contenedorTituloPrincipal.style.position = "relative"
        contadorDeInteracciones--;

    } else {
        let $barraDeNavegacion = document.querySelector("nav");
        $barraDeNavegacion.style.backgroundColor = "black";
        let $barraDeNavegacionInferior = document.querySelector("#navbar-right");
        $barraDeNavegacionInferior.style.display = "flex"
        let contenedorTituloPrincipal = document.querySelector("#header-text")
        contenedorTituloPrincipal.style.position = "absolute"
        contadorDeInteracciones++
    }
})