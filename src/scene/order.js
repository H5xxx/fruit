/*
 * Scene - Order
 */

define(function(require, exports) {

	var OrderModel = require('../model/order');

    var Order = require('../proto/scene').sub({

        el: $('#order'),

        title: '订单详情',

        template: 'order',

        getData: function(params, callback) {

            util.finish([

                OrderModel.fetch.bind(OrderModel, params)

            ], function(orders){

                callback(null, {
                    orders: orders
                });

            });

        },

        render: function(params){
            Shop.__super__.render.apply(this, arguments);

            this.initOrderList();
        }
    });

    return Order;
});