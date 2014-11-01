/*TMODJS:{"version":13,"md5":"3bed9860424edf2d7c8c73af213b9351"}*/
template('fruit-list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,fruits=$data.fruits,$each=$utils.$each,fruit=$data.fruit,i=$data.i,$escape=$utils.$escape,type=$data.type,$out='';$out+='<ul class="items"> ';
if(fruits.length){
$out+=' ';
$each(fruits,function(fruit,i){
$out+=' <li class="j-fruit-item fruit-item" data-id="';
$out+=$escape(fruit.id);
$out+='"> <img class="item-pic" src="';
$out+=$escape(fruit.icon);
$out+='"></img> <h5 class="item-title">';
$out+=$escape(fruit.name);
$out+='</h5> <p class="item-info"> ';
if(fruit.isNewFruit){
$out+=' <i class="item-feature new">新</i> ';
}
$out+=' ';
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
$out+=' ';
}else{
$out+=' 没有水果 ';
}
$out+=' </ul>';
return new String($out);
});