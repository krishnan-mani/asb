'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Location = mongoose.model('Location');

var user;
var location;

describe('<Unit Test>', function() {
    describe('Model Location', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Good Samaritan',
                email: 'good@samaritan.com',
                username: 'goodonyer',
                password: 'sanskari'
            });

            user.save(function() {
                location = new Location({
                    name: 'Mathura',
                    addressLineOne: 'Vrindavan',
                    city: 'Mathura',
                    by: user
                });

                done();
            });
        });

        describe('Methods Save', function() {
            it('should save without problems', function(done) {
                return location.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Location.remove();
            User.remove();
            done();
        });

        after(function(done) {
            Location.remove().exec();
            User.remove().exec();
            done();
        });
    });
});