var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf8'));
});
app.use(express.static(__dirname + '/assets'));
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
