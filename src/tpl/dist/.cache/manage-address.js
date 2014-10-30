/*TMODJS:{"version":7,"md5":"22425313fdddea82ea01d204873cbe8d"}*/
template('manage-address',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,addressList=$data.addressList,address=$data.address,i=$data.i,$escape=$utils.$escape,$out='';$out+='<ul class="container-cnt items"> ';
$each(addressList,function(address,i){
$out+=' <li class="j-address-item';
if(address.isDefault){
$out+=' j-default';
}
$out+=' address-item" data-address-id="';
$out+=$escape(address.id);
$out+='"> <div class="item-cnt"> <h5 class="item-title">';
if(address.isDefault){
$out+='[默认] ';
}
$out+=$escape(address.consignee);
$out+='，';
$out+=$escape(address.phone);
$out+='</h5> <p class="item-desc"> ';
$out+=$escape(address.province);
$out+=$escape(address.city);
$out+=$escape(address.country);
$out+=$escape(address.detail);
$out+=' <span class="set-default">设为默认</span> </p> </div> </li> ';
});
$out+=' <li class="address-item new-item"> <div class="item-cnt" to="address-choice2"> <h5 class="item-title">使用新的地址</h5> </div> <div class="input-block"> <div class="input-line"> <select class="j-city short"> <option>市</option> </select> <select class="j-country short"> <option>区</option> </select> <input class="j-detail long" type="text" value="xx路30号"> </div> <div class="input-line"> <input class="j-consignee long" type="text" value="汪先生"> </div> <div class="input-line"> <input class="j-phone long" type="number" value="18212334123"> </div> </div> </li> </ul> <div class="bar"> <p class="cnt">添加该地址？</p> <i class="j-next op"></i> </div>';
return new String($out);
});