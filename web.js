var express = require('express');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var app = express.createServer(express.logger());
app.use(express.bodyParser());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf8'));
});
app.post('/success', function(request, response) {
var body = "Hi "+request.body.pname+" your appointment has been confirmed on "+request.body.pdate+" you will receive confirmation email shortly to your email "+request.body.pemail+"<html><head></head><body><br/>Click here to <a href='logout.html'>Logout</a></body></html>"; 
//response.send(fs.readFileSync('success.html','utf8'));
response.writeHead(200,{"Content-Type":"text/html"});
response.write(body);
response.end();
});
app.use(express.static(__dirname + '/assets'));
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
