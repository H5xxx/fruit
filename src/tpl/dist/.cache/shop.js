/*TMODJS:{"version":30,"md5":"db57c9ddeb270c0993f0b9d9ddb19ee4"}*/
template('shop',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,categories=$data.categories,category=$data.category,i=$data.i,$escape=$utils.$escape,$out='';$out+='<div class="side-cnt"> <div class="up-line logo"></div> <ul class="side-items"> ';
$each(categories,function(category,i){
$out+=' <li class="j-category-item side-item" data-id="';
$out+=$escape(category.id);
$out+='"> <span class="item-cnt">';
$out+=$escape(category.name);
$out+='</span> </li> ';
});
$out+=' </ul> </div> <div class="main-cnt">  <div class="j-fruit-list-wrapper"> </div> </div> <div class="j-bar bar"> <p class="cnt">已选购 <span class="j-num num">3</span> 件，共 <span class="j-sum sum">15</span> 元</p> <i class="j-nav op" data-nav="/cart"></i> </div>';
return new String($out);
});