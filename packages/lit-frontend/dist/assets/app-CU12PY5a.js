(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=globalThis,Pt=qe.ShadowRoot&&(qe.ShadyCSS===void 0||qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),Jt=new WeakMap;let Pr=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Pt&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=Jt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Jt.set(t,e))}return e}toString(){return this.cssText}};const $i=i=>new Pr(typeof i=="string"?i:i+"",void 0,St),I=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,s,a)=>o+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[a+1],i[0]);return new Pr(t,i,St)},Ei=(i,e)=>{if(Pt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=qe.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)}},Yt=Pt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return $i(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ai,defineProperty:Pi,getOwnPropertyDescriptor:Si,getOwnPropertyNames:Bi,getOwnPropertySymbols:Ti,getPrototypeOf:Ci}=Object,Q=globalThis,Qt=Q.trustedTypes,Oi=Qt?Qt.emptyScript:"",mt=Q.reactiveElementPolyfillSupport,Ae=(i,e)=>i,Ke={toAttribute(i,e){switch(e){case Boolean:i=i?Oi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Bt=(i,e)=>!Ai(i,e),Xt={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Bt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Q.litPropertyMetadata??(Q.litPropertyMetadata=new WeakMap);class ue extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Xt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Pi(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:a}=Si(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return s==null?void 0:s.call(this)},set(l){const u=s==null?void 0:s.call(this);a.call(this,l),this.requestUpdate(e,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xt}static _$Ei(){if(this.hasOwnProperty(Ae("elementProperties")))return;const e=Ci(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ae("properties"))){const t=this.properties,o=[...Bi(t),...Ti(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(Yt(s))}else e!==void 0&&t.push(Yt(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ei(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var a;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const l=(((a=o.converter)==null?void 0:a.toAttribute)!==void 0?o.converter:Ke).toAttribute(t,o.type);this._$Em=e,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Em=null}}_$AK(e,t){var a;const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=o.getPropertyOptions(s),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Ke;this._$Em=s,this[s]=u.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Bt)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,l]of s)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[Ae("elementProperties")]=new Map,ue[Ae("finalized")]=new Map,mt==null||mt({ReactiveElement:ue}),(Q.reactiveElementVersions??(Q.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=globalThis,Je=Pe.trustedTypes,Zt=Je?Je.createPolicy("lit-html",{createHTML:i=>i}):void 0,Sr="$lit$",J=`lit$${(Math.random()+"").slice(9)}$`,Br="?"+J,Ii=`<${Br}>`,re=document,Be=()=>re.createComment(""),Te=i=>i===null||typeof i!="object"&&typeof i!="function",Tr=Array.isArray,Ui=i=>Tr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,er=/-->/g,tr=/>/g,ee=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rr=/'/g,ir=/"/g,Cr=/^(?:script|style|textarea|title)$/i,Ri=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),$=Ri(1),de=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),nr=new WeakMap,te=re.createTreeWalker(re,129);function Or(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zt!==void 0?Zt.createHTML(e):e}const Fi=(i,e)=>{const t=i.length-1,o=[];let s,a=e===2?"<svg>":"",l=Ee;for(let u=0;u<t;u++){const p=i[u];let g,y,_=-1,w=0;for(;w<p.length&&(l.lastIndex=w,y=l.exec(p),y!==null);)w=l.lastIndex,l===Ee?y[1]==="!--"?l=er:y[1]!==void 0?l=tr:y[2]!==void 0?(Cr.test(y[2])&&(s=RegExp("</"+y[2],"g")),l=ee):y[3]!==void 0&&(l=ee):l===ee?y[0]===">"?(l=s??Ee,_=-1):y[1]===void 0?_=-2:(_=l.lastIndex-y[2].length,g=y[1],l=y[3]===void 0?ee:y[3]==='"'?ir:rr):l===ir||l===rr?l=ee:l===er||l===tr?l=Ee:(l=ee,s=void 0);const b=l===ee&&i[u+1].startsWith("/>")?" ":"";a+=l===Ee?p+Ii:_>=0?(o.push(g),p.slice(0,_)+Sr+p.slice(_)+J+b):p+J+(_===-2?u:b)}return[Or(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),o]};class Ce{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let a=0,l=0;const u=e.length-1,p=this.parts,[g,y]=Fi(e,t);if(this.el=Ce.createElement(g,o),te.currentNode=this.el.content,t===2){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(s=te.nextNode())!==null&&p.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const _ of s.getAttributeNames())if(_.endsWith(Sr)){const w=y[l++],b=s.getAttribute(_).split(J),R=/([.?@])?(.*)/.exec(w);p.push({type:1,index:a,name:R[2],strings:b,ctor:R[1]==="."?Di:R[1]==="?"?Li:R[1]==="@"?ji:nt}),s.removeAttribute(_)}else _.startsWith(J)&&(p.push({type:6,index:a}),s.removeAttribute(_));if(Cr.test(s.tagName)){const _=s.textContent.split(J),w=_.length-1;if(w>0){s.textContent=Je?Je.emptyScript:"";for(let b=0;b<w;b++)s.append(_[b],Be()),te.nextNode(),p.push({type:2,index:++a});s.append(_[w],Be())}}}else if(s.nodeType===8)if(s.data===Br)p.push({type:2,index:a});else{let _=-1;for(;(_=s.data.indexOf(J,_+1))!==-1;)p.push({type:7,index:a}),_+=J.length-1}a++}}static createElement(e,t){const o=re.createElement("template");return o.innerHTML=e,o}}function fe(i,e,t=i,o){var l,u;if(e===de)return e;let s=o!==void 0?(l=t._$Co)==null?void 0:l[o]:t._$Cl;const a=Te(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((u=s==null?void 0:s._$AO)==null||u.call(s,!1),a===void 0?s=void 0:(s=new a(i),s._$AT(i,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=fe(i,s._$AS(i,e.values),s,o)),e}class ki{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=((e==null?void 0:e.creationScope)??re).importNode(t,!0);te.currentNode=s;let a=te.nextNode(),l=0,u=0,p=o[0];for(;p!==void 0;){if(l===p.index){let g;p.type===2?g=new De(a,a.nextSibling,this,e):p.type===1?g=new p.ctor(a,p.name,p.strings,this,e):p.type===6&&(g=new Mi(a,this,e)),this._$AV.push(g),p=o[++u]}l!==(p==null?void 0:p.index)&&(a=te.nextNode(),l++)}return te.currentNode=re,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class De{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fe(this,e,t),Te(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==de&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ui(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==O&&Te(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ce.createElement(Or(o.h,o.h[0]),this.options)),o);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const l=new ki(s,this),u=l.u(this.options);l.p(t),this.T(u),this._$AH=l}}_$AC(e){let t=nr.get(e.strings);return t===void 0&&nr.set(e.strings,t=new Ce(e)),t}k(e){Tr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const a of e)s===t.length?t.push(o=new De(this.S(Be()),this.S(Be()),this,this.options)):o=t[s],o._$AI(a),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,a){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}_$AI(e,t=this,o,s){const a=this.strings;let l=!1;if(a===void 0)e=fe(this,e,t,0),l=!Te(e)||e!==this._$AH&&e!==de,l&&(this._$AH=e);else{const u=e;let p,g;for(e=a[0],p=0;p<a.length-1;p++)g=fe(this,u[o+p],t,p),g===de&&(g=this._$AH[p]),l||(l=!Te(g)||g!==this._$AH[p]),g===O?e=O:e!==O&&(e+=(g??"")+a[p+1]),this._$AH[p]=g}l&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Di extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class Li extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}class ji extends nt{constructor(e,t,o,s,a){super(e,t,o,s,a),this.type=5}_$AI(e,t=this){if((e=fe(this,e,t,0)??O)===de)return;const o=this._$AH,s=e===O&&o!==O||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==O&&(o===O||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Mi{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}}const yt=Pe.litHtmlPolyfillSupport;yt==null||yt(Ce,De),(Pe.litHtmlVersions??(Pe.litHtmlVersions=[])).push("3.1.2");const Ni=(i,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let s=o._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;o._$litPart$=s=new De(e.insertBefore(Be(),a),a,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let B=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ni(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return de}};var Ar;B._$litElement$=!0,B.finalized=!0,(Ar=globalThis.litElementHydrateSupport)==null||Ar.call(globalThis,{LitElement:B});const _t=globalThis.litElementPolyfillSupport;_t==null||_t({LitElement:B});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Bt},zi=(i=Hi,e,t)=>{const{kind:o,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(t.name,i),o==="accessor"){const{name:l}=t;return{set(u){const p=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,p,i)},init(u){return u!==void 0&&this.P(l,void 0,i),u}}}if(o==="setter"){const{name:l}=t;return function(u){const p=this[l];e.call(this,u),this.requestUpdate(l,p,i)}}throw Error("Unsupported decorator location: "+o)};function v(i){return(e,t)=>typeof t=="object"?zi(i,e,t):((o,s,a)=>{const l=s.hasOwnProperty(a);return s.constructor.createProperty(a,l?{...o,wrapped:!0}:o),l?Object.getOwnPropertyDescriptor(s,a):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(i){return v({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ir=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let sr=class{constructor(e,t,o,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ir(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vi=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},or=class extends qi{constructor(e,t,o){var s,a;super(t.context!==void 0?t.initialValue:o),this.onContextRequest=l=>{const u=l.composedPath()[0];l.context===this.context&&u!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,u,l.subscribe))},this.onProviderRequest=l=>{const u=l.composedPath()[0];if(l.context!==this.context||u===this.host)return;const p=new Set;for(const[g,{consumerHost:y}]of this.subscriptions)p.has(g)||(p.add(g),y.dispatchEvent(new Ir(this.context,g,!0)));l.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(s=this.host).addController)==null||a.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Vi(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ur({context:i}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){o.set(this,new or(this,{context:i}))}),{get(){return e.get.call(this)},set(s){var a;return(a=o.get(this))==null||a.setValue(s),e.set.call(this,s)},init(s){var a;return(a=o.get(this))==null||a.setValue(s),s}};{e.constructor.addInitializer(l=>{o.set(l,new or(l,{context:i}))});const s=Object.getOwnPropertyDescriptor(e,t);let a;if(s===void 0){const l=new WeakMap;a={get:function(){return l.get(this)},set:function(u){o.get(this).setValue(u),l.set(this,u)},configurable:!0,enumerable:!0}}else{const l=s.set;a={...s,set:function(u){o.get(this).setValue(u),l==null||l.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rr({context:i,subscribe:e}){return(t,o)=>{typeof o=="object"?o.addInitializer(function(){new sr(this,{context:i,callback:s=>{this[o.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new sr(s,{context:i,callback:a=>{s[o]=a},subscribe:e})})}}let Wi=class extends B{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",o=>{const s=o.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),o=t;typeof(o==null?void 0:o.then)=="function"?o.then(s=>{const a=s(this.model);this.model=a}):this.model=t}}},Gi=class extends B{dispatchMessage(e,t=this){const o=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(o)}};class Ki{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:o}=t,s=this._handlers.get(o);return s?s(t,e):e}}function Ji(i){return e=>Object.assign({},e,i)}function Yi(i){return i}const Qi="http://localhost:3000",Xi="/api",vt="JWT_AUTH_TOKEN",K=class K{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new K;return console.log("Deauthenticating",e,K._theUser),e===K._theUser&&(localStorage.removeItem(vt),K._theUser=t),t}};K._theUser=new K;let L=K;class Oe extends L{constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(s).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),l=JSON.parse(a);console.log("Token payload",l),this.token=e,this.authenticated=!0,this.username=l.username,this.signOut=t}static authenticate(e,t){return L._theUser=new Oe(e,t),localStorage.setItem(vt,e),L._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(vt);return t?Oe.authenticate(t,e):L._theUser}}class Tt{constructor(e){this._base=Xi,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=L._theUser.authenticated,o={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${L._theUser.token}`};return e?{...o,...a}:a}else return e?{...o}:void 0}_url(e){return`${Qi}${this._base}${e}`}}class ar extends Tt{constructor(e){super(Object.fromEntries(e))}}class Fr extends Tt{constructor(){super(void 0)}}var Zi=Object.defineProperty,en=Object.getOwnPropertyDescriptor,kr=(i,e,t,o)=>{for(var s=o>1?void 0:o?en(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Zi(e,t,s),s};const Dr="MTVModel",cr={user:new L},tn=()=>new Ki,Lr=Ji,jr=Yi;class Mr extends Wi{constructor(e){super(e,cr),this.model=cr}}kr([Ur({context:Dr}),z()],Mr.prototype,"model",2);class Ct extends Gi{getFromModel(e){if(this._model)return this._model[e]}}kr([Rr({context:Dr,subscribe:!0}),v({attribute:!1})],Ct.prototype,"_model",2);const Ot=tn(),rn=Ot.update;Ot.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new Fr().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Lr({profile:t}):jr)});Ot.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new Tt(t).put(`/profiles/${e}`).then(o=>{if(o.status===200)return o.json()}).then(o=>{o&&console.log("Profile:",o)}).then(o=>o?Lr({profile:o}):jr)});var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Le=(i,e,t,o)=>{for(var s=o>1?void 0:o?sn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&nn(e,t,s),s};let ie=class extends B{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(i){const e=i.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,o)=>{const s=t[0].toUpperCase(),a=o[0].toUpperCase();return s<a?-1:s>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return $`
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
          ${this.names.map(i=>$`<slot
                ><default-card
                  title=${i[0]}
                  description=${i[1]}
                  user_id=${i[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};ie.styles=I`
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
  `;Le([v({type:Array})],ie.prototype,"names",2);Le([v({type:Array})],ie.prototype,"namesOriginalOrder",2);Le([v({type:Array})],ie.prototype,"listAttributes",2);Le([z()],ie.prototype,"sort_state",2);ie=Le([T("sortable-list")],ie);var on=Object.defineProperty,an=Object.getOwnPropertyDescriptor,st=(i,e,t,o)=>{for(var s=o>1?void 0:o?an(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&on(e,t,s),s};let me=class extends B{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return $`
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
          ${this.names.map(i=>$`<slot
                ><default-card
                  title=${i[0]}
                  description=${i[1]}
                  user_id=${i[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};me.styles=I`
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
  `;st([v({type:Array})],me.prototype,"names",2);st([v({type:Array})],me.prototype,"listAttributes",2);st([z()],me.prototype,"sort_state",2);me=st([T("general-list")],me);var cn=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,It=(i,e,t,o)=>{for(var s=o>1?void 0:o?ln(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&cn(e,t,s),s};let Ie=class extends B{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return $`
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
    `}};Ie.styles=I`
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
  `;It([v({type:Array})],Ie.prototype,"artists",2);It([v({type:String})],Ie.prototype,"listAttributes",2);Ie=It([T("favorites-list")],Ie);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,we=(i,e,t,o)=>{for(var s=o>1?void 0:o?un(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&hn(e,t,s),s};let X=class extends B{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return $`
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
            <a href="app/profile/${this.profileUserID}" class="link">your profile</a>
          </li>
          <li>settings (not functional)</li>
          <li>
            <color-mode-switch></color-mode-switch>
          </li>
          <li>sign out (not functional)</li>
        </ul>
      </slot>
    `}_handleChange(i){const e=i.target;this._toggle(e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};X.styles=I`
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
  `;we([v({reflect:!0,type:Boolean})],X.prototype,"open",2);we([v()],X.prototype,"align",2);we([v()],X.prototype,"profileImage",2);we([v()],X.prototype,"profileUserID",2);we([v()],X.prototype,"profileDescription",2);X=we([T("drop-down")],X);var pn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,Nr=(i,e,t,o)=>{for(var s=o>1?void 0:o?dn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&pn(e,t,s),s};let Ye=class extends B{constructor(){super(...arguments),this.on=!1}render(){return $`<label>
      <slot>light mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(i){const e=i.target,t=new Event(i.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};Ye.styles=I`
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
  `;Nr([v({reflect:!0,type:Boolean})],Ye.prototype,"on",2);Ye=Nr([T("color-mode-switch")],Ye);var fn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,ot=(i,e,t,o)=>{for(var s=o>1?void 0:o?mn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&fn(e,t,s),s};let ge=class extends B{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return $`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};ge.styles=I`
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
  `;ot([v()],ge.prototype,"title",2);ot([v()],ge.prototype,"description",2);ot([v()],ge.prototype,"user_id",2);ge=ot([T("default-card")],ge);var gn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,Ut=(i,e,t,o)=>{for(var s=o>1?void 0:o?yn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&gn(e,t,s),s};let Ue=class extends B{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return $`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};Ue.styles=I`
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
  `;Ut([v({reflect:!0,type:Boolean})],Ue.prototype,"on",2);Ut([v()],Ue.prototype,"filteredState",2);Ue=Ut([T("toggle-switch")],Ue);var _n=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,Rt=(i,e,t,o)=>{for(var s=o>1?void 0:o?wn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&_n(e,t,s),s};let Re=class extends B{constructor(){super(...arguments),this.path=""}get profile(){return this.using||{}}render(){const{name:i,profileImage:e,profileDescription:t,bio:o}=this.profile;return $`
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
            <p class="user-description">${o}</p>
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
    `}};Re.styles=I`
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
  `;Rt([v()],Re.prototype,"path",2);Rt([v({attribute:!1})],Re.prototype,"using",2);Re=Rt([T("user-profile")],Re);function Qe(i){return i=i||[],Array.isArray(i)?i:[i]}function j(i){return`[Vaadin.Router] ${i}`}function bn(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const Xe="module",Ze="nomodule",xt=[Xe,Ze];function lr(i){if(!i.match(/.+\.[m]?js$/))throw new Error(j(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Hr(i){if(!i||!D(i.path))throw new Error(j('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!ne(i.action)&&!Array.isArray(i.children)&&!ne(i.children)&&!et(e)&&!t.some(o=>D(i[o])))throw new Error(j(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(D(e))lr(e);else if(xt.some(o=>o in e))xt.forEach(o=>o in e&&lr(e[o]));else throw new Error(j('Expected route bundle to include either "'+Ze+'" or "'+Xe+'" keys, or both'));i.redirect&&["bundle","component"].forEach(o=>{o in i&&console.warn(j(`Route config "${i.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function hr(i){Qe(i).forEach(e=>Hr(e))}function ur(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===Xe?t.setAttribute("type",Xe):e===Ze&&t.setAttribute(Ze,""),t.async=!0),new Promise((o,s)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,o(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),s(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&o()})}function vn(i){return D(i)?ur(i):Promise.race(xt.filter(e=>e in i).map(e=>ur(i[e],e)))}function Se(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function et(i){return typeof i=="object"&&!!i}function ne(i){return typeof i=="function"}function D(i){return typeof i=="string"}function zr(i){const e=new Error(j(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const pe=new class{};function xn(i){const e=i.port,t=i.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${a}`}function pr(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let u=0;u<t.length;u++){const p=t[u];if(p.nodeName&&p.nodeName.toLowerCase()==="a"){e=p;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||xn(e))!==window.location.origin)return;const{pathname:s,search:a,hash:l}=e;Se("go",{pathname:s,search:a,hash:l})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const $n={activate(){window.document.addEventListener("click",pr)},inactivate(){window.document.removeEventListener("click",pr)}},En=/Trident/.test(navigator.userAgent);En&&!ne(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function dr(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:o}=window.location;Se("go",{pathname:e,search:t,hash:o})}const An={activate(){window.addEventListener("popstate",dr)},inactivate(){window.removeEventListener("popstate",dr)}};var be=Jr,Pn=Ft,Sn=On,Bn=Wr,Tn=Kr,qr="/",Vr="./",Cn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ft(i,e){for(var t=[],o=0,s=0,a="",l=e&&e.delimiter||qr,u=e&&e.delimiters||Vr,p=!1,g;(g=Cn.exec(i))!==null;){var y=g[0],_=g[1],w=g.index;if(a+=i.slice(s,w),s=w+y.length,_){a+=_[1],p=!0;continue}var b="",R=i[s],Z=g[2],ht=g[3],ve=g[4],oe=g[5];if(!p&&a.length){var ae=a.length-1;u.indexOf(a[ae])>-1&&(b=a[ae],a=a.slice(0,ae))}a&&(t.push(a),a="",p=!1);var ut=b!==""&&R!==void 0&&R!==b,q=oe==="+"||oe==="*",Me=oe==="?"||oe==="*",xe=b||l,Ne=ht||ve;t.push({name:Z||o++,prefix:b,delimiter:xe,optional:Me,repeat:q,partial:ut,pattern:Ne?In(Ne):"[^"+G(xe)+"]+?"})}return(a||s<i.length)&&t.push(a+i.substr(s)),t}function On(i,e){return Wr(Ft(i,e))}function Wr(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(o,s){for(var a="",l=s&&s.encode||encodeURIComponent,u=0;u<i.length;u++){var p=i[u];if(typeof p=="string"){a+=p;continue}var g=o?o[p.name]:void 0,y;if(Array.isArray(g)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but got array');if(g.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var _=0;_<g.length;_++){if(y=l(g[_],p),!e[u].test(y))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'"');a+=(_===0?p.prefix:p.delimiter)+y}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(y=l(String(g),p),!e[u].test(y))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but got "'+y+'"');a+=p.prefix+y;continue}if(p.optional){p.partial&&(a+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be '+(p.repeat?"an array":"a string"))}return a}}function G(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function In(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Gr(i){return i&&i.sensitive?"":"i"}function Un(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var o=0;o<t.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function Rn(i,e,t){for(var o=[],s=0;s<i.length;s++)o.push(Jr(i[s],e,t).source);return new RegExp("(?:"+o.join("|")+")",Gr(t))}function Fn(i,e,t){return Kr(Ft(i,t),e,t)}function Kr(i,e,t){t=t||{};for(var o=t.strict,s=t.start!==!1,a=t.end!==!1,l=G(t.delimiter||qr),u=t.delimiters||Vr,p=[].concat(t.endsWith||[]).map(G).concat("$").join("|"),g=s?"^":"",y=i.length===0,_=0;_<i.length;_++){var w=i[_];if(typeof w=="string")g+=G(w),y=_===i.length-1&&u.indexOf(w[w.length-1])>-1;else{var b=w.repeat?"(?:"+w.pattern+")(?:"+G(w.delimiter)+"(?:"+w.pattern+"))*":w.pattern;e&&e.push(w),w.optional?w.partial?g+=G(w.prefix)+"("+b+")?":g+="(?:"+G(w.prefix)+"("+b+"))?":g+=G(w.prefix)+"("+b+")"}}return a?(o||(g+="(?:"+l+")?"),g+=p==="$"?"$":"(?="+p+")"):(o||(g+="(?:"+l+"(?="+p+"))?"),y||(g+="(?="+l+"|"+p+")")),new RegExp(g,Gr(t))}function Jr(i,e,t){return i instanceof RegExp?Un(i,e):Array.isArray(i)?Rn(i,e,t):Fn(i,e,t)}be.parse=Pn;be.compile=Sn;be.tokensToFunction=Bn;be.tokensToRegExp=Tn;const{hasOwnProperty:kn}=Object.prototype,$t=new Map;$t.set("|false",{keys:[],pattern:/(?:)/});function fr(i){try{return decodeURIComponent(i)}catch{return i}}function Dn(i,e,t,o,s){t=!!t;const a=`${i}|${t}`;let l=$t.get(a);if(!l){const g=[];l={keys:g,pattern:be(i,g,{end:t,strict:i===""})},$t.set(a,l)}const u=l.pattern.exec(e);if(!u)return null;const p=Object.assign({},s);for(let g=1;g<u.length;g++){const y=l.keys[g-1],_=y.name,w=u[g];(w!==void 0||!kn.call(p,_))&&(y.repeat?p[_]=w?w.split(y.delimiter).map(fr):[]:p[_]=w&&fr(w))}return{path:u[0],keys:(o||[]).concat(l.keys),params:p}}function Yr(i,e,t,o,s){let a,l,u=0,p=i.path||"";return p.charAt(0)==="/"&&(t&&(p=p.substr(1)),t=!0),{next(g){if(i===g)return{done:!0};const y=i.__children=i.__children||i.children;if(!a&&(a=Dn(p,e,!y,o,s),a))return{done:!1,value:{route:i,keys:a.keys,params:a.params,path:a.path}};if(a&&y)for(;u<y.length;){if(!l){const w=y[u];w.parent=i;let b=a.path.length;b>0&&e.charAt(b)==="/"&&(b+=1),l=Yr(w,e.substr(b),t,a.keys,a.params)}const _=l.next(g);if(!_.done)return{done:!1,value:_.value};l=null,u++}return{done:!0}}}}function Ln(i){if(ne(i.route.action))return i.route.action(i)}function jn(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Mn(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Nn(i,e){const{route:t,path:o}=e;if(t&&!t.__synthetic){const s={path:o,route:t};if(!i.chain)i.chain=[];else if(t.parent){let a=i.chain.length;for(;a--&&i.chain[a].route&&i.chain[a].route!==t.parent;)i.chain.pop()}i.chain.push(s)}}class Fe{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Ln,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){hr(e);const t=[...Qe(e)];this.root.__children=t}addRoutes(e){return hr(e),this.root.__children.push(...Qe(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,D(e)?{pathname:e}:e),o=Yr(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let a=null,l=null,u=t;function p(g,y=a.value.route,_){const w=_===null&&a.value.route;return a=l||o.next(w),l=null,!g&&(a.done||!jn(y,a.value.route))?(l=a,Promise.resolve(pe)):a.done?Promise.reject(zr(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),Nn(u,a.value),Promise.resolve(s(u)).then(b=>b!=null&&b!==pe?(u.result=b.result||b,u):p(g,y,b)))}return t.next=p,Promise.resolve().then(()=>p(!0,this.root)).catch(g=>{const y=Mn(u);if(g?console.warn(y):g=new Error(y),g.context=g.context||u,g instanceof DOMException||(g.code=g.code||500),this.errorHandler)return u.result=this.errorHandler(g),u;throw g})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,o=this.constructor.__createUrl(e,t).href;if(o.slice(0,t.length)===t)return o.slice(t.length)}}Fe.pathToRegexp=be;const{pathToRegexp:mr}=Fe,gr=new Map;function Qr(i,e,t){const o=e.name||e.component;if(o&&(i.has(o)?i.get(o).push(e):i.set(o,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];a.parent=e,Qr(i,a,a.__children||a.children)}}function yr(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function _r(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Hn(i,e={}){if(!(i instanceof Fe))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(o,s)=>{let a=yr(t,o);if(!a&&(t.clear(),Qr(t,i.root,i.root.__children),a=yr(t,o),!a))throw new Error(`Route "${o}" not found`);let l=gr.get(a.fullPath);if(!l){let p=_r(a),g=a.parent;for(;g;){const b=_r(g);b&&(p=b.replace(/\/$/,"")+"/"+p.replace(/^\//,"")),g=g.parent}const y=mr.parse(p),_=mr.tokensToFunction(y),w=Object.create(null);for(let b=0;b<y.length;b++)D(y[b])||(w[y[b].name]=!0);l={toPath:_,keys:w},gr.set(p,l),a.fullPath=p}let u=l.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const p={},g=Object.keys(s);for(let _=0;_<g.length;_++){const w=g[_];l.keys[w]||(p[w]=s[w])}const y=e.stringifyQueryParams(p);y&&(u+=y.charAt(0)==="?"?y:`?${y}`)}return u}}let wr=[];function zn(i){wr.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),wr=i}const qn=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},Vn=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function br(i,e){return i.classList.add(e),new Promise(t=>{if(qn(i)){const o=i.getBoundingClientRect(),s=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;i.setAttribute("style",`position: absolute; ${s}`),Vn(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const Wn=256;function wt(i){return i!=null}function Gn(i){const e=Object.assign({},i);return delete e.next,e}function k({pathname:i="",search:e="",hash:t="",chain:o=[],params:s={},redirectFrom:a,resolver:l},u){const p=o.map(g=>g.route);return{baseUrl:l&&l.baseUrl||"",pathname:i,search:e,hash:t,routes:p,route:u||p.length&&p[p.length-1]||null,params:s,redirectFrom:a,getUrl:(g={})=>We(Y.pathToRegexp.compile(Xr(p))(Object.assign({},s,g)),l)}}function vr(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function Kn(i,e){e.location=k(i);const t=i.chain.map(o=>o.route).indexOf(i.route);return i.chain[t].element=e,e}function Ve(i,e,t){if(ne(i))return i.apply(t,e)}function xr(i,e,t){return o=>{if(o&&(o.cancel||o.redirect))return o;if(t)return Ve(t[i],e,t)}}function Jn(i,e){if(!Array.isArray(i)&&!et(i))throw new Error(j(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=Qe(i);for(let o=0;o<t.length;o++)Hr(t[o]),e.__children.push(t[o])}function ze(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function We(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Xr(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class Y extends Fe{constructor(e,t){const o=document.head.querySelector("base"),s=o&&o.getAttribute("href");super([],Object.assign({baseUrl:s&&Fe.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=l=>this.__resolveRoute(l);const a=Y.NavigationTrigger;Y.setTriggers.apply(Y,Object.keys(a).map(l=>a[l])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=k({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let o=Promise.resolve();ne(t.children)&&(o=o.then(()=>t.children(Gn(e))).then(a=>{!wt(a)&&!ne(t.children)&&(a=t.children),Jn(a,t)}));const s={redirect:a=>vr(e,a),component:a=>{const l=document.createElement(a);return this.__createdByRouter.set(l,!0),l}};return o.then(()=>{if(this.__isLatestRender(e))return Ve(t.action,[e,s],t)}).then(a=>{if(wt(a)&&(a instanceof HTMLElement||a.redirect||a===pe))return a;if(D(t.redirect))return s.redirect(t.redirect);if(t.bundle)return vn(t.bundle).then(()=>{},()=>{throw new Error(j(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(wt(a))return a;if(D(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const o=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},D(e)?{pathname:e}:e,{__renderId:o});return this.ready=this.resolve(s).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const l=this.__previousContext;if(a===l)return this.__updateBrowserHistory(l,!0),this.location;if(this.location=k(a),t&&this.__updateBrowserHistory(a,o===1),Se("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,l),this.__previousContext=a,this.location;this.__addAppearingContent(a,l);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,l),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(o===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),ze(this.__outlet&&this.__outlet.children),this.location=k(Object.assign(s,{resolver:this})),Se("error",Object.assign({router:this,error:a},s)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(o=>{const a=o!==t?o:e,u=We(Xr(o.chain),o.resolver)===o.pathname,p=(g,y=g.route,_)=>g.next(void 0,y,_).then(w=>w===null||w===pe?u?g:y.parent!==null?p(g,y.parent,w):w:w);return p(o).then(g=>{if(g===null||g===pe)throw zr(a);return g&&g!==pe&&g!==o?this.__fullyResolveChain(a,g):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Kn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(j(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${bn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},o=t.chain||[],s=e.chain;let a=Promise.resolve();const l=()=>({cancel:!0}),u=p=>vr(e,p);if(e.__divergedChainIndex=0,e.__skipAttach=!1,o.length){for(let p=0;p<Math.min(o.length,s.length)&&!(o[p].route!==s[p].route||o[p].path!==s[p].path&&o[p].element!==s[p].element||!this.__isReusableElement(o[p].element,s[p].element));p=++e.__divergedChainIndex);if(e.__skipAttach=s.length===o.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let p=s.length-1;p>=0;p--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},o[p]);for(let p=0;p<s.length;p++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[p]),o[p].element.location=k(e,o[p].route)}else for(let p=o.length-1;p>=e.__divergedChainIndex;p--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},o[p])}if(!e.__skipAttach)for(let p=0;p<s.length;p++)p<e.__divergedChainIndex?p<o.length&&o[p].element&&(o[p].element.location=k(e,o[p].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[p]),s[p].element&&(s[p].element.location=k(e,s[p].route)));return a.then(p=>{if(p){if(p.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(p.redirect)return this.__redirect(p.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,o,s){const a=k(t);return e.then(l=>{if(this.__isLatestRender(t))return xr("onBeforeLeave",[a,o,this],s.element)(l)}).then(l=>{if(!(l||{}).redirect)return l})}__runOnBeforeEnterCallbacks(e,t,o,s){const a=k(t,s.route);return e.then(l=>{if(this.__isLatestRender(t))return xr("onBeforeEnter",[a,o,this],s.element)(l)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,o){if(t>Wn)throw new Error(j(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:o})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(j(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:o=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==o){const a=s?"replaceState":"pushState";window.history[a](null,document.title,e+t+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let o=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const a=t&&t.chain[s].element;if(a)if(a.parentNode===o)e.chain[s].element=a,o=a;else break}return o}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let s=o;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const l=e.chain[a].element;l&&(s.appendChild(l),this.__addedByRouter.set(l,!0),s===o&&this.__appearingContent.push(l),s=l)}}__removeDisappearingContent(){this.__disappearingContent&&ze(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ze(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let o=t.chain.length-1;o>=e.__divergedChainIndex&&this.__isLatestRender(e);o--){const s=t.chain[o].element;if(s)try{const a=k(e);Ve(s.onAfterLeave,[a,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&ze(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const o=e.chain[t].element||{},s=k(e,e.chain[t].route);Ve(o.onAfterEnter,[s,{},e.resolver],o)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],s=[],a=e.chain;let l;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){l=a[u-1].route.animate;break}if(t&&o&&l){const u=et(l)&&l.leave||"leaving",p=et(l)&&l.enter||"entering";s.push(br(t,u)),s.push(br(o,p))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:o,hash:s}=e?e.detail:window.location;D(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:o,hash:s},!0))}static setTriggers(...e){zn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Hn(this)),We(this.__urlForName(e,t),this)}urlForPath(e,t){return We(Y.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:o,hash:s}=D(e)?this.__createUrl(e,"http://a"):e;return Se("go",{pathname:t,search:o,hash:s})}}const Yn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ge=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Qn(){function i(){return!0}return Zr(i)}function Xn(){try{return Zn()?!0:es()?Ge?!ts():!Qn():!1}catch{return!1}}function Zn(){return localStorage.getItem("vaadin.developmentmode.force")}function es(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ts(){return!!(Ge&&Object.keys(Ge).map(e=>Ge[e]).filter(e=>e.productionMode).length>0)}function Zr(i,e){if(typeof i!="function")return;const t=Yn.exec(i.toString());if(t)try{i=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return i(e)}window.Vaadin=window.Vaadin||{};const $r=function(i,e){if(window.Vaadin.developmentMode)return Zr(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Xn());function rs(){}const is=function(){if(typeof $r=="function")return $r(rs)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});is();Y.NavigationTrigger={POPSTATE:An,CLICK:$n};var ns=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,ei=(i,e,t,o)=>{for(var s=o>1?void 0:o?ss(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&ns(e,t,s),s};let Et=class extends B{constructor(){super(...arguments),this.router=new Y(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return $`<slot></slot>`}};ei([v({attribute:!1})],Et.prototype,"routes",2);Et=ei([T("vaadin-router")],Et);var os=Object.defineProperty,as=Object.getOwnPropertyDescriptor,at=(i,e,t,o)=>{for(var s=o>1?void 0:o?as(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&os(e,t,s),s};let ti="auth",ye=class extends B{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Oe.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const i=$`
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
    `;return $`${this.isAuthenticated()?"":i} <slot></slot>`}_handleLogin(i){i.preventDefault();const e=i.target,t=new FormData(e);new ar(t).base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{s&&(console.log("Authentication:",s.token),this.user=Oe.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(i){i.preventDefault();const e=i.target,t=new FormData(e);new ar(t).base().post("/signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration:",s)})}_toggleDialog(i){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(i?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=L.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};ye.styles=I`
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
  `;at([z()],ye.prototype,"loginStatus",2);at([z()],ye.prototype,"registerStatus",2);at([Ur({context:ti}),z()],ye.prototype,"user",2);ye=at([T("auth-required")],ye);var cs=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,kt=(i,e,t,o)=>{for(var s=o>1?void 0:o?ls(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&cs(e,t,s),s};let ke=class extends B{constructor(){super(...arguments),this.user=new L}render(){const{profileImage:i,profileDescription:e,userid:t}=this.profile||{};return $`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${i}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(i){if(console.log("Profile Data has been updated",i),i.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(i){new Fr().get(i).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};ke.styles=I`
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
  `;kt([z()],ke.prototype,"profile",2);kt([Rr({context:ti,subscribe:!0}),v({attribute:!1})],ke.prototype,"user",2);ke=kt([T("match-the-vibe-header")],ke);var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,je=(i,e,t,o)=>{for(var s=o>1?void 0:o?us(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&hs(e,t,s),s};let se=class extends Ct{get userid(){var i;return console.log(),(i=this.location)==null?void 0:i.params.userid}get edit(){var i;return(i=this.location)==null?void 0:i.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(i,e,t){i==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(i,e,t)}render(){return $` <user-profile .using=${this.profile}> </user-profile> `}};se.styles=[I`
      :host {
        display: contents;
      }
    `];je([v({attribute:!1})],se.prototype,"location",2);je([v({reflect:!0})],se.prototype,"userid",1);je([v({reflect:!0})],se.prototype,"edit",1);je([v()],se.prototype,"profile",1);se=je([T("profile-page")],se);var Dt={},ct={};ct.byteLength=fs;ct.toByteArray=gs;ct.fromByteArray=ws;var H=[],F=[],ps=typeof Uint8Array<"u"?Uint8Array:Array,bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var he=0,ds=bt.length;he<ds;++he)H[he]=bt[he],F[bt.charCodeAt(he)]=he;F[45]=62;F[95]=63;function ri(i){var e=i.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=i.indexOf("=");t===-1&&(t=e);var o=t===e?0:4-t%4;return[t,o]}function fs(i){var e=ri(i),t=e[0],o=e[1];return(t+o)*3/4-o}function ms(i,e,t){return(e+t)*3/4-t}function gs(i){var e,t=ri(i),o=t[0],s=t[1],a=new ps(ms(i,o,s)),l=0,u=s>0?o-4:o,p;for(p=0;p<u;p+=4)e=F[i.charCodeAt(p)]<<18|F[i.charCodeAt(p+1)]<<12|F[i.charCodeAt(p+2)]<<6|F[i.charCodeAt(p+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return s===2&&(e=F[i.charCodeAt(p)]<<2|F[i.charCodeAt(p+1)]>>4,a[l++]=e&255),s===1&&(e=F[i.charCodeAt(p)]<<10|F[i.charCodeAt(p+1)]<<4|F[i.charCodeAt(p+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function ys(i){return H[i>>18&63]+H[i>>12&63]+H[i>>6&63]+H[i&63]}function _s(i,e,t){for(var o,s=[],a=e;a<t;a+=3)o=(i[a]<<16&16711680)+(i[a+1]<<8&65280)+(i[a+2]&255),s.push(ys(o));return s.join("")}function ws(i){for(var e,t=i.length,o=t%3,s=[],a=16383,l=0,u=t-o;l<u;l+=a)s.push(_s(i,l,l+a>u?u:l+a));return o===1?(e=i[t-1],s.push(H[e>>2]+H[e<<4&63]+"==")):o===2&&(e=(i[t-2]<<8)+i[t-1],s.push(H[e>>10]+H[e>>4&63]+H[e<<2&63]+"=")),s.join("")}var Lt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Lt.read=function(i,e,t,o,s){var a,l,u=s*8-o-1,p=(1<<u)-1,g=p>>1,y=-7,_=t?s-1:0,w=t?-1:1,b=i[e+_];for(_+=w,a=b&(1<<-y)-1,b>>=-y,y+=u;y>0;a=a*256+i[e+_],_+=w,y-=8);for(l=a&(1<<-y)-1,a>>=-y,y+=o;y>0;l=l*256+i[e+_],_+=w,y-=8);if(a===0)a=1-g;else{if(a===p)return l?NaN:(b?-1:1)*(1/0);l=l+Math.pow(2,o),a=a-g}return(b?-1:1)*l*Math.pow(2,a-o)};Lt.write=function(i,e,t,o,s,a){var l,u,p,g=a*8-s-1,y=(1<<g)-1,_=y>>1,w=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=o?0:a-1,R=o?1:-1,Z=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,l=y):(l=Math.floor(Math.log(e)/Math.LN2),e*(p=Math.pow(2,-l))<1&&(l--,p*=2),l+_>=1?e+=w/p:e+=w*Math.pow(2,1-_),e*p>=2&&(l++,p/=2),l+_>=y?(u=0,l=y):l+_>=1?(u=(e*p-1)*Math.pow(2,s),l=l+_):(u=e*Math.pow(2,_-1)*Math.pow(2,s),l=0));s>=8;i[t+b]=u&255,b+=R,u/=256,s-=8);for(l=l<<s|u,g+=s;g>0;i[t+b]=l&255,b+=R,l/=256,g-=8);i[t+b-R]|=Z*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const e=ct,t=Lt,o=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=u,i.SlowBuffer=oe,i.INSPECT_MAX_BYTES=50;const s=2147483647;i.kMaxLength=s,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const c=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(c,r),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function l(c){if(c>s)throw new RangeError('The value "'+c+'" is invalid for option "size"');const r=new Uint8Array(c);return Object.setPrototypeOf(r,u.prototype),r}function u(c,r,n){if(typeof c=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(c)}return p(c,r,n)}u.poolSize=8192;function p(c,r,n){if(typeof c=="string")return w(c,r);if(ArrayBuffer.isView(c))return R(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(N(c,ArrayBuffer)||c&&N(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(N(c,SharedArrayBuffer)||c&&N(c.buffer,SharedArrayBuffer)))return Z(c,r,n);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=c.valueOf&&c.valueOf();if(h!=null&&h!==c)return u.from(h,r,n);const d=ht(c);if(d)return d;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,r,n){return p(c,r,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function g(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function y(c,r,n){return g(c),c<=0?l(c):r!==void 0?typeof n=="string"?l(c).fill(r,n):l(c).fill(r):l(c)}u.alloc=function(c,r,n){return y(c,r,n)};function _(c){return g(c),l(c<0?0:ve(c)|0)}u.allocUnsafe=function(c){return _(c)},u.allocUnsafeSlow=function(c){return _(c)};function w(c,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const n=ae(c,r)|0;let h=l(n);const d=h.write(c,r);return d!==n&&(h=h.slice(0,d)),h}function b(c){const r=c.length<0?0:ve(c.length)|0,n=l(r);for(let h=0;h<r;h+=1)n[h]=c[h]&255;return n}function R(c){if(N(c,Uint8Array)){const r=new Uint8Array(c);return Z(r.buffer,r.byteOffset,r.byteLength)}return b(c)}function Z(c,r,n){if(r<0||c.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<r+(n||0))throw new RangeError('"length" is outside of buffer bounds');let h;return r===void 0&&n===void 0?h=new Uint8Array(c):n===void 0?h=new Uint8Array(c,r):h=new Uint8Array(c,r,n),Object.setPrototypeOf(h,u.prototype),h}function ht(c){if(u.isBuffer(c)){const r=ve(c.length)|0,n=l(r);return n.length===0||c.copy(n,0,0,r),n}if(c.length!==void 0)return typeof c.length!="number"||ft(c.length)?l(0):b(c);if(c.type==="Buffer"&&Array.isArray(c.data))return b(c.data)}function ve(c){if(c>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return c|0}function oe(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,n){if(N(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),N(n,Uint8Array)&&(n=u.from(n,n.offset,n.byteLength)),!u.isBuffer(r)||!u.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===n)return 0;let h=r.length,d=n.length;for(let f=0,m=Math.min(h,d);f<m;++f)if(r[f]!==n[f]){h=r[f],d=n[f];break}return h<d?-1:d<h?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,n){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);let h;if(n===void 0)for(n=0,h=0;h<r.length;++h)n+=r[h].length;const d=u.allocUnsafe(n);let f=0;for(h=0;h<r.length;++h){let m=r[h];if(N(m,Uint8Array))f+m.length>d.length?(u.isBuffer(m)||(m=u.from(m)),m.copy(d,f)):Uint8Array.prototype.set.call(d,m,f);else if(u.isBuffer(m))m.copy(d,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=m.length}return d};function ae(c,r){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||N(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const n=c.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&n===0)return 0;let d=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return dt(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Kt(c).length;default:if(d)return h?-1:dt(c).length;r=(""+r).toLowerCase(),d=!0}}u.byteLength=ae;function ut(c,r,n){let h=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,r>>>=0,n<=r))return"";for(c||(c="utf8");;)switch(c){case"hex":return fi(this,r,n);case"utf8":case"utf-8":return jt(this,r,n);case"ascii":return pi(this,r,n);case"latin1":case"binary":return di(this,r,n);case"base64":return hi(this,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mi(this,r,n);default:if(h)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function q(c,r,n){const h=c[r];c[r]=c[n],c[n]=h}u.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<r;n+=2)q(this,n,n+1);return this},u.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<r;n+=4)q(this,n,n+3),q(this,n+1,n+2);return this},u.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<r;n+=8)q(this,n,n+7),q(this,n+1,n+6),q(this,n+2,n+5),q(this,n+3,n+4);return this},u.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?jt(this,0,r):ut.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){let r="";const n=i.INSPECT_MAX_BYTES;return r=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(r+=" ... "),"<Buffer "+r+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(r,n,h,d,f){if(N(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(n===void 0&&(n=0),h===void 0&&(h=r?r.length:0),d===void 0&&(d=0),f===void 0&&(f=this.length),n<0||h>r.length||d<0||f>this.length)throw new RangeError("out of range index");if(d>=f&&n>=h)return 0;if(d>=f)return-1;if(n>=h)return 1;if(n>>>=0,h>>>=0,d>>>=0,f>>>=0,this===r)return 0;let m=f-d,x=h-n;const P=Math.min(m,x),A=this.slice(d,f),S=r.slice(n,h);for(let E=0;E<P;++E)if(A[E]!==S[E]){m=A[E],x=S[E];break}return m<x?-1:x<m?1:0};function Me(c,r,n,h,d){if(c.length===0)return-1;if(typeof n=="string"?(h=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,ft(n)&&(n=d?0:c.length-1),n<0&&(n=c.length+n),n>=c.length){if(d)return-1;n=c.length-1}else if(n<0)if(d)n=0;else return-1;if(typeof r=="string"&&(r=u.from(r,h)),u.isBuffer(r))return r.length===0?-1:xe(c,r,n,h,d);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(c,r,n):Uint8Array.prototype.lastIndexOf.call(c,r,n):xe(c,[r],n,h,d);throw new TypeError("val must be string, number or Buffer")}function xe(c,r,n,h,d){let f=1,m=c.length,x=r.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(c.length<2||r.length<2)return-1;f=2,m/=2,x/=2,n/=2}function P(S,E){return f===1?S[E]:S.readUInt16BE(E*f)}let A;if(d){let S=-1;for(A=n;A<m;A++)if(P(c,A)===P(r,S===-1?0:A-S)){if(S===-1&&(S=A),A-S+1===x)return S*f}else S!==-1&&(A-=A-S),S=-1}else for(n+x>m&&(n=m-x),A=n;A>=0;A--){let S=!0;for(let E=0;E<x;E++)if(P(c,A+E)!==P(r,E)){S=!1;break}if(S)return A}return-1}u.prototype.includes=function(r,n,h){return this.indexOf(r,n,h)!==-1},u.prototype.indexOf=function(r,n,h){return Me(this,r,n,h,!0)},u.prototype.lastIndexOf=function(r,n,h){return Me(this,r,n,h,!1)};function Ne(c,r,n,h){n=Number(n)||0;const d=c.length-n;h?(h=Number(h),h>d&&(h=d)):h=d;const f=r.length;h>f/2&&(h=f/2);let m;for(m=0;m<h;++m){const x=parseInt(r.substr(m*2,2),16);if(ft(x))return m;c[n+m]=x}return m}function oi(c,r,n,h){return He(dt(r,c.length-n),c,n,h)}function ai(c,r,n,h){return He(wi(r),c,n,h)}function ci(c,r,n,h){return He(Kt(r),c,n,h)}function li(c,r,n,h){return He(bi(r,c.length-n),c,n,h)}u.prototype.write=function(r,n,h,d){if(n===void 0)d="utf8",h=this.length,n=0;else if(h===void 0&&typeof n=="string")d=n,h=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(h)?(h=h>>>0,d===void 0&&(d="utf8")):(d=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-n;if((h===void 0||h>f)&&(h=f),r.length>0&&(h<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");d||(d="utf8");let m=!1;for(;;)switch(d){case"hex":return Ne(this,r,n,h);case"utf8":case"utf-8":return oi(this,r,n,h);case"ascii":case"latin1":case"binary":return ai(this,r,n,h);case"base64":return ci(this,r,n,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return li(this,r,n,h);default:if(m)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function hi(c,r,n){return r===0&&n===c.length?e.fromByteArray(c):e.fromByteArray(c.slice(r,n))}function jt(c,r,n){n=Math.min(c.length,n);const h=[];let d=r;for(;d<n;){const f=c[d];let m=null,x=f>239?4:f>223?3:f>191?2:1;if(d+x<=n){let P,A,S,E;switch(x){case 1:f<128&&(m=f);break;case 2:P=c[d+1],(P&192)===128&&(E=(f&31)<<6|P&63,E>127&&(m=E));break;case 3:P=c[d+1],A=c[d+2],(P&192)===128&&(A&192)===128&&(E=(f&15)<<12|(P&63)<<6|A&63,E>2047&&(E<55296||E>57343)&&(m=E));break;case 4:P=c[d+1],A=c[d+2],S=c[d+3],(P&192)===128&&(A&192)===128&&(S&192)===128&&(E=(f&15)<<18|(P&63)<<12|(A&63)<<6|S&63,E>65535&&E<1114112&&(m=E))}}m===null?(m=65533,x=1):m>65535&&(m-=65536,h.push(m>>>10&1023|55296),m=56320|m&1023),h.push(m),d+=x}return ui(h)}const Mt=4096;function ui(c){const r=c.length;if(r<=Mt)return String.fromCharCode.apply(String,c);let n="",h=0;for(;h<r;)n+=String.fromCharCode.apply(String,c.slice(h,h+=Mt));return n}function pi(c,r,n){let h="";n=Math.min(c.length,n);for(let d=r;d<n;++d)h+=String.fromCharCode(c[d]&127);return h}function di(c,r,n){let h="";n=Math.min(c.length,n);for(let d=r;d<n;++d)h+=String.fromCharCode(c[d]);return h}function fi(c,r,n){const h=c.length;(!r||r<0)&&(r=0),(!n||n<0||n>h)&&(n=h);let d="";for(let f=r;f<n;++f)d+=vi[c[f]];return d}function mi(c,r,n){const h=c.slice(r,n);let d="";for(let f=0;f<h.length-1;f+=2)d+=String.fromCharCode(h[f]+h[f+1]*256);return d}u.prototype.slice=function(r,n){const h=this.length;r=~~r,n=n===void 0?h:~~n,r<0?(r+=h,r<0&&(r=0)):r>h&&(r=h),n<0?(n+=h,n<0&&(n=0)):n>h&&(n=h),n<r&&(n=r);const d=this.subarray(r,n);return Object.setPrototypeOf(d,u.prototype),d};function C(c,r,n){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+r>n)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let d=this[r],f=1,m=0;for(;++m<n&&(f*=256);)d+=this[r+m]*f;return d},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let d=this[r+--n],f=1;for(;n>0&&(f*=256);)d+=this[r+--n]*f;return d},u.prototype.readUint8=u.prototype.readUInt8=function(r,n){return r=r>>>0,n||C(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,n){return r=r>>>0,n||C(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,n){return r=r>>>0,n||C(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,n){return r=r>>>0,n||C(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,n){return r=r>>>0,n||C(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readBigUInt64LE=W(function(r){r=r>>>0,le(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&$e(r,this.length-8);const d=n+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,f=this[++r]+this[++r]*2**8+this[++r]*2**16+h*2**24;return BigInt(d)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=W(function(r){r=r>>>0,le(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&$e(r,this.length-8);const d=n*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],f=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+h;return(BigInt(d)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let d=this[r],f=1,m=0;for(;++m<n&&(f*=256);)d+=this[r+m]*f;return f*=128,d>=f&&(d-=Math.pow(2,8*n)),d},u.prototype.readIntBE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let d=n,f=1,m=this[r+--d];for(;d>0&&(f*=256);)m+=this[r+--d]*f;return f*=128,m>=f&&(m-=Math.pow(2,8*n)),m},u.prototype.readInt8=function(r,n){return r=r>>>0,n||C(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,n){r=r>>>0,n||C(r,2,this.length);const h=this[r]|this[r+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(r,n){r=r>>>0,n||C(r,2,this.length);const h=this[r+1]|this[r]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(r,n){return r=r>>>0,n||C(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,n){return r=r>>>0,n||C(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readBigInt64LE=W(function(r){r=r>>>0,le(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&$e(r,this.length-8);const d=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(h<<24);return(BigInt(d)<<BigInt(32))+BigInt(n+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),u.prototype.readBigInt64BE=W(function(r){r=r>>>0,le(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&$e(r,this.length-8);const d=(n<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(d)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+h)}),u.prototype.readFloatLE=function(r,n){return r=r>>>0,n||C(r,4,this.length),t.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,n){return r=r>>>0,n||C(r,4,this.length),t.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,n){return r=r>>>0,n||C(r,8,this.length),t.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,n){return r=r>>>0,n||C(r,8,this.length),t.read(this,r,!1,52,8)};function U(c,r,n,h,d,f){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>d||r<f)throw new RangeError('"value" argument is out of bounds');if(n+h>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,n,h,d){if(r=+r,n=n>>>0,h=h>>>0,!d){const x=Math.pow(2,8*h)-1;U(this,r,n,h,x,0)}let f=1,m=0;for(this[n]=r&255;++m<h&&(f*=256);)this[n+m]=r/f&255;return n+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,n,h,d){if(r=+r,n=n>>>0,h=h>>>0,!d){const x=Math.pow(2,8*h)-1;U(this,r,n,h,x,0)}let f=h-1,m=1;for(this[n+f]=r&255;--f>=0&&(m*=256);)this[n+f]=r/m&255;return n+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,1,255,0),this[n]=r&255,n+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,65535,0),this[n]=r&255,this[n+1]=r>>>8,n+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,65535,0),this[n]=r>>>8,this[n+1]=r&255,n+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,4294967295,0),this[n+3]=r>>>24,this[n+2]=r>>>16,this[n+1]=r>>>8,this[n]=r&255,n+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,4294967295,0),this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255,n+4};function Nt(c,r,n,h,d){Gt(r,h,d,c,n,7);let f=Number(r&BigInt(4294967295));c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f;let m=Number(r>>BigInt(32)&BigInt(4294967295));return c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,n}function Ht(c,r,n,h,d){Gt(r,h,d,c,n,7);let f=Number(r&BigInt(4294967295));c[n+7]=f,f=f>>8,c[n+6]=f,f=f>>8,c[n+5]=f,f=f>>8,c[n+4]=f;let m=Number(r>>BigInt(32)&BigInt(4294967295));return c[n+3]=m,m=m>>8,c[n+2]=m,m=m>>8,c[n+1]=m,m=m>>8,c[n]=m,n+8}u.prototype.writeBigUInt64LE=W(function(r,n=0){return Nt(this,r,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=W(function(r,n=0){return Ht(this,r,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(r,n,h,d){if(r=+r,n=n>>>0,!d){const P=Math.pow(2,8*h-1);U(this,r,n,h,P-1,-P)}let f=0,m=1,x=0;for(this[n]=r&255;++f<h&&(m*=256);)r<0&&x===0&&this[n+f-1]!==0&&(x=1),this[n+f]=(r/m>>0)-x&255;return n+h},u.prototype.writeIntBE=function(r,n,h,d){if(r=+r,n=n>>>0,!d){const P=Math.pow(2,8*h-1);U(this,r,n,h,P-1,-P)}let f=h-1,m=1,x=0;for(this[n+f]=r&255;--f>=0&&(m*=256);)r<0&&x===0&&this[n+f+1]!==0&&(x=1),this[n+f]=(r/m>>0)-x&255;return n+h},u.prototype.writeInt8=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,1,127,-128),r<0&&(r=255+r+1),this[n]=r&255,n+1},u.prototype.writeInt16LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,32767,-32768),this[n]=r&255,this[n+1]=r>>>8,n+2},u.prototype.writeInt16BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,32767,-32768),this[n]=r>>>8,this[n+1]=r&255,n+2},u.prototype.writeInt32LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,2147483647,-2147483648),this[n]=r&255,this[n+1]=r>>>8,this[n+2]=r>>>16,this[n+3]=r>>>24,n+4},u.prototype.writeInt32BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255,n+4},u.prototype.writeBigInt64LE=W(function(r,n=0){return Nt(this,r,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=W(function(r,n=0){return Ht(this,r,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function zt(c,r,n,h,d,f){if(n+h>c.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function qt(c,r,n,h,d){return r=+r,n=n>>>0,d||zt(c,r,n,4),t.write(c,r,n,h,23,4),n+4}u.prototype.writeFloatLE=function(r,n,h){return qt(this,r,n,!0,h)},u.prototype.writeFloatBE=function(r,n,h){return qt(this,r,n,!1,h)};function Vt(c,r,n,h,d){return r=+r,n=n>>>0,d||zt(c,r,n,8),t.write(c,r,n,h,52,8),n+8}u.prototype.writeDoubleLE=function(r,n,h){return Vt(this,r,n,!0,h)},u.prototype.writeDoubleBE=function(r,n,h){return Vt(this,r,n,!1,h)},u.prototype.copy=function(r,n,h,d){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(h||(h=0),!d&&d!==0&&(d=this.length),n>=r.length&&(n=r.length),n||(n=0),d>0&&d<h&&(d=h),d===h||r.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),r.length-n<d-h&&(d=r.length-n+h);const f=d-h;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,h,d):Uint8Array.prototype.set.call(r,this.subarray(h,d),n),f},u.prototype.fill=function(r,n,h,d){if(typeof r=="string"){if(typeof n=="string"?(d=n,n=0,h=this.length):typeof h=="string"&&(d=h,h=this.length),d!==void 0&&typeof d!="string")throw new TypeError("encoding must be a string");if(typeof d=="string"&&!u.isEncoding(d))throw new TypeError("Unknown encoding: "+d);if(r.length===1){const m=r.charCodeAt(0);(d==="utf8"&&m<128||d==="latin1")&&(r=m)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(n<0||this.length<n||this.length<h)throw new RangeError("Out of range index");if(h<=n)return this;n=n>>>0,h=h===void 0?this.length:h>>>0,r||(r=0);let f;if(typeof r=="number")for(f=n;f<h;++f)this[f]=r;else{const m=u.isBuffer(r)?r:u.from(r,d),x=m.length;if(x===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(f=0;f<h-n;++f)this[f+n]=m[f%x]}return this};const ce={};function pt(c,r,n){ce[c]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(d){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:d,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}pt("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),pt("ERR_INVALID_ARG_TYPE",function(c,r){return`The "${c}" argument must be of type number. Received type ${typeof r}`},TypeError),pt("ERR_OUT_OF_RANGE",function(c,r,n){let h=`The value of "${c}" is out of range.`,d=n;return Number.isInteger(n)&&Math.abs(n)>2**32?d=Wt(String(n)):typeof n=="bigint"&&(d=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(d=Wt(d)),d+="n"),h+=` It must be ${r}. Received ${d}`,h},RangeError);function Wt(c){let r="",n=c.length;const h=c[0]==="-"?1:0;for(;n>=h+4;n-=3)r=`_${c.slice(n-3,n)}${r}`;return`${c.slice(0,n)}${r}`}function gi(c,r,n){le(r,"offset"),(c[r]===void 0||c[r+n]===void 0)&&$e(r,c.length-(n+1))}function Gt(c,r,n,h,d,f){if(c>n||c<r){const m=typeof r=="bigint"?"n":"";let x;throw f>3?r===0||r===BigInt(0)?x=`>= 0${m} and < 2${m} ** ${(f+1)*8}${m}`:x=`>= -(2${m} ** ${(f+1)*8-1}${m}) and < 2 ** ${(f+1)*8-1}${m}`:x=`>= ${r}${m} and <= ${n}${m}`,new ce.ERR_OUT_OF_RANGE("value",x,c)}gi(h,d,f)}function le(c,r){if(typeof c!="number")throw new ce.ERR_INVALID_ARG_TYPE(r,"number",c)}function $e(c,r,n){throw Math.floor(c)!==c?(le(c,n),new ce.ERR_OUT_OF_RANGE(n||"offset","an integer",c)):r<0?new ce.ERR_BUFFER_OUT_OF_BOUNDS:new ce.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${r}`,c)}const yi=/[^+/0-9A-Za-z-_]/g;function _i(c){if(c=c.split("=")[0],c=c.trim().replace(yi,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function dt(c,r){r=r||1/0;let n;const h=c.length;let d=null;const f=[];for(let m=0;m<h;++m){if(n=c.charCodeAt(m),n>55295&&n<57344){if(!d){if(n>56319){(r-=3)>-1&&f.push(239,191,189);continue}else if(m+1===h){(r-=3)>-1&&f.push(239,191,189);continue}d=n;continue}if(n<56320){(r-=3)>-1&&f.push(239,191,189),d=n;continue}n=(d-55296<<10|n-56320)+65536}else d&&(r-=3)>-1&&f.push(239,191,189);if(d=null,n<128){if((r-=1)<0)break;f.push(n)}else if(n<2048){if((r-=2)<0)break;f.push(n>>6|192,n&63|128)}else if(n<65536){if((r-=3)<0)break;f.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((r-=4)<0)break;f.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return f}function wi(c){const r=[];for(let n=0;n<c.length;++n)r.push(c.charCodeAt(n)&255);return r}function bi(c,r){let n,h,d;const f=[];for(let m=0;m<c.length&&!((r-=2)<0);++m)n=c.charCodeAt(m),h=n>>8,d=n%256,f.push(d),f.push(h);return f}function Kt(c){return e.toByteArray(_i(c))}function He(c,r,n,h){let d;for(d=0;d<h&&!(d+n>=r.length||d>=c.length);++d)r[d+n]=c[d];return d}function N(c,r){return c instanceof r||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===r.name}function ft(c){return c!==c}const vi=function(){const c="0123456789abcdef",r=new Array(256);for(let n=0;n<16;++n){const h=n*16;for(let d=0;d<16;++d)r[h+d]=c[n]+c[d]}return r}();function W(c){return typeof BigInt>"u"?xi:c}function xi(){throw new Error("BigInt not supported")}})(Dt);var bs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,ii=(i,e,t,o)=>{for(var s=o>1?void 0:o?vs(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&bs(e,t,s),s};let tt=class extends B{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return $`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{name:i}=this.track,e=this.track.artists[0].name,{url:t}=this.track.album.images[0];return $`
      <section class="single-track" @click=${()=>this._handleClick()}>
        <img src="${t}" alt="Album cover for ${i}" class="track-image" />
        <section class="details">
          <p class="track-name">${i}</p>
          <p class="artist-name">${e}</p>
        </section>
      </section>
    `}};tt.styles=I`
    .single-track {
      display: flex;
      flex-direction: row;
      border: 2px solid white;
      font-weight: 500;
    }

    .single-track:hover {
      background: var(--accent-color);
    }

    .track-name {
      font-size: 1.25em;
      padding: 0;
      margin: 0;
    }
    .artist-name {
      color: darkgray;
      font-size: 0.6em;
      margin: 0;
      padding: 0;
    }
    .track-image {
      width: 2.5em;
      height: 2.5em;
    }
  `;ii([v({type:Object})],tt.prototype,"track",2);tt=ii([T("track-card")],tt);var xs=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,lt=(i,e,t,o)=>{for(var s=o>1?void 0:o?$s(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&xs(e,t,s),s};let _e=class extends B{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(i){const e=`https://api.spotify.com/v1/tracks/${i}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const o=await t.json();return this.currentTracks=[...this.currentTracks,o],o}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Dt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const o=await t.json();this.accessToken=o.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var i;super.connectedCallback(),(i=this.comment)!=null&&i.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(i){try{this.currentTracks=[];const e=i.map(o=>this.findSong(o)),t=await Promise.all(e);this.currentTracks=t.filter(o=>o!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return $`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{userName:i,commentTime:e,commentMessage:t}=this.comment;return $`
      <section class="single-comment">
        <section class="comment-left">
          <section class="details">
            <section class="details-header">
              <p class="comment-name">${i}</p>
              <p class="comment-time">${e}</p>
            </section>
            <p class="comment-message">${t}</p>
          </section>
        </section>
        <section class="comment-right">
          ${this.currentTracks.map(o=>$`
              <div class="track-info">
                <img
                  src="${o.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${o.name}</p>
                  <p class="track-artist">
                    ${o.artists.map(s=>s.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};_e.styles=I`
    .single-comment {
      display: flex;
      flex-direction: row;
      border: 2px solid white;
      font-weight: 500;
    }

    .details-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5em;
    }

    .track-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.2em;
    }

    .track-name-and-artist {
      display: flex;
      flex-direction: column;
      align-content: center;
      text-align: left:
    }

    .comment-left {
      width: 30%;
    }

    .comment-right {
      width: 65%;
      display: flex;
      flex-direction: column;
      align-content: center;
    }

    .track-name,
    .track-artist {
      font-size: 0.8em;
      padding: 0;
      margin: 0;
    }

    .comment-name {
      color: white;
      font-size: 1em;
      margin: 0;
      padding: 0;
      margin-right: 1em;
    }
    .comment-time {
      color: darkgray;
      font-size: 0.6em;
      margin: 0;
      padding: 0;
    }

    .comment-message {
      font-size: 1em;
      font-weight: 300;
    }
    .track-image {
      width: 2.5em;
      height: 2.5em;
    }
  `;lt([v({type:Object})],_e.prototype,"comment",2);lt([v({type:String})],_e.prototype,"accessToken",2);lt([z()],_e.prototype,"currentTracks",2);_e=lt([T("comment-card")],_e);var Es=Object.defineProperty,As=Object.getOwnPropertyDescriptor,V=(i,e,t,o)=>{for(var s=o>1?void 0:o?As(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Es(e,t,s),s};let M=class extends B{constructor(){super(),this.expanded=!1,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post",this.addEventListener("track-selected",i=>{const e=i;this._selectTrack(e.detail.track)})}_selectTrack(i){const e=this.selectedTracks.findIndex(t=>t.id===i.id);e>-1?this.selectedTracks=[...this.selectedTracks.slice(0,e),...this.selectedTracks.slice(e+1)]:this.selectedTracks=[...this.selectedTracks,i]}async _recommendTracks(i){var u;i.preventDefault();const e=i.target;let o=new FormData(e).get("input-comment");const s=this.selectedTracks.map(p=>p.id),a=`http://localhost:3000/posts/${(u=this.post)==null?void 0:u._id}`,l={userName:"Aidan",commentTime:new Date,commentMessage:o,SongIDs:s};try{if(!(await fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).ok)throw new Error("Failed to post comment")}catch(p){console.error("Error:",p)}}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_handleSubmit(i){i.preventDefault();const e=i.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),this.searchSpotify()}_clearTopTracks(){this.topTracks=[]}_clearSelectedTracks(){this.selectedTracks=[]}async fetchTopTracks(i){const e=await fetch(`https://api.spotify.com/v1/artists/${i}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?this.topTracks=t.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Dt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const o=await t.json();this.accessToken=o.access_token}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const i=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();t.tracks.items.length>0?this.topTracks=t.tracks.items:(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t,o,s;const i=(e=this.post)!=null&&e.postTime?new Date(this.post.postTime).toLocaleString():"";return $`
      <section class="${this.expandedClass}">
        <section class="name-and-time-and-expand">
          <section class="name-and-time">
            <h3 class="feed-name">${(t=this.post)==null?void 0:t.userName}</h3>
            <p class="time-posted">${i}</p>
          </section>
          <button class="expand-unexpand" @click=${this._expand}>
            ${this.expanded?"Unexpand":"Expand"}
          </button>
        </section>
        <p class="message">${(o=this.post)==null?void 0:o.postMessage}</p>
        <section class="post-comments">
          <h3 class="comments-header">Comments</h3>
          ${(s=this.post)==null?void 0:s.comments.map(a=>$`<comment-card .comment=${a}></comment-card>`)}
        </section>
        ${this.expanded?$`
              <section class="expanded-content">
                <h3 class="expanded-header">
                  Leave a Comment and Recommend Some Songs!
                </h3>
                <section class="search-form">
                  <form @submit=${this._handleSubmit}>
                    <input
                      type="text"
                      id="inputted-artist-name"
                      name="inputted-artist-name"
                      placeholder="Enter an artist, song, or album!"
                    />
                    <button class="recommend-songs" type="submit">
                      Search for Songs
                    </button>
                  </form>
                </section>

                <section class="search-and-selected">
                  <section class="query-results">
                    ${this.topTracks.length>0?this.topTracks.slice(0,5).map(a=>$`<track-card .track=${a}></track-card>`):$`<h3>
                          The tracks you search for will show up here
                        </h3>`}
                  </section>
                  <section class="selected-tracks">
                    <h3>Selected Tracks</h3>
                    ${this.selectedTracks.map(a=>$`<track-card .track=${a}></track-card>`)}
                  </section>
                </section>

                <section class="clear-buttons">
                  <div class="clear-results-section">
                    <button
                      class="clear-results"
                      @click=${this._clearTopTracks}
                    >
                      Clear Results
                    </button>
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

                <section class="recommend-form">
                  <form @submit=${this._recommendTracks}>
                    <input
                      type="text"
                      id="input-comment"
                      name="input-comment"
                      placeholder="Leave a message!"
                    />
                    <button class="recommend-songs" type="submit">
                      Recommend Tracks!
                    </button>
                  </form>
                </section>
              </section>
            `:""}
      </section>
    `}};M.styles=I`
    .feed-single-post,
    .feed-single-post-expanded {
      border: 1px solid white;
      width: 47.5em;
      padding: 1.25em;
      box-sizing: border-box; /* Ensures padding is included in width */
    }

    #inputted-artist-name {
      width: 15em;
      height: 2em;
    }

    .search-form {
      margin-bottom: 0.75em;
    }

    .button-recommend-tracks {
      width: 10em;
      background: var(--accent-color);
      padding: 1em;
      border-radius: 5px;
    }

    .message {
      border-bottom: 2px solid white;
      padding-bottom: 1em;
    }

    .comments-header {
      margin-bottom: 0.5em;
    }

    .expanded-header {
      margin-top: 2em;
      margin-bottom: 1em;
    }
    .search-and-selected {
      display: flex;
      flex-direction: row;
      width: 100%;
      min-height: 8em; /* Set minimum height and allow expansion */
    }

    button.expand-unexpand {
      background: none;
      color: var(--white-color);
      border: none; /* Remove default border */
      padding: 0; /* Remove default padding */
      margin: 0; /* Adjust as needed */
      outline: none; /* Remove focus outline, though consider accessibility implications */
      -webkit-appearance: none; /* For Safari and Chrome */
      -moz-appearance: none; /* For Firefox */
      appearance: none; /* Standard property for removing default styling */
      margin-left: 3em;
      background: var(--accent-color);
      border-radius: 5px;
      padding: 0.5em;
    }

    svg.icon {
      display: inline;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: var(--white-color);
      color: var(--white-color);
      margin: 4px 0px 0px 13px;
    }

    .query-results,
    .selected-tracks {
      flex: 1; /* Each takes up half of the container */
      min-height: 8em; /* Set minimum height and allow expansion */
      box-sizing: border-box; /* Ensures padding is included in dimensions */
      border: 2px solid white;
      margin-bottom: 0.5em;
    }

    .clear-buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-bottom: 1.5em;
    }

    .clear-results-section,
    .clear-selected-tracks-section {
      display: flex;
      justify-content: right;
      width: 50%;
    }

    .clear-results,
    .clear-selected-tracks {
      text-align: center;
      width: 8em;
      height: 3em;
      font-size: 0.8em;
    }

    h3 {
      margin: 0;
      height: auto;
    }

    .name-and-time {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 1em;
    }

    .name-and-time-and-expand {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .clear-results,
    .clear-selected-tracks {
      background: red;
      font-size: 0.5em;
      padding: 0.5em;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }

    .clear-results:hover,
    .clear-selected-tracks:hover {
      background: darkred;
    }

    .recommend-songs {
      background: var(--accent-color);
      padding: 1em;
      border: none;
      color: white;
      border-radius: 5px;
    }

    .recommend-songs:hover {
      cursor: pointer;
      background: rgb(194, 135, 39);
    }

    .message {
      margin-bottom: 1em;
    }

    .feed-name {
      font-weight: 600;
      margin-right: 0.5em;
      font-size: 1.2em;
    }

    .time-posted {
      font-size: 0.8em;
      font-weight: 300;
      color: lightgray;
    }
  `;V([v({type:Object})],M.prototype,"post",2);V([z()],M.prototype,"expanded",2);V([v()],M.prototype,"expandedText",2);V([v({type:String})],M.prototype,"requestedSearchQuery",2);V([v({type:String})],M.prototype,"accessToken",2);V([v()],M.prototype,"topTracks",2);V([v()],M.prototype,"selectedTracks",2);V([z()],M.prototype,"expandedClass",2);M=V([T("feed-post")],M);var Ps=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,ni=(i,e,t,o)=>{for(var s=o>1?void 0:o?Ss(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Ps(e,t,s),s};let rt=class extends B{constructor(){super(...arguments),this.posts=[]}render(){return $`
      <div class="posts-container">
        ${this.posts.map(i=>$` <feed-post .post=${i}></feed-post>`)}
      </div>
    `}};rt.styles=I``;ni([v({type:Array})],rt.prototype,"posts",2);rt=ni([T("feed-post-list")],rt);var Bs=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,si=(i,e,t,o)=>{for(var s=o>1?void 0:o?Ts(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Bs(e,t,s),s};let it=class extends B{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),await this._fetchData()}async _fetchData(){console.log("fetching posts!");try{const i=await fetch("http://localhost:3000/posts");if(i.ok){const e=await i.json();this.posts=e,console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",i.status)}catch(i){console.error("Error fetching posts:",i)}}render(){return $`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};it.styles=I`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;si([v({type:Array})],it.prototype,"posts",2);it=si([T("main-feed")],it);var Cs=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,Is=(i,e,t,o)=>{for(var s=o>1?void 0:o?Os(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Cs(e,t,s),s};let At=class extends Ct{render(){return $`
      <section class="feed-page">
        <main-feed></main-feed>
      </section>
    `}};At.styles=I`
    .feed-page {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `;At=Is([T("home-page")],At);var Us=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,Fs=(i,e,t,o)=>{for(var s=o>1?void 0:o?Rs(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Us(e,t,s),s};let ks=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Er=class extends Mr{constructor(){super(rn)}render(){return $`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${ks}> </vaadin-router>
      </auth-required>
    `}updated(i){console.log("MTVAPPElement updated:",i.keys()),i.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Er=Fs([T("mtv-app")],Er);
