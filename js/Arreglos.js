//* Arreglos o Arrays

//Arreglos se declaran con corchetes
const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");
console.table(meses);

const meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses2);

// const arreglo = [
//   "Hola",
//   10,
//   true,
//   null,
//   { nombre: "Juan", trabajo: "Programador" },
//   [1, 2, 3],
// ];
// console.log(arreglo);

// //* Acceder a las posiciones de un arreglo
// console.log(arreglo[5][1]);

// //Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach(function (numero) {
//   console.log(numero);
// });

// numeros[5] = 60;
// numeros[6] = 70;

numeros.push(60);
numeros.push (80, 90 ,100); //Agregar numeros al final del arreglo

numeros.unshift(-10, -20, -30); //Agregar elementos al inicio del arreglo


console.table(numeros);

// meses.pop(); //elimina  el ultimo elemento del arreglo
// meses.shift(); //elimina el primer elemento del arreglo
meses.splice(2, 1); //elimina el elmento seleccionado del arreglo

console.table(meses);

//rest operator o spread operator
const nuevoArreglo = ['Diciembre', ...meses, 'Junio'];
console.table(nuevoArreglo);

