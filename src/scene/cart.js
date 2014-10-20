/*
 * Scene - Cart
 */

define(function(require, exports) {
    var util = require('../util');

    var Category = require('../model/category');
    var cart = require('../widget/cart');

    var Cart = require('../proto/scene').sub({

        el: $('#cart'),

        title: '购物车',

        template: 'cart',

        getData: function(params, callback) {

            util.finish([

                Category.fetch.bind(Category, params)

            ], function(categories){

                callback(null, {
                    categories: categories
                });

            });

        },

        render: function(params){
            Cart.__super__.render.apply(this, arguments);

            var updateList = function(){
            	
            };

            var barDom = this.el.find('.j-bar'),
                numDom = barDom.find('.j-num'),
                sumDom = barDom.find('.j-sum');

            var updateBar = function(){
                numDom.text(cart.num);
                sumDom.text(cart.sum);
            };

            var update = function(){
            	updateList();
            	updateBar();
            };

            cart.on('update', update);
            update();
        }

    });

    return Cart;
});