/*TMODJS:{"version":19,"md5":"c869a8a7f87ed33e417c761265973a1a"}*/
template('popup-fruit',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,images=$data.images,image=$data.image,i=$data.i,$escape=$utils.$escape,isCollection=$data.isCollection,name=$data.name,price=$data.price,discrbe=$data.discrbe,weight=$data.weight,oldfruitlist=$data.oldfruitlist,malution=$data.malution,$out='';$out+='<div class="popup-wrapper popup-fruit"> <div class="j-popup-close close"></div> <div class="fruit-detail-wrapper"> <div class="j-fruit-img-slider fruit-img-swipe"> <div class="swipe-wrap"> ';
$each(images,function(image,i){
$out+=' <div class="fruit-img"> <img src="';
$out+=$escape(image);
$out+='" width="100%"> </div> ';
});
$out+=' </div> </div> <div class="fruit-info-block"> <span class="j-fav fav">';
if(isCollection){
$out+='取消收藏';
}else{
$out+='+收藏';
}
$out+='</span> <h5 class="fruit-name">';
$out+=$escape(name);
$out+='</h5> <p class="fruit-info-item"> <span class="fruit-info-key">价格</span> <span class="fruit-info-val"><span class="j-price">';
$out+=$escape(price);
$out+='</span>元</span> </p> <p class="fruit-info-item"> <span class="fruit-info-key">内容</span> <span class="j-desc fruit-info-val">';
$out+=$escape(discrbe);
$out+='</span> </p> <p class="fruit-info-item"> <span class="fruit-info-key">重量</span> <span class="fruit-info-val"><span class="j-weight">';
$out+=$escape(weight);
$out+='</span>g</span> </p> <p class="fruit-info-item"> <span class="fruit-info-key">评价</span> <span class="fruit-info-val"> ';
$each(oldfruitlist,function(malution,i){
$out+=' <span class="rating">';
$out+=$escape(malution.malutionFlag);
$out+='星</span> <i>';
$out+=$escape(malution.malutionText);
$out+='</i> <br/> ';
});
$out+=' </span> </p> </div> </div> <div class="j-bar bar"> <p class="cnt">已选购 <span class="j-num num"></span> 件</p> <i class="j-minus op minus">-</i> <i class="j-plus op icon icon-plus"></i> </div> </div>';
return new String($out);
});