//*POO

//* Object Literal

const producto = {
    nombre: 'Tablet',
    precio: 500
}

//* Object Constructor

//Debe de empzar por mayusculas 
function Producto(nombre, precio, modelo, existencia) {
    this.nombre = nombre;
    this.precio = precio;
    this.modelo = modelo;
    this.existencia = existencia;
}

const producto2 = new Producto('Monitor curvo de 49"', 8000, 'Samsung FireFly', true);
const producto3 = new Producto('Laptop de 14"', 5400, 'HP Probook', false);

console.log(producto2);
console.log(producto3);
