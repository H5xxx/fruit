/*
 * Scene - Home
 */

define(function(require, exports) {
    var util = require('../util');

    var Framework = require('../model/framework');

    var Home = require('../proto/scene').sub({

        el: $('#home'),

        title: 'HOME',

        template: 'tpl-home',

        getData: function(params, callback) {

            util.finish([

                Framework.fetch(params).bind(Framework)

            ], function(framework){

                callback(null, {
                    framework: framework
                });

            });

        }
    });

    return Home;
});