define(function(require, exports) {
    var Mock = require('mock');

    if(location.search.indexOf('dev') < 0){
        return;
    }

    var mock = function(path, handler){
        return Mock.mock(path, function(options){
            var result = {
                err: null,
                data: handler.apply(this, arguments)
            };

            console.log('[MOCK]', path, 'RESULT:', result);
            return result;
        });
    };

    mock(/\/service\/firstpage$/, function(options) {
        return {
            id: 1,
            title: '公告',
            about_us: '关于我们',
            brand_culture: '企业文化',
            address: '地址',
            email: '邮箱',
            telphone: '号码',
            notes: '购买须知',
            distribution: '配送信息'
        };
    });

    mock(/\/service\/product$/, function(options) {
        return [
            {
                id: 1,
                name: '水果1',
                isHaveNew: 1,
                packages: [
                    {
                        name: '五元双拼',
                        fruits: '1'
                    },
                    {
                        name: '八元三拼',
                        fruits: '2'
                    }
                ],
                fruits: [
                    {
                        id: 1,
                        name: '苹果',
                        price: 500,
                        oldprice: 1000,
                        iconUrls: './asset/img/fruit.png'
                    },
                    {
                        id: 2,
                        name: '香蕉',
                        price: 800,
                        isNew: 1,
                        iconUrls: './asset/img/fruit.png'
                    }
                ]
            },
            {
                id: 2,
                name: '水果2',
                packages: [
                    {
                        name: '十元双拼',
                        fruits: '4,5'
                    }
                ],
                fruits: [
                    {
                        id: 3,
                        name: '桃子',
                        price: 500,
                        iconUrls: './asset/img/fruit.png'
                    },
                    {
                        id: 4,
                        name: '梨',
                        price: 1000,
                        oldprice: 2000,
                        iconUrls: './asset/img/fruit.png'
                    },
                    {
                        id: 5,
                        name: '其他',
                        price: 1500,
                        oldprice: 3000,
                        iconUrls: './asset/img/fruit.png'
                    }
                ]
            },
            {
                id: 3,
                name: '水果3',
                packages: [],
                fruits: [
                    {
                        id: 6,
                        name: 'sth',
                        price: 500,
                        oldprice: 1000,
                        iconUrls: './asset/img/fruit.png'
                    }
                ]
            }
        ];
    });

    mock(/\/service\/product\/[\w\-]+$/, function(options) {
        return {
            id: 1,
            name: '苹果',
            price: 1000,
            oldprice: 2000,
            weight: 500,
            discrbe: '新鲜的苹果',
            iconUrls: './asset/img/fruit.png',
            imageUrls: './asset/img/fruit-large.png',
            isCollection: 0
        };
    });

    mock(/\/service\/address$/, function(options) {
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

    mock(/\/service\/address\/add$/, function(options) {
        return {
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
        };
    });

    mock(/\/service\/address\/[\w\-]+$/, function(options) {
        return {
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
        };
    });

    mock(/\/service\/address\/default\/[\w\-]+$/, function(options) {
        return {
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
        };
    });

    mock(/\/service\/orders$/, function(options) {
        return [{
            "deleteDate" : "",
            "fruitIds" : "1,2",
            "status" : 1,
            "statusDispalyText" : "未支付",
            "oldfruits" : [
                {
                    id: 1,
                    name: '苹果',
                    price: 500,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                },
                {
                    id: 2,
                    name: '香蕉',
                    price: 800,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                }
            ],
            "malutionText" : "这个东西比较好",
            "cancelText" : "1",
            cityName: "菏泽市",
            consignee: "路易斯安娜",
            countryName: "曹县",
            detailAddress: "清河办事处",
            telPhone: "13800138000",
            "malutionFlag" : 1,
            "fruitnums" : "2,2",
            "receptionAddressVO" : null,
            "amount" : 45,
            "id" : "1",
            "receptionAddressId" : "1",
            "cancelDate" : "2014-10-28 16:34:29",
            "openid" : "001",
            "payDate" : "",
            "orderid" : "A01B001-001",
            "createDate" : "2014-10-05 13:25:47",
            "malutionDate" : "2014-10-28 16:35:13"
        }, {
            "deleteDate" : "",
            "fruitIds" : "1,2",
            "status" : 4,
            "statusDispalyText" : "未评价",
            "oldfruits" : [
                {
                    id: 3,
                    name: '桃子',
                    price: 500,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                },
                {
                    id: 4,
                    name: '梨',
                    price: 1000,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                }
            ],
            "malutionText" : "",
            "cancelText" : "0",
            cityName: "菏泽市",
            consignee: "路易斯安娜",
            countryName: "曹县",
            detailAddress: "清河办事处",
            telPhone: "13800138000",
            "malutionFlag" : 0,
            "fruitnums" : "2,2",
            "receptionAddressVO" : null,
            "amount" : 45,
            "id" : "2",
            "receptionAddressId" : "1",
            "cancelDate" : "",
            "openid" : "001",
            "payDate" : "2014-10-05 13:25:47",
            "orderid" : "A01B002-001",
            "createDate" : "2014-10-05 13:25:47",
            "malutionDate" : ""
        }, {
            "deleteDate" : "",
            "fruitIds" : "1,2",
            "status" : 5,
            "statusDispalyText" : "已评价",
            "oldfruits" : [
                {
                    id: 1,
                    name: '苹果',
                    price: 500,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                },
                {
                    id: 2,
                    name: '香蕉',
                    price: 800,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                }
            ],
            "malutionText" : "东西很好，下次还要买",
            "cancelText" : "0",
            cityName: "菏泽市",
            consignee: "路易斯安娜",
            countryName: "曹县",
            detailAddress: "清河办事处",
            telPhone: "13800138000",
            "malutionFlag" : 1,
            "fruitnums" : "2,2",
            "receptionAddressVO" : null,
            "amount" : 45,
            "id" : "3",
            "receptionAddressId" : "1",
            "cancelDate" : "",
            "openid" : "001",
            "payDate" : "2014-10-05 13:25:47",
            "orderid" : "A01B003-001",
            "createDate" : "2014-10-05 13:25:47",
            "malutionDate" : "2014-10-05 13:25:47"
        }];
    });

    mock(/\/service\/orders\/add$/, function(options) {
        return {
            "deleteDate" : "",
            "fruitIds" : "1,2",
            "status" : 1,
            "statusDispalyText" : "已删除",
            "oldfruits" : [
                {
                    id: 1,
                    name: '苹果',
                    price: 500,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                },
                {
                    id: 2,
                    name: '香蕉',
                    price: 800,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                }
            ],
            "malutionText" : "这个东西比较好",
            "cancelText" : "1",
            cityName: "菏泽市",
            consignee: "路易斯安娜",
            countryName: "曹县",
            detailAddress: "清河办事处",
            telPhone: "13800138000",
            "malutionFlag" : 1,
            "fruitnums" : "2,2",
            "receptionAddressVO" : null,
            "amount" : 45,
            "id" : "1",
            "receptionAddressId" : "1",
            "cancelDate" : "2014-10-28 16:34:29",
            "openid" : "001",
            "payDate" : "",
            "orderid" : "A01B001-001",
            "createDate" : "2014-10-05 13:25:47",
            "malutionDate" : "2014-10-28 16:35:13"
        };
    });

    mock(/\/service\/orders\/cancel\/[\w\-]+$/, function(options) {
        return null;
    });

    mock(/\/service\/orders\/[\w\-]+$/, function(options) {
        return {
            "deleteDate" : "",
            "fruitIds" : "1,2",
            "status" : 6,
            "statusDispalyText" : "已删除",
            "oldfruits" : [
                {
                    id: 1,
                    name: '苹果',
                    price: 500,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                },
                {
                    id: 2,
                    name: '香蕉',
                    price: 800,
                    "fruitCount" : 1,
                    iconUrls: './asset/img/fruit.png'
                }
            ],
            "malutionText" : "这个东西比较好",
            "cancelText" : "1",
            cityName: "菏泽市",
            consignee: "路易斯安娜",
            countryName: "曹县",
            detailAddress: "清河办事处",
            telPhone: "13800138000",
            "malutionFlag" : 1,
            "fruitnums" : "2,2",
            "receptionAddressVO" : null,
            "amount" : 45,
            "id" : "1",
            "receptionAddressId" : "1",
            "cancelDate" : "2014-10-28 16:34:29",
            "openid" : "001",
            "payDate" : "",
            "orderid" : "A01B001-001",
            "createDate" : "2014-10-05 13:25:47",
            "malutionDate" : "2014-10-28 16:35:13"
        };
    });

    mock(/\/service\/cookie/, function(options) {
        return {};
    });

    mock(/\/service\/collection$/, function(options) {
        return [
            {
                "id" : "1",
                "fruitid" : "1",
                "deleteDate" : "",
                "fruitVO" : null,
                "status" : 0,
                "openid" : "001",
                "createDate" : "2014-10-19 21:15:37",
                "updateDate" : ""
            }, {
                "id" : "2",
                "fruitid" : "2",
                "deleteDate" : "",
                "fruitVO" : null,
                "status" : 0,
                "openid" : "001",
                "createDate" : "2014-10-19 21:15:42",
                "updateDate" : ""
            }, {
                "id" : "3",
                "fruitid" : "3",
                "deleteDate" : "",
                "fruitVO" : null,
                "status" : 0,
                "openid" : "001",
                "createDate" : "2014-10-19 21:15:43",
                "updateDate" : ""
            }
        ];
    });

    mock(/\/service\/collection\/add$/, function(options) {
        return {
            "id" : "1",
            "fruitid" : "1",
            "deleteDate" : "",
            "fruitVO" : null,
            "status" : 0,
            "openid" : "001",
            "createDate" : "2014-10-19 21:15:37",
            "updateDate" : ""
        };
    });

    mock(/\/service\/collection\/[\w\-]+$/, function(options) {
        return null;
    });

    mock(/\/service\/user$/, function(options) {
        return {
            id: 1,
            name: '用户1'
        };
    });

});