(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ADsi:function(n,t,e){"use strict";e.r(t),e.d(t,"ShareModule",(function(){return m}));var a=e("ofXK"),r=e("tyNb"),i=e("fXoL"),s=e("jhN1"),o=e("Wp6s"),c=e("bTqV"),b=e("7EHt");function h(n,t){if(1&n&&(i.Ob(0),i.Qb(1,"h2"),i.sc(2),i.Pb(),i.Nb()),2&n){const n=i.ac();i.zb(2),i.tc(n.unsupportedText)}}const d=[{path:"",component:(()=>{class n{constructor(n){this.titleService=n,this.dataToShare=[{title:"Cosmopolitan",text:"See more demos by Francesco Leardini\n\n      ---- Cosmopolitan ----\n\n      Ingredients:\n\n      - 1 1/2 oz Citrus vodka \n\n      - 1 oz Cointreau \n\n      - 1/2 oz Fresh lime juice \n\n      - 1 dash Cranberry juice \n\n\n      Preparation:\n\n      Add all ingredients into a shaker with ice and shake. \n\n      Strain into a chilled cocktail glass. \n\n      ",url:"https://github.com/pacoita/modern-web"},{title:"Manhattan",text:"See more demos by Francesco Leardini\n\n      ---- Manhattan ----\n\n      Ingredients:\n\n      - 2oz Rye Whiskey \n\n      - 1oz Sweet Vermouth \n\n      - Dashes Angostura Bitters \n\n\n      Preparation:\n\n      Add ingredients to a mixing glass with cracked ice. \n\n      Strain into a chilled cocktail glass. \n\n      ",url:"https://github.com/pacoita/modern-web"}],this.titleService.setTitle("Share")}ngOnInit(){"share"in navigator||(this.unsupportedText="Web Share API is not supported by your browser.")}share(n){const t=this.dataToShare.find(t=>t.title===n);try{t?navigator.share(t):console.error("The provided cocktail is not shareable: ",n)}catch(e){console.error(e.name,e.message)}}}return n.\u0275fac=function(t){return new(t||n)(i.Kb(s.c))},n.\u0275cmp=i.Eb({type:n,selectors:[["app-share"]],decls:94,vars:3,consts:[[1,"content"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],[4,"ngIf"],[1,"cards-container"],[1,"demo-card"],["mat-mini-fab","","color","primary","aria-label","Share icon",1,"share-btn",3,"disabled","click"],["src","assets/icons/share.png","width","24","height","24","alt","share icon",1,"icon-space"],["src","assets/images/cosmo.png","alt","Cosmopolitan",1,"content-img"],["src","assets/images/manhattan.png","alt","Manhattan",1,"content-img"],[1,"accordion-container"],["multi","",1,"example-headers-align"],[1,"img-container"],["src","assets/images/share.png","alt","Share api support"],["href","https://caniuse.com/web-share","target","_blank"]],template:function(n,t){1&n&&(i.Qb(0,"section",0),i.Qb(1,"h1"),i.sc(2,"Web Share API"),i.Pb(),i.Qb(3,"mat-card",1),i.Qb(4,"p"),i.sc(5,"The "),i.Qb(6,"strong"),i.sc(7,"navigator.share()"),i.Pb(),i.sc(8," method of the Web Share API invokes the native sharing mechanism of the device."),i.Lb(9,"br"),i.Lb(10,"br"),i.Qb(11,"span",2),i.Lb(12,"img",3),i.Qb(13,"span"),i.sc(14,"This feature is available only over secure connections (HTTPS) and through user interaction."),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.qc(15,h,3,1,"ng-container",4),i.Qb(16,"div",5),i.Qb(17,"mat-card",6),i.Qb(18,"mat-card-header"),i.Qb(19,"mat-card-title"),i.sc(20,"Cosmopolitan"),i.Pb(),i.Qb(21,"button",7),i.Wb("click",(function(){return t.share("Cosmopolitan")})),i.Lb(22,"img",8),i.Pb(),i.Qb(23,"div"),i.Lb(24,"img",9),i.Pb(),i.Pb(),i.Qb(25,"mat-card-content"),i.Qb(26,"strong"),i.sc(27,"Ingredients: "),i.Pb(),i.Qb(28,"ul"),i.Qb(29,"li"),i.sc(30,"1 1/2 oz Citrus vodka"),i.Pb(),i.Qb(31,"li"),i.sc(32,"1 oz Cointreau"),i.Pb(),i.Qb(33,"li"),i.sc(34,"1/2 oz Fresh lime juice"),i.Pb(),i.Qb(35,"li"),i.sc(36,"1 dash Cranberry juice"),i.Pb(),i.Pb(),i.Lb(37,"hr"),i.Qb(38,"strong"),i.sc(39,"Preparation: "),i.Pb(),i.Lb(40,"br"),i.Lb(41,"br"),i.Qb(42,"p"),i.sc(43," Add all ingredients into a shaker with ice and shake. "),i.Lb(44,"br"),i.Lb(45,"br"),i.sc(46," Strain into a chilled cocktail glass. "),i.Lb(47,"br"),i.Lb(48,"br"),i.sc(49," Garnish with an lime or orange zest. "),i.Pb(),i.Pb(),i.Pb(),i.Qb(50,"mat-card",6),i.Qb(51,"mat-card-header"),i.Qb(52,"mat-card-title"),i.sc(53,"Manhattan"),i.Pb(),i.Qb(54,"button",7),i.Wb("click",(function(){return t.share("Manhattan")})),i.Lb(55,"img",8),i.Pb(),i.Qb(56,"div"),i.Lb(57,"img",10),i.Pb(),i.Pb(),i.Qb(58,"mat-card-content"),i.Qb(59,"strong"),i.sc(60,"Ingredients: "),i.Pb(),i.Qb(61,"ul"),i.Qb(62,"li"),i.sc(63,"2oz Rye Whiskey"),i.Pb(),i.Qb(64,"li"),i.sc(65,"1oz Sweet Vermouth"),i.Pb(),i.Qb(66,"li"),i.sc(67,"Dashes Angostura Bitters"),i.Pb(),i.Pb(),i.Lb(68,"hr"),i.Qb(69,"strong"),i.sc(70,"Preparation: "),i.Pb(),i.Lb(71,"br"),i.Lb(72,"br"),i.Qb(73,"p"),i.sc(74," Add ingredients to a mixing glass with cracked ice. "),i.Lb(75,"br"),i.Lb(76,"br"),i.sc(77," Strain into a chilled cocktail glass. "),i.Lb(78,"br"),i.Lb(79,"br"),i.sc(80," Garnish with a cherry. "),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Qb(81,"div",11),i.Qb(82,"mat-accordion",12),i.Qb(83,"mat-expansion-panel"),i.Qb(84,"mat-expansion-panel-header"),i.Qb(85,"mat-panel-title"),i.Qb(86,"h1"),i.sc(87,"Browser compatibility"),i.Pb(),i.Pb(),i.Pb(),i.Qb(88,"div",13),i.Lb(89,"img",14),i.Pb(),i.Lb(90,"br"),i.Lb(91,"br"),i.Qb(92,"a",15),i.sc(93,"Source: can I use"),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&n&&(i.zb(15),i.dc("ngIf",t.unsupportedText),i.zb(6),i.dc("disabled",t.unsupportedText),i.zb(33),i.dc("disabled",t.unsupportedText))},directives:[o.a,a.j,o.d,o.g,c.a,o.c,b.a,b.c,b.d,b.e],styles:[".cards-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;max-width:900px}.cards-container[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem}.cards-container[_ngcontent-%COMP%]   .content-img[_ngcontent-%COMP%]{width:50%;min-height:238px}.cards-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{min-height:80px}"]}),n})()}];let l=(()=>{class n{}return n.\u0275mod=i.Ib({type:n}),n.\u0275inj=i.Hb({factory:function(t){return new(t||n)},imports:[[r.b.forChild(d)],r.b]}),n})();var p=e("otUU");let m=(()=>{class n{}return n.\u0275mod=i.Ib({type:n}),n.\u0275inj=i.Hb({factory:function(t){return new(t||n)},imports:[[a.b,l,p.a]]}),n})()}}]);