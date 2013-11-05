var express = require('express');
var app = express();

// Root redirects to default page (users)
app.get('/', function(req, res) {
  res.redirect('/users');
});

// View Templates
app.get(/^\/(users|products)$/, function(req, res) {
  res.sendfile('./client/index.html');
});

// Static files
app.get(/^\/(js|css|img|partials)\/(.+)$/, function(req, res) {
  res.sendfile('./client/' + req.params[0] + '/' + req.params[1]);
});

// API (REST, JSON)
app.get('/api/users', function(req, res) {
  res.json([
    {'name': 'Count Zero',
     'avatar': 'img/default_avatar.png'},
    {'name': 'doc',
     'avatar': 'img/default_avatar.png'},
    {'name': 'G-Baer',
     'avatar': 'img/default_avatar.png'},
    {'name': 'h1rich',
     'avatar': 'img/default_avatar.png'},
    {'name': 'Hal_9000',
     'avatar': 'img/default_avatar.png'},
    {'name': 'HEP',
     'avatar': 'img/default_avatar.png'},
    {'name': 'Jan',
     'avatar': 'img/default_avatar.png'},
    {'name': 'vileda',
     'avatar': 'img/default_avatar.png'}
  ]);
});

// Catch-all route (redirect to index)
app.get('*', function(req, res) {
  res.redirect('/');
});

app.listen(3000);
console.log('Listening on port 3000');

