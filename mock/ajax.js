define(function(require, exports) {
    var Mock = require('mock');

    var mock = function(path, handler){
        return Mock.mock(path, function(options){
            var result = handler.apply(this, arguments);

            console.log('[MOCK]', path, 'RESULT:', result);
            return result;
        });
    };

    mock(/\/framework-info$/, function(options) {
        return {
            name: 'dzt'
        };
    });

    mock(/\/info$/, function(options) {
        return [
            { cnt: 'a DZT web framework' },
            { cnt: 'a Mobile web framework' },
            { cnt: 'based on multi open-source projects(seajs, zepto, spine, artTemplate, iscroll, mock, ...)' }
        ];
    });
});