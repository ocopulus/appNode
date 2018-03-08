var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.render('index2');
});

app.get('/memoria', (req, res)=>{
	res.render('memoria');
});

app.get('/procesos', (req, res)=>{
	res.render('proc');
});


server.listen(8080, function(){
	console.log('Servidor corriendo en http://localhost:8080')
});