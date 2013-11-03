var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendfile('./client/index.html');
});

app.get(/^\/(js|css|img)\/(.+)$/, function(req, res) {
  res.sendfile('./client/' + req.params[0] + '/' + req.params[1]);
});

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');

