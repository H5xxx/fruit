/*
 * the page
 */

define(function(require, exports) {

    require('../../mock/ajax');

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
            'feedback': require('../scene/feedback')
        },

        indexPage: '/home',

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
            '/personal/fav': 'fav',
            '/personal/feedback': 'feedback'
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