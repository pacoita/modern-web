import{a as G,b as R}from"./chunk-G2W4YGPI.js";import{c as W,e as I,j as B}from"./chunk-WAW7QBBW.js";import{d as A,e as V,f as D,g as F,h as q,i as H}from"./chunk-LAEGQYIL.js";import{a as z,b as N,c as $,e as j,g as J}from"./chunk-764RPA4D.js";import"./chunk-OFTKMGOF.js";import{$a as i,Eb as L,Fa as m,Ga as E,Oa as g,Ua as x,Vb as P,Xb as O,Za as n,_a as t,ab as v,bb as M,c as p,da as b,db as _,ha as u,hb as k,ia as h,jb as d,mb as w,nb as e,ob as f,qc as T,ub as y,xa as S}from"./chunk-TX2EYQ2R.js";function Q(o,c){if(o&1){let r=_();n(0,"mat-checkbox",16),k("ngModelChange",function(l){u(r);let s=d(2);return h(s.reGetLock=l)}),e(1," Re-acquire wake lock "),t()}if(o&2){let r=d(2);g("ngModel",r.reGetLock)}}function U(o,c){if(o&1){let r=_();v(0),n(1,"mat-checkbox",12),k("ngModelChange",function(l){u(r);let s=d();return h(s.lockEnabled=l)})("ngModelChange",function(l){u(r);let s=d();return h(s.lockEnabledChange(l))}),e(2," Enable wake lock "),t(),x(3,Q,2,1,"mat-checkbox",13),n(4,"span",14),e(5),t(),n(6,"span",15),e(7),t(),M()}if(o&2){let r=d();m(1),g("ngModel",r.lockEnabled),m(2),g("ngIf",r.lockEnabled),m(1),g("ngClass",r.isSentinelActive?"active":"inactive"),m(1),f(r.isSentinelActive?"Wake sentinel active":"Wake sentinel inactive"),m(2),f(r.errorText)}}function X(o,c){if(o&1&&(n(0,"h2"),e(1),t(),n(2,"cite"),e(3,"Be quick in memorizing the recipe \u{1F600}"),t()),o&2){let r=d();m(1),f(r.unsupportedText)}}function Y(o,c){o&1&&(n(0,"div",17),i(1,"img",18),t(),i(2,"br")(3,"br"),n(4,"a",19),e(5,"Source: can I use"),t())}var me=(()=>{let c=class c{onVisibilyChange(a){return p(this,null,function*(){this.wakeLockSentinel!==null&&document.visibilityState==="visible"&&this.reGetLock&&(yield this.requestWakeLock(),console.log("Wake Lock has been re-acquired"))})}constructor(a){this.titleService=a,this.isSentinelActive=!1,this.lockEnabled=!1,this.reGetLock=!1,this.titleService.setTitle("Wake Lock")}ngOnInit(){"wakeLock"in navigator||(this.unsupportedText="Snap! Screen Wake lock is not supported by your browser.")}lockEnabledChange(a){return p(this,null,function*(){a?yield this.requestWakeLock():(this.reGetLock=!1,yield this.releaseLock())})}requestWakeLock(){return p(this,null,function*(){try{this.wakeLockSentinel=yield navigator.wakeLock.request("screen"),this.wakeLockSentinel.addEventListener("release",()=>{this.isSentinelActive=!1,console.log("Wake Lock has been released...")}),this.isSentinelActive=!0}catch(a){this.isSentinelActive=!1,this.errorText="An error occurred.",console.error(a)}})}releaseLock(){return p(this,null,function*(){yield this.wakeLockSentinel?.release().catch(a=>this.errorText=`${a.name}, ${a.message}`),this.wakeLockSentinel=null,this.isSentinelActive=!1})}ngOnDestroy(){return p(this,null,function*(){yield this.releaseLock()})}};c.\u0275fac=function(l){return new(l||c)(E(T))},c.\u0275cmp=b({type:c,selectors:[["app-wake-lock"]],hostBindings:function(l,s){l&1&&k("visibilitychange",function(K){return s.onVisibilyChange(K)},!1,S)},standalone:!0,features:[y],decls:101,vars:2,consts:[[1,"content"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],[1,"instructions"],[4,"ngIf","ngIfElse"],["noSupported",""],[1,"demo-card"],["src","assets/images/eclair.png","alt","Eclairs photo"],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"enable-box",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange",4,"ngIf"],[1,"api-status",3,"ngClass"],[1,"error-text"],[3,"ngModel","ngModelChange"],[1,"img-container"],["src","assets/images/wakelock.png","alt","wakelock support"],["href","https://caniuse.com/?search=wake-lock","target","_blank"]],template:function(l,s){if(l&1&&(n(0,"section",0)(1,"h1"),e(2,"Screen Wake Lock API"),t(),n(3,"mat-card",1)(4,"p"),e(5,"The "),n(6,"strong"),e(7,"Screen Wake Lock API"),t(),e(8," provides a way to prevent devices from dimming or locking the screen when an application needs to keep running."),t(),i(9,"br"),n(10,"span",2),i(11,"img",3),n(12,"span"),e(13,"This feature is available only over secure connections (HTTPS)."),t()()(),n(14,"div",4),x(15,U,8,5,"ng-container",5)(16,X,4,1,"ng-template",null,6,L),t(),n(18,"mat-card",7)(19,"mat-card-header")(20,"mat-card-title"),e(21,"Eclairs"),t(),n(22,"div"),i(23,"img",8),t()(),n(24,"mat-card-content")(25,"strong"),e(26,"Ingredients: "),t(),n(27,"ul")(28,"li"),e(29,"\xBD cup butter"),t(),n(30,"li"),e(31,"1 cup water"),t(),n(32,"li"),e(33,"1 cup all-purpose flour"),t(),n(34,"li"),e(35,"\xBC teaspoon salt"),t(),n(36,"li"),e(37,"4 large eggs eggs"),t(),n(38,"li"),e(39,"1 (5oz) package instant vanilla pudding mix"),t(),n(40,"li"),e(41,"2\u2009\xBD cups cold milk"),t(),n(42,"li"),e(43,"1 cup heavy cream"),t(),n(44,"li"),e(45,"\xBC cup sugar"),t(),n(46,"li"),e(47,"1 teaspoon vanilla extract"),t(),n(48,"li"),e(49,"2 (1oz) squares chocolate"),t(),n(50,"li"),e(51,"2 tablespoons butter"),t(),n(52,"li"),e(53,"1 teaspoon vanilla extract"),t()(),i(54,"hr"),n(55,"strong"),e(56,"Preparation: "),t(),i(57,"br")(58,"br"),n(59,"p")(60,"strong"),e(61,"1"),t(),e(62," - Preheat oven to 450 \xB0F (230 \xB0C). Grease a cookie sheet. In a medium saucepan, combine 1/2 cup butter and 1 cup water. Bring to a boil, stirring until butter melts completely. "),i(63,"br"),e(64," Reduce heat to low, and add flour and salt. Stir vigorously until mixture leaves the sides of the pan and begins to form a stiff ball. "),i(65,"br")(66,"br"),e(67," Remove from heat. Add eggs, one at a time, beating well to incorporate completely after each addition. "),i(68,"br"),e(69," With a spoon or a pastry bag fitted with a No. 10, or larger, tip, spoon or pipe dough onto cookie sheet in 1 1/2 x 4 inch strips. "),t(),n(70,"p")(71,"strong"),e(72,"2"),t(),e(73," - Bake 15 minutes in the preheated oven, then reduce heat to 325 \xB0F (165 \xB0C) and bake 20 minutes more, until hollow sounding when lightly tapped on the bottom. "),i(74,"br"),e(75," Cool completely on a wire rack. "),t(),n(76,"p")(77,"strong"),e(78,"3"),t(),e(79," - For the filling, combine pudding mix and milk in medium bowl according to package directions. "),i(80,"br"),e(81," In a separate bowl, beat the cream with an electric mixer until soft peaks form. Beat in 1/4 cup confectioners' sugar and 1 teaspoon vanilla. Fold whipped cream into pudding. Cut tops off of cooled pastry shells with a sharp knife. "),i(82,"br"),e(83," Fill shells with pudding mixture and replace tops. "),t(),n(84,"p")(85,"strong"),e(86,"4"),t(),e(87," - For the icing, melt the chocolate and 2 tablespoons butter in a medium saucepan over low heat. "),i(88,"br"),e(89," Stir in 1 cup confectioners' sugar and 1 teaspoon vanilla. Stir in hot water, one tablespoon at a time, until icing is smooth and has reached desired consistency. "),i(90,"br")(91,"br"),e(92,"Remove from heat, cool slightly, and drizzle over filled eclairs. Refrigerate until serving. "),t()()(),n(93,"div",9)(94,"mat-accordion",10)(95,"mat-expansion-panel")(96,"mat-expansion-panel-header")(97,"mat-panel-title")(98,"h1"),e(99,"Browser compatibility"),t()()(),x(100,Y,6,0,"ng-template",11),t()()()()),l&2){let C=w(17);m(15),g("ngIf",!s.unsupportedText)("ngIfElse",C)}},dependencies:[J,z,$,j,N,O,R,G,B,W,I,P,H,q,V,D,F,A],styles:["section[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]{margin:2rem 0;display:flex;align-items:center;flex-wrap:wrap}section[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .enable-box[_ngcontent-%COMP%]{margin-right:1rem}section[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .api-status[_ngcontent-%COMP%]{margin-left:1.5rem;font-weight:700}section[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .api-status.active[_ngcontent-%COMP%]{color:#006400}section[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .api-status.inactive[_ngcontent-%COMP%]{color:#8b0000}section[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{color:#8b0000;display:inline-block}section[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]});let o=c;return o})();export{me as WakeLockComponent};