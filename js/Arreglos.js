//* Arreglos o Arrays

//Arreglos se declaran con corchetes    
const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses2);

const arreglo = ['Hola', 10, true, null, {nombre: 'Juan', trabajo: 'Programador'}, [1, 2, 3]];
console.log(arreglo);

//* Acceder a las posiciones de un arreglo
console.log(arreglo[5][1]);

//Conocer la extensión de un arreglo
console.log(meses.length);

numeros.forEach( function(numero) {
    console.log(numero); 
});