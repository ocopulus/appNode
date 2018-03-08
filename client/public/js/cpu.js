var socket = io.connect(`${datos.ip1}:8080`, {'forceNew': true});

socket.on('setCPU', function(data){
	console.log(data);
});

function pedirCPU(){
	let dat = {id:1};
	socket.emit('getCPU', dat);
}

pedirCPU();