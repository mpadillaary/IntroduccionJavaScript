//Metodos de propiedad, como crearlos

const reprodutor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist: ${nombre}`);
    },
    reproducriPlaylist: function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`);
    }


}

// console.log(reprodutor);

reprodutor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ${id}`);
}
reprodutor.reproducir(3840);
reprodutor.pausar();
reprodutor.borrarCancion(20);
reprodutor.crearPlaylist('Corridos');
reprodutor.reproducriPlaylist('Heavy Metal');




