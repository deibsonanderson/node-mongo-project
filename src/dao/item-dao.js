'use strict';
const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.get = async() => {
    const res = await Item.find({
        active: true
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

exports.delete = async(id) => {
    await Item
        .findOneAndRemove(id);
}