"use strict";(self.webpackChunkmodern_web=self.webpackChunkmodern_web||[]).push([[239],{9239:(C,m,r)=>{r.r(m),r.d(m,{FileSystemModule:()=>S});var u=r(8903),p=r(6814),d=r(2164),l=r(5861),e=r(5879),g=r(6593),f=r(2296),h=r(5195),c=r(3305);const v=["textbox"];function y(n,a){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const o=e.oxw(2);e.xp6(1),e.hij("File opened: ",o.fileHandle.name,"")}}function _(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(o),e.oxw();const i=e.MAs(12),s=e.oxw();return e.KtG(s.saveFile(i.value))}),e._UZ(1,"img",22),e._uU(2," Save "),e.qZA()}}function x(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"div",10)(1,"p",11),e.YNc(2,y,2,1,"ng-container",12),e.qZA(),e.TgZ(3,"div",13)(4,"button",14),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.openFile())}),e._UZ(5,"img",15),e._uU(6," Open "),e.qZA(),e.TgZ(7,"button",14),e.NdJ("click",function(){e.CHM(o);const i=e.MAs(12),s=e.oxw();return e.KtG(s.saveAs(i.value))}),e._UZ(8,"img",16),e._uU(9," Save as "),e.qZA(),e.YNc(10,_,3,0,"button",17),e.qZA(),e._UZ(11,"textarea",18,19),e.TgZ(13,"cite"),e._uU(14,"For demo purposes, only .txt files are accepted."),e.qZA(),e.TgZ(15,"p",20),e._uU(16),e.qZA()()}if(2&n){const o=e.oxw();e.xp6(2),e.Q6J("ngIf",o.fileHandle),e.xp6(8),e.Q6J("ngIf",o.fileHandle),e.xp6(6),e.hij(" ",o.errorText," ")}}function F(n,a){if(1&n&&(e.TgZ(0,"h2"),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.unsupportedText)}}function Z(n,a){1&n&&(e.TgZ(0,"div",23),e._UZ(1,"img",24),e.qZA(),e._UZ(2,"br")(3,"br"),e.TgZ(4,"a",25),e._uU(5,"Source: can I use"),e.qZA())}const w=[{path:"",component:(()=>{var n;class a{constructor(t){this.titleService=t,this.titleService.setTitle("File System")}ngOnInit(){!("chooseFileSystemEntries"in window)&&!("showOpenFilePicker"in window)&&(this.unsupportedText="Your browser does not support File System Access API or you did not activate the Chrome flag.")}ngAfterViewInit(){this.textAreaElement=this.textarea.nativeElement}openFile(){var t=this;return(0,l.Z)(function*(){try{t.fileHandle=yield t.getFileHandle();const i=yield t.fileHandle.getFile();t.textAreaElement.value=yield i.text()}catch(i){t.errorText=i.message,console.error(i)}})()}saveFile(t){var i=this;return(0,l.Z)(function*(){try{if(!i.fileHandle)return yield i.saveAs(t);yield i.writeTextFile(i.fileHandle,t)}catch(s){i.errorText=s.message,console.error(s)}})()}saveAs(t){var i=this;return(0,l.Z)(function*(){try{i.fileHandle=yield i.getNewFileHandle(),yield i.writeTextFile(i.fileHandle,t)}catch(s){i.errorText=s.message,console.error(s)}})()}writeTextFile(t,i){return(0,l.Z)(function*(){const s=yield t.createWritable();s.write(i),s.close()})()}getFileHandle(){var t=this;return(0,l.Z)(function*(){const i=t.getFilePickerOptions();return window.showOpenFilePicker(i).then(s=>s[0])})()}getNewFileHandle(){let t={};return t=this.getFilePickerOptions(),window.showSaveFilePicker(t)}getFilePickerOptions(t="open-file"){return"showSaveFilePicker"in window?{types:[{description:"Text files",accept:{"text/plain":[".txt"]}}]}:{type:t,accepts:[{description:"Text files",mimeTypes:["text/plain"],extensions:["txt"]}]}}}return(n=a).\u0275fac=function(t){return new(t||n)(e.Y36(g.Dx))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-file-system"]],viewQuery:function(t,i){if(1&t&&e.Gf(v,5),2&t){let s;e.iGM(s=e.CRH())&&(i.textarea=s.first)}},decls:31,vars:2,consts:[[1,"content"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],["src","assets/icons/warning.png","width","24","height","24","alt","warning icon",1,"icon-space"],["class","native-demo",4,"ngIf","ngIfElse"],["noSupported",""],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"native-demo"],[1,"file-name"],[4,"ngIf"],[1,"action-bar"],["mat-raised-button","",3,"click"],["src","assets/icons/folder_open.png","width","24","height","24","alt","folder_open icon",1,"icon-space"],["src","assets/icons/playlist_add.png","width","24","height","24","alt","playlist_add icon",1,"icon-space"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["name","textbox","id","textbox","rows","15","placeholder"," Start digiting your biography and save it for the future generations... \u{1f447}"],["textbox",""],[1,"error"],["color","primary","mat-raised-button","",3,"click"],["src","assets/icons/save.png","width","24","height","24","alt","save icon",1,"icon-space"],[1,"img-container"],["src","assets/images/native-file.png","alt","Native File System api support"],["href","https://caniuse.com/native-filesystem-api","target","_blank"]],template:function(t,i){if(1&t&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"File System Access API"),e.qZA(),e.TgZ(3,"mat-card",1)(4,"p"),e._uU(5,"The "),e.TgZ(6,"strong"),e._uU(7,"File System Access API"),e.qZA(),e._uU(8," offers new features to manipulate local files providing an improved experience to our users like a native app. We don't have to download the file each time we want to edit it, but we can save it directly. We can even implement an auto-save functionality. "),e._UZ(9,"br")(10,"br"),e.TgZ(11,"span",2),e._UZ(12,"img",3),e.TgZ(13,"span"),e._uU(14,"This feature is available only over secure connections (HTTPS) and through user interaction."),e.qZA()(),e._UZ(15,"br"),e.TgZ(16,"span",2),e._UZ(17,"img",4),e._uU(18," Active by default from Chrome 86. "),e.qZA(),e._uU(19," In older Chrome versions you might need to enable the related flag in Chrome to test it (chrome://flags/#native-file-system-api). "),e.qZA()(),e.YNc(20,x,17,3,"div",5),e.YNc(21,F,2,1,"ng-template",null,6,e.W1O),e.TgZ(23,"div",7)(24,"mat-accordion",8)(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title")(28,"h1"),e._uU(29,"Browser compatibility"),e.qZA()()(),e.YNc(30,Z,6,0,"ng-template",9),e.qZA()()()()),2&t){const s=e.MAs(22);e.xp6(20),e.Q6J("ngIf",!i.unsupportedText)("ngIfElse",s)}},dependencies:[p.O5,f.lW,h.a8,c.pp,c.ib,c.yz,c.yK,c.HS],styles:[".native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]{margin-bottom:1rem}.native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem}.native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:0}.native-demo[_ngcontent-%COMP%]   p.file-name[_ngcontent-%COMP%]{height:20px}.native-demo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}"]}),a})()}];let T=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(w),d.Bz]}),a})(),S=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,T,u.i]}),a})()}}]);