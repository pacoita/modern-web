(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TboA:function(t,n,c){"use strict";c.r(n),c.d(n,"ContactPickerModule",(function(){return C}));var e=c("otUU"),s=c("ofXK"),i=c("tyNb"),a=c("mrSG"),o=c("fXoL"),r=c("jhN1"),l=c("Wp6s"),b=c("bTqV");function d(t,n){if(1&t&&(o.Ob(0),o.Lb(1,"img",13),o.Nb()),2&t){const t=n.ngIf;o.zb(1),o.dc("src",t,o.kc)}}function p(t,n){1&t&&o.Lb(0,"img",7)}function u(t,n){if(1&t&&(o.Qb(0,"div"),o.qc(1,d,2,1,"ng-container",11),o.qc(2,p,1,0,"ng-template",null,12,o.rc),o.Pb()),2&t){const t=o.gc(3),n=o.ac().$implicit,c=o.ac();o.zb(1),o.dc("ngIf",c.getObjectUrl(n.icon))("ngIfElse",t)}}function g(t,n){if(1&t&&(o.Qb(0,"span"),o.Lb(1,"img",14),o.sc(2),o.Pb()),2&t){const t=o.ac().$implicit;o.zb(2),o.uc("",t.tel.join(", ")," ")}}function m(t,n){if(1&t&&(o.Qb(0,"span"),o.Lb(1,"img",15),o.sc(2),o.Pb()),2&t){const t=o.ac().$implicit;o.zb(2),o.uc("",t.email.join(", ")," ")}}function f(t,n){if(1&t&&(o.Qb(0,"span"),o.Lb(1,"img",16),o.sc(2),o.Pb()),2&t){const t=o.ac().$implicit,n=o.ac();o.zb(2),o.uc("",n.formatAddresses(t.address)," ")}}function h(t,n){if(1&t&&(o.Qb(0,"mat-card"),o.Qb(1,"mat-card-header"),o.qc(2,u,4,2,"div",10),o.Qb(3,"mat-card-title"),o.sc(4),o.Pb(),o.Qb(5,"mat-card-subtitle"),o.sc(6,"\xa0"),o.Pb(),o.Pb(),o.Qb(7,"mat-card-content"),o.qc(8,g,3,1,"span",10),o.qc(9,m,3,1,"span",10),o.qc(10,f,3,1,"span",10),o.Pb(),o.Pb()),2&t){const t=n.$implicit;o.zb(2),o.dc("ngIf",null==t||null==t.icon?null:t.icon.length),o.zb(2),o.tc(null==t?null:t.name.join(", ")),o.zb(4),o.dc("ngIf",null==t||null==t.tel?null:t.tel.length),o.zb(1),o.dc("ngIf",null==t||null==t.email?null:t.email.length),o.zb(1),o.dc("ngIf",null==t||null==t.address?null:t.address.length)}}function P(t,n){if(1&t&&(o.Ob(0),o.Qb(1,"h2"),o.sc(2),o.Pb(),o.Nb()),2&t){const t=o.ac();o.zb(2),o.tc(t.statusText)}}const w=[{path:"",component:(()=>{class t{constructor(t,n){this.domSanitizer=t,this.titleService=n,this.supported=!0,this.contacts=[],this.titleService.setTitle("Contact Picker")}ngOnInit(){"contacts"in navigator&&"ContactsManager"in window||(this.supported=!1,this.statusText="Your browser does not support Contact Picker API")}selectContacts(){return Object(a.a)(this,void 0,void 0,(function*(){const t=["name","address","icon"],n={multiple:!0};try{this.contacts=yield navigator.contacts.select(t,n)}catch(c){this.statusText=`${c.name} - ${c.message}`}}))}getObjectUrl(t){try{return this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(t[0]))}catch(n){return void(this.statusText=`${n.name} - ${n.message}`)}}formatAddresses(t){const n=t[0];return`${null==n?void 0:n.addressLine} ${null==n?void 0:n.city} ${null==n?void 0:n.postalCode} ${null==n?void 0:n.country}`}}return t.\u0275fac=function(n){return new(n||t)(o.Kb(r.b),o.Kb(r.c))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-contact-picker"]],decls:25,vars:3,consts:[[1,"content"],[1,"flex-centered","warn-text"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],["src","assets/icons/android.png","width","24","height","24","alt","android icon",1,"icon-space"],["mat-raised-button","","color","primary",3,"disabled","click"],["src","assets/icons/person.png","width","24","height","24","alt","person icon",1,"icon-space"],[1,"cards-container"],[4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["defaultIcon",""],["mat-card-avatar","","alt","contact icon",3,"src"],["src","assets/icons/phone.png","width","24","height","24","alt","phone icon",1,"icon-space"],["src","assets/icons/email.png","width","24","height","24","alt","email icon",1,"icon-space"],["src","assets/icons/place.png","width","24","height","24","alt","place icon",1,"icon-space"]],template:function(t,n){1&t&&(o.Qb(0,"section",0),o.Qb(1,"div",1),o.Qb(2,"h1"),o.sc(3,"Contact Picker API"),o.Pb(),o.Pb(),o.Qb(4,"mat-card",2),o.Qb(5,"p"),o.sc(6,"The "),o.Qb(7,"strong"),o.sc(8,"Contact Picker API"),o.Pb(),o.sc(9," fills another gap between web and native apps, allowing to access the address book on a mobile device. With this API we can retrieve details like: contact name, contact profile image, email address, phone number, street address. "),o.Lb(10,"br"),o.Lb(11,"br"),o.Qb(12,"span",3),o.Lb(13,"img",4),o.Qb(14,"span"),o.sc(15,"This feature is available only on secure contexts (HTTPS)."),o.Pb(),o.Pb(),o.Pb(),o.Qb(16,"p",3),o.Lb(17,"img",5),o.sc(18," Available from Chrome 80 - Android only (Marshmallow or newer). "),o.Pb(),o.Pb(),o.Qb(19,"button",6),o.Wb("click",(function(){return n.selectContacts()})),o.Lb(20,"img",7),o.sc(21," Select contacts "),o.Pb(),o.Qb(22,"div",8),o.qc(23,h,11,5,"mat-card",9),o.Pb(),o.qc(24,P,3,1,"ng-container",10),o.Pb()),2&t&&(o.zb(19),o.dc("disabled",!n.supported),o.zb(4),o.dc("ngForOf",n.contacts),o.zb(1),o.dc("ngIf",n.statusText))},directives:[l.a,b.a,s.i,s.j,l.d,l.g,l.f,l.c,l.b],styles:["section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-wrap:wrap;gap:1.5rem}section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]{border-top:1px solid #d0d0d0;padding-top:.5rem}section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:.5rem}section[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(n){return new(n||t)},imports:[[i.b.forChild(w)],i.b]}),t})(),C=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(n){return new(n||t)},imports:[[s.b,v,e.a]]}),t})()}}]);