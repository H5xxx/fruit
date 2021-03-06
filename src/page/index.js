/*
 * the page
 */

define(function(require, exports) {

    require('../../mock/ajax');

    // weixin params
    if(location.hash.indexOf('?') >= 0){
        var pos = location.hash.indexOf('?'),
            hash = location.hash.slice(0, pos),
            search = location.hash.slice(pos);

        location.hash = hash;
        location.search = search;
    }

    var Page = require('../proto/page').sub({

        controllers: {
            'home': require('../scene/home'),
            'shop': require('../scene/shop'),
            'cart': require('../scene/cart'),
            'personal': require('../scene/personal'),
            'address': require('../scene/address'),
            'manage-address': require('../scene/manage-address'),
            'order': require('../scene/order'),
            'order-list': require('../scene/order-list'),
            'fav': require('../scene/fav'),
            'feedback': require('../scene/feedback'),
            'refund': require('../scene/refund')
        },

        indexPage: '/shop',

        routes: {
            '/home': 'home',
            '/shop': 'shop',
            '/cart': 'cart',
            '/personal': 'personal',
            '/personal/address': 'address',
            '/personal/manage-address': 'manage-address',
            '/personal/order/:orderId': 'order',
            '/personal/order-list': 'order-list',
            '/personal/order/:orderId/feedback': 'feedback',
            '/personal/order/:orderId/refund': 'refund',
            '/personal/fav': 'fav'
        },

        extensions: [
            require('../extension/navBar')
        ]

    });

    var page = new Page({
        el: $('#main-container')
    });

    Spine.Route.setup();

    return page;

});