/*TMODJS:{"version":1,"md5":"09c3f156905bb6977e45aa790a53c1d8"}*/
template('popup-confirm',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cnt=$data.cnt,$out='';$out+='<div class="popup-wrapper popup-confirm"> <div class="cnt">';
$out+=$escape(cnt);
$out+='</div> <div class="bar"> <div class="j-popup-cancel cancel">取消</div> <div class="j-popup-confirm confirm">确定</div> </div> </div>';
return new String($out);
});