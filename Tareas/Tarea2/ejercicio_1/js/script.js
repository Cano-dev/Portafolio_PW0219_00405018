//Definicion de variables

var opciones = document.getElementsByClassName("options");

//Declaracion de funciones

function controlMenu() {
    const ocu = document.getElementById("menu");
    ocu.classList.toggle("hide-mobile");
    
    const barr = document.querySelector('.options .fa-bars');
    barr.classList.toggle("hide-mobile");
    
    const equis = document.querySelector(".options .fa-times");
    equis.classList.toggle("hide-mobile");
    
}

//Ejecucion de eventos
opciones[0].addEventListener("click", controlMenu, false);


