const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express(); //our app is going to use express
app.use(morgan('dev'));
app.use(bodyParser.json()); //allows ability to parse body portion -> req.body

app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //will continue to look for specifcations that match dishes endpoint
});

app.get('/dishes', (req,res,next) => {
    res.end('Will Send all the dishes to you');
});

app.post('/dishes', (req,res,next) =>{ //will carry data with it
    res.end('Will add the dish: ' + req.body.name + ' with details: '
        + req.body.description) ;//body will contain name, description in json string
});

app.put('/dishes', (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes', (req,res,next) => { //will need to restrict this later
    res.end('Deleting all the dishes');
});

app.get('/dishes/:dishId', (req,res,next) => { 
    res.end('Will send details of the dish: ' + req.params.dishId);
});

app.post('/dishes/:dishId', (req,res,next) =>{ //will carry data with it
    res.statusCode = 403;
    res.end('POST not supported on dishId');    
});

app.put('/dishes/:dishId', (req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req,res,next) => { //will need to restrict this later
    res.end('Deleting dish: ' + req.params.dishId);
});



app.use(express.static(__dirname+ '/public')); //serve static files from...

//server setup
app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});