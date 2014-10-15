/*
 * Scene - Fav
 */

define(function(require, exports) {

    var Fav = require('../proto/scene').sub({

        el: $('#fav'),

        title: '我的收藏',

        template: 'fav'
    });

    return Fav;
});