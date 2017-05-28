const express = require('express');

var app = express(); // calls express method and assigns it to the app variable

app.use(express.static(__dirname + '/public')); // takes absolute path

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>'); // sends response to HTTP request
  res.send({
    name: 'Anna',
    likes: [
      'Traveling',
      'Gadgets'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000); // binds application to our machine

