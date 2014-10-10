/*TMODJS:{"version":1,"md5":"edb14463b2eb5ae68a4ae9500c8f24ad"}*/
template('home',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,framework=$data.framework,$out='';$out+='<h1> Here is HOME. </h1> <p>PRODUCED BY ';
$out+=$escape(framework.name);
$out+='</p>';
return new String($out);
});