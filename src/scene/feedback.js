/*
 * Scene - Feedback
 */

define(function(require, exports) {

    var Feedback = require('../proto/scene').sub({

        el: $('#feedback'),

        title: '填写评价',

        template: 'feedback'
    });

    return Feedback;
});