/*
 * Scene - ManageAddress
 */

define(function(require, exports) {
	var util = require('../util');
    var AddressModel = require('../model/address');
    var Popup = require('../widget/popup');

    var ManageAddress = require('../proto/scene').sub({

        el: $('#manage-address'),

        title: '地址管理',

        template: 'manage-address',

        getData: function(params, callback) {

            util.finish([

                AddressModel.fetch.bind(AddressModel, params)

            ], function(addressList){

                callback(null, {
                    addressList: addressList
                });

            });

        },

        render: function(params){
            ManageAddress.__super__.render.apply(this, arguments);

            this.initAddressList();

            this.initBar();
        },

        initAddressList: function(){
            var me = this,
                addressItems = this.el.find('.j-address-item');
        },

        initBar: function(){
            var me = this;
                barDom = this.el.find('.j-bar'),
                next = barDom.find('.j-next');

            next.on('tap', function(e){
                me.createAddress(function(err, address){
                    if(err){
                        Popup.alert(err);
                    }else{
                    	// TODO: refresh address list
                    }
                });
            });
        },

        createAddress: function(callback){
            AddressModel.createRemotely({
                city: this.el.find('.j-city').val(),
                country: this.el.find('.j-country').val(),
                detail: this.el.find('.j-detail').val(),
                consignee: this.el.find('.j-consignee').val(),
                phone: this.el.find('.j-phone').val(),
                isDefault: true
            }, callback);
        }
    });

    return ManageAddress;
});