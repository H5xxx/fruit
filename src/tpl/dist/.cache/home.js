/*TMODJS:{"version":6,"md5":"65fe81e861b126d18af5d355694c9f7c"}*/
template('home',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,notice=$data.notice,$out='';$out+='<div class="logo-block"></div> <h3 class="notice"> ';
$out+=$escape(notice.main);
$out+=' </h3> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">关于我们</h5> <p class="info-cnt"> 仙果堂是其实，小仙只是想告诉你，把关爱从世界收回来，多放一点在自己身上，白里透红的健康、广 </p> </li> <li class="info-line"> <h5 class="info-title">品牌文化</h5> <p class="info-cnt"> 仙果堂是其实，小仙只是想告诉 </p> </li> <li class="info-line"> <h5 class="info-title">联系我们</h5> <ul class="info-cnt"> <li>北京市某某路111号</li> <li>xxxx@gmail.com</li> <li>17283010283</li> </ul> </li> </ul> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">购买须知</h5> <p class="info-cnt"> 这里是购买须知购买须知购买须知购买须知 </p> </li> </ul> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">配送信息</h5> <p class="info-cnt"> ';
$out+=$escape(notice.distribution);
$out+=' </p> </li> </ul>';
return new String($out);
});