'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/test', (req, res) => {
  console.log('get request to /',req.path, req.query);
  res.send(`Hello there! demo URL param: ${req.query.demo} and more: ${req.query.more}`);
});

app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  }
  res.json(cat);
});

app.post('/catinfo', (req, res) => {
  res.send('catinfo with HTTP POST 😊');
});

app.listen(3000);
