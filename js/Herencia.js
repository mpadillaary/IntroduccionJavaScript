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

//* Herencia

class Libro extends Producto {
  //* Se utiliza extends para la herencia de las clase padre*/
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su isbn es : ${this.isbn}`;
  }

  precioProducto() {
    super.precioProducto();
    console.log('Si hay en existencia');
  }

}

const Libro2 = new Libro("JavaScript la Revolución", 500, 1238120912837);
console.log(Libro2.formatearProducto());
console.log(Libro2.precioProducto());


