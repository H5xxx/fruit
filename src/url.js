/*
 * url collection
 */

define(function(require, exports) {
    var config = require('./config');

    var urls = location.search.indexOf('dev') < 0 ? {
        getNotice: '/service/firstpage',
        getCategories: '/service/product',
        getFruit: '/service/product/${fruitId}',
        addFav: '/fav/add',
        getAddressList: '/service/address',
        createAddress: '/service/address',
        setDefaultAddress: '/service/address/default/${addressId}',
        getOrderList: '/service/orders',
        createOrder: '/service/orders',
        getOrder: '/service/orders/${orderId}',
        cancelOrder: '/service/orders/cancel/${orderId}',
        payOrder: '/service/orders/pay/${orderId}',
        refundOrder: '/service/orders/refund/${orderId}',
        getCookie: '/service/cookie?code=${code}',
        getCollectionList: '/service/collection',
        createCollection: '/service/collection',
        removeCollection: '/service/collection/${fruitid}',
        getUser: '/service/user',
        getToken: '/service/token',
        getTransfee: '/service/transfee',
        addMalution: '/service/orders/malution/${orderId}'
    } : {
        getNotice: '/service/firstpage',
        getCategories: '/service/product',
        getFruit: '/service/product/${fruitId}',
        addFav: '/fav/add',
        getAddressList: '/service/address',
        createAddress: '/service/address/add',
        setDefaultAddress: '/service/address/default/${addressId}',
        getOrderList: '/service/orders',
        createOrder: '/service/orders/add',
        getOrder: '/service/orders/${orderId}',
        cancelOrder: '/service/orders/cancel/${orderId}',
        payOrder: '/service/orders/pay/${orderId}',
        refundOrder: '/service/orders/refund/${orderId}',
        getCookie: '/service/cookie?code=${code}',
        getCollectionList: '/service/collection',
        createCollection: '/service/collection/add',
        removeCollection: '/service/collection/${fruitid}',
        getUser: '/service/user',
        getToken: '/service/token',
        getTransfee: '/service/transfee',
        addMalution: '/service/orders/malution/${orderId}'
    };

    for (var name in urls) {
        if (urls.hasOwnProperty(name)) {
            urls[name] = config.host + urls[name];
        }
    }
    return urls;
});