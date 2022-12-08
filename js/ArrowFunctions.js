//Funciones Flecha

//expresion de la funcion es donde se pueden ocupar las funciones flecha

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};

const sumar3 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);
sumar3(10, 10);

const aprendiendo = (tecologia) => {
  console.log(`Aprendiendo: ${tecologia}`);
};

aprendiendo("JavaScript");

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

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

//forEach
meses.forEach((mes) => {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

let resultado;

//some ideal para arreglo de objetos
resultado = carrito.some((producto) => producto.nombre == "Celular");

//* Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//* filter
resultado = carrito.filter((produto) => produto.precio > 400);

resultado = carrito.filter((produto) => produto.nombre !== "Celular");

console.log(resultado);
