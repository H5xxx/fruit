/*
 * Scene - Fav
 */

define(function(require, exports) {

    var util = require('../util');

    var Collection = require('../model/collection');
    var Fruit = require('../model/fruit');
    var FruitList = require('../widget/fruitList');

    var Fav = require('../proto/scene').sub({

        el: $('#fav'),

        title: '我的收藏',

        template: 'fav',

        getData: function(params, callback) {

            util.finish([

                Collection.fetch.bind(Collection, params)

            ], function(list){

                callback(null, {
                    collectionList: list
                });

            });

        },

        render: function(params){
            Fav.__super__.render.apply(this, arguments);

            this.initFavList(params);
        },

        initFavList: function(params){
            var fruitListWrapper = this.el.find('.j-fruit-list-wrapper'),
                fruitList = new FruitList(fruitListWrapper, 'fav');

            util.finish(params.collectionList.map(function(collection){
                return Fruit.fetch.bind(Fruit, {
                    fruitId: collection.fruitid
                });
            }), function(){
                fruitList.render(Array.prototype.slice.call(arguments));
            });
        }
    });

    return Fav;
});
