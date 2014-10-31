/*TMODJS:{"version":8,"md5":"1893292262b103bd15a07a0c76895137"}*/
template('order',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,order=$data.order,$each=$utils.$each,fruit=$data.fruit,i=$data.i,$out='';$out+='<div class="container-cnt order-info"> <div class="info-block"> <h5 class="block-title">订单信息</h5> <p class="block-item order-number">No.';
$out+=$escape(order.id);
$out+='</p> <p class="block-item order-price">金额：';
$out+=$escape(order.amount);
$out+='元</p> <p class="block-item order-status">状态：';
$out+=$escape(order.statusDispalyText);
$out+='</p> </div> <div class="info-block"> <h5 class="block-title">订单内容</h5> ';
$each(order.oldfruits,function(fruit,i){
$out+=' <p class="block-item order-cnt-item">';
$out+=$escape(fruit.name);
$out+=' * ';
$out+=$escape(fruit.num);
$out+='</p> ';
});
$out+=' </div> <div class="info-block"> <h5 class="block-title">收货信息</h5> <p class="block-item order-name">';
$out+=$escape(order.consignee);
$out+='</p> <p class="block-item order-phone">';
$out+=$escape(order.telPhone);
$out+='</p> <p class="block-item order-address">';
$out+=$escape(order.cityName);
$out+=$escape(order.countryName);
$out+=$escape(order.detailAddress);
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