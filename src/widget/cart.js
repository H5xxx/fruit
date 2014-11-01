/*
 * cart widget (单例)
 */

define(function(require, exports) {
    var Fruit = require('../model/fruit');

    var cart = Spine.Module.extend.call({
        cnt: {},
        num: 0,
        sum: 0,
        add: function(id, num){
            num = (this.cnt[id] || 0) + num;
            num = num < 0 ? 0 : num;
            this.cnt[id] = num;

            this.update();
            return num;
        },
        clean: function(){
            this.cnt = {};
            this.update();
        },
        update: function(){
            var num = 0,
                sum = 0;

            var n;
            for(var fruitId in this.cnt) if(this.cnt.hasOwnProperty(fruitId)){
                n = this.cnt[fruitId];
                if(n){
                    num += n;
                    sum += (Fruit.find(fruitId).price || 0) * n;
                }else{
                    delete this.cnt[fruitId];
                }
            }
            this.num = num;
            this.sum = sum;

            this.trigger('update', num, sum);
        },
        list: function(){
            var cnt = this.cnt;
            return Object.keys(cnt).map(function(fruitId){
                var fruit = Fruit.find(fruitId);
                fruit.num = cnt[fruitId];
                return fruit;
            });
        }
    }, Spine.Events);

    return cart;
});