/*TMODJS:{"version":8,"md5":"7e113616fa9b744e6f838259f5880681"}*/
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
$out+=$escape(order.consignee);
$out+='，';
$out+=$escape(order.cityName);
$out+=$escape(order.countryName);
$out+=$escape(order.detailAddress);
$out+='</p> <span class="item-ops"> ';
if(order.status == 1){
$out+=' <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.orderid);
$out+='">去支付</span> <span class="j-cancel item-op" data-order-id="';
$out+=$escape(order.orderid);
$out+='">取消订单</span> ';
}else if((order.status == 3 || order.status == 4)){
$out+=' <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.orderid);
$out+='">去评价</span> <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.orderid);
$out+='">查看详情</span> ';
}else{
$out+=' <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.orderid);
$out+='">查看详情</span> ';
}
$out+=' </span> </li> ';
});
$out+=' </ul>';
return new String($out);
});