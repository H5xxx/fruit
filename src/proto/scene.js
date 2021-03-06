/*
 * proto of scene(controller)
 */

define(function(require, exports) {
    var util = require('../util');
    var transition = require('../transition');
    var Popup = require('../widget/popup');

    var Cookie = require('../model/cookie');

    var Scene = Spine.Controller.sub({
        // 该controller要渲染&控制的区域
        el: $(),

        // 页面title
        title: '',

        // 内容模板
        template: 'template-...',

        // 只执行一次，初始化时执行
        init: function() {
        },

        // 获取需要的数据
        getData: function(params, callback) {
            callback(null, {});
        },

        // 渲染内容
        render: function(params) {

            var html = require('template')(this.template, params);

            this.el.html(html);

            //if(this.el.children('.container-cnt').length) new IScroll(this.el[0]);
        },

        // 清空内容
        clean: function() {
            this.el.html('');
        },

        // 跳转到其对应的url时执行
        activate: function(params) {

            var me = this;

            params = params || {};

            var urlParams = util.parseURL().params;

            if(!(urlParams && urlParams.code)){
                Popup.alert('请从微信中访问！');
                return;
            }

            var loading = Popup.loading('加载中...');
            setTimeout(function(){ loading.show() }, 0);

            Cookie.fetch(urlParams, function(err){

                if(err){
                    Popup.alert(err);
                    return;
                }

                me.getData(params, function(err, data) {

                    me.enter();

                    setTimeout(function(){ loading.hide() }, 0);

                    me.render($.extend(params, data));

                });

            });

        },

        // 视图正式进入当前controller
        enter: function(){
            var prev = this.page.curr,
                prevId = prev  ? prev.id : -1,
                currId = this.id,
                direction = currId >= prevId ? 'forward' : 'backward';

            if(prev){
                prev.leave(direction);
            }

            this.animate.in(this.el, direction);
            util.title(this.title);

            this.page.curr = this;
        },

        // 离开到其对应的url时执行
        deactivate: function() {
            if(this === this.page.curr){
                //Popup.openLoading();
            }
        },

        // 清理当前controller的内容并移出视图
        leave: function(direction){
            //Popup.close();
            this.animate.out(this.el, direction);
            this.clean();
        },

        animate: {
            in: transition.show,
            out: transition.hide
        }

    });

    return Scene;
});