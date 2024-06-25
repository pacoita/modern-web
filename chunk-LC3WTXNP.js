import{a as B,d as ie,e as oe,h as P,i as M,j as ae}from"./chunk-4XVAJ4KQ.js";import{$a as s,A as pe,Ab as I,Bb as ye,C as D,Ca as j,Da as p,Ea as ge,Fb as be,Ib as J,Ja as $,Kb as we,L as he,Lb as ee,Mb as m,Nb as te,Ob as De,Pb as V,Qb as z,Uc as Ee,V as U,Zb as f,Zc as Ie,_a as H,_b as ne,aa as v,bb as G,bd as Ae,ca as _,cd as Pe,db as xe,g as N,ib as O,j as w,ja as l,jb as C,ka as q,kb as u,kc as A,la as y,ma as h,mc as g,n as le,nc as Ce,ob as W,pb as Z,qb as S,rb as ve,sa as k,sb as E,ta as K,ua as X,va as ue,vb as _e,wc as L,xa as Y,ya as me,za as fe,zb as b}from"./chunk-V5BQXA3S.js";var Qe=0,re=new _("CdkAccordion"),Fe=(()=>{let e=class e{constructor(){this._stateChanges=new w,this._openCloseAllActions=new w,this.id=`cdk-accordion-${Qe++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=h({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[l.HasDecoratorInputTransform,"multi","multi",g]},exportAs:["cdkAccordion"],standalone:!0,features:[f([{provide:re,useExisting:e}]),u,k]});let i=e;return i})(),Ue=0,Te=(()=>{let e=class e{get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(t,n,o){this.accordion=t,this._changeDetectorRef=n,this._expansionDispatcher=o,this._openCloseAllSubscription=N.EMPTY,this.closed=new p,this.opened=new p,this.destroyed=new p,this.expandedChange=new p,this.id=`cdk-accordion-child-${Ue++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=o.listen((r,a)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===a&&this.id!==r&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}};e.\u0275fac=function(n){return new(n||e)(s(re,12),s(A),s(B))},e.\u0275dir=h({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[l.HasDecoratorInputTransform,"expanded","expanded",g],disabled:[l.HasDecoratorInputTransform,"disabled","disabled",g]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[f([{provide:re,useValue:void 0}]),u]});let i=e;return i})(),Re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({});let i=e;return i})();var F=class{attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},se=class extends F{constructor(e,c,t,n,o){super(),this.component=e,this.viewContainerRef=c,this.injector=t,this.componentFactoryResolver=n,this.projectableNodes=o}},T=class extends F{constructor(e,c,t,n){super(),this.templateRef=e,this.viewContainerRef=c,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(e,c=this.context){return this.context=c,super.attach(e)}detach(){return this.context=void 0,super.detach()}},de=class extends F{constructor(e){super(),this.element=e instanceof j?e.nativeElement:e}},Q=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof se)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof T)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof de)return this._attachedPortal=e,this.attachDomPortal(e)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ne=class extends Q{constructor(e,c,t,n,o){super(),this.outletElement=e,this._componentFactoryResolver=c,this._appRef=t,this._defaultInjector=n,this.attachDomPortal=r=>{this._document;let a=r.element;a.parentNode;let d=this._document.createComment("dom-portal");a.parentNode.insertBefore(d,a),this.outletElement.appendChild(a),this._attachedPortal=r,super.setDisposeFn(()=>{d.parentNode&&d.parentNode.replaceChild(a,d)})},this._document=o}attachComponentPortal(e){let t=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),n;return e.viewContainerRef?(n=e.viewContainerRef.createComponent(t,e.viewContainerRef.length,e.injector||e.viewContainerRef.injector,e.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=t.create(e.injector||this._defaultInjector||fe.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=e,n}attachTemplatePortal(e){let c=e.viewContainerRef,t=c.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=c.indexOf(t);n!==-1&&c.remove(n)}),this._attachedPortal=e,t}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var ke=(()=>{let e=class e extends Q{constructor(t,n,o){super(),this._componentFactoryResolver=t,this._viewContainerRef=n,this._isInitialized=!1,this.attached=new p,this.attachDomPortal=r=>{this._document;let a=r.element;a.parentNode;let d=this._document.createComment("dom-portal");r.setAttachedHost(this),a.parentNode.insertBefore(d,a),this._getRootNode().appendChild(a),this._attachedPortal=r,super.setDisposeFn(()=>{d.parentNode&&d.parentNode.replaceChild(a,d)})},this._document=o}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let n=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,r=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),a=n.createComponent(r,n.length,t.injector||n.injector,t.projectableNodes||void 0);return n!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(t){t.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}};e.\u0275fac=function(n){return new(n||e)(s(xe),s(O),s(L))},e.\u0275dir=h({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[l.None,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[C]});let i=e;return i})();var je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({});let i=e;return i})();var Xe=["body"],Ye=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],$e=["mat-expansion-panel-header","*","mat-action-row"];function Ge(i,e){}var We=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ze=["mat-panel-title","mat-panel-description","*"];function Je(i,e){if(i&1&&(b(0,"span",1),ue(),b(1,"svg",2),ye(2,"path",3),I()()),i&2){let c=we();S("@indicatorRotate",c._getExpandedState())}}var ce=new _("MAT_ACCORDION"),He="225ms cubic-bezier(0.4,0.0,0.2,1)",Se={indicatorRotate:ie("indicatorRotate",[M("collapsed, void",P({transform:"rotate(0deg)"})),M("expanded",P({transform:"rotate(180deg)"})),ae("expanded <=> collapsed, void => collapsed",oe(He))]),bodyExpansion:ie("bodyExpansion",[M("collapsed, void",P({height:"0px",visibility:"hidden"})),M("expanded",P({height:"*",visibility:""})),ae("expanded <=> collapsed, void => collapsed",oe(He))])},Ve=new _("MAT_EXPANSION_PANEL"),et=(()=>{let e=class e{constructor(t,n){this._template=t,this._expansionPanel=n}};e.\u0275fac=function(n){return new(n||e)(s(G),s(Ve,8))},e.\u0275dir=h({type:e,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let i=e;return i})(),tt=0,ze=new _("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),nt=(()=>{let e=class e extends Te{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,n,o,r,a,d,R){super(t,n,o),this._viewContainerRef=r,this._animationMode=d,this._hideToggle=!1,this.afterExpand=new p,this.afterCollapse=new p,this._inputChanges=new w,this._headerId=`mat-expansion-panel-header-${tt++}`,this.accordion=t,this._document=a,this._animationsDisabled=d==="NoopAnimations",R&&(this.hideToggle=R.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(U(null),D(()=>this.expanded&&!this._portal),he(1)).subscribe(()=>{this._portal=new T(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,n=this._body.nativeElement;return t===n||n.contains(t)}return!1}_animationStarted(t){!Oe(t)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(t){Oe(t)||(t.toState==="expanded"?this.afterExpand.emit():t.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};e.\u0275fac=function(n){return new(n||e)(s(ce,12),s(A),s(B),s(O),s(L),s($,8),s(ze,8))},e.\u0275cmp=q({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(n,o,r){if(n&1&&te(r,et,5),n&2){let a;V(a=z())&&(o._lazyContent=a.first)}},viewQuery:function(n,o){if(n&1&&De(Xe,5),n&2){let r;V(r=z())&&(o._body=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(n,o){n&2&&E("mat-expanded",o.expanded)("_mat-animation-noopable",o._animationsDisabled)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[l.HasDecoratorInputTransform,"hideToggle","hideToggle",g],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[f([{provide:ce,useValue:void 0},{provide:Ve,useExisting:e}]),u,C,k,ne],ngContentSelectors:$e,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,o){if(n&1){let r=be();ee(Ye),m(0),b(1,"div",1,0),J("@bodyExpansion.start",function(d){return K(r),X(o._animationStarted(d))})("@bodyExpansion.done",function(d){return K(r),X(o._animationDone(d))}),b(3,"div",2),m(4,1),W(5,Ge,0,0,"ng-template",3),I(),m(6,2),I()}n&2&&(H(),S("@bodyExpansion",o._getExpandedState())("id",o.id),Z("aria-labelledby",o._headerId),H(4),S("cdkPortalOutlet",o._portal))},dependencies:[ke],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[Se.bodyExpansion]},changeDetection:0});let i=e;return i})();function Oe(i){return i.fromState==="void"}var it=(()=>{let e=class e{constructor(t,n,o,r,a,d,R){this.panel=t,this._element=n,this._focusMonitor=o,this._changeDetectorRef=r,this._animationMode=d,this._parentChangeSubscription=N.EMPTY,this.tabIndex=0;let Le=t.accordion?t.accordion._stateChanges.pipe(D(x=>!!(x.hideToggle||x.togglePosition))):le;this.tabIndex=parseInt(R||"")||0,this._parentChangeSubscription=pe(t.opened,t.closed,Le,t._inputChanges.pipe(D(x=>!!(x.hideToggle||x.disabled||x.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(D(()=>t._containsFocus())).subscribe(()=>o.focusVia(n,"program")),a&&(this.expandedHeight=a.expandedHeight,this.collapsedHeight=a.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:Ee(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,n){t?this._focusMonitor.focusVia(this._element,t,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};e.\u0275fac=function(n){return new(n||e)(s(nt,1),s(j),s(Ae),s(A),s(ze,8),s($,8),me("tabindex"))},e.\u0275cmp=q({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(n,o){n&1&&J("click",function(){return o._toggle()})("keydown",function(a){return o._keydown(a)}),n&2&&(Z("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),ve("height",o._getHeaderHeight()),E("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before")("_mat-animation-noopable",o._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[l.HasDecoratorInputTransform,"tabIndex","tabIndex",t=>t==null?0:Ce(t)]},standalone:!0,features:[u,ne],ngContentSelectors:Ze,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,o){n&1&&(ee(We),b(0,"span",0),m(1),m(2,1),m(3,2),I(),W(4,Je,3,1,"span",1)),n&2&&(E("mat-content-hide-toggle",!o._showToggle()),H(4),_e(4,o._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[Se.indicatorRotate]},changeDetection:0});let i=e;return i})();var Yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=h({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let i=e;return i})(),$t=(()=>{let e=class e extends Fe{constructor(){super(...arguments),this._ownHeaders=new ge,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe(U(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Ie(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=Y(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["mat-accordion"]],contentQueries:function(n,o,r){if(n&1&&te(r,it,5),n&2){let a;V(a=z())&&(o._headers=a)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,o){n&2&&E("mat-accordion-multi",o.multi)},inputs:{hideToggle:[l.HasDecoratorInputTransform,"hideToggle","hideToggle",g],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[f([{provide:ce,useExisting:e}]),u,C]});let i=e;return i})(),Gt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[Pe,Re,je]});let i=e;return i})();export{se as a,T as b,Q as c,Ne as d,ke as e,je as f,et as g,nt as h,it as i,Yt as j,$t as k,Gt as l};
