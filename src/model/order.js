/*
 * model of order
 */

define(function(require, exports) {
    var url = require('../url');
    var util = require('../util');

    var Order = require('../proto/model').sub();

    Order.configure(
        'Order', 'id', 'createDate', 'status', 'payStatus', 'malutionStatus',
        'price', 'amount',
        'oldfruits', 'num', 'consignee', 'telPhone', 'cityName', 'countryName', 'detailAddress', 'orderid'
    );

    Order.extend({
        url: url.getOrder,

        save: function(item){
            /*var nums = item.fruitnums.split(',').map(function(num){ return parseInt(num, 10); });
            item.oldfruits.forEach(function(fruit, i){
                fruit.num = nums[i];
            });*/
            item.amount = item.amount / 100;
            item.trans_fee = item.trans_fee / 100;
            item.price = item.amount - item.trans_fee;
            item.payDate = Date.parse(item.payDate);
            item.refundable =
                item.status >= 3 && item.status < 6 &&
                item.payDate &&
                (Date.now() - item.payDate) < 1000 * 60 * 60 * 72;
            this.create(item);
        },

        fetchList: function(params, callback, nocache){
            var Model = this;

            var fetched = Model.fetched = Model.fetched || {},
                listUrl = util.format(url.getOrderList, params);

            // cached
            if(!nocache && fetched[listUrl]){
                callback && callback(null, fetched[listUrl]);

            // not cached
            }else{
                $.getJSON(listUrl, function(result){
                    if(result.err){
                        callback && callback(result.err);
                    }else{
                        var list = result.data;

                        // save data as model
                        list.forEach(function(order){
                            Order.save(order);
                        });

                        // cache data
                        fetched[listUrl] = list;

                        callback && callback(null, list);
                    }
                });
            }
        },

        createRemotely: function(order, callback){
            var Model = this;

            $.post(url.createOrder, {
                addressId: order.addressId,
                fruitIds: order.fruits.map(function(fruit){ return fruit.id; }).join(','),
                fruitnums: order.fruits.map(function(fruit){ return fruit.num; }).join(','),
                amount: order.amount * 100
            }, function(response){
                if(!response.err) Model.fetchList({}, null, true);
                callback(response.err, response.data);
            });
        },

        cancelRemotely: function(params, callback){
            var Model = this;

            $.post(util.format(url.cancelOrder, {
                orderId: params.orderId
            }), function(response){
                if(!response.err) Model.fetchList({}, null, true);
                callback(response.err, response.data);
            });
        },

        payRemotely: function(params, callback){
            var Model = this;

            $.post(util.format(url.payOrder, {
                orderId: params.orderId
            }), function(response){
                callback(response.err, response.data);
            });
        },

        refundRemotely: function(params, callback){
            var Model = this;

            $.post(util.format(url.refundOrder, {
                orderId: params.orderId
            }), function(response){
                callback(response.err, response.data);
            });
        }
    });

    return Order;
});