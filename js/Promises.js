//**Promises */

const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = false;

  if (auth) {
    resolve("Usuario Autenticado"); //**El promises se cumple */
  } else {
    reject("No se pudo iniciar sesión"); //**El promises no se cumple */
  }
})

//* Function 

usuarioAutenticado.then(function (resultado) {
  console.log(resultado);
})
.catch(function (error) {
  console.log(error)
})

//* Arrowfunctions

usuarioAutenticado
 .then(resultado => console.log(resultado))
 .catch(error => console.log(error))

//* En los promises exitesn 3 valores
//* Peding: No se ha cumplido pero tampoco se ha rechazado
//* Fulfilled: ya se cumplio
//* Rejected: Se ha rechazado o no se pudo cumplir
