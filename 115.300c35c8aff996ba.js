"use strict";(self.webpackChunkmodern_web=self.webpackChunkmodern_web||[]).push([[115],{115:(O,h,o)=>{o.r(h),o.d(h,{LightModule:()=>Z});var u=o(8903),c=o(6814),m=o(2164),d=o(5861),t=o(9212),p=o(6593),g=o(5195),a=o(3305);function f(n,s){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.luxValue," ")}}function x(n,s){1&n&&t._uU(0,"N/A")}function T(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"h2",2),t._uU(2),t.qZA(),t.TgZ(3,"mat-card",11)(4,"mat-card-title")(5,"h2"),t._uU(6,"Light level"),t.qZA()(),t.TgZ(7,"mat-card-content")(8,"h1"),t.YNc(9,f,2,1,"ng-container",6)(10,x,1,0,"ng-template",null,12,t.W1O),t.qZA()()(),t.BQk()),2&n){const e=t.MAs(11),i=t.oxw();t.xp6(2),t.Oqu(i.errorText),t.xp6(7),t.Q6J("ngIf",i.luxValue)("ngIfElse",e)}}function _(n,s){if(1&n&&(t.TgZ(0,"h2"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.supportedText)}}function C(n,s){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t.qZA(),t._UZ(2,"br")(3,"br"),t.TgZ(4,"a",15),t._uU(5,"Source: can I use"),t.qZA())}const b=[{path:"",component:(()=>{class n{constructor(e,i){this.cdRef=e,this.titleService=i,this.ambient="bright",this.titleService.setTitle("Ambient light")}ngOnInit(){"AmbientLightSensor"in window?this.readAmbientLight():this.supportedText="Your browser does not support Ambient Device Light Sensor \u{1f622}"}readAmbientLight(){var e=this;try{this.sensor=this.sensor??new window.AmbientLightSensor,this.sensor.onerror=function(){var i=(0,d.Z)(function*(r){if("NotAllowedError"===r.error.name){const l="ambient-light-sensor";if("denied"===(yield navigator.permissions.query({name:l})).state)return e.errorText="Permission to access sensor was denied.",void(e.luxValue=void 0);e.readAmbientLight()}else"NotReadableError"===r.error.name&&(e.errorText="Cannot connect to the sensor.");e.luxValue=void 0});return function(r){return i.apply(this,arguments)}}(),this.sensor.onreading=()=>{this.updateTheme(this.sensor.illuminance)},this.sensor.start()}catch(i){this.errorText="An error occurred.",console.error(i)}}updateTheme(e){this.ambient=e<=50?"dark":"bright",this.luxValue=e,this.cdRef.detectChanges()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(t.sBO),t.Y36(p.Dx))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-light"]],decls:32,vars:3,consts:[[1,"content","container",3,"ngClass"],[1,"warn-text"],[1,"label"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/warning.png","width","24","height","24","alt","warning icon",1,"icon-space"],[4,"ngIf","ngIfElse"],["noSupported",""],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"lux-card"],["notAvailable",""],[1,"img-container"],["src","assets/images/ambientlight.png","alt","Ambient Light Sensor api support"],["href","https://caniuse.com/?search=ambient%20light","target","_blank"]],template:function(i,r){if(1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),t._uU(3,"Ambient Light Sensor"),t.qZA()(),t.TgZ(4,"mat-card",3)(5,"p"),t._uU(6,"The "),t.TgZ(7,"strong"),t._uU(8,"AmbientLightSensor"),t.qZA(),t._uU(9," interface of the Sensor API returns the current level of the ambient light around the hosting device. "),t._UZ(10,"br")(11,"br"),t.TgZ(12,"span",4),t._UZ(13,"img",5),t.TgZ(14,"span"),t._uU(15,"Still in developer trial"),t.qZA()(),t._uU(16," Enable the "),t.TgZ(17,"cite")(18,"strong"),t._uU(19,"generic sensor extra classes"),t.qZA()(),t._uU(20," flag in Chrome to test it (chrome://flags/#enable-generic-sensor-extra-classes). "),t.qZA()(),t.YNc(21,T,12,3,"ng-container",6)(22,_,2,1,"ng-template",null,7,t.W1O),t.TgZ(24,"div",8)(25,"mat-accordion",9)(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title")(29,"h1"),t._uU(30,"Browser compatibility"),t.qZA()()(),t.YNc(31,C,6,0,"ng-template",10),t.qZA()()()()),2&i){const l=t.MAs(23);t.Q6J("ngClass","bright"===r.ambient?"lightTheme":"darkTheme"),t.xp6(21),t.Q6J("ngIf",!r.supportedText)("ngIfElse",l)}},dependencies:[c.mk,c.O5,g.a8,g.dn,g.n5,a.pp,a.ib,a.yz,a.yK,a.HS],styles:[".warn-text[_ngcontent-%COMP%]{margin-bottom:2rem}.warn-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 2rem 0 0}.generic-value-light[_ngcontent-%COMP%], .container.darkTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%], .container.lightTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%]{text-align:center;max-width:900px}.generic-value-light[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container.darkTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container.lightTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:1.5rem;font-size:5em;color:#d0d0d0}.container[_ngcontent-%COMP%]{padding:1rem}.container.lightTheme[_ngcontent-%COMP%]{background-color:#fff;color:#000000de}.container.darkTheme[_ngcontent-%COMP%]{background-color:#000000ab}.container.darkTheme[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#fff}"]})}return n})()}];let A=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(b),m.Bz]})}return n})(),Z=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.ez,A,u.i]})}return n})()}}]);