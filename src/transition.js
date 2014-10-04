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

	return {
		show: show,
		hide: hide
	};

});