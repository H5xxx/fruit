/*
 * model of framework
 */

define(function(require, exports) {
    var url = require('../url');

    var Framework = require('../proto/model').sub();

    Framework.configure('Framework', 'id', 'name', 'author');

    Framework.extend({
        url: url.getFrameworkInfo,

        save: function(info){
            this.create(info);
        }
    });

    return Framework;
});