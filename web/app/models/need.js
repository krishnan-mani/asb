'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NeedSchema = new Schema({
    souls: {
        type: Number
    },
    at: {
        type: Schema.ObjectId,
        ref: 'Location',
        required: true
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
    created: {
        type: Date,
        default: Date.now
    },
    by: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Need', NeedSchema);