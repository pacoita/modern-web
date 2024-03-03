import{a as L}from"./chunk-OFTKMGOF.js";import{$a as xe,Ab as H,Ba as ue,Bb as ye,Bc as Ce,Ca as R,Cb as J,Db as S,Ec as Ee,Fa as T,Ga as r,H as pe,I as he,Ia as w,Ja as d,La as y,Ma as K,Mb as V,Na as $,Oa as N,Ob as Z,Pa as fe,Qa as D,S as U,Sb as z,Ta as j,Ua as X,Va as ge,Z as x,Za as k,_a as O,aa as v,d as I,da as B,ea as _,fa as l,fc as be,g,ga as F,hb as Y,jb as ve,k as ce,kb as W,kc as we,la as Q,lb as u,ma as me,nc as De,rb as f,sc as ee,tc as te,va as q,vc as C,wc as E,x as le,xc as ie,yb as _e,z as b,zb as G}from"./chunk-TX2EYQ2R.js";var He=0,ne=new v("CdkAccordion"),Pe=(()=>{let e=class e{constructor(){this._stateChanges=new g,this._openCloseAllActions=new g,this.id=`cdk-accordion-${He++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=l({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:["multi","multi",V]},exportAs:["cdkAccordion"],features:[f([{provide:ne,useExisting:e}]),K,F]});let n=e;return n})(),Se=0,Me=(()=>{let e=class e{get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(t,i,o){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=o,this._openCloseAllSubscription=I.EMPTY,this.closed=new d,this.opened=new d,this.destroyed=new d,this.expandedChange=new d,this.id=`cdk-accordion-child-${Se++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=o.listen((s,a)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===a&&this.id!==s&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}};e.\u0275fac=function(i){return new(i||e)(r(ne,12),r(w),r(L))},e.\u0275dir=l({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:["expanded","expanded",V],disabled:["disabled","disabled",V]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[f([{provide:ne,useValue:void 0}]),K]});let n=e;return n})(),Ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=x({});let n=e;return n})();var A=class{attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},oe=class extends A{constructor(e,m,t,i,o){super(),this.component=e,this.viewContainerRef=m,this.injector=t,this.componentFactoryResolver=i,this.projectableNodes=o}},P=class extends A{constructor(e,m,t,i){super(),this.templateRef=e,this.viewContainerRef=m,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(e,m=this.context){return this.context=m,super.attach(e)}detach(){return this.context=void 0,super.detach()}},ae=class extends A{constructor(e){super(),this.element=e instanceof R?e.nativeElement:e}},re=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof oe)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof P)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof ae)return this._attachedPortal=e,this.attachDomPortal(e)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Fe=(()=>{let e=class e extends re{constructor(t,i,o){super(),this._componentFactoryResolver=t,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new d,this.attachDomPortal=s=>{this._document;let a=s.element;a.parentNode;let p=this._document.createComment("dom-portal");s.setAttachedHost(this),a.parentNode.insertBefore(p,a),this._getRootNode().appendChild(a),this._attachedPortal=s,super.setDisposeFn(()=>{p.parentNode&&p.parentNode.replaceChild(a,p)})},this._document=o}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,s=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),a=i.createComponent(s,i.length,t.injector||i.injector,t.projectableNodes||void 0);return i!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}};e.\u0275fac=function(i){return new(i||e)(r(ue),r(j),r(z))},e.\u0275dir=l({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[y]});let n=e;return n})();var Re=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=x({});let n=e;return n})();var Ue=["body"];function Be(n,e){}var Qe=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],qe=["mat-expansion-panel-header","*","mat-action-row"];function Ke(n,e){if(n&1&&xe(0,"span",2),n&2){let m=ve();N("@indicatorRotate",m._getExpandedState())}}var $e=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Xe=["mat-panel-title","mat-panel-description","*"],se=new v("MAT_ACCORDION"),Te="225ms cubic-bezier(0.4,0.0,0.2,1)",Ne={indicatorRotate:ee("indicatorRotate",[E("collapsed, void",C({transform:"rotate(0deg)"})),E("expanded",C({transform:"rotate(180deg)"})),ie("expanded <=> collapsed, void => collapsed",te(Te))]),bodyExpansion:ee("bodyExpansion",[E("collapsed, void",C({height:"0px",visibility:"hidden"})),E("expanded",C({height:"*",visibility:""})),ie("expanded <=> collapsed, void => collapsed",te(Te))])},je=new v("MAT_EXPANSION_PANEL"),Ye=(()=>{let e=class e{constructor(t,i){this._template=t,this._expansionPanel=i}};e.\u0275fac=function(i){return new(i||e)(r(G),r(je,8))},e.\u0275dir=l({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]});let n=e;return n})(),We=0,ke=new v("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Ge=(()=>{let e=class e extends Me{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=Z(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,i,o,s,a,p,M){super(t,i,o),this._viewContainerRef=s,this._animationMode=p,this._hideToggle=!1,this.afterExpand=new d,this.afterCollapse=new d,this._inputChanges=new g,this._headerId=`mat-expansion-panel-header-${We++}`,this._bodyAnimationDone=new g,this.accordion=t,this._document=a,this._bodyAnimationDone.pipe(pe((h,c)=>h.fromState===c.fromState&&h.toState===c.toState)).subscribe(h=>{h.fromState!=="void"&&(h.toState==="expanded"?this.afterExpand.emit():h.toState==="collapsed"&&this.afterCollapse.emit())}),M&&(this.hideToggle=M.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(U(null),b(()=>this.expanded&&!this._portal),he(1)).subscribe(()=>{this._portal=new P(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}};e.\u0275fac=function(i){return new(i||e)(r(se,12),r(w),r(L),r(j),r(z),r(q,8),r(ke,8))},e.\u0275cmp=B({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(i,o,s){if(i&1&&J(s,Ye,5),i&2){let a;H(a=S())&&(o._lazyContent=a.first)}},viewQuery:function(i,o){if(i&1&&ye(Ue,5),i&2){let s;H(s=S())&&(o._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(i,o){i&2&&D("mat-expanded",o.expanded)("_mat-animation-noopable",o._animationMode==="NoopAnimations")("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[f([{provide:se,useValue:void 0},{provide:je,useExisting:e}]),y,F],ngContentSelectors:qe,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,o){i&1&&(W(Qe),u(0),k(1,"div",0,1),Y("@bodyExpansion.done",function(a){return o._bodyAnimationDone.next(a)}),k(3,"div",2),u(4,1),X(5,Be,0,0,"ng-template",3),O(),u(6,2),O()),i&2&&(T(1),N("@bodyExpansion",o._getExpandedState())("id",o.id),$("aria-labelledby",o._headerId),T(4),N("cdkPortalOutlet",o._portal))},dependencies:[Fe],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[Ne.bodyExpansion]},changeDetection:0});let n=e;return n})();var de=class{},Je=Ee(de),Ze=(()=>{let e=class e extends Je{constructor(t,i,o,s,a,p,M){super(),this.panel=t,this._element=i,this._focusMonitor=o,this._changeDetectorRef=s,this._animationMode=p,this._parentChangeSubscription=I.EMPTY;let h=t.accordion?t.accordion._stateChanges.pipe(b(c=>!!(c.hideToggle||c.togglePosition))):ce;this.tabIndex=parseInt(M||"")||0,this._parentChangeSubscription=le(t.opened,t.closed,h,t._inputChanges.pipe(b(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(b(()=>t._containsFocus())).subscribe(()=>o.focusVia(i,"program")),a&&(this.expandedHeight=a.expandedHeight,this.collapsedHeight=a.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:be(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};e.\u0275fac=function(i){return new(i||e)(r(Ge,1),r(R),r(De),r(w),r(ke,8),r(q,8),me("tabindex"))},e.\u0275cmp=B({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(i,o){i&1&&Y("click",function(){return o._toggle()})("keydown",function(a){return o._keydown(a)}),i&2&&($("id",o.panel._headerId)("tabindex",o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),fe("height",o._getHeaderHeight()),D("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before")("_mat-animation-noopable",o._animationMode==="NoopAnimations"))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[y],ngContentSelectors:Xe,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator"],[1,"mat-expansion-indicator"]],template:function(i,o){i&1&&(W($e),k(0,"span",0),u(1),u(2,1),u(3,2),O(),X(4,Ke,1,1,"span",1)),i&2&&(D("mat-content-hide-toggle",!o._showToggle()),T(4),ge(4,o._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[Ne.indicatorRotate]},changeDetection:0});let n=e;return n})();var qt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=l({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]});let n=e;return n})(),Kt=(()=>{let e=class e extends Pe{constructor(){super(...arguments),this._ownHeaders=new _e,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(t){this._hideToggle=Z(t)}ngAfterContentInit(){this._headers.changes.pipe(U(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new we(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=Q(e)))(o||e)}})(),e.\u0275dir=l({type:e,selectors:[["mat-accordion"]],contentQueries:function(i,o,s){if(i&1&&J(s,Ze,5),i&2){let a;H(a=S())&&(o._headers=a)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,o){i&2&&D("mat-accordion-multi",o.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[f([{provide:se,useExisting:e}]),y]});let n=e;return n})(),$t=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=_({type:e}),e.\u0275inj=x({imports:[Ce,Ie,Re]});let n=e;return n})();export{P as a,Fe as b,Re as c,Ye as d,Ge as e,Ze as f,qt as g,Kt as h,$t as i};