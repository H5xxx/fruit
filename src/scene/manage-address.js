/*
 * Scene - ManageAddress
 */

define(function(require, exports) {

    var ManageAddress = require('../proto/scene').sub({

        el: $('#manage-address'),

        title: '地址管理',

        template: 'manage-address'
    });

    return ManageAddress;
});