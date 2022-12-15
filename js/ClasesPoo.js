//* Clases en JavaScript

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
  }

  precioProducto() {
    return `El precio del producto es: ${this.precio}`;
  }
}

const producto2 = new Producto('Monitor Cruvo de 49"', 8000);
const producto3 = new Producto('Laptop de 14"', 7500);

console.log(producto2);
console.log(producto3);
