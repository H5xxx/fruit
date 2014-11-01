/*
 * Scene - Personal
 */

define(function(require, exports) {
	var util = require('../util');

    var User = require('../model/user');

    var Personal = require('../proto/scene').sub({

        el: $('#personal'),

        title: '个人中心',

        template: 'personal',

        getData: function(params, callback) {

            util.finish([

                User.fetch.bind(User, params)

            ], function(user){

                callback(null, {
                    user: user
                });

            });

        }
    });

    return Personal;
});