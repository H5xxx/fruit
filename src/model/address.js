/*
 * model of address
 */

define(function(require, exports) {
    var url = require('../url');

    var Address = require('../proto/model').sub();

    Address.configure(
        'Address', 'id', 'provinceCode', 'provinecName', 'cityCode', 'cityName',
        'countryCode', 'countryName', 'detailAddress', 'isDefault', 'consignee',
        'telPhone'
    );

    Address.extend({
        url: url.getAddress
    });

    return Address;
});