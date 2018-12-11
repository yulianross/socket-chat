var socket = io();
var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw  new Error('el nombre y la sala es necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

socket.on('connect', function() {
    socket.emit('entrarChat', usuario, function(resp) {
        console.log(resp);
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');
});

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log(mensaje);

});

// Escuchar información
socket.on('listaPersona', function(mensaje) {

    console.log('Servidor:', mensaje);

});

// mensajes privados
socket.on('msgPrivado', function(mensaje) {
    console.log(mensaje);
});