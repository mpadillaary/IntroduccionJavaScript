//**Fetch API */

async function obtenerEmpleados() {
  const archivo = "Empleados.json";

    // fetch(archivo)
    //   .then((resultado) => resultado.json())
    //   .then((datos) => {
    //       console.log(datos.empleados);

    //     const { empleados } = datos;
    //       console.log(empleados);

    //     empleados.forEach((empleado) => {
    //       console.log(empleado);
    //       console.log(empleado.id);
    //       console.log(empleado.nombre);
    //       console.log(empleado.puesto);

    //       document.querySelector(".contenido").textContent += empleado.nombre; //*Se pone mas igual para que no se reeescriba
    //     });
    //   });

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerEmpleados();
