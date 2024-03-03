import{b as M,d as v}from"./chunk-LM2QGAUZ.js";import{d as _,e as y,f as k,g as w,h as T,i as P}from"./chunk-LAEGQYIL.js";import{a as I,b as z,c as A,e as O,g as F}from"./chunk-764RPA4D.js";import"./chunk-OFTKMGOF.js";import{$a as i,Fa as m,Ga as g,Oa as c,Ua as d,Xb as C,Za as e,_a as t,ab as u,bb as x,da as p,hb as h,jb as S,nb as n,ob as b,qc as E,ub as f}from"./chunk-TX2EYQ2R.js";function W(r,o){if(r&1&&(u(0),e(1,"h2"),n(2),t(),x()),r&2){let j=S();m(2),b(j.unsupportedText)}}function D(r,o){r&1&&(e(0,"div",14),i(1,"img",15),t(),i(2,"br")(3,"br"),e(4,"a",16),n(5,"Source: can I use"),t())}var Q=(()=>{let o=class o{constructor(s){this.titleService=s,this.dataToShare=[{title:"Cosmopolitan",text:`See more demos by Francesco Leardini

      ---- Cosmopolitan ----

      Ingredients:

      - 1 1/2 oz Citrus vodka 

      - 1 oz Cointreau 

      - 1/2 oz Fresh lime juice 

      - 1 dash Cranberry juice 


      Preparation:

      Add all ingredients into a shaker with ice and shake. 

      Strain into a chilled cocktail glass. 

      `,url:"https://github.com/pacoita/modern-web"},{title:"Manhattan",text:`See more demos by Francesco Leardini

      ---- Manhattan ----

      Ingredients:

      - 2oz Rye Whiskey 

      - 1oz Sweet Vermouth 

      - Dashes Angostura Bitters 


      Preparation:

      Add ingredients to a mixing glass with cracked ice. 

      Strain into a chilled cocktail glass. 

      `,url:"https://github.com/pacoita/modern-web"}],this.titleService.setTitle("Share")}ngOnInit(){"share"in navigator||(this.unsupportedText="Web Share API is not supported by your browser.")}share(s){let l=this.dataToShare.find(a=>a.title===s);try{l?navigator.share(l):console.error("The provided cocktail is not shareable: ",s)}catch(a){console.error(a.name,a.message)}}};o.\u0275fac=function(l){return new(l||o)(g(E))},o.\u0275cmp=p({type:o,selectors:[["app-share"]],standalone:!0,features:[f],decls:89,vars:3,consts:[[1,"content"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],[4,"ngIf"],[1,"cards-container"],[1,"demo-card"],["mat-mini-fab","","color","primary","aria-label","Share icon",1,"share-btn",3,"disabled","click"],["src","assets/icons/share_white.png","width","24","height","24","alt","share icon"],["src","assets/images/cosmo.png","alt","Cosmopolitan",1,"content-img"],["src","assets/images/manhattan.png","alt","Manhattan",1,"content-img"],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"img-container"],["src","assets/images/share.png","alt","Share api support"],["href","https://caniuse.com/web-share","target","_blank"]],template:function(l,a){l&1&&(e(0,"section",0)(1,"h1"),n(2,"Web Share API"),t(),e(3,"mat-card",1)(4,"p"),n(5,"The "),e(6,"strong"),n(7,"navigator.share()"),t(),n(8," method of the Web Share API invokes the native sharing mechanism of the device."),i(9,"br")(10,"br"),e(11,"span",2),i(12,"img",3),e(13,"span"),n(14,"This feature is available only over secure connections (HTTPS) and through user interaction."),t()()()(),d(15,W,3,1,"ng-container",4),e(16,"div",5)(17,"mat-card",6)(18,"mat-card-header")(19,"mat-card-title"),n(20,"Cosmopolitan"),t(),e(21,"button",7),h("click",function(){return a.share("Cosmopolitan")}),i(22,"img",8),t(),e(23,"div"),i(24,"img",9),t()(),e(25,"mat-card-content")(26,"strong"),n(27,"Ingredients: "),t(),e(28,"ul")(29,"li"),n(30,"1 1/2 oz Citrus vodka"),t(),e(31,"li"),n(32,"1 oz Cointreau"),t(),e(33,"li"),n(34,"1/2 oz Fresh lime juice"),t(),e(35,"li"),n(36,"1 dash Cranberry juice"),t()(),i(37,"hr"),e(38,"strong"),n(39,"Preparation: "),t(),i(40,"br")(41,"br"),e(42,"p"),n(43," Add all ingredients into a shaker with ice and shake. "),i(44,"br")(45,"br"),n(46," Strain into a chilled cocktail glass. "),i(47,"br")(48,"br"),n(49," Garnish with an lime or orange zest. "),t()()(),e(50,"mat-card",6)(51,"mat-card-header")(52,"mat-card-title"),n(53,"Manhattan"),t(),e(54,"button",7),h("click",function(){return a.share("Manhattan")}),i(55,"img",8),t(),e(56,"div"),i(57,"img",10),t()(),e(58,"mat-card-content")(59,"strong"),n(60,"Ingredients: "),t(),e(61,"ul")(62,"li"),n(63,"2oz Rye Whiskey"),t(),e(64,"li"),n(65,"1oz Sweet Vermouth"),t(),e(66,"li"),n(67,"Dashes Angostura Bitters"),t()(),i(68,"hr"),e(69,"strong"),n(70,"Preparation: "),t(),i(71,"br")(72,"br"),e(73,"p"),n(74," Add ingredients to a mixing glass with cracked ice. "),i(75,"br")(76,"br"),n(77," Strain into a chilled cocktail glass. "),i(78,"br")(79,"br"),n(80," Garnish with a cherry. "),t()()()(),e(81,"div",11)(82,"mat-accordion",12)(83,"mat-expansion-panel")(84,"mat-expansion-panel-header")(85,"mat-panel-title")(86,"h1"),n(87,"Browser compatibility"),t()()(),d(88,D,6,0,"ng-template",13),t()()()()),l&2&&(m(15),c("ngIf",a.unsupportedText),m(6),c("disabled",a.unsupportedText),m(33),c("disabled",a.unsupportedText))},dependencies:[F,I,A,O,z,C,v,M,P,T,y,k,w,_],styles:[".cards-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;max-width:900px}.cards-container[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem}.cards-container[_ngcontent-%COMP%]   .content-img[_ngcontent-%COMP%]{width:50%;min-height:238px}.cards-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{min-height:80px}"]});let r=o;return r})();export{Q as ShareComponent};
