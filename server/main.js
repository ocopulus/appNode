var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
const { exec } = require('child_process');

app.use(express.static('public'));

io.on('connection', function(socket){
	console.log('Alguin se a conectado con Sockets');
	//socket.emit('messages', [{id:1, nombre:'juan'},{id:2, nombre: 'jose'}]);
	socket.on('getMemoria', function(data){
		console.log('getMemoria');
		let memoria = fs.readFileSync('/proc/me_201404412', 'utf-8');
		console.log('enviardo inf memoria: '+memoria);
		socket.emit('setMemoria', memoria);
	});

	socket.on('getProc', function(data){
		console.log('getProc');
		let proc = fs.readFileSync('/proc/proc_201404412', 'utf-8');
		console.log('procesos enviados');
		socket.emit('setProc', proc);
	});

	socket.on('getCPU',function(data){
		exec('cat /proc/stat', (error, stdout, stderr) => {
		  if (error) {
		    console.error(`exec error: ${error}`);
		    return;
		  }
		  //console.log(`stdout: ${stdout}`);
		  socket.emit('setCPU',stdout);
		  //console.log(`stderr: ${stderr}`);
		});
	});
});

server.listen(8080, function(){
	console.log('Servidor corriendo en http://localhost:8080')
});
