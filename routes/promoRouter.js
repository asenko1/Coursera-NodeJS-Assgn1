const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Sending all the promotions to you');
})
.post((req,res,next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 401;
    res.end('PUT not supported');
})
.delete((req,res,next) => {
    res.end('Deleting all the promotions');
});

promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('Sending details of: ' + req.params.promoId);
})
.post((req,res,next) => {
    res.statusCode = 401;
    res.end('POST not supported');
})
.put((req,res,next) => {
    res.end('Will update promo: ' + req.params.promoId + 'with name: ' +
        req.body.name + 'and description: ' + req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting promo: ' + req.params.promoId);
})

module.exports = promoRouter;