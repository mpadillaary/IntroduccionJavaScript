//* Objetos
const producto = {
    nombreProducto: "monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1,'
}

//* Spread Operator, uniendo los objetos
const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);

