/*TMODJS:{"version":10,"md5":"c490491d0afe1298c6218ddecc0658dd"}*/
template('fruit-list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,fruits=$data.fruits,fruit=$data.fruit,i=$data.i,$escape=$utils.$escape,type=$data.type,$out='';$out+='<ul class="items"> ';
$each(fruits,function(fruit,i){
$out+=' <li class="j-fruit-item fruit-item" data-id="';
$out+=$escape(fruit.id);
$out+='"> <img class="item-pic" src="';
$out+=$escape(fruit.icon);
$out+='"></img> <h5 class="item-title">';
$out+=$escape(fruit.name);
$out+='</h5> <p class="item-info"> ';
if(fruit.oldprice){
$out+=' <i class="item-feature discount">折</i> <span class="item-origin-price">原价';
$out+=$escape(fruit.oldprice);
$out+='元</span> ';
}
$out+=' <span class="item-price">';
$out+=$escape(fruit.price);
$out+='元</span> </p> ';
if(type === 'shop'){
$out+=' <div class="item-ops"> <span class="j-plus plus">+</span> <span class="j-num num" style="display:none;">0</span> <span class="j-minus minus" style="display:none;">-</span> </div> ';
}else if(type === 'cart'){
$out+=' <div class="item-ops"> <span class="j-plus plus">+</span> <span class="j-num num" style="display:none;">0</span> <span class="j-minus minus" style="display:none;">-</span> </div> ';
}else if(type === 'fav'){
$out+=' <span class="show-detail">点击查看详情</span> ';
}
$out+=' </li> ';
});
$out+=' </ul>';
return new String($out);
});