/*
 * model of order
 */

define(function(require, exports) {
    var url = require('../url');
    var util = require('../util');

    var Order = require('../proto/model').sub();

    Order.configure(
        'Order', 'id', 'createDate', 'status', 'payStatus', 'malutionStatus',
        'oldfruits', 'num', 'consignee', 'telPhone', 'cityName', 'countryName', 'detailAddress'
    );

    Order.extend({
        url: url.getOrder,

        save: function(item){
            var nums = item.fruitnums.split(',').map(function(num){ return parseInt(num, 10); });
            item.oldfruits.forEach(function(fruit, i){
                fruit.num = nums[i];
            });
            this.create(item);
        },

        fetchList: function(params, callback){
            var Model = this;

            var fetched = Model.fetched = Model.fetched || {},
                listUrl = util.format(url.getOrderList, params);

            // cached
            if(fetched[listUrl]){
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
            $.post(url.createOrder, {
                receptionAddressId: order.addressId,
                fruitIds: order.fruits.map(function(fruit){ return fruit.id; }).join(','),
                fruitnums: order.fruits.map(function(fruit){ return fruit.num; }).join(','),
                amount: order.amount
            }, function(response){
                if(!response.err) Order.save(response.data);
                callback(response.err, response.data);
            });
        }
    });

    return Order;
});