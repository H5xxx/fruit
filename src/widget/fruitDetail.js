/*
 * fruit detail widget (类)
 */

define(function(require, exports) {
    var cart = require('./cart');
    var Popup = require('./popup');
    var template = require('template');
    var Collection = require('../model/collection');

    var FruitDetail = Spine.Class.sub({
        init: function(fruit){
        	this.fruit = fruit;
            fruit.isFaved = Collection.findByAttribute('fruitid', fruit.id);
            this.render();
        },
        render: function(){
            this.wrapper = $(template('popup-fruit', this.fruit));
            this.popup = Popup.show(this.wrapper);

            this.bindEvent();
        },
        bindEvent: function(){
            var me = this,
            	fruit = this.fruit,
                wrapper = this.wrapper,
                popup = this.popup,
                slider = wrapper.find('.j-fruit-img-slider');

            slider.css('height', slider.width() + 'px');
            Swipe(slider[0]);

            wrapper.find('.j-fav').on('tap', function(e){
                var _this = $(this);
            	if(!fruit.isCollection){
                    Collection.createRemotely({
                        fruitid: fruit.id
                    }, function(err, collection){
                        fruit.isCollection = 1;
                        if(!err) _this.text('取消收藏');
                    });
            	}else{
                    Collection.removeRemotely({
                        fruitid: fruit.id
                    }, function(err, collection){
                        fruit.isCollection = 0;
                        if(!err) _this.text('+收藏');
                    });
                }
            });

            var barDom = wrapper.find('.j-bar'),
                numDom = barDom.find('.j-num'),
                plusDom = barDom.find('.j-plus'),
                minusDom = barDom.find('.j-minus');

            var updateBar = function(){
                var num = cart.cnt[fruit.id] || 0;
                numDom.text(num);
                
                if(num){
                    minusDom.show();
                }else{
                    minusDom.hide();
                }
            };

            cart.on('update', updateBar);
            updateBar();

            plusDom.on('tap', function(e){
                cart.add(fruit.id, 1);
            });

            minusDom.on('tap', function(e){
                cart.add(fruit.id, -1);
            });
        }
    });

    FruitDetail.include(Spine.Events);

    return FruitDetail;
});                            