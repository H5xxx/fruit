/*
 * Scene - Cart
 */

define(function(require, exports) {
    var util = require('../util');

    var Category = require('../model/category');
    var Fruit = require('../model/fruit');
    var FruitList = require('../widget/fruitList');
    var cart = require('../widget/cart');
    var Popup = require('../widget/popup');

    var Cart = require('../proto/scene').sub({

        el: $('#cart'),

        title: '购物车',

        template: 'cart',

        getData: function(params, callback) {
            callback(null, {});
        },

        render: function(params){
            Cart.__super__.render.apply(this, arguments);

            var fruitListWrapper = this.el.find('.j-fruit-list-wrapper'),
                fruitList = new FruitList(fruitListWrapper, 'cart');

            fruitList.renderFromCart();

            var barDom = this.el.find('.j-bar'),
                numDom = barDom.find('.j-num'),
                sumDom = barDom.find('.j-sum');

            var updateBar = function(){
                numDom.text(cart.num);
                sumDom.text(cart.sum);
            };

            cart.on('update', updateBar);
            updateBar();

            var page = this.page,
                next = barDom.find('.j-next');

            next.on('tap', function(e){
                if(cart.num){
                    page.navigate('/personal/address');
                }else{
                    Popup.alert('购物车是空的！');
                }
            });
        }

    });

    return Cart;
});