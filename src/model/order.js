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

        save: function(item){
            var nums = item.fruitnums.split(',').map(function(num){ return parseInt(num, 10); });
            item.fruits.forEach(function(fruit, i){
                fruit.num = nums[i];
            });
            this.create(item);

            require('./address').save(item.receptionAddress);
        },

        createRemotely: function(order, callback){
            $.post(url.createOrder, {
                receptionAddressId: order.addressId,
                fruitIds: order.fruits.map(function(fruit){ return fruit.id; }).join(','),
                fruitnums: order.fruits.map(function(fruit){ return fruit.num; }).join(','),
                amount: order.amount
            }, function(response){
                callback(response.err, response.data);
            });
        }
    });

    return Order;
});