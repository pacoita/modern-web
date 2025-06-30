import{d as C,e as E}from"./chunk-NAUQUYNC.js";import"./chunk-NME53Y3J.js";import{g as M,h as v,i as _,j as y,k,l as w}from"./chunk-H6TYOFTS.js";import{a as T,b as P,c as I,e as z,g as A}from"./chunk-6TMERT2D.js";import{h as f}from"./chunk-7MWEYH2J.js";import{Ec as b,Jb as e,Kb as t,Lb as i,Mb as g,Nb as u,Rb as d,Sb as x,ac as n,bc as S,db as s,ib as h,ob as p,sb as c,zb as m}from"./chunk-DSW3PZOY.js";function F(r,O){if(r&1&&(g(0),e(1,"h2"),n(2),t(),u()),r&2){let o=x();s(2),S(o.unsupportedText)}}function B(r,O){r&1&&(e(0,"div",14),i(1,"img",15),t(),i(2,"br")(3,"br"),e(4,"a",16),n(5,"Source: can I use"),t())}var J=(()=>{class r{constructor(o){this.titleService=o,this.dataToShare=[{title:"Cosmopolitan",text:`See more demos by Francesco Leardini

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

      `,url:"https://github.com/pacoita/modern-web"}],this.titleService.setTitle("Share")}ngOnInit(){"share"in navigator||(this.unsupportedText="Web Share API is not supported by your browser.")}share(o){let l=this.dataToShare.find(a=>a.title===o);try{l?navigator.share(l):console.error("The provided cocktail is not shareable: ",o)}catch(a){console.error(a.name,a.message)}}static{this.\u0275fac=function(l){return new(l||r)(h(f))}}static{this.\u0275cmp=p({type:r,selectors:[["app-share"]],decls:89,vars:3,consts:[[1,"content"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],[4,"ngIf"],[1,"cards-container"],[1,"demo-card"],["mat-mini-fab","","color","primary","aria-label","Share icon",1,"share-btn",3,"click","disabled"],["src","assets/icons/share_white.png","width","24","height","24","alt","share icon"],["src","assets/images/cosmo.png","alt","Cosmopolitan",1,"content-img"],["src","assets/images/manhattan.png","alt","Manhattan",1,"content-img"],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"img-container"],["src","assets/images/share.png","alt","Share api support"],["href","https://caniuse.com/web-share","target","_blank"]],template:function(l,a){l&1&&(e(0,"section",0)(1,"h1"),n(2,"Web Share API"),t(),e(3,"mat-card",1)(4,"p"),n(5,"The "),e(6,"strong"),n(7,"navigator.share()"),t(),n(8," method of the Web Share API invokes the native sharing mechanism of the device."),i(9,"br")(10,"br"),e(11,"span",2),i(12,"img",3),e(13,"span"),n(14,"This feature is available only over secure connections (HTTPS) and through user interaction."),t()()()(),c(15,F,3,1,"ng-container",4),e(16,"div",5)(17,"mat-card",6)(18,"mat-card-header")(19,"mat-card-title"),n(20,"Cosmopolitan"),t(),e(21,"button",7),d("click",function(){return a.share("Cosmopolitan")}),i(22,"img",8),t(),e(23,"div"),i(24,"img",9),t()(),e(25,"mat-card-content")(26,"strong"),n(27,"Ingredients: "),t(),e(28,"ul")(29,"li"),n(30,"1 1/2 oz Citrus vodka"),t(),e(31,"li"),n(32,"1 oz Cointreau"),t(),e(33,"li"),n(34,"1/2 oz Fresh lime juice"),t(),e(35,"li"),n(36,"1 dash Cranberry juice"),t()(),i(37,"hr"),e(38,"strong"),n(39,"Preparation: "),t(),i(40,"br")(41,"br"),e(42,"p"),n(43," Add all ingredients into a shaker with ice and shake. "),i(44,"br")(45,"br"),n(46," Strain into a chilled cocktail glass. "),i(47,"br")(48,"br"),n(49," Garnish with an lime or orange zest. "),t()()(),e(50,"mat-card",6)(51,"mat-card-header")(52,"mat-card-title"),n(53,"Manhattan"),t(),e(54,"button",7),d("click",function(){return a.share("Manhattan")}),i(55,"img",8),t(),e(56,"div"),i(57,"img",10),t()(),e(58,"mat-card-content")(59,"strong"),n(60,"Ingredients: "),t(),e(61,"ul")(62,"li"),n(63,"2oz Rye Whiskey"),t(),e(64,"li"),n(65,"1oz Sweet Vermouth"),t(),e(66,"li"),n(67,"Dashes Angostura Bitters"),t()(),i(68,"hr"),e(69,"strong"),n(70,"Preparation: "),t(),i(71,"br")(72,"br"),e(73,"p"),n(74," Add ingredients to a mixing glass with cracked ice. "),i(75,"br")(76,"br"),n(77," Strain into a chilled cocktail glass. "),i(78,"br")(79,"br"),n(80," Garnish with a cherry. "),t()()()(),e(81,"div",11)(82,"mat-accordion",12)(83,"mat-expansion-panel")(84,"mat-expansion-panel-header")(85,"mat-panel-title")(86,"h1"),n(87,"Browser compatibility"),t()()(),c(88,B,6,0,"ng-template",13),t()()()()),l&2&&(s(15),m("ngIf",a.unsupportedText),s(6),m("disabled",a.unsupportedText),s(33),m("disabled",a.unsupportedText))},dependencies:[A,T,I,z,P,b,E,C,w,k,v,_,y,M],styles:[".cards-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;max-width:900px}.cards-container[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem}.cards-container[_ngcontent-%COMP%]   .content-img[_ngcontent-%COMP%]{width:50%;min-height:238px}.cards-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{min-height:80px}"]})}}return r})();export{J as ShareComponent};
