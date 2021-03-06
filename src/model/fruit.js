/*
 * model of fruit
 */

define(function(require, exports) {
    var url = require('../url');

    var Fruit = require('../proto/model').sub();

    Fruit.configure('Fruit', 'id', 'name', 'price', 'oldprice', 'iconUrls', 'icon', 'imageUrls', 'images', 'discrbe', 'categoryId', 'isNewFruit', 'isCollection');

    Fruit.extend({
        url: url.getFruit,

        save: function(item){
            item.id = item.id + '';
            item.price = item.price / 100;  // 单位为分
            item.oldprice = item.oldprice / 100;  // 单位为分
            item.icon = (item.iconUrls || '').split(',')[0];
            item.images = (item.imageUrls || '').split(',');
            item.isNewFruit = parseInt(item.isNew, 10);
            item.isCollection = parseInt(item.isCollection, 10);
            this.create(item);
        }
    });

    return Fruit;
});