var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/hola' , function(req, res){
	res.status(200).send("hola Mundo!!");
});

io.on('connection', function(socket){
	console.log('Alguin se a conectado con Sockets');
	socket.emit('messages', {
		id: 1,
		text: "hola soy un mensaje",
		author: "Juan Jose"
	})
});

server.listen(8080, function(){
	console.log('Servidor corriendo en http://localhost:8080')
});
