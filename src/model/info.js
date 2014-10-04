/*
 * model of info
 */

define(function(require, exports) {
    var url = require('../url');

    var Info = require('../proto/model').sub();

    Info.configure('Info', 'id', 'cnt');

    Info.extend({
        url: url.getInfo
    });

    return Info;
});