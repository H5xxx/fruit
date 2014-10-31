/*
 * Scene - OrderList
 */

define(function(require, exports) {
	var util = require('../util');

    var OrderModel = require('../model/order');

    var OrderList = require('../proto/scene').sub({

        el: $('#order-list'),

        title: '我的订单',

        template: 'order-list',

        getData: function(params, callback) {

            util.finish([

                OrderModel.fetchList.bind(OrderModel, params)

            ], function(list){

                callback(null, {
                    orderList: list
                });

            });

        },

        render: function(params){
            params.orderList.forEach(function(order){
            	order.title = order.oldfruits.map(function(fruit){
            		return fruit.name + '*' + fruit.fruitCount;
            	}).join(', ');
            });

            OrderList.__super__.render.apply(this, arguments);
        }
    });

    return OrderList;
});