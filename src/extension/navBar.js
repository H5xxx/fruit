/*
 * navbar as an extension
 */

define(function(require, exports) {

    var navBar = {

        el: $('#nav-bar'),

        cls: 'active',

        init: function(page){
            this.page = page;

            Spine.Route.bind('change', this.onNavigate.bind(this));

            this.onNavigate([ { path: Spine.Route.getPath() } ]);
        },

        onNavigate: function(curr){
            var me = this,
                currPath = curr[0].path;

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