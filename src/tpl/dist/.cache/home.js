/*TMODJS:{"version":8,"md5":"b708787c0b1577411d8b658f1ae7ec9d"}*/
template('home',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,notice=$data.notice,$out='';$out+='<div class="container-cnt"> <div class="logo-block"></div> <h3 class="notice"> ';
$out+=$escape(notice.title);
$out+=' </h3> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">关于我们</h5> <p class="info-cnt"> ';
$out+=$escape(notice.about_us);
$out+=' </p> </li> <li class="info-line"> <h5 class="info-title">品牌文化</h5> <p class="info-cnt"> ';
$out+=$escape(notice.brand_culture);
$out+=' </p> </li> <li class="info-line"> <h5 class="info-title">联系我们</h5> <ul class="info-cnt"> <li>';
$out+=$escape(notice.address);
$out+='</li> <li>';
$out+=$escape(notice.email);
$out+='</li> <li>';
$out+=$escape(notice.telphone);
$out+='</li> </ul> </li> </ul> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">购买须知</h5> <p class="info-cnt"> ';
$out+=$escape(notice.notes);
$out+=' </p> </li> </ul> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">配送信息</h5> <p class="info-cnt"> ';
$out+=$escape(notice.distribution);
$out+=' </p> </li> </ul> </div>';
return new String($out);
});