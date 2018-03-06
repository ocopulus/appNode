var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var fs = require('fs');

app.use(express.static('public'));

io.on('connection', function(socket){
	console.log('Alguin se a conectado con Sockets');
	//socket.emit('messages', [{id:1, nombre:'juan'},{id:2, nombre: 'jose'}]);
	socket.on('getMemoria', function(data){
		console.log('archivo');
		let memoria = fs.readFileSync('/proc/me_201404412', 'utf-8');
		console.log('enviardo inf memoria: '+memoria);
		socket.emit('setMemoria', memoria);
	});
});

server.listen(8080, function(){
	console.log('Servidor corriendo en http://localhost:8080')
});
