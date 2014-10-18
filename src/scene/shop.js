/*
 * Scene - Shop
 */

define(function(require, exports) {

    var Shop = require('../proto/scene').sub({

        el: $('#shop'),

        title: '选购',

        template: 'shop'
    });

    return Shop;
});