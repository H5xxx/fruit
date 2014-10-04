/*
 * proto of page
 */

define(function(require, exports) {

    var Page = Spine.Stack.sub({

        controllers: {},

        routes: {},

        indexPage: '/',

        num: 0,

        add: function(scene){
            var page = this;

            scene.page = page;
            scene.id = page.num = page.num + 1;

            return Page.__super__.add.apply(page, arguments);
        },

        init: function(options){
            var page = this,
                goIndex = function(){
                page.navigate(page.indexPage);
            };

            $.extend(this, options);

            // 所有class="j-nav" data-nav="/xxx"的点击会跳转到/xxx
            $('body').delegate('.j-nav', 'click', function(e){
                page.navigate($(e.currentTarget).attr('data-nav'));
            });

            // init page extensions
            page.extensions.forEach(function(extension){
                extension.init(page);
            });

            // if route['/'] not set & '/'' is not the index-page, then jump to index-page when arrives '/'
            if(this.indexPage !== '/' && !this.routes.hasOwnProperty('/')){
                this.routes['/'] = goIndex;
            }

            // jump to index page if no hash yet
            if(!location.hash || location.hash === '#'){
                setTimeout(goIndex, 0);
            }
        }
    });

    return Page;

});