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

            this.params = params;

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

        refreshList: function(){
            var me = this;
            AddressModel.fetch(me.params, function(err, list){
                if(!err){
                    me.params.addressList = list;
                    me.render(me.params);
                }
            }, true)
        },

        initAddressList: function(){
            var me = this,
                addressItems = this.el.find('.j-address-item');

            addressItems.each(function(_, addressItem){
                addressItem = $(addressItem);

                var addressId = addressItem.attr('data-address-id');

                addressItem.find('.j-set-default').on('tap', function(e){
                    e.stopPropagation();

                    AddressModel.setDefault(addressId, function(err, data){
                        if(err) Popup.alert(err);
                        else me.refreshList();
                    });
                });
            });
        },

        initBar: function(){
            var me = this;
                barDom = this.el.find('.j-bar'),
                next = barDom.find('.j-next');

            next.on('tap', function(e){
                me.createAddress(function(err, address){
                    if(err) Popup.alert(err);
                    else me.refreshList();
                });
            });
        },

        createAddress: function(callback){
            var address = {
                city: this.el.find('.j-city').val(),
                country: this.el.find('.j-country').val(),
                detail: this.el.find('.j-detail').val(),
                consignee: this.el.find('.j-consignee').val(),
                phone: this.el.find('.j-phone').val(),
                isDefault: 1
            };

            if(!(address.city && address.country && address.detail && address.consignee && address.phone)){
                Popup.alert('请填写正确的地址信息！');
                return;
            }

            AddressModel.createRemotely(address, callback);
        }
    });

    return ManageAddress;
});