import{$ as R,C as G,G as K,Ia as ee,Ic as se,M as S,W as C,Z as Y,ca as T,ea as m,fa as v,i as q,na as Z,nb as ne,o as U,pa as Q,qa as H,s as P,u as W,wc as re,zc as te}from"./chunk-V5BQXA3S.js";var A=class{},D=class{},w=class e{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),o=s.toLowerCase(),a=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let s=(n.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let o=n.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var z=class{encodeKey(n){return oe(n)}encodeValue(n){return oe(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function ye(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[a,i]=o==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,o)),n.decodeValue(s.slice(o+1))],h=t.get(a)||[];h.push(i),t.set(a,h)}),t}var me=/%(\d[a-f0-9])/gi,ge={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function oe(e){return encodeURIComponent(e).replace(me,(n,t)=>ge[t]??n)}function M(e){return`${e}`}var g=class e{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new z,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ye(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],s=Array.isArray(r)?r.map(M):[M(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let s=n[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(M(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],s=r.indexOf(M(n.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var V=class{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Te(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ie(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function ae(e){return typeof Blob<"u"&&e instanceof Blob}function ce(e){return typeof FormData<"u"&&e instanceof FormData}function we(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var N=class e{constructor(n,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let o;if(Te(this.method)||s?(this.body=r!==void 0?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new w,this.context??=new V,!this.params)this.params=new g,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let i=t.indexOf("?"),h=i===-1?"?":i<t.length-1?"&":"";this.urlWithParams=t+h+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ie(this.body)||ae(this.body)||ce(this.body)||we(this.body)?this.body:this.body instanceof g?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ce(this.body)?null:ae(this.body)?this.body.type||null:ie(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof g?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,o=n.transferCache??this.transferCache,a=n.body!==void 0?n.body:this.body,i=n.withCredentials??this.withCredentials,h=n.reportProgress??this.reportProgress,c=n.headers||this.headers,f=n.params||this.params,I=n.context??this.context;return n.setHeaders!==void 0&&(c=Object.keys(n.setHeaders).reduce((p,y)=>p.set(y,n.setHeaders[y]),c)),n.setParams&&(f=Object.keys(n.setParams).reduce((p,y)=>p.set(y,n.setParams[y]),f)),new e(t,r,a,{params:f,headers:c,context:I,reportProgress:h,responseType:s,withCredentials:i,transferCache:o})}},b=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(b||{}),O=class{constructor(n,t=F.Ok,r="OK"){this.headers=n.headers||new w,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},X=class e extends O{constructor(n={}){super(n),this.type=b.ResponseHeader}clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},x=class e extends O{constructor(n={}){super(n),this.type=b.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},k=class extends O{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},F=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(F||{});function B(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Ee=(()=>{let n=class n{constructor(r){this.handler=r}request(r,s,o={}){let a;if(r instanceof N)a=r;else{let c;o.headers instanceof w?c=o.headers:c=new w(o.headers);let f;o.params&&(o.params instanceof g?f=o.params:f=new g({fromObject:o.params})),a=new N(r,s,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:f,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=U(a).pipe(K(c=>this.handler.handle(c)));if(r instanceof N||o.observe==="events")return i;let h=i.pipe(G(c=>c instanceof x));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return h.pipe(P(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return h.pipe(P(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return h.pipe(P(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return h.pipe(P(c=>c.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(r,s={}){return this.request("DELETE",r,s)}get(r,s={}){return this.request("GET",r,s)}head(r,s={}){return this.request("HEAD",r,s)}jsonp(r,s){return this.request("JSONP",r,{params:new g().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(r,s={}){return this.request("OPTIONS",r,s)}patch(r,s,o={}){return this.request("PATCH",r,B(o,s))}post(r,s,o={}){return this.request("POST",r,B(o,s))}put(r,s,o={}){return this.request("PUT",r,B(o,s))}};n.\u0275fac=function(s){return new(s||n)(m(A))},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})();function ve(e,n){return n(e)}function be(e,n,t){return(r,s)=>H(t,()=>n(r,o=>e(o,s)))}var he=new T(""),Pe=new T(""),Re=new T("");var le=(()=>{let n=class n extends A{constructor(r,s){super(),this.backend=r,this.injector=s,this.chain=null,this.pendingTasks=v(ne);let o=v(Re,{optional:!0});this.backend=o??r}handle(r){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(he),...this.injector.get(Pe,[])]));this.chain=o.reduceRight((a,i)=>be(a,i,this.injector),ve)}let s=this.pendingTasks.add();return this.chain(r,o=>this.backend.handle(o)).pipe(S(()=>this.pendingTasks.remove(s)))}};n.\u0275fac=function(s){return new(s||n)(m(D),m(Q))},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})();var Ne=/^\)\]\}',?\n/;function Ae(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var de=(()=>{let n=class n{constructor(r){this.xhrFactory=r}handle(r){if(r.method==="JSONP")throw new Y(-2800,!1);let s=this.xhrFactory;return(s.\u0275loadImpl?W(s.\u0275loadImpl()):U(null)).pipe(C(()=>new q(a=>{let i=s.build();if(i.open(r.method,r.urlWithParams),r.withCredentials&&(i.withCredentials=!0),r.headers.forEach((l,d)=>i.setRequestHeader(l,d.join(","))),r.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!r.headers.has("Content-Type")){let l=r.detectContentTypeHeader();l!==null&&i.setRequestHeader("Content-Type",l)}if(r.responseType){let l=r.responseType.toLowerCase();i.responseType=l!=="json"?l:"text"}let h=r.serializeBody(),c=null,f=()=>{if(c!==null)return c;let l=i.statusText||"OK",d=new w(i.getAllResponseHeaders()),E=Ae(i)||r.url;return c=new X({headers:d,status:i.status,statusText:l,url:E}),c},I=()=>{let{headers:l,status:d,statusText:E,url:$}=f(),u=null;d!==F.NoContent&&(u=typeof i.response>"u"?i.responseText:i.response),d===0&&(d=u?F.Ok:0);let L=d>=200&&d<300;if(r.responseType==="json"&&typeof u=="string"){let fe=u;u=u.replace(Ne,"");try{u=u!==""?JSON.parse(u):null}catch(pe){u=fe,L&&(L=!1,u={error:pe,text:u})}}L?(a.next(new x({body:u,headers:l,status:d,statusText:E,url:$||void 0})),a.complete()):a.error(new k({error:u,headers:l,status:d,statusText:E,url:$||void 0}))},p=l=>{let{url:d}=f(),E=new k({error:l,status:i.status||0,statusText:i.statusText||"Unknown Error",url:d||void 0});a.error(E)},y=!1,_=l=>{y||(a.next(f()),y=!0);let d={type:b.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),r.responseType==="text"&&i.responseText&&(d.partialText=i.responseText),a.next(d)},J=l=>{let d={type:b.UploadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),a.next(d)};return i.addEventListener("load",I),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),r.reportProgress&&(i.addEventListener("progress",_),h!==null&&i.upload&&i.upload.addEventListener("progress",J)),i.send(h),a.next({type:b.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",I),i.removeEventListener("timeout",p),r.reportProgress&&(i.removeEventListener("progress",_),h!==null&&i.upload&&i.upload.removeEventListener("progress",J)),i.readyState!==i.DONE&&i.abort()}})))}};n.\u0275fac=function(s){return new(s||n)(m(se))},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})(),ue=new T(""),Oe="XSRF-TOKEN",Ie=new T("",{providedIn:"root",factory:()=>Oe}),Me="X-XSRF-TOKEN",De=new T("",{providedIn:"root",factory:()=>Me}),j=class{},xe=(()=>{let n=class n{constructor(r,s,o){this.doc=r,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let r=this.doc.cookie||"";return r!==this.lastCookieString&&(this.parseCount++,this.lastToken=te(r,this.cookieName),this.lastCookieString=r),this.lastToken}};n.\u0275fac=function(s){return new(s||n)(m(re),m(ee),m(Ie))},n.\u0275prov=R({token:n,factory:n.\u0275fac});let e=n;return e})();function ke(e,n){let t=e.url.toLowerCase();if(!v(ue)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let r=v(j).getToken(),s=v(De);return r!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}function on(...e){let n=[Ee,de,le,{provide:A,useExisting:le},{provide:D,useExisting:de},{provide:he,useValue:ke,multi:!0},{provide:ue,useValue:!0},{provide:j,useClass:xe}];for(let t of e)n.push(...t.\u0275providers);return Z(n)}export{Ee as a,on as b};
