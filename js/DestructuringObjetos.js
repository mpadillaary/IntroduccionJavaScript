//* Objetos
const producto = {
    nombreProducto: "monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//* forma anterior
// const precioProduco = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProduco);
// console.log(nombreProducto);

//* Destructuring
// const {precio} = producto;
// const {nombreProducto} = producto;
const {precio, nombreProducto} = producto;

console.log(`Precio: ${precio} \nNombre del producto: ${nombreProducto}`);
