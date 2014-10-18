/*
 * Scene - Bill
 */

define(function(require, exports) {

    var Bill = require('../proto/scene').sub({

        el: $('#bill'),

        title: '订单详情',

        template: 'bill'
    });

    return Bill;
});