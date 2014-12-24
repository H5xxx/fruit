/*
 * fruit list widget (类)
 */

define(function(require, exports) {
    var Fruit = require('../model/fruit');
    var cart = require('./cart');
    var Popup = require('./popup');
    var FruitDetail = require('./fruitDetail');
    var template = require('template');

    var FruitList = Spine.Class.sub({
        init: function(wrapper, type){
            this.wrapper = $(wrapper);
            this.type = type;
        },
        render: function(fruits){
            var list = this,
                wrapper = this.wrapper,
                type = this.type;

            wrapper.html(template('fruit-list', {
                fruits: fruits,
                type: type
            }));                

            this.bindEvent();
        },
        renderFromCart: function(){
            this.render(cart.list());
        },
        bindEvent: function(){
            var list = this,
                wrapper = this.wrapper,
                type = this.type;

            wrapper.find('.j-fruit-item').each(function(i, itemDom){
                itemDom = $(itemDom);

                var fruitId = itemDom.attr('data-id'),
                    plusBtn = itemDom.find('.j-plus'),
                    minusBtn = itemDom.find('.j-minus'),
                    numDom = itemDom.find('.j-num');

                itemDom.on('tap', function(e){
                    Fruit.fetch({
                        fruitId: fruitId
                    }, function(err, fruit){
                        !err && new FruitDetail(fruit);
                    });
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

                        if(type === 'cart'){
                            itemDom.hide();
                        }
                    }
                };

                cart.on('update', updateNum);
                updateNum();
            });
        }
    });

    FruitList.include(Spine.Events);

    return FruitList;
});