/*TMODJS:{"version":1,"md5":"3e952069802f850a44c19f16943b9df9"}*/
template('personal',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,user=$data.user,$out='';$out+='<div class="container-cnt"> <div class="info-block"> <div class="avatar-info"> <img class="avatar" src="';
$out+=$escape(user.headimgurl);
$out+='"></img> </div> <div class="name-info"> <span class="name">';
$out+=$escape(user.name);
$out+='</span> </div> </div> <div class="opt-block"> <ul class="opt-items"> <li class="j-nav opt-item" data-nav="/personal/order-list">历史订单</li> <li class="j-nav opt-item" data-nav="/personal/manage-address">地址管理</li> </ul> <ul class="opt-items"> <li class="j-nav opt-item" data-nav="/personal/fav">我的收藏</li> <li class="j-coupon opt-item" data-nav="/personal/coupon">我的优惠</li> </ul> </div> </div>';
return new String($out);
});