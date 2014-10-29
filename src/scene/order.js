/*
 * Scene - Order
 */

define(function(require, exports) {
    var util = require('../util');

    var OrderModel = require('../model/order');

    /*var statusMap = {
        0: '正常',
        1: '未支付',
        2: '已取消',
        3: '已支付',
        4: '未评价',
        5: '已评价',
        6: '已删除'
    };*/

    var Order = require('../proto/scene').sub({

        el: $('#order'),

        title: '订单详情',

        template: 'order',

        getData: function(params, callback) {

            util.finish([

                OrderModel.fetch.bind(OrderModel, params)

            ], function(order){

                callback(null, {
                    order: order
                });

            });

        },

        render: function(params){
            //params.order.statusText = statusMap[params.order.status];
            Order.__super__.render.apply(this, arguments);

            var page = this.page;

            $('.j-comment').on('tap', function(e){
                page.navigate('/personal/order/' + params.order.id + '/feedback');
            });
        }
    });

    return Order;
});