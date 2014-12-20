/*
 * model of user
 */

define(function(require, exports) {
    var url = require('../url');

    var User = require('../proto/model').sub();

    User.configure('User', 'id', 'name');

    User.extend({
        url: url.getUser,

        save: function(item){
            this.create(item);
        }
    });

    return User;
});