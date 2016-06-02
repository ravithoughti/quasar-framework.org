module.exports=function(i){function d(v){if(n[v])return n[v].exports;var s=n[v]={exports:{},id:v,loaded:!1};return i[v].call(s.exports,s,s.exports,d),s.loaded=!0,s.exports}var n={};return d.m=i,d.c=n,d.p="",d(0)}({0:function(i,d,n){i.exports=n(27)},27:function(i,d,n){"use strict";var v=n(28);i.exports={template:v,data:{border:!1}}},28:function(i,d){i.exports='<div class="screen-bar shadow-1 fixed-top">Quasar CSS Grid</div>\n\n<label>\n  <toggle :model.sync="border"></toggle>\n  Grid Borders\n</label>\n<div id="layout-container" :class="{\'with-border\': border}">\n\n<div class="row gutter">\n  <div class="sm">SM</div>\n  <div class="md">MD</div>\n  <div class="bg">BG</div>\n  <div class="lg">LG</div>\n  <div class="lt-md">lt-MD</div>\n  <div class="lt-bg">lt-BG</div>\n  <div class="lt-lg">lt-LG</div>\n  <div class="gt-sm">gt-SM</div>\n  <div class="gt-md">gt-MD</div>\n  <div class="gt-bg">gt-BG</div>\n</div>\n\n<div class="row gutter wrap justify-stretch content-center text-center">\n  <div class="sm-width-2of3 bg-width-1of7 auto"><div>2/3</div></div>\n  <div class="auto"><div>auto</div></div>\n  <div class="auto"><div>auto</div></div>\n</div>\n\n<div class="row gutter wrap justify-stretch content-center text-center">\n  <div class="width-2of3"><div>2/3</div></div>\n  <div class="width-1of5"><div>1/5</div></div>\n  <div class="auto"><div>auto</div></div>\n  <div class="auto"><div>auto</div></div>\n</div>\n\n<div class="row gutter wrap">\n  <div class="offset-1of3"><div>offset 1/3</div></div>\n  <div class="auto"><div>auto</div></div>\n</div>\n\n<h5>Grid in Grid in Grid</h5>\n<div class="row gutter">\n  <div>\n    <div>\n      <div class="row gutter">\n        <div class="width-1of3">\n          <div>1/3</div>\n        </div>\n        <div>\n          <div>\n            <div class="row gutter">\n              <div>\n                <div>1/2</div>\n              </div>\n              <div>\n                <div>1/2</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="width-1of3">\n    <div>1/3</div>\n  </div>\n</div>\n\n<h5>Top-aligned Row Cells</h5>\n<div class="row gutter items-start">\n  <div>\n    <div>This cell should be top-aligned.</div>\n  </div>\n  <div class="width-1of2">\n    <div>Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar porta leo, eu ultricies nunc sollicitudin vitae. Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh.</div>\n  </div>\n  <div>\n    <div>This cell should be top-aligned.</div>\n  </div>\n</div>\n<h5>Bottom-aligned Row Cells</h5>\n<div class="row gutter items-end">\n  <div class="auto">\n    <div>This cell should be bottom-aligned.</div>\n  </div>\n  <div>\n    <div>Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in.</div>\n  </div>\n  <div>\n    <div>This cell should be bottom-aligned.</div>\n  </div>\n</div>\n<h5>Vertically Centered Row Cells</h5>\n<div class="row gutter items-center">\n  <div>\n    <div>This cell should be vertically-centered with the cell to its right.</div>\n  </div>\n  <div>\n    <div>Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus. Nullam vel facilisis libero. Duis semper lobortis elit, vitae dictum erat.</div>\n  </div>\n</div>\n<h5>Mixed Vertical Alignment</h5>\n<div class="row gutter">\n  <div class="self-start">\n    <div>This cell should be top aligned.</div>\n  </div>\n  <div>\n    <div>Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus.</div>\n  </div>\n  <div class="self-center">\n    <div>This cell should be center-aligned.</div>\n  </div>\n  <div class="self-end">\n    <div>This cell should be bottom-aligned.</div>\n  </div>\n</div>\n\n<h5>Small Gutter</h5>\n<div class="row small-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n<div class="row small-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n\n<h5>Medium Gutter</h5>\n<div class="row gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n<div class="row gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n\n<h5>Big Gutter</h5>\n<div class="row big-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n<div class="row big-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n\n<h5>Large Gutter</h5>\n<div class="row large-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n<div class="row large-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n\n\n<h5>Responsive Gutter</h5>\n<div class="row sm-small-gutter md-gutter gt-md-large-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n<div class="row sm-small-gutter md-gutter gt-md-large-gutter">\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n  <div class="auto">\n    <div>1/2</div>\n  </div>\n</div>\n\n<h5>Responsive</h5>\n<div class="row gutter sm-column">\n  <div class="width-2of3"><div>2/3</div></div>\n  <div class="width-1of5"><div>1/5</div></div>\n  <div class="auto"><div>auto</div></div>\n  <div class="auto"><div>auto</div></div>\n</div>\n\n</div>\n'}});