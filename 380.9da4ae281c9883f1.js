"use strict";(self.webpackChunkmodern_web=self.webpackChunkmodern_web||[]).push([[380],{4380:(M,p,r)=>{r.r(p),r.d(p,{VibrationModule:()=>I});var m=r(6814),g=r(2164),a=r(6223);const f_H=["1","3"];var t=r(9212),b=r(6593),_=r(2296),h=r(5195),u=r(3290),d=r(7466),c=r(3305);function Z(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.verify(e.firstFormGroup,0))}),t._uU(1,"Verify"),t.qZA()}}function v(n,s){if(1&n&&(t.TgZ(0,"div",22),t._uU(1),t.qZA(),t.TgZ(2,"button",23),t._uU(3,"Next question"),t.qZA()),2&n){const o=t.oxw(2);t.Q6J("ngClass",o.answers[0]?"correct":"wrong"),t.xp6(1),t.hij(" ",o.answers[0]?"Correct, you can even use Campari instead of Aperol!":"Oh, that is wrong...","")}}function A(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.verify(e.secondFormGroup,1))}),t._uU(1,"Verify"),t.qZA()}}function T(n,s){if(1&n&&(t.TgZ(0,"div",22),t._uU(1),t.qZA(),t.TgZ(2,"button",23),t._uU(3,"See results"),t.qZA()),2&n){const o=t.oxw(2);t.Q6J("ngClass",o.answers[1]?"correct":"wrong"),t.xp6(1),t.hij(" ",o.answers[1]?"Correct, yay!!":"Oh, that is wrong...","")}}function w(n,s){1&n&&t._uU(0,"Done")}function C(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"mat-horizontal-stepper",8,9)(3,"mat-step",10)(4,"form",11)(5,"strong"),t._uU(6,"What's the name of the most famous Aperitiv cocktail in Italy?"),t.qZA(),t.TgZ(7,"mat-radio-group",12)(8,"mat-radio-button",13),t._uU(9,"Aperol Spritz"),t.qZA(),t.TgZ(10,"mat-radio-button",14),t._uU(11,"Orange juice"),t.qZA(),t.TgZ(12,"mat-radio-button",15),t._uU(13,"Mojito"),t.qZA(),t.TgZ(14,"mat-radio-button",16),t._uU(15,"Espresso"),t.qZA()(),t.TgZ(16,"div"),t.YNc(17,Z,2,0,"button",17)(18,v,4,2,"ng-template",null,18,t.W1O),t.qZA()()(),t.TgZ(20,"mat-step",10)(21,"form",11)(22,"strong"),t._uU(23,"Which animal has been used for the Firefox browser logo?"),t.qZA(),t.TgZ(24,"mat-radio-group",12)(25,"mat-radio-button",13),t._uU(26,"Wolf"),t.qZA(),t.TgZ(27,"mat-radio-button",14),t._uU(28,"Fox"),t.qZA(),t.TgZ(29,"mat-radio-button",15),t._uU(30,"Red panda"),t.qZA(),t.TgZ(31,"mat-radio-button",16),t._uU(32,"Wild cat"),t.qZA()(),t.TgZ(33,"div"),t.YNc(34,A,2,0,"button",17)(35,T,4,2,"ng-template",null,19,t.W1O),t.qZA()()(),t.TgZ(37,"mat-step"),t.YNc(38,w,1,0,"ng-template",20),t.TgZ(39,"strong"),t._uU(40),t.qZA()()(),t.BQk()),2&n){const o=t.MAs(19),i=t.MAs(36),e=t.oxw();t.xp6(1),t.Q6J("linear",!0),t.xp6(2),t.Q6J("stepControl",e.firstFormGroup),t.xp6(1),t.Q6J("formGroup",e.firstFormGroup),t.xp6(13),t.Q6J("ngIf",void 0===e.answers[0])("ngIfElse",o),t.xp6(3),t.Q6J("stepControl",e.secondFormGroup),t.xp6(1),t.Q6J("formGroup",e.secondFormGroup),t.xp6(13),t.Q6J("ngIf",void 0===e.answers[1])("ngIfElse",i),t.xp6(6),t.hij("You concluded the quiz with a score of: ",e.finalScore," of 2!")}}function x(n,s){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Quiz loading..."),t.qZA())}function U(n,s){1&n&&(t.TgZ(0,"div",24),t._UZ(1,"img",25),t.qZA(),t._UZ(2,"br")(3,"br"),t.TgZ(4,"a",26),t._uU(5,"Source: can I use"),t.qZA())}const q=[{path:"",component:(()=>{class n{constructor(o,i){this.fb=o,this.titleService=i,this.correctAnswerPattern=[100,30,100,30,100],this.wrongAnswerPattern=[700],this.finalScore=0,this.solutions=f_H,this.answers=[],this.titleService.setTitle("Vibration")}ngOnInit(){this.firstFormGroup=this.fb.group({question:["",a.kI.required]}),this.secondFormGroup=this.fb.group({question:["",a.kI.required]})}verify(o,i){const e=o.get("question")?.value===this.solutions[i];let l=this.wrongAnswerPattern;e&&(this.finalScore=++this.finalScore,l=this.correctAnswerPattern),window.navigator.vibrate(l),this.answers[i]=e,o.disable()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(a.QS),t.Y36(b.Dx))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-vibration"]],decls:35,vars:2,consts:[[1,"content"],[1,"descr-card"],[1,"demo-instruction"],[4,"ngIf","ngIfElse"],["loading",""],[1,"accordion-container"],["multi","",1,"example-headers-align"],["matExpansionPanelContent",""],["editable","false",1,"descr-card",3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["aria-label","Select an option","formControlName","question",1,"questions"],["value","1",1,"radio-button"],["value","2",1,"radio-button"],["value","3",1,"radio-button"],["value","4",1,"radio-button"],["mat-raised-button","",3,"click",4,"ngIf","ngIfElse"],["goTo2",""],["finish",""],["matStepLabel",""],["mat-raised-button","",3,"click"],[1,"answer",3,"ngClass"],["mat-raised-button","","color","primary","matStepperNext",""],[1,"img-container"],["src","assets/images/vibration.png","alt","Vibration api support"],["href","https://caniuse.com/vibration","target","_blank"]],template:function(i,e){if(1&i&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2,"Vibration API"),t.qZA(),t.TgZ(3,"mat-card",1)(4,"p"),t._uU(5,"The vibration API offers the "),t.TgZ(6,"strong"),t._uU(7,"navigator.vibrate()"),t.qZA(),t._uU(8," method to interact with the vibration hardware on the device, if available. "),t._UZ(9,"br"),t._uU(10," It is possible to define a single vibration or a more complex pattern, composed by vibrations and pauses. "),t.qZA()(),t.TgZ(11,"div",2)(12,"p"),t._uU(13," A small quiz to test the Vibration API"),t.qZA(),t.TgZ(14,"p")(15,"strong"),t._uU(16,"Correct answer"),t.qZA(),t._uU(17," --\x3e your device will emit 3 short vibrations"),t.qZA(),t.TgZ(18,"p")(19,"strong"),t._uU(20,"Wrong answer"),t.qZA(),t._uU(21," --\x3e your device will vibrate just once for a long period"),t.qZA(),t.TgZ(22,"p"),t._uU(23," (Note: Vibration will work only on the compatble browsers and devices with vibration hardware)"),t.qZA()(),t.YNc(24,C,41,10,"ng-container",3)(25,x,2,0,"ng-template",null,4,t.W1O),t.TgZ(27,"div",5)(28,"mat-accordion",6)(29,"mat-expansion-panel")(30,"mat-expansion-panel-header")(31,"mat-panel-title")(32,"h1"),t._uU(33,"Browser compatibility"),t.qZA()()(),t.YNc(34,U,6,0,"ng-template",7),t.qZA()()()()),2&i){const l=t.MAs(26);t.xp6(24),t.Q6J("ngIf",e.firstFormGroup&&e.secondFormGroup)("ngIfElse",l)}},dependencies:[m.mk,m.O5,_.lW,h.a8,u.C0,u.VY,u.Vq,u.Ic,d.VQ,d.U0,c.pp,c.ib,c.yz,c.yK,c.HS,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".demo-instruction[_ngcontent-%COMP%]{margin:1.5rem .5rem}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:1rem}.questions[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:1rem 0 2rem}.questions[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]{margin:.5rem}.answer[_ngcontent-%COMP%]{padding:1.5rem 0;font-weight:700}.answer.correct[_ngcontent-%COMP%]{color:green}.answer.wrong[_ngcontent-%COMP%]{color:red}"]})}return n})()}];let y=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(q),g.Bz]})}return n})();var V=r(8903);let I=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[m.ez,y,V.i,a.UX]})}return n})()}}]);