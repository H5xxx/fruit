/*
 * cart widget (单例)
 */

define(function(require, exports) {
    var Fruit = require('../model/fruit');

    var cart = Spine.Module.extend.call({
        cnt: {},
        num: function(){
            var cnt = this.cnt;
            return Object.keys(cnt).map(function(fruitId){
                return cnt[fruitId];
            }).reduce(function(a, b){
                return a + b;
            }, 0);
        },
        sum: function(){
            var cnt = this.cnt;
            return Object.keys(cnt).map(function(fruitId){
                return (Fruit.find(fruitId).price || 0) * cnt[fruitId];
            }).reduce(function(a, b){
                return a + b;
            }, 0);
        },
        add: function(id, num){
            num = (this.cnt[id] || 0) + num;
            num = num < 0 ? 0 : num;
            this.cnt[id] = num;

            this.update();

            return num;
        },
        update: function(){
            this.save();
            this.trigger('update');
        },
        clean: function(){
            this.cnt = {};
            this.update();
        },
        list: function(){
            var cnt = this.cnt;
            return Object.keys(cnt).map(function(fruitId){
                var fruit = Fruit.find(fruitId);
                if(fruit) fruit.num = cnt[fruitId];
                return fruit;
            });
        },
        save: function(){
            try{
                localStorage['cart-cnt'] = JSON.stringify(this.cnt);
            }catch(e){}
        },
        resume: function(){
            try{
                this.cnt = JSON.parse(localStorage['cart-cnt']);
            }catch(e){}

            this.update();
        }
    }, Spine.Events);

    cart.resume();

    return cart;
});