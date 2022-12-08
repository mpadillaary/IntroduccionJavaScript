//* Pasando parametros y argumentos

function sumar(numero1 = 0, numero2 = 0) { //* numero1 y numero2 son parametros, se pueden ocupar lo parametros por default
    console.log(numero1 + numero2);
}

sumar(10, 30); //* Argumentos o los valores reales
sumar(11, 30);
sumar(50, 30);
sumar(170, 30);
sumar(1, 30);

const sumar2 = function(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}

sumar2(5, 20);
sumar();

