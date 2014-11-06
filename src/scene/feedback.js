/*
 * Scene - Feedback
 */

define(function(require, exports) {
    var util = require('../util');
    var url = require('../url');

    var OrderModel = require('../model/order');
    var Popup = require('../widget/popup');

    var Feedback = require('../proto/scene').sub({

        el: $('#feedback'),

        title: '填写评价',

        template: 'feedback',

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
            params.order.oldfruits.forEach(function(fruit){
                fruit.icon = (fruit.iconUrls || '').split(',')[0];
            });

            Feedback.__super__.render.apply(this, arguments);

            var page = this.page;

            var items = this.el.find('.j-fruit-item');

            $('.j-submit').on('tap', function(e){
                var fruits = {
                    ids: [],
                    ratings: [],
                    malutions: []
                };

                items.each(function(_, item){
                    item = $(item);
                    fruits.ids.push(item.attr('data-fruit-id'));
                    fruits.ratings.push(item.find('.j-rating').val());
                    fruits.malutions.push(item.find('.j-malution').val());
                });

                $.post(util.format(url.addMalution, params), {
                    fruitIds: fruits.ids.join(','),
                    malutionFlag: fruits.ratings.join(','),
                    malutionText: fruits.malutions.join('@#?#@')
                }, function(response){
                    if(response.err) Popup.alert('提交失败！请重试');
                    else Popup.alert('<i class="j-next op icon icon-tick-green"></i>评价成功', function(){
                        OrderModel.fetched = null;
                        page.navigate('/personal/order-list');
                    });
                });

            });
        }
    });

    return Feedback;
});