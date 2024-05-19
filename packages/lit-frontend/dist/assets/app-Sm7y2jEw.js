(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=globalThis,Rt=Qe.ShadowRoot&&(Qe.ShadyCSS===void 0||Qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),tr=new WeakMap;let Ir=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Rt&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=tr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&tr.set(t,e))}return e}toString(){return this.cssText}};const Oi=r=>new Ir(typeof r=="string"?r:r+"",void 0,kt),O=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,n,a)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[a+1],r[0]);return new Ir(t,r,kt)},Ui=(r,e)=>{if(Rt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),n=Qe.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,r.appendChild(s)}},rr=Rt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Oi(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ii,defineProperty:Bi,getOwnPropertyDescriptor:Ri,getOwnPropertyNames:ki,getOwnPropertySymbols:Fi,getPrototypeOf:Di}=Object,X=globalThis,ir=X.trustedTypes,Mi=ir?ir.emptyScript:"",$t=X.reactiveElementPolyfillSupport,Oe=(r,e)=>r,tt={toAttribute(r,e){switch(e){case Boolean:r=r?Mi:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ft=(r,e)=>!Ii(r,e),sr={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:Ft};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),X.litPropertyMetadata??(X.litPropertyMetadata=new WeakMap);class ge extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Bi(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){const{get:n,set:a}=Ri(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return n==null?void 0:n.call(this)},set(l){const u=n==null?void 0:n.call(this);a.call(this,l),this.requestUpdate(e,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sr}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;const e=Di(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){const t=this.properties,s=[...ki(t),...Fi(t)];for(const n of s)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(rr(n))}else e!==void 0&&t.push(rr(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ui(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var a;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const l=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:tt).toAttribute(t,s.type);this._$Em=e,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Em=null}}_$AK(e,t){var a;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const l=s.getPropertyOptions(n),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:tt;this._$Em=n,this[n]=u.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ft)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[a,l]of n)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(n=>{var a;return(a=n.hostUpdate)==null?void 0:a.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}ge.elementStyles=[],ge.shadowRootOptions={mode:"open"},ge[Oe("elementProperties")]=new Map,ge[Oe("finalized")]=new Map,$t==null||$t({ReactiveElement:ge}),(X.reactiveElementVersions??(X.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=globalThis,rt=Ue.trustedTypes,nr=rt?rt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Br="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Rr="?"+Q,Li=`<${Rr}>`,se=document,Be=()=>se.createComment(""),Re=r=>r===null||typeof r!="object"&&typeof r!="function",kr=Array.isArray,ji=r=>kr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",At=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,or=/-->/g,ar=/>/g,re=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cr=/'/g,lr=/"/g,Fr=/^(?:script|style|textarea|title)$/i,Ni=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),v=Ni(1),ye=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),hr=new WeakMap,ie=se.createTreeWalker(se,129);function Dr(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return nr!==void 0?nr.createHTML(e):e}const zi=(r,e)=>{const t=r.length-1,s=[];let n,a=e===2?"<svg>":"",l=Te;for(let u=0;u<t;u++){const d=r[u];let g,b,y=-1,_=0;for(;_<d.length&&(l.lastIndex=_,b=l.exec(d),b!==null);)_=l.lastIndex,l===Te?b[1]==="!--"?l=or:b[1]!==void 0?l=ar:b[2]!==void 0?(Fr.test(b[2])&&(n=RegExp("</"+b[2],"g")),l=re):b[3]!==void 0&&(l=re):l===re?b[0]===">"?(l=n??Te,y=-1):b[1]===void 0?y=-2:(y=l.lastIndex-b[2].length,g=b[1],l=b[3]===void 0?re:b[3]==='"'?lr:cr):l===lr||l===cr?l=re:l===or||l===ar?l=Te:(l=re,n=void 0);const w=l===re&&r[u+1].startsWith("/>")?" ":"";a+=l===Te?d+Li:y>=0?(s.push(g),d.slice(0,y)+Br+d.slice(y)+Q+w):d+Q+(y===-2?u:w)}return[Dr(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class ke{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let a=0,l=0;const u=e.length-1,d=this.parts,[g,b]=zi(e,t);if(this.el=ke.createElement(g,s),ie.currentNode=this.el.content,t===2){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(n=ie.nextNode())!==null&&d.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const y of n.getAttributeNames())if(y.endsWith(Br)){const _=b[l++],w=n.getAttribute(y).split(Q),k=/([.?@])?(.*)/.exec(_);d.push({type:1,index:a,name:k[2],strings:w,ctor:k[1]==="."?qi:k[1]==="?"?Vi:k[1]==="@"?Wi:dt}),n.removeAttribute(y)}else y.startsWith(Q)&&(d.push({type:6,index:a}),n.removeAttribute(y));if(Fr.test(n.tagName)){const y=n.textContent.split(Q),_=y.length-1;if(_>0){n.textContent=rt?rt.emptyScript:"";for(let w=0;w<_;w++)n.append(y[w],Be()),ie.nextNode(),d.push({type:2,index:++a});n.append(y[_],Be())}}}else if(n.nodeType===8)if(n.data===Rr)d.push({type:2,index:a});else{let y=-1;for(;(y=n.data.indexOf(Q,y+1))!==-1;)d.push({type:7,index:a}),y+=Q.length-1}a++}}static createElement(e,t){const s=se.createElement("template");return s.innerHTML=e,s}}function _e(r,e,t=r,s){var l,u;if(e===ye)return e;let n=s!==void 0?(l=t._$Co)==null?void 0:l[s]:t._$Cl;const a=Re(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==a&&((u=n==null?void 0:n._$AO)==null||u.call(n,!1),a===void 0?n=void 0:(n=new a(r),n._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=n:t._$Cl=n),n!==void 0&&(e=_e(r,n._$AS(r,e.values),n,s)),e}class Hi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??se).importNode(t,!0);ie.currentNode=n;let a=ie.nextNode(),l=0,u=0,d=s[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new Ne(a,a.nextSibling,this,e):d.type===1?g=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(g=new Gi(a,this,e)),this._$AV.push(g),d=s[++u]}l!==(d==null?void 0:d.index)&&(a=ie.nextNode(),l++)}return ie.currentNode=se,n}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Ne{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_e(this,e,t),Re(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==ye&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ji(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==B&&Re(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ke.createElement(Dr(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===n)this._$AH.p(t);else{const l=new Hi(n,this),u=l.u(this.options);l.p(t),this.T(u),this._$AH=l}}_$AC(e){let t=hr.get(e.strings);return t===void 0&&hr.set(e.strings,t=new ke(e)),t}k(e){kr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const a of e)n===t.length?t.push(s=new Ne(this.S(Be()),this.S(Be()),this,this.options)):s=t[n],s._$AI(a),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,a){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(e,t=this,s,n){const a=this.strings;let l=!1;if(a===void 0)e=_e(this,e,t,0),l=!Re(e)||e!==this._$AH&&e!==ye,l&&(this._$AH=e);else{const u=e;let d,g;for(e=a[0],d=0;d<a.length-1;d++)g=_e(this,u[s+d],t,d),g===ye&&(g=this._$AH[d]),l||(l=!Re(g)||g!==this._$AH[d]),g===B?e=B:e!==B&&(e+=(g??"")+a[d+1]),this._$AH[d]=g}l&&!n&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qi extends dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class Vi extends dt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class Wi extends dt{constructor(e,t,s,n,a){super(e,t,s,n,a),this.type=5}_$AI(e,t=this){if((e=_e(this,e,t,0)??B)===ye)return;const s=this._$AH,n=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==B&&(s===B||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Gi{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){_e(this,e)}}const Pt=Ue.litHtmlPolyfillSupport;Pt==null||Pt(ke,Ne),(Ue.litHtmlVersions??(Ue.litHtmlVersions=[])).push("3.1.2");const Ji=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let n=s._$litPart$;if(n===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=n=new Ne(e.insertBefore(Be(),a),a,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ji(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ye}};var Ur;P._$litElement$=!0,P.finalized=!0,(Ur=globalThis.litElementHydrateSupport)==null||Ur.call(globalThis,{LitElement:P});const St=globalThis.litElementPolyfillSupport;St==null||St({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:Ft},Yi=(r=Ki,e,t)=>{const{kind:s,metadata:n}=t;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(t.name,r),s==="accessor"){const{name:l}=t;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,d,r)},init(u){return u!==void 0&&this.P(l,void 0,r),u}}}if(s==="setter"){const{name:l}=t;return function(u){const d=this[l];e.call(this,u),this.requestUpdate(l,d,r)}}throw Error("Unsupported decorator location: "+s)};function x(r){return(e,t)=>typeof t=="object"?Yi(r,e,t):((s,n,a)=>{const l=n.hasOwnProperty(a);return n.constructor.createProperty(a,l?{...s,wrapped:!0}:s),l?Object.getOwnPropertyDescriptor(n,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(r){return x({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mr=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ur=class{constructor(e,t,s,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Mr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xi=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},dr=class extends Qi{constructor(e,t,s){var n,a;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=l=>{const u=l.composedPath()[0];l.context===this.context&&u!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,u,l.subscribe))},this.onProviderRequest=l=>{const u=l.composedPath()[0];if(l.context!==this.context||u===this.host)return;const d=new Set;for(const[g,{consumerHost:b}]of this.subscriptions)d.has(g)||(d.add(g),b.dispatchEvent(new Mr(this.context,g,!0)));l.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(n=this.host).addController)==null||a.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Xi(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lr({context:r}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new dr(this,{context:r}))}),{get(){return e.get.call(this)},set(n){var a;return(a=s.get(this))==null||a.setValue(n),e.set.call(this,n)},init(n){var a;return(a=s.get(this))==null||a.setValue(n),n}};{e.constructor.addInitializer(l=>{s.set(l,new dr(l,{context:r}))});const n=Object.getOwnPropertyDescriptor(e,t);let a;if(n===void 0){const l=new WeakMap;a={get:function(){return l.get(this)},set:function(u){s.get(this).setValue(u),l.set(this,u)},configurable:!0,enumerable:!0}}else{const l=n.set;a={...n,set:function(u){s.get(this).setValue(u),l==null||l.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jr({context:r,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new ur(this,{context:r,callback:n=>{this[s.name]=n},subscribe:e})}):t.constructor.addInitializer(n=>{new ur(n,{context:r,callback:a=>{n[s]=a},subscribe:e})})}}let Zi=class extends P{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",s=>{const n=s.detail;console.log("Got message: ",n),this.receive(n)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(n=>{const a=n(this.model);this.model=a}):this.model=t}}},es=class extends P{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class ts{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,n=this._handlers.get(s);return n?n(t,e):e}}function rs(r){return e=>Object.assign({},e,r)}function is(r){return r}const ss="http://localhost:3000",ns=`${ss}`,os="/api",Ot="JWT_AUTH_TOKEN",Y=class Y{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new Y;return console.log("Deauthenticating",e,Y._theUser),e===Y._theUser&&(localStorage.removeItem(Ot),Y._theUser=t),t}};Y._theUser=new Y;let j=Y;class Fe extends j{constructor(e,t){super();const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(n).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),l=JSON.parse(a);console.log("Token payload",l),this.token=e,this.authenticated=!0,this.username=l.username,this.signOut=t}static authenticate(e,t){return j._theUser=new Fe(e,t),localStorage.setItem(Ot,e),j._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Ot);return t?Fe.authenticate(t,e):j._theUser}}class Dt{constructor(e){this._base=os,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=j._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${j._theUser.token}`};return e?{...s,...a}:a}else return e?{...s}:void 0}_url(e){return`${ns}${this._base}${e}`}}class pr extends Dt{constructor(e){super(Object.fromEntries(e))}}class Nr extends Dt{constructor(){super(void 0)}}var as=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,zr=(r,e,t,s)=>{for(var n=s>1?void 0:s?cs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&as(e,t,n),n};const Hr="MTVModel",fr={user:new j},ls=()=>new ts,qr=rs,Vr=is;class Wr extends Zi{constructor(e){super(e,fr),this.model=fr}}zr([Lr({context:Hr}),U()],Wr.prototype,"model",2);class pt extends es{getFromModel(e){if(this._model)return this._model[e]}}zr([jr({context:Hr,subscribe:!0}),x({attribute:!1})],pt.prototype,"_model",2);const Mt=ls(),hs=Mt.update;Mt.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Nr().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?qr({profile:t}):Vr)});Mt.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new Dt(t).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{s&&console.log("Profile:",s)}).then(s=>s?qr({profile:s}):Vr)});const us=O`
  .user-profile-header {
    padding: 25px 15px 15px 100px;
  }

  .user-profile-user-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    height: 8em;
  }

  .edit-mode-section {
    margin-left: 100px;
    border: 1px solid white;
    margin-top: 2.5em;
    width: 38em;
  }

  .user-profile-header-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    height: 75%;
  }

  .edit-profile-toggle {
    color: var(--accent-color);
    text-decoration: underline;
  }

  .user-description {
    font-weight: var(--light-weight);
    font-size: 1.5rem;
    margin: 0;
  }

  h1 {
    color: var(--text-color);
    font-size: 4rem;
    margin: 0;
  }

  .favorites-all-lists {
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-left: 5em;
    width: 100%;
  }

  .favorites-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
  }

  .subsection-header-line {
    height: 1.5em;
    width: 36.5em;
    margin-left: 5em;
    margin-top: 1.25em;
    margin-bottom: 2em;
  }

  .name-and-icon {
    display: flex;
    height: 1em;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5em;
  }

  .profile-section-description {
    margin: 0em;
    font-size: 0.8em;
  }

  .subsection-header-line h2 {
    margin-right: 0.35em;
    font-weight: var(--medium-weight);
  }

  svg.icon {
    display: inline;
    height: 1.4em;
    width: 1.4em;
    vertical-align: top;
    fill: currentColor;
    margin: 4px 0px 0px 13px;
  }
`;var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,ze=(r,e,t,s)=>{for(var n=s>1?void 0:s?ps(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&ds(e,t,n),n};let ne=class extends P{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,s)=>{const n=t[0].toUpperCase(),a=s[0].toUpperCase();return n<a?-1:n>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return v`
      <section class="friends-list">
        <section class="subsection-header-line">
          <section class="name-and-icon">
            <h2>${this.listAttributes[0]}</h2>
            <svg class="icon">
              <use href="/icons/user-icons.svg#icon-friends-list" />
            </svg>
          </section>
          <toggle-switch
            filteredState=${this.sort_state}
            @state-changed=${this._onStateChanged}
          ></toggle-switch>
        </section>
        <a href="./friends.html" class="profile-section-description"
          >... see all ${this.listAttributes[1]}</a
        >
        <section class="friends-list-friends">
          ${this.names.map(r=>v`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};ne.styles=O`
    svg {
      height: 1.4em;
      width: 1.4em;
    }

    .subsection-header-line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 2em;
      width: 36.5em;
    }

    .subsection-header-line h2 {
      margin-right: 0.35em;
      font-weight: var(--medium-weight);
    }

    .friends-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: var(--component-inside-padding);
      margin-bottom: 10px;
    }

    .name-and-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .profile-section-description {
      font-size: 0.75em;
      color: var(--accent-color);
    }

    .user-friend {
      border: 0.9px solid var(--section-border-color);
      width: 120px;
      height: 120px;
      border-radius: var(--default-border-radius);
      font-weight: var(--bold-weight);
    }

    .friends-list-friends {
      display: flex;
      gap: 1.25em;
      margin-top: 1em;
    }

    .user-friend p:first-child,
    .user-friend a:first-child {
      padding-top: 2.7em;
      margin: 0;
    }

    .user-friend a,
    .user-friend p {
      padding-left: 1em;
      margin: 0;
    }

    .user-friend a {
      display: flex;
      padding-left: 0.9em;
      color: var(--accent-color);
    }

    /*these may not be exactly aligned to above text lol */
    p.music-taste {
      padding-left: 1.2em;
      padding-top: 0.1em;
      font-weight: var(--light-weight);
      font-size: var(--small-size);
    }
  `;ze([x({type:Array})],ne.prototype,"names",2);ze([x({type:Array})],ne.prototype,"namesOriginalOrder",2);ze([x({type:Array})],ne.prototype,"listAttributes",2);ze([U()],ne.prototype,"sort_state",2);ne=ze([T("sortable-list")],ne);var fs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,ft=(r,e,t,s)=>{for(var n=s>1?void 0:s?ms(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&fs(e,t,n),n};let we=class extends P{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return v`
      <section class="friends-list">
        <section class="subsection-header-line">
          <h2>${this.listAttributes[0]}</h2>
          <svg class="icon">
            <use href="/icons/user-icons.svg#icon-friends-list" />
          </svg>
        </section>
        <a href="./friends.html" class="profile-section-description"
          >... see all ${this.listAttributes[1]}</a
        >
        <section class="friends-list-friends">
          ${this.names.map(r=>v`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};we.styles=O`
    svg {
      height: 1.4em;
      width: 1.4em;
    }

    .subsection-header-line h2 {
      margin-right: 0.35em;
      font-weight: var(--medium-weight);
    }

    .friends-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: var(--component-inside-padding);
      margin-bottom: 10px;
    }

    .subsection-header-line {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 2em;
    }

    .profile-section-description {
      font-size: 0.75em;
      color: var(--accent-color);
    }

    .user-friend {
      border: 0.9px solid var(--section-border-color);
      width: 120px;
      height: 120px;
      border-radius: var(--default-border-radius);
      font-weight: var(--bold-weight);
    }

    .friends-list-friends {
      display: flex;
      gap: 1.25em;
      margin-top: 1em;
    }

    .user-friend p:first-child,
    .user-friend a:first-child {
      padding-top: 2.7em;
      margin: 0;
    }

    .user-friend a,
    .user-friend p {
      padding-left: 1em;
      margin: 0;
    }

    .user-friend a {
      display: flex;
      padding-left: 0.9em;
      color: var(--accent-color);
    }

    /*these may not be exactly aligned to above text lol */
    p.music-taste {
      padding-left: 1.2em;
      padding-top: 0.1em;
      font-weight: var(--light-weight);
      font-size: var(--small-size);
    }
  `;ft([x({type:Array})],we.prototype,"names",2);ft([x({type:Array})],we.prototype,"listAttributes",2);ft([U()],we.prototype,"sort_state",2);we=ft([T("general-list")],we);var gs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,Lt=(r,e,t,s)=>{for(var n=s>1?void 0:s?bs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&gs(e,t,n),n};let De=class extends P{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return v`
      <section class="favorite-list">
        <h3 class="current-favorites-h3">${this.listAttributes}</h3>
        <div class="favorite-section">
          <a href="./artist1.html" class="section-title"
            >${this.artists[0][0]}</a
          >
          <p>${this.artists[0][1]}</p>
        </div>
        <div class="favorite-section">
          <p class="section-title">${this.artists[1][0]}</p>
          <p>${this.artists[1][1]}</p>
        </div>
        <div class="favorite-section">
          <p class="section-title">${this.artists[2][0]}</p>
          <p>${this.artists[2][1]}</p>
        </div>
      </section>
    `}};De.styles=O`
    /******** FAVORITES SECTION ********/

    .current-favorites-h3 {
      margin-bottom: 15px;
      padding: 10px 0px 0px 10px;
    }

    .current-favorites {
      padding-bottom: 50px;
    }

    .favorite-section {
      padding: 10px 0px 5px 10px;
    }

    .favorite-section p {
      margin: 0;
    }

    .favorite-list {
      border: 1.5px solid var(--section-border-color);
      border-radius: var(--default-border-radius);
      width: 265px;
    }

    .section-title {
      font-weight: var(--bold-weight);
    }

    a.section-title {
      display: flex;
      color: var(--accent-color);
    }
  `;Lt([x({type:Array})],De.prototype,"artists",2);Lt([x({type:String})],De.prototype,"listAttributes",2);De=Lt([T("favorites-list")],De);var ys=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,$e=(r,e,t,s)=>{for(var n=s>1?void 0:s?_s(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&ys(e,t,n),n};let Z=class extends P{constructor(){super(...arguments),this.open=!1,this.align="left"}_signOutUser(){console.log("Log Out Clicked.");const r=new CustomEvent("userSignOutTriggeredWithinDropDown",{bubbles:!0,composed:!0});this.dispatchEvent(r)}render(){return v`
      <section class="drop-down">
        <input
          type="checkbox"
          id="is-shown"
          @change=${this._handleChange}
          .checked=${this.open}
        />
        <label for="is-shown">
          <slot>
            <img
              src="/images/${this.profileImage}.png"
              alt="${this.profileDescription}"
              class="dropdown-pfp"
            />
          </slot>
        </label>
        <slot name="menu">
          <ul>
            <li class="link border-top-only">
              <a href="app/profile/${this.profileUserID}" class="link"
                >Your Profile</a
              >
            </li>
            <li>Settings</li>
            <li>
              <color-mode-switch></color-mode-switch>
            </li>
            <li class="border-bottom-only signOut" @click=${this._signOutUser}>
              Sign out
            </li>
          </ul>
        </slot>
      </section>
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};Z.styles=O`
    :host {
      font-family: var(--font);
      font-weight: var(--medium-weight);
      --position-left: 0;
      --position-right: auto;

      display: inline-block;
      position: relative;
      color: var(--text-color);
      margin: 0.8em 6.25em 0em 0em;
    }

    .drop-down {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      top: 100%;
    }

    .signOut:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    /* this is container of the drop down when expanded */
    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      font-size: 0.8em;
      width: 15em;
      list-style: none;
      white-space: nowrap;
      margin-left: 0em;
      padding-left: 0em;
      border-radius: var(--border-radius-minus-one);
      box-shadow: var(--box-shadow);
    }

    li {
      padding: 1em 0.5em 1em 1em;
      border-bottom: 0.1em solid rgb(83, 83, 83);
      background: var(--menu-color);
    }

    li:hover {
      background: var(--hover-color);
    }

    .border-top-only {
      border-top-left-radius: var(--default-border-radius);
      border-top-right-radius: var(--default-border-radius);
    }

    /* also needs no bottom border */
    .border-bottom-only {
      border-bottom-left-radius: var(--default-border-radius);
      border-bottom-right-radius: var(--default-border-radius);
      border-bottom: 0;
    }

    .link {
      color: var(--accent-color);
      padding-bottom: 1em;
      padding-top: 1em;
    }

    .dropdown-pfp {
      height: 3em;
      width: 3em;
      position: relative;
      border: 0.1em solid var(--background-color);
      border-radius: 50px;
    }
  `;$e([x({reflect:!0,type:Boolean})],Z.prototype,"open",2);$e([x()],Z.prototype,"align",2);$e([x()],Z.prototype,"profileImage",2);$e([x()],Z.prototype,"profileUserID",2);$e([x()],Z.prototype,"profileDescription",2);Z=$e([T("drop-down")],Z);var ws=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,Gr=(r,e,t,s)=>{for(var n=s>1?void 0:s?vs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&ws(e,t,n),n};let it=class extends P{constructor(){super(...arguments),this.on=!1}render(){return v`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};it.styles=O`
    :host {
      display: block;
      padding: 0.5em 0.5em 0.5em 0em;
    }
    label {
      display: flex;
      width: 80%;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      line-height: 2em;
      cursor: pointer;
    }

    .slider {
      display: inline-block;
      border: 1px solid var(--section-border-color);
      border-radius: 0.75em;
      background-color: var(--background-color);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color 300ms;
    }

    .slider:has(input:checked) {
      background-color: var(--accent-color);
    }

    input {
      appearance: none;
      cursor: pointer;
      background-color: var(--text-color);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      bottom: 0.00005em;
      transition: left 300ms;
    }
    input:checked {
      left: 1.1em;
    }
  `;Gr([x({reflect:!0,type:Boolean})],it.prototype,"on",2);it=Gr([T("color-mode-switch")],it);var xs=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,mt=(r,e,t,s)=>{for(var n=s>1?void 0:s?Es(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&xs(e,t,n),n};let ve=class extends P{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return v`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};ve.styles=O`
    .user-friend {
      border: 1.5px solid var(--section-border-color);
      width: 120px;
      height: 120px;
      border-radius: var(--default-border-radius);
      font-weight: var(--bold-weight);
    }

    .user-friend p:first-child,
    .user-friend a:first-child {
      padding-top: 2.7em;
      margin: 0;
    }

    .user-friend a,
    .user-friend p {
      padding-left: 1em;
      margin: 0;
    }

    .user-friend a {
      display: flex;
      padding-left: 0.9em;
      color: var(--accent-color);
    }

    p.music-taste {
      padding-left: 1.2em;
      padding-top: 0.1em;
      font-weight: var(--light-weight);
      font-size: var(--small-size);
    }
  `;mt([x()],ve.prototype,"title",2);mt([x()],ve.prototype,"description",2);mt([x()],ve.prototype,"user_id",2);ve=mt([T("default-card")],ve);var $s=Object.defineProperty,As=Object.getOwnPropertyDescriptor,jt=(r,e,t,s)=>{for(var n=s>1?void 0:s?As(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&$s(e,t,n),n};let Me=class extends P{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return v`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};Me.styles=O`
    :host {
      display: block;
      padding: 0.5em 0.5em 0.5em 0em;
    }

    label {
      display: flex;
      width: 85%;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      line-height: 2em;
      cursor: pointer;
      margin-left: 3em;
    }

    .label-title {
      font-size: 0.8em;
    }

    .slider {
      display: inline-block;
      border: 1px solid var(--section-border-color);
      border-radius: 0.75em;
      background-color: var(--background-color);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color 300ms;
    }

    .slider:has(input:checked) {
      background-color: var(--accent-color);
    }

    input {
      appearance: none;
      cursor: pointer;
      background-color: var(--text-color);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      bottom: 0.00005em;
      transition: left 300ms;
    }
    input:checked {
      left: 1.1em;
    }
  `;jt([x({reflect:!0,type:Boolean})],Me.prototype,"on",2);jt([x()],Me.prototype,"filteredState",2);Me=jt([T("toggle-switch")],Me);const Ps=O`
  /* General form styling */
  .edit-mode-section {
    background-color: var(--menu-color);
    border-radius: var(--default-border-radius);
    padding: 20px;
    box-shadow: var(--box-shadow);
    margin: 20px auto;
    width: 30em;
    max-width: 500px; /* Adjust the form width as needed */
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: var(--text-color);
  }

  input[type="text"],
  input[type="radio"],
  textarea {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ced4da;
  }

  input[type="radio"] {
    width: auto;
    margin-right: 5px;
  }

  textarea {
    resize: vertical; /* Allows vertical resizing, might be useful for the bio */
    padding: 8px; /* Adjust padding as necessary */
    vertical-align: top; /* Align text to the top */
    height: 100px; /* Initial height; adjust as necessary */
  }

  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: var(--button-color);
    color: var(--text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button[type="submit"]:hover {
    background-color: var(--button-hover-color);
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  legend {
    margin-bottom: 10px;
    font-weight: bold;
    color: var(--text-color);
  }

  .radio-group {
    display: flex;
    align-items: center;
  }

  .radio-group label {
    margin-right: 20px; /* Space between radio buttons */
  }
`;var Ss=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,Jr=(r,e,t,s)=>{for(var n=s>1?void 0:s?Cs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&Ss(e,t,n),n};let st=class extends P{constructor(r){super(),this.profile=r}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),s={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),profileImage:t.get("profileImage"),spotify:t.get("spotify")==="true"},n=new CustomEvent("profile-update",{detail:{profile:s},bubbles:!0,composed:!0});console.log("profile-update Event being sent to DOM"),this.dispatchEvent(n);const a=new CustomEvent("update-using",{detail:{profile:s},bubbles:!0,composed:!0});console.log("profile update event being sent to profile component to update using"),this.dispatchEvent(a),this.requestUpdate()}render(){var r,e,t,s,n,a,l;return v`
            <section class="edit-mode-section">
              <form @submit=${this._handleSubmit}>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    .value=${(r=this.profile)==null?void 0:r.name}
                  />
                </div>
                <div class="form-group">
                  <label for="bio">Bio</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    .value=${(e=this.profile)==null?void 0:e.bio}
                  />
              </div>
                <div class="form-group">
                  <label for="musicTaste">Music Taste</label>
                  <input
                    type="text"
                    id="musicTaste"
                    name="musicTaste"
                    .value=${(t=this.profile)==null?void 0:t.musicTaste}
                  />
                </div>
                <div class="form-group">
                  <label for="timezone">Timezone</label>
                  <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    .value=${(s=this.profile)==null?void 0:s.timezone}
                  />
                </div>
                <div class="form-group">
                  <label for="profileImage">Profile Image URL</label>
                  <input
                    type="text"
                    id="profileImage"
                    name="profileImage"
                    .value=${(n=this.profile)==null?void 0:n.profileImage}
                  />
                </div>
                  <fieldset class="form-group">
                      <legend>Spotify</legend>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="true"
                          ?checked=${((a=this.profile)==null?void 0:a.spotify)===!0}
                        /> Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="false"
                          ?checked=${((l=this.profile)==null?void 0:l.spotify)===!1}
                        /> No
                      </label>
                    </fieldset>
                </fieldset>
                <div class="form-group">
                  <button type="submit">Save</button>
                </div>
              </form>
            </section>
          `}};st.styles=[Ps];Jr([x({type:Object})],st.prototype,"profile",2);st=Jr([T("edit-profile-form")],st);var Ts=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,He=(r,e,t,s)=>{for(var n=s>1?void 0:s?Os(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&Ts(e,t,n),n};let oe=class extends P{constructor(){super(...arguments),this.path="",this.editMode=!1,this.profileEditText="Edit Profile."}get profile(){return this.using||{}}connectedCallback(){super.connectedCallback(),this.addEventListener("update-using",this._handleUsingUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("update-using",this._handleUsingUpdate)}_handleUsingUpdate(r){r.detail&&r.detail.profile&&(this.using=r.detail.profile,this._changeEditMode(),this.requestUpdate())}_changeEditMode(){this.editMode=!this.editMode,this.profileEditText=this.editMode?"Close Edit Menu.":"Edit Profile."}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),s={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),profileImage:t.get("profileImage"),spotify:t.get("spotify")==="true"};this.using=s,this.requestUpdate(),console.log("Form submitted with:",s);const n=new CustomEvent("profile-update",{detail:{profile:s},bubbles:!0,composed:!0});this.dispatchEvent(n),this._changeEditMode()}render(){const{name:r,profileImage:e,profileDescription:t,bio:s}=this.profile;return v`
      ${this.editMode?v`<edit-profile-form .profile=${this.profile}></edit-profile-form>`:""}

      <section class="user-profile-header">
        <p class="edit-profile-toggle" @click=${this._changeEditMode}>
          ${this.profileEditText}
        </p>
        <section class="user-profile-user-content">
          <section class="user-profile-picture">
            <img
              src="/images/${e}.png"
              alt="${t}"
              width="150"
            />
          </section>
          <section class="user-profile-header-text">
            <h1>${r}&apos;s Page</h1>
            <p class="user-description">${s}</p>
          </section>
        </section>
      </section>

      <sortable-list
        listAttributes='["friend&apos;s list", "friends"]'
        names='[["thea", "indie", "user2.html"], ["Joey", "indie", "2599568"], ["Adam", "rock", "295853939"], ["Bob", "rap", "29588582"], ["Ethan", "white noise", "9995933"]]'
      ></sortable-list>
      <sortable-list
        listAttributes='["playlists list", "playlists"]'
        names='[["chill vibes", "", "playlist1.html"], ["vibes", "", "21"], ["sad", "", "2424"], ["happy", "", "2424"]]'
      ></sortable-list>

      <general-list
        listAttributes='["games list", "playlists"]'
        names='[["game1.", "12/2/23", "game1.html"], ["game2", "1/2/24", "21"], ["game3", "2/2/24", "2424"]]'
      ></general-list>

      <section class="favorites-section">
        <section class="subsection-header-line">
          <section class="name-and-icon">
            <h2>current favorites</h2>
            <svg class="icon">
              <use href="/icons/user-icons.svg#icon-heart" />
            </svg>
          </section>
          <p class="profile-section-description">what aidan loves right now</p>
        </section>
        <section class="favorites-all-lists">
          <favorites-list
            listAttributes="artists"
            artists='[["the backseat lovers", "1.2M Listeners"], ["arctic monkeys", "8M Listeners"], ["matt maltese", "1M Listeners"]]'
          ></favorites-list>
          <favorites-list
            listAttributes="albums"
            artists='[["silhouette", "the backseat lovers"], ["lost in the night ep", "palace"], ["orange blood", "mt joy"]]'
          ></favorites-list>
          <favorites-list
            listAttributes="songs"
            artists='[["words i used", "the backseat lovers"], ["disciples", "tame impala"], ["jigsaw falling into place", "radiohead"]]'
          ></favorites-list>
          <section></section>
        </section>
      </section>
    `}};oe.styles=us;He([x()],oe.prototype,"path",2);He([x()],oe.prototype,"editMode",2);He([x()],oe.prototype,"profileEditText",2);He([x({attribute:!1})],oe.prototype,"using",2);oe=He([T("user-profile")],oe);function nt(r){return r=r||[],Array.isArray(r)?r:[r]}function N(r){return`[Vaadin.Router] ${r}`}function Us(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ot="module",at="nomodule",Ut=[ot,at];function mr(r){if(!r.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Kr(r){if(!r||!L(r.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!ae(r.action)&&!Array.isArray(r.children)&&!ae(r.children)&&!ct(e)&&!t.some(s=>L(r[s])))throw new Error(N(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(L(e))mr(e);else if(Ut.some(s=>s in e))Ut.forEach(s=>s in e&&mr(e[s]));else throw new Error(N('Expected route bundle to include either "'+at+'" or "'+ot+'" keys, or both'));r.redirect&&["bundle","component"].forEach(s=>{s in r&&console.warn(N(`Route config "${r.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function gr(r){nt(r).forEach(e=>Kr(e))}function br(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ot?t.setAttribute("type",ot):e===at&&t.setAttribute(at,""),t.async=!0),new Promise((s,n)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,s(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),n(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function Is(r){return L(r)?br(r):Promise.race(Ut.filter(e=>e in r).map(e=>br(r[e],e)))}function Ie(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ct(r){return typeof r=="object"&&!!r}function ae(r){return typeof r=="function"}function L(r){return typeof r=="string"}function Yr(r){const e=new Error(N(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const be=new class{};function Bs(r){const e=r.port,t=r.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function yr(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let u=0;u<t.length;u++){const d=t[u];if(d.nodeName&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Bs(e))!==window.location.origin)return;const{pathname:n,search:a,hash:l}=e;Ie("go",{pathname:n,search:a,hash:l})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Rs={activate(){window.document.addEventListener("click",yr)},inactivate(){window.document.removeEventListener("click",yr)}},ks=/Trident/.test(navigator.userAgent);ks&&!ae(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function _r(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;Ie("go",{pathname:e,search:t,hash:s})}const Fs={activate(){window.addEventListener("popstate",_r)},inactivate(){window.removeEventListener("popstate",_r)}};var Ae=ri,Ds=Nt,Ms=zs,Ls=Zr,js=ti,Qr="/",Xr="./",Ns=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Nt(r,e){for(var t=[],s=0,n=0,a="",l=e&&e.delimiter||Qr,u=e&&e.delimiters||Xr,d=!1,g;(g=Ns.exec(r))!==null;){var b=g[0],y=g[1],_=g.index;if(a+=r.slice(n,_),n=_+b.length,y){a+=y[1],d=!0;continue}var w="",k=r[n],te=g[2],_t=g[3],Pe=g[4],ue=g[5];if(!d&&a.length){var de=a.length-1;u.indexOf(a[de])>-1&&(w=a[de],a=a.slice(0,de))}a&&(t.push(a),a="",d=!1);var wt=w!==""&&k!==void 0&&k!==w,W=ue==="+"||ue==="*",Ge=ue==="?"||ue==="*",Se=w||l,Je=_t||Pe;t.push({name:te||s++,prefix:w,delimiter:Se,optional:Ge,repeat:W,partial:wt,pattern:Je?Hs(Je):"[^"+K(Se)+"]+?"})}return(a||n<r.length)&&t.push(a+r.substr(n)),t}function zs(r,e){return Zr(Nt(r,e))}function Zr(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(s,n){for(var a="",l=n&&n.encode||encodeURIComponent,u=0;u<r.length;u++){var d=r[u];if(typeof d=="string"){a+=d;continue}var g=s?s[d.name]:void 0,b;if(Array.isArray(g)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(g.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var y=0;y<g.length;y++){if(b=l(g[y],d),!e[u].test(b))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');a+=(y===0?d.prefix:d.delimiter)+b}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(b=l(String(g),d),!e[u].test(b))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+b+'"');a+=d.prefix+b;continue}if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"))}return a}}function K(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Hs(r){return r.replace(/([=!:$/()])/g,"\\$1")}function ei(r){return r&&r.sensitive?"":"i"}function qs(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Vs(r,e,t){for(var s=[],n=0;n<r.length;n++)s.push(ri(r[n],e,t).source);return new RegExp("(?:"+s.join("|")+")",ei(t))}function Ws(r,e,t){return ti(Nt(r,t),e,t)}function ti(r,e,t){t=t||{};for(var s=t.strict,n=t.start!==!1,a=t.end!==!1,l=K(t.delimiter||Qr),u=t.delimiters||Xr,d=[].concat(t.endsWith||[]).map(K).concat("$").join("|"),g=n?"^":"",b=r.length===0,y=0;y<r.length;y++){var _=r[y];if(typeof _=="string")g+=K(_),b=y===r.length-1&&u.indexOf(_[_.length-1])>-1;else{var w=_.repeat?"(?:"+_.pattern+")(?:"+K(_.delimiter)+"(?:"+_.pattern+"))*":_.pattern;e&&e.push(_),_.optional?_.partial?g+=K(_.prefix)+"("+w+")?":g+="(?:"+K(_.prefix)+"("+w+"))?":g+=K(_.prefix)+"("+w+")"}}return a?(s||(g+="(?:"+l+")?"),g+=d==="$"?"$":"(?="+d+")"):(s||(g+="(?:"+l+"(?="+d+"))?"),b||(g+="(?="+l+"|"+d+")")),new RegExp(g,ei(t))}function ri(r,e,t){return r instanceof RegExp?qs(r,e):Array.isArray(r)?Vs(r,e,t):Ws(r,e,t)}Ae.parse=Ds;Ae.compile=Ms;Ae.tokensToFunction=Ls;Ae.tokensToRegExp=js;const{hasOwnProperty:Gs}=Object.prototype,It=new Map;It.set("|false",{keys:[],pattern:/(?:)/});function wr(r){try{return decodeURIComponent(r)}catch{return r}}function Js(r,e,t,s,n){t=!!t;const a=`${r}|${t}`;let l=It.get(a);if(!l){const g=[];l={keys:g,pattern:Ae(r,g,{end:t,strict:r===""})},It.set(a,l)}const u=l.pattern.exec(e);if(!u)return null;const d=Object.assign({},n);for(let g=1;g<u.length;g++){const b=l.keys[g-1],y=b.name,_=u[g];(_!==void 0||!Gs.call(d,y))&&(b.repeat?d[y]=_?_.split(b.delimiter).map(wr):[]:d[y]=_&&wr(_))}return{path:u[0],keys:(s||[]).concat(l.keys),params:d}}function ii(r,e,t,s,n){let a,l,u=0,d=r.path||"";return d.charAt(0)==="/"&&(t&&(d=d.substr(1)),t=!0),{next(g){if(r===g)return{done:!0};const b=r.__children=r.__children||r.children;if(!a&&(a=Js(d,e,!b,s,n),a))return{done:!1,value:{route:r,keys:a.keys,params:a.params,path:a.path}};if(a&&b)for(;u<b.length;){if(!l){const _=b[u];_.parent=r;let w=a.path.length;w>0&&e.charAt(w)==="/"&&(w+=1),l=ii(_,e.substr(w),t,a.keys,a.params)}const y=l.next(g);if(!y.done)return{done:!1,value:y.value};l=null,u++}return{done:!0}}}}function Ks(r){if(ae(r.route.action))return r.route.action(r)}function Ys(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Qs(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Xs(r,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const n={path:s,route:t};if(!r.chain)r.chain=[];else if(t.parent){let a=r.chain.length;for(;a--&&r.chain[a].route&&r.chain[a].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class Le{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Ks,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){gr(e);const t=[...nt(e)];this.root.__children=t}addRoutes(e){return gr(e),this.root.__children.push(...nt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,L(e)?{pathname:e}:e),s=ii(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let a=null,l=null,u=t;function d(g,b=a.value.route,y){const _=y===null&&a.value.route;return a=l||s.next(_),l=null,!g&&(a.done||!Ys(b,a.value.route))?(l=a,Promise.resolve(be)):a.done?Promise.reject(Yr(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),Xs(u,a.value),Promise.resolve(n(u)).then(w=>w!=null&&w!==be?(u.result=w.result||w,u):d(g,b,w)))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(g=>{const b=Qs(u);if(g?console.warn(b):g=new Error(b),g.context=g.context||u,g instanceof DOMException||(g.code=g.code||500),this.errorHandler)return u.result=this.errorHandler(g),u;throw g})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}Le.pathToRegexp=Ae;const{pathToRegexp:vr}=Le,xr=new Map;function si(r,e,t){const s=e.name||e.component;if(s&&(r.has(s)?r.get(s).push(e):r.set(s,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const a=t[n];a.parent=e,si(r,a,a.__children||a.children)}}function Er(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function $r(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Zs(r,e={}){if(!(r instanceof Le))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,n)=>{let a=Er(t,s);if(!a&&(t.clear(),si(t,r.root,r.root.__children),a=Er(t,s),!a))throw new Error(`Route "${s}" not found`);let l=xr.get(a.fullPath);if(!l){let d=$r(a),g=a.parent;for(;g;){const w=$r(g);w&&(d=w.replace(/\/$/,"")+"/"+d.replace(/^\//,"")),g=g.parent}const b=vr.parse(d),y=vr.tokensToFunction(b),_=Object.create(null);for(let w=0;w<b.length;w++)L(b[w])||(_[b[w].name]=!0);l={toPath:y,keys:_},xr.set(d,l),a.fullPath=d}let u=l.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const d={},g=Object.keys(n);for(let y=0;y<g.length;y++){const _=g[y];l.keys[_]||(d[_]=n[_])}const b=e.stringifyQueryParams(d);b&&(u+=b.charAt(0)==="?"?b:`?${b}`)}return u}}let Ar=[];function en(r){Ar.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Ar=r}const tn=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},rn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function Pr(r,e){return r.classList.add(e),new Promise(t=>{if(tn(r)){const s=r.getBoundingClientRect(),n=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;r.setAttribute("style",`position: absolute; ${n}`),rn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const sn=256;function Ct(r){return r!=null}function nn(r){const e=Object.assign({},r);return delete e.next,e}function M({pathname:r="",search:e="",hash:t="",chain:s=[],params:n={},redirectFrom:a,resolver:l},u){const d=s.map(g=>g.route);return{baseUrl:l&&l.baseUrl||"",pathname:r,search:e,hash:t,routes:d,route:u||d.length&&d[d.length-1]||null,params:n,redirectFrom:a,getUrl:(g={})=>Ze(G.pathToRegexp.compile(ni(d))(Object.assign({},n,g)),l)}}function Sr(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function on(r,e){e.location=M(r);const t=r.chain.map(s=>s.route).indexOf(r.route);return r.chain[t].element=e,e}function Xe(r,e,t){if(ae(r))return r.apply(t,e)}function Cr(r,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return Xe(t[r],e,t)}}function an(r,e){if(!Array.isArray(r)&&!ct(r))throw new Error(N(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=nt(r);for(let s=0;s<t.length;s++)Kr(t[s]),e.__children.push(t[s])}function Ye(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Ze(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function ni(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class G extends Le{constructor(e,t){const s=document.head.querySelector("base"),n=s&&s.getAttribute("href");super([],Object.assign({baseUrl:n&&Le.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=l=>this.__resolveRoute(l);const a=G.NavigationTrigger;G.setTriggers.apply(G,Object.keys(a).map(l=>a[l])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=M({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();ae(t.children)&&(s=s.then(()=>t.children(nn(e))).then(a=>{!Ct(a)&&!ae(t.children)&&(a=t.children),an(a,t)}));const n={redirect:a=>Sr(e,a),component:a=>{const l=document.createElement(a);return this.__createdByRouter.set(l,!0),l}};return s.then(()=>{if(this.__isLatestRender(e))return Xe(t.action,[e,n],t)}).then(a=>{if(Ct(a)&&(a instanceof HTMLElement||a.redirect||a===be))return a;if(L(t.redirect))return n.redirect(t.redirect);if(t.bundle)return Is(t.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(Ct(a))return a;if(L(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},L(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(n).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const l=this.__previousContext;if(a===l)return this.__updateBrowserHistory(l,!0),this.location;if(this.location=M(a),t&&this.__updateBrowserHistory(a,s===1),Ie("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,l),this.__previousContext=a,this.location;this.__addAppearingContent(a,l);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,l),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),Ye(this.__outlet&&this.__outlet.children),this.location=M(Object.assign(n,{resolver:this})),Ie("error",Object.assign({router:this,error:a},n)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const a=s!==t?s:e,u=Ze(ni(s.chain),s.resolver)===s.pathname,d=(g,b=g.route,y)=>g.next(void 0,b,y).then(_=>_===null||_===be?u?g:b.parent!==null?d(g,b.parent,_):_:_);return d(s).then(g=>{if(g===null||g===be)throw Yr(a);return g&&g!==be&&g!==s?this.__fullyResolveChain(a,g):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(on(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(N(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Us(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],n=e.chain;let a=Promise.resolve();const l=()=>({cancel:!0}),u=d=>Sr(e,d);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let d=0;d<Math.min(s.length,n.length)&&!(s[d].route!==n[d].route||s[d].path!==n[d].path&&s[d].element!==n[d].element||!this.__isReusableElement(s[d].element,n[d].element));d=++e.__divergedChainIndex);if(e.__skipAttach=n.length===s.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let d=n.length-1;d>=0;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},s[d]);for(let d=0;d<n.length;d++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},n[d]),s[d].element.location=M(e,s[d].route)}else for(let d=s.length-1;d>=e.__divergedChainIndex;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},s[d])}if(!e.__skipAttach)for(let d=0;d<n.length;d++)d<e.__divergedChainIndex?d<s.length&&s[d].element&&(s[d].element.location=M(e,s[d].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},n[d]),n[d].element&&(n[d].element.location=M(e,n[d].route)));return a.then(d=>{if(d){if(d.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(d.redirect)return this.__redirect(d.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,n){const a=M(t);return e.then(l=>{if(this.__isLatestRender(t))return Cr("onBeforeLeave",[a,s,this],n.element)(l)}).then(l=>{if(!(l||{}).redirect)return l})}__runOnBeforeEnterCallbacks(e,t,s,n){const a=M(t,n.route);return e.then(l=>{if(this.__isLatestRender(t))return Cr("onBeforeEnter",[a,s,this],n.element)(l)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>sn)throw new Error(N(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const a=n?"replaceState":"pushState";window.history[a](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const a=t&&t.chain[n].element;if(a)if(a.parentNode===s)e.chain[n].element=a,s=a;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let n=s;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const l=e.chain[a].element;l&&(n.appendChild(l),this.__addedByRouter.set(l,!0),n===s&&this.__appearingContent.push(l),n=l)}}__removeDisappearingContent(){this.__disappearingContent&&Ye(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ye(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const n=t.chain[s].element;if(n)try{const a=M(e);Xe(n.onAfterLeave,[a,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&Ye(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},n=M(e,e.chain[t].route);Xe(s.onAfterEnter,[n,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],n=[],a=e.chain;let l;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){l=a[u-1].route.animate;break}if(t&&s&&l){const u=ct(l)&&l.leave||"leaving",d=ct(l)&&l.enter||"entering";n.push(Pr(t,u)),n.push(Pr(s,d))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:n}=e?e.detail:window.location;L(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:n},!0))}static setTriggers(...e){en(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Zs(this)),Ze(this.__urlForName(e,t),this)}urlForPath(e,t){return Ze(G.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:n}=L(e)?this.__createUrl(e,"http://a"):e;return Ie("go",{pathname:t,search:s,hash:n})}}const cn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,et=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ln(){function r(){return!0}return oi(r)}function hn(){try{return un()?!0:dn()?et?!pn():!ln():!1}catch{return!1}}function un(){return localStorage.getItem("vaadin.developmentmode.force")}function dn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function pn(){return!!(et&&Object.keys(et).map(e=>et[e]).filter(e=>e.productionMode).length>0)}function oi(r,e){if(typeof r!="function")return;const t=cn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return r(e)}window.Vaadin=window.Vaadin||{};const Tr=function(r,e){if(window.Vaadin.developmentMode)return oi(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=hn());function fn(){}const mn=function(){if(typeof Tr=="function")return Tr(fn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});mn();G.NavigationTrigger={POPSTATE:Fs,CLICK:Rs};var gn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,ai=(r,e,t,s)=>{for(var n=s>1?void 0:s?bn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&gn(e,t,n),n};let Bt=class extends P{constructor(){super(...arguments),this.router=new G(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return v`<slot></slot>`}};ai([x({attribute:!1})],Bt.prototype,"routes",2);Bt=ai([T("vaadin-router")],Bt);var yn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,ee=(r,e,t,s)=>{for(var n=s>1?void 0:s?_n(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&yn(e,t,n),n};let ci="auth",V=class extends P{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Fe.authenticateFromLocalStorage(()=>this._signOut()),this.showLoginForm=!1,this.whereToRedirect="/createProfile",this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this._handleSignOutEvent=r=>{console.log("Sign out event received",r),this._signOut()}}isAuthenticated(){return this.user.authenticated}toggleLoginForm(){this.showLoginForm=!this.showLoginForm,this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this.requestUpdate()}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}_loginUser(r,e){const t=new FormData;t.append("username",r),t.append("pwd",e),new pr(t).base().post("/login").then(n=>{if(n.status===200)return n.json();throw this.loginStatus=n.status,new Error(`Login failed with status: ${n.status}`)}).then(n=>{console.log("Log In Request Successful!"),this.user=Fe.authenticate(n.token,()=>this._signOut()),this._toggleDialog(!1),console.log("WTR within login ",this.whereToRedirect),G.go(this.whereToRedirect==="app/home"?"app/home":`/createProfile/${r}`),this.requestUpdate()}).catch(n=>console.error("Login Error:",n))}_handleLoginSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),s=t.get("username"),n=t.get("pwd");this.whereToRedirect="app/home",typeof s=="string"&&typeof n=="string"?this._loginUser(s,n):console.error("Username or password field is missing or not correctly entered.")}async _handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e),s=t.get("username"),n=t.get("pwd");if(!s||!n)throw this.communicateResultToUser("error"),new Error("Username or password missing from form data.");try{const l=await new pr(t).base().post("/signup");if(l.status===201)await this.createNewUserProfileAfterRegisterSuccess(s),this.whereToRedirect=`/createProfile/${s}`,console.log("whereToRedirect within Register: ",this.whereToRedirect),this.communicateResultToUser("success"),this._loginUser(s,n);else throw new Error(`Failed to register. Status: ${l.status}`)}catch(a){console.error("Error during registration:",a),this.communicateResultToUser("error")}}async createNewUserProfileAfterRegisterSuccess(r){const e="http://localhost:3000",t="A";try{const s=await fetch(`${e}/profileCreation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:r,name:t,timezone:t,musicTaste:t,spotify:!1,profileImage:t,profileDescription:t,bio:t})});if(!s.ok)throw new Error(`Failed to create profile: ${s.statusText}`);const n=await s.json();return console.log("Profile created:",n),n}catch(s){return console.error("Error creating profile:",s),null}}communicateResultToUser(r){r==="error"&&(this.showSignUpErrorMessage=!this.showSignUpErrorMessage),r==="success"&&(this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!0)}connectedCallback(){super.connectedCallback(),this.addEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}render(){const r=v`
      <dialog class="formsContainer">
        ${this.showLoginForm?v` <form @submit=${this._handleLoginSubmit} class="loginForm">
              <h2>Login</h2>
              <p class="formInformation">
                Welcome back. Are you ready to find some new music?
              </p>
              <div class="formLabelAndInput">
                <label>Username</label>
                <input name="username" type="text" required />
              </div>
              <div class="formLabelAndInput">
                <label>Password</label>
                <input type="password" name="pwd" required />
              </div>
              <button type="submit" class="submitButton">Sign in</button>
              <p class="loginSignupLink">
                Don&apos;t have an account yet?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign Up Here</span
                >
              </p>
            </form>`:v`<form @submit=${this._handleRegister} class="registrationForm">
              <h2>Sign Up</h2>
              <p class="formInformation">
                Join your friends and see who can match the vibe the best!
              </p>
              <div class="formLabelAndInput">
                <label>Name</label>
                <input name="username" type="text" required />
              </div>
              <div class="formLabelAndInput">
                <label>Password</label>
                <input type="password" name="pwd" required />
              </div>

              <button type="submit" class="submitButton">Sign up</button>
              ${this.showSignUpErrorMessage?v`<p class="errorMessage">
                    There was an error with signing you up, please try again.
                  </p>`:v``}
              ${this.showSignUpSuccessMessage?v`<p class="successMessage">
                    Sign up successful. If you are not redirected shortly,
                    please
                    <span @click=${this.toggleLoginForm} class="signInLink"
                      >log in here.</span
                    >
                  </p>`:v``}
              <p class="loginSignupLink">
                Already have an account?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign In</span
                >
              </p>
            </form>`}
      </dialog>
    `;return v`${this.isAuthenticated()?"":r} <slot></slot>`}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=j.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};V.styles=O`
    :host {
      display: block;
      margin: auto;
    }

    section {
      display: block;
    }

    .formsContainer {
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border: 2px solid black;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    h2 {
      color: #333;
      text-align: center;
      font-size: 24px;
      margin: 0;
      padding: 0;
      width: auto;
      text-align: left;
    }

    label {
      color: black;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 3px;
    }

    .formInformation {
      color: #665;
      font-size: 16px;
      margin-bottom: 10px;
      position: relative;
      top: -6px;
    }

    .formLabelAndInput {
      display: flex;
      flex-direction: column;
    }
    input {
      padding: 12px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      height: 1em;
    }

    .submitButton {
      background-color: #4caf50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
    }

    .submitButton:hover {
      background-color: #45a049;
    }

    .signInLink {
      color: #4caf50;
    }

    .signInLink:hover {
      color: #4caf50;
      cursor: pointer;
      text-decoration: underline;
    }

    .loginSignupLink {
      font-size: 12px;
      color: #888;
      text-align: center;
      margin-top: 25px;
    }

    a {
      color: #4caf50;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .registrationForm {
      display: flex;
      flex-direction: column;
    }

    .errorMessage {
      color: red;
      font-size: 12px;
      margin: 0;
      padding: 0;
      margin-top: 12px;
    }
    .successMessage {
      color: black;
      font-size: 12px;
      margin: 0;
      padding: 0;
      margin-top: 12px;
    }
  `;ee([U()],V.prototype,"loginStatus",2);ee([U()],V.prototype,"registerStatus",2);ee([Lr({context:ci}),U()],V.prototype,"user",2);ee([U()],V.prototype,"showLoginForm",2);ee([U()],V.prototype,"whereToRedirect",2);ee([U()],V.prototype,"showSignUpErrorMessage",2);ee([U()],V.prototype,"showSignUpSuccessMessage",2);V=ee([T("auth-required")],V);var wn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,zt=(r,e,t,s)=>{for(var n=s>1?void 0:s?vn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&wn(e,t,n),n};let je=class extends P{constructor(){super(...arguments),this.user=new j}render(){const{profileImage:r,profileDescription:e,userid:t}=this.profile||{};return v`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${r}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Nr().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};je.styles=O`
    .match-the-vibe-header a {
      font-weight: var(--bold-weight);
      color: var(--background-color);
      padding: var(--component-inside-padding);
    }

    .match-the-vibe-header {
      display: flex;
      justify-content: space-between;
      background: var(--header-color);
      padding: 15px 15px 15px 0px;
      height: 4.3em;
      width: 100%;
    }
  `;zt([U()],je.prototype,"profile",2);zt([jr({context:ci,subscribe:!0}),x({attribute:!1})],je.prototype,"user",2);je=zt([T("match-the-vibe-header")],je);var xn=Object.defineProperty,En=Object.getOwnPropertyDescriptor,qe=(r,e,t,s)=>{for(var n=s>1?void 0:s?En(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&xn(e,t,n),n};let ce=class extends pt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return v`
      <section class="profile-page">
        <user-profile .using=${this.profile}> </user-profile>
      </section>
    `}};ce.styles=[O`
      :host {
        display: contents;
      }

      .profile-page {
        display: flex;
        justify-content: center;
      }
    `];qe([x({attribute:!1})],ce.prototype,"location",2);qe([x({reflect:!0})],ce.prototype,"userid",1);qe([x({reflect:!0})],ce.prototype,"edit",1);qe([x()],ce.prototype,"profile",1);ce=qe([T("profile-page")],ce);var Ht={},gt={};gt.byteLength=Pn;gt.toByteArray=Cn;gt.fromByteArray=Un;var q=[],D=[],$n=typeof Uint8Array<"u"?Uint8Array:Array,Tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var me=0,An=Tt.length;me<An;++me)q[me]=Tt[me],D[Tt.charCodeAt(me)]=me;D[45]=62;D[95]=63;function li(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var s=t===e?0:4-t%4;return[t,s]}function Pn(r){var e=li(r),t=e[0],s=e[1];return(t+s)*3/4-s}function Sn(r,e,t){return(e+t)*3/4-t}function Cn(r){var e,t=li(r),s=t[0],n=t[1],a=new $n(Sn(r,s,n)),l=0,u=n>0?s-4:s,d;for(d=0;d<u;d+=4)e=D[r.charCodeAt(d)]<<18|D[r.charCodeAt(d+1)]<<12|D[r.charCodeAt(d+2)]<<6|D[r.charCodeAt(d+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return n===2&&(e=D[r.charCodeAt(d)]<<2|D[r.charCodeAt(d+1)]>>4,a[l++]=e&255),n===1&&(e=D[r.charCodeAt(d)]<<10|D[r.charCodeAt(d+1)]<<4|D[r.charCodeAt(d+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function Tn(r){return q[r>>18&63]+q[r>>12&63]+q[r>>6&63]+q[r&63]}function On(r,e,t){for(var s,n=[],a=e;a<t;a+=3)s=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Tn(s));return n.join("")}function Un(r){for(var e,t=r.length,s=t%3,n=[],a=16383,l=0,u=t-s;l<u;l+=a)n.push(On(r,l,l+a>u?u:l+a));return s===1?(e=r[t-1],n.push(q[e>>2]+q[e<<4&63]+"==")):s===2&&(e=(r[t-2]<<8)+r[t-1],n.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"=")),n.join("")}var qt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */qt.read=function(r,e,t,s,n){var a,l,u=n*8-s-1,d=(1<<u)-1,g=d>>1,b=-7,y=t?n-1:0,_=t?-1:1,w=r[e+y];for(y+=_,a=w&(1<<-b)-1,w>>=-b,b+=u;b>0;a=a*256+r[e+y],y+=_,b-=8);for(l=a&(1<<-b)-1,a>>=-b,b+=s;b>0;l=l*256+r[e+y],y+=_,b-=8);if(a===0)a=1-g;else{if(a===d)return l?NaN:(w?-1:1)*(1/0);l=l+Math.pow(2,s),a=a-g}return(w?-1:1)*l*Math.pow(2,a-s)};qt.write=function(r,e,t,s,n,a){var l,u,d,g=a*8-n-1,b=(1<<g)-1,y=b>>1,_=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=s?0:a-1,k=s?1:-1,te=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,l=b):(l=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-l))<1&&(l--,d*=2),l+y>=1?e+=_/d:e+=_*Math.pow(2,1-y),e*d>=2&&(l++,d/=2),l+y>=b?(u=0,l=b):l+y>=1?(u=(e*d-1)*Math.pow(2,n),l=l+y):(u=e*Math.pow(2,y-1)*Math.pow(2,n),l=0));n>=8;r[t+w]=u&255,w+=k,u/=256,n-=8);for(l=l<<n|u,g+=n;g>0;r[t+w]=l&255,w+=k,l/=256,g-=8);r[t+w-k]|=te*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(r){const e=gt,t=qt,s=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=u,r.SlowBuffer=ue,r.INSPECT_MAX_BYTES=50;const n=2147483647;r.kMaxLength=n,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const c=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(c,i),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function l(c){if(c>n)throw new RangeError('The value "'+c+'" is invalid for option "size"');const i=new Uint8Array(c);return Object.setPrototypeOf(i,u.prototype),i}function u(c,i,o){if(typeof c=="number"){if(typeof i=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return y(c)}return d(c,i,o)}u.poolSize=8192;function d(c,i,o){if(typeof c=="string")return _(c,i);if(ArrayBuffer.isView(c))return k(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(H(c,ArrayBuffer)||c&&H(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(H(c,SharedArrayBuffer)||c&&H(c.buffer,SharedArrayBuffer)))return te(c,i,o);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=c.valueOf&&c.valueOf();if(h!=null&&h!==c)return u.from(h,i,o);const p=_t(c);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),i,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,i,o){return d(c,i,o)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function g(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function b(c,i,o){return g(c),c<=0?l(c):i!==void 0?typeof o=="string"?l(c).fill(i,o):l(c).fill(i):l(c)}u.alloc=function(c,i,o){return b(c,i,o)};function y(c){return g(c),l(c<0?0:Pe(c)|0)}u.allocUnsafe=function(c){return y(c)},u.allocUnsafeSlow=function(c){return y(c)};function _(c,i){if((typeof i!="string"||i==="")&&(i="utf8"),!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);const o=de(c,i)|0;let h=l(o);const p=h.write(c,i);return p!==o&&(h=h.slice(0,p)),h}function w(c){const i=c.length<0?0:Pe(c.length)|0,o=l(i);for(let h=0;h<i;h+=1)o[h]=c[h]&255;return o}function k(c){if(H(c,Uint8Array)){const i=new Uint8Array(c);return te(i.buffer,i.byteOffset,i.byteLength)}return w(c)}function te(c,i,o){if(i<0||c.byteLength<i)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<i+(o||0))throw new RangeError('"length" is outside of buffer bounds');let h;return i===void 0&&o===void 0?h=new Uint8Array(c):o===void 0?h=new Uint8Array(c,i):h=new Uint8Array(c,i,o),Object.setPrototypeOf(h,u.prototype),h}function _t(c){if(u.isBuffer(c)){const i=Pe(c.length)|0,o=l(i);return o.length===0||c.copy(o,0,0,i),o}if(c.length!==void 0)return typeof c.length!="number"||Et(c.length)?l(0):w(c);if(c.type==="Buffer"&&Array.isArray(c.data))return w(c.data)}function Pe(c){if(c>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return c|0}function ue(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(i){return i!=null&&i._isBuffer===!0&&i!==u.prototype},u.compare=function(i,o){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),H(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),!u.isBuffer(i)||!u.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(i===o)return 0;let h=i.length,p=o.length;for(let f=0,m=Math.min(h,p);f<m;++f)if(i[f]!==o[f]){h=i[f],p=o[f];break}return h<p?-1:p<h?1:0},u.isEncoding=function(i){switch(String(i).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(i,o){if(!Array.isArray(i))throw new TypeError('"list" argument must be an Array of Buffers');if(i.length===0)return u.alloc(0);let h;if(o===void 0)for(o=0,h=0;h<i.length;++h)o+=i[h].length;const p=u.allocUnsafe(o);let f=0;for(h=0;h<i.length;++h){let m=i[h];if(H(m,Uint8Array))f+m.length>p.length?(u.isBuffer(m)||(m=u.from(m)),m.copy(p,f)):Uint8Array.prototype.set.call(p,m,f);else if(u.isBuffer(m))m.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=m.length}return p};function de(c,i){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||H(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const o=c.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&o===0)return 0;let p=!1;for(;;)switch(i){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return xt(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return er(c).length;default:if(p)return h?-1:xt(c).length;i=(""+i).toLowerCase(),p=!0}}u.byteLength=de;function wt(c,i,o){let h=!1;if((i===void 0||i<0)&&(i=0),i>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,i>>>=0,o<=i))return"";for(c||(c="utf8");;)switch(c){case"hex":return vi(this,i,o);case"utf8":case"utf-8":return Vt(this,i,o);case"ascii":return _i(this,i,o);case"latin1":case"binary":return wi(this,i,o);case"base64":return bi(this,i,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xi(this,i,o);default:if(h)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function W(c,i,o){const h=c[i];c[i]=c[o],c[o]=h}u.prototype.swap16=function(){const i=this.length;if(i%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let o=0;o<i;o+=2)W(this,o,o+1);return this},u.prototype.swap32=function(){const i=this.length;if(i%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let o=0;o<i;o+=4)W(this,o,o+3),W(this,o+1,o+2);return this},u.prototype.swap64=function(){const i=this.length;if(i%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let o=0;o<i;o+=8)W(this,o,o+7),W(this,o+1,o+6),W(this,o+2,o+5),W(this,o+3,o+4);return this},u.prototype.toString=function(){const i=this.length;return i===0?"":arguments.length===0?Vt(this,0,i):wt.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(i){if(!u.isBuffer(i))throw new TypeError("Argument must be a Buffer");return this===i?!0:u.compare(this,i)===0},u.prototype.inspect=function(){let i="";const o=r.INSPECT_MAX_BYTES;return i=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(i+=" ... "),"<Buffer "+i+">"},s&&(u.prototype[s]=u.prototype.inspect),u.prototype.compare=function(i,o,h,p,f){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(i))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof i);if(o===void 0&&(o=0),h===void 0&&(h=i?i.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),o<0||h>i.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&o>=h)return 0;if(p>=f)return-1;if(o>=h)return 1;if(o>>>=0,h>>>=0,p>>>=0,f>>>=0,this===i)return 0;let m=f-p,E=h-o;const S=Math.min(m,E),A=this.slice(p,f),C=i.slice(o,h);for(let $=0;$<S;++$)if(A[$]!==C[$]){m=A[$],E=C[$];break}return m<E?-1:E<m?1:0};function Ge(c,i,o,h,p){if(c.length===0)return-1;if(typeof o=="string"?(h=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Et(o)&&(o=p?0:c.length-1),o<0&&(o=c.length+o),o>=c.length){if(p)return-1;o=c.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof i=="string"&&(i=u.from(i,h)),u.isBuffer(i))return i.length===0?-1:Se(c,i,o,h,p);if(typeof i=="number")return i=i&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(c,i,o):Uint8Array.prototype.lastIndexOf.call(c,i,o):Se(c,[i],o,h,p);throw new TypeError("val must be string, number or Buffer")}function Se(c,i,o,h,p){let f=1,m=c.length,E=i.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(c.length<2||i.length<2)return-1;f=2,m/=2,E/=2,o/=2}function S(C,$){return f===1?C[$]:C.readUInt16BE($*f)}let A;if(p){let C=-1;for(A=o;A<m;A++)if(S(c,A)===S(i,C===-1?0:A-C)){if(C===-1&&(C=A),A-C+1===E)return C*f}else C!==-1&&(A-=A-C),C=-1}else for(o+E>m&&(o=m-E),A=o;A>=0;A--){let C=!0;for(let $=0;$<E;$++)if(S(c,A+$)!==S(i,$)){C=!1;break}if(C)return A}return-1}u.prototype.includes=function(i,o,h){return this.indexOf(i,o,h)!==-1},u.prototype.indexOf=function(i,o,h){return Ge(this,i,o,h,!0)},u.prototype.lastIndexOf=function(i,o,h){return Ge(this,i,o,h,!1)};function Je(c,i,o,h){o=Number(o)||0;const p=c.length-o;h?(h=Number(h),h>p&&(h=p)):h=p;const f=i.length;h>f/2&&(h=f/2);let m;for(m=0;m<h;++m){const E=parseInt(i.substr(m*2,2),16);if(Et(E))return m;c[o+m]=E}return m}function pi(c,i,o,h){return Ke(xt(i,c.length-o),c,o,h)}function fi(c,i,o,h){return Ke(Pi(i),c,o,h)}function mi(c,i,o,h){return Ke(er(i),c,o,h)}function gi(c,i,o,h){return Ke(Si(i,c.length-o),c,o,h)}u.prototype.write=function(i,o,h,p){if(o===void 0)p="utf8",h=this.length,o=0;else if(h===void 0&&typeof o=="string")p=o,h=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(h)?(h=h>>>0,p===void 0&&(p="utf8")):(p=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-o;if((h===void 0||h>f)&&(h=f),i.length>0&&(h<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let m=!1;for(;;)switch(p){case"hex":return Je(this,i,o,h);case"utf8":case"utf-8":return pi(this,i,o,h);case"ascii":case"latin1":case"binary":return fi(this,i,o,h);case"base64":return mi(this,i,o,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gi(this,i,o,h);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function bi(c,i,o){return i===0&&o===c.length?e.fromByteArray(c):e.fromByteArray(c.slice(i,o))}function Vt(c,i,o){o=Math.min(c.length,o);const h=[];let p=i;for(;p<o;){const f=c[p];let m=null,E=f>239?4:f>223?3:f>191?2:1;if(p+E<=o){let S,A,C,$;switch(E){case 1:f<128&&(m=f);break;case 2:S=c[p+1],(S&192)===128&&($=(f&31)<<6|S&63,$>127&&(m=$));break;case 3:S=c[p+1],A=c[p+2],(S&192)===128&&(A&192)===128&&($=(f&15)<<12|(S&63)<<6|A&63,$>2047&&($<55296||$>57343)&&(m=$));break;case 4:S=c[p+1],A=c[p+2],C=c[p+3],(S&192)===128&&(A&192)===128&&(C&192)===128&&($=(f&15)<<18|(S&63)<<12|(A&63)<<6|C&63,$>65535&&$<1114112&&(m=$))}}m===null?(m=65533,E=1):m>65535&&(m-=65536,h.push(m>>>10&1023|55296),m=56320|m&1023),h.push(m),p+=E}return yi(h)}const Wt=4096;function yi(c){const i=c.length;if(i<=Wt)return String.fromCharCode.apply(String,c);let o="",h=0;for(;h<i;)o+=String.fromCharCode.apply(String,c.slice(h,h+=Wt));return o}function _i(c,i,o){let h="";o=Math.min(c.length,o);for(let p=i;p<o;++p)h+=String.fromCharCode(c[p]&127);return h}function wi(c,i,o){let h="";o=Math.min(c.length,o);for(let p=i;p<o;++p)h+=String.fromCharCode(c[p]);return h}function vi(c,i,o){const h=c.length;(!i||i<0)&&(i=0),(!o||o<0||o>h)&&(o=h);let p="";for(let f=i;f<o;++f)p+=Ci[c[f]];return p}function xi(c,i,o){const h=c.slice(i,o);let p="";for(let f=0;f<h.length-1;f+=2)p+=String.fromCharCode(h[f]+h[f+1]*256);return p}u.prototype.slice=function(i,o){const h=this.length;i=~~i,o=o===void 0?h:~~o,i<0?(i+=h,i<0&&(i=0)):i>h&&(i=h),o<0?(o+=h,o<0&&(o=0)):o>h&&(o=h),o<i&&(o=i);const p=this.subarray(i,o);return Object.setPrototypeOf(p,u.prototype),p};function I(c,i,o){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+i>o)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(i,o,h){i=i>>>0,o=o>>>0,h||I(i,o,this.length);let p=this[i],f=1,m=0;for(;++m<o&&(f*=256);)p+=this[i+m]*f;return p},u.prototype.readUintBE=u.prototype.readUIntBE=function(i,o,h){i=i>>>0,o=o>>>0,h||I(i,o,this.length);let p=this[i+--o],f=1;for(;o>0&&(f*=256);)p+=this[i+--o]*f;return p},u.prototype.readUint8=u.prototype.readUInt8=function(i,o){return i=i>>>0,o||I(i,1,this.length),this[i]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(i,o){return i=i>>>0,o||I(i,2,this.length),this[i]|this[i+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(i,o){return i=i>>>0,o||I(i,2,this.length),this[i]<<8|this[i+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(i,o){return i=i>>>0,o||I(i,4,this.length),(this[i]|this[i+1]<<8|this[i+2]<<16)+this[i+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(i,o){return i=i>>>0,o||I(i,4,this.length),this[i]*16777216+(this[i+1]<<16|this[i+2]<<8|this[i+3])},u.prototype.readBigUInt64LE=J(function(i){i=i>>>0,fe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Ce(i,this.length-8);const p=o+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24,f=this[++i]+this[++i]*2**8+this[++i]*2**16+h*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=J(function(i){i=i>>>0,fe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Ce(i,this.length-8);const p=o*2**24+this[++i]*2**16+this[++i]*2**8+this[++i],f=this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h;return(BigInt(p)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(i,o,h){i=i>>>0,o=o>>>0,h||I(i,o,this.length);let p=this[i],f=1,m=0;for(;++m<o&&(f*=256);)p+=this[i+m]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*o)),p},u.prototype.readIntBE=function(i,o,h){i=i>>>0,o=o>>>0,h||I(i,o,this.length);let p=o,f=1,m=this[i+--p];for(;p>0&&(f*=256);)m+=this[i+--p]*f;return f*=128,m>=f&&(m-=Math.pow(2,8*o)),m},u.prototype.readInt8=function(i,o){return i=i>>>0,o||I(i,1,this.length),this[i]&128?(255-this[i]+1)*-1:this[i]},u.prototype.readInt16LE=function(i,o){i=i>>>0,o||I(i,2,this.length);const h=this[i]|this[i+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(i,o){i=i>>>0,o||I(i,2,this.length);const h=this[i+1]|this[i]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(i,o){return i=i>>>0,o||I(i,4,this.length),this[i]|this[i+1]<<8|this[i+2]<<16|this[i+3]<<24},u.prototype.readInt32BE=function(i,o){return i=i>>>0,o||I(i,4,this.length),this[i]<<24|this[i+1]<<16|this[i+2]<<8|this[i+3]},u.prototype.readBigInt64LE=J(function(i){i=i>>>0,fe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Ce(i,this.length-8);const p=this[i+4]+this[i+5]*2**8+this[i+6]*2**16+(h<<24);return(BigInt(p)<<BigInt(32))+BigInt(o+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24)}),u.prototype.readBigInt64BE=J(function(i){i=i>>>0,fe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Ce(i,this.length-8);const p=(o<<24)+this[++i]*2**16+this[++i]*2**8+this[++i];return(BigInt(p)<<BigInt(32))+BigInt(this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h)}),u.prototype.readFloatLE=function(i,o){return i=i>>>0,o||I(i,4,this.length),t.read(this,i,!0,23,4)},u.prototype.readFloatBE=function(i,o){return i=i>>>0,o||I(i,4,this.length),t.read(this,i,!1,23,4)},u.prototype.readDoubleLE=function(i,o){return i=i>>>0,o||I(i,8,this.length),t.read(this,i,!0,52,8)},u.prototype.readDoubleBE=function(i,o){return i=i>>>0,o||I(i,8,this.length),t.read(this,i,!1,52,8)};function R(c,i,o,h,p,f){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(i>p||i<f)throw new RangeError('"value" argument is out of bounds');if(o+h>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(i,o,h,p){if(i=+i,o=o>>>0,h=h>>>0,!p){const E=Math.pow(2,8*h)-1;R(this,i,o,h,E,0)}let f=1,m=0;for(this[o]=i&255;++m<h&&(f*=256);)this[o+m]=i/f&255;return o+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(i,o,h,p){if(i=+i,o=o>>>0,h=h>>>0,!p){const E=Math.pow(2,8*h)-1;R(this,i,o,h,E,0)}let f=h-1,m=1;for(this[o+f]=i&255;--f>=0&&(m*=256);)this[o+f]=i/m&255;return o+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,1,255,0),this[o]=i&255,o+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,2,65535,0),this[o]=i&255,this[o+1]=i>>>8,o+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,2,65535,0),this[o]=i>>>8,this[o+1]=i&255,o+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,4,4294967295,0),this[o+3]=i>>>24,this[o+2]=i>>>16,this[o+1]=i>>>8,this[o]=i&255,o+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,4,4294967295,0),this[o]=i>>>24,this[o+1]=i>>>16,this[o+2]=i>>>8,this[o+3]=i&255,o+4};function Gt(c,i,o,h,p){Zt(i,h,p,c,o,7);let f=Number(i&BigInt(4294967295));c[o++]=f,f=f>>8,c[o++]=f,f=f>>8,c[o++]=f,f=f>>8,c[o++]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[o++]=m,m=m>>8,c[o++]=m,m=m>>8,c[o++]=m,m=m>>8,c[o++]=m,o}function Jt(c,i,o,h,p){Zt(i,h,p,c,o,7);let f=Number(i&BigInt(4294967295));c[o+7]=f,f=f>>8,c[o+6]=f,f=f>>8,c[o+5]=f,f=f>>8,c[o+4]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[o+3]=m,m=m>>8,c[o+2]=m,m=m>>8,c[o+1]=m,m=m>>8,c[o]=m,o+8}u.prototype.writeBigUInt64LE=J(function(i,o=0){return Gt(this,i,o,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=J(function(i,o=0){return Jt(this,i,o,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(i,o,h,p){if(i=+i,o=o>>>0,!p){const S=Math.pow(2,8*h-1);R(this,i,o,h,S-1,-S)}let f=0,m=1,E=0;for(this[o]=i&255;++f<h&&(m*=256);)i<0&&E===0&&this[o+f-1]!==0&&(E=1),this[o+f]=(i/m>>0)-E&255;return o+h},u.prototype.writeIntBE=function(i,o,h,p){if(i=+i,o=o>>>0,!p){const S=Math.pow(2,8*h-1);R(this,i,o,h,S-1,-S)}let f=h-1,m=1,E=0;for(this[o+f]=i&255;--f>=0&&(m*=256);)i<0&&E===0&&this[o+f+1]!==0&&(E=1),this[o+f]=(i/m>>0)-E&255;return o+h},u.prototype.writeInt8=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,1,127,-128),i<0&&(i=255+i+1),this[o]=i&255,o+1},u.prototype.writeInt16LE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,2,32767,-32768),this[o]=i&255,this[o+1]=i>>>8,o+2},u.prototype.writeInt16BE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,2,32767,-32768),this[o]=i>>>8,this[o+1]=i&255,o+2},u.prototype.writeInt32LE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,4,2147483647,-2147483648),this[o]=i&255,this[o+1]=i>>>8,this[o+2]=i>>>16,this[o+3]=i>>>24,o+4},u.prototype.writeInt32BE=function(i,o,h){return i=+i,o=o>>>0,h||R(this,i,o,4,2147483647,-2147483648),i<0&&(i=4294967295+i+1),this[o]=i>>>24,this[o+1]=i>>>16,this[o+2]=i>>>8,this[o+3]=i&255,o+4},u.prototype.writeBigInt64LE=J(function(i,o=0){return Gt(this,i,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=J(function(i,o=0){return Jt(this,i,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Kt(c,i,o,h,p,f){if(o+h>c.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Yt(c,i,o,h,p){return i=+i,o=o>>>0,p||Kt(c,i,o,4),t.write(c,i,o,h,23,4),o+4}u.prototype.writeFloatLE=function(i,o,h){return Yt(this,i,o,!0,h)},u.prototype.writeFloatBE=function(i,o,h){return Yt(this,i,o,!1,h)};function Qt(c,i,o,h,p){return i=+i,o=o>>>0,p||Kt(c,i,o,8),t.write(c,i,o,h,52,8),o+8}u.prototype.writeDoubleLE=function(i,o,h){return Qt(this,i,o,!0,h)},u.prototype.writeDoubleBE=function(i,o,h){return Qt(this,i,o,!1,h)},u.prototype.copy=function(i,o,h,p){if(!u.isBuffer(i))throw new TypeError("argument should be a Buffer");if(h||(h=0),!p&&p!==0&&(p=this.length),o>=i.length&&(o=i.length),o||(o=0),p>0&&p<h&&(p=h),p===h||i.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),i.length-o<p-h&&(p=i.length-o+h);const f=p-h;return this===i&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,h,p):Uint8Array.prototype.set.call(i,this.subarray(h,p),o),f},u.prototype.fill=function(i,o,h,p){if(typeof i=="string"){if(typeof o=="string"?(p=o,o=0,h=this.length):typeof h=="string"&&(p=h,h=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!u.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(i.length===1){const m=i.charCodeAt(0);(p==="utf8"&&m<128||p==="latin1")&&(i=m)}}else typeof i=="number"?i=i&255:typeof i=="boolean"&&(i=Number(i));if(o<0||this.length<o||this.length<h)throw new RangeError("Out of range index");if(h<=o)return this;o=o>>>0,h=h===void 0?this.length:h>>>0,i||(i=0);let f;if(typeof i=="number")for(f=o;f<h;++f)this[f]=i;else{const m=u.isBuffer(i)?i:u.from(i,p),E=m.length;if(E===0)throw new TypeError('The value "'+i+'" is invalid for argument "value"');for(f=0;f<h-o;++f)this[f+o]=m[f%E]}return this};const pe={};function vt(c,i,o){pe[c]=class extends o{constructor(){super(),Object.defineProperty(this,"message",{value:i.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}vt("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),vt("ERR_INVALID_ARG_TYPE",function(c,i){return`The "${c}" argument must be of type number. Received type ${typeof i}`},TypeError),vt("ERR_OUT_OF_RANGE",function(c,i,o){let h=`The value of "${c}" is out of range.`,p=o;return Number.isInteger(o)&&Math.abs(o)>2**32?p=Xt(String(o)):typeof o=="bigint"&&(p=String(o),(o>BigInt(2)**BigInt(32)||o<-(BigInt(2)**BigInt(32)))&&(p=Xt(p)),p+="n"),h+=` It must be ${i}. Received ${p}`,h},RangeError);function Xt(c){let i="",o=c.length;const h=c[0]==="-"?1:0;for(;o>=h+4;o-=3)i=`_${c.slice(o-3,o)}${i}`;return`${c.slice(0,o)}${i}`}function Ei(c,i,o){fe(i,"offset"),(c[i]===void 0||c[i+o]===void 0)&&Ce(i,c.length-(o+1))}function Zt(c,i,o,h,p,f){if(c>o||c<i){const m=typeof i=="bigint"?"n":"";let E;throw f>3?i===0||i===BigInt(0)?E=`>= 0${m} and < 2${m} ** ${(f+1)*8}${m}`:E=`>= -(2${m} ** ${(f+1)*8-1}${m}) and < 2 ** ${(f+1)*8-1}${m}`:E=`>= ${i}${m} and <= ${o}${m}`,new pe.ERR_OUT_OF_RANGE("value",E,c)}Ei(h,p,f)}function fe(c,i){if(typeof c!="number")throw new pe.ERR_INVALID_ARG_TYPE(i,"number",c)}function Ce(c,i,o){throw Math.floor(c)!==c?(fe(c,o),new pe.ERR_OUT_OF_RANGE(o||"offset","an integer",c)):i<0?new pe.ERR_BUFFER_OUT_OF_BOUNDS:new pe.ERR_OUT_OF_RANGE(o||"offset",`>= ${o?1:0} and <= ${i}`,c)}const $i=/[^+/0-9A-Za-z-_]/g;function Ai(c){if(c=c.split("=")[0],c=c.trim().replace($i,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function xt(c,i){i=i||1/0;let o;const h=c.length;let p=null;const f=[];for(let m=0;m<h;++m){if(o=c.charCodeAt(m),o>55295&&o<57344){if(!p){if(o>56319){(i-=3)>-1&&f.push(239,191,189);continue}else if(m+1===h){(i-=3)>-1&&f.push(239,191,189);continue}p=o;continue}if(o<56320){(i-=3)>-1&&f.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(i-=3)>-1&&f.push(239,191,189);if(p=null,o<128){if((i-=1)<0)break;f.push(o)}else if(o<2048){if((i-=2)<0)break;f.push(o>>6|192,o&63|128)}else if(o<65536){if((i-=3)<0)break;f.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((i-=4)<0)break;f.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return f}function Pi(c){const i=[];for(let o=0;o<c.length;++o)i.push(c.charCodeAt(o)&255);return i}function Si(c,i){let o,h,p;const f=[];for(let m=0;m<c.length&&!((i-=2)<0);++m)o=c.charCodeAt(m),h=o>>8,p=o%256,f.push(p),f.push(h);return f}function er(c){return e.toByteArray(Ai(c))}function Ke(c,i,o,h){let p;for(p=0;p<h&&!(p+o>=i.length||p>=c.length);++p)i[p+o]=c[p];return p}function H(c,i){return c instanceof i||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===i.name}function Et(c){return c!==c}const Ci=function(){const c="0123456789abcdef",i=new Array(256);for(let o=0;o<16;++o){const h=o*16;for(let p=0;p<16;++p)i[h+p]=c[o]+c[p]}return i}();function J(c){return typeof BigInt>"u"?Ti:c}function Ti(){throw new Error("BigInt not supported")}})(Ht);var In=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,hi=(r,e,t,s)=>{for(var n=s>1?void 0:s?Bn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&In(e,t,n),n};let lt=class extends P{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return v`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{name:r}=this.track,e=this.track.artists[0].name,{url:t}=this.track.album.images[0];return v`
      <section class="single-track" @click=${()=>this._handleClick()}>
        <img src="${t}" alt="Album cover for ${r}" class="track-image" />
        <section class="details">
          <p class="track-name">${r}</p>
          <p class="artist-name">${e}</p>
        </section>
      </section>
    `}};lt.styles=O`
    .single-track {
      display: flex;
      align-items: center;
      padding: 5px;
      margin-bottom: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .single-track:hover {
      background-color: var(--hover-color);
    }

    .track-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
    }

    .track-name,
    .artist-name {
      margin: 0;
      padding: 0;
    }

    .track-name {
      font-weight: 400;
      font-size: 0.8em;
      color: var(--text-color);
    }

    .artist-name {
      font-size: 0.6em;
      color: var(--subtext-color);
    }
  `;hi([x({type:Object})],lt.prototype,"track",2);lt=hi([T("track-card")],lt);var Rn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,bt=(r,e,t,s)=>{for(var n=s>1?void 0:s?kn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&Rn(e,t,n),n};let xe=class extends P{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(r){const e=`https://api.spotify.com/v1/tracks/${r}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const s=await t.json();return this.currentTracks=[...this.currentTracks,s],s}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Ht.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const s=await t.json();this.accessToken=s.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var r;super.connectedCallback(),(r=this.comment)!=null&&r.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(r){try{this.currentTracks=[];const e=r.map(s=>this.findSong(s)),t=await Promise.all(e);this.currentTracks=t.filter(s=>s!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return v`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{userName:r,commentTime:e,commentMessage:t}=this.comment;return v`
      <section class="single-comment">
        <section class="comment-left">
          <section class="details">
            <section class="details-header">
              <p class="comment-name">${r}</p>
              <p class="comment-time">${e}</p>
            </section>
            <p class="comment-message">${t}</p>
          </section>
        </section>
        <section class="comment-right">
          ${this.currentTracks.map(s=>v`
              <div class="track-info">
                <img
                  src="${s.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${s.name}</p>
                  <p class="track-artist">
                    ${s.artists.map(n=>n.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};xe.styles=O`
    .single-comment {
      display: flex;
      flex-direction: row;
      background-color: var(--background-color);
      color: var(--text-color);
      padding: 15px;
      border-radius: var(--default-border-radius);
      margin-bottom: 10px;
      box-shadow: var(--box-shadow);
    }

    .comment-left,
    .comment-right {
      flex: 1;
    }

    .details-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5em;
    }

    .comment-name {
      font-weight: 600;
      margin-right: 0.5em;
    }

    .comment-time {
      font-size: var(--small-size);
      color: var(--subtext-color);
    }

    .comment-message {
      margin-top: 1em;
      font-size: 1em;
    }

    .track-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
    }

    .track-name-and-artist {
      display: flex;
      flex-direction: column;
      align-content: center;
      margin-left: 10px;
    }

    .track-name,
    .track-artist {
      margin: 0;
    }

    .track-artist {
      font-size: 0.875em;
      color: var(--subtext-color);
    }

    .track-image {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      object-fit: cover;
    }
  `;bt([x({type:Object})],xe.prototype,"comment",2);bt([x({type:String})],xe.prototype,"accessToken",2);bt([U()],xe.prototype,"currentTracks",2);xe=bt([T("comment-card")],xe);var Fn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,z=(r,e,t,s)=>{for(var n=s>1?void 0:s?Dn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&Fn(e,t,n),n};let F=class extends P{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post",this.addEventListener("track-selected",r=>{const e=r;this._selectTrack(e.detail.track)})}_selectTrack(r){const e=this.selectedTracks.findIndex(t=>t.id===r.id);e>-1?this.selectedTracks=[...this.selectedTracks.slice(0,e),...this.selectedTracks.slice(e+1)]:this.selectedTracks=[...this.selectedTracks,r]}_calculateTimeFromDate(){var n;const r=(n=this.post)!=null&&n.postTime?new Date(this.post.postTime):void 0;if(!r)return console.error("Posted time is undefined"),"Post time cannot be found.";let s=(new Date().getTime()-r.getTime())/(1e3*60*60);return s=Math.round(s),s<1?"Less than an hour ago.":s>23?`${s%24} days ago`:`${s} hours ago`}async _recommendTracks(r){var d;r.preventDefault(),this.submissionSuccess=null;const e=r.target,t=new FormData(e),s="http://localhost:3000";let n=t.get("input-comment");const a=this.selectedTracks.map(g=>g.id),l=`${s}/posts/${(d=this.post)==null?void 0:d._id}`,u={userName:"aidan",commentTime:new Date,commentMessage:n,SongIDs:a};try{if((await fetch(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).ok)console.log("Comment successfully added"),this._clearTopTracks(),this._clearSelectedTracks(),this.submissionSuccess=!0,e.reset(),this._handleCommentAdded();else throw new Error("Failed to post comment")}catch(g){console.error("Error:",g),this.submissionSuccess=!1}}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),this.searchSpotify()}_clearTopTracks(){this.topTracks=[]}_clearSelectedTracks(){this.selectedTracks=[]}async fetchTopTracks(r){const e=await fetch(`https://api.spotify.com/v1/artists/${r}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?this.topTracks=t.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}connectedCallback(){var r;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((r=this.post)==null?void 0:r.comments)||[])}async _handleCommentAdded(){var e;console.log("Comment Created, Now Refreshing Component");const r="http://localhost:3000";if(console.log("SERVER URL FROM COMMENT ADDED: ",r),!((e=this.post)!=null&&e._id)){console.error("Post ID is undefined.");return}try{const t=await fetch(`${r}/comments/${this.post._id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch comments");const s=await t.json();this.getPostComments=[...s]}catch(t){console.error("Error fetching comments:",t)}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Ht.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const s=await t.json();this.accessToken=s.access_token}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const r=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(r,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();t.tracks.items.length>0?this.topTracks=t.tracks.items:(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t;const r=this._calculateTimeFromDate();return v`
      <section class="${this.expandedClass}">
        <section class="profile-name-time">
          <section class="individual-post-profile-image">
            <img src="/images/aidan_pfp.png" alt="placeholder image" />
            ${this.expanded?v`<div class="line-decoration"></div>`:v`<div></div>`}
            </button>
          </section>
          <section class="non-image-content">
            <section class="name-and-time">
              <h3 class="feed-name">${(e=this.post)==null?void 0:e.userName}</h3>
              <p class="time-posted">${r}</p>
            </section>
            <p class="message">${(t=this.post)==null?void 0:t.postMessage}</p>
            <button class="expand-unexpand" @click=${this._expand}>
              ${this.expanded?"Close song recommendation form.":"Recommend a song."}
            </button>
          </section>
        </section>

        ${this.expanded?v`
                <section class="expanded-window">
                  <section>
                    <h3 class="expanded-header">Leave a Comment</h3>
                  </section>
                  <section class="search-form">
                    <form class="search-bar-form" @submit=${this._handleSubmit}>
                      <input
                        type="text"
                        id="inputted-artist-name"
                        name="inputted-artist-name"
                        placeholder="Search for a song, artist, album... anything!"
                      />
                      <button class="recommend-songs" type="submit">
                        Search
                      </button>
                    </form>
                  </section>
                  <section class="search-and-selected">
                    <section class="query-results">
                      <h3 class="search-results">Search Results</h3>
                      ${this.topTracks.length>0?v`<div class="track-box-search-results">
                              ${this.topTracks.slice(0,5).map(s=>v`<track-card
                                      .track=${s}
                                    ></track-card>`)}
                            </div>
                            <div class="clear-results-section">
                              <button
                                class="clear-results"
                                @click=${this._clearTopTracks}
                              >
                                Clear Results
                              </button>
                            </div>`:v`<div class="track-box-search-results"></div>
                            <div class="clear-results-section">
                              <button
                                class="clear-results"
                                @click=${this._clearTopTracks}
                              >
                                Clear Results
                              </button>
                            </div>`}
                    </section>
                    <section class="selected-tracks">
                      <h3>Selected Songs</h3>
                      <div class="track-box-selected-tracks">
                        ${this.selectedTracks.map(s=>v`<track-card .track=${s}></track-card>`)}
                      </div>
                      <div class="clear-selected-tracks-section">
                        <button
                          class="clear-selected-tracks"
                          @click=${this._clearSelectedTracks}
                        >
                          Clear Selected Tracks
                        </button>
                      </div>
                    </section>
                  </section>
                  <section class="expanded-content">
                    <section class="recommend-form">
                      ${this.submissionSuccess===!0?v`<p>Submission successful!</p>`:""}
                      ${this.submissionSuccess===!1?v`<p>Submission failed. Please try again.</p>`:""}
                      <form
                        class="comment-message-form"
                        @submit=${this._recommendTracks}
                      >
                        <input
                          type="text"
                          id="input-comment"
                          name="input-comment"
                          placeholder="Leave a message..."
                        />
                        <button class="recommend-songs" type="submit">
                          Submit
                        </button>
                      </form>
                    </section>
                  </section>
                </section>
              `:""}
      </section>
    `}};F.styles=O`
    .feed-single-post,
    .feed-single-post-expanded {
      background-color: var(--background-color);
      padding: 10px;
      width: 38em;
      margin-bottom: 15px;
      color: var(--text-color);
    }

    .profile-name-time {
      display: flex;
      flex-direction: row;
    }

    .line-decoration {
      width: 2px;
      height: 4em;
      border-left: 2px solid var(--sub-menu-color);
      position: relative;
      left: 1.5em;
      bottom: 0.5em;
      z-index: 0;
    }

    .message {
      margin: 0;
      padding: 0;
      margin-bottom: 0.6em;
      font-size: 1.2em;
    }

    .individual-post-profile-image img {
      width: 60px;
      height: 60px;
      position: relative;
      z-index: 1;
    }

    .individual-post-profile-image {
      margin-right: 1em;
      position: relative;
      top: 15px;
    }

    .name-and-time-and-expand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
    }

    .name-and-time {
      display: flex;
      align-items: center;
      flex-grow: 1;
      margin: 0;
      margin-bottom: 0.15em;
    }

    .feed-name {
      font-weight: 600;
      margin: 0;
      margin-right: 0.8em; /* Adjust as needed */
      padding: 0;
    }

    .time-posted {
      font-size: 0.8em;
      color: var(--subtext-color);
      flex-grow: 1;
      font-weight: 300;
    }

    .expand-unexpand {
      text-decoration: underline;
      background: none;
      color: var(--subtext-color);
      border: none;
      cursor: pointer;
      font-size: 0.8em;
      font-weight: 300;
      margin: 0;
      margin-bottom: 1em;
      padding: 0;
      white-space: nowrap; /* Prevents wrapping on small screens */
    }

    .expand-unexpand:hover {
      color: var(--text-color);
    }

    .selected-tracks,
    .query-results {
      width: 50%;
    }

    .track-box-selected-tracks,
    .track-box-search-results {
      background: var(--sub-menu-color);
      border-radius: 12px;
      padding: 10px;
      width: 92%;
      height: 16.95em; /* overflows if smaller */
      margin-top: 10px;
      overflow: auto; /* Allow scrolling if content exceeds container size */
    }
    .query-results h3,
    .selected-tracks h3 {
      color: var(--text-color);
      font-size: 1.1em;
      font-weight: 300;
      margin: 0;
      margin-top: 6px;
    }

    .track-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
    }

    .track-details {
      flex-grow: 1;
    }

    .track-name,
    .track-artist {
      margin: 0;
      padding: 0;
    }

    .track-name {
      font-weight: bold;
    }

    .track-artist {
      font-size: var(--smaller-size);
      color: var(--subtext-color);
    }

    /* Search Form */
    .search-form input[type="text"] {
      width: calc(
        100% - 130px
      ); /* Adjust based on button width to fit on one line */
      padding: 10px 0px 10px 14px;
      margin-right: 5px; /* Space between input and button */
      border: 1px solid var(--section-border-color);
      background-color: var(blue);
      font-weight: 300;
      color: var(--text-color);
      border-radius: 50px;
    }

    .search-and-selected {
      display: flex;
      flex-direction: row;
    }

    .expanded-window {
      background: var(--menu-color);
      border-left: 2px solid var(--sub-menu-color);
      margin-left: 1.51em;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding: 0.3em 2em 1em 2em;
    }

    .expanded-header {
      font-weight: 500;
    }
    .search-bar-form {
      display: flex;
      flex-direction: row;
    }

    #input-comment {
      border: none;
      background: var(--background-color);
      border: 1px solid var(--section-border-color);
      width: 92%;
      height: 2em;
      padding: 7px;
      border-radius: 4px;
    }

    .comment-message-form {
      display: flex;
      flex-direction: row;
      width: 99%;
    }

    .search-form {
      margin-bottom: 15px;
    }

    .search-form button,
    button.recommend-songs {
      padding: 2px 20px 2px 20px;
      margin-left: 10px;
      background-color: var(--button-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button.recommend-songs {
      padding: 6px 20px;
      margin-left: 1em;
    }

    .search-form button:hover {
      background-color: var(--button-hover-color);
    }

    .clear-results-section button,
    .clear-selected-tracks-section button {
      text-decoration: underline;
      cursor: pointer;
      border: none;
      color: var(--subtext-color);
    }

    .clear-results:hover,
    .clear-selected-tracks:hover {
      color: var(--text-color);
    }

    /* Styling for the entire expanded content section */
    .expanded-content {
      padding-top: 20px; /* Space above the content */
    }
  `;z([x({type:Object})],F.prototype,"post",2);z([U()],F.prototype,"getPostComments",2);z([U()],F.prototype,"expanded",2);z([U()],F.prototype,"submissionSuccess",2);z([x()],F.prototype,"expandedText",2);z([x({type:String})],F.prototype,"requestedSearchQuery",2);z([x({type:String})],F.prototype,"accessToken",2);z([x()],F.prototype,"topTracks",2);z([x()],F.prototype,"selectedTracks",2);z([U()],F.prototype,"expandedClass",2);F=z([T("feed-post")],F);var Mn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,ui=(r,e,t,s)=>{for(var n=s>1?void 0:s?Ln(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&Mn(e,t,n),n};let ht=class extends P{constructor(){super(...arguments),this.posts=[]}render(){return v`
      <div class="posts-container">
        ${this.posts.map(r=>v` <feed-post .post=${r}></feed-post>`)}
      </div>
    `}};ht.styles=O``;ui([x({type:Array})],ht.prototype,"posts",2);ht=ui([T("feed-post-list")],ht);var jn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,yt=(r,e,t,s)=>{for(var n=s>1?void 0:s?Nn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&jn(e,t,n),n};let Ee=class extends P{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(r){r.preventDefault(),this.submissionSuccess=!1;const e=r.target;let s=new FormData(e).get("input-message");s?(console.log("submitting post!"),this._sendPostRequest(s,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(r,e){const t={userid:"65caf83fcdc541534288d60b",userName:"aidan",postTime:new Date,postMessage:r,comments:[]},s="http://localhost:3000";console.log("new post: ",t);try{const n=`${s}/posts`;if((await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(n){console.error("Error: ",n),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const r=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",r),this.dispatchEvent(r)}render(){return v`
      ${this.expanded?v`
        <section class="create-post-ui">
            <section class="post-top-bar">
                <h3>Create a Post!</h3>
                <button class="close-form" @click=${this._togglePost}>Close Form</button>
            </section>
            <form class="create-post-form" @submit=${this._submitPost}>
              <label for="input-message">Message</label>
              <textarea
                id="input-message"
                name="input-message"
                placeholder="What do you want to say?"
                rows="4" // You can adjust the rows as needed
              ></textarea>
              ${this.errorMessage?v`<p class="error-message">
                      Message input cannot be blank.
                    </p>`:""}
              <button class="post-button">Submit your post!</button>
            </form>
          </section>`:v` ${this.submissionSuccess?v`<p class="submit-success-message">
                  post successfully submitted
                </p>`:""}
            <button class="post-button" @click=${this._togglePost}>
              Create New Post &#43;
            </button>`}
    `}};Ee.styles=O`
    :host {
      display: block;
    }

    .post-button,
    .close-form {
      background: var(--button-color);
      color: white;
      border: none;
      margin-top: 1.5em;
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      font-size: 0.875em;
      transition: background-color 0.3s ease;
    }

    .post-button {
      margin-bottom: 1em;
    }

    .post-button:hover,
    .close-form:hover {
      background: var(--button-hover-color);
    }

    .create-post-ui {
      background-color: var(--menu-color);
      color: var(--text-color);
      border: 1.5px solid var(--section-border-color);
      padding: 2em;
      border-radius: 8px;
      box-shadow: var(--box-shadow);
      margin-bottom: 1em;
    }

    .create-post-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    textarea {
      background-color: var(--background-color);
      color: var(--text-color);
      padding: 8px;
      border-radius: 4px;
      border: 1px solid var(--section-border-color);
      resize: vertical;
    }

    .error-message {
      color: #ff6b6b; /* Brighter red for the text */
      font-size: 0.75em;
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .error-message:before {
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ff6b6b" viewBox="0 0 24 24" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'); /* Example error icon in SVG format */
      font-weight: bold;
    }

    .submit-success-message {
      color: #00e676;
      background-color: #1e442c;
      padding: 8px;
      border-radius: 4px;
      font-size: 0.875em;
      border: 1px solid #00e676;
      margin: 0;
    }

    .post-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `;yt([U()],Ee.prototype,"expanded",2);yt([U()],Ee.prototype,"submissionSuccess",2);yt([U()],Ee.prototype,"errorMessage",2);Ee=yt([T("create-post")],Ee);var zn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,di=(r,e,t,s)=>{for(var n=s>1?void 0:s?Hn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&zn(e,t,n),n};let ut=class extends P{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchData()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchData()}async _fetchData(){console.log("fetching posts!");const r="http://localhost:3000";try{const e=await fetch(`${r}/posts`);if(e.ok){const t=await e.json();this.posts=t,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",e.status)}catch(e){console.error("Error fetching posts:",e)}}render(){return v`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <create-post></create-post>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};ut.styles=O`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;di([U()],ut.prototype,"posts",2);ut=di([T("main-feed")],ut);var qn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Ve=(r,e,t,s)=>{for(var n=s>1?void 0:s?Vn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&qn(e,t,n),n};let le=class extends pt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}render(){return v`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `}};le.styles=O`
    .feed-page {
      display: flex;
      justify-content: center;
    }
  `;Ve([x({attribute:!1})],le.prototype,"location",2);Ve([x({reflect:!0})],le.prototype,"userid",1);Ve([x({reflect:!0})],le.prototype,"edit",1);Ve([x()],le.prototype,"profile",1);le=Ve([T("home-page")],le);const Wn=O`
  .page-content {
    display: flex;
    justify-content: center;
    width: 70%;
    margin: auto;
  }

  .descriptionAndForm {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .formHeader {
    margin: 0;
    padding: 0;
    margin-bottom: 0.5em;
  }

  .formParagraph {
    margin: 0;
    padding: 0;
  }

  .description {
    padding: 2.5em;
    padding-bottom: 0.5em;
  }
`;var Gn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,We=(r,e,t,s)=>{for(var n=s>1?void 0:s?Jn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&Gn(e,t,n),n};let he=class extends pt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return v`
      <section class="page-content">
        <div class="descriptionAndForm">
          <div class="description">
            <h2 class="formHeader">Set up your profile.</h2>
            <p class="formParagraph">
              You're almost ready to start matching the vibe, just take a few
              seconds to fill in some more details about yourself!
            </p>
          </div>
          <edit-profile-form .profile=${this.profile}></edit-profile-form>
        </div>
      </section>
    `}};he.styles=Wn;We([x({attribute:!1})],he.prototype,"location",2);We([x({reflect:!0})],he.prototype,"userid",1);We([x({reflect:!0})],he.prototype,"edit",1);We([x()],he.prototype,"profile",1);he=We([T("create-profile-page")],he);var Kn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,Qn=(r,e,t,s)=>{for(var n=s>1?void 0:s?Yn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(n=(s?l(e,t,n):l(n))||n);return s&&n&&Kn(e,t,n),n};let Xn=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"/createProfile/:userid",component:"create-profile-page"},{path:"(.*)",component:"not-found-page"}],Or=class extends Wr{constructor(){super(hs)}render(){return v`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Xn}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("MTVAPPElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Or=Qn([T("mtv-app")],Or);
