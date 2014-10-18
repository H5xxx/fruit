/*TMODJS:{"version":1,"md5":"6a579d3f46d369f9c316f3d81a1b6c77"}*/
template('src/intro',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,infos=$data.infos,info=$data.info,i=$data.i,$escape=$utils.$escape,framework=$data.framework,$out='';$out+='<p>Im</p> <ul> ';
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