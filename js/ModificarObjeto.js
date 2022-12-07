//* Modificar objetos 
const producto = {
    nombreProducto: "monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

//* Agregar propiedades
producto.imagen = "imagen.jpg";

//* Eliminar propiedades
delete producto.precio;

console.log(producto);