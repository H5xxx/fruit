/*
 * Scene - Home
 */

define(function(require, exports) {
    var util = require('../util');

    var Notice = require('../model/notice');

    var Home = require('../proto/scene').sub({

        el: $('#home'),

        title: '仙果堂',

        template: 'home',

        getData: function(params, callback) {

            util.finish([

                Notice.fetch.bind(Notice, params)

            ], function(notice){

                callback(null, {
                    notice: notice
                });

            });

        },

        render: function(){
            Home.__super__.render.apply(this, arguments);

            var noticeCnt = $('#notice-cnt'),
                noticeLen = noticeCnt.width(),
                wrapperLen = noticeCnt.parent().width(),
                maxOffset = noticeLen - wrapperLen,
                offset = 0;

            if(maxOffset > 0){
                setInterval(function(){
                    offset += 1;
                    if(offset >= maxOffset + 40){
                        offset = -20;
                    }
                    noticeCnt.css('margin-left', -offset + 'px');
                }, 30);
            }
        }
    });

    return Home;
});