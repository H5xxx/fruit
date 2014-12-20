/*
 * model of collection
 */

define(function(require, exports) {
    var url = require('../url');
    var util = require('../util');

    var Collection = require('../proto/model').sub();

    Collection.configure('Collection', 'id', 'fruitid');

    Collection.extend({
        url: url.getCollectionList,

        save: function(list){
            var Model = this;

            list.forEach(function(item){
                item.fruitid = parseInt(item.fruitid, 10);
                Model.create(item);
            });
        },

        createRemotely: function(collection, callback){
            var Model = this;

            $.post(url.createCollection, {
                fruitid: collection.fruitid
            }, function(response){
                if(!response.err) Model.fetch({}, null, true);
                callback(response.err, response.data);
            });
        },

        removeRemotely: function(collection, callback){
            var Model = this;

            $.post(util.format(url.removeCollection, {
                fruitid: collection.fruitid
            }), {}, function(response){
                if(!response.err) Model.fetch({}, null, true);
                callback(response.err, response.data);
            });
        }
    });

    return Collection;
});