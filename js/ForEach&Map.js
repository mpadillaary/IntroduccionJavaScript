const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

//* foreach

carrito.forEach(function(producto) {
    console.log(producto);
});

carrito.forEach( producto => console.log(producto.nombre)); //* forEach se utiliza para iterar y mostar los elemntos en pantalla

//* Map
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`); //* map se utliza cuando se desea crear un arreglo, se le debe asignar una variable


console.log(arreglo2);
