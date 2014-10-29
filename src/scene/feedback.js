/*
 * Scene - Feedback
 */

define(function(require, exports) {
    var util = require('../util');

    var OrderModel = require('../model/order');

    var Feedback = require('../proto/scene').sub({

        el: $('#feedback'),

        title: '填写评价',

        template: 'feedback',

        getData: function(params, callback) {

            util.finish([

                OrderModel.fetch.bind(OrderModel, params)

            ], function(order){

                callback(null, {
                    order: order
                });

            });

        },

        render: function(params){
            Feedback.__super__.render.apply(this, arguments);

            var page = this.page;

            $('.j-submit').on('tap', function(e){
                // TODO submit comment

                page.navigate('/personal');
            });
        }
    });

    return Feedback;
});