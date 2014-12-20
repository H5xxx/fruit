/*TMODJS:{"version":18,"md5":"755f2d82324e477180da50bd5c2e4cf5"}*/
template('feedback',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,order=$data.order,fruit=$data.fruit,i=$data.i,$escape=$utils.$escape,$out='';$out+='<ul class="container-cnt items"> ';
$each(order.oldfruits,function(fruit,i){
$out+=' <li class="j-fruit-item fruit-item" data-fruit-id="';
$out+=$escape(fruit.id);
$out+='"> <img class="item-pic" src="';
$out+=$escape(fruit.icon);
$out+='"></img> <h5 class="item-title"> ';
$out+=$escape(fruit.name);
$out+=' <select class="j-rating rating"> <option value="5">5星</option> <option value="4">4星</option> <option value="3">3星</option> <option value="2">2星</option> <option value="1">1星</option> </select> </h5> <div class="input-line"> <input class="j-malution long" type="text" name="name" placeholder="味道不错"> </div> </li> ';
});
$out+=' </ul> <div class="bar"> <p class="cnt">提交评价？</p> <i class="j-submit op icon icon-tick"></i> </div>';
return new String($out);
});