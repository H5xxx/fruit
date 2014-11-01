/*
 * model of fruit
 */

define(function(require, exports) {
    var url = require('../url');

    var Fruit = require('../proto/model').sub();

    Fruit.configure('Fruit', 'id', 'name', 'price', 'oldprice', 'iconUrls', 'icon', 'imageUrls', 'image', 'discrbe', 'categoryId');

    Fruit.extend({
        url: url.getFruit,

        save: function(item){
            item.price = item.price / 100;  // 单位为分
            item.oldprice = item.oldprice / 100;  // 单位为分
            item.icon = (item.iconUrls || '').split(',')[0];
            item.image = (item.imageUrls || '').split(',')[0];
            this.create(item);
        }
    });

    return Fruit;
});