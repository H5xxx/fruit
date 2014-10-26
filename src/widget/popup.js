/*
 * popup widget (类)
 */

define(function(require, exports){

    var layer = $('#popup-layer'),
        showing = [];

    var Popup = Spine.Class.sub({
        init: function(cnt){
            this.wrapper = $(cnt);

            layer.append(this.wrapper);

            this.bindEvent();

            this.show();
        },
        bindEvent: function(){
            var popup = this;

            this.wrapper.find('img').on('load', function(){
                popup.adjustPos();
            });

            this.wrapper.delegate('.j-popup-close', 'tap', function(e){
                popup.hide();
            });
        },
        adjustPos: function(){
            this.wrapper.css('margin-top', -(this.wrapper.height() / 2) + 'px');
        },
        show: function(){
            layer.show();
            this.wrapper.show();

            showing.push(this);

            this.adjustPos();
        },
        hide: function(){
            this.wrapper.hide();

            showing.splice(showing.indexOf(this), 1);
            if(!showing.length){
                layer.hide();
            }
        }
    });

    Popup.extend({

        layer: layer,

        showing: showing,

        show: function(cnt){
            var popup = new Popup(cnt);

            return popup;
        },

        alert: function(cnt){
            return this.show(require('template')('popup-alert', {
                cnt: cnt
            }));
        }
    });

    return Popup;
});