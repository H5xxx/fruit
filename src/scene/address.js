/*
 * Scene - Address
 */

define(function(require, exports) {

    var Address = require('../proto/scene').sub({

        el: $('#address'),

        title: '选择地址',

        template: 'address'
    });

    return Address;
});