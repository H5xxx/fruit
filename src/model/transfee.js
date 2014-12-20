/*
 * model of transfee
 */

define(function(require, exports) {
    var url = require('../url');

    var Transfee = require('../proto/model').sub();

    Transfee.configure('Transfee', 'id', 'start_fee', 'trans_fee'); 

    Transfee.extend({
        url: url.getTransfee,

        save: function(item){
            this.create(item);
        }
    });

    return Transfee;
});