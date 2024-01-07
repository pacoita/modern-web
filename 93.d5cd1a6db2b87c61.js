"use strict";(self.webpackChunkmodern_web=self.webpackChunkmodern_web||[]).push([[93],{5093:(v,c,i)=>{i.r(c),i.d(c,{OrientationModule:()=>u});var d=i(6814),g=i(8903),e=i(9212),r=i(5195),o=i(3305);function l(t,Z){1&t&&(e.TgZ(0,"div",16),e._UZ(1,"img",17),e.qZA(),e._UZ(2,"br")(3,"br"),e.TgZ(4,"a",18),e._uU(5,"Source: can I use"),e.qZA())}let p=(()=>{class t{constructor(){this.isActive=!1,this.showDetails=!1,this.sup=!1}onOrientationChange(n){this.doLogic(n.beta||0)}doLogic(n){n&&(n<-40&&(n=0),n>160?this.isActive=!0:n<70&&this.isActive&&(this.isActive=!1,this.showDetails=!this.showDetails))}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-orientation"]],hostBindings:function(a,s){1&a&&e.NdJ("deviceorientation",function(f){return s.onOrientationChange(f)},!1,e.Jf7)},decls:66,vars:3,consts:[[1,"content","container"],[1,"warn-text"],[1,"descr-card"],[1,"image-wrap"],["src","assets/images/orientations.png","alt","Orientations schema",1,"image"],[1,"flex-centered"],["src","assets/icons/warning.png","width","24","height","24","alt","warning icon",1,"icon-space"],[1,"demo-card-title"],[1,"card-wrap"],["src","assets/images/card.png","width","400","alt","Credit Card",1,"card-image"],[1,"digits"],[1,"date"],[1,"name"],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"img-container"],["src","assets/images/orientation.png","alt","Orientation Device api support"],["href","https://caniuse.com/?search=deviceorientation","target","_blank"]],template:function(a,s){1&a&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h1"),e._uU(3,"DeviceOrientationEvent API"),e.qZA()(),e.TgZ(4,"mat-card",2)(5,"p"),e._uU(6,"The "),e.TgZ(7,"strong"),e._uU(8,"DeviceOrientationEvent"),e.qZA(),e._uU(9," API provides events with information about the physical orientation of the target device where the web app is running. "),e._UZ(10,"br")(11,"br"),e._uU(12," The event object contains three properties, each related to a different axis (description's source Mozilla MDN): "),e.qZA(),e.TgZ(13,"ul")(14,"li"),e._uU(15,"The "),e.TgZ(16,"strong"),e._uU(17,"alpha"),e.qZA(),e._uU(18," value represents the motion of the device around the z axis, represented in degrees with values ranging from 0 (inclusive) to 360 (exclusive)."),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"li"),e._uU(21,"The "),e.TgZ(22,"strong"),e._uU(23,"beta"),e.qZA(),e._uU(24," value represents the motion of the device around the x axis, represented in degrees with values ranging from -180 (inclusive) to 180 (exclusive). This represents a front to back motion of the device."),e.qZA(),e._UZ(25,"br"),e.TgZ(26,"li"),e._uU(27,"The "),e.TgZ(28,"strong"),e._uU(29,"gamma"),e.qZA(),e._uU(30," value represents the motion of the device around the y axis, represented in degrees with values ranging from -90 (inclusive) to 90 (exclusive). This represents a left to right motion of the device."),e.qZA()(),e.TgZ(31,"div",3),e._UZ(32,"img",4),e.qZA(),e._UZ(33,"br")(34,"br"),e.TgZ(35,"p")(36,"span",5),e._UZ(37,"img",6),e.TgZ(38,"span"),e._uU(39,"This feature works only in secure contexts (HTTPS). "),e.TgZ(40,"strong"),e._uU(41,"Use a mobile device for best results"),e.qZA(),e._uU(42,"."),e.qZA()()()(),e.TgZ(43,"mat-card")(44,"mat-card-title")(45,"h2",7),e._uU(46,"Toggle Card Details"),e.qZA()(),e.TgZ(47,"mat-card-content")(48,"p"),e._uU(49," Tilt the device towards you and back to toggle the card details if your browser and device support it. "),e.qZA(),e.TgZ(50,"div",8),e._UZ(51,"img",9),e.TgZ(52,"div",10),e._uU(53),e.qZA(),e.TgZ(54,"div",11),e._uU(55),e.qZA(),e.TgZ(56,"div",12),e._uU(57),e.qZA()()()(),e.TgZ(58,"div",13)(59,"mat-accordion",14)(60,"mat-expansion-panel")(61,"mat-expansion-panel-header")(62,"mat-panel-title")(63,"h1"),e._uU(64,"Browser compatibility"),e.qZA()()(),e.YNc(65,l,6,0,"ng-template",15),e.qZA()()()()),2&a&&(e.xp6(53),e.Oqu(s.showDetails?"1234 5647 7829 0089":"**** **** **** ****"),e.xp6(2),e.Oqu(s.showDetails?"06/29":"**/**"),e.xp6(2),e.Oqu(s.showDetails?"Francesco Leardini":"****** ******"))},dependencies:[r.a8,r.dn,r.n5,o.pp,o.ib,o.yz,o.yK,o.HS],styles:[".demo-card-title[_ngcontent-%COMP%]{padding:16px 16px 0}.card-wrap[_ngcontent-%COMP%]{position:relative;font-family:arial;color:#fff}.card-wrap[_ngcontent-%COMP%]   .digits[_ngcontent-%COMP%]{position:absolute;top:53%;left:10%;font-size:1.5rem}.card-wrap[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{position:absolute;top:70%;left:45%;font-size:.9rem}.card-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{position:absolute;top:82%;left:10%;font-size:1.1rem}@media screen and (min-width: 780px){.card-wrap[_ngcontent-%COMP%]   .digits[_ngcontent-%COMP%]{top:55%;left:5%;font-size:2.5rem}.card-wrap[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{top:70%;left:21%;font-size:1.2rem}.card-wrap[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{top:85%;left:5%;font-size:1.7rem}}.image-wrap[_ngcontent-%COMP%]{margin:0 auto}.image[_ngcontent-%COMP%], .card-image[_ngcontent-%COMP%]{width:100%}.card-image[_ngcontent-%COMP%]{max-width:400px}"]})}return t})();var m=i(2164);const h=[{path:"",component:p}];let u=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[d.ez,g.i,m.Bz.forChild(h)]})}return t})()}}]);