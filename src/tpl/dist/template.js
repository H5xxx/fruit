/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^/]+\1\.\.\1/,d=("./"+a).replace(/[^/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,/*v:37*/
a("address",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.addressList,e=(a.address,a.i,b.$escape),f="";return f+='<ul class="container-cnt items"> ',c(d,function(a){f+=' <li class="j-address-item',a.isDefault&&(f+=" j-default"),f+=' address-item" data-address-id="',f+=e(a.id),f+='"> <input class="j-address-radio item-input" type="radio" name="address-choice"> <div class="item-cnt"> <h5 class="item-title">',a.isDefault&&(f+="[\u9ed8\u8ba4] "),f+=e(a.consignee),f+="\uff0c",f+=e(a.phone),f+='</h5> <p class="item-desc">',f+=e(a.province),f+=e(a.city),f+=e(a.country),f+=e(a.detail),f+="</p> </div> </li> "}),f+=' <li class="j-address-item address-item new-item"> <input class="j-address-radio item-input" type="radio" name="address-choice"> <div class="item-cnt"> <h5 class="item-title">\u4f7f\u7528\u65b0\u7684\u5730\u5740</h5> </div> <div class="input-block"> <div class="input-line"> <select class="j-city short"> <option>\u5317\u4eac\u5e02</option> </select> <select class="j-country short"> <option>\u4e1c\u57ce\u533a</option> <option>\u897f\u57ce\u533a</option> <option>\u671d\u9633\u533a</option> <option>\u6d77\u6dc0\u533a</option> <option>\u4e30\u53f0\u533a</option> <option>\u77f3\u666f\u5c71\u533a</option> <option>\u95e8\u5934\u6c9f\u533a</option> <option>\u623f\u5c71\u533a</option> <option>\u901a\u5dde\u533a</option> <option>\u987a\u4e49\u533a</option> <option>\u5927\u5174\u533a</option> <option>\u660c\u5e73\u533a</option> <option>\u5e73\u8c37\u533a</option> <option>\u6000\u67d4\u533a</option> <option>\u5bc6\u4e91\u53bf</option> <option>\u5ef6\u5e86\u53bf</option> </select> <input class="j-detail long" type="text" placeholder="\u5177\u4f53\u5730\u5740"> </div> <div class="input-line"> <input class="j-consignee long" type="text" placeholder="\u6536\u4ef6\u4eba\u59d3\u540d"> </div> <div class="input-line"> <input class="j-phone long" type="number" placeholder="\u624b\u673a\u53f7\u7801"> </div> </div> </li> </ul> <div class="j-bar bar"> <p class="cnt">\u8bf7\u586b\u5199\u6536\u4ef6\u4fe1\u606f</p> <i class="j-next op icon icon-arrow"></i> </div>',new k(f)}),/*v:18*/
a("cart",'<div class="j-fruit-list-wrapper"> </div> <div class="j-bar bar"> <p class="cnt">\u5df2\u9009\u8d2d <span class="j-num num"></span> \u4ef6\uff0c\u5171 <span class="j-sum sum"></span> \u5143</p> <i class="j-next op icon icon-tick"></i> </div>'),/*v:8*/
a("fav",'<div class="j-fruit-list-wrapper"> </div>'),/*v:13*/
a("feedback",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.order,e=(a.fruit,a.i,b.$escape),f="";return f+='<ul class="container-cnt items"> ',c(d.fruits,function(a){f+=' <li class="fruit-item"> <img class="item-pic" src="',f+=e(a.icon),f+='"></img> <h5 class="item-title"> ',f+=e(a.name),f+=' <select class="rating"> <option>5\u661f</option> <option>4\u661f</option> <option>3\u661f</option> <option>2\u661f</option> <option>1\u661f</option> </select> </h5> <div class="input-line"> <input class="long" type="text" name="name" placeholder="\u5473\u9053\u4e0d\u9519"> </div> </li> '}),f+=' </ul> <div class="bar"> <p class="cnt">\u63d0\u4ea4\u8bc4\u4ef7\uff1f</p> <i class="j-nav op icon icon-tick" data-nav="/personal"></i> </div>',new k(f)}),/*v:14*/
a("fruit-list",function(a){"use strict";var b=this,c=(b.$helpers,a.fruits),d=b.$each,e=(a.fruit,a.i,b.$escape),f=a.type,g="";return g+='<ul class="items"> ',c.length?(g+=" ",d(c,function(a){g+=' <li class="j-fruit-item fruit-item" data-id="',g+=e(a.id),g+='"> <img class="item-pic" src="',g+=e(a.icon),g+='"></img> <h5 class="item-title">',g+=e(a.name),g+='</h5> <p class="item-info"> ',a.isNewFruit&&(g+=' <i class="item-feature new">\u65b0</i> '),g+=" ",a.oldprice&&(g+=' <i class="item-feature discount">\u6298</i> <span class="item-origin-price">\u539f\u4ef7',g+=e(a.oldprice),g+="\u5143</span> "),g+=' <span class="item-price">',g+=e(a.price),g+="\u5143</span> </p> ","shop"===f?g+=' <div class="item-ops"> <span class="j-plus plus">+</span> <span class="j-num num" style="display:none;">0</span> <span class="j-minus minus" style="display:none;">-</span> </div> ':"cart"===f?g+=' <div class="item-ops"> <span class="j-plus plus">+</span> <span class="j-num num" style="display:none;">0</span> <span class="j-minus minus" style="display:none;">-</span> </div> ':"fav"===f&&(g+=' <span class="show-detail">\u70b9\u51fb\u67e5\u770b\u8be6\u60c5</span> '),g+=" </li> "}),g+=" "):g+=" \u6ca1\u6709\u5185\u5bb9 ",g+=" </ul>",new k(g)}),/*v:12*/
a("home",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.notice,e="";return e+='<div class="container-cnt"> <div class="logo-block"></div> <h3 class="notice"> <i class="icon icon-notice"></i>',e+=c(d.title),e+=' </h3> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">\u5173\u4e8e\u6211\u4eec</h5> <p class="info-cnt"> ',e+=c(d.about_us),e+=' </p> </li> <li class="info-line"> <h5 class="info-title">\u54c1\u724c\u6587\u5316</h5> <p class="info-cnt"> ',e+=c(d.brand_culture),e+=' </p> </li> <li class="info-line"> <h5 class="info-title">\u8054\u7cfb\u6211\u4eec</h5> <ul class="info-cnt"> <li><i class="icon icon-location"></i>',e+=c(d.address),e+='</li> <li><i class="icon icon-mail"></i>',e+=c(d.email),e+='</li> <li><i class="icon icon-phone"></i>',e+=c(d.telphone),e+='</li> </ul> </li> </ul> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">\u8d2d\u4e70\u987b\u77e5</h5> <p class="info-cnt"> ',e+=c(d.notes),e+=' </p> </li> </ul> <ul class="info-block"> <li class="info-line"> <h5 class="info-title">\u914d\u9001\u4fe1\u606f</h5> <p class="info-cnt"> ',e+=c(d.distribution),e+=" </p> </li> </ul> </div>",new k(e)}),/*v:12*/
a("manage-address",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.addressList,e=(a.address,a.i,b.$escape),f="";return f+='<ul class="container-cnt items"> ',c(d,function(a){f+=' <li class="j-address-item',a.isDefault&&(f+=" j-default"),f+=' address-item" data-address-id="',f+=e(a.id),f+='"> <div class="item-cnt"> <h5 class="item-title">',a.isDefault&&(f+="[\u9ed8\u8ba4] "),f+=e(a.consignee),f+="\uff0c",f+=e(a.phone),f+='</h5> <p class="item-desc"> ',f+=e(a.province),f+=e(a.city),f+=e(a.country),f+=e(a.detail),f+=" ",a.isDefault||(f+='<span class="j-set-default set-default">\u8bbe\u4e3a\u9ed8\u8ba4</span>'),f+=" </p> </div> </li> "}),f+=' <li class="address-item new-item"> <div class="item-cnt" to="address-choice2"> <h5 class="item-title">\u4f7f\u7528\u65b0\u7684\u5730\u5740</h5> </div> <div class="input-block"> <div class="input-line"> <select class="j-city short"> <option>\u5317\u4eac\u5e02</option> </select> <select class="j-country short"> <option>\u4e1c\u57ce\u533a</option> <option>\u897f\u57ce\u533a</option> <option>\u671d\u9633\u533a</option> <option>\u6d77\u6dc0\u533a</option> <option>\u4e30\u53f0\u533a</option> <option>\u77f3\u666f\u5c71\u533a</option> <option>\u95e8\u5934\u6c9f\u533a</option> <option>\u623f\u5c71\u533a</option> <option>\u901a\u5dde\u533a</option> <option>\u987a\u4e49\u533a</option> <option>\u5927\u5174\u533a</option> <option>\u660c\u5e73\u533a</option> <option>\u5e73\u8c37\u533a</option> <option>\u6000\u67d4\u533a</option> <option>\u5bc6\u4e91\u53bf</option> <option>\u5ef6\u5e86\u53bf</option> </select> <input class="j-detail long" type="text" placeholder="\u5177\u4f53\u5730\u5740"> </div> <div class="input-line"> <input class="j-consignee long" type="text" placeholder="\u6536\u4ef6\u4eba\u59d3\u540d"> </div> <div class="input-line"> <input class="j-phone long" type="number" placeholder="\u624b\u673a\u53f7\u7801"> </div> </div> </li> </ul> <div class="j-bar bar"> <p class="cnt">\u6dfb\u52a0\u8be5\u5730\u5740\uff1f</p> <i class="j-next op icon icon-plus"></i> </div>',new k(f)}),/*v:9*/
a("order-list",function(a){"use strict";var b=this,c=(b.$helpers,a.orderList),d=b.$each,e=(a.order,a.i,b.$escape),f="";return f+='<ul class="container-cnt items"> ',c.length?(f+=" ",d(c,function(a){f+=' <li class="order-item"> <h5 class="item-title">',f+=e(a.title),f+='</h5> <span class="item-infos"> <span class="item-info">',f+=e(a.statusDispalyText),f+='</span> <span class="item-info">\uffe5',f+=e(a.amount),f+='</span> </span> <p class="item-address">',f+=e(a.consignee),f+="\uff0c",f+=e(a.cityName),f+=e(a.countryName),f+=e(a.detailAddress),f+='</p> <span class="item-ops"> ',1==a.status?(f+=' <span class="j-nav item-op" data-nav="/personal/order/',f+=e(a.orderid),f+='">\u53bb\u652f\u4ed8</span> <span class="j-cancel item-op" data-order-id="',f+=e(a.orderid),f+='">\u53d6\u6d88\u8ba2\u5355</span> '):3==a.status||4==a.status?(f+=' <span class="j-nav item-op" data-nav="/personal/order/',f+=e(a.orderid),f+='">\u53bb\u8bc4\u4ef7</span> <span class="j-nav item-op" data-nav="/personal/order/',f+=e(a.orderid),f+='">\u67e5\u770b\u8be6\u60c5</span> '):(f+=' <span class="j-nav item-op" data-nav="/personal/order/',f+=e(a.orderid),f+='">\u67e5\u770b\u8be6\u60c5</span> '),f+=" </span> </li> "}),f+=" "):f+=" \u8fd8\u6ca1\u6709\u8ba2\u5355 ",f+=" </ul>",new k(f)}),/*v:12*/
a("order",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.order,e=b.$each,f=(a.fruit,a.i,"");return f+='<div class="container-cnt order-info"> <div class="info-block"> <h5 class="block-title"><i class="icon icon-info"></i>\u8ba2\u5355\u4fe1\u606f</h5> <p class="block-item order-number">No.',f+=c(d.orderid),f+='</p> <p class="block-item order-price">\u91d1\u989d\uff1a',f+=c(d.amount),f+='\u5143</p> <p class="block-item order-status">\u72b6\u6001\uff1a',f+=c(d.statusDispalyText),f+='</p> </div> <div class="info-block"> <h5 class="block-title"><i class="icon icon-list"></i>\u8ba2\u5355\u5185\u5bb9</h5> ',e(d.oldfruits,function(a){f+=' <p class="block-item order-cnt-item">',f+=c(a.name),f+=" * ",f+=c(a.fruitCount),f+="</p> "}),f+=' </div> <div class="info-block"> <h5 class="block-title"><i class="icon icon-address"></i>\u6536\u8d27\u4fe1\u606f</h5> <p class="block-item order-name">',f+=c(d.consignee),f+='</p> <p class="block-item order-phone">',f+=c(d.telPhone),f+='</p> <p class="block-item order-address">',f+=c(d.cityName),f+=c(d.countryName),f+=c(d.detailAddress),f+="</p> </div> </div> ",f+=1==d.status?' <div class="bar"> <p class="cnt">\u786e\u8ba4\u652f\u4ed8\uff1f</p> <i class="j-pay op icon icon-tick"></i> </div> ':3==d.status||4==d.status?' <div class="bar"> <p class="cnt">\u8ba2\u5355\u5df2\u5b8c\u6210\uff0c\u53bb\u8bc4\u4ef7\uff1f</p> <i class="j-comment op icon icon-arrow"></i> </div> ':" ",new k(f)}),/*v:13*/
a("personal",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.user,e="";return e+='<div class="container-cnt"> <div class="info-block"> <div class="avatar-info"> <img class="avatar" src="./asset/img/avatar.png"></img> </div> <div class="name-info"> <span class="name">',e+=c(d.name),e+='</span> </div> </div> <div class="opt-block"> <ul class="opt-items"> <li class="j-nav opt-item" data-nav="/personal/order-list">\u5386\u53f2\u8ba2\u5355</li> <li class="j-nav opt-item" data-nav="/personal/manage-address">\u5730\u5740\u7ba1\u7406</li> </ul> <ul class="opt-items"> <li class="j-nav opt-item" data-nav="/personal/fav">\u6211\u7684\u6536\u85cf</li> <li class="j-nav opt-item" data-nav="/personal/coupon">\u6211\u7684\u4f18\u60e0</li> </ul> </div> </div>',new k(e)}),/*v:6*/
a("popup-alert",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.cnt,e="";return e+='<div class="popup-wrapper popup-alert"> <div class="cnt">',e+=c(d),e+='</div> <div class="j-popup-close confirm">\u786e\u5b9a</div> </div>',new k(e)}),/*v:10*/
a("popup-fruit",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.image,e=a.isCollection,f=a.name,g=a.price,h=a.discrbe,i=a.weight,j="";return j+='<div class="popup-wrapper popup-fruit"> <div class="j-popup-close close">X</div> <div class="fruit-detail-wrapper"> <div class="fruit-img"> <img src="',j+=c(d),j+='" width="100%" height="100%"> </div> <div class="fruit-info-block"> <span class="j-fav fav">',j+=e?"\u53d6\u6d88\u6536\u85cf":"+\u6536\u85cf",j+='</span> <h5 class="fruit-name">',j+=c(f),j+='</h5> <p class="fruit-info-item"> <span class="fruit-info-key">\u4ef7\u683c</span> <span class="fruit-info-val"><span class="j-price">',j+=c(g),j+='</span>\u5143</span> </p> <p class="fruit-info-item"> <span class="fruit-info-key">\u5185\u5bb9</span> <span class="j-desc fruit-info-val">',j+=c(h),j+='</span> </p> <p class="fruit-info-item"> <span class="fruit-info-key">\u91cd\u91cf</span> <span class="fruit-info-val"><span class="j-weight">',j+=c(i),j+='</span>g</span> </p> <p class="fruit-info-item"> <span class="fruit-info-key">\u8bc4\u4ef7</span> <span class="fruit-info-val"></span> </p> </div> </div> <div class="j-bar bar"> <p class="cnt">\u5df2\u9009\u8d2d <span class="j-num num"></span> \u4ef6</p> <i class="j-plus op icon icon-plus"></i> </div> </div>',new k(j)}),/*v:2*/
a("popup",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.cls,e=b.$string,f=a.cnt,g="";return g+='<div class="popup-wrapper ',g+=c(d),g+='"> ',g+=e(f),g+=" </div>",new k(g)}),/*v:35*/
a("shop",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.categories,e=(a.category,a.i,b.$escape),f="";return f+='<div class="side-cnt"> <div class="up-line logo"></div> <ul class="side-items"> ',c(d,function(a){f+=' <li class="j-category-item side-item',a.isHaveNew&&(f+=" has-new"),f+='" data-id="',f+=e(a.id),f+='"> <span class="item-cnt">',f+=e(a.name),f+="</span> </li> "}),f+=' </ul> </div> <div class="main-cnt">  <div class="j-fruit-list-wrapper"> </div> </div> <div class="j-bar bar"> <p class="cnt">\u5df2\u9009\u8d2d <span class="j-num num">3</span> \u4ef6\uff0c\u5171 <span class="j-sum sum">15</span> \u5143</p> <i class="j-next op icon icon-tick"></i> </div>',new k(f)})}();