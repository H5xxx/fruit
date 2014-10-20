/*TMODJS:{"version":4,"md5":"b4dd0827c04f55a16c44b6a599b7e178"}*/
template('fruit-list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,fruits=$data.fruits,fruit=$data.fruit,i=$data.i,$escape=$utils.$escape,$out='';$out+='<ul class="items"> ';
$each(fruits,function(fruit,i){
$out+=' <li class="j-fruit-item fruit-item" data-id="';
$out+=$escape(fruit.id);
$out+='"> <img class="item-pic" src="./asset/img/fruit.png"></img> <h5 class="item-title">';
$out+=$escape(fruit.name);
$out+='</h5> <p class="item-info">  <span class="item-price">';
$out+=$escape(fruit.price);
$out+='元</span> </p> <div class="item-ops"> <span class="j-plus plus">+</span> <span class="j-num num" style="display:none;">0</span> <span class="j-minus minus" style="display:none;">-</span> </div> </li> ';
});
$out+=' </ul>';
return new String($out);
});