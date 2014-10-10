/*TMODJS:{"version":3,"md5":"809421b15eff9eaa558812926ed2fd07"}*/
template('intro',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,infos=$data.infos,info=$data.info,i=$data.i,$escape=$utils.$escape,framework=$data.framework,$out='';$out+='<p>I\'m</p> <ul> ';
$each(infos,function(info,i){
$out+=' <li>';
$out+=$escape(info.cnt);
$out+='</li> ';
});
$out+=' </ul> <p>PRODUCED BY ';
$out+=$escape(framework.name);
$out+='</p>';
return new String($out);
});