var socket = io.connect(`${datos.ip1}:8080`, {'forceNew': true});

socket.on('setCPU', function(data){
  let dat = data.split('\n')[0];
  let datos = dat.split(' ');
  let numero = 0;
  for(let i = 2; i < datos.length; i++){
    //if (i == 5) continue;
    numero += Number(datos[i]);
  }
  console.log(datos[2]);
  let porcentaje = ((numero / Number(datos[5]))-1)*1000;
  console.log(porcentaje);
});

function pedirCPU(){
	let dat = {id:1};
	socket.emit('getCPU', dat);
}

//pedirCPU();