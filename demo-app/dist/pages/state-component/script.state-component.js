module.exports=function(t){function e(s){if(n[s])return n[s].exports;var a=n[s]={exports:{},id:s,loaded:!1};return t[s].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){t.exports=n(79)},79:function(t,e,n){"use strict";var s=n(80);t.exports={template:s,data:{state:!1},methods:{changeState:function(){this.state=!0,setTimeout(function(){this.state=!1}.bind(this),2e3)}}}},80:function(t,e){t.exports='<div class="screen-bar shadow-1 fixed-top">Quasar State Component</div>\n\n<div class="row justify-center" style="margin-top: 20px;">\n  <state :model.sync="state">\n    <div slot="active">\n      <spinner name="bars" :size="51" color="#90caf9"></spinner>\n      &nbsp;&nbsp;&nbsp;Active State\n    </div>\n\n    <button class="primary" @click="changeState()">\n      Default State - Hit me!\n    </button>\n  </state>\n</div>\n'}});