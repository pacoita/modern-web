"use strict";(self.webpackChunkmodern_web=self.webpackChunkmodern_web||[]).push([[223],{4223:(A,l,o)=>{o.r(l),o.d(l,{ContactPickerComponent:()=>O});var g=o(5861),r=o(3305),_=o(6814),p=o(2296),s=o(5195),t=o(9212),m=o(6593);function u(e,c){if(1&e&&(t.ynx(0),t._UZ(1,"img",16),t.BQk()),2&e){const n=c.ngIf;t.xp6(1),t.Q6J("src",n,t.LSH)}}function h(e,c){1&e&&t._UZ(0,"img",7)}function C(e,c){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,u,2,1,"ng-container",14)(2,h,1,0,"ng-template",null,15,t.W1O),t.qZA()),2&e){const n=t.MAs(3),a=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.getObjectUrl(a.icon))("ngIfElse",n)}}function f(e,c){if(1&e&&(t.TgZ(0,"span"),t._UZ(1,"img",17),t._uU(2),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.hij("",n.tel.join(", ")," ")}}function T(e,c){if(1&e&&(t.TgZ(0,"span"),t._UZ(1,"img",18),t._uU(2),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(2),t.hij("",n.email.join(", ")," ")}}function Z(e,c){if(1&e&&(t.TgZ(0,"span"),t._UZ(1,"img",19),t._uU(2),t.qZA()),2&e){const n=t.oxw().$implicit,a=t.oxw();t.xp6(2),t.hij("",a.formatAddresses(n.address)," ")}}function P(e,c){if(1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-header"),t.YNc(2,C,4,2,"div",10),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"\xa0"),t.qZA()(),t.TgZ(7,"mat-card-content"),t.YNc(8,f,3,1,"span",10)(9,T,3,1,"span",10)(10,Z,3,1,"span",10),t.qZA()()),2&e){const n=c.$implicit;t.xp6(2),t.Q6J("ngIf",null==n||null==n.icon?null:n.icon.length),t.xp6(2),t.Oqu(null==n?null:n.name.join(", ")),t.xp6(4),t.Q6J("ngIf",null==n||null==n.tel?null:n.tel.length),t.xp6(1),t.Q6J("ngIf",null==n||null==n.email?null:n.email.length),t.xp6(1),t.Q6J("ngIf",null==n||null==n.address?null:n.address.length)}}function x(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"h2"),t._uU(2),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.statusText)}}function U(e,c){1&e&&(t.TgZ(0,"div",20),t._UZ(1,"img",21),t.qZA(),t._UZ(2,"br")(3,"br"),t.TgZ(4,"a",22),t._uU(5,"Source: can I use"),t.qZA())}let O=(()=>{class e{constructor(n,a){this.domSanitizer=n,this.titleService=a,this.supported=!0,this.contacts=[],this.titleService.setTitle("Contact Picker")}ngOnInit(){"contacts"in navigator&&"ContactsManager"in window||(this.supported=!1,this.statusText="Your browser does not support the Contact Picker API")}selectContacts(){var n=this;return(0,g.Z)(function*(){const a=["name","address","icon"],i={multiple:!0};try{n.contacts=yield navigator.contacts.select(a,i)}catch(d){n.statusText="An error occurred.",console.error(d)}})()}getObjectUrl(n){try{return this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(n[0]))}catch(a){return this.statusText="An error occurred.",void console.error(a)}}formatAddresses(n){const a=n[0];return`${a?.addressLine} ${a?.city} ${a?.postalCode} ${a?.country}`}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(m.H7),t.Y36(m.Dx))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-picker"]],standalone:!0,features:[t.jDz],decls:35,vars:3,consts:[[1,"content"],[1,"flex-centered","warn-text"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/warning.png","width","24","height","24","alt","warning icon",1,"icon-space"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],["mat-raised-button","","color","primary",3,"disabled","click"],["src","assets/icons/person.png","width","24","height","24","alt","person icon",1,"icon-space"],[1,"cards-container"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[4,"ngIf","ngIfElse"],["defaultIcon",""],["mat-card-avatar","","alt","contact icon",3,"src"],["src","assets/icons/phone.png","width","24","height","24","alt","phone icon",1,"icon-space"],["src","assets/icons/email.png","width","24","height","24","alt","email icon",1,"icon-space"],["src","assets/icons/place.png","width","24","height","24","alt","place icon",1,"icon-space"],[1,"img-container"],["src","assets/images/contacts-picker.png","alt","Contact Picker api support"],["href","https://caniuse.com/mdn-api_contactsmanager","target","_blank"]],template:function(a,i){1&a&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3,"Contact Picker API"),t.qZA()(),t.TgZ(4,"mat-card",2)(5,"p"),t._uU(6,"The "),t.TgZ(7,"strong"),t._uU(8,"Contact Picker API"),t.qZA(),t._uU(9," fills another gap between web and native apps, allowing to access the address book on a mobile device. With this API we can retrieve details like: contact name, contact profile image, email address, phone number, street address. "),t._UZ(10,"br")(11,"br"),t.TgZ(12,"span",3),t._UZ(13,"img",4),t.TgZ(14,"span"),t._uU(15,"Still experimental"),t.qZA()(),t._UZ(16,"br"),t.TgZ(17,"span",3),t._UZ(18,"img",5),t.TgZ(19,"span"),t._uU(20,"This feature is available only on secure contexts (HTTPS)."),t.qZA()()()(),t.TgZ(21,"button",6),t.NdJ("click",function(){return i.selectContacts()}),t._UZ(22,"img",7),t._uU(23," Select contacts "),t.qZA(),t.TgZ(24,"div",8),t.YNc(25,P,11,5,"mat-card",9),t.qZA(),t.YNc(26,x,3,1,"ng-container",10),t.TgZ(27,"div",11)(28,"mat-accordion",12)(29,"mat-expansion-panel")(30,"mat-expansion-panel-header")(31,"mat-panel-title")(32,"h1"),t._uU(33,"Browser compatibility"),t.qZA()()(),t.YNc(34,U,6,0,"ng-template",13),t.qZA()()()()),2&a&&(t.xp6(21),t.Q6J("disabled",!i.supported),t.xp6(4),t.Q6J("ngForOf",i.contacts),t.xp6(1),t.Q6J("ngIf",i.statusText))},dependencies:[s.QW,s.a8,s.kc,s.dn,s.dk,s.$j,s.n5,p.ot,p.lW,_.ax,_.O5,r.To,r.pp,r.ib,r.yz,r.yK,r.HS],styles:["section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-wrap:wrap;gap:1.5rem}section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]{border-top:1px solid #d0d0d0;padding-top:.5rem}section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:.5rem}section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]})}return e})()}}]);