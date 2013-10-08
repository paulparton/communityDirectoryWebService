var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('carry on...');
});

app.listen('9002');

