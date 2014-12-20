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
            item.start_fee = item.start_fee / 100;
            item.trans_fee = item.trans_fee / 100;
            this.create(item);
        }
    });

    return Transfee;
});