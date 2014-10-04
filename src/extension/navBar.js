/*
 * navbar as an extension
 */

define(function(require, exports) {

    var navBar = {

        el: $('#nav-bar'),

        cls: 'active',

        init: function(page){
            this.page = page;

            page.bind('change', function(info){
                // ...
            });
        },

        active: function(nav){
            if(this.curr){
                this.curr.removeClass(this.cls);
            }
            (this.curr = nav).addClas(this.cls);
        }
    };

    return {
        init: function(page){
            navBar.init(page);
        }
    };
});