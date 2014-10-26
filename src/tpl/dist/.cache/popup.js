/*TMODJS:{"version":2,"md5":"f9cfd10fa641bc428f6708214e38ba20"}*/
template('popup',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cls=$data.cls,$string=$utils.$string,cnt=$data.cnt,$out='';$out+='<div class="popup-wrapper ';
$out+=$escape(cls);
$out+='"> ';
$out+=$string(cnt);
$out+=' </div>';
return new String($out);
});