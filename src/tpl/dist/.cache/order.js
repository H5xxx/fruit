/*TMODJS:{"version":7,"md5":"abb7ac171f9561378e81191ef473b20e"}*/
template('order',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,order=$data.order,$each=$utils.$each,fruit=$data.fruit,i=$data.i,$out='';$out+='<div class="container-cnt order-info"> <div class="info-block"> <h5 class="block-title">订单信息</h5> <p class="block-item order-number">No.';
$out+=$escape(order.id);
$out+='</p> <p class="block-item order-price">金额：';
$out+=$escape(order.amount);
$out+='元</p> <p class="block-item order-status">状态：';
$out+=$escape(order.statusDispalyText);
$out+='</p> </div> <div class="info-block"> <h5 class="block-title">订单内容</h5> ';
$each(order.fruits,function(fruit,i){
$out+=' <p class="block-item order-cnt-item">';
$out+=$escape(fruit.name);
$out+=' * ';
$out+=$escape(fruit.num);
$out+='</p> ';
});
$out+=' </div> <div class="info-block"> <h5 class="block-title">收货信息</h5> <p class="block-item order-name">';
$out+=$escape(order.receptionAddress.consignee);
$out+='</p> <p class="block-item order-phone">';
$out+=$escape(order.receptionAddress.phone);
$out+='</p> <p class="block-item order-address">';
$out+=$escape(order.receptionAddress.province);
$out+=$escape(order.receptionAddress.city);
$out+=$escape(order.receptionAddress.country);
$out+=$escape(order.receptionAddress.detail);
$out+='</p> </div> </div> ';
if(order.status == 1){
$out+=' <div class="bar"> <p class="cnt">确认支付？</p> <i class="j-pay op"></i> </div> ';
}else if((order.status == 3 || order.status == 4)){
$out+=' <div class="bar"> <p class="cnt">订单已完成，去评价？</p> <i class="j-comment op"></i> </div> ';
}else{
$out+=' ';
}
return new String($out);
});