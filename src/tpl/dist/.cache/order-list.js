/*TMODJS:{"version":5,"md5":"73bb274e45ba8098a05e0ce963aeb2e8"}*/
template('order-list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,orderList=$data.orderList,order=$data.order,i=$data.i,$escape=$utils.$escape,$out='';$out+='<ul class="container-cnt items"> ';
$each(orderList,function(order,i){
$out+=' <li class="order-item"> <h5 class="item-title">';
$out+=$escape(order.title);
$out+='</h5> <span class="item-infos"> <span class="item-info">';
$out+=$escape(order.statusDispalyText);
$out+='</span> <span class="item-info">￥';
$out+=$escape(order.amount);
$out+='</span> </span> <p class="item-address">';
$out+=$escape(order.receptionAddress.consignee);
$out+='，';
$out+=$escape(order.receptionAddress.province);
$out+=$escape(order.receptionAddress.city);
$out+=$escape(order.receptionAddress.country);
$out+=$escape(order.receptionAddress.detail);
$out+='</p> <span class="item-ops"> ';
if(order.status == 1){
$out+=' <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.id);
$out+='">去支付</span> ';
}else if((order.status == 3 || order.status == 4)){
$out+=' <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.id);
$out+='">去评价</span> ';
}else{
$out+=' ';
}
$out+=' <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.id);
$out+='">查看详情</span> </span> </li> ';
});
$out+=' </ul>';
return new String($out);
});