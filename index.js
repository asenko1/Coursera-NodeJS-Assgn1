const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRoute');

const hostname = 'localhost';
const port = 3000;

const app = express(); //our app is going to use express
app.use(morgan('dev'));
app.use(bodyParser.json()); //allows ability to parse body portion -> req.body

app.use('/dishes', dishRouter); //mounting dishRouter at /dishes endpoint
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

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