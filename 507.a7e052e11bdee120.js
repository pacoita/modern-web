"use strict";(self.webpackChunkmodern_web=self.webpackChunkmodern_web||[]).push([[507],{6507:(Z,_,a)=>{a.r(_),a.d(_,{FileSystemComponent:()=>T});var l=a(5861),r=a(3305),m=a(2296),d=a(6814),p=a(5195),e=a(9212),u=a(6593);const g=["textbox"];function f(o,c){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const t=e.oxw(2);e.xp6(1),e.hij("File opened: ",t.fileHandle.name,"")}}function h(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t),e.oxw();const i=e.MAs(12),s=e.oxw();return e.KtG(s.saveFile(i.value))}),e._UZ(1,"img",22),e._uU(2," Save "),e.qZA()}}function v(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"p",11),e.YNc(2,f,2,1,"ng-container",12),e.qZA(),e.TgZ(3,"div",13)(4,"button",14),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openFile())}),e._UZ(5,"img",15),e._uU(6," Open "),e.qZA(),e.TgZ(7,"button",14),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(12),s=e.oxw();return e.KtG(s.saveAs(i.value))}),e._UZ(8,"img",16),e._uU(9," Save as "),e.qZA(),e.YNc(10,h,3,0,"button",17),e.qZA(),e._UZ(11,"textarea",18,19),e.TgZ(13,"cite"),e._uU(14,"For demo purposes, only .txt files are accepted."),e.qZA(),e.TgZ(15,"p",20),e._uU(16),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.fileHandle),e.xp6(8),e.Q6J("ngIf",t.fileHandle),e.xp6(6),e.hij(" ",t.errorText," ")}}function x(o,c){if(1&o&&(e.TgZ(0,"h2"),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.unsupportedText)}}function y(o,c){1&o&&(e.TgZ(0,"div",23),e._UZ(1,"img",24),e.qZA(),e._UZ(2,"br")(3,"br"),e.TgZ(4,"a",25),e._uU(5,"Source: can I use"),e.qZA())}let T=(()=>{class o{constructor(t){this.titleService=t,this.titleService.setTitle("File System")}ngOnInit(){!("chooseFileSystemEntries"in window)&&!("showOpenFilePicker"in window)&&(this.unsupportedText="Your browser does not support File System Access API or you did not activate the Chrome flag.")}ngAfterViewInit(){this.textAreaElement=this.textarea.nativeElement}openFile(){var t=this;return(0,l.Z)(function*(){try{t.fileHandle=yield t.getFileHandle();const n=yield t.fileHandle.getFile();t.textAreaElement.value=yield n.text()}catch(n){t.errorText=n.message,console.error(n)}})()}saveFile(t){var n=this;return(0,l.Z)(function*(){try{if(!n.fileHandle)return yield n.saveAs(t);yield n.writeTextFile(n.fileHandle,t)}catch(i){n.errorText=i.message,console.error(i)}})()}saveAs(t){var n=this;return(0,l.Z)(function*(){try{n.fileHandle=yield n.getNewFileHandle(),yield n.writeTextFile(n.fileHandle,t)}catch(i){n.errorText=i.message,console.error(i)}})()}writeTextFile(t,n){return(0,l.Z)(function*(){const i=yield t.createWritable();i.write(n),i.close()})()}getFileHandle(){var t=this;return(0,l.Z)(function*(){const n=t.getFilePickerOptions();return window.showOpenFilePicker(n).then(i=>i[0])})()}getNewFileHandle(){let t={};return t=this.getFilePickerOptions(),window.showSaveFilePicker(t)}getFilePickerOptions(t="open-file"){return"showSaveFilePicker"in window?{types:[{description:"Text files",accept:{"text/plain":[".txt"]}}]}:{type:t,accepts:[{description:"Text files",mimeTypes:["text/plain"],extensions:["txt"]}]}}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(u.Dx))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-file-system"]],viewQuery:function(n,i){if(1&n&&e.Gf(g,5),2&n){let s;e.iGM(s=e.CRH())&&(i.textarea=s.first)}},standalone:!0,features:[e.jDz],decls:31,vars:2,consts:[[1,"content"],[1,"descr-card"],[1,"flex-centered"],["src","assets/icons/lock.png","width","24","height","24","alt","lock icon",1,"icon-space"],["src","assets/icons/warning.png","width","24","height","24","alt","warning icon",1,"icon-space"],["class","native-demo",4,"ngIf","ngIfElse"],["noSupported",""],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],[1,"native-demo"],[1,"file-name"],[4,"ngIf"],[1,"action-bar"],["mat-raised-button","",3,"click"],["src","assets/icons/folder_open.png","width","24","height","24","alt","folder_open icon",1,"icon-space"],["src","assets/icons/playlist_add.png","width","24","height","24","alt","playlist_add icon",1,"icon-space"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["name","textbox","id","textbox","rows","15","placeholder"," Start digiting your biography and save it for the future generations... \u{1f447}"],["textbox",""],[1,"error"],["color","primary","mat-raised-button","",3,"click"],["src","assets/icons/save.png","width","24","height","24","alt","save icon",1,"icon-space"],[1,"img-container"],["src","assets/images/native-file.png","alt","Native File System api support"],["href","https://caniuse.com/native-filesystem-api","target","_blank"]],template:function(n,i){if(1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2,"File System Access API"),e.qZA(),e.TgZ(3,"mat-card",1)(4,"p"),e._uU(5,"The "),e.TgZ(6,"strong"),e._uU(7,"File System Access API"),e.qZA(),e._uU(8," offers new features to manipulate local files providing an improved experience to our users like a native app. We don't have to download the file each time we want to edit it, but we can save it directly. We can even implement an auto-save functionality. "),e._UZ(9,"br")(10,"br"),e.TgZ(11,"span",2),e._UZ(12,"img",3),e.TgZ(13,"span"),e._uU(14,"This feature is available only over secure connections (HTTPS) and through user interaction."),e.qZA()(),e._UZ(15,"br"),e.TgZ(16,"span",2),e._UZ(17,"img",4),e._uU(18," Active by default from Chrome 86. "),e.qZA(),e._uU(19," In older Chrome versions you might need to enable the related flag in Chrome to test it (chrome://flags/#native-file-system-api). "),e.qZA()(),e.YNc(20,v,17,3,"div",5)(21,x,2,1,"ng-template",null,6,e.W1O),e.TgZ(23,"div",7)(24,"mat-accordion",8)(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title")(28,"h1"),e._uU(29,"Browser compatibility"),e.qZA()()(),e.YNc(30,y,6,0,"ng-template",9),e.qZA()()()()),2&n){const s=e.MAs(22);e.xp6(20),e.Q6J("ngIf",!i.unsupportedText)("ngIfElse",s)}},dependencies:[p.QW,p.a8,d.O5,m.ot,m.lW,r.To,r.pp,r.ib,r.yz,r.yK,r.HS],styles:[".native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]{margin-bottom:1rem}.native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem}.native-demo[_ngcontent-%COMP%]   .action-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:0}.native-demo[_ngcontent-%COMP%]   p.file-name[_ngcontent-%COMP%]{height:20px}.native-demo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}"]})}return o})()}}]);