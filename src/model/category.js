/*
 * model of category
 */

define(function(require, exports) {
    var url = require('../url');

    var Category = require('../proto/model').sub();

    Category.configure('Category', 'id', 'name', 'fruits');

    Category.extend({
        url: url.getCategory
    });

    return Category;
});