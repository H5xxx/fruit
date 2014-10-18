/*
 * Scene - Pay
 */

define(function(require, exports) {

    var Pay = require('../proto/scene').sub({

        el: $('#pay'),

        title: '支付订单',

        template: 'pay'
    });

    return Pay;
});