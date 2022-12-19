//* Async /Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes... espere...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos... espere...");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
  });
}

async function app() {
  try {
    // const resultado =  await descargarNuevosClientes();
    // const pedidos = await descargarUltimosPedidos();
    // console.log(resultado);
    // console.log(pedidos);
    const resultado = await Promise.all([
      descargarUltimosPedidos(),
      descargarNuevosClientes(),
    ]); //* para mejorar el performance, usar Promise.all
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}

app();

console.log("Este codigo no se bloquea");
