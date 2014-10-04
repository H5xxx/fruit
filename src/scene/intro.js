/*
 * Scene - Intro
 */

define(function(require, exports) {
    var util = require('../util');

    var Framework = require('../model/framework');
    var Info = require('../model/info');

    var Intro = require('../proto/scene').sub({

        el: $('#intro'),

        title: 'INTRO',

        template: 'tpl-intro',

        getData: function(params, callback) {

            util.finish([

                Framework.fetch(params).bind(Framework),
                Info.fetch(params).bind(Info)

            ], function(framework, infos){

                callback(null, {
                    framework: framework,
                    infos: infos
                });

            });

        }
    });

    return Intro;
});