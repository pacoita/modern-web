import{a as A,d as V}from"./chunk-5HHMUAKF.js";import{c as H}from"./chunk-EET26C6H.js";import"./chunk-FXTHA667.js";import{g as D,h as N,i as Q,j as B,k as W,l as R}from"./chunk-LC3WTXNP.js";import{a as j,g as q}from"./chunk-JQX7WBIC.js";import"./chunk-4XVAJ4KQ.js";import{$a as S,Ab as i,Bb as s,Cb as b,Cc as O,Db as F,Fb as w,Ib as _,Kb as m,Ob as E,Pb as P,Qb as T,Rb as v,Sb as a,Tb as M,Ub as y,_a as p,_b as k,cc as I,d,ka as C,ob as x,qb as h,ta as u,ua as g,zb as n}from"./chunk-V5BQXA3S.js";var Y=["textbox"];function z(o,l){if(o&1&&(b(0),a(1),F()),o&2){let r=m(2);p(),y("File opened: ",r.fileHandle.name,"")}}function G(o,l){if(o&1){let r=w();n(0,"button",21),_("click",function(){u(r),m();let t=v(12),c=m();return g(c.saveFile(t.value))}),s(1,"img",22),a(2," Save "),i()}}function J(o,l){if(o&1){let r=w();n(0,"div",11)(1,"p",12),x(2,z,2,1,"ng-container",13),i(),n(3,"div",14)(4,"button",15),_("click",function(){u(r);let t=m();return g(t.openFile())}),s(5,"img",16),a(6," Open "),i(),n(7,"button",15),_("click",function(){u(r);let t=v(12),c=m();return g(c.saveAs(t.value))}),s(8,"img",17),a(9," Save as "),i(),x(10,G,3,0,"button",18),i(),s(11,"textarea",19,1),n(13,"cite"),a(14,"For demo purposes, only .txt files are accepted."),i(),n(15,"p",20),a(16),i()()}if(o&2){let r=m();p(2),h("ngIf",r.fileHandle),p(8),h("ngIf",r.fileHandle),p(6),y(" ",r.errorText," ")}}function K(o,l){if(o&1&&(n(0,"h2"),a(1),i()),o&2){let r=m();p(),M(r.unsupportedText)}}function L(o,l){o&1&&(n(0,"div",23),s(1,"img",24),i(),s(2,"br")(3,"br"),n(4,"a",25),a(5,"Source: can I use"),i())}var oe=(()=>{let l=class l{constructor(e){this.titleService=e,this.titleService.setTitle("File System")}ngOnInit(){!("chooseFileSystemEntries"in window)&&!("showOpenFilePicker"in window)&&(this.unsupportedText="Your browser does not support File System Access API or you did not activate the Chrome flag.")}ngAfterViewInit(){this.textAreaElement=this.textarea.nativeElement}openFile(){return d(this,null,function*(){try{this.fileHandle=yield this.getFileHandle();let e=yield this.fileHandle.getFile();this.textAreaElement.value=yield e.text()}catch(e){this.errorText=e.message,console.error(e)}})}saveFile(e){return d(this,null,function*(){try{if(this.fileHandle)yield this.writeTextFile(this.fileHandle,e);else return yield this.saveAs(e)}catch(t){this.errorText=t.message,console.error(t)}})}saveAs(e){return d(this,null,function*(){try{this.fileHandle=yield this.getNewFileHandle(),yield this.writeTextFile(this.fileHandle,e)}catch(t){this.errorText=t.message,console.error(t)}})}writeTextFile(e,t){return d(this,null,function*(){let c=yield e.createWritable();c.write(t),c.close()})}getFileHandle(){return d(this,null,function*(){let e=this.getFilePickerOptions();return window.showOpenFilePicker(e).then(t=>t[0])})}getNewFileHandle(){let e={};return e=this.getFilePickerOptions(),window.showSaveFilePicker(e)}getFilePickerOptions(e="open-file"){return"showSaveFilePicker"in window?{types:[{description:"Text files",accept:{"text/plain":[".txt"]}}]}:{type:e,accepts:[{description:"Text files",mimeTypes:["text/plain"],extensions:["txt"]}]}}};l.\u0275fac=function(t){return new(t||l)(S(H))},l.\u0275cmp=C({type:l,selectors:[["app-file-system"]],viewQuery:function(t,c){if(t&1&&E(Y,5),t&2){let f;P(f=T())&&(c.textarea=f.first)}},standalone:!0,features:[k],decls:31,vars:2,consts:[["noSupported",""],["textbox",""],[1,"content"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],["src","assets/icons/warning.png","width","24","height","24","alt","warning icon",1,"icon-space"],["class","native-demo",4,"ngIf","ngIfElse"],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"native-demo"],[1,"file-name"],[4,"ngIf"],[1,"action-bar"],["mat-raised-button","",3,"click"],["src","assets/icons/folder_open.png","width","24","height","24","alt","folder_open icon",1,"icon-space"],["src","assets/icons/playlist_add.png","width","24","height","24","alt","playlist_add icon",1,"icon-space"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["name","textbox","id","textbox","rows","15","placeholder"," Start digiting your biography and save it for the future generations... \u{1F447}"],[1,"error"],["color","primary","mat-raised-button","",3,"click"],["src","assets/icons/save.png","width","24","height","24","alt","save icon",1,"icon-space"],[1,"img-container"],["src","assets/images/native-file.png","alt","Native File System api support"],["href","https://caniuse.com/native-filesystem-api","target","_blank"]],template:function(t,c){if(t&1&&(n(0,"section",2)(1,"h1"),a(2,"File System Access API"),i(),n(3,"mat-card",3)(4,"p"),a(5,"The "),n(6,"strong"),a(7,"File System Access API"),i(),a(8," offers new features to manipulate local files and provide an improved experience similar to a desktop/native app. We don't have to download the file each time we want to edit it, but we can save it directly. We could even implement an auto-save functionality if needed. "),s(9,"br")(10,"br"),n(11,"span",4),s(12,"img",5),n(13,"span"),a(14,"This feature is available only over secure connections (HTTPS) and through user interaction."),i()(),s(15,"br"),n(16,"span",4),s(17,"img",6),a(18," Active by default from Chrome 86. "),i(),a(19," In older Chrome versions you might need to enable the related flag in Chrome to test it (chrome://flags/#native-file-system-api). "),i()(),x(20,J,17,3,"div",7)(21,K,2,1,"ng-template",null,0,I),n(23,"div",8)(24,"mat-accordion",9)(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title")(28,"h1"),a(29,"Browser compatibility"),i()()(),x(30,L,6,0,"ng-template",10),i()()()()),t&2){let f=v(22);p(20),h("ngIf",!c.unsupportedText)("ngIfElse",f)}},dependencies:[q,j,O,V,A,R,W,N,Q,B,D],styles:[".native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]{margin-bottom:1rem}.native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem}.native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:0}.native-demo[_ngcontent-%COMP%]   p.file-name[_ngcontent-%COMP%]{height:20px}.native-demo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}"]});let o=l;return o})();export{oe as FileSystemComponent};
