'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Need = mongoose.model('Need');

var user;
var need;

describe('<Unit Test>', function() {
    describe('Model Need:', function() {
        beforeEach(function(done) {
            user = new User({
                name: 'Good Samaritan',
                email: 'good@samaritan.com',
                username: 'goodonyer',
                password: 'sanskari'
            });

            user.save(function() {
                need = new Need({
                    souls: 3,
                    need: 'Nutritious conjee',
                    user: user
                });

                done();
            });
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return need.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Need.remove({});
            User.remove({});
            done();
        });

        after(function(done) {
            Need.remove().exec();
            User.remove().exec();
            done();
        });
    });
});
