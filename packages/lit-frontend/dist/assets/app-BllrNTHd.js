(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Ne=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),Xe=new WeakMap;let xt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ne&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Xe.set(t,e))}return e}toString(){return this.cssText}};const ci=i=>new xt(typeof i=="string"?i:i+"",void 0,Ie),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new xt(t,i,Ie)},hi=(i,e)=>{if(Ne)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=de.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)}},Qe=Ne?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ci(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:di,defineProperty:ui,getOwnPropertyDescriptor:pi,getOwnPropertyNames:fi,getOwnPropertySymbols:gi,getPrototypeOf:mi}=Object,S=globalThis,Ye=S.trustedTypes,_i=Ye?Ye.emptyScript:"",xe=S.reactiveElementPolyfillSupport,J=(i,e)=>i,ge={toAttribute(i,e){switch(e){case Boolean:i=i?_i:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},He=(i,e)=>!di(i,e),Ze={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:He};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&ui(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:n}=pi(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ze}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const e=mi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const t=this.properties,s=[...fi(t),...gi(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(Qe(r))}else e!==void 0&&t.push(Qe(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var n;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:ge).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ge;this._$Em=r,this[r]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??He)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[J("elementProperties")]=new Map,I[J("finalized")]=new Map,xe==null||xe({ReactiveElement:I}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,me=G.trustedTypes,et=me?me.createPolicy("lit-html",{createHTML:i=>i}):void 0,St="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+O,vi=`<${Ct}>`,j=document,Q=()=>j.createComment(""),Y=i=>i===null||typeof i!="object"&&typeof i!="function",Rt=Array.isArray,bi=i=>Rt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,it=/>/g,U=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,st=/"/g,Ut=/^(?:script|style|textarea|title)$/i,yi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=yi(1),B=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),nt=new WeakMap,T=j.createTreeWalker(j,129);function Tt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}const wi=(i,e)=>{const t=i.length-1,s=[];let r,n=e===2?"<svg>":"",o=K;for(let c=0;c<t;c++){const a=i[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===K?h[1]==="!--"?o=tt:h[1]!==void 0?o=it:h[2]!==void 0?(Ut.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=U):h[3]!==void 0&&(o=U):o===U?h[0]===">"?(o=r??K,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?U:h[3]==='"'?st:rt):o===st||o===rt?o=U:o===tt||o===it?o=K:(o=U,r=void 0);const p=o===U&&i[c+1].startsWith("/>")?" ":"";n+=o===K?a+vi:d>=0?(s.push(l),a.slice(0,d)+St+a.slice(d)+O+p):a+O+(d===-2?c:p)}return[Tt(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),s]};class Z{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=wi(e,t);if(this.el=Z.createElement(l,s),T.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=T.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(St)){const u=h[o++],p=r.getAttribute(d).split(O),R=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:R[2],strings:p,ctor:R[1]==="."?Ei:R[1]==="?"?Ai:R[1]==="@"?Pi:$e}),r.removeAttribute(d)}else d.startsWith(O)&&(a.push({type:6,index:n}),r.removeAttribute(d));if(Ut.test(r.tagName)){const d=r.textContent.split(O),u=d.length-1;if(u>0){r.textContent=me?me.emptyScript:"";for(let p=0;p<u;p++)r.append(d[p],Q()),T.nextNode(),a.push({type:2,index:++n});r.append(d[u],Q())}}}else if(r.nodeType===8)if(r.data===Ct)a.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:n}),d+=O.length-1}n++}}static createElement(e,t){const s=j.createElement("template");return s.innerHTML=e,s}}function z(i,e,t=i,s){var o,c;if(e===B)return e;let r=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=Y(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=z(i,r._$AS(i,e.values),r,s)),e}class $i{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??j).importNode(t,!0);T.currentNode=r;let n=T.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new oe(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Oi(n,this,e)),this._$AV.push(l),a=s[++c]}o!==(a==null?void 0:a.index)&&(n=T.nextNode(),o++)}return T.currentNode=j,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class oe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),Y(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==g&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Z.createElement(Tt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new $i(r,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new Z(e)),t}k(e){Rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const n of e)r===t.length?t.push(s=new oe(this.S(Q()),this.S(Q()),this,this.options)):s=t[r],s._$AI(n),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class $e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(e,t=this,s,r){const n=this.strings;let o=!1;if(n===void 0)e=z(this,e,t,0),o=!Y(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=z(this,c[s+a],t,a),l===B&&(l=this._$AH[a]),o||(o=!Y(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ei extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ai extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Pi extends $e{constructor(e,t,s,r,n){super(e,t,s,r,n),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??g)===B)return;const s=this._$AH,r=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==g&&(s===g||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Oi{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const Ce=G.litHtmlPolyfillSupport;Ce==null||Ce(Z,oe),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.1.2");const xi=(i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new oe(e.insertBefore(Q(),n),n,void 0,t??{})}return r._$AI(i),r};/**
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
 */const Si={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:He},Ci=(i=Si,e,t)=>{const{kind:s,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,i),s==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,i)},init(c){return c!==void 0&&this.P(o,void 0,i),c}}}if(s==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function f(i){return(e,t)=>typeof t=="object"?Ci(i,e,t):((s,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(i){return f({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jt=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class{constructor(e,t,s,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new jt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ri{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ui=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class at extends Ri{constructor(e,t,s){var r,n;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new jt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(r=this.host).addController)==null||n.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ui(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt({context:i}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new at(this,{context:i}))}),{get(){return e.get.call(this)},set(r){var n;return(n=s.get(this))==null||n.setValue(r),e.set.call(this,r)},init(r){var n;return(n=s.get(this))==null||n.setValue(r),r}};{e.constructor.addInitializer(o=>{s.set(o,new at(o,{context:i}))});const r=Object.getOwnPropertyDescriptor(e,t);let n;if(r===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(c){s.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=r.set;n={...r,set:function(c){s.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt({context:i,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new ot(this,{context:i,callback:r=>{this[s.name]=r},subscribe:e})}):t.constructor.addInitializer(r=>{new ot(r,{context:i,callback:n=>{r[s]=n},subscribe:e})})}}let Ti=class extends m{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",s=>{const r=s.detail;console.log("Got message: ",r),this.receive(r)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(r=>{const n=r(this.model);this.model=n}):this.model=t}}},ji=class extends m{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class Di{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,r=this._handlers.get(s);return r?r(t,e):e}}function Li(i){return e=>Object.assign({},e,i)}function Mi(i){return i}const Ni="http://localhost:3000",Ii="/api",Te="JWT_AUTH_TOKEN",P=class P{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new P;return console.log("Deauthenticating",e,P._theUser),e===P._theUser&&(localStorage.removeItem(Te),P._theUser=t),t}};P._theUser=new P;let $=P;class ee extends ${constructor(e,t){super();const r=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(r).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){return $._theUser=new ee(e,t),localStorage.setItem(Te,e),$._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Te);return t?ee.authenticate(t,e):$._theUser}}class Be{constructor(e){this._base=Ii,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=$._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${$._theUser.token}`};return e?{...s,...n}:n}else return e?{...s}:void 0}_url(e){return`${Ni}${this._base}${e}`}}class lt extends Be{constructor(e){super(Object.fromEntries(e))}}class Mt extends Be{constructor(){super(void 0)}}var Hi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Nt=(i,e,t,s)=>{for(var r=s>1?void 0:s?Bi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Hi(e,t,r),r};const It="MTVModel",ct={user:new $},zi=()=>new Di,Ht=Li,Bt=Mi;class zt extends Ti{constructor(e){super(e,ct),this.model=ct}}Nt([Dt({context:It}),N()],zt.prototype,"model",2);class ze extends ji{getFromModel(e){if(this._model)return this._model[e]}}Nt([Lt({context:It,subscribe:!0}),f({attribute:!1})],ze.prototype,"_model",2);const Fe=zi(),Fi=Fe.update;Fe.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new Mt().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Ht({profile:t}):Bt)});Fe.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new Be(t).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{s&&console.log("Profile:",s)}).then(s=>s?Ht({profile:s}):Bt)});var qi=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,ae=(i,e,t,s)=>{for(var r=s>1?void 0:s?Vi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&qi(e,t,r),r};let D=class extends m{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(i){const e=i.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,s)=>{const r=t[0].toUpperCase(),n=s[0].toUpperCase();return r<n?-1:r>n?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return _`
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
    `}};D.styles=b`
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
  `;ae([f({type:Array})],D.prototype,"names",2);ae([f({type:Array})],D.prototype,"namesOriginalOrder",2);ae([f({type:Array})],D.prototype,"listAttributes",2);ae([N()],D.prototype,"sort_state",2);D=ae([v("sortable-list")],D);var ki=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Ee=(i,e,t,s)=>{for(var r=s>1?void 0:s?Wi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&ki(e,t,r),r};let F=class extends m{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return _`
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
  `;Ee([f({type:Array})],F.prototype,"names",2);Ee([f({type:Array})],F.prototype,"listAttributes",2);Ee([N()],F.prototype,"sort_state",2);F=Ee([v("general-list")],F);var Ki=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,qe=(i,e,t,s)=>{for(var r=s>1?void 0:s?Ji(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Ki(e,t,r),r};let te=class extends m{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return _`
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
    `}};te.styles=b`
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
  `;qe([f({type:Array})],te.prototype,"artists",2);qe([f({type:String})],te.prototype,"listAttributes",2);te=qe([v("favorites-list")],te);var Gi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,k=(i,e,t,s)=>{for(var r=s>1?void 0:s?Xi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Gi(e,t,r),r};let C=class extends m{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return _`
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
            <a href="app/profile/${this.profileUserID}" class="link"
              >your profile</a
            >
          </li>
          <li>settings (not functional)</li>
          <li>
            <color-mode-switch></color-mode-switch>
          </li>
          <li>sign out (not functional)</li>
        </ul>
      </slot>
    `}_handleChange(i){const e=i.target;this._toggle(e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};C.styles=b`
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
  `;k([f({reflect:!0,type:Boolean})],C.prototype,"open",2);k([f()],C.prototype,"align",2);k([f()],C.prototype,"profileImage",2);k([f()],C.prototype,"profileUserID",2);k([f()],C.prototype,"profileDescription",2);C=k([v("drop-down")],C);var Qi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Ft=(i,e,t,s)=>{for(var r=s>1?void 0:s?Yi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Qi(e,t,r),r};let _e=class extends m{constructor(){super(...arguments),this.on=!1}render(){return _`<label>
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
  `;Ft([f({reflect:!0,type:Boolean})],_e.prototype,"on",2);_e=Ft([v("color-mode-switch")],_e);var Zi=Object.defineProperty,er=Object.getOwnPropertyDescriptor,Ae=(i,e,t,s)=>{for(var r=s>1?void 0:s?er(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Zi(e,t,r),r};let q=class extends m{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return _`<div class="user-friend">
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
  `;Ae([f()],q.prototype,"title",2);Ae([f()],q.prototype,"description",2);Ae([f()],q.prototype,"user_id",2);q=Ae([v("default-card")],q);var tr=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,Ve=(i,e,t,s)=>{for(var r=s>1?void 0:s?ir(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&tr(e,t,r),r};let ie=class extends m{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return _`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};ie.styles=b`
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
  `;Ve([f({reflect:!0,type:Boolean})],ie.prototype,"on",2);Ve([f()],ie.prototype,"filteredState",2);ie=Ve([v("toggle-switch")],ie);var rr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,ke=(i,e,t,s)=>{for(var r=s>1?void 0:s?sr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&rr(e,t,r),r};let re=class extends m{constructor(){super(...arguments),this.path=""}get profile(){return this.using||{}}render(){const{name:i,profileImage:e,profileDescription:t,bio:s}=this.profile;return _`
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
    `}};re.styles=b`
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
  `;ke([f()],re.prototype,"path",2);ke([f({attribute:!1})],re.prototype,"using",2);re=ke([v("user-profile")],re);function ve(i){return i=i||[],Array.isArray(i)?i:[i]}function E(i){return`[Vaadin.Router] ${i}`}function nr(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const be="module",ye="nomodule",je=[be,ye];function ht(i){if(!i.match(/.+\.[m]?js$/))throw new Error(E(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function qt(i){if(!i||!w(i.path))throw new Error(E('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!L(i.action)&&!Array.isArray(i.children)&&!L(i.children)&&!we(e)&&!t.some(s=>w(i[s])))throw new Error(E(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))ht(e);else if(je.some(s=>s in e))je.forEach(s=>s in e&&ht(e[s]));else throw new Error(E('Expected route bundle to include either "'+ye+'" or "'+be+'" keys, or both'));i.redirect&&["bundle","component"].forEach(s=>{s in i&&console.warn(E(`Route config "${i.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function dt(i){ve(i).forEach(e=>qt(e))}function ut(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===be?t.setAttribute("type",be):e===ye&&t.setAttribute(ye,""),t.async=!0),new Promise((s,r)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,s(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),r(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function or(i){return w(i)?ut(i):Promise.race(je.filter(e=>e in i).map(e=>ut(i[e],e)))}function X(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function we(i){return typeof i=="object"&&!!i}function L(i){return typeof i=="function"}function w(i){return typeof i=="string"}function Vt(i){const e=new Error(E(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const H=new class{};function ar(i){const e=i.port,t=i.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${n}`}function pt(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||ar(e))!==window.location.origin)return;const{pathname:r,search:n,hash:o}=e;X("go",{pathname:r,search:n,hash:o})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const lr={activate(){window.document.addEventListener("click",pt)},inactivate(){window.document.removeEventListener("click",pt)}},cr=/Trident/.test(navigator.userAgent);cr&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ft(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;X("go",{pathname:e,search:t,hash:s})}const hr={activate(){window.addEventListener("popstate",ft)},inactivate(){window.removeEventListener("popstate",ft)}};var W=Xt,dr=We,ur=mr,pr=Kt,fr=Gt,kt="/",Wt="./",gr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function We(i,e){for(var t=[],s=0,r=0,n="",o=e&&e.delimiter||kt,c=e&&e.delimiters||Wt,a=!1,l;(l=gr.exec(i))!==null;){var h=l[0],d=l[1],u=l.index;if(n+=i.slice(r,u),r=u+h.length,d){n+=d[1],a=!0;continue}var p="",R=i[r],ri=l[2],si=l[3],ni=l[4],ce=l[5];if(!a&&n.length){var Oe=n.length-1;c.indexOf(n[Oe])>-1&&(p=n[Oe],n=n.slice(0,Oe))}n&&(t.push(n),n="",a=!1);var oi=p!==""&&R!==void 0&&R!==p,ai=ce==="+"||ce==="*",li=ce==="?"||ce==="*",Je=p||o,Ge=si||ni;t.push({name:ri||s++,prefix:p,delimiter:Je,optional:li,repeat:ai,partial:oi,pattern:Ge?_r(Ge):"[^"+A(Je)+"]+?"})}return(n||r<i.length)&&t.push(n+i.substr(r)),t}function mr(i,e){return Kt(We(i,e))}function Kt(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(s,r){for(var n="",o=r&&r.encode||encodeURIComponent,c=0;c<i.length;c++){var a=i[c];if(typeof a=="string"){n+=a;continue}var l=s?s[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function A(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _r(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Jt(i){return i&&i.sensitive?"":"i"}function vr(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function br(i,e,t){for(var s=[],r=0;r<i.length;r++)s.push(Xt(i[r],e,t).source);return new RegExp("(?:"+s.join("|")+")",Jt(t))}function yr(i,e,t){return Gt(We(i,t),e,t)}function Gt(i,e,t){t=t||{};for(var s=t.strict,r=t.start!==!1,n=t.end!==!1,o=A(t.delimiter||kt),c=t.delimiters||Wt,a=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),l=r?"^":"",h=i.length===0,d=0;d<i.length;d++){var u=i[d];if(typeof u=="string")l+=A(u),h=d===i.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=A(u.prefix)+"("+p+")?":l+="(?:"+A(u.prefix)+"("+p+"))?":l+=A(u.prefix)+"("+p+")"}}return n?(s||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(s||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Jt(t))}function Xt(i,e,t){return i instanceof RegExp?vr(i,e):Array.isArray(i)?br(i,e,t):yr(i,e,t)}W.parse=dr;W.compile=ur;W.tokensToFunction=pr;W.tokensToRegExp=fr;const{hasOwnProperty:wr}=Object.prototype,De=new Map;De.set("|false",{keys:[],pattern:/(?:)/});function gt(i){try{return decodeURIComponent(i)}catch{return i}}function $r(i,e,t,s,r){t=!!t;const n=`${i}|${t}`;let o=De.get(n);if(!o){const l=[];o={keys:l,pattern:W(i,l,{end:t,strict:i===""})},De.set(n,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!wr.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(gt):[]:a[d]=u&&gt(u))}return{path:c[0],keys:(s||[]).concat(o.keys),params:a}}function Qt(i,e,t,s,r){let n,o,c=0,a=i.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const h=i.__children=i.__children||i.children;if(!n&&(n=$r(a,e,!h,s,r),n))return{done:!1,value:{route:i,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=i;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Qt(u,e.substr(p),t,n.keys,n.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Er(i){if(L(i.route.action))return i.route.action(i)}function Ar(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Pr(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Or(i,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const r={path:s,route:t};if(!i.chain)i.chain=[];else if(t.parent){let n=i.chain.length;for(;n--&&i.chain[n].route&&i.chain[n].route!==t.parent;)i.chain.pop()}i.chain.push(r)}}class se{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Er,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){dt(e);const t=[...ve(e)];this.root.__children=t}addRoutes(e){return dt(e),this.root.__children.push(...ve(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),s=Qt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let n=null,o=null,c=t;function a(l,h=n.value.route,d){const u=d===null&&n.value.route;return n=o||s.next(u),o=null,!l&&(n.done||!Ar(h,n.value.route))?(o=n,Promise.resolve(H)):n.done?Promise.reject(Vt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),Or(c,n.value),Promise.resolve(r(c)).then(p=>p!=null&&p!==H?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Pr(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}se.pathToRegexp=W;const{pathToRegexp:mt}=se,_t=new Map;function Yt(i,e,t){const s=e.name||e.component;if(s&&(i.has(s)?i.get(s).push(e):i.set(s,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const n=t[r];n.parent=e,Yt(i,n,n.__children||n.children)}}function vt(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function bt(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function xr(i,e={}){if(!(i instanceof se))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,r)=>{let n=vt(t,s);if(!n&&(t.clear(),Yt(t,i.root,i.root.__children),n=vt(t,s),!n))throw new Error(`Route "${s}" not found`);let o=_t.get(n.fullPath);if(!o){let a=bt(n),l=n.parent;for(;l;){const p=bt(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=mt.parse(a),d=mt.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},_t.set(a,o),n.fullPath=a}let c=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=r[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let yt=[];function Sr(i){yt.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),yt=i}const Cr=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},Rr=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function wt(i,e){return i.classList.add(e),new Promise(t=>{if(Cr(i)){const s=i.getBoundingClientRect(),r=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;i.setAttribute("style",`position: absolute; ${r}`),Rr(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const Ur=256;function Ue(i){return i!=null}function Tr(i){const e=Object.assign({},i);return delete e.next,e}function y({pathname:i="",search:e="",hash:t="",chain:s=[],params:r={},redirectFrom:n,resolver:o},c){const a=s.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:i,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:n,getUrl:(l={})=>pe(x.pathToRegexp.compile(Zt(a))(Object.assign({},r,l)),o)}}function $t(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function jr(i,e){e.location=y(i);const t=i.chain.map(s=>s.route).indexOf(i.route);return i.chain[t].element=e,e}function ue(i,e,t){if(L(i))return i.apply(t,e)}function Et(i,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return ue(t[i],e,t)}}function Dr(i,e){if(!Array.isArray(i)&&!we(i))throw new Error(E(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=ve(i);for(let s=0;s<t.length;s++)qt(t[s]),e.__children.push(t[s])}function he(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function pe(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Zt(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class x extends se{constructor(e,t){const s=document.head.querySelector("base"),r=s&&s.getAttribute("href");super([],Object.assign({baseUrl:r&&se.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=x.NavigationTrigger;x.setTriggers.apply(x,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();L(t.children)&&(s=s.then(()=>t.children(Tr(e))).then(n=>{!Ue(n)&&!L(t.children)&&(n=t.children),Dr(n,t)}));const r={redirect:n=>$t(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return s.then(()=>{if(this.__isLatestRender(e))return ue(t.action,[e,r],t)}).then(n=>{if(Ue(n)&&(n instanceof HTMLElement||n.redirect||n===H))return n;if(w(t.redirect))return r.redirect(t.redirect);if(t.bundle)return or(t.bundle).then(()=>{},()=>{throw new Error(E(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Ue(n))return n;if(w(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(r).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(n),t&&this.__updateBrowserHistory(n,s===1),X("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),he(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(r,{resolver:this})),X("error",Object.assign({router:this,error:n},r)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const n=s!==t?s:e,c=pe(Zt(s.chain),s.resolver)===s.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===H?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(s).then(l=>{if(l===null||l===H)throw Vt(n);return l&&l!==H&&l!==s?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(jr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(E(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${nr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],r=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),c=a=>$t(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let a=0;a<Math.min(s.length,r.length)&&!(s[a].route!==r[a].route||s[a].path!==r[a].path&&s[a].element!==r[a].element||!this.__isReusableElement(s[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===s.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},s[a]);for(let a=0;a<r.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},r[a]),s[a].element.location=y(e,s[a].route)}else for(let a=s.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},s[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<s.length&&s[a].element&&(s[a].element.location=y(e,s[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},r[a]),r[a].element&&(r[a].element.location=y(e,r[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,r){const n=y(t);return e.then(o=>{if(this.__isLatestRender(t))return Et("onBeforeLeave",[n,s,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,s,r){const n=y(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return Et("onBeforeEnter",[n,s,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>Ur)throw new Error(E(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(E(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const n=r?"replaceState":"pushState";window.history[n](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const n=t&&t.chain[r].element;if(n)if(n.parentNode===s)e.chain[r].element=n,s=n;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let r=s;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===s&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&he(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(he(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const r=t.chain[s].element;if(r)try{const n=y(e);ue(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&he(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},r=y(e,e.chain[t].route);ue(s.onAfterEnter,[r,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],r=[],n=e.chain;let o;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){o=n[c-1].route.animate;break}if(t&&s&&o){const c=we(o)&&o.leave||"leaving",a=we(o)&&o.enter||"entering";r.push(wt(t,c)),r.push(wt(s,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:r}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:r},!0))}static setTriggers(...e){Sr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=xr(this)),pe(this.__urlForName(e,t),this)}urlForPath(e,t){return pe(x.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:r}=w(e)?this.__createUrl(e,"http://a"):e;return X("go",{pathname:t,search:s,hash:r})}}const Lr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,fe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Mr(){function i(){return!0}return ei(i)}function Nr(){try{return Ir()?!0:Hr()?fe?!Br():!Mr():!1}catch{return!1}}function Ir(){return localStorage.getItem("vaadin.developmentmode.force")}function Hr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Br(){return!!(fe&&Object.keys(fe).map(e=>fe[e]).filter(e=>e.productionMode).length>0)}function ei(i,e){if(typeof i!="function")return;const t=Lr.exec(i.toString());if(t)try{i=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(e)}window.Vaadin=window.Vaadin||{};const At=function(i,e){if(window.Vaadin.developmentMode)return ei(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Nr());function zr(){}const Fr=function(){if(typeof At=="function")return At(zr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Fr();x.NavigationTrigger={POPSTATE:hr,CLICK:lr};var qr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,ti=(i,e,t,s)=>{for(var r=s>1?void 0:s?Vr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&qr(e,t,r),r};let Le=class extends m{constructor(){super(...arguments),this.router=new x(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return _`<slot></slot>`}};ti([f({attribute:!1})],Le.prototype,"routes",2);Le=ti([v("vaadin-router")],Le);var kr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,Pe=(i,e,t,s)=>{for(var r=s>1?void 0:s?Wr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&kr(e,t,r),r};let ii="auth",V=class extends m{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=ee.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const i=_`
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
    `;return _`${this.isAuthenticated()?"":i} <slot></slot>`}_handleLogin(i){i.preventDefault();const e=i.target,t=new FormData(e);new lt(t).base().post("/login").then(r=>{if(r.status===200)return r.json();this.loginStatus=r.status}).then(r=>{r&&(console.log("Authentication:",r.token),this.user=ee.authenticate(r.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(i){i.preventDefault();const e=i.target,t=new FormData(e);new lt(t).base().post("/signup").then(r=>{if(r.status===200)return r.json();this.registerStatus=r.status}).then(r=>{console.log("Registration:",r)})}_toggleDialog(i){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(i?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=$.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};V.styles=b`
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
  `;Pe([N()],V.prototype,"loginStatus",2);Pe([N()],V.prototype,"registerStatus",2);Pe([Dt({context:ii}),N()],V.prototype,"user",2);V=Pe([v("auth-required")],V);var Kr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ke=(i,e,t,s)=>{for(var r=s>1?void 0:s?Jr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Kr(e,t,r),r};let ne=class extends m{constructor(){super(...arguments),this.user=new $}render(){const{profileImage:i,profileDescription:e,userid:t}=this.profile||{};return _`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${i}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(i){if(console.log("Profile Data has been updated",i),i.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(i){new Mt().get(i).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};ne.styles=b`
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
  `;Ke([N()],ne.prototype,"profile",2);Ke([Lt({context:ii,subscribe:!0}),f({attribute:!1})],ne.prototype,"user",2);ne=Ke([v("match-the-vibe-header")],ne);var Gr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,le=(i,e,t,s)=>{for(var r=s>1?void 0:s?Xr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Gr(e,t,r),r};let M=class extends ze{get userid(){var i;return console.log(),(i=this.location)==null?void 0:i.params.userid}get edit(){var i;return(i=this.location)==null?void 0:i.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(i,e,t){i==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(i,e,t)}render(){return _` <user-profile .using=${this.profile}> </user-profile> `}};M.styles=[b`
      :host {
        display: contents;
      }
    `];le([f({attribute:!1})],M.prototype,"location",2);le([f({reflect:!0})],M.prototype,"userid",1);le([f({reflect:!0})],M.prototype,"edit",1);le([f()],M.prototype,"profile",1);M=le([v("profile-page")],M);var Qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Zr=(i,e,t,s)=>{for(var r=s>1?void 0:s?Yr(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&Qr(e,t,r),r};let Me=class extends ze{render(){return _` <section>
    <p>hello</p>
    </section `}};Me.styles=[b`
      :host {
        display: contents;
      }
    `];Me=Zr([v("home-page")],Me);var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,is=(i,e,t,s)=>{for(var r=s>1?void 0:s?ts(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&es(e,t,r),r};let rs=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Pt=class extends zt{constructor(){super(Fi)}render(){return _`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${rs}> </vaadin-router>
      </auth-required>
    `}updated(i){console.log("MTVAPPElement updated:",i.keys()),i.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Pt=is([v("mtv-app")],Pt);
