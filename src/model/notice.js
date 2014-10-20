/*
 * model of notice
 */

define(function(require, exports) {
    var url = require('../url');

    var Notice = require('../proto/model').sub();

    Notice.configure('Notice', 'main', 'distribution');

    Notice.extend({
        url: url.getNotice,

        save: function(item){
            this.create(item);
        }
    });

    return Notice;
});