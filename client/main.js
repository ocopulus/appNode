var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use(express.static('public'));

server.listen(8080, function(){
	console.log('Servidor corriendo en http://localhost:8080')
});