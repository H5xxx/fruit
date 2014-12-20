/*TMODJS:{"version":11,"md5":"65e19f1f697cc0f6f958d27996cec301"}*/
template('order-list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,orderList=$data.orderList,$each=$utils.$each,order=$data.order,i=$data.i,$escape=$utils.$escape,$out='';$out+='<ul class="container-cnt items"> ';
if(orderList.length){
$out+=' ';
$each(orderList,function(order,i){
$out+=' <li class="order-item order-status';
$out+=$escape(order.status);
$out+='"> <h5 class="item-title">';
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
$out+='/feedback">去评价</span> <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.orderid);
$out+='">查看详情</span> ';
}else{
$out+=' <span class="j-nav item-op" data-nav="/personal/order/';
$out+=$escape(order.orderid);
$out+='">查看详情</span> ';
}
$out+=' </span> </li> ';
});
$out+=' ';
}else{
$out+=' 还没有订单 ';
}
$out+=' </ul>';
return new String($out);
});