/*
 * model of cookie
 */

define(function(require, exports) {
    var url = require('../url');

    var Cookie = require('../proto/model').sub();

    Cookie.configure('Cookie', 'id');

    Cookie.extend({
        url: url.getCookie,

        save: function(){}
    });

    return Cookie;
});