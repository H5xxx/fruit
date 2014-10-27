/*TMODJS:{"version":6,"md5":"98cde024573514353bf6c42dd0f25a5d"}*/
template('popup-alert',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cnt=$data.cnt,$out='';$out+='<div class="popup-wrapper popup-alert"> <div class="cnt">';
$out+=$escape(cnt);
$out+='</div> <div class="j-popup-close confirm">确定</div> </div>';
return new String($out);
});