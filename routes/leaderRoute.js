const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Sending all the leaders to you');
})
.post((req,res,next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 401;
    res.end('PUT not supported');
})
.delete((req,res,next) => {
    res.end('Deleting all the leaders');
});

leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    res.end('Sending details of: ' + req.params.leaderId);
})
.post((req,res,next) => {
    res.statusCode = 401;
    res.end('POST not supported');
})
.put((req,res,next) => {
    res.end('Will update leader: ' + req.params.leaderId + 'with name: ' +
        req.body.name + 'and description: ' + req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
})

module.exports = leaderRouter;