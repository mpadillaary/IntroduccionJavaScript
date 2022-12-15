//* Prototypes

const producto = {
  nombre: "Tablet",
  precio: 500,
};

//* Object Constructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto('Monitor Curvo de 49"', 8000);
const producto3 = new Producto("Laptop", 5700);

// function formatearProducto(producto) {
//     return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
// }

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente2 = new Cliente('Miguel', 'Padilla');

function formatearCliente(cliente) {
    return `El nombre del cliente es: ${cliente.nombre} ${cliente.apellido}`;
}

// console.log(formatearCliente(cliente2));

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un costo de ${this.precio}`;
}

console.log(producto3.formatearProducto() );