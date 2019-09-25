'use strict';
const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.find = async() => {
    const res = await Item.find({
        //active: true
    }, 'title price slug');
    return res;
}

exports.create = async(data) => {
    var item = new Item(data);
    await item.save();
}

exports.update = async(id, data) => {
    await Item
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.remove = async(id) => {
    await Item
        .findOneAndRemove(id);
}

exports.findById = async(id) => {
    const res = await Item.findById(id);
    return res;
}

exports.findItemByMorePlays = async() => {
    const res = await Item.find().sort({number:-1}).limit(1);
    return res;
}

exports.findByPortableRated = async() => {
    const res = await Item.find();
    return res;
}

exports.amount = async() => {
    const res = await Item.find().count();
    return res;
}

exports.findItemByCountGames = async() => {
    const res = await Item.find();
    return res;
}
exports.findItemByProgressos = async() => {
    const res = await Item.find();
    return res;
}
exports.findByFilter = async() => {
    const res = await Item.find();
    return res;
}

exports.findByAdapterRated = async() => {
    const res = await Item.find();
    return res;
}

exports.findByItemRated = async() => {
    const res = await Item.find();
    return res;
}

exports.findByVideoGameRated = async() => {
    const res = await Item.find();
    return res;
}

exports.findItemByCompleted = async() => {
    const res = await Item.find();
    return res;
}
exports.findItemByExpensive = async() => {
    const res = await Item.find();
    return res;
}

exports.findByNewItem = async() => {
    const res = await Item.find();
    return res;
}
exports.findItemByMoreTime = async() => {
    const res = await Item.find();
    return res;
}

exports.findAmountPrice = async() => {
    const res = await Item.find();
    return res;
}
