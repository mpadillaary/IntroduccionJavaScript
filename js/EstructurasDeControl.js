//* Estructuras de control

const puntaje = 1001;

if (puntaje == 1000) {
  console.log("Si el puntaje es 1000");
} else {
  console.log("No es igual a 1000");
}

const efectivo = 2000;
const carrito = 800;

if (efectivo > carrito) {
  console.log("El usuario puede pagar.");
} else {
  console.log("Fondos insuficientes.");
}

const rol = "Administrador";

if (rol == "Administrador") {
  console.log("Acceso a todo el sistema.");
} else if (rol == "Editor") {
  console.log("Eres editor, puedes entrar pero con ciertos permisos.");
} else {
  console.log("No tiene permisos de administrador.");
}

