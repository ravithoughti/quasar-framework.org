module.exports=function(i){function t(n){if(e[n])return e[n].exports;var s=e[n]={exports:{},id:n,loaded:!1};return i[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var e={};return t.m=i,t.c=e,t.p="",t(0)}({0:function(i,t,e){i.exports=e(49)},49:function(i,t,e){"use strict";var n=e(50);i.exports={template:n}},50:function(i,t){i.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Lists with Sliding Actions</div>\n\n<h5>On desktop: drag label to the left with your mouse.</h5>\n<h5>On touch capable screens, pan the label to the left.</h5>\n<br>\n<div class="list bordered">\n  <div class="item">\n    <i>explore</i>\n    <div class="item-swipe">\n      <button class="primary">More</button>\n      <button class="secondary">Text</button>\n      <button class="tertiary">Call</button>\n    </div>\n    <div class="item-content" v-swipe-item>\n      <div class="item-label">Item Label</div>\n      <div class="item-value">Value</div>\n    </div>\n  </div>\n  <div class="list-divider"></div>\n  <div class="item">\n    <i>perm_identity</i>\n    <div class="item-swipe">\n      <button class="primary">More</button>\n      <button class="secondary">Text</button>\n    </div>\n    <div class="item-content" v-swipe-item>\n      <div class="item-label">Item Label</div>\n      <div class="item-value">Value</div>\n    </div>\n  </div>\n  <div class="list-divider"></div>\n  <div class="item">\n    <i>query_builder</i>\n    <div class="item-swipe">\n      <button class="tertiary">Call</button>\n    </div>\n    <div class="item-content" v-swipe-item>\n      <div class="item-label">Item Label</div>\n      <div class="item-value">Value</div>\n    </div>\n  </div>\n</div>\n'}});