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
            'bill': require('../scene/bill'),
            'bill-list': require('../scene/bill-list'),
            'fav': require('../scene/fav'),
            'pay': require('../scene/pay'),
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
            '/personal/bill': 'bill',
            '/personal/bill-list': 'bill-list',
            '/personal/fav': 'fav',
            '/personal/pay': 'pay',
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