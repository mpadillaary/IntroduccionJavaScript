
//* Declaracion de funciones

function sumar() {
    console.log(10 + 10);
}

sumar();

//* Expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

//* IIFE Previenen que no se mezclen las variables que se encuentrar en otros archivos
(function(){
    console.log("Esto es una funcion");
})();

