'use strict';

const repository = require('../dao/item-dao');
var config = require('../config');

exports.find = async(req, res, next) => {
    try {
        var data = await repository.find();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.create = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.update = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.remove = async(req, res, next) => {
    try {
        await repository.remove(req.body.id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.findItemByMorePlays = async(req, res, next) => {
    try {
        var data = await repository.findItemByMorePlays();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.amount = async(req, res, next) => {
    try {
        var data = await repository.amount();
        console.log(data);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findItemByCountGames = async(req, res, next) => {
    try {
        var data = await repository.findItemByCountGames();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findItemByProgressos = async(req, res, next) => {
    try {
        var data = await repository.findItemByProgressos();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findByFilter = async(req, res, next) => {
    try {
        var data = await repository.findByFilter();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findById = async(req, res, next) => {
    try {
        var data = await repository.findById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findByAdapterRated = async(req, res, next) => {
    try {
        var data = await repository.findByAdapterRated();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findItemByCompleted = async(req, res, next) => {
    try {
        var data = await repository.findItemByCompleted();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findItemByExpensive = async(req, res, next) => {
    try {
        var data = await repository.findItemByExpensive();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findByItemRated = async(req, res, next) => {
    try {
        var data = await repository.findByItemRated();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findByNewItem = async(req, res, next) => {
    try {
        var data = await repository.findByNewItem();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findItemByMoreTime = async(req, res, next) => {
    try {
        var data = await repository.findItemByMoreTime();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findByVideoGameRated = async(req, res, next) => {
    try {
        var data = await repository.findByVideoGameRated();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.findAmountPrice = async(req, res, next) => {
    try {
        var data = await repository.findAmountPrice();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.findByPortableRated = async(req, res, next) => {
    try {
        var data = await repository.findByPortableRated();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}