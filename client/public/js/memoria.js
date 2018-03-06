var socket = io.connect(`http://${datos.ip1}:8080`, {'forceNew': true});

socket.on('messages', function(data){
	console.log(data);
});

socket.on('setMemoria', function(data){
	console.log(data);
});