module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";var o=n(26);e.exports=function(e){console.log("LAYOUT:",quasar.current.layout.vm),quasar.make.a.get.request({url:"pages/grid-component/assets/grid-data.json",local:!0}).done(function(t){e({template:o,data:{data:t,grid:quasar.current.layout.vm.$data.grid,columns:[{label:"Date",field:"isodate",style:"width: 100px",formatter:function(e){return new Date(e).toLocaleString()}},{label:"Source",field:"source",style:"width: 100px"},{label:"Service",field:"serviceable",formatter:function(e){return"Informational"===e?"<i>info</i>":e},style:"color: green; width: 100px",classes:"text-center"},{label:"Log Number",field:"log_number",style:"width: 100px"},{label:"Message",field:"message",style:"width: 700px"}],selectionActions:[{label:"View 1",handler:function(e){console.dir(e)}},{label:"View 2",handler:function(e){console.dir(e)}}]}})})}},26:function(e,t){e.exports='<h5>\n  Use drawer to configure Grid below.\n  Best displayed with desktop view.\n</h5>\n\n<grid\n  :columns="columns"\n  :data="data"\n  :rows-per-page="5"\n  :selection-mode="grid.selection"\n  :selection-actions="selectionActions"\n  :sortable="grid.sortable"\n  id-property="unique_id"\n></grid>\n'}});