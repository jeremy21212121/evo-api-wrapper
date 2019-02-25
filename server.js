'use strict';

const express = require('express');
const request = require('request');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('x-powered-by', false);//superfluous header

app.get('/cars', (req,res) => {
    
    request('https://evo.ca/api/Cars.aspx', {json: true}, (err,resp,body) => {
        res.set('Access-Control-Allow-Origin','*');
        res.json(body)
    });
    
});

app.post('/', (req,res) => {
    console.log(req.body);
    res.send('cool\n');
    
});

const server = app.listen(8675, ()=>{
    console.log('Server listening on port 8675')
});
