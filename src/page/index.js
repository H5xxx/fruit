/*
 * the page
 */

define(function(require, exports) {

    require('../../mock/ajax');

    var Page = require('../proto/page').sub({

        controllers: {
            'home': require('../scene/home'),
            'intro': require('../scene/intro')
        },

        indexPage: '/home',

        routes: {
            '/home': 'home',
            '/intro': 'intro'
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