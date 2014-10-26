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
                        price: 5,
                        iconUrls: './asset/img/fruit.png'
                    },
                    {
                        id: 2,
                        name: '香蕉',
                        price: 8,
                        iconUrls: './asset/img/fruit.png'
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
                        price: 5,
                        iconUrls: './asset/img/fruit.png'
                    },
                    {
                        id: 4,
                        name: '梨',
                        price: 10,
                        iconUrls: './asset/img/fruit.png'
                    }
                ]
            }
        ];
    });

    mock(/\/fruit-detail$/, function(options) {
        return {
            id: 1,
            name: '苹果',
            price: 10,
            weight: 500,
            discrbe: '新鲜的苹果',
            iconUrls: './asset/img/fruit.png',
            imageUrls: './asset/img/fruit-large.png'
        };
    });

    mock(/\/user\/address$/, function(options) {
        return [{
            cityCode: "372900",
            cityName: "菏泽市",
            consignee: "路易斯安娜",
            countryCode: "372922",
            countryName: "曹县",
            createDate: "2014-10-03 10:06:05",
            detailAddress: "清河办事处",
            id: "a1",
            isDefault: "1",
            openid: "abcd",
            provinceCode: "370000",
            provinecName: "山东省",
            state: "0",
            telPhone: "13800138000"
        }, {
            cityCode: "372300",
            cityName: "滨州市",
            consignee: "安吉丽娜朱莉",
            countryCode: "372301",
            countryName: "滨城区",
            createDate: "2014-10-03 10:06:05",
            detailAddress: "小营镇申家村",
            id: "a2",
            isDefault: "0",
            openid: "abcd",
            provinceCode: "370000",
            provinecName: "山东省",
            state: "0",
            telPhone: "13800138000"
        }];
    });

    
    mock(/\/user\/address\/add$/, function(options) {
        return 'a3';
    });

});