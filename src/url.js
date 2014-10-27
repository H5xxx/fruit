/*
 * url collection
 */

define(function(require, exports) {
    var config = require('./config');

    var urls = {
        getNotice: '/notice',
        getCategories: '/service/product',
        getFruit: '/service/product/${id}',
        addFav: '/fav/add',
        getAddressList: '/user/address',
        createAddress: '/user/address/add',
        createOrder: '/service/orders'
    };

    for (var name in urls) {
        if (urls.hasOwnProperty(name)) {
            urls[name] = config.host + urls[name];
        }
    }
    return urls;
});