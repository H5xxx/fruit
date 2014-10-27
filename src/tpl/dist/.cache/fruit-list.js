/*TMODJS:{"version":9,"md5":"60d1856cdeb97a4dc868f72f3e6a5063"}*/
template('fruit-list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,fruits=$data.fruits,fruit=$data.fruit,i=$data.i,$escape=$utils.$escape,type=$data.type,$out='';$out+='<ul class="items"> ';
$each(fruits,function(fruit,i){
$out+=' <li class="j-fruit-item fruit-item" data-id="';
$out+=$escape(fruit.id);
$out+='"> <img class="item-pic" src="';
$out+=$escape(fruit.icon);
$out+='"></img> <h5 class="item-title">';
$out+=$escape(fruit.name);
$out+='</h5> <p class="item-info">  <span class="item-price">';
$out+=$escape(fruit.price);
$out+='元</span> </p> ';
if(type === 'shop'){
$out+=' <div class="item-ops"> <span class="j-plus plus">+</span> <span class="j-num num" style="display:none;">0</span> <span class="j-minus minus" style="display:none;">-</span> </div> ';
}else if(type === 'cart'){
$out+=' <div class="item-ops"> <span class="j-plus plus">+</span> <span class="j-num num" style="display:none;">0</span> <span class="j-minus minus" style="display:none;">-</span> </div> ';
}
$out+=' </li> ';
});
$out+=' </ul>';
return new String($out);
});