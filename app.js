const express = require('express');
const people = require('./data/people.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

const server = app.listen(7000, () =>{
  console.log(`Express running -> PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Ravija\'s Page!'
  });
});

app.get('/index', (req, res) => {
  res.render('index', {
    title: 'Ravija\'s Page!'
  });
});


app.get('/header', (req, res) => {
  res.render('header', {
    title: 'Ravija\'s Page!'
  });
});

app.get('/resume', (req, res) => {
  res.render('resume', {
    title: 'Ravija\'s Page!'
  });
});