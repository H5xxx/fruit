/*TMODJS:{"version":6,"md5":"d34de732b32149d238d642efcc756b66"}*/
template('manage-address','<ul class="container-cnt items"> <li class="address-item"> <div class="item-cnt" to="address-choice1"> <h5 class="item-title">[默认] 张先生，17283192011</h5> <p class="item-desc"> 上海市杨浦区邯郸路113号 <span class="set-default">设为默认</span> </p> </div> </li> <li class="address-item"> <div class="item-cnt" to="address-choice2"> <h5 class="item-title">王先生，11111111111</h5> <p class="item-desc"> 北京市东城区某某路120号1号楼102 <span class="set-default">设为默认</span> </p> </div> </li> <li class="address-item new-item"> <div class="item-cnt" to="address-choice2"> <h5 class="item-title">使用新的地址</h5> </div> <div class="input-block"> <div class="input-line"> <select class="short"> <option>北京市</option> </select> <select class="short"> <option>东城区</option> </select> <input class="long" type="text" name="address" value="xx路30号"> </div> <div class="input-line"> <input class="long" type="text" name="name" value="汪先生"> </div> <div class="input-line"> <input class="long" type="text" name="phone" value="18212334123"> </div> </div> </li> </ul> <div class="bar"> <p class="cnt">添加该地址？</p> <i class="j-nav op" data-nav="/personal"></i> </div>');