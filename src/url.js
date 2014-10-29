/*
 * url collection
 */

define(function(require, exports) {
    var config = require('./config');

    var urls = location.search.indexOf('dev') < 0 ? {
        getNotice: '/notice',
        getCategories: '/service/product',
        getFruit: '/service/product/${fruitId}',
        addFav: '/fav/add',
        getAddressList: '/service/address',
        createAddress: '/service/address',
        getOrderList: '/service/orders',
        createOrder: '/service/orders',
        getOrder: '/service/orders/${orderId}'
    } : {
        getNotice: '/notice',
        getCategories: '/service/product',
        getFruit: '/service/product/${fruitId}',
        addFav: '/fav/add',
        getAddressList: '/service/address',
        createAddress: '/service/address/add',
        getOrderList: '/service/orders',
        createOrder: '/service/orders/add',
        getOrder: '/service/orders/${orderId}'
    };

    for (var name in urls) {
        if (urls.hasOwnProperty(name)) {
            urls[name] = config.host + urls[name];
        }
    }
    return urls;
});