var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Blog = require('./module/module.js')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// ROUTES

app.get('/api/blogs', function(req, res) {
	res.send(Blog.displayAll());	
});

app.get('/api/blogs/:id', function(req, res) {
	res.send(Blog.displayId(req.params.id));	
});

app.listen(3000, function(){
	console.log('Server on 3000 port');
});
