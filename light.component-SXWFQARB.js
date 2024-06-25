import{c as A}from"./chunk-EET26C6H.js";import"./chunk-FXTHA667.js";import{g as I,h as L,i as y,j as k,k as N,l as R}from"./chunk-LC3WTXNP.js";import{a as D,b as F,c as V,g as j}from"./chunk-JQX7WBIC.js";import"./chunk-4XVAJ4KQ.js";import{$a as p,Ab as r,Ac as w,Bb as c,Cb as x,Cc as O,Db as f,Kb as h,Rb as u,Sb as e,Tb as _,Ub as T,Va as S,_a as l,_b as P,cc as C,d as M,ka as E,kc as v,ob as d,qb as m,zb as i}from"./chunk-V5BQXA3S.js";function z(t,a){if(t&1&&(x(0),e(1),f()),t&2){let s=h(2);l(),T(" ",s.luxValue," ")}}function q(t,a){t&1&&e(0,"N/A")}function B(t,a){if(t&1&&(x(0),i(1,"h2",4),e(2),r(),i(3,"mat-card",14)(4,"mat-card-title")(5,"h2"),e(6,"Light level"),r()(),i(7,"mat-card-content")(8,"h1"),d(9,z,2,1,"ng-container",10)(10,q,1,0,"ng-template",null,1,C),r()()(),f()),t&2){let s=u(11),n=h();l(2),_(n.errorText),l(7),m("ngIf",n.luxValue)("ngIfElse",s)}}function H(t,a){if(t&1&&(i(0,"h2"),e(1),r()),t&2){let s=h();l(),_(s.supportedText)}}function U(t,a){t&1&&(i(0,"div",15),c(1,"img",16),r(),c(2,"br")(3,"br"),i(4,"a",17),e(5,"Source: can I use"),r(),c(6,"br")(7,"br"),i(8,"a",18),e(9,"Night icons created by Freepik - Flaticon"),r())}var Z=(()=>{let a=class a{constructor(n,o){this.cdRef=n,this.titleService=o,this.ambient="bright",this.titleService.setTitle("Ambient light")}ngOnInit(){"AmbientLightSensor"in window?this.readAmbientLight():this.supportedText="Your browser does not support Ambient Device Light Sensor \u{1F622}"}readAmbientLight(){try{let n=new window.AmbientLightSensor;n.onerror=o=>M(this,null,function*(){if(o.error.name==="NotAllowedError"){if((yield navigator.permissions.query({name:"ambient-light-sensor"})).state==="denied"){this.errorText="Permission to access sensor was denied.",this.luxValue=void 0;return}this.readAmbientLight()}else o.error.name==="NotReadableError"&&(this.errorText="Cannot connect to the sensor.");this.luxValue=void 0}),n.onreading=()=>{this.updateTheme(n.illuminance)},n.start()}catch(n){this.errorText="An error occurred.",console.error(n)}}updateTheme(n){n<=50?this.ambient="dark":this.ambient="bright",this.luxValue=n,this.cdRef.detectChanges()}};a.\u0275fac=function(o){return new(o||a)(p(v),p(A))},a.\u0275cmp=E({type:a,selectors:[["app-light"]],standalone:!0,features:[P],decls:34,vars:4,consts:[["noSupported",""],["notAvailable",""],[1,"content","container",3,"ngClass"],[1,"warn-text"],[1,"label"],[1,"image"],["width","64","alt","sun or moon icon",3,"src"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/warning.png","width","24","height","24","alt","warning icon",1,"icon-space"],[4,"ngIf","ngIfElse"],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"lux-card"],[1,"img-container"],["src","assets/images/ambientlight.png","alt","Ambient Light Sensor api support"],["href","https://caniuse.com/?search=ambient%20light","target","_blank"],["href","https://www.flaticon.com/free-icons/night","title","night icons"]],template:function(o,g){if(o&1&&(i(0,"section",2)(1,"div",3)(2,"h1",4),e(3,"Ambient Light Sensor"),r(),i(4,"div",5),c(5,"img",6),r()(),i(6,"mat-card",7)(7,"p"),e(8,"The "),i(9,"strong"),e(10,"AmbientLightSensor"),r(),e(11," interface of the Sensor API returns the current level of the ambient light around the hosting device. "),c(12,"br")(13,"br"),i(14,"span",8),c(15,"img",9),i(16,"span"),e(17,"Still in developer trial"),r()(),e(18," Enable the "),i(19,"cite")(20,"strong"),e(21,"generic sensor extra classes"),r()(),e(22," flag in Chrome to test it (chrome://flags/#enable-generic-sensor-extra-classes). "),r()(),d(23,B,12,3,"ng-container",10)(24,H,2,1,"ng-template",null,0,C),i(26,"div",11)(27,"mat-accordion",12)(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title")(31,"h1"),e(32,"Browser compatibility"),r()()(),d(33,U,10,0,"ng-template",13),r()()()()),o&2){let b=u(25);m("ngClass",g.ambient==="bright"?"lightTheme":"darkTheme"),l(5),m("src","assets/images/"+(g.ambient==="bright"?"sun":"night")+".png",S),l(18),m("ngIf",!g.supportedText)("ngIfElse",b)}},dependencies:[w,j,D,V,F,O,R,N,L,y,k,I],styles:[".warn-text[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:2rem}.warn-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 2rem 0 0}.generic-value-light[_ngcontent-%COMP%], .container.darkTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%], .container.lightTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%]{text-align:center;max-width:900px}.generic-value-light[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container.darkTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container.lightTheme[_ngcontent-%COMP%]   .lux-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:1.5rem;font-size:5em;color:#d0d0d0}.container[_ngcontent-%COMP%]{padding:1rem}.container.lightTheme[_ngcontent-%COMP%]{background-color:#fff;color:#000000de}.container.darkTheme[_ngcontent-%COMP%]{background-color:#000000ab}.container.darkTheme[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#fff}"]});let t=a;return t})();export{Z as LightComponent};