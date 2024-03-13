(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Ne=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),Xe=new WeakMap;let xt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ne&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Xe.set(t,e))}return e}toString(){return this.cssText}};const ci=i=>new xt(typeof i=="string"?i:i+"",void 0,Ie),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new xt(t,i,Ie)},hi=(i,e)=>{if(Ne)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=de.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},Qe=Ne?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ci(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:di,defineProperty:ui,getOwnPropertyDescriptor:pi,getOwnPropertyNames:fi,getOwnPropertySymbols:gi,getPrototypeOf:mi}=Object,S=globalThis,Ye=S.trustedTypes,_i=Ye?Ye.emptyScript:"",xe=S.reactiveElementPolyfillSupport,K=(i,e)=>i,ge={toAttribute(i,e){switch(e){case Boolean:i=i?_i:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},He=(i,e)=>!di(i,e),Ze={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:He};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&ui(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:n}=pi(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ze}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=mi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,r=[...fi(t),...gi(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(Qe(s))}else e!==void 0&&t.push(Qe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var n;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const o=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:ge).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ge;this._$Em=s,this[s]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??He)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[K("elementProperties")]=new Map,I[K("finalized")]=new Map,xe==null||xe({ReactiveElement:I}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,me=J.trustedTypes,et=me?me.createPolicy("lit-html",{createHTML:i=>i}):void 0,St="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+O,vi=`<${Ct}>`,T=document,X=()=>T.createComment(""),Q=i=>i===null||typeof i!="object"&&typeof i!="function",Rt=Array.isArray,bi=i=>Rt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,it=/>/g,R=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,rt=/"/g,Ut=/^(?:script|style|textarea|title)$/i,yi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=yi(1),B=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),nt=new WeakMap,U=T.createTreeWalker(T,129);function Tt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}const wi=(i,e)=>{const t=i.length-1,r=[];let s,n=e===2?"<svg>":"",o=W;for(let c=0;c<t;c++){const a=i[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===W?h[1]==="!--"?o=tt:h[1]!==void 0?o=it:h[2]!==void 0?(Ut.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=R):h[3]!==void 0&&(o=R):o===R?h[0]===">"?(o=s??W,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?R:h[3]==='"'?rt:st):o===rt||o===st?o=R:o===tt||o===it?o=W:(o=R,s=void 0);const p=o===R&&i[c+1].startsWith("/>")?" ":"";n+=o===W?a+vi:d>=0?(r.push(l),a.slice(0,d)+St+a.slice(d)+O+p):a+O+(d===-2?c:p)}return[Tt(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class Y{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=wi(e,t);if(this.el=Y.createElement(l,r),U.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=U.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(St)){const u=h[o++],p=s.getAttribute(d).split(O),C=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:C[2],strings:p,ctor:C[1]==="."?Ei:C[1]==="?"?Ai:C[1]==="@"?Pi:$e}),s.removeAttribute(d)}else d.startsWith(O)&&(a.push({type:6,index:n}),s.removeAttribute(d));if(Ut.test(s.tagName)){const d=s.textContent.split(O),u=d.length-1;if(u>0){s.textContent=me?me.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],X()),U.nextNode(),a.push({type:2,index:++n});s.append(d[u],X())}}}else if(s.nodeType===8)if(s.data===Ct)a.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:n}),d+=O.length-1}n++}}static createElement(e,t){const r=T.createElement("template");return r.innerHTML=e,r}}function z(i,e,t=i,r){var o,c;if(e===B)return e;let s=r!==void 0?(o=t._$Co)==null?void 0:o[r]:t._$Cl;const n=Q(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=z(i,s._$AS(i,e.values),s,r)),e}class $i{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??T).importNode(t,!0);U.currentNode=s;let n=U.nextNode(),o=0,c=0,a=r[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new ne(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Oi(n,this,e)),this._$AV.push(l),a=r[++c]}o!==(a==null?void 0:a.index)&&(n=U.nextNode(),o++)}return U.currentNode=T,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ne{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),Q(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==g&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Y.createElement(Tt(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new $i(s,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new Y(e)),t}k(e){Rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const n of e)s===t.length?t.push(r=new ne(this.S(X()),this.S(X()),this,this.options)):r=t[s],r._$AI(n),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class $e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,t=this,r,s){const n=this.strings;let o=!1;if(n===void 0)e=z(this,e,t,0),o=!Q(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=z(this,c[r+a],t,a),l===B&&(l=this._$AH[a]),o||(o=!Q(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ei extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ai extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Pi extends $e{constructor(e,t,r,s,n){super(e,t,r,s,n),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??g)===B)return;const r=this._$AH,s=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==g&&(r===g||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Oi{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const Ce=J.litHtmlPolyfillSupport;Ce==null||Ce(Y,ne),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.1.2");const xi=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new ne(e.insertBefore(X(),n),n,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return B}};var Ot;m._$litElement$=!0,m.finalized=!0,(Ot=globalThis.litElementHydrateSupport)==null||Ot.call(globalThis,{LitElement:m});const Re=globalThis.litElementPolyfillSupport;Re==null||Re({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:He},Ci=(i=Si,e,t)=>{const{kind:r,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.P(o,void 0,i),c}}}if(r==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+r)};function f(i){return(e,t)=>typeof t=="object"?Ci(i,e,t):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(i){return f({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jt=class extends Event{constructor(e,t,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class{constructor(e,t,r,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=r,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new jt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ri{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:r}]of this.subscriptions)t(this.o,r)},e!==void 0&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ui=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class at extends Ri{constructor(e,t,r){var s,n;super(t.context!==void 0?t.initialValue:r),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new jt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ui(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt({context:i}){return(e,t)=>{const r=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){r.set(this,new at(this,{context:i}))}),{get(){return e.get.call(this)},set(s){var n;return(n=r.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=r.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{r.set(o,new at(o,{context:i}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(c){r.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set:function(c){r.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt({context:i,subscribe:e}){return(t,r)=>{typeof r=="object"?r.addInitializer(function(){new ot(this,{context:i,callback:s=>{this[r.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new ot(s,{context:i,callback:n=>{s[r]=n},subscribe:e})})}}let Ti=class extends m{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",r=>{const s=r.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),r=t;typeof(r==null?void 0:r.then)=="function"?r.then(s=>{const n=s(this.model);this.model=n}):this.model=t}}},ji=class extends m{dispatchMessage(e,t=this){const r=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(r)}};class Di{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:r}=t,s=this._handlers.get(r);return s?s(t,e):e}}function Li(i){return e=>Object.assign({},e,i)}function Mi(i){return i}const Ni="http://localhost:3000",Ii="/api",Te="JWT_AUTH_TOKEN",P=class P{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new P;return console.log("Deauthenticating",e,P._theUser),e===P._theUser&&(localStorage.removeItem(Te),P._theUser=t),t}};P._theUser=new P;let $=P;class Z extends ${constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(s).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){return $._theUser=new Z(e,t),localStorage.setItem(Te,e),$._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Te);return t?Z.authenticate(t,e):$._theUser}}class Be{constructor(e){this._base=Ii,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=$._theUser.authenticated,r={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${$._theUser.token}`};return e?{...r,...n}:n}else return e?{...r}:void 0}_url(e){return`${Ni}${this._base}${e}`}}class lt extends Be{constructor(e){super(Object.fromEntries(e))}}class Mt extends Be{constructor(){super(void 0)}}var Hi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Nt=(i,e,t,r)=>{for(var s=r>1?void 0:r?Bi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Hi(e,t,s),s};const It="MTVModel",ct={user:new $},zi=()=>new Di,Ht=Li,Bt=Mi;class zt extends Ti{constructor(e){super(e,ct),this.model=ct}}Nt([Dt({context:It}),N()],zt.prototype,"model",2);class ze extends ji{getFromModel(e){if(this._model)return this._model[e]}}Nt([Lt({context:It,subscribe:!0}),f({attribute:!1})],ze.prototype,"_model",2);const Fe=zi(),Fi=Fe.update;Fe.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new Mt().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Ht({profile:t}):Bt)});Fe.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new Be(t).put(`/profiles/${e}`).then(r=>{if(r.status===200)return r.json()}).then(r=>{r&&console.log("Profile:",r)}).then(r=>r?Ht({profile:r}):Bt)});var qi=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,oe=(i,e,t,r)=>{for(var s=r>1?void 0:r?Vi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&qi(e,t,s),s};let j=class extends m{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(i){const e=i.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,r)=>{const s=t[0].toUpperCase(),n=r[0].toUpperCase();return s<n?-1:s>n?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return _`
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
          ${this.names.map(i=>_`<slot
                ><default-card
                  title=${i[0]}
                  description=${i[1]}
                  user_id=${i[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};j.styles=b`
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
      border: 0.9px solid var(--white-color);
      width: 120px;
      height: 120px;
      border-radius: var(--box-border-radius);
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
  `;oe([f({type:Array})],j.prototype,"names",2);oe([f({type:Array})],j.prototype,"namesOriginalOrder",2);oe([f({type:Array})],j.prototype,"listAttributes",2);oe([N()],j.prototype,"sort_state",2);j=oe([v("sortable-list")],j);var ki=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Ee=(i,e,t,r)=>{for(var s=r>1?void 0:r?Wi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ki(e,t,s),s};let F=class extends m{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return _`
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
          ${this.names.map(i=>_`<slot
                ><default-card
                  title=${i[0]}
                  description=${i[1]}
                  user_id=${i[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};F.styles=b`
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
      border: 0.9px solid var(--white-color);
      width: 120px;
      height: 120px;
      border-radius: var(--box-border-radius);
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
  `;Ee([f({type:Array})],F.prototype,"names",2);Ee([f({type:Array})],F.prototype,"listAttributes",2);Ee([N()],F.prototype,"sort_state",2);F=Ee([v("general-list")],F);var Ki=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,qe=(i,e,t,r)=>{for(var s=r>1?void 0:r?Ji(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Ki(e,t,s),s};let ee=class extends m{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return _`
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
    `}};ee.styles=b`
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
      border: 0.9px solid var(--white-color);
      border-radius: var(--box-border-radius);
      width: 265px;
    }

    .section-title {
      font-weight: var(--bold-weight);
    }

    a.section-title {
      display: flex;
      color: var(--accent-color);
    }
  `;qe([f({type:Array})],ee.prototype,"artists",2);qe([f({type:String})],ee.prototype,"listAttributes",2);ee=qe([v("favorites-list")],ee);var Gi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,ae=(i,e,t,r)=>{for(var s=r>1?void 0:r?Xi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Gi(e,t,s),s};let D=class extends m{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return _`
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
          <li class="link">
            <a href="./user1.html" class="link">your profile</a>
          </li>
          <li>settings (not functional)</li>
          <li>
            <color-mode-switch></color-mode-switch>
          </li>
          <li>sign out (not functional)</li>
        </ul>
      </slot>
    `}_handleChange(i){const e=i.target;this._toggle(e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};D.styles=b`
    :host {
      font-family: var(--font);
      font-weight: var(--medium-weight);
      --position-left: 0;
      --position-right: auto;

      display: inline-block;
      position: relative;
      color: var(--white-color);
      background: var(--white-color);
      text-decoration: underline;
      margin: 0.8em 6.25em 0em 0em;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    /*does alter the ul that holds the li elements */
    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      list-style: none;
      white-space: nowrap;
      background: var(--darker-color);
      margin-left: 0em;
      padding-left: 0em;
      margin-top: 0.78em;
      border: 0.1em solid var(--white-color);
    }

    li {
      padding: 1em 0.5em 1em 0.5em;
      border-bottom: 0.1em solid var(--white-color);
    }

    li:hover {
      background: var(--hover-color);
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
      bottom: 1em;
      border: 0.1em solid var(--background-color);
      border-radius: 50px;
      margin-bottom: 2 em;
    }
  `;ae([f({reflect:!0,type:Boolean})],D.prototype,"open",2);ae([f()],D.prototype,"align",2);ae([f()],D.prototype,"profileImage",2);ae([f()],D.prototype,"profileDescription",2);D=ae([v("drop-down")],D);var Qi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Ft=(i,e,t,r)=>{for(var s=r>1?void 0:r?Yi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Qi(e,t,s),s};let _e=class extends m{constructor(){super(...arguments),this.on=!1}render(){return _`<label>
      <slot>light mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(i){const e=i.target,t=new Event(i.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};_e.styles=b`
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
      border: 1px solid var(--white-color);
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
      background-color: var(--white-color);
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
  `;Ft([f({reflect:!0,type:Boolean})],_e.prototype,"on",2);_e=Ft([v("color-mode-switch")],_e);var Zi=Object.defineProperty,es=Object.getOwnPropertyDescriptor,Ae=(i,e,t,r)=>{for(var s=r>1?void 0:r?es(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Zi(e,t,s),s};let q=class extends m{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return _`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};q.styles=b`
    .user-friend {
      border: 0.9px solid var(--white-color);
      width: 120px;
      height: 120px;
      border-radius: var(--box-border-radius);
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
  `;Ae([f()],q.prototype,"title",2);Ae([f()],q.prototype,"description",2);Ae([f()],q.prototype,"user_id",2);q=Ae([v("default-card")],q);var ts=Object.defineProperty,is=Object.getOwnPropertyDescriptor,Ve=(i,e,t,r)=>{for(var s=r>1?void 0:r?is(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ts(e,t,s),s};let te=class extends m{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return _`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};te.styles=b`
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
      border: 1px solid var(--white-color);
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
      background-color: var(--white-color);
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
  `;Ve([f({reflect:!0,type:Boolean})],te.prototype,"on",2);Ve([f()],te.prototype,"filteredState",2);te=Ve([v("toggle-switch")],te);var ss=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,ke=(i,e,t,r)=>{for(var s=r>1?void 0:r?rs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ss(e,t,s),s};let ie=class extends m{constructor(){super(...arguments),this.path=""}get profile(){return this.using||{}}render(){const{name:i,profileImage:e,profileDescription:t,bio:r}=this.profile;return _`
      <section class="user-profile-header">
        <section class="user-profile-user-content">
          <section class="user-profile-picture">
            <img
              src="/images/${e}.png"
              alt="${t}"
              width="150"
            />
          </section>
          <section class="user-profile-header-text">
            <h1>${i}&apos;s Page</h1>
            <p class="user-description">${r}</p>
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
    `}};ie.styles=b`
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
    .user-profile-header-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 50px;
      height: 75%;
    }

    .user-description {
      font-weight: var(--light-weight);
      font-size: 1.5rem;
      margin: 0;
    }

    h1 {
      color: var(--white-color);
      font-size: 4rem;
      margin: 0;
    }

    .current-favorites-h3 {
      margin-bottom: 15px;
      padding: 10px 0px 0px 10px;
    }

    .current-favorites {
      padding-bottom: 50px;
    }

    .favorite-album,
    .favorite-song,
    .favorite-artist {
      padding: 10px 0px 5px 10px;
    }

    .favorite-artist p,
    .favorite-album p,
    .favorite-song p {
      margin-top: 3px;
    }

    .favorite-artists-list,
    .favorite-songs-list,
    .favorite-albums-list {
      border: 0.9px solid var(--white-color);
      border-radius: var(--box-border-radius);
      width: 265px;
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

    .song-title,
    .album-title,
    .artist-title {
      font-weight: var(--bold-weight);
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
  `;ke([f()],ie.prototype,"path",2);ke([f({attribute:!1})],ie.prototype,"using",2);ie=ke([v("user-profile")],ie);function ve(i){return i=i||[],Array.isArray(i)?i:[i]}function E(i){return`[Vaadin.Router] ${i}`}function ns(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const be="module",ye="nomodule",je=[be,ye];function ht(i){if(!i.match(/.+\.[m]?js$/))throw new Error(E(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function qt(i){if(!i||!w(i.path))throw new Error(E('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!L(i.action)&&!Array.isArray(i.children)&&!L(i.children)&&!we(e)&&!t.some(r=>w(i[r])))throw new Error(E(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))ht(e);else if(je.some(r=>r in e))je.forEach(r=>r in e&&ht(e[r]));else throw new Error(E('Expected route bundle to include either "'+ye+'" or "'+be+'" keys, or both'));i.redirect&&["bundle","component"].forEach(r=>{r in i&&console.warn(E(`Route config "${i.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function dt(i){ve(i).forEach(e=>qt(e))}function ut(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===be?t.setAttribute("type",be):e===ye&&t.setAttribute(ye,""),t.async=!0),new Promise((r,s)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,r(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),s(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function os(i){return w(i)?ut(i):Promise.race(je.filter(e=>e in i).map(e=>ut(i[e],e)))}function G(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function we(i){return typeof i=="object"&&!!i}function L(i){return typeof i=="function"}function w(i){return typeof i=="string"}function Vt(i){const e=new Error(E(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const H=new class{};function as(i){const e=i.port,t=i.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${n}`}function pt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||as(e))!==window.location.origin)return;const{pathname:s,search:n,hash:o}=e;G("go",{pathname:s,search:n,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const ls={activate(){window.document.addEventListener("click",pt)},inactivate(){window.document.removeEventListener("click",pt)}},cs=/Trident/.test(navigator.userAgent);cs&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ft(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;G("go",{pathname:e,search:t,hash:r})}const hs={activate(){window.addEventListener("popstate",ft)},inactivate(){window.removeEventListener("popstate",ft)}};var k=Xt,ds=We,us=ms,ps=Kt,fs=Gt,kt="/",Wt="./",gs=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function We(i,e){for(var t=[],r=0,s=0,n="",o=e&&e.delimiter||kt,c=e&&e.delimiters||Wt,a=!1,l;(l=gs.exec(i))!==null;){var h=l[0],d=l[1],u=l.index;if(n+=i.slice(s,u),s=u+h.length,d){n+=d[1],a=!0;continue}var p="",C=i[s],si=l[2],ri=l[3],ni=l[4],ce=l[5];if(!a&&n.length){var Oe=n.length-1;c.indexOf(n[Oe])>-1&&(p=n[Oe],n=n.slice(0,Oe))}n&&(t.push(n),n="",a=!1);var oi=p!==""&&C!==void 0&&C!==p,ai=ce==="+"||ce==="*",li=ce==="?"||ce==="*",Je=p||o,Ge=ri||ni;t.push({name:si||r++,prefix:p,delimiter:Je,optional:li,repeat:ai,partial:oi,pattern:Ge?_s(Ge):"[^"+A(Je)+"]+?"})}return(n||s<i.length)&&t.push(n+i.substr(s)),t}function ms(i,e){return Kt(We(i,e))}function Kt(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(r,s){for(var n="",o=s&&s.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){n+=a;continue}var l=r?r[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function A(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _s(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Jt(i){return i&&i.sensitive?"":"i"}function vs(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function bs(i,e,t){for(var r=[],s=0;s<i.length;s++)r.push(Xt(i[s],e,t).source);return new RegExp("(?:"+r.join("|")+")",Jt(t))}function ys(i,e,t){return Gt(We(i,t),e,t)}function Gt(i,e,t){t=t||{};for(var r=t.strict,s=t.start!==!1,n=t.end!==!1,o=A(t.delimiter||kt),c=t.delimiters||Wt,a=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),l=s?"^":"",h=i.length===0,d=0;d<i.length;d++){var u=i[d];if(typeof u=="string")l+=A(u),h=d===i.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=A(u.prefix)+"("+p+")?":l+="(?:"+A(u.prefix)+"("+p+"))?":l+=A(u.prefix)+"("+p+")"}}return n?(r||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(r||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Jt(t))}function Xt(i,e,t){return i instanceof RegExp?vs(i,e):Array.isArray(i)?bs(i,e,t):ys(i,e,t)}k.parse=ds;k.compile=us;k.tokensToFunction=ps;k.tokensToRegExp=fs;const{hasOwnProperty:ws}=Object.prototype,De=new Map;De.set("|false",{keys:[],pattern:/(?:)/});function gt(i){try{return decodeURIComponent(i)}catch{return i}}function $s(i,e,t,r,s){t=!!t;const n=`${i}|${t}`;let o=De.get(n);if(!o){const l=[];o={keys:l,pattern:k(i,l,{end:t,strict:i===""})},De.set(n,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},s);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!ws.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(gt):[]:a[d]=u&&gt(u))}return{path:c[0],keys:(r||[]).concat(o.keys),params:a}}function Qt(i,e,t,r,s){let n,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const h=i.__children=i.__children||i.children;if(!n&&(n=$s(a,e,!h,r,s),n))return{done:!1,value:{route:i,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=i;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Qt(u,e.substr(p),t,n.keys,n.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Es(i){if(L(i.route.action))return i.route.action(i)}function As(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Ps(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Os(i,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const s={path:r,route:t};if(!i.chain)i.chain=[];else if(t.parent){let n=i.chain.length;for(;n--&&i.chain[n].route&&i.chain[n].route!==t.parent;)i.chain.pop()}i.chain.push(s)}}class se{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Es,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){dt(e);const t=[...ve(e)];this.root.__children=t}addRoutes(e){return dt(e),this.root.__children.push(...ve(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),r=Qt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let n=null,o=null,c=t;function a(l,h=n.value.route,d){const u=d===null&&n.value.route;return n=o||r.next(u),o=null,!l&&(n.done||!As(h,n.value.route))?(o=n,Promise.resolve(H)):n.done?Promise.reject(Vt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),Os(c,n.value),Promise.resolve(s(c)).then(p=>p!=null&&p!==H?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Ps(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}se.pathToRegexp=k;const{pathToRegexp:mt}=se,_t=new Map;function Yt(i,e,t){const r=e.name||e.component;if(r&&(i.has(r)?i.get(r).push(e):i.set(r,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const n=t[s];n.parent=e,Yt(i,n,n.__children||n.children)}}function vt(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function bt(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function xs(i,e={}){if(!(i instanceof se))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,s)=>{let n=vt(t,r);if(!n&&(t.clear(),Yt(t,i.root,i.root.__children),n=vt(t,r),!n))throw new Error(`Route "${r}" not found`);let o=_t.get(n.fullPath);if(!o){let a=bt(n),l=n.parent;for(;l;){const p=bt(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=mt.parse(a),d=mt.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},_t.set(a,o),n.fullPath=a}let c=o.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const a={},l=Object.keys(s);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=s[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let yt=[];function Ss(i){yt.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),yt=i}const Cs=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},Rs=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function wt(i,e){return i.classList.add(e),new Promise(t=>{if(Cs(i)){const r=i.getBoundingClientRect(),s=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;i.setAttribute("style",`position: absolute; ${s}`),Rs(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const Us=256;function Ue(i){return i!=null}function Ts(i){const e=Object.assign({},i);return delete e.next,e}function y({pathname:i="",search:e="",hash:t="",chain:r=[],params:s={},redirectFrom:n,resolver:o},c){const a=r.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:s,redirectFrom:n,getUrl:(l={})=>pe(x.pathToRegexp.compile(Zt(a))(Object.assign({},s,l)),o)}}function $t(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function js(i,e){e.location=y(i);const t=i.chain.map(r=>r.route).indexOf(i.route);return i.chain[t].element=e,e}function ue(i,e,t){if(L(i))return i.apply(t,e)}function Et(i,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return ue(t[i],e,t)}}function Ds(i,e){if(!Array.isArray(i)&&!we(i))throw new Error(E(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=ve(i);for(let r=0;r<t.length;r++)qt(t[r]),e.__children.push(t[r])}function he(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function pe(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Zt(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class x extends se{constructor(e,t){const r=document.head.querySelector("base"),s=r&&r.getAttribute("href");super([],Object.assign({baseUrl:s&&se.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=x.NavigationTrigger;x.setTriggers.apply(x,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();L(t.children)&&(r=r.then(()=>t.children(Ts(e))).then(n=>{!Ue(n)&&!L(t.children)&&(n=t.children),Ds(n,t)}));const s={redirect:n=>$t(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(e))return ue(t.action,[e,s],t)}).then(n=>{if(Ue(n)&&(n instanceof HTMLElement||n.redirect||n===H))return n;if(w(t.redirect))return s.redirect(t.redirect);if(t.bundle)return os(t.bundle).then(()=>{},()=>{throw new Error(E(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Ue(n))return n;if(w(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(s).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(n),t&&this.__updateBrowserHistory(n,r===1),G("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),he(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(s,{resolver:this})),G("error",Object.assign({router:this,error:n},s)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const n=r!==t?r:e,c=pe(Zt(r.chain),r.resolver)===r.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===H?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(r).then(l=>{if(l===null||l===H)throw Vt(n);return l&&l!==H&&l!==r?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(js(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(E(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${ns(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],s=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),c=a=>$t(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,s.length)&&!(r[a].route!==s[a].route||r[a].path!==s[a].path&&r[a].element!==s[a].element||!this.__isReusableElement(r[a].element,s[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=s.length===r.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},r[a]);for(let a=0;a<s.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},s[a]),r[a].element.location=y(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},r[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=y(e,r[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},s[a]),s[a].element&&(s[a].element.location=y(e,s[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,s){const n=y(t);return e.then(o=>{if(this.__isLatestRender(t))return Et("onBeforeLeave",[n,r,this],s.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,r,s){const n=y(t,s.route);return e.then(o=>{if(this.__isLatestRender(t))return Et("onBeforeEnter",[n,r,this],s.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>Us)throw new Error(E(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(E(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const n=s?"replaceState":"pushState";window.history[n](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const n=t&&t.chain[s].element;if(n)if(n.parentNode===r)e.chain[s].element=n,r=n;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let s=r;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(s.appendChild(o),this.__addedByRouter.set(o,!0),s===r&&this.__appearingContent.push(o),s=o)}}__removeDisappearingContent(){this.__disappearingContent&&he(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(he(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const s=t.chain[r].element;if(s)try{const n=y(e);ue(s.onAfterLeave,[n,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&he(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},s=y(e,e.chain[t].route);ue(r.onAfterEnter,[s,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],s=[],n=e.chain;let o;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){o=n[c-1].route.animate;break}if(t&&r&&o){const c=we(o)&&o.leave||"leaving",a=we(o)&&o.enter||"entering";s.push(wt(t,c)),s.push(wt(r,a))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:s}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:s},!0))}static setTriggers(...e){Ss(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=xs(this)),pe(this.__urlForName(e,t),this)}urlForPath(e,t){return pe(x.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:s}=w(e)?this.__createUrl(e,"http://a"):e;return G("go",{pathname:t,search:r,hash:s})}}const Ls=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,fe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ms(){function i(){return!0}return ei(i)}function Ns(){try{return Is()?!0:Hs()?fe?!Bs():!Ms():!1}catch{return!1}}function Is(){return localStorage.getItem("vaadin.developmentmode.force")}function Hs(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Bs(){return!!(fe&&Object.keys(fe).map(e=>fe[e]).filter(e=>e.productionMode).length>0)}function ei(i,e){if(typeof i!="function")return;const t=Ls.exec(i.toString());if(t)try{i=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(e)}window.Vaadin=window.Vaadin||{};const At=function(i,e){if(window.Vaadin.developmentMode)return ei(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ns());function zs(){}const Fs=function(){if(typeof At=="function")return At(zs)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Fs();x.NavigationTrigger={POPSTATE:hs,CLICK:ls};var qs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,ti=(i,e,t,r)=>{for(var s=r>1?void 0:r?Vs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&qs(e,t,s),s};let Le=class extends m{constructor(){super(...arguments),this.router=new x(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return _`<slot></slot>`}};ti([f({attribute:!1})],Le.prototype,"routes",2);Le=ti([v("vaadin-router")],Le);var ks=Object.defineProperty,Ws=Object.getOwnPropertyDescriptor,Pe=(i,e,t,r)=>{for(var s=r>1?void 0:r?Ws(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&ks(e,t,s),s};let ii="auth",V=class extends m{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Z.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const i=_`
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
    `;return _`${this.isAuthenticated()?"":i} <slot></slot>`}_handleLogin(i){i.preventDefault();const e=i.target,t=new FormData(e);new lt(t).base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{s&&(console.log("Authentication:",s.token),this.user=Z.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(i){i.preventDefault();const e=i.target,t=new FormData(e);new lt(t).base().post("/signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration:",s)})}_toggleDialog(i){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(i?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=$.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};V.styles=b`
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
  `;Pe([N()],V.prototype,"loginStatus",2);Pe([N()],V.prototype,"registerStatus",2);Pe([Dt({context:ii}),N()],V.prototype,"user",2);V=Pe([v("auth-required")],V);var Ks=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Ke=(i,e,t,r)=>{for(var s=r>1?void 0:r?Js(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Ks(e,t,s),s};let re=class extends m{constructor(){super(...arguments),this.user=new $}render(){const{profileImage:i,profileDescription:e}=this.profile||{};return _`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${i}"
          profileDescription="${e}"
        ></drop-down>
      </section>
    `}updated(i){if(console.log("Profile Data has been updated",i),i.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(i){new Mt().get(i).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};re.styles=b`
    .match-the-vibe-header a {
      font-weight: var(--bold-weight);
      color: var(--background-color);
      padding: var(--component-inside-padding);
    }

    .match-the-vibe-header {
      display: flex;
      justify-content: space-between;
      background: var(--white-color);
      padding: 15px 15px 15px 0px;
      height: 4.3em;
    }
  `;Ke([N()],re.prototype,"profile",2);Ke([Lt({context:ii,subscribe:!0}),f({attribute:!1})],re.prototype,"user",2);re=Ke([v("match-the-vibe-header")],re);var Gs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,le=(i,e,t,r)=>{for(var s=r>1?void 0:r?Xs(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Gs(e,t,s),s};let M=class extends ze{get userid(){var i;return console.log(),(i=this.location)==null?void 0:i.params.userid}get edit(){var i;return(i=this.location)==null?void 0:i.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(i,e,t){i==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(i,e,t)}render(){return _` <user-profile .using=${this.profile}> </user-profile> `}};M.styles=[b`
      :host {
        display: contents;
      }
    `];le([f({attribute:!1})],M.prototype,"location",2);le([f({reflect:!0})],M.prototype,"userid",1);le([f({reflect:!0})],M.prototype,"edit",1);le([f()],M.prototype,"profile",1);M=le([v("profile-page")],M);var Qs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Zs=(i,e,t,r)=>{for(var s=r>1?void 0:r?Ys(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&Qs(e,t,s),s};let Me=class extends ze{render(){return _` <section>
    <p>hello</p>
    </section `}};Me.styles=[b`
      :host {
        display: contents;
      }
    `];Me=Zs([v("home-page")],Me);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,ir=(i,e,t,r)=>{for(var s=r>1?void 0:r?tr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&er(e,t,s),s};let sr=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Pt=class extends zt{constructor(){super(Fi)}render(){return _`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${sr}> </vaadin-router>
      </auth-required>
    `}updated(i){console.log("MTVAPPElement updated:",i.keys()),i.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Pt=ir([v("mtv-app")],Pt);
