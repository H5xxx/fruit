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
                popup = this.popup;

            wrapper.find('.j-fav').one('tap', function(e){
                var _this = $(this);
            	if(!Collection.findByAttribute('fruitid', fruit.id)){
                    Collection.createRemotely({
                        fruitid: fruit.id
                    }, function(err, collection){
                        if(!err) _this.text('已收藏');
                    });
            	}
            });

            var barDom = wrapper.find('.j-bar'),
                numDom = barDom.find('.j-num'),
                plusDom = barDom.find('.j-plus');

            var updateBar = function(){
                numDom.text(cart.cnt[fruit.id] || 0);
            };

            cart.on('update', updateBar);
            updateBar();

            plusDom.on('tap', function(e){
                cart.add(fruit.id, 1);
            });
        }
    });

    FruitDetail.include(Spine.Events);

    return FruitDetail;
});                            