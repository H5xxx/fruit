/*
 * model of category
 */

define(function(require, exports) {
    var url = require('../url');

    var Category = require('../proto/model').sub();

    Category.configure('Category', 'id', 'name', 'fruits');

    Category.extend({
        url: url.getCategories,

        save: function(list){
        	var Category = this;

            list.forEach(function(category){
                Category.create(category);

                category.fruits.forEach(function(fruit){
                	require('./fruit').create(fruit);
                });
            });
        }
    });

    return Category;
});