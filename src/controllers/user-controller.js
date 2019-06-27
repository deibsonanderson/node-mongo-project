'use strict';

const repository = require('../dao/user-dao');
const authService = require('../auth/auth-service');
const md5 = require('md5');
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

        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.PRIVATE_KEY)
        });
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição do usuário'
        });
    }
};

exports.update = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Usuário atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição do usuário'
        });
    }
};

exports.remove = async(req, res, next) => {
    try {
        await repository.remove(req.body.id)
        res.status(200).send({
            message: 'Usuário removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição do usuário'
        });
    }


};

exports.login = async(req, res, next) => {
    try {
        
        const user = await repository.login({
            email: req.body.email,
            password: md5(req.body.password + global.PRIVATE_KEY),
            roles: ["user"]
        });
        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            name: user.name
        });
        res.status(201).send({
            token: token,
            user: {
                email: user.email,
                name: user.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.refreshLogin = async(req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const user = await repository.findById(data.id);

        if (!user) {
            res.status(404).send({
                message: 'Cliente não encontrado'
            });
            return;
        }

        const tokenData = await authService.generateToken({
            id: user._id,
            email: user.email,
            name: user.name,
            roles: user.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                name: user.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
//FINAL AUTH
};
