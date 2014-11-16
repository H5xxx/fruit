/*
 * Scene - Personal
 */

define(function(require, exports) {
	var util = require('../util');

    var User = require('../model/user');
    var Popup = require('../widget/popup');

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

        },

        render: function(){
            Personal.__super__.render.apply(this, arguments);

            this.el.find('.j-coupon').on('tap', function(e){
                Popup.alert('即将开放，敬请期待！');
            });
        }
    });

    return Personal;
});