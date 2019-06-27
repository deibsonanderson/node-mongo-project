'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

// schemas
const Item = require('./schemas/item');
const User = require('./schemas/user');

// routes
const root = require('./routes/root-route');
const itemRoute = require('./routes/item-route');
const userRoute = require('./routes/user-route');

//outher configs
app.use(bodyParser.json({
    limit: '2mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', root);
app.use('/item', itemRoute);
app.use('/user', userRoute);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// database
mongoose.set('useNewUrlParser', true);
mongoose.connect(config.connectionUrl);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

module.exports = app;