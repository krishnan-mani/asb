'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    addressLineOne: {
        type: String,
        required: true
    },
    addressLineTwo: String,
    city: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    by: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Location', LocationSchema);