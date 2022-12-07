"use strict"; //*Correr java en modo estricto

//* Objetos
const producto = {
    nombreProducto: "monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//* freeze no deja modificar el objeto
Object.freeze(producto);

// producto.imagen = "imagen.jpg"

console.log(Object.isFrozen(producto));
console.log(producto);

//*Permite modificar los elementos, pero no se pueden elminar ni agregar nuevos elementos
// Object.seal(producto) 

