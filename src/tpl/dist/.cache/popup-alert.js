/*TMODJS:{"version":8,"md5":"e986bab458bcc9643d9b06ee7cfaa0e0"}*/
template('popup-alert',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,cnt=$data.cnt,op=$data.op,$out='';$out+='<div class="popup-wrapper popup-alert"> <div class="cnt">';
$out+=$string(cnt);
$out+='</div> <div class="j-popup-close confirm">';
$out+=$string(op);
$out+='</div> </div>';
return new String($out);
});