/*
 * Scene - Refund
 */

define(function(require, exports) {
    var util = require('../util');
    var url = require('../url');

    var OrderModel = require('../model/order');
    var Popup = require('../widget/popup');

    var Refund = require('../proto/scene').sub({

        el: $('#refund'),

        title: '申请退款',

        template: 'refund',

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

            Refund.__super__.render.apply(this, arguments);

            var page = this.page;

            $('.j-submit').on('tap', function(e){
                var reason = $('.j-reason').val();

                OrderModel.refundRemotely({
                    orderId: params.orderId,
                    reason: reason
                }, function(err, data){
                    if(err){
                        Popup.alert('请求失败！请重试');
                    }else{
                        Popup.alert('申请成功，我们将尽快处理！', function(){
                            OrderModel.cleanCache();
                            page.navigate('/personal/order/' + params.orderId);
                        });
                    }
                });
            });
        }
    });

    return Refund;
});