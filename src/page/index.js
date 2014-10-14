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
            'address': require('../scene/address')
        },

        indexPage: '/home',

        routes: {
            '/home': 'home',
            '/shop': 'shop',
            '/cart': 'cart',
            '/personal': 'personal',
            '/personal/address': 'address'
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