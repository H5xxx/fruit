/*
 * transition/animation collection
 */

define(function(require, exports) {

	var show = function(ele, direction){
		ele.css('display', '');
	};

	var hide = function(ele, direction){
		ele.css('display', 'none');
	};

	var slideIn = function(ele, direction) {
        direction = direction || 'forward';

        this.el.removeClass('slide-out forward backward');
        this.el.addClass('slide-in');
        this.el.addClass(direction);
    };

    var slideOut = function(ele, direction) {
        this.el.removeClass('slide-in forward backward');
        this.el.addClass('slide-out');
        this.el.addClass(direction);
    };

	return {
		show: show,
		hide: hide,
		slideIn: slideIn,
		slideOut: slideOut
	};

});