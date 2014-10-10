/*
 * Scene - Cart
 */

define(function(require, exports) {

    var Cart = require('../proto/scene').sub({

        el: $('#cart'),

        title: '购物车',

        template: 'cart'
    });

    return Cart;
});