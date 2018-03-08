var socket = io.connect(`${datos.ip1}:8080`, {'forceNew': true});

socket.on('setMemoria', function(data){
	//let dat2 = JSON.parse(data);
	console.log(data);
});

function pedirProc(){
	let dat = {id:1};
	socket.emit('getProc', dat);
}

pedirProc();