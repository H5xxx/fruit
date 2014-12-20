/*TMODJS:{"version":1,"md5":"6ec644e91ee727a39370305a28b8b6d7"}*/
template('package-list',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,packages=$data.packages,_package=$data._package,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<ul class="up-line sub-opts"> ';
$each(packages,function(_package,$index){
$out+=' <li class="j-package sub-opt" data-package-fruits="';
$out+=$escape(_package.fruits);
$out+='">';
$out+=$escape(_package.name);
$out+='</li> ';
});
$out+=' </ul>';
return new String($out);
});