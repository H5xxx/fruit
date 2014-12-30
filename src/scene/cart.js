/*
 * Scene - Cart
 */

define(function(require, exports) {
    var util = require('../util');

    var Category = require('../model/category');
    var Transfee = require('../model/transfee');
    var Fruit = require('../model/fruit');
    var FruitList = require('../widget/fruitList');
    var cart = require('../widget/cart');
    var Popup = require('../widget/popup');

    var Cart = require('../proto/scene').sub({

        el: $('#cart'),

        title: '购物车',

        template: 'cart',

        getData: function(params, callback) {
            util.finish([

                Category.fetch.bind(Category, params),
                Transfee.fetch.bind(Transfee, params)

            ], function(categories, transfee){

                callback(null, {
                    transfee: transfee
                });

            });
        },

        render: function(params){
            Cart.__super__.render.apply(this, arguments);

            var fruitListWrapper = this.el.find('.j-fruit-list-wrapper'),
                fruitList = new FruitList(fruitListWrapper, 'cart');

            fruitList.renderFromCart();

            cart.on('update', function(){
                fruitList.renderFromCart();
            });

            var barDom = this.el.find('.j-bar'),
                numDom = barDom.find('.j-num'),
                sumDom = barDom.find('.j-sum'),
                transfeeDom = barDom.find('.j-transfee'),
                startfeeDom = barDom.find('.j-startfee');

            var updateBar = function(){
                numDom.text(cart.num());
                sumDom.text(cart.sum());
                transfeeDom.text(cart.sum() >= params.transfee.start_fee ? 0 : params.transfee.trans_fee);
                startfeeDom.text(params.transfee.start_fee);
            };

            cart.on('update', updateBar);
            updateBar();

            var page = this.page,
                next = barDom.find('.j-next');

            next.on('tap', function(e){
                if(cart.num()){
                    page.navigate('/personal/address');
                }else{
                    Popup.alert('购物车是空的！');
                }
            });
        }

    });

    return Cart;
});