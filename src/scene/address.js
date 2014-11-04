/*
 * Scene - Address
 */

define(function(require, exports) {
    var util = require('../util');
    var AddressModel = require('../model/address');
    var Order = require('../model/order');
    var Popup = require('../widget/popup');
    var cart = require('../widget/cart');

    var Address = require('../proto/scene').sub({

        el: $('#address'),

        title: '选择地址',

        template: 'address',

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
            Address.__super__.render.apply(this, arguments);

            this.initAddressList();

            this.initBar();
        },

        initAddressList: function(){
            var me = this,
                addressItems = this.el.find('.j-address-item');

            var active = function(item){
                addressItems.each(function(i){
                    var item = $(this);
                    item.removeClass('active');
                });

                item = $(item);
                item.find('.j-address-radio')[0].checked = true;
                item.addClass('active');
            };

            addressItems.on('tap', function(e){
                active(this);
                me.addressId = $(this).attr('data-address-id') || -1;
            });

            this.el.find('.j-default').trigger('tap');
        },

        initBar: function(){
            var me = this;
                barDom = this.el.find('.j-bar'),
                next = barDom.find('.j-next');

            next.on('tap', function(e){
                if(me.addressId !== -1){
                    me.submitOrder();
                }else{
                    me.createAddress(function(err, address){
                        if(err){
                            Popup.alert(err);
                        }else{
                            me.addressId = address.id;
                            me.submitOrder();
                        }
                    });
                }
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
        },

        submitOrder: function(){
            var page = this.page;

            Order.createRemotely({
                addressId: this.addressId,
                fruits: cart.list(),
                amount: cart.sum
            }, function(err, order){
                if(err){
                    Popup.alert(err);
                }else{
                    cart.clean();
                    Popup.alert('订单已提交，我们会第一时间与您取得联系', function(){
                        page.navigate('/personal/order/' + order.orderid);
                    });
                }
            });
        }
    });

    return Address;
});