'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    currentPrice: {
        type: Number,
        required: false
    },
    pricePaid: {
        type: Number,
        required: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    },
    status: {
        type: String,
        required: false,
        enum: ['E', 'P', 'C'],
        default: 'C'
    },
    provenance: {
        type: String,
        required: false,
        enum: ['Original', 'Pirate'],
        default: 'Original'
    },
    region: {
        type: String,
        required: false,
        trim: true
    },
    platform: {
        type: String,
        required: false,
        trim: true
    },
    type: {
        type: String,
        required: false,
        trim: true
    },
    code: {
        type: String,
        required: false,
        trim: true
    },
    complement: {
        type: String,
        required: false,
        trim: true
    },
    evaluation: {
        type: Number,
        required: false
    },
    localStorage: [{
        type: String,
        required: false,
        trim: true
    }],
    flagDiscCartridge: {
        type: Boolean,
        required: false,
        default: false
    },
    flagReplica: {
        type: Boolean,
        required: false,
        default: false
    },
    flagProtector: {
        type: Boolean,
        required: false,
        default: false
    },
    flagCdDvdGdBd: {
        type: Boolean,
        required: false,
        default: false
    },
    flagBox: {
        type: Boolean,
        required: false,
        default: false
    },
    flagManual: {
        type: Boolean,
        required: false,
        default: false
    },
    flagCrib: {
        type: Boolean,
        required: false,
        default: false
    },
    flagPaintpamphlet: {
        type: Boolean,
        required: false,
        default: false
    },
    flagPoster: {
        type: Boolean,
        required: false,
        default: false
    },
    flagInvoice: {
        type: Boolean,
        required: false,
        default: false
    },
    flagSealed: {
        type: Boolean,
        required: false,
        default: false
    },
    flagGlover: {
        type: Boolean,
        required: false,
        default: false
    },
    user: {
        type: String,
        required: true,
        trim: true
    },
    progression: {
        type: String,
        required: false,
        trim: true
    },
    haveGame: {
        type: Boolean,
        required: false,
        default: false
    },
    situation: {
        type: String,
        required: false,
        trim: true
    },
    genre: {
        type: String,
        required: false,
        trim: true
    },
    producer: {
        type: String,
        required: false,
        trim: true
    },
    publisher: {
        type: String,
        required: false,
        trim: true
    },
    numberOfPlays: {
        type: Number,
        required: false
    },
    timeOfPlays: {
        type: String,
        required: false,
        trim: true
    },
    screenshots: [{
        type: String,
        required: false,
        trim: true
    }],
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', schema);