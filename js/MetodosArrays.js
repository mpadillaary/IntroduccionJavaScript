//Array Methods
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

//forEach
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//includes
let resultado = meses.includes('Marzo');
// console.log(resultado);

// const resultado2 = carrito.includes('Celular');
// console.log(resultado2);

//some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre == 'Celular'
});

//* Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);

//* filter
resultado = carrito.filter(function(produto){
    return produto.precio > 400;
});

resultado = carrito.filter(function(produto){
    return produto.nombre !== 'Celular'
});

console.log(resultado);

