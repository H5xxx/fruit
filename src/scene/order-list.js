/*
 * Scene - OrderList
 */

define(function(require, exports) {

    var OrderList = require('../proto/scene').sub({

        el: $('#order-list'),

        title: '我的订单',

        template: 'order-list'
    });

    return OrderList;
});