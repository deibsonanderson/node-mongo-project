'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/item-controller');

router.get('/', controller.find);
router.post('/',controller.create);
router.put('/:id', controller.update);
router.delete('/',controller.remove);

module.exports = router;