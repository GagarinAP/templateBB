var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var module = require('./module/module.js');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/users', function(req,res){
	res.send(module.displayAll());
});
app.get('/users/:id', function(req,res){
	res.send(module.displayId(req.params.id));
});



app.listen(3000,function(){
	console.log('Server 3000 port');
})