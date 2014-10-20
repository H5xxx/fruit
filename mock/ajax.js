define(function(require, exports) {
    var Mock = require('mock');

    var mock = function(path, handler){
        return Mock.mock(path, function(options){
            var result = handler.apply(this, arguments);

            console.log('[MOCK]', path, 'RESULT:', result);
            return result;
        });
    };

    mock(/\/notice$/, function(options) {
        return {
            main: '公告',
            distribution: '配送说明'
        };
    });

    mock(/\/category-list$/, function(options) {
        return [
            {
                id: 1,
                name: '水果1',
                fruits: [
                    {
                        id: 1,
                        name: '苹果',
                        price: 5
                    },
                    {
                        id: 2,
                        name: '香蕉',
                        price: 8
                    }
                ]
            },
            {
                id: 2,
                name: '水果2',
                fruits: [
                    {
                        id: 3,
                        name: '桃子',
                        price: 5
                    },
                    {
                        id: 4,
                        name: '梨',
                        price: 10
                    }
                ]
            }
        ];
    });

    mock(/\/fruit-detail$/, function(options) {
        return {
            id: 1,
            name: '某水果',
            price: 10
        };
    });


});