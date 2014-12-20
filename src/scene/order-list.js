/*
 * Scene - OrderList
 */

define(function(require, exports) {
    var util = require('../util');

    var OrderModel = require('../model/order');
    var Popup = require('../widget/popup');

    var OrderList = require('../proto/scene').sub({

        el: $('#order-list'),

        title: '我的订单',

        template: 'order-list',

        getData: function(params, callback) {

            this.params = params;

            util.finish([

                OrderModel.fetchList.bind(OrderModel, params)

            ], function(list){

                callback(null, {
                    orderList: list
                });

            });

        },

        render: function(params){
            var me = this;

            params.orderList.forEach(function(order){
                order.title = order.oldfruits.map(function(fruit){
                    return fruit.name + '*' + fruit.fruitCount;
                }).join(', ');
            });

            OrderList.__super__.render.apply(this, arguments);

            this.el.find('.j-cancel').on('tap', function(e){
                e.stopPropagation();

                var orderId = $(this).attr('data-order-id');

                Popup.confirm('订单删除后将无法恢复，确定要删除吗？', function(result){
                    if(result){
                        OrderModel.cancelRemotely({
                            orderId: orderId
                        }, function(err, data){
                            me.refreshList();
                        });
                    }
                });
            });
        },

        refreshList: function(){
            var me = this;
            OrderModel.fetchList(me.params, function(err, list){
                if(!err){
                    me.params.orderList = list;
                    me.render(me.params);
                }
            }, true)
        }
    });

    return OrderList;
});