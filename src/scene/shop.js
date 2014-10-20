/*
 * Scene - Shop
 */

define(function(require, exports) {
    var util = require('../util');

    var Category = require('../model/category');
    var cart = require('../widget/cart');

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

            var categoryItems = this.el.find('.j-category-item'),
                fruitListWrapper = this.el.find('.j-fruit-list-wrapper');

            var active = function(categoryItem){
                if(categoryItem.hasClass('active')){
                    return;
                }

                categoryItems.removeClass('active');
                categoryItem.addClass('active');
                fruitListWrapper.html(require('template')('fruit-list', Category.find(categoryItem.attr('data-id'))));                

                //new IScroll(fruitListWrapper[0]);
                fruitListWrapper.find('.j-fruit-item').each(function(i, itemDom){
                    itemDom = $(itemDom);

                    var fruitId = itemDom.attr('data-id'),
                        plusBtn = itemDom.find('.j-plus'),
                        minusBtn = itemDom.find('.j-minus'),
                        numDom = itemDom.find('.j-num');

                    itemDom.on('tap', function(e){
                        // show fruit detail
                    });

                    plusBtn.on('tap', function(e){
                        e.stopPropagation();
                        cart.add(fruitId, 1);
                    });

                    minusBtn.on('tap', function(e){
                        e.stopPropagation();
                        cart.add(fruitId, -1);
                    });

                    var updateNum = function(){
                        var fruitNum = cart.cnt[fruitId] || 0;
                        numDom.text(fruitNum);
                        if(fruitNum){
                            numDom.show();
                            minusBtn.show();
                        }else{
                            numDom.hide();
                            minusBtn.hide();
                        }
                    };

                    cart.on('update', updateNum);
                    updateNum();
                });
            };

            categoryItems.on('tap', function(e){
                active($(this));
            });

            active(categoryItems.first());

            var barDom = this.el.find('.j-bar'),
                numDom = barDom.find('.j-num'),
                sumDom = barDom.find('.j-sum');

            var updateBar = function(){
                numDom.text(cart.num);
                sumDom.text(cart.sum);
            };

            cart.on('update', updateBar);
            updateBar();
        }
    });

    return Shop;
});