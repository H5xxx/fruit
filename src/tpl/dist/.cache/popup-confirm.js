/*TMODJS:{"version":2,"md5":"3cbc605c8b84c7de701602387151446f"}*/
template('popup-confirm',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cnt=$data.cnt,$out='';$out+='<div class="popup-wrapper popup-confirm"> <div class="cnt">';
$out+=$escape(cnt);
$out+='</div> <div class="bar"> <div class="j-popup-cancel cancel">取消</div> <div class="j-popup-confirm confirm">确定</div> </div> </div>';
return new String($out);
});