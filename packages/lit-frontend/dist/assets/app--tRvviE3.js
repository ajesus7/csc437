(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=globalThis,Ft=Qe.ShadowRoot&&(Qe.ShadyCSS===void 0||Qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),ar=new WeakMap;let jr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ft&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ar.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ar.set(t,e))}return e}toString(){return this.cssText}};const Ni=r=>new jr(typeof r=="string"?r:r+"",void 0,Nt),R=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,s,a)=>n+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new jr(t,r,Nt)},ji=(r,e)=>{if(Ft)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),s=Qe.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},cr=Ft?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ni(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Mi,defineProperty:Li,getOwnPropertyDescriptor:zi,getOwnPropertyNames:Vi,getOwnPropertySymbols:Hi,getPrototypeOf:qi}=Object,Z=globalThis,lr=Z.trustedTypes,Ki=lr?lr.emptyScript:"",Tt=Z.reactiveElementPolyfillSupport,Oe=(r,e)=>r,tt={toAttribute(r,e){switch(e){case Boolean:r=r?Ki:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},jt=(r,e)=>!Mi(r,e),hr={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:jt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Z.litPropertyMetadata??(Z.litPropertyMetadata=new WeakMap);class me extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=hr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Li(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){const{get:s,set:a}=zi(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return s==null?void 0:s.call(this)},set(l){const u=s==null?void 0:s.call(this);a.call(this,l),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??hr}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;const e=qi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){const t=this.properties,n=[...Vi(t),...Hi(t)];for(const s of n)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(cr(s))}else e!==void 0&&t.push(cr(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ji(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var a;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const l=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:tt).toAttribute(t,n.type);this._$Em=e,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Em=null}}_$AK(e,t){var a;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=n.getPropertyOptions(s),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:tt;this._$Em=s,this[s]=u.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??jt)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,l]of s)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[Oe("elementProperties")]=new Map,me[Oe("finalized")]=new Map,Tt==null||Tt({ReactiveElement:me}),(Z.reactiveElementVersions??(Z.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=globalThis,rt=Ie.trustedTypes,ur=rt?rt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Mr="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Lr="?"+Q,Yi=`<${Lr}>`,ne=document,Ue=()=>ne.createComment(""),ke=r=>r===null||typeof r!="object"&&typeof r!="function",zr=Array.isArray,Wi=r=>zr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",St=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dr=/-->/g,pr=/>/g,re=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fr=/'/g,mr=/"/g,Vr=/^(?:script|style|textarea|title)$/i,Gi=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),x=Gi(1),be=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),gr=new WeakMap,ie=ne.createTreeWalker(ne,129);function Hr(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ur!==void 0?ur.createHTML(e):e}const Ji=(r,e)=>{const t=r.length-1,n=[];let s,a=e===2?"<svg>":"",l=Ce;for(let u=0;u<t;u++){const d=r[u];let m,b,y=-1,_=0;for(;_<d.length&&(l.lastIndex=_,b=l.exec(d),b!==null);)_=l.lastIndex,l===Ce?b[1]==="!--"?l=dr:b[1]!==void 0?l=pr:b[2]!==void 0?(Vr.test(b[2])&&(s=RegExp("</"+b[2],"g")),l=re):b[3]!==void 0&&(l=re):l===re?b[0]===">"?(l=s??Ce,y=-1):b[1]===void 0?y=-2:(y=l.lastIndex-b[2].length,m=b[1],l=b[3]===void 0?re:b[3]==='"'?mr:fr):l===mr||l===fr?l=re:l===dr||l===pr?l=Ce:(l=re,s=void 0);const v=l===re&&r[u+1].startsWith("/>")?" ":"";a+=l===Ce?d+Yi:y>=0?(n.push(m),d.slice(0,y)+Mr+d.slice(y)+Q+v):d+Q+(y===-2?u:v)}return[Hr(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class De{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let a=0,l=0;const u=e.length-1,d=this.parts,[m,b]=Ji(e,t);if(this.el=De.createElement(m,n),ie.currentNode=this.el.content,t===2){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(s=ie.nextNode())!==null&&d.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const y of s.getAttributeNames())if(y.endsWith(Mr)){const _=b[l++],v=s.getAttribute(y).split(Q),D=/([.?@])?(.*)/.exec(_);d.push({type:1,index:a,name:D[2],strings:v,ctor:D[1]==="."?Xi:D[1]==="?"?Zi:D[1]==="@"?en:pt}),s.removeAttribute(y)}else y.startsWith(Q)&&(d.push({type:6,index:a}),s.removeAttribute(y));if(Vr.test(s.tagName)){const y=s.textContent.split(Q),_=y.length-1;if(_>0){s.textContent=rt?rt.emptyScript:"";for(let v=0;v<_;v++)s.append(y[v],Ue()),ie.nextNode(),d.push({type:2,index:++a});s.append(y[_],Ue())}}}else if(s.nodeType===8)if(s.data===Lr)d.push({type:2,index:a});else{let y=-1;for(;(y=s.data.indexOf(Q,y+1))!==-1;)d.push({type:7,index:a}),y+=Q.length-1}a++}}static createElement(e,t){const n=ne.createElement("template");return n.innerHTML=e,n}}function ye(r,e,t=r,n){var l,u;if(e===be)return e;let s=n!==void 0?(l=t._$Co)==null?void 0:l[n]:t._$Cl;const a=ke(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((u=s==null?void 0:s._$AO)==null||u.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=s:t._$Cl=s),s!==void 0&&(e=ye(r,s._$AS(r,e.values),s,n)),e}class Qi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??ne).importNode(t,!0);ie.currentNode=s;let a=ie.nextNode(),l=0,u=0,d=n[0];for(;d!==void 0;){if(l===d.index){let m;d.type===2?m=new ze(a,a.nextSibling,this,e):d.type===1?m=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(m=new tn(a,this,e)),this._$AV.push(m),d=n[++u]}l!==(d==null?void 0:d.index)&&(a=ie.nextNode(),l++)}return ie.currentNode=ne,s}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ze{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ye(this,e,t),ke(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==be&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Wi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==I&&ke(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=De.createElement(Hr(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const l=new Qi(s,this),u=l.u(this.options);l.p(t),this.T(u),this._$AH=l}}_$AC(e){let t=gr.get(e.strings);return t===void 0&&gr.set(e.strings,t=new De(e)),t}k(e){zr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const a of e)s===t.length?t.push(n=new ze(this.S(Ue()),this.S(Ue()),this,this.options)):n=t[s],n._$AI(a),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,a){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=I}_$AI(e,t=this,n,s){const a=this.strings;let l=!1;if(a===void 0)e=ye(this,e,t,0),l=!ke(e)||e!==this._$AH&&e!==be,l&&(this._$AH=e);else{const u=e;let d,m;for(e=a[0],d=0;d<a.length-1;d++)m=ye(this,u[n+d],t,d),m===be&&(m=this._$AH[d]),l||(l=!ke(m)||m!==this._$AH[d]),m===I?e=I:e!==I&&(e+=(m??"")+a[d+1]),this._$AH[d]=m}l&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Xi extends pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Zi extends pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class en extends pt{constructor(e,t,n,s,a){super(e,t,n,s,a),this.type=5}_$AI(e,t=this){if((e=ye(this,e,t,0)??I)===be)return;const n=this._$AH,s=e===I&&n!==I||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==I&&(n===I||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class tn{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ye(this,e)}}const Ct=Ie.litHtmlPolyfillSupport;Ct==null||Ct(De,ze),(Ie.litHtmlVersions??(Ie.litHtmlVersions=[])).push("3.1.2");const rn=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;n._$litPart$=s=new ze(e.insertBefore(Ue(),a),a,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return be}};var Nr;P._$litElement$=!0,P.finalized=!0,(Nr=globalThis.litElementHydrateSupport)==null||Nr.call(globalThis,{LitElement:P});const Ot=globalThis.litElementPolyfillSupport;Ot==null||Ot({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:jt},sn=(r=nn,e,t)=>{const{kind:n,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(t.name,r),n==="accessor"){const{name:l}=t;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,d,r)},init(u){return u!==void 0&&this.P(l,void 0,r),u}}}if(n==="setter"){const{name:l}=t;return function(u){const d=this[l];e.call(this,u),this.requestUpdate(l,d,r)}}throw Error("Unsupported decorator location: "+n)};function w(r){return(e,t)=>typeof t=="object"?sn(r,e,t):((n,s,a)=>{const l=s.hasOwnProperty(a);return s.constructor.createProperty(a,l?{...n,wrapped:!0}:n),l?Object.getOwnPropertyDescriptor(s,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(r){return w({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qr=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let br=class{constructor(e,t,n,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new qr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class on{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let an=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},yr=class extends on{constructor(e,t,n){var s,a;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=l=>{const u=l.composedPath()[0];l.context===this.context&&u!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,u,l.subscribe))},this.onProviderRequest=l=>{const u=l.composedPath()[0];if(l.context!==this.context||u===this.host)return;const d=new Set;for(const[m,{consumerHost:b}]of this.subscriptions)d.has(m)||(d.add(m),b.dispatchEvent(new qr(this.context,m,!0)));l.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(s=this.host).addController)==null||a.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new an(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kr({context:r}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new yr(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var a;return(a=n.get(this))==null||a.setValue(s),e.set.call(this,s)},init(s){var a;return(a=n.get(this))==null||a.setValue(s),s}};{e.constructor.addInitializer(l=>{n.set(l,new yr(l,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let a;if(s===void 0){const l=new WeakMap;a={get:function(){return l.get(this)},set:function(u){n.get(this).setValue(u),l.set(this,u)},configurable:!0,enumerable:!0}}else{const l=s.set;a={...s,set:function(u){n.get(this).setValue(u),l==null||l.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yr({context:r,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new br(this,{context:r,callback:s=>{this[n.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new br(s,{context:r,callback:a=>{s[n]=a},subscribe:e})})}}let cn=class extends P{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",n=>{const s=n.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),n=t;typeof(n==null?void 0:n.then)=="function"?n.then(s=>{const a=s(this.model);this.model=a}):this.model=t}}},ln=class extends P{dispatchMessage(e,t=this){const n=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(n)}};class hn{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:n}=t,s=this._handlers.get(n);return s?s(t,e):e}}function un(r){return e=>Object.assign({},e,r)}function dn(r){return r}function pn(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function fn(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var s=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return r[n]}})}),t}var Y={exports:{}};const mn={},gn=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"})),ft=fn(gn),bn="dotenv",yn="16.4.2",_n="Loads environment variables from .env file",vn="lib/main.js",wn="lib/main.d.ts",xn={".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},En={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},$n={type:"git",url:"git://github.com/motdotla/dotenv.git"},An="https://dotenvx.com",Pn=["dotenv","env",".env","environment","variables","config","settings"],Tn="README.md",Sn="BSD-2-Clause",Cn={"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},On={node:">=12"},In={fs:!1},Bn={name:bn,version:yn,description:_n,main:vn,types:wn,exports:xn,scripts:En,repository:$n,funding:An,keywords:Pn,readmeFilename:Tn,license:Sn,devDependencies:Cn,engines:On,browser:In};var Be={};const it=ft,Mt=ft,Rn=ft,Un=ft,kn=Bn,Lt=kn.version,Dn=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function Fn(r){const e={};let t=r.toString();t=t.replace(/\r\n?/mg,`
`);let n;for(;(n=Dn.exec(t))!=null;){const s=n[1];let a=n[2]||"";a=a.trim();const l=a[0];a=a.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),l==='"'&&(a=a.replace(/\\n/g,`
`),a=a.replace(/\\r/g,"\r")),e[s]=a}return e}function Nn(r){const e=Gr(r),t=B.configDotenv({path:e});if(!t.parsed){const l=new Error(`MISSING_DATA: Cannot parse ${e} for an unknown reason`);throw l.code="MISSING_DATA",l}const n=Wr(r).split(","),s=n.length;let a;for(let l=0;l<s;l++)try{const u=n[l].trim(),d=Ln(t,u);a=B.decrypt(d.ciphertext,d.key);break}catch(u){if(l+1>=s)throw u}return B.parse(a)}function jn(r){console.log(`[dotenv@${Lt}][INFO] ${r}`)}function Mn(r){console.log(`[dotenv@${Lt}][WARN] ${r}`)}function nt(r){console.log(`[dotenv@${Lt}][DEBUG] ${r}`)}function Wr(r){return r&&r.DOTENV_KEY&&r.DOTENV_KEY.length>0?r.DOTENV_KEY:Be.DOTENV_KEY&&Be.DOTENV_KEY.length>0?Be.DOTENV_KEY:""}function Ln(r,e){let t;try{t=new URL(e)}catch(u){if(u.code==="ERR_INVALID_URL"){const d=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw d.code="INVALID_DOTENV_KEY",d}throw u}const n=t.password;if(!n){const u=new Error("INVALID_DOTENV_KEY: Missing key part");throw u.code="INVALID_DOTENV_KEY",u}const s=t.searchParams.get("environment");if(!s){const u=new Error("INVALID_DOTENV_KEY: Missing environment part");throw u.code="INVALID_DOTENV_KEY",u}const a=`DOTENV_VAULT_${s.toUpperCase()}`,l=r.parsed[a];if(!l){const u=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${a} in your .env.vault file.`);throw u.code="NOT_FOUND_DOTENV_ENVIRONMENT",u}return{ciphertext:l,key:n}}function Gr(r){let e=null;if(r&&r.path&&r.path.length>0)if(Array.isArray(r.path))for(const t of r.path)it.existsSync(t)&&(e=t.endsWith(".vault")?t:`${t}.vault`);else e=r.path.endsWith(".vault")?r.path:`${r.path}.vault`;else e=Mt.resolve(process.cwd(),".env.vault");return it.existsSync(e)?e:null}function zn(r){return r[0]==="~"?Mt.join(Rn.homedir(),r.slice(1)):r}function Vn(r){jn("Loading env from encrypted .env.vault");const e=B._parseVault(r);let t=Be;return r&&r.processEnv!=null&&(t=r.processEnv),B.populate(t,e,r),{parsed:e}}function Hn(r){let e=Mt.resolve(process.cwd(),".env"),t="utf8";const n=!!(r&&r.debug);if(r){if(r.path!=null){let s=r.path;if(Array.isArray(s)){for(const a of r.path)if(it.existsSync(a)){s=a;break}}e=zn(s)}r.encoding!=null?t=r.encoding:n&&nt("No encoding is specified. UTF-8 is used by default")}try{const s=B.parse(it.readFileSync(e,{encoding:t}));let a=Be;return r&&r.processEnv!=null&&(a=r.processEnv),B.populate(a,s,r),{parsed:s}}catch(s){return n&&nt(`Failed to load ${e} ${s.message}`),{error:s}}}function qn(r){if(Wr(r).length===0)return B.configDotenv(r);const e=Gr(r);return e?B._configVault(r):(Mn(`You set DOTENV_KEY but you are missing a .env.vault file at ${e}. Did you forget to build it?`),B.configDotenv(r))}function Kn(r,e){const t=Buffer.from(e.slice(-64),"hex");let n=Buffer.from(r,"base64");const s=n.subarray(0,12),a=n.subarray(-16);n=n.subarray(12,-16);try{const l=Un.createDecipheriv("aes-256-gcm",t,s);return l.setAuthTag(a),`${l.update(n)}${l.final()}`}catch(l){const u=l instanceof RangeError,d=l.message==="Invalid key length",m=l.message==="Unsupported state or unable to authenticate data";if(u||d){const b=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw b.code="INVALID_DOTENV_KEY",b}else if(m){const b=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw b.code="DECRYPTION_FAILED",b}else throw l}}function Yn(r,e,t={}){const n=!!(t&&t.debug),s=!!(t&&t.override);if(typeof e!="object"){const a=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw a.code="OBJECT_REQUIRED",a}for(const a of Object.keys(e))Object.prototype.hasOwnProperty.call(r,a)?(s===!0&&(r[a]=e[a]),n&&nt(s===!0?`"${a}" is already defined and WAS overwritten`:`"${a}" is already defined and was NOT overwritten`)):r[a]=e[a]}const B={configDotenv:Hn,_configVault:Vn,_parseVault:Nn,config:qn,decrypt:Kn,parse:Fn,populate:Yn};Y.exports.configDotenv=B.configDotenv;Y.exports._configVault=B._configVault;Y.exports._parseVault=B._parseVault;Y.exports.config=B.config;Y.exports.decrypt=B.decrypt;Y.exports.parse=B.parse;Y.exports.populate=B.populate;Y.exports=B;var Wn=Y.exports;const mt=pn(Wn);var Gn={};mt.config();const{SERVER_URL:Jn}=Gn,Qn=`${Jn}`,Xn="",Rt="JWT_AUTH_TOKEN",J=class J{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new J;return console.log("Deauthenticating",e,J._theUser),e===J._theUser&&(localStorage.removeItem(Rt),J._theUser=t),t}};J._theUser=new J;let L=J;class Fe extends L{constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(s).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),l=JSON.parse(a);console.log("Token payload",l),this.token=e,this.authenticated=!0,this.username=l.username,this.signOut=t}static authenticate(e,t){return L._theUser=new Fe(e,t),localStorage.setItem(Rt,e),L._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Rt);return t?Fe.authenticate(t,e):L._theUser}}class zt{constructor(e){this._base=Xn,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=L._theUser.authenticated,n={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${L._theUser.token}`};return e?{...n,...a}:a}else return e?{...n}:void 0}_url(e){return`${Qn}${this._base}${e}`}}class _r extends zt{constructor(e){super(Object.fromEntries(e))}}class Jr extends zt{constructor(){super(void 0)}}var Zn=Object.defineProperty,es=Object.getOwnPropertyDescriptor,Qr=(r,e,t,n)=>{for(var s=n>1?void 0:n?es(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&Zn(e,t,s),s};const Xr="MTVModel",vr={user:new L},ts=()=>new hn,Zr=un,ei=dn;class ti extends cn{constructor(e){super(e,vr),this.model=vr}}Qr([Kr({context:Xr}),U()],ti.prototype,"model",2);class Vt extends ln{getFromModel(e){if(this._model)return this._model[e]}}Qr([Yr({context:Xr,subscribe:!0}),w({attribute:!1})],Vt.prototype,"_model",2);const Ht=ts(),rs=Ht.update;Ht.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Jr().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Zr({profile:t}):ei)});Ht.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new zt(t).put(`/profiles/${e}`).then(n=>{if(n.status===200)return n.json()}).then(n=>{n&&console.log("Profile:",n)}).then(n=>n?Zr({profile:n}):ei)});var is=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,Ve=(r,e,t,n)=>{for(var s=n>1?void 0:n?ns(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&is(e,t,s),s};let se=class extends P{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,n)=>{const s=t[0].toUpperCase(),a=n[0].toUpperCase();return s<a?-1:s>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return x`
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
          ${this.names.map(r=>x`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};se.styles=R`
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
  `;Ve([w({type:Array})],se.prototype,"names",2);Ve([w({type:Array})],se.prototype,"namesOriginalOrder",2);Ve([w({type:Array})],se.prototype,"listAttributes",2);Ve([U()],se.prototype,"sort_state",2);se=Ve([C("sortable-list")],se);var ss=Object.defineProperty,os=Object.getOwnPropertyDescriptor,gt=(r,e,t,n)=>{for(var s=n>1?void 0:n?os(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&ss(e,t,s),s};let _e=class extends P{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return x`
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
          ${this.names.map(r=>x`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};_e.styles=R`
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
  `;gt([w({type:Array})],_e.prototype,"names",2);gt([w({type:Array})],_e.prototype,"listAttributes",2);gt([U()],_e.prototype,"sort_state",2);_e=gt([C("general-list")],_e);var as=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,qt=(r,e,t,n)=>{for(var s=n>1?void 0:n?cs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&as(e,t,s),s};let Ne=class extends P{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return x`
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
    `}};Ne.styles=R`
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
  `;qt([w({type:Array})],Ne.prototype,"artists",2);qt([w({type:String})],Ne.prototype,"listAttributes",2);Ne=qt([C("favorites-list")],Ne);var ls=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,$e=(r,e,t,n)=>{for(var s=n>1?void 0:n?hs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&ls(e,t,s),s};let ee=class extends P{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return x`
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
            <li class="border-bottom-only">Sign out</li>
          </ul>
        </slot>
      </section>
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};ee.styles=R`
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
  `;$e([w({reflect:!0,type:Boolean})],ee.prototype,"open",2);$e([w()],ee.prototype,"align",2);$e([w()],ee.prototype,"profileImage",2);$e([w()],ee.prototype,"profileUserID",2);$e([w()],ee.prototype,"profileDescription",2);ee=$e([C("drop-down")],ee);var us=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,ri=(r,e,t,n)=>{for(var s=n>1?void 0:n?ds(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&us(e,t,s),s};let st=class extends P{constructor(){super(...arguments),this.on=!1}render(){return x`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};st.styles=R`
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
  `;ri([w({reflect:!0,type:Boolean})],st.prototype,"on",2);st=ri([C("color-mode-switch")],st);var ps=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,bt=(r,e,t,n)=>{for(var s=n>1?void 0:n?fs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&ps(e,t,s),s};let ve=class extends P{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return x`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};ve.styles=R`
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
  `;bt([w()],ve.prototype,"title",2);bt([w()],ve.prototype,"description",2);bt([w()],ve.prototype,"user_id",2);ve=bt([C("default-card")],ve);var ms=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,Kt=(r,e,t,n)=>{for(var s=n>1?void 0:n?gs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&ms(e,t,s),s};let je=class extends P{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return x`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};je.styles=R`
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
  `;Kt([w({reflect:!0,type:Boolean})],je.prototype,"on",2);Kt([w()],je.prototype,"filteredState",2);je=Kt([C("toggle-switch")],je);var bs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,He=(r,e,t,n)=>{for(var s=n>1?void 0:n?ys(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&bs(e,t,s),s};let oe=class extends P{constructor(){super(...arguments),this.path="",this.editMode=!1,this.profileEditText="Edit Profile."}get profile(){return this.using||{}}_changeEditMode(){console.log("Edit mode changed"),this.editMode=!this.editMode,this.profileEditText==="Edit Profile."?this.profileEditText="Close Edit Menu.":this.profileEditText="Edit Profile."}_handleNameChange(r){const e=r.target;this.profile.name=e.value,this.requestUpdate()}_handleBioChange(r){const e=r.target;this.profile.bio=e.value,this.requestUpdate()}_handleMusicTasteChange(r){const e=r.target;this.profile.musicTaste=e.value,this.requestUpdate()}_handleTimezoneChange(r){const e=r.target;this.profile.timezone=e.value,this.requestUpdate()}_handleSpotifyChange(r){const e=r.target;this.profile.spotify=e.value==="true",this.requestUpdate()}_handleSubmit(r){r.preventDefault(),console.log("Form submitted with:",this.profile);const e=new CustomEvent("profile-update",{detail:{profile:this.profile},bubbles:!0,composed:!0});console.log("dispatching event: ",e),this.dispatchEvent(e),this.editMode=!this.editMode}render(){const{name:r,profileImage:e,profileDescription:t,bio:n}=this.profile;return x`
      ${this.editMode?x`
            <section class="edit-mode-section">
              <form @submit=${this._handleSubmit}>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    .value=${r}
                    @input=${this._handleNameChange}
                  />
                </div>
                <div class="form-group">
                  <label for="bio">Bio</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    .value=${n}
                    @input=${this._handleBioChange}
                  />
              </div>
                <div class="form-group">
                  <label for="musicTaste">Music Taste</label>
                  <input
                    type="text"
                    id="musicTaste"
                    name="musicTaste"
                    .value=${this.profile.musicTaste}
                    @input=${this._handleMusicTasteChange}
                  />
                </div>
                <div class="form-group">
                  <label for="timezone">Timezone</label>
                  <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    .value=${this.profile.timezone}
                    @input=${this._handleTimezoneChange}
                  />
                </div>
                  <fieldset class="form-group">
                      <legend>Spotify</legend>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="true"
                          ?checked=${this.profile.spotify===!0}
                          @change=${this._handleSpotifyChange}
                        /> Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="false"
                          ?checked=${this.profile.spotify===!1}
                          @change=${this._handleSpotifyChange}
                        /> No
                      </label>
                    </fieldset>
                </fieldset>
                <div class="form-group">
                  <button type="submit">Save</button>
                </div>
              </form>
            </section>
          `:""}

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
            <p class="user-description">${n}</p>
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
    `}};oe.styles=R`
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

    /* edit form styling */
    .edit-mode-section {
      background-color: var(--menu-color);
      border-radius: var(--default-border-radius);
      padding: 20px;
      box-shadow: var(--box-shadow);
      margin: 20px auto;
      width: 90%;
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
  `;He([w()],oe.prototype,"path",2);He([w()],oe.prototype,"editMode",2);He([w()],oe.prototype,"profileEditText",2);He([w({attribute:!1})],oe.prototype,"using",2);oe=He([C("user-profile")],oe);function ot(r){return r=r||[],Array.isArray(r)?r:[r]}function z(r){return`[Vaadin.Router] ${r}`}function _s(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const at="module",ct="nomodule",Ut=[at,ct];function wr(r){if(!r.match(/.+\.[m]?js$/))throw new Error(z(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function ii(r){if(!r||!M(r.path))throw new Error(z('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!ae(r.action)&&!Array.isArray(r.children)&&!ae(r.children)&&!lt(e)&&!t.some(n=>M(r[n])))throw new Error(z(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(M(e))wr(e);else if(Ut.some(n=>n in e))Ut.forEach(n=>n in e&&wr(e[n]));else throw new Error(z('Expected route bundle to include either "'+ct+'" or "'+at+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(z(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function xr(r){ot(r).forEach(e=>ii(e))}function Er(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===at?t.setAttribute("type",at):e===ct&&t.setAttribute(ct,""),t.async=!0),new Promise((n,s)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,n(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),s(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function vs(r){return M(r)?Er(r):Promise.race(Ut.filter(e=>e in r).map(e=>Er(r[e],e)))}function Re(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function lt(r){return typeof r=="object"&&!!r}function ae(r){return typeof r=="function"}function M(r){return typeof r=="string"}function ni(r){const e=new Error(z(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const ge=new class{};function ws(r){const e=r.port,t=r.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function $r(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let u=0;u<t.length;u++){const d=t[u];if(d.nodeName&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||ws(e))!==window.location.origin)return;const{pathname:s,search:a,hash:l}=e;Re("go",{pathname:s,search:a,hash:l})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const xs={activate(){window.document.addEventListener("click",$r)},inactivate(){window.document.removeEventListener("click",$r)}},Es=/Trident/.test(navigator.userAgent);Es&&!ae(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Ar(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;Re("go",{pathname:e,search:t,hash:n})}const $s={activate(){window.addEventListener("popstate",Ar)},inactivate(){window.removeEventListener("popstate",Ar)}};var Ae=hi,As=Yt,Ps=Os,Ts=ai,Ss=li,si="/",oi="./",Cs=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Yt(r,e){for(var t=[],n=0,s=0,a="",l=e&&e.delimiter||si,u=e&&e.delimiters||oi,d=!1,m;(m=Cs.exec(r))!==null;){var b=m[0],y=m[1],_=m.index;if(a+=r.slice(s,_),s=_+b.length,y){a+=y[1],d=!0;continue}var v="",D=r[s],te=m[2],xt=m[3],Pe=m[4],he=m[5];if(!d&&a.length){var ue=a.length-1;u.indexOf(a[ue])>-1&&(v=a[ue],a=a.slice(0,ue))}a&&(t.push(a),a="",d=!1);var Et=v!==""&&D!==void 0&&D!==v,K=he==="+"||he==="*",Ye=he==="?"||he==="*",Te=v||l,We=xt||Pe;t.push({name:te||n++,prefix:v,delimiter:Te,optional:Ye,repeat:K,partial:Et,pattern:We?Is(We):"[^"+G(Te)+"]+?"})}return(a||s<r.length)&&t.push(a+r.substr(s)),t}function Os(r,e){return ai(Yt(r,e))}function ai(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,s){for(var a="",l=s&&s.encode||encodeURIComponent,u=0;u<r.length;u++){var d=r[u];if(typeof d=="string"){a+=d;continue}var m=n?n[d.name]:void 0,b;if(Array.isArray(m)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(m.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var y=0;y<m.length;y++){if(b=l(m[y],d),!e[u].test(b))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');a+=(y===0?d.prefix:d.delimiter)+b}continue}if(typeof m=="string"||typeof m=="number"||typeof m=="boolean"){if(b=l(String(m),d),!e[u].test(b))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+b+'"');a+=d.prefix+b;continue}if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"))}return a}}function G(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Is(r){return r.replace(/([=!:$/()])/g,"\\$1")}function ci(r){return r&&r.sensitive?"":"i"}function Bs(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Rs(r,e,t){for(var n=[],s=0;s<r.length;s++)n.push(hi(r[s],e,t).source);return new RegExp("(?:"+n.join("|")+")",ci(t))}function Us(r,e,t){return li(Yt(r,t),e,t)}function li(r,e,t){t=t||{};for(var n=t.strict,s=t.start!==!1,a=t.end!==!1,l=G(t.delimiter||si),u=t.delimiters||oi,d=[].concat(t.endsWith||[]).map(G).concat("$").join("|"),m=s?"^":"",b=r.length===0,y=0;y<r.length;y++){var _=r[y];if(typeof _=="string")m+=G(_),b=y===r.length-1&&u.indexOf(_[_.length-1])>-1;else{var v=_.repeat?"(?:"+_.pattern+")(?:"+G(_.delimiter)+"(?:"+_.pattern+"))*":_.pattern;e&&e.push(_),_.optional?_.partial?m+=G(_.prefix)+"("+v+")?":m+="(?:"+G(_.prefix)+"("+v+"))?":m+=G(_.prefix)+"("+v+")"}}return a?(n||(m+="(?:"+l+")?"),m+=d==="$"?"$":"(?="+d+")"):(n||(m+="(?:"+l+"(?="+d+"))?"),b||(m+="(?="+l+"|"+d+")")),new RegExp(m,ci(t))}function hi(r,e,t){return r instanceof RegExp?Bs(r,e):Array.isArray(r)?Rs(r,e,t):Us(r,e,t)}Ae.parse=As;Ae.compile=Ps;Ae.tokensToFunction=Ts;Ae.tokensToRegExp=Ss;const{hasOwnProperty:ks}=Object.prototype,kt=new Map;kt.set("|false",{keys:[],pattern:/(?:)/});function Pr(r){try{return decodeURIComponent(r)}catch{return r}}function Ds(r,e,t,n,s){t=!!t;const a=`${r}|${t}`;let l=kt.get(a);if(!l){const m=[];l={keys:m,pattern:Ae(r,m,{end:t,strict:r===""})},kt.set(a,l)}const u=l.pattern.exec(e);if(!u)return null;const d=Object.assign({},s);for(let m=1;m<u.length;m++){const b=l.keys[m-1],y=b.name,_=u[m];(_!==void 0||!ks.call(d,y))&&(b.repeat?d[y]=_?_.split(b.delimiter).map(Pr):[]:d[y]=_&&Pr(_))}return{path:u[0],keys:(n||[]).concat(l.keys),params:d}}function ui(r,e,t,n,s){let a,l,u=0,d=r.path||"";return d.charAt(0)==="/"&&(t&&(d=d.substr(1)),t=!0),{next(m){if(r===m)return{done:!0};const b=r.__children=r.__children||r.children;if(!a&&(a=Ds(d,e,!b,n,s),a))return{done:!1,value:{route:r,keys:a.keys,params:a.params,path:a.path}};if(a&&b)for(;u<b.length;){if(!l){const _=b[u];_.parent=r;let v=a.path.length;v>0&&e.charAt(v)==="/"&&(v+=1),l=ui(_,e.substr(v),t,a.keys,a.params)}const y=l.next(m);if(!y.done)return{done:!1,value:y.value};l=null,u++}return{done:!0}}}}function Fs(r){if(ae(r.route.action))return r.route.action(r)}function Ns(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function js(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Ms(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const s={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let a=r.chain.length;for(;a--&&r.chain[a].route&&r.chain[a].route!==t.parent;)r.chain.pop()}r.chain.push(s)}}class Me{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Fs,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){xr(e);const t=[...ot(e)];this.root.__children=t}addRoutes(e){return xr(e),this.root.__children.push(...ot(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,M(e)?{pathname:e}:e),n=ui(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let a=null,l=null,u=t;function d(m,b=a.value.route,y){const _=y===null&&a.value.route;return a=l||n.next(_),l=null,!m&&(a.done||!Ns(b,a.value.route))?(l=a,Promise.resolve(ge)):a.done?Promise.reject(ni(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),Ms(u,a.value),Promise.resolve(s(u)).then(v=>v!=null&&v!==ge?(u.result=v.result||v,u):d(m,b,v)))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(m=>{const b=js(u);if(m?console.warn(b):m=new Error(b),m.context=m.context||u,m instanceof DOMException||(m.code=m.code||500),this.errorHandler)return u.result=this.errorHandler(m),u;throw m})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}Me.pathToRegexp=Ae;const{pathToRegexp:Tr}=Me,Sr=new Map;function di(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];a.parent=e,di(r,a,a.__children||a.children)}}function Cr(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Or(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ls(r,e={}){if(!(r instanceof Me))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,s)=>{let a=Cr(t,n);if(!a&&(t.clear(),di(t,r.root,r.root.__children),a=Cr(t,n),!a))throw new Error(`Route "${n}" not found`);let l=Sr.get(a.fullPath);if(!l){let d=Or(a),m=a.parent;for(;m;){const v=Or(m);v&&(d=v.replace(/\/$/,"")+"/"+d.replace(/^\//,"")),m=m.parent}const b=Tr.parse(d),y=Tr.tokensToFunction(b),_=Object.create(null);for(let v=0;v<b.length;v++)M(b[v])||(_[b[v].name]=!0);l={toPath:y,keys:_},Sr.set(d,l),a.fullPath=d}let u=l.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const d={},m=Object.keys(s);for(let y=0;y<m.length;y++){const _=m[y];l.keys[_]||(d[_]=s[_])}const b=e.stringifyQueryParams(d);b&&(u+=b.charAt(0)==="?"?b:`?${b}`)}return u}}let Ir=[];function zs(r){Ir.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Ir=r}const Vs=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Hs=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function Br(r,e){return r.classList.add(e),new Promise(t=>{if(Vs(r)){const n=r.getBoundingClientRect(),s=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${s}`),Hs(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const qs=256;function It(r){return r!=null}function Ks(r){const e=Object.assign({},r);return delete e.next,e}function j({pathname:r="",search:e="",hash:t="",chain:n=[],params:s={},redirectFrom:a,resolver:l},u){const d=n.map(m=>m.route);return{baseUrl:l&&l.baseUrl||"",pathname:r,search:e,hash:t,routes:d,route:u||d.length&&d[d.length-1]||null,params:s,redirectFrom:a,getUrl:(m={})=>Ze(X.pathToRegexp.compile(pi(d))(Object.assign({},s,m)),l)}}function Rr(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Ys(r,e){e.location=j(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function Xe(r,e,t){if(ae(r))return r.apply(t,e)}function Ur(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return Xe(t[r],e,t)}}function Ws(r,e){if(!Array.isArray(r)&&!lt(r))throw new Error(z(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=ot(r);for(let n=0;n<t.length;n++)ii(t[n]),e.__children.push(t[n])}function Je(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Ze(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function pi(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class X extends Me{constructor(e,t){const n=document.head.querySelector("base"),s=n&&n.getAttribute("href");super([],Object.assign({baseUrl:s&&Me.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=l=>this.__resolveRoute(l);const a=X.NavigationTrigger;X.setTriggers.apply(X,Object.keys(a).map(l=>a[l])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=j({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();ae(t.children)&&(n=n.then(()=>t.children(Ks(e))).then(a=>{!It(a)&&!ae(t.children)&&(a=t.children),Ws(a,t)}));const s={redirect:a=>Rr(e,a),component:a=>{const l=document.createElement(a);return this.__createdByRouter.set(l,!0),l}};return n.then(()=>{if(this.__isLatestRender(e))return Xe(t.action,[e,s],t)}).then(a=>{if(It(a)&&(a instanceof HTMLElement||a.redirect||a===ge))return a;if(M(t.redirect))return s.redirect(t.redirect);if(t.bundle)return vs(t.bundle).then(()=>{},()=>{throw new Error(z(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(It(a))return a;if(M(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},M(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(s).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const l=this.__previousContext;if(a===l)return this.__updateBrowserHistory(l,!0),this.location;if(this.location=j(a),t&&this.__updateBrowserHistory(a,n===1),Re("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,l),this.__previousContext=a,this.location;this.__addAppearingContent(a,l);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,l),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),Je(this.__outlet&&this.__outlet.children),this.location=j(Object.assign(s,{resolver:this})),Re("error",Object.assign({router:this,error:a},s)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const a=n!==t?n:e,u=Ze(pi(n.chain),n.resolver)===n.pathname,d=(m,b=m.route,y)=>m.next(void 0,b,y).then(_=>_===null||_===ge?u?m:b.parent!==null?d(m,b.parent,_):_:_);return d(n).then(m=>{if(m===null||m===ge)throw ni(a);return m&&m!==ge&&m!==n?this.__fullyResolveChain(a,m):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Ys(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(z(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${_s(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],s=e.chain;let a=Promise.resolve();const l=()=>({cancel:!0}),u=d=>Rr(e,d);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let d=0;d<Math.min(n.length,s.length)&&!(n[d].route!==s[d].route||n[d].path!==s[d].path&&n[d].element!==s[d].element||!this.__isReusableElement(n[d].element,s[d].element));d=++e.__divergedChainIndex);if(e.__skipAttach=s.length===n.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let d=s.length-1;d>=0;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},n[d]);for(let d=0;d<s.length;d++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[d]),n[d].element.location=j(e,n[d].route)}else for(let d=n.length-1;d>=e.__divergedChainIndex;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},n[d])}if(!e.__skipAttach)for(let d=0;d<s.length;d++)d<e.__divergedChainIndex?d<n.length&&n[d].element&&(n[d].element.location=j(e,n[d].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[d]),s[d].element&&(s[d].element.location=j(e,s[d].route)));return a.then(d=>{if(d){if(d.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(d.redirect)return this.__redirect(d.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,s){const a=j(t);return e.then(l=>{if(this.__isLatestRender(t))return Ur("onBeforeLeave",[a,n,this],s.element)(l)}).then(l=>{if(!(l||{}).redirect)return l})}__runOnBeforeEnterCallbacks(e,t,n,s){const a=j(t,s.route);return e.then(l=>{if(this.__isLatestRender(t))return Ur("onBeforeEnter",[a,n,this],s.element)(l)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>qs)throw new Error(z(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(z(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const a=s?"replaceState":"pushState";window.history[a](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const a=t&&t.chain[s].element;if(a)if(a.parentNode===n)e.chain[s].element=a,n=a;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let s=n;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const l=e.chain[a].element;l&&(s.appendChild(l),this.__addedByRouter.set(l,!0),s===n&&this.__appearingContent.push(l),s=l)}}__removeDisappearingContent(){this.__disappearingContent&&Je(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Je(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const s=t.chain[n].element;if(s)try{const a=j(e);Xe(s.onAfterLeave,[a,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&Je(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},s=j(e,e.chain[t].route);Xe(n.onAfterEnter,[s,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],s=[],a=e.chain;let l;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){l=a[u-1].route.animate;break}if(t&&n&&l){const u=lt(l)&&l.leave||"leaving",d=lt(l)&&l.enter||"entering";s.push(Br(t,u)),s.push(Br(n,d))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:s}=e?e.detail:window.location;M(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:s},!0))}static setTriggers(...e){zs(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ls(this)),Ze(this.__urlForName(e,t),this)}urlForPath(e,t){return Ze(X.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:s}=M(e)?this.__createUrl(e,"http://a"):e;return Re("go",{pathname:t,search:n,hash:s})}}const Gs=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,et=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Js(){function r(){return!0}return fi(r)}function Qs(){try{return Xs()?!0:Zs()?et?!eo():!Js():!1}catch{return!1}}function Xs(){return localStorage.getItem("vaadin.developmentmode.force")}function Zs(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function eo(){return!!(et&&Object.keys(et).map(e=>et[e]).filter(e=>e.productionMode).length>0)}function fi(r,e){if(typeof r!="function")return;const t=Gs.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const kr=function(r,e){if(window.Vaadin.developmentMode)return fi(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Qs());function to(){}const ro=function(){if(typeof kr=="function")return kr(to)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ro();X.NavigationTrigger={POPSTATE:$s,CLICK:xs};var io=Object.defineProperty,no=Object.getOwnPropertyDescriptor,mi=(r,e,t,n)=>{for(var s=n>1?void 0:n?no(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&io(e,t,s),s};let Dt=class extends P{constructor(){super(...arguments),this.router=new X(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return x`<slot></slot>`}};mi([w({attribute:!1})],Dt.prototype,"routes",2);Dt=mi([C("vaadin-router")],Dt);var so=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,yt=(r,e,t,n)=>{for(var s=n>1?void 0:n?oo(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&so(e,t,s),s};let gi="auth",we=class extends P{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Fe.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const r=x`
      <dialog>
        <form
          @submit=${this._handleLogin}
          @change=${()=>this.loginStatus=0}
        >
          <h2>Existing User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Sign in</button>
          <p>${this.loginStatus?`Login failed: ${this.loginStatus}`:""}</p>
        </form>
        <form
          @submit=${this._handleRegister}
          @change=${this.registerStatus=0}
        >
          <h2>New User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Register</button>
          <p>
            ${this.registerStatus?`Signup failed: ${this.registerStatus}`:""}
          </p>
          <p></p>
        </form>
      </dialog>
    `;return x`${this.isAuthenticated()?"":r} <slot></slot>`}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new _r(t).base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{s&&(console.log("Authentication:",s.token),this.user=Fe.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e),n=new _r(t);console.log("handling registration, about to make signup request"),n.base().post("/signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration response:",s)}).catch(s=>{console.error("Error during registration:",s)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=L.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};we.styles=R`
    :host {
      display: contents;
    }
    dialog {
      display: flex;
      gap: 4rem;
    }
    form {
      display: grid;
      grid-template-columns: [start] 1fr 2fr [end];
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    form > h2 {
      grid-column: start / end;
      text-align: center;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;yt([U()],we.prototype,"loginStatus",2);yt([U()],we.prototype,"registerStatus",2);yt([Kr({context:gi}),U()],we.prototype,"user",2);we=yt([C("auth-required")],we);var ao=Object.defineProperty,co=Object.getOwnPropertyDescriptor,Wt=(r,e,t,n)=>{for(var s=n>1?void 0:n?co(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&ao(e,t,s),s};let Le=class extends P{constructor(){super(...arguments),this.user=new L}render(){const{profileImage:r,profileDescription:e,userid:t}=this.profile||{};return x`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${r}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Jr().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};Le.styles=R`
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
  `;Wt([U()],Le.prototype,"profile",2);Wt([Yr({context:gi,subscribe:!0}),w({attribute:!1})],Le.prototype,"user",2);Le=Wt([C("match-the-vibe-header")],Le);var lo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,qe=(r,e,t,n)=>{for(var s=n>1?void 0:n?ho(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&lo(e,t,s),s};let ce=class extends Vt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return x`
      <section class="profile-page">
        <user-profile .using=${this.profile}> </user-profile>
      </section>
    `}};ce.styles=[R`
      :host {
        display: contents;
      }

      .profile-page {
        display: flex;
        justify-content: center;
      }
    `];qe([w({attribute:!1})],ce.prototype,"location",2);qe([w({reflect:!0})],ce.prototype,"userid",1);qe([w({reflect:!0})],ce.prototype,"edit",1);qe([w()],ce.prototype,"profile",1);ce=qe([C("profile-page")],ce);var Gt={},_t={};_t.byteLength=fo;_t.toByteArray=go;_t.fromByteArray=_o;var q=[],N=[],uo=typeof Uint8Array<"u"?Uint8Array:Array,Bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var fe=0,po=Bt.length;fe<po;++fe)q[fe]=Bt[fe],N[Bt.charCodeAt(fe)]=fe;N[45]=62;N[95]=63;function bi(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}function fo(r){var e=bi(r),t=e[0],n=e[1];return(t+n)*3/4-n}function mo(r,e,t){return(e+t)*3/4-t}function go(r){var e,t=bi(r),n=t[0],s=t[1],a=new uo(mo(r,n,s)),l=0,u=s>0?n-4:n,d;for(d=0;d<u;d+=4)e=N[r.charCodeAt(d)]<<18|N[r.charCodeAt(d+1)]<<12|N[r.charCodeAt(d+2)]<<6|N[r.charCodeAt(d+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return s===2&&(e=N[r.charCodeAt(d)]<<2|N[r.charCodeAt(d+1)]>>4,a[l++]=e&255),s===1&&(e=N[r.charCodeAt(d)]<<10|N[r.charCodeAt(d+1)]<<4|N[r.charCodeAt(d+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function bo(r){return q[r>>18&63]+q[r>>12&63]+q[r>>6&63]+q[r&63]}function yo(r,e,t){for(var n,s=[],a=e;a<t;a+=3)n=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),s.push(bo(n));return s.join("")}function _o(r){for(var e,t=r.length,n=t%3,s=[],a=16383,l=0,u=t-n;l<u;l+=a)s.push(yo(r,l,l+a>u?u:l+a));return n===1?(e=r[t-1],s.push(q[e>>2]+q[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],s.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"=")),s.join("")}var Jt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Jt.read=function(r,e,t,n,s){var a,l,u=s*8-n-1,d=(1<<u)-1,m=d>>1,b=-7,y=t?s-1:0,_=t?-1:1,v=r[e+y];for(y+=_,a=v&(1<<-b)-1,v>>=-b,b+=u;b>0;a=a*256+r[e+y],y+=_,b-=8);for(l=a&(1<<-b)-1,a>>=-b,b+=n;b>0;l=l*256+r[e+y],y+=_,b-=8);if(a===0)a=1-m;else{if(a===d)return l?NaN:(v?-1:1)*(1/0);l=l+Math.pow(2,n),a=a-m}return(v?-1:1)*l*Math.pow(2,a-n)};Jt.write=function(r,e,t,n,s,a){var l,u,d,m=a*8-s-1,b=(1<<m)-1,y=b>>1,_=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=n?0:a-1,D=n?1:-1,te=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,l=b):(l=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-l))<1&&(l--,d*=2),l+y>=1?e+=_/d:e+=_*Math.pow(2,1-y),e*d>=2&&(l++,d/=2),l+y>=b?(u=0,l=b):l+y>=1?(u=(e*d-1)*Math.pow(2,s),l=l+y):(u=e*Math.pow(2,y-1)*Math.pow(2,s),l=0));s>=8;r[t+v]=u&255,v+=D,u/=256,s-=8);for(l=l<<s|u,m+=s;m>0;r[t+v]=l&255,v+=D,l/=256,m-=8);r[t+v-D]|=te*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(r){const e=_t,t=Jt,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=u,r.SlowBuffer=he,r.INSPECT_MAX_BYTES=50;const s=2147483647;r.kMaxLength=s,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const c=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(c,i),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function l(c){if(c>s)throw new RangeError('The value "'+c+'" is invalid for option "size"');const i=new Uint8Array(c);return Object.setPrototypeOf(i,u.prototype),i}function u(c,i,o){if(typeof c=="number"){if(typeof i=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return y(c)}return d(c,i,o)}u.poolSize=8192;function d(c,i,o){if(typeof c=="string")return _(c,i);if(ArrayBuffer.isView(c))return D(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(H(c,ArrayBuffer)||c&&H(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(H(c,SharedArrayBuffer)||c&&H(c.buffer,SharedArrayBuffer)))return te(c,i,o);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=c.valueOf&&c.valueOf();if(h!=null&&h!==c)return u.from(h,i,o);const p=xt(c);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),i,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,i,o){return d(c,i,o)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function m(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function b(c,i,o){return m(c),c<=0?l(c):i!==void 0?typeof o=="string"?l(c).fill(i,o):l(c).fill(i):l(c)}u.alloc=function(c,i,o){return b(c,i,o)};function y(c){return m(c),l(c<0?0:Pe(c)|0)}u.allocUnsafe=function(c){return y(c)},u.allocUnsafeSlow=function(c){return y(c)};function _(c,i){if((typeof i!="string"||i==="")&&(i="utf8"),!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);const o=ue(c,i)|0;let h=l(o);const p=h.write(c,i);return p!==o&&(h=h.slice(0,p)),h}function v(c){const i=c.length<0?0:Pe(c.length)|0,o=l(i);for(let h=0;h<i;h+=1)o[h]=c[h]&255;return o}function D(c){if(H(c,Uint8Array)){const i=new Uint8Array(c);return te(i.buffer,i.byteOffset,i.byteLength)}return v(c)}function te(c,i,o){if(i<0||c.byteLength<i)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<i+(o||0))throw new RangeError('"length" is outside of buffer bounds');let h;return i===void 0&&o===void 0?h=new Uint8Array(c):o===void 0?h=new Uint8Array(c,i):h=new Uint8Array(c,i,o),Object.setPrototypeOf(h,u.prototype),h}function xt(c){if(u.isBuffer(c)){const i=Pe(c.length)|0,o=l(i);return o.length===0||c.copy(o,0,0,i),o}if(c.length!==void 0)return typeof c.length!="number"||Pt(c.length)?l(0):v(c);if(c.type==="Buffer"&&Array.isArray(c.data))return v(c.data)}function Pe(c){if(c>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return c|0}function he(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(i){return i!=null&&i._isBuffer===!0&&i!==u.prototype},u.compare=function(i,o){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),H(o,Uint8Array)&&(o=u.from(o,o.offset,o.byteLength)),!u.isBuffer(i)||!u.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(i===o)return 0;let h=i.length,p=o.length;for(let f=0,g=Math.min(h,p);f<g;++f)if(i[f]!==o[f]){h=i[f],p=o[f];break}return h<p?-1:p<h?1:0},u.isEncoding=function(i){switch(String(i).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(i,o){if(!Array.isArray(i))throw new TypeError('"list" argument must be an Array of Buffers');if(i.length===0)return u.alloc(0);let h;if(o===void 0)for(o=0,h=0;h<i.length;++h)o+=i[h].length;const p=u.allocUnsafe(o);let f=0;for(h=0;h<i.length;++h){let g=i[h];if(H(g,Uint8Array))f+g.length>p.length?(u.isBuffer(g)||(g=u.from(g)),g.copy(p,f)):Uint8Array.prototype.set.call(p,g,f);else if(u.isBuffer(g))g.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=g.length}return p};function ue(c,i){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||H(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const o=c.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&o===0)return 0;let p=!1;for(;;)switch(i){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return At(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return or(c).length;default:if(p)return h?-1:At(c).length;i=(""+i).toLowerCase(),p=!0}}u.byteLength=ue;function Et(c,i,o){let h=!1;if((i===void 0||i<0)&&(i=0),i>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,i>>>=0,o<=i))return"";for(c||(c="utf8");;)switch(c){case"hex":return Ci(this,i,o);case"utf8":case"utf-8":return Qt(this,i,o);case"ascii":return Ti(this,i,o);case"latin1":case"binary":return Si(this,i,o);case"base64":return Ai(this,i,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oi(this,i,o);default:if(h)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function K(c,i,o){const h=c[i];c[i]=c[o],c[o]=h}u.prototype.swap16=function(){const i=this.length;if(i%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let o=0;o<i;o+=2)K(this,o,o+1);return this},u.prototype.swap32=function(){const i=this.length;if(i%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let o=0;o<i;o+=4)K(this,o,o+3),K(this,o+1,o+2);return this},u.prototype.swap64=function(){const i=this.length;if(i%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let o=0;o<i;o+=8)K(this,o,o+7),K(this,o+1,o+6),K(this,o+2,o+5),K(this,o+3,o+4);return this},u.prototype.toString=function(){const i=this.length;return i===0?"":arguments.length===0?Qt(this,0,i):Et.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(i){if(!u.isBuffer(i))throw new TypeError("Argument must be a Buffer");return this===i?!0:u.compare(this,i)===0},u.prototype.inspect=function(){let i="";const o=r.INSPECT_MAX_BYTES;return i=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(i+=" ... "),"<Buffer "+i+">"},n&&(u.prototype[n]=u.prototype.inspect),u.prototype.compare=function(i,o,h,p,f){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(i))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof i);if(o===void 0&&(o=0),h===void 0&&(h=i?i.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),o<0||h>i.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&o>=h)return 0;if(p>=f)return-1;if(o>=h)return 1;if(o>>>=0,h>>>=0,p>>>=0,f>>>=0,this===i)return 0;let g=f-p,E=h-o;const T=Math.min(g,E),A=this.slice(p,f),S=i.slice(o,h);for(let $=0;$<T;++$)if(A[$]!==S[$]){g=A[$],E=S[$];break}return g<E?-1:E<g?1:0};function Ye(c,i,o,h,p){if(c.length===0)return-1;if(typeof o=="string"?(h=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Pt(o)&&(o=p?0:c.length-1),o<0&&(o=c.length+o),o>=c.length){if(p)return-1;o=c.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof i=="string"&&(i=u.from(i,h)),u.isBuffer(i))return i.length===0?-1:Te(c,i,o,h,p);if(typeof i=="number")return i=i&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(c,i,o):Uint8Array.prototype.lastIndexOf.call(c,i,o):Te(c,[i],o,h,p);throw new TypeError("val must be string, number or Buffer")}function Te(c,i,o,h,p){let f=1,g=c.length,E=i.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(c.length<2||i.length<2)return-1;f=2,g/=2,E/=2,o/=2}function T(S,$){return f===1?S[$]:S.readUInt16BE($*f)}let A;if(p){let S=-1;for(A=o;A<g;A++)if(T(c,A)===T(i,S===-1?0:A-S)){if(S===-1&&(S=A),A-S+1===E)return S*f}else S!==-1&&(A-=A-S),S=-1}else for(o+E>g&&(o=g-E),A=o;A>=0;A--){let S=!0;for(let $=0;$<E;$++)if(T(c,A+$)!==T(i,$)){S=!1;break}if(S)return A}return-1}u.prototype.includes=function(i,o,h){return this.indexOf(i,o,h)!==-1},u.prototype.indexOf=function(i,o,h){return Ye(this,i,o,h,!0)},u.prototype.lastIndexOf=function(i,o,h){return Ye(this,i,o,h,!1)};function We(c,i,o,h){o=Number(o)||0;const p=c.length-o;h?(h=Number(h),h>p&&(h=p)):h=p;const f=i.length;h>f/2&&(h=f/2);let g;for(g=0;g<h;++g){const E=parseInt(i.substr(g*2,2),16);if(Pt(E))return g;c[o+g]=E}return g}function wi(c,i,o,h){return Ge(At(i,c.length-o),c,o,h)}function xi(c,i,o,h){return Ge(Ui(i),c,o,h)}function Ei(c,i,o,h){return Ge(or(i),c,o,h)}function $i(c,i,o,h){return Ge(ki(i,c.length-o),c,o,h)}u.prototype.write=function(i,o,h,p){if(o===void 0)p="utf8",h=this.length,o=0;else if(h===void 0&&typeof o=="string")p=o,h=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(h)?(h=h>>>0,p===void 0&&(p="utf8")):(p=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-o;if((h===void 0||h>f)&&(h=f),i.length>0&&(h<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let g=!1;for(;;)switch(p){case"hex":return We(this,i,o,h);case"utf8":case"utf-8":return wi(this,i,o,h);case"ascii":case"latin1":case"binary":return xi(this,i,o,h);case"base64":return Ei(this,i,o,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $i(this,i,o,h);default:if(g)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),g=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ai(c,i,o){return i===0&&o===c.length?e.fromByteArray(c):e.fromByteArray(c.slice(i,o))}function Qt(c,i,o){o=Math.min(c.length,o);const h=[];let p=i;for(;p<o;){const f=c[p];let g=null,E=f>239?4:f>223?3:f>191?2:1;if(p+E<=o){let T,A,S,$;switch(E){case 1:f<128&&(g=f);break;case 2:T=c[p+1],(T&192)===128&&($=(f&31)<<6|T&63,$>127&&(g=$));break;case 3:T=c[p+1],A=c[p+2],(T&192)===128&&(A&192)===128&&($=(f&15)<<12|(T&63)<<6|A&63,$>2047&&($<55296||$>57343)&&(g=$));break;case 4:T=c[p+1],A=c[p+2],S=c[p+3],(T&192)===128&&(A&192)===128&&(S&192)===128&&($=(f&15)<<18|(T&63)<<12|(A&63)<<6|S&63,$>65535&&$<1114112&&(g=$))}}g===null?(g=65533,E=1):g>65535&&(g-=65536,h.push(g>>>10&1023|55296),g=56320|g&1023),h.push(g),p+=E}return Pi(h)}const Xt=4096;function Pi(c){const i=c.length;if(i<=Xt)return String.fromCharCode.apply(String,c);let o="",h=0;for(;h<i;)o+=String.fromCharCode.apply(String,c.slice(h,h+=Xt));return o}function Ti(c,i,o){let h="";o=Math.min(c.length,o);for(let p=i;p<o;++p)h+=String.fromCharCode(c[p]&127);return h}function Si(c,i,o){let h="";o=Math.min(c.length,o);for(let p=i;p<o;++p)h+=String.fromCharCode(c[p]);return h}function Ci(c,i,o){const h=c.length;(!i||i<0)&&(i=0),(!o||o<0||o>h)&&(o=h);let p="";for(let f=i;f<o;++f)p+=Di[c[f]];return p}function Oi(c,i,o){const h=c.slice(i,o);let p="";for(let f=0;f<h.length-1;f+=2)p+=String.fromCharCode(h[f]+h[f+1]*256);return p}u.prototype.slice=function(i,o){const h=this.length;i=~~i,o=o===void 0?h:~~o,i<0?(i+=h,i<0&&(i=0)):i>h&&(i=h),o<0?(o+=h,o<0&&(o=0)):o>h&&(o=h),o<i&&(o=i);const p=this.subarray(i,o);return Object.setPrototypeOf(p,u.prototype),p};function O(c,i,o){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+i>o)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(i,o,h){i=i>>>0,o=o>>>0,h||O(i,o,this.length);let p=this[i],f=1,g=0;for(;++g<o&&(f*=256);)p+=this[i+g]*f;return p},u.prototype.readUintBE=u.prototype.readUIntBE=function(i,o,h){i=i>>>0,o=o>>>0,h||O(i,o,this.length);let p=this[i+--o],f=1;for(;o>0&&(f*=256);)p+=this[i+--o]*f;return p},u.prototype.readUint8=u.prototype.readUInt8=function(i,o){return i=i>>>0,o||O(i,1,this.length),this[i]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(i,o){return i=i>>>0,o||O(i,2,this.length),this[i]|this[i+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(i,o){return i=i>>>0,o||O(i,2,this.length),this[i]<<8|this[i+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(i,o){return i=i>>>0,o||O(i,4,this.length),(this[i]|this[i+1]<<8|this[i+2]<<16)+this[i+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(i,o){return i=i>>>0,o||O(i,4,this.length),this[i]*16777216+(this[i+1]<<16|this[i+2]<<8|this[i+3])},u.prototype.readBigUInt64LE=W(function(i){i=i>>>0,pe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Se(i,this.length-8);const p=o+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24,f=this[++i]+this[++i]*2**8+this[++i]*2**16+h*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=W(function(i){i=i>>>0,pe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Se(i,this.length-8);const p=o*2**24+this[++i]*2**16+this[++i]*2**8+this[++i],f=this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h;return(BigInt(p)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(i,o,h){i=i>>>0,o=o>>>0,h||O(i,o,this.length);let p=this[i],f=1,g=0;for(;++g<o&&(f*=256);)p+=this[i+g]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*o)),p},u.prototype.readIntBE=function(i,o,h){i=i>>>0,o=o>>>0,h||O(i,o,this.length);let p=o,f=1,g=this[i+--p];for(;p>0&&(f*=256);)g+=this[i+--p]*f;return f*=128,g>=f&&(g-=Math.pow(2,8*o)),g},u.prototype.readInt8=function(i,o){return i=i>>>0,o||O(i,1,this.length),this[i]&128?(255-this[i]+1)*-1:this[i]},u.prototype.readInt16LE=function(i,o){i=i>>>0,o||O(i,2,this.length);const h=this[i]|this[i+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(i,o){i=i>>>0,o||O(i,2,this.length);const h=this[i+1]|this[i]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(i,o){return i=i>>>0,o||O(i,4,this.length),this[i]|this[i+1]<<8|this[i+2]<<16|this[i+3]<<24},u.prototype.readInt32BE=function(i,o){return i=i>>>0,o||O(i,4,this.length),this[i]<<24|this[i+1]<<16|this[i+2]<<8|this[i+3]},u.prototype.readBigInt64LE=W(function(i){i=i>>>0,pe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Se(i,this.length-8);const p=this[i+4]+this[i+5]*2**8+this[i+6]*2**16+(h<<24);return(BigInt(p)<<BigInt(32))+BigInt(o+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24)}),u.prototype.readBigInt64BE=W(function(i){i=i>>>0,pe(i,"offset");const o=this[i],h=this[i+7];(o===void 0||h===void 0)&&Se(i,this.length-8);const p=(o<<24)+this[++i]*2**16+this[++i]*2**8+this[++i];return(BigInt(p)<<BigInt(32))+BigInt(this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h)}),u.prototype.readFloatLE=function(i,o){return i=i>>>0,o||O(i,4,this.length),t.read(this,i,!0,23,4)},u.prototype.readFloatBE=function(i,o){return i=i>>>0,o||O(i,4,this.length),t.read(this,i,!1,23,4)},u.prototype.readDoubleLE=function(i,o){return i=i>>>0,o||O(i,8,this.length),t.read(this,i,!0,52,8)},u.prototype.readDoubleBE=function(i,o){return i=i>>>0,o||O(i,8,this.length),t.read(this,i,!1,52,8)};function k(c,i,o,h,p,f){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(i>p||i<f)throw new RangeError('"value" argument is out of bounds');if(o+h>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(i,o,h,p){if(i=+i,o=o>>>0,h=h>>>0,!p){const E=Math.pow(2,8*h)-1;k(this,i,o,h,E,0)}let f=1,g=0;for(this[o]=i&255;++g<h&&(f*=256);)this[o+g]=i/f&255;return o+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(i,o,h,p){if(i=+i,o=o>>>0,h=h>>>0,!p){const E=Math.pow(2,8*h)-1;k(this,i,o,h,E,0)}let f=h-1,g=1;for(this[o+f]=i&255;--f>=0&&(g*=256);)this[o+f]=i/g&255;return o+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,1,255,0),this[o]=i&255,o+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,2,65535,0),this[o]=i&255,this[o+1]=i>>>8,o+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,2,65535,0),this[o]=i>>>8,this[o+1]=i&255,o+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,4,4294967295,0),this[o+3]=i>>>24,this[o+2]=i>>>16,this[o+1]=i>>>8,this[o]=i&255,o+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,4,4294967295,0),this[o]=i>>>24,this[o+1]=i>>>16,this[o+2]=i>>>8,this[o+3]=i&255,o+4};function Zt(c,i,o,h,p){sr(i,h,p,c,o,7);let f=Number(i&BigInt(4294967295));c[o++]=f,f=f>>8,c[o++]=f,f=f>>8,c[o++]=f,f=f>>8,c[o++]=f;let g=Number(i>>BigInt(32)&BigInt(4294967295));return c[o++]=g,g=g>>8,c[o++]=g,g=g>>8,c[o++]=g,g=g>>8,c[o++]=g,o}function er(c,i,o,h,p){sr(i,h,p,c,o,7);let f=Number(i&BigInt(4294967295));c[o+7]=f,f=f>>8,c[o+6]=f,f=f>>8,c[o+5]=f,f=f>>8,c[o+4]=f;let g=Number(i>>BigInt(32)&BigInt(4294967295));return c[o+3]=g,g=g>>8,c[o+2]=g,g=g>>8,c[o+1]=g,g=g>>8,c[o]=g,o+8}u.prototype.writeBigUInt64LE=W(function(i,o=0){return Zt(this,i,o,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=W(function(i,o=0){return er(this,i,o,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(i,o,h,p){if(i=+i,o=o>>>0,!p){const T=Math.pow(2,8*h-1);k(this,i,o,h,T-1,-T)}let f=0,g=1,E=0;for(this[o]=i&255;++f<h&&(g*=256);)i<0&&E===0&&this[o+f-1]!==0&&(E=1),this[o+f]=(i/g>>0)-E&255;return o+h},u.prototype.writeIntBE=function(i,o,h,p){if(i=+i,o=o>>>0,!p){const T=Math.pow(2,8*h-1);k(this,i,o,h,T-1,-T)}let f=h-1,g=1,E=0;for(this[o+f]=i&255;--f>=0&&(g*=256);)i<0&&E===0&&this[o+f+1]!==0&&(E=1),this[o+f]=(i/g>>0)-E&255;return o+h},u.prototype.writeInt8=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,1,127,-128),i<0&&(i=255+i+1),this[o]=i&255,o+1},u.prototype.writeInt16LE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,2,32767,-32768),this[o]=i&255,this[o+1]=i>>>8,o+2},u.prototype.writeInt16BE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,2,32767,-32768),this[o]=i>>>8,this[o+1]=i&255,o+2},u.prototype.writeInt32LE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,4,2147483647,-2147483648),this[o]=i&255,this[o+1]=i>>>8,this[o+2]=i>>>16,this[o+3]=i>>>24,o+4},u.prototype.writeInt32BE=function(i,o,h){return i=+i,o=o>>>0,h||k(this,i,o,4,2147483647,-2147483648),i<0&&(i=4294967295+i+1),this[o]=i>>>24,this[o+1]=i>>>16,this[o+2]=i>>>8,this[o+3]=i&255,o+4},u.prototype.writeBigInt64LE=W(function(i,o=0){return Zt(this,i,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=W(function(i,o=0){return er(this,i,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function tr(c,i,o,h,p,f){if(o+h>c.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function rr(c,i,o,h,p){return i=+i,o=o>>>0,p||tr(c,i,o,4),t.write(c,i,o,h,23,4),o+4}u.prototype.writeFloatLE=function(i,o,h){return rr(this,i,o,!0,h)},u.prototype.writeFloatBE=function(i,o,h){return rr(this,i,o,!1,h)};function ir(c,i,o,h,p){return i=+i,o=o>>>0,p||tr(c,i,o,8),t.write(c,i,o,h,52,8),o+8}u.prototype.writeDoubleLE=function(i,o,h){return ir(this,i,o,!0,h)},u.prototype.writeDoubleBE=function(i,o,h){return ir(this,i,o,!1,h)},u.prototype.copy=function(i,o,h,p){if(!u.isBuffer(i))throw new TypeError("argument should be a Buffer");if(h||(h=0),!p&&p!==0&&(p=this.length),o>=i.length&&(o=i.length),o||(o=0),p>0&&p<h&&(p=h),p===h||i.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),i.length-o<p-h&&(p=i.length-o+h);const f=p-h;return this===i&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,h,p):Uint8Array.prototype.set.call(i,this.subarray(h,p),o),f},u.prototype.fill=function(i,o,h,p){if(typeof i=="string"){if(typeof o=="string"?(p=o,o=0,h=this.length):typeof h=="string"&&(p=h,h=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!u.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(i.length===1){const g=i.charCodeAt(0);(p==="utf8"&&g<128||p==="latin1")&&(i=g)}}else typeof i=="number"?i=i&255:typeof i=="boolean"&&(i=Number(i));if(o<0||this.length<o||this.length<h)throw new RangeError("Out of range index");if(h<=o)return this;o=o>>>0,h=h===void 0?this.length:h>>>0,i||(i=0);let f;if(typeof i=="number")for(f=o;f<h;++f)this[f]=i;else{const g=u.isBuffer(i)?i:u.from(i,p),E=g.length;if(E===0)throw new TypeError('The value "'+i+'" is invalid for argument "value"');for(f=0;f<h-o;++f)this[f+o]=g[f%E]}return this};const de={};function $t(c,i,o){de[c]=class extends o{constructor(){super(),Object.defineProperty(this,"message",{value:i.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}$t("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),$t("ERR_INVALID_ARG_TYPE",function(c,i){return`The "${c}" argument must be of type number. Received type ${typeof i}`},TypeError),$t("ERR_OUT_OF_RANGE",function(c,i,o){let h=`The value of "${c}" is out of range.`,p=o;return Number.isInteger(o)&&Math.abs(o)>2**32?p=nr(String(o)):typeof o=="bigint"&&(p=String(o),(o>BigInt(2)**BigInt(32)||o<-(BigInt(2)**BigInt(32)))&&(p=nr(p)),p+="n"),h+=` It must be ${i}. Received ${p}`,h},RangeError);function nr(c){let i="",o=c.length;const h=c[0]==="-"?1:0;for(;o>=h+4;o-=3)i=`_${c.slice(o-3,o)}${i}`;return`${c.slice(0,o)}${i}`}function Ii(c,i,o){pe(i,"offset"),(c[i]===void 0||c[i+o]===void 0)&&Se(i,c.length-(o+1))}function sr(c,i,o,h,p,f){if(c>o||c<i){const g=typeof i=="bigint"?"n":"";let E;throw f>3?i===0||i===BigInt(0)?E=`>= 0${g} and < 2${g} ** ${(f+1)*8}${g}`:E=`>= -(2${g} ** ${(f+1)*8-1}${g}) and < 2 ** ${(f+1)*8-1}${g}`:E=`>= ${i}${g} and <= ${o}${g}`,new de.ERR_OUT_OF_RANGE("value",E,c)}Ii(h,p,f)}function pe(c,i){if(typeof c!="number")throw new de.ERR_INVALID_ARG_TYPE(i,"number",c)}function Se(c,i,o){throw Math.floor(c)!==c?(pe(c,o),new de.ERR_OUT_OF_RANGE(o||"offset","an integer",c)):i<0?new de.ERR_BUFFER_OUT_OF_BOUNDS:new de.ERR_OUT_OF_RANGE(o||"offset",`>= ${o?1:0} and <= ${i}`,c)}const Bi=/[^+/0-9A-Za-z-_]/g;function Ri(c){if(c=c.split("=")[0],c=c.trim().replace(Bi,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function At(c,i){i=i||1/0;let o;const h=c.length;let p=null;const f=[];for(let g=0;g<h;++g){if(o=c.charCodeAt(g),o>55295&&o<57344){if(!p){if(o>56319){(i-=3)>-1&&f.push(239,191,189);continue}else if(g+1===h){(i-=3)>-1&&f.push(239,191,189);continue}p=o;continue}if(o<56320){(i-=3)>-1&&f.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(i-=3)>-1&&f.push(239,191,189);if(p=null,o<128){if((i-=1)<0)break;f.push(o)}else if(o<2048){if((i-=2)<0)break;f.push(o>>6|192,o&63|128)}else if(o<65536){if((i-=3)<0)break;f.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((i-=4)<0)break;f.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return f}function Ui(c){const i=[];for(let o=0;o<c.length;++o)i.push(c.charCodeAt(o)&255);return i}function ki(c,i){let o,h,p;const f=[];for(let g=0;g<c.length&&!((i-=2)<0);++g)o=c.charCodeAt(g),h=o>>8,p=o%256,f.push(p),f.push(h);return f}function or(c){return e.toByteArray(Ri(c))}function Ge(c,i,o,h){let p;for(p=0;p<h&&!(p+o>=i.length||p>=c.length);++p)i[p+o]=c[p];return p}function H(c,i){return c instanceof i||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===i.name}function Pt(c){return c!==c}const Di=function(){const c="0123456789abcdef",i=new Array(256);for(let o=0;o<16;++o){const h=o*16;for(let p=0;p<16;++p)i[h+p]=c[o]+c[p]}return i}();function W(c){return typeof BigInt>"u"?Fi:c}function Fi(){throw new Error("BigInt not supported")}})(Gt);var vo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,yi=(r,e,t,n)=>{for(var s=n>1?void 0:n?wo(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&vo(e,t,s),s};let ht=class extends P{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return x`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{name:r}=this.track,e=this.track.artists[0].name,{url:t}=this.track.album.images[0];return x`
      <section class="single-track" @click=${()=>this._handleClick()}>
        <img src="${t}" alt="Album cover for ${r}" class="track-image" />
        <section class="details">
          <p class="track-name">${r}</p>
          <p class="artist-name">${e}</p>
        </section>
      </section>
    `}};ht.styles=R`
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
  `;yi([w({type:Object})],ht.prototype,"track",2);ht=yi([C("track-card")],ht);var xo=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,vt=(r,e,t,n)=>{for(var s=n>1?void 0:n?Eo(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&xo(e,t,s),s};let xe=class extends P{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(r){const e=`https://api.spotify.com/v1/tracks/${r}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const n=await t.json();return this.currentTracks=[...this.currentTracks,n],n}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Gt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const n=await t.json();this.accessToken=n.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var r;super.connectedCallback(),(r=this.comment)!=null&&r.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(r){try{this.currentTracks=[];const e=r.map(n=>this.findSong(n)),t=await Promise.all(e);this.currentTracks=t.filter(n=>n!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return x`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{userName:r,commentTime:e,commentMessage:t}=this.comment;return x`
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
          ${this.currentTracks.map(n=>x`
              <div class="track-info">
                <img
                  src="${n.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${n.name}</p>
                  <p class="track-artist">
                    ${n.artists.map(s=>s.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};xe.styles=R`
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
  `;vt([w({type:Object})],xe.prototype,"comment",2);vt([w({type:String})],xe.prototype,"accessToken",2);vt([U()],xe.prototype,"currentTracks",2);xe=vt([C("comment-card")],xe);var Dr={},$o=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,V=(r,e,t,n)=>{for(var s=n>1?void 0:n?Ao(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&$o(e,t,s),s};mt.config();let F=class extends P{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post",this.addEventListener("track-selected",r=>{const e=r;this._selectTrack(e.detail.track)})}_selectTrack(r){const e=this.selectedTracks.findIndex(t=>t.id===r.id);e>-1?this.selectedTracks=[...this.selectedTracks.slice(0,e),...this.selectedTracks.slice(e+1)]:this.selectedTracks=[...this.selectedTracks,r]}_calculateTimeFromDate(){var s;const r=(s=this.post)!=null&&s.postTime?new Date(this.post.postTime):void 0;if(!r)return console.error("Posted time is undefined"),"Post time cannot be found.";let n=(new Date().getTime()-r.getTime())/(1e3*60*60);return n=Math.round(n),n<1?"Less than an hour ago.":n>23?`${n%24} days ago`:`${n} hours ago`}async _recommendTracks(r){var d;r.preventDefault(),this.submissionSuccess=null;const e=r.target,t=new FormData(e),{SERVER_URL:n}=Dr;let s=t.get("input-comment");const a=this.selectedTracks.map(m=>m.id),l=`${n}/posts/${(d=this.post)==null?void 0:d._id}`,u={userName:"aidan",commentTime:new Date,commentMessage:s,SongIDs:a};try{if((await fetch(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).ok)console.log("Comment successfully added"),this._clearTopTracks(),this._clearSelectedTracks(),this.submissionSuccess=!0,e.reset(),this._handleCommentAdded();else throw new Error("Failed to post comment")}catch(m){console.error("Error:",m),this.submissionSuccess=!1}}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),this.searchSpotify()}_clearTopTracks(){this.topTracks=[]}_clearSelectedTracks(){this.selectedTracks=[]}async fetchTopTracks(r){const e=await fetch(`https://api.spotify.com/v1/artists/${r}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?this.topTracks=t.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}connectedCallback(){var r;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((r=this.post)==null?void 0:r.comments)||[])}async _handleCommentAdded(){var e;console.log("Comment Created, Now Refreshing Component");const{SERVER_URL:r}=Dr;if(!((e=this.post)!=null&&e._id)){console.error("Post ID is undefined.");return}try{const t=await fetch(`${r}/comments/${this.post._id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch comments");const n=await t.json();this.getPostComments=[...n]}catch(t){console.error("Error fetching comments:",t)}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Gt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const n=await t.json();this.accessToken=n.access_token}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const r=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(r,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();t.tracks.items.length>0?this.topTracks=t.tracks.items:(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t;const r=this._calculateTimeFromDate();return x`
      <section class="${this.expandedClass}">
        <section class="profile-name-time">
          <section class="individual-post-profile-image">
            <img src="/images/aidan_pfp.png" alt="placeholder image" />
            ${this.expanded?x`<div class="line-decoration"></div>`:x`<div></div>`}
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

        ${this.expanded?x`
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
                      ${this.topTracks.length>0?x`<div class="track-box-search-results">
                              ${this.topTracks.slice(0,5).map(n=>x`<track-card
                                      .track=${n}
                                    ></track-card>`)}
                            </div>
                            <div class="clear-results-section">
                              <button
                                class="clear-results"
                                @click=${this._clearTopTracks}
                              >
                                Clear Results
                              </button>
                            </div>`:x`<div class="track-box-search-results"></div>
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
                        ${this.selectedTracks.map(n=>x`<track-card .track=${n}></track-card>`)}
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
                      ${this.submissionSuccess===!0?x`<p>Submission successful!</p>`:""}
                      ${this.submissionSuccess===!1?x`<p>Submission failed. Please try again.</p>`:""}
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
    `}};F.styles=R`
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
  `;V([w({type:Object})],F.prototype,"post",2);V([U()],F.prototype,"getPostComments",2);V([U()],F.prototype,"expanded",2);V([U()],F.prototype,"submissionSuccess",2);V([w()],F.prototype,"expandedText",2);V([w({type:String})],F.prototype,"requestedSearchQuery",2);V([w({type:String})],F.prototype,"accessToken",2);V([w()],F.prototype,"topTracks",2);V([w()],F.prototype,"selectedTracks",2);V([U()],F.prototype,"expandedClass",2);F=V([C("feed-post")],F);var Po=Object.defineProperty,To=Object.getOwnPropertyDescriptor,_i=(r,e,t,n)=>{for(var s=n>1?void 0:n?To(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&Po(e,t,s),s};let ut=class extends P{constructor(){super(...arguments),this.posts=[]}render(){return x`
      <div class="posts-container">
        ${this.posts.map(r=>x` <feed-post .post=${r}></feed-post>`)}
      </div>
    `}};ut.styles=R``;_i([w({type:Array})],ut.prototype,"posts",2);ut=_i([C("feed-post-list")],ut);var So={},Co=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,wt=(r,e,t,n)=>{for(var s=n>1?void 0:n?Oo(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&Co(e,t,s),s};mt.config();let Ee=class extends P{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(r){r.preventDefault(),this.submissionSuccess=!1;const e=r.target;let n=new FormData(e).get("input-message");n?(console.log("submitting post!"),this._sendPostRequest(n,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(r,e){const t={userid:"65caf83fcdc541534288d60b",userName:"aidan",postTime:new Date,postMessage:r,comments:[]},{SERVER_URL:n}=So;console.log("new post: ",t);try{const s=`${n}/posts`;if((await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(s){console.error("Error: ",s),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const r=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",r),this.dispatchEvent(r)}render(){return x`
      ${this.expanded?x`
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
              ${this.errorMessage?x`<p class="error-message">
                      Message input cannot be blank.
                    </p>`:""}
              <button class="post-button">Submit your post!</button>
            </form>
          </section>`:x` ${this.submissionSuccess?x`<p class="submit-success-message">
                  post successfully submitted
                </p>`:""}
            <button class="post-button" @click=${this._togglePost}>
              Create New Post &#43;
            </button>`}
    `}};Ee.styles=R`
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
  `;wt([U()],Ee.prototype,"expanded",2);wt([U()],Ee.prototype,"submissionSuccess",2);wt([U()],Ee.prototype,"errorMessage",2);Ee=wt([C("create-post")],Ee);var Io={},Bo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,vi=(r,e,t,n)=>{for(var s=n>1?void 0:n?Ro(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&Bo(e,t,s),s};mt.config();let dt=class extends P{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchData()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchData()}async _fetchData(){console.log("fetching posts!");const{SERVER_URL:r}=Io;try{const e=await fetch(`${r}/posts`);if(e.ok){const t=await e.json();this.posts=t,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",e.status)}catch(e){console.error("Error fetching posts:",e)}}render(){return x`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <create-post></create-post>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};dt.styles=R`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;vi([U()],dt.prototype,"posts",2);dt=vi([C("main-feed")],dt);var Uo=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,Ke=(r,e,t,n)=>{for(var s=n>1?void 0:n?ko(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&Uo(e,t,s),s};let le=class extends Vt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}render(){return x`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `}};le.styles=R`
    .feed-page {
      display: flex;
      justify-content: center;
    }
  `;Ke([w({attribute:!1})],le.prototype,"location",2);Ke([w({reflect:!0})],le.prototype,"userid",1);Ke([w({reflect:!0})],le.prototype,"edit",1);Ke([w()],le.prototype,"profile",1);le=Ke([C("home-page")],le);var Do=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,No=(r,e,t,n)=>{for(var s=n>1?void 0:n?Fo(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(n?l(e,t,s):l(s))||s);return n&&s&&Do(e,t,s),s};let jo=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Fr=class extends ti{constructor(){super(rs)}render(){return x`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${jo}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("MTVAPPElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Fr=No([C("mtv-app")],Fr);
