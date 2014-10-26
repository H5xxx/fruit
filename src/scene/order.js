/*
 * Scene - Order
 */

define(function(require, exports) {

    var Order = require('../proto/scene').sub({

        el: $('#order'),

        title: '订单详情',

        template: 'order'
    });

    return Order;
});