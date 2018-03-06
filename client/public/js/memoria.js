var socket = io.connect(`${datos.ip1}:8080`, {'forceNew': true});

socket.on('setMemoria', function(data){
	console.log(data);
});

function pedirMemeoria(){
	let dat = {id:1};
	socket.emit('getMemoria', dat);
	return false;
}

pedirMemeoria();