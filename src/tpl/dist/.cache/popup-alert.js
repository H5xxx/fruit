/*TMODJS:{"version":7,"md5":"09c2a54b1f5a18479d98425b2db28fb8"}*/
template('popup-alert',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,cnt=$data.cnt,$out='';$out+='<div class="popup-wrapper popup-alert"> <div class="cnt">';
$out+=$string(cnt);
$out+='</div> <div class="j-popup-close confirm">确定</div> </div>';
return new String($out);
});