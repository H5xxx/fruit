/*TMODJS:{"version":1,"md5":"902df73b237e71bce309912ca28152aa"}*/
template('src/home',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,framework=$data.framework,$out='';$out+='<h1> Here is HOME. </h1> <p>PRODUCED BY ';
$out+=$escape(framework.name);
$out+='</p>';
return new String($out);
});