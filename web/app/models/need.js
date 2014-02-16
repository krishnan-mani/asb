'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NeedSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    souls: {
        type: Number
    },
    need: {
        type: String,
        default: '',
        trim: true
    },
    when: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Need', NeedSchema);