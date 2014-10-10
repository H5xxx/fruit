/*
 * Scene - Personal
 */

define(function(require, exports) {

    var Personal = require('../proto/scene').sub({

        el: $('#personal'),

        title: '个人中心',

        template: 'personal'
    });

    return Personal;
});