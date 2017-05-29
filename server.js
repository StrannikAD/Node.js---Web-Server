const express = require('express');
const hbs = require('hbs');

var app = express(); // calls express method and assigns it to the app variable

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); // takes absolute path

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>'); // sends response to HTTP request
  // res.send({
  //   name: 'Anna',
  //   likes: [
  //     'Traveling',
  //     'Gadgets'
  //   ]
  // });
  res.render('home.hbs', {
  pageTitle: 'Home Page',
  welcomeMessage: 'Welcome to my website',
  currentYear: new Date().getFullYear()
  });
});


app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
}); // binds application to our machine

