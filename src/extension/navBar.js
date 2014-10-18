/*
 * navbar as an extension
 */

define(function(require, exports) {

    var navBar = {

        el: $('#nav-bar'),

        cls: 'active',

        init: function(page){
            this.page = page;

            Spine.Route.bind('navigate', this.navigate.bind(this));

            this.navigate(Spine.Route.getPath());
        },

        navigate: function(currPath){
            var me = this;

            this.el.find('.j-nav').each(function(_, item){
                var itemPath = (item = $(item)).attr('data-nav');
                if(itemPath === currPath || currPath.indexOf(itemPath + '/') === 0)
                    me.active(item);
            });
        },

        active: function(item){
            if(this.curr){
                this.curr.removeClass(this.cls);
            }
            (this.curr = item).addClass(this.cls);
        }
    };

    return {
        init: function(page){
            navBar.init(page);
        }
    };
});