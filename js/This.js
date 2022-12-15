//This

const reservacion = {
    nombre: 'Miguel',
    apellido: 'Padilla',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su canticad a pagar es de ${this.total}`) //* this hace referencia a los mismos valores que tiene el objeto
    }
}


reservacion.informacion();
