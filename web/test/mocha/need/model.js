'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Location = mongoose.model('Location'),
    Need = mongoose.model('Need');

var user;
var location;
var need;

describe('<Unit Test>', function() {
    describe('Model Need:', function() {

        describe('Method Save', function() {
            it('should save without problems', function(done) {

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

                    location.save(function() {
                        need = new Need({
                            souls: 3,
                            at: location,
                            need: 'Nutritious conjee',
                            by: user
                        });

                        return need.save(function(err) {
                            should.not.exist(err);
                            done();
                        });
                    });
                });

            });
        });

        afterEach(function(done) {
            Need.remove({});
            Location.remove({});
            User.remove({});
            done();
        });

        after(function(done) {
            Need.remove().exec();
            Location.remove().exec();
            User.remove().exec();
            done();
        });
    });
});
