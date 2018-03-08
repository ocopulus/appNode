var socket = io.connect(`${datos.ip1}:8080`, {'forceNew': true});

socket.on('setProc', function(data){
	//let dat2 = JSON.parse(data);
	let arreglo = data.split('\n');
	let informacion = [];
	for (let i = 0; i < arreglo.length - 1; i++){
		//console.log(arreglo[i]);
		let obj = JSON.parse(arreglo[i]);
		let info = [];
		info.push(obj.nombre);
		info.push(obj.pid);
		info.push(obj.estado);
		informacion.push(info);
	}
	
	google.charts.load('current', {'packages':['table']});
    google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Nombre');
        data.addColumn('number', 'PID');
        data.addColumn('string', 'Estado');
        data.addRows(informacion);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }

});

function pedirProc(){
	let dat = {id:1};
	socket.emit('getProc', dat);
}


window.setInterval(function(){
	pedirProc();
},10000);
