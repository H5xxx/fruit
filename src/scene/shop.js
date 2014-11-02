/*
 * Scene - Shop
 */

define(function(require, exports) {
    var util = require('../util');
    var template = require('template');

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
                packageListWrapper = this.el.find('.j-package-list-wrapper'),
                fruitListWrapper = this.el.find('.j-fruit-list-wrapper'),
                fruitList = new FruitList(fruitListWrapper, 'shop');

            var active = function(categoryItem){
                categoryItems.removeClass('active');
                categoryItem.addClass('active');

                var category = Category.find(categoryItem.attr('data-id'));

                fruitList.render(category.fruits);

                if(category.packages && category.packages.length){
                    packageListWrapper.html(template('package-list', category));

                    var packageItems = packageListWrapper.find('.j-package');
                    packageItems.on('tap', function(){
                        packageItems.removeClass('active');

                        var _this = $(this),
                            fruits = _this.attr('data-package-fruits');
                        _this.addClass('active');

                        fruits = fruits ? fruits.split(',') : [];
                        fruitList.render(category.fruits.filter(function(fruit){
                            return fruits.indexOf(fruit.id) >= 0;
                        }));
                    });
                }else{
                    packageListWrapper.html('');
                }
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