'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/item-controller');
const authService = require('../auth/auth-service');

router.get('/', authService.authorize, controller.find);
router.post('/', authService.authorize, controller.create);
router.put('/:id', authService.authorize, controller.update);
router.delete('/', authService.authorize, controller.remove);
router.get('/count-games',authService.authorize,controller.findItemByCountGames);
router.get('/filter',authService.authorize,controller.findByFilter);
router.get('/progression',authService.authorize,controller.findItemByProgressos);
router.get('/video-game',authService.authorize,controller.findByFilter);
router.get('/{id}',authService.authorize,controller.findById);
router.get('/more​/adapter-rated',authService.authorize,controller.findByAdapterRated);
router.get('/more​/completed',authService.authorize,controller.findItemByCompleted);
router.get('/more​/expensive',authService.authorize,controller.findItemByExpensive);
router.get('/more​-rated',authService.authorize,controller.findByItemRated);
router.get('/more​/new',authService.authorize,controller.findByNewItem);
router.get('/more​/play',authService.authorize,controller.findItemByMorePlays);
router.get('/more​/portable-rated',authService.authorize,controller.findByPortableRated);
router.get('/more​/time',authService.authorize,controller.findItemByMoreTime);
router.get('/more​/video-game-rated',authService.authorize,controller.findByVideoGameRated);
router.get('/item/amount-price',authService.authorize,controller.findAmountPrice);


module.exports = router;