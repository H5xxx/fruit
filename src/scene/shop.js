/*
 * Scene - Shop
 */

define(function(require, exports) {
    var util = require('../util');

    var Category = require('../model/category');
    var FruitList = require('../widget/fruitList');
    var cart = require('../widget/cart');
    var Popup = require('../widget/popup');

    var Shop = require('../proto/scene').sub({

        el: $('#shop'),

        title: '选购',

        template: 'shop',

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
            Shop.__super__.render.apply(this, arguments);

            this.initCategoryList();

            this.initBar();
        },

        initCategoryList: function(){
            var categoryItems = this.el.find('.j-category-item'),
                fruitListWrapper = this.el.find('.j-fruit-list-wrapper'),
                fruitList = new FruitList(fruitListWrapper, 'shop');

            var active = function(categoryItem){
                if(categoryItem.hasClass('active')){
                    return;
                }

                categoryItems.removeClass('active');
                categoryItem.addClass('active');

                fruitList.render(Category.find(categoryItem.attr('data-id')).fruits);
            };

            categoryItems.on('tap', function(e){
                active($(this));
            });

            active(categoryItems.first());
        },

        initBar: function(){
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
                    page.navigate('/cart');
                }else{
                    Popup.alert('还没有选择商品！');
                }
            });
        }
    });

    return Shop;
});