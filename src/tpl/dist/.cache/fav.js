/*TMODJS:{"version":7,"md5":"cf091ea4837245a34ce5c9214feec0b4"}*/
template('fav',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,fruitList=$data.fruitList,fruit=$data.fruit,i=$data.i,$escape=$utils.$escape,$out='';$out+='<div class="j-fruit-list-wrapper"> <!-- <ul class="container-cnt items"> ';
$each(fruitList,function(fruit,i){
$out+=' <li class="fruit-item"> <img class="item-pic" src="';
$out+=$escape(fruit.icon);
$out+='"></img> <h5 class="item-title">';
$out+=$escape(fruit.name);
$out+='</h5> <p class="item-info"> <span class="item-origin-price">原价8元</span> <span class="item-price">5元</span> </p> <span class="show-detail">点击查看详情</span> </li> ';
});
$out+=' <li class="fruit-item"> <img class="item-pic" src="./asset/img/fruit.png"></img> <h5 class="item-title">苹果套餐</h5> <p class="item-info"> <span class="item-origin-price">原价8元</span> <span class="item-price">5元</span> </p> <span class="show-detail">点击查看详情</span> </li> </ul> --> </div>';
return new String($out);
});