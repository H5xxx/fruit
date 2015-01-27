/*
 * Scene - Order
 */

define(function(require, exports) {
    var util = require('../util');

    var Popup = require('../widget/popup');

    var OrderModel = require('../model/order');

    /*var statusMap = {
        0: '正常',
        1: '未支付',
        2: '已取消',
        3: '已支付',
        4: '未评价',
        5: '已评价',
        6: '已删除',
        7: '退款中',
        8: '已退款'
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

            $('.j-refund').on('tap', function(e){
                //page.navigate('/personal/order/' + params.orderId + '/refund');
                Popup.confirm('确定退款？', function(sure){
                    if(!sure) return;

                    OrderModel.refundRemotely({
                        orderId: params.orderId
                    }, function(err, data){
                        if(err){
                            Popup.alert('请求失败！请重试');
                        }else{
                            Popup.alert('申请成功，我们将尽快处理！', function(){
                                OrderModel.cleanCache();
                                page.navigate('/personal/order-list');
                            });
                        }
                    });
                });
            });

            $('.j-comment').on('tap', function(e){
                page.navigate('/personal/order/' + params.orderId + '/feedback');
            });

            $('.j-pay').on('tap', function(e){
                var loading = Popup.alert('请求支付中...');

                OrderModel.payRemotely({
                    orderId: params.orderId
                }, function(err, data){

                    loading.hide();

                    if(err){
                        Popup.alert('请求失败！请重试');
                    }else{
                        if(typeof WeixinJSBridge === 'undefined'){
                            Popup.alert('请在微信（版本5.0以后）中进行操作！');
                            return;
                        }
                        WeixinJSBridge.invoke('getBrandWCPayRequest', data, function(res){
                            if(res.err_msg === 'get_brand_wcpay_request:ok'){
                                Popup.alert('支付完成！我们将尽快安排配送', function(){
                                    OrderModel.cleanCache();
                                    page.navigate('/personal/order-list');
                                });
                            }
                        });
                    }
                });
            });
        }
    });

    return Order;
});