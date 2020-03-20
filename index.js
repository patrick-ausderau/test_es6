'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('get request to /', req);
  res.send('Hello there!');
});

app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  }
});

app.listen(3000);
