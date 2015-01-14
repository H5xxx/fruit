/*TMODJS:{"version":1,"md5":"88ee844601cc028c5917cd046f153a2a"}*/
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