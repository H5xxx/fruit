/*
 * Scene - BillList
 */

define(function(require, exports) {

    var BillList = require('../proto/scene').sub({

        el: $('#bill-list'),

        title: '我的订单',

        template: 'bill-list'
    });

    return BillList;
});