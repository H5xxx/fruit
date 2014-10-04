/*
 * proto of model
 */

define(function(require, exports) {
    var util = require('../util');

    var Model = Spine.Model.sub();

    Model.extend({
        url: '',

        // fetch data with its url & given params
        fetch: util.currilize(function(params, callback){
            var Model = this;

            var fetched = Model.fetched = Model.fetched || {},
                url = util.format(Model.url, params);

            // cached
            if(fetched[url]){
                callback && callback(null, fetched[url]);

            // not cached
            }else{
                $.getJSON(url, function(data){

                    // save data as model
                    Model.save(data);

                    // cache data
                    fetched[url] = data;


                    callback && callback(null, data);
                });
            }
        }),

        // save data as model
        save: function(list){
            var Model = this;

            list.forEach(function(item){
                Model.create(item);
            });
        }

    });

    return Model;
});