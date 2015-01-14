/*TMODJS:{"version":1,"md5":"5011169dd3727387a9cd16765b2176d7"}*/
template('popup-alert',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,cnt=$data.cnt,op=$data.op,$out='';$out+='<div class="popup-wrapper popup-alert"> <div class="cnt">';
$out+=$string(cnt);
$out+='</div> <div class="j-popup-close confirm">';
$out+=$string(op);
$out+='</div> </div>';
return new String($out);
});