var socket = io.connect(`http://${datos.ip1}:8080`, {'forceNew': true});

socket.on('setMemoria', function(data){
	console.log(data);
});

function pedirMemeoria(){
	let dat = {id:1};
	socket.emit('getMemoria', dat);
}

pedirMemeoria();