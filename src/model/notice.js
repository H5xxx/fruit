/*
 * model of notice
 */

define(function(require, exports) {
    var url = require('../url');

    var Notice = require('../proto/model').sub();

    Notice.configure('Notice', 'id', 'title', 'about_us', 'brand_culture', 'address', 'email', 'telphone', 'notes', 'distribution'); 

    Notice.extend({
        url: url.getNotice,

        save: function(item){
            this.create(item);
        }
    });

    return Notice;
});