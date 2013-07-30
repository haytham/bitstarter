var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send( fs.readFileSync( './index.html' ).toString() );
});

// heroku
//var port = process.env.PORT || 5000;

// amazon ec2 port
var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
