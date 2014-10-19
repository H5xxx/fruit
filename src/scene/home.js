/*
 * Scene - Home
 */

define(function(require, exports) {
    var util = require('../util');

    var Notice = require('../model/notice');

    var Home = require('../proto/scene').sub({

        el: $('#home'),

        title: '仙果堂',

        template: 'home',

        getData: function(params, callback) {

            util.finish([

                Notice.fetch.bind(Notice, params)

            ], function(notice){

                callback(null, {
                    notice: notice
                });

            });

        }
    });

    return Home;
});