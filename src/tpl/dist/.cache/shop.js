/*TMODJS:{"version":43,"md5":"564b7c9b82b10800e2525f5f5722a309"}*/
template('shop',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,categories=$data.categories,category=$data.category,i=$data.i,$escape=$utils.$escape,$out='';$out+='<div class="side-cnt"> <div class="up-line logo"></div> <ul class="side-items"> ';
$each(categories,function(category,i){
$out+=' <li class="j-category-item side-item';
if(category.isHaveNew){
$out+=' has-new';
}
$out+='" data-id="';
$out+=$escape(category.id);
$out+='"> <span class="item-cnt">';
$out+=$escape(category.name);
$out+='</span> </li> ';
});
$out+=' </ul> </div> <div class="main-cnt"> <div class="j-package-list-wrapper sub-opts-wrapper"> </div> <div class="j-fruit-list-wrapper"> </div> </div> <div class="j-bar bar"> <p class="cnt">已选购 <span class="j-num num">3</span> 件，共 <span class="j-sum sum">15</span> 元</p> <i class="j-next op icon icon-tick"></i> </div>';
return new String($out);
});