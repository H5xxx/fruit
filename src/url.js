/*
 * url collection
 */

define(function(require, exports) {
    var config = require('./config');

    var urls = {
        getNotice: '/notice'
    };

    for (var name in urls) {
        if (urls.hasOwnProperty(name)) {
            urls[name] = config.host + urls[name];
        }
    }
    return urls;
});