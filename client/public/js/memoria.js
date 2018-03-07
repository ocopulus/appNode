var socket = io.connect(`${datos.ip1}:8080`, {'forceNew': true});

socket.on('setMemoria', function(data){
	let dat2 = JSON.parse(data);
	console.log(dat2);
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
          ['Usado', dat2.total - dat2.libre],
          ['Libre', dat2.libre]
        ]);

        var options = {
          title: 'Memoria Ram'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

});

function pedirMemeoria(){
	let dat = {id:1};
	socket.emit('getMemoria', dat);
}

window.setInterval(function(){
	pedirMemeoria();
},2000);