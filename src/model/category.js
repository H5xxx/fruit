/*
 * model of category
 */

define(function(require, exports) {
    var url = require('../url');

    var Category = require('../proto/model').sub();

    Category.configure('Category', 'id', 'name', 'packages', 'fruits', 'isHaveNew');

    Category.extend({
        url: url.getCategories,

        save: function(list){
            var Category = this;

            list.forEach(function(category){
                category.isHaveNew = parseInt(category.isHaveNew, 10);
                Category.create(category);

                category.fruits.forEach(function(fruit){
                    require('./fruit').save(fruit);
                });
            });
        }
    });

    return Category;
});