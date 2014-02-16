'use strict';

var mongoose = require('mongoose'),
    Need = mongoose.model('Need'),
    _ = require('lodash');


exports.need = function(req, res, next, id) {
    Need.load(id, function(err, need) {
        if (err) return next(err);
        if (!need) return next(new Error('Failed to load need ' + id));
        req.need = need;
        next();
    });
};