/*
 * model of collection
 */

define(function(require, exports) {
    var url = require('../url');

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
            $.post(url.createCollection, {
                fruitid: collection.fruitid
            }, function(response){
                if(!response.err) Collection.save([response.data]);
                callback(response.err, response.data);
            });
        }
    });

    return Collection;
});