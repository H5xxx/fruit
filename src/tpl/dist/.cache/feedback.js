/*TMODJS:{"version":12,"md5":"e53f076de38ec67df3d9cd0092412a82"}*/
template('feedback',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,order=$data.order,fruit=$data.fruit,i=$data.i,$escape=$utils.$escape,$out='';$out+='<ul class="container-cnt items"> ';
$each(order.fruits,function(fruit,i){
$out+=' <li class="fruit-item"> <img class="item-pic" src="';
$out+=$escape(fruit.icon);
$out+='"></img> <h5 class="item-title"> ';
$out+=$escape(fruit.name);
$out+=' <select class="rating"> <option>5星</option> <option>4星</option> <option>3星</option> <option>2星</option> <option>1星</option> </select> </h5> <div class="input-line"> <input class="long" type="text" name="name" placeholder="味道不错"> </div> </li> ';
});
$out+=' </ul> <div class="bar"> <p class="cnt">提交评价？</p> <i class="j-nav op" data-nav="/personal"></i> </div>';
return new String($out);
});