'use strict';

const express = require('express');
const app = express();

//public files (html, css, etc.)
app.use(express.static('public'));
//read the body of http POST/PUT/PATCH/DELETE request
app.use(express.urlencoded({ extended: false }));

app.get('/test', (req, res) => {
  //e.g. http://localhost:3000/test?demo=this%20is%20just%20a%20test&more=fun&extra=etc
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
  console.log('HTTP POST with body params', req.body);
  res.send(`catinfo with HTTP POST 😊 with name: ${req.body.name} and age: ${req.body.age}`);
});

app.listen(3000);
