/*TMODJS:{"version":37,"md5":"ca9b64d14d8b910294a77feaed004c1c"}*/
template('address',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,addressList=$data.addressList,address=$data.address,i=$data.i,$escape=$utils.$escape,$out='';$out+='<ul class="container-cnt items"> ';
$each(addressList,function(address,i){
$out+=' <li class="j-address-item';
if(address.isDefault){
$out+=' j-default';
}
$out+=' address-item" data-address-id="';
$out+=$escape(address.id);
$out+='"> <input class="j-address-radio item-input" type="radio" name="address-choice"> <div class="item-cnt"> <h5 class="item-title">';
if(address.isDefault){
$out+='[默认] ';
}
$out+=$escape(address.consignee);
$out+='，';
$out+=$escape(address.phone);
$out+='</h5> <p class="item-desc">';
$out+=$escape(address.province);
$out+=$escape(address.city);
$out+=$escape(address.country);
$out+=$escape(address.detail);
$out+='</p> </div> </li> ';
});
$out+=' <li class="j-address-item address-item new-item"> <input class="j-address-radio item-input" type="radio" name="address-choice"> <div class="item-cnt"> <h5 class="item-title">使用新的地址</h5> </div> <div class="input-block"> <div class="input-line"> <select class="j-city short"> <option>北京市</option> </select> <select class="j-country short"> <option>东城区</option> <option>西城区</option> <option>朝阳区</option> <option>海淀区</option> <option>丰台区</option> <option>石景山区</option> <option>门头沟区</option> <option>房山区</option> <option>通州区</option> <option>顺义区</option> <option>大兴区</option> <option>昌平区</option> <option>平谷区</option> <option>怀柔区</option> <option>密云县</option> <option>延庆县</option> </select> <input class="j-detail long" type="text" placeholder="具体地址"> </div> <div class="input-line"> <input class="j-consignee long" type="text" placeholder="收件人姓名"> </div> <div class="input-line"> <input class="j-phone long" type="number" placeholder="手机号码"> </div> </div> </li> </ul> <div class="j-bar bar"> <p class="cnt">请填写收件信息</p> <i class="j-next op icon icon-arrow"></i> </div>';
return new String($out);
});