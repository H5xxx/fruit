/*
 * model of fruit
 */

define(function(require, exports) {
    var url = require('../url');

    var Fruit = require('../proto/model').sub();

    Fruit.configure('Fruit', 'id', 'name', 'price', 'imageUrls', 'discrbe', 'categoryId');

    Fruit.extend({
        url: url.getFruit
    });

    return Fruit;
});