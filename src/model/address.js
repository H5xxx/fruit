/*
 * model of address
 */

define(function(require, exports) {
    var url = require('../url');

    var Address = require('../proto/model').sub();

    Address.configure(
        'Address', 'id', 'province', 'city',
        'country', 'detail', 'isDefault', 'consignee',
        'phone'
    );

    Address.extend({
        url: url.getAddressList,

        save: function(list){
            list.forEach(function(address){
                address.province = address.provinceName;
                address.city = address.cityName;
                address.country = address.countryName;
                address.detail = address.detailAddress;
                address.phone = address.telPhone;
                address.isDefault = parseInt(address.isDefault, 10);

                Address.create(address);
            });
        },

        createRemotely: function(address, callback){
            $.post(url.createAddress, {
                provinceName: address.province,
                cityName: address.city,
                countryName: address.country,
                detailAddress: address.detail,
                telPhone: address.phone,
                isDefault: address.isDefault,
                consignee: address.consignee
            }, function(response){
                if(!response.err) Address.save([response.data]);

                callback(response.err, response.data);
            });
        }
    });

    return Address;
});