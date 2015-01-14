/*TMODJS:{"version":1,"md5":"5e80bb27b53259f6815dbe93aaa94460"}*/
template('popup',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cls=$data.cls,$string=$utils.$string,cnt=$data.cnt,$out='';$out+='<div class="popup-wrapper ';
$out+=$escape(cls);
$out+='"> ';
$out+=$string(cnt);
$out+=' </div>';
return new String($out);
});