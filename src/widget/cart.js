/*
 * cart widget
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
        }
    }, Spine.Events);

    return cart;
});