//mini-express server -> new node module

const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

//Notice all chained together
dishRouter.route('/') //why not dishes? -> mounted in index.js
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //will continue to look for specifcations that match dishes endpoint
})
.get((req,res,next) => {
    res.end('Will Send all the dishes to you');
})
.post((req,res,next) =>{ //will carry data with it
    res.end('Will add the dish: ' + req.body.name + ' with details: '
        + req.body.description) ;//body will contain name, description in json string
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) => { //will need to restrict this later
    res.end('Deleting all the dishes');
});

module.exports = dishRouter; //Why? -> exposes dishRouter to other modules