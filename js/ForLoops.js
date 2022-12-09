//* For Loop

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`El numero ${i} es par.`);
//   } else {
//     console.log(`El numero ${i} es impar.`);
//   }
// }
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

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

//* While Loop

let i = 0; //indice

while(i <10){ //condicion
  if( i % 2 === 0 ) {
    console.log(`El numero ${i} es par.`);
  } else {
    console.log(`El numero ${i} es impar.`);
  }

  i++; //incremento
}

let indexCarrito = 0;
while(indexCarrito < carrito.length){
  console.log(carrito[indexCarrito].nombre);
  indexCarrito++;
}

//* Do while loop

let index = 0;

do {
  
  console.log(index);
  index++;
} while( index < 10);