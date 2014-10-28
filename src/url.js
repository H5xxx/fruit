/*
 * url collection
 */

define(function(require, exports) {
    var config = require('./config');

    var urls = {
        getNotice: '/notice',
        getCategories: '/service/product',
        getFruit: '/service/product/${fruitId}',
        addFav: '/fav/add',
        getAddressList: '/service/address',
        createAddress: '/service/address/add',
        createOrder: '/service/orders',
        getOrder: '/service/orders/${orderId}'
    };

    for (var name in urls) {
        if (urls.hasOwnProperty(name)) {
            urls[name] = config.host + urls[name];
        }
    }
    return urls;
});