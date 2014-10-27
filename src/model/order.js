/*
 * model of order
 */

define(function(require, exports) {
    var url = require('../url');

    var Order = require('../proto/model').sub();

    Order.configure(
        'Order', 'id', 'createDate', 'status', 'payStatus', 'malutionStatus',
        'fruits', 'num', 'receptionAddress'
    );

    Order.extend({
        url: url.getOrder,

        createRemotely: function(order, callback){
            callback(null, 3);
        }
    });

    return Order;
});