'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// schema
const Item = require('./schemas/item');

// routes
const root = require('./routes/root-route');
const itemRoute = require('./routes/item-route');

// database
mongoose.connect(config.connectionUrl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('collection')
})

//outher configs
app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', root);
app.use('/item', itemRoute);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;