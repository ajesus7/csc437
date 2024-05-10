(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=globalThis,Bt=Ke.ShadowRoot&&(Ke.ShadyCSS===void 0||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,It=Symbol(),Xt=new WeakMap;let Tr=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==It)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bt&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Xt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Xt.set(t,e))}return e}toString(){return this.cssText}};const Pi=r=>new Tr(typeof r=="string"?r:r+"",void 0,It),O=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,o,a)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new Tr(t,r,It)},Si=(r,e)=>{if(Bt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),o=Ke.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=t.cssText,r.appendChild(s)}},Zt=Bt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Pi(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ci,defineProperty:Ti,getOwnPropertyDescriptor:Bi,getOwnPropertyNames:Ii,getOwnPropertySymbols:Oi,getPrototypeOf:ki}=Object,Q=globalThis,er=Q.trustedTypes,Ui=er?er.emptyScript:"",wt=Q.reactiveElementPolyfillSupport,Te=(r,e)=>r,Ze={toAttribute(r,e){switch(e){case Boolean:r=r?Ui:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ot=(r,e)=>!Ci(r,e),tr={attribute:!0,type:String,converter:Ze,reflect:!1,hasChanged:Ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Q.litPropertyMetadata??(Q.litPropertyMetadata=new WeakMap);class fe extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,t);o!==void 0&&Ti(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){const{get:o,set:a}=Bi(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return o==null?void 0:o.call(this)},set(l){const u=o==null?void 0:o.call(this);a.call(this,l),this.requestUpdate(e,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tr}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;const e=ki(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){const t=this.properties,s=[...Ii(t),...Oi(t)];for(const o of s)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,o]of t)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const o=this._$Eu(t,s);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)t.unshift(Zt(o))}else e!==void 0&&t.push(Zt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Si(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var a;const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const l=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:Ze).toAttribute(t,s.type);this._$Em=e,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(e,t){var a;const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const l=s.getPropertyOptions(o),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Ze;this._$Em=o,this[o]=u.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ot)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,l]of o)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostUpdated)==null?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},fe[Te("elementProperties")]=new Map,fe[Te("finalized")]=new Map,wt==null||wt({ReactiveElement:fe}),(Q.reactiveElementVersions??(Q.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=globalThis,et=Be.trustedTypes,rr=et?et.createPolicy("lit-html",{createHTML:r=>r}):void 0,Br="$lit$",K=`lit$${(Math.random()+"").slice(9)}$`,Ir="?"+K,Ri=`<${Ir}>`,ie=document,Oe=()=>ie.createComment(""),ke=r=>r===null||typeof r!="object"&&typeof r!="function",Or=Array.isArray,Fi=r=>Or(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",vt=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ir=/-->/g,nr=/>/g,te=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sr=/'/g,or=/"/g,kr=/^(?:script|style|textarea|title)$/i,Di=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),x=Di(1),ge=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),ar=new WeakMap,re=ie.createTreeWalker(ie,129);function Ur(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rr!==void 0?rr.createHTML(e):e}const Li=(r,e)=>{const t=r.length-1,s=[];let o,a=e===2?"<svg>":"",l=Ce;for(let u=0;u<t;u++){const d=r[u];let g,b,y=-1,_=0;for(;_<d.length&&(l.lastIndex=_,b=l.exec(d),b!==null);)_=l.lastIndex,l===Ce?b[1]==="!--"?l=ir:b[1]!==void 0?l=nr:b[2]!==void 0?(kr.test(b[2])&&(o=RegExp("</"+b[2],"g")),l=te):b[3]!==void 0&&(l=te):l===te?b[0]===">"?(l=o??Ce,y=-1):b[1]===void 0?y=-2:(y=l.lastIndex-b[2].length,g=b[1],l=b[3]===void 0?te:b[3]==='"'?or:sr):l===or||l===sr?l=te:l===ir||l===nr?l=Ce:(l=te,o=void 0);const w=l===te&&r[u+1].startsWith("/>")?" ":"";a+=l===Ce?d+Ri:y>=0?(s.push(g),d.slice(0,y)+Br+d.slice(y)+K+w):d+K+(y===-2?u:w)}return[Ur(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class Ue{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let a=0,l=0;const u=e.length-1,d=this.parts,[g,b]=Li(e,t);if(this.el=Ue.createElement(g,s),re.currentNode=this.el.content,t===2){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(o=re.nextNode())!==null&&d.length<u;){if(o.nodeType===1){if(o.hasAttributes())for(const y of o.getAttributeNames())if(y.endsWith(Br)){const _=b[l++],w=o.getAttribute(y).split(K),R=/([.?@])?(.*)/.exec(_);d.push({type:1,index:a,name:R[2],strings:w,ctor:R[1]==="."?ji:R[1]==="?"?Ni:R[1]==="@"?zi:lt}),o.removeAttribute(y)}else y.startsWith(K)&&(d.push({type:6,index:a}),o.removeAttribute(y));if(kr.test(o.tagName)){const y=o.textContent.split(K),_=y.length-1;if(_>0){o.textContent=et?et.emptyScript:"";for(let w=0;w<_;w++)o.append(y[w],Oe()),re.nextNode(),d.push({type:2,index:++a});o.append(y[_],Oe())}}}else if(o.nodeType===8)if(o.data===Ir)d.push({type:2,index:a});else{let y=-1;for(;(y=o.data.indexOf(K,y+1))!==-1;)d.push({type:7,index:a}),y+=K.length-1}a++}}static createElement(e,t){const s=ie.createElement("template");return s.innerHTML=e,s}}function be(r,e,t=r,s){var l,u;if(e===ge)return e;let o=s!==void 0?(l=t._$Co)==null?void 0:l[s]:t._$Cl;const a=ke(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((u=o==null?void 0:o._$AO)==null||u.call(o,!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=o:t._$Cl=o),o!==void 0&&(e=be(r,o._$AS(r,e.values),o,s)),e}class Mi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,o=((e==null?void 0:e.creationScope)??ie).importNode(t,!0);re.currentNode=o;let a=re.nextNode(),l=0,u=0,d=s[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new je(a,a.nextSibling,this,e):d.type===1?g=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(g=new Hi(a,this,e)),this._$AV.push(g),d=s[++u]}l!==(d==null?void 0:d.index)&&(a=re.nextNode(),l++)}return re.currentNode=ie,o}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class je{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,o){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=be(this,e,t),ke(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==I&&ke(this._$AH)?this._$AA.nextSibling.data=e:this.T(ie.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ue.createElement(Ur(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(t);else{const l=new Mi(o,this),u=l.u(this.options);l.p(t),this.T(u),this._$AH=l}}_$AC(e){let t=ar.get(e.strings);return t===void 0&&ar.set(e.strings,t=new Ue(e)),t}k(e){Or(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const a of e)o===t.length?t.push(s=new je(this.S(Oe()),this.S(Oe()),this,this.options)):s=t[o],s._$AI(a),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,o,a){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=I}_$AI(e,t=this,s,o){const a=this.strings;let l=!1;if(a===void 0)e=be(this,e,t,0),l=!ke(e)||e!==this._$AH&&e!==ge,l&&(this._$AH=e);else{const u=e;let d,g;for(e=a[0],d=0;d<a.length-1;d++)g=be(this,u[s+d],t,d),g===ge&&(g=this._$AH[d]),l||(l=!ke(g)||g!==this._$AH[d]),g===I?e=I:e!==I&&(e+=(g??"")+a[d+1]),this._$AH[d]=g}l&&!o&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ji extends lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Ni extends lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class zi extends lt{constructor(e,t,s,o,a){super(e,t,s,o,a),this.type=5}_$AI(e,t=this){if((e=be(this,e,t,0)??I)===ge)return;const s=this._$AH,o=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==I&&(s===I||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Hi{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){be(this,e)}}const xt=Be.litHtmlPolyfillSupport;xt==null||xt(Ue,je),(Be.litHtmlVersions??(Be.litHtmlVersions=[])).push("3.1.2");const qi=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let o=s._$litPart$;if(o===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=o=new je(e.insertBefore(Oe(),a),a,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ge}};var Cr;P._$litElement$=!0,P.finalized=!0,(Cr=globalThis.litElementHydrateSupport)==null||Cr.call(globalThis,{LitElement:P});const $t=globalThis.litElementPolyfillSupport;$t==null||$t({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi={attribute:!0,type:String,converter:Ze,reflect:!1,hasChanged:Ot},Wi=(r=Vi,e,t)=>{const{kind:s,metadata:o}=t;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(t.name,r),s==="accessor"){const{name:l}=t;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,d,r)},init(u){return u!==void 0&&this.P(l,void 0,r),u}}}if(s==="setter"){const{name:l}=t;return function(u){const d=this[l];e.call(this,u),this.requestUpdate(l,d,r)}}throw Error("Unsupported decorator location: "+s)};function v(r){return(e,t)=>typeof t=="object"?Wi(r,e,t):((s,o,a)=>{const l=o.hasOwnProperty(a);return o.constructor.createProperty(a,l?{...s,wrapped:!0}:s),l?Object.getOwnPropertyDescriptor(o,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(r){return v({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rr=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cr=class{constructor(e,t,s,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Rr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ji=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},lr=class extends Gi{constructor(e,t,s){var o,a;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=l=>{const u=l.composedPath()[0];l.context===this.context&&u!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,u,l.subscribe))},this.onProviderRequest=l=>{const u=l.composedPath()[0];if(l.context!==this.context||u===this.host)return;const d=new Set;for(const[g,{consumerHost:b}]of this.subscriptions)d.has(g)||(d.add(g),b.dispatchEvent(new Rr(this.context,g,!0)));l.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(o=this.host).addController)==null||a.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ji(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fr({context:r}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new lr(this,{context:r}))}),{get(){return e.get.call(this)},set(o){var a;return(a=s.get(this))==null||a.setValue(o),e.set.call(this,o)},init(o){var a;return(a=s.get(this))==null||a.setValue(o),o}};{e.constructor.addInitializer(l=>{s.set(l,new lr(l,{context:r}))});const o=Object.getOwnPropertyDescriptor(e,t);let a;if(o===void 0){const l=new WeakMap;a={get:function(){return l.get(this)},set:function(u){s.get(this).setValue(u),l.set(this,u)},configurable:!0,enumerable:!0}}else{const l=o.set;a={...o,set:function(u){s.get(this).setValue(u),l==null||l.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dr({context:r,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new cr(this,{context:r,callback:o=>{this[s.name]=o},subscribe:e})}):t.constructor.addInitializer(o=>{new cr(o,{context:r,callback:a=>{o[s]=a},subscribe:e})})}}let Ki=class extends P{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",s=>{const o=s.detail;console.log("Got message: ",o),this.receive(o)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(o=>{const a=o(this.model);this.model=a}):this.model=t}}},Yi=class extends P{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class Qi{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,o=this._handlers.get(s);return o?o(t,e):e}}function Xi(r){return e=>Object.assign({},e,r)}function Zi(r){return r}const en="http://localhost:3000",tn=`${en}`,rn="/api",Pt="JWT_AUTH_TOKEN",J=class J{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new J;return console.log("Deauthenticating",e,J._theUser),e===J._theUser&&(localStorage.removeItem(Pt),J._theUser=t),t}};J._theUser=new J;let j=J;class Re extends j{constructor(e,t){super();const o=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(o).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),l=JSON.parse(a);console.log("Token payload",l),this.token=e,this.authenticated=!0,this.username=l.username,this.signOut=t}static authenticate(e,t){return j._theUser=new Re(e,t),localStorage.setItem(Pt,e),j._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Pt);return t?Re.authenticate(t,e):j._theUser}}class kt{constructor(e){this._base=rn,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=j._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${j._theUser.token}`};return e?{...s,...a}:a}else return e?{...s}:void 0}_url(e){return`${tn}${this._base}${e}`}}class hr extends kt{constructor(e){super(Object.fromEntries(e))}}class Lr extends kt{constructor(){super(void 0)}}var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Mr=(r,e,t,s)=>{for(var o=s>1?void 0:s?sn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&nn(e,t,o),o};const jr="MTVModel",ur={user:new j},on=()=>new Qi,Nr=Xi,zr=Zi;class Hr extends Ki{constructor(e){super(e,ur),this.model=ur}}Mr([Fr({context:jr}),k()],Hr.prototype,"model",2);class Ut extends Yi{getFromModel(e){if(this._model)return this._model[e]}}Mr([Dr({context:jr,subscribe:!0}),v({attribute:!1})],Ut.prototype,"_model",2);const Rt=on(),an=Rt.update;Rt.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Lr().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Nr({profile:t}):zr)});Rt.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new kt(t).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{s&&console.log("Profile:",s)}).then(s=>s?Nr({profile:s}):zr)});var cn=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,Ne=(r,e,t,s)=>{for(var o=s>1?void 0:s?ln(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&cn(e,t,o),o};let ne=class extends P{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,s)=>{const o=t[0].toUpperCase(),a=s[0].toUpperCase();return o<a?-1:o>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return x`
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
  `;Ne([v({type:Array})],ne.prototype,"names",2);Ne([v({type:Array})],ne.prototype,"namesOriginalOrder",2);Ne([v({type:Array})],ne.prototype,"listAttributes",2);Ne([k()],ne.prototype,"sort_state",2);ne=Ne([T("sortable-list")],ne);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,ht=(r,e,t,s)=>{for(var o=s>1?void 0:s?un(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&hn(e,t,o),o};let ye=class extends P{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return x`
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
    `}};ye.styles=O`
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
  `;ht([v({type:Array})],ye.prototype,"names",2);ht([v({type:Array})],ye.prototype,"listAttributes",2);ht([k()],ye.prototype,"sort_state",2);ye=ht([T("general-list")],ye);var dn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,Ft=(r,e,t,s)=>{for(var o=s>1?void 0:s?pn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&dn(e,t,o),o};let Fe=class extends P{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return x`
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
    `}};Fe.styles=O`
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
  `;Ft([v({type:Array})],Fe.prototype,"artists",2);Ft([v({type:String})],Fe.prototype,"listAttributes",2);Fe=Ft([T("favorites-list")],Fe);var fn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,xe=(r,e,t,s)=>{for(var o=s>1?void 0:s?mn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&fn(e,t,o),o};let X=class extends P{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return x`
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
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};X.styles=O`
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
  `;xe([v({reflect:!0,type:Boolean})],X.prototype,"open",2);xe([v()],X.prototype,"align",2);xe([v()],X.prototype,"profileImage",2);xe([v()],X.prototype,"profileUserID",2);xe([v()],X.prototype,"profileDescription",2);X=xe([T("drop-down")],X);var gn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,qr=(r,e,t,s)=>{for(var o=s>1?void 0:s?bn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&gn(e,t,o),o};let tt=class extends P{constructor(){super(...arguments),this.on=!1}render(){return x`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};tt.styles=O`
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
  `;qr([v({reflect:!0,type:Boolean})],tt.prototype,"on",2);tt=qr([T("color-mode-switch")],tt);var yn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,ut=(r,e,t,s)=>{for(var o=s>1?void 0:s?_n(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&yn(e,t,o),o};let _e=class extends P{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return x`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};_e.styles=O`
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
  `;ut([v()],_e.prototype,"title",2);ut([v()],_e.prototype,"description",2);ut([v()],_e.prototype,"user_id",2);_e=ut([T("default-card")],_e);var wn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,Dt=(r,e,t,s)=>{for(var o=s>1?void 0:s?vn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&wn(e,t,o),o};let De=class extends P{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return x`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};De.styles=O`
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
  `;Dt([v({reflect:!0,type:Boolean})],De.prototype,"on",2);Dt([v()],De.prototype,"filteredState",2);De=Dt([T("toggle-switch")],De);var xn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,ze=(r,e,t,s)=>{for(var o=s>1?void 0:s?$n(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&xn(e,t,o),o};let se=class extends P{constructor(){super(...arguments),this.path="",this.editMode=!1,this.profileEditText="Edit Profile."}get profile(){return this.using||{}}_changeEditMode(){console.log("Edit mode changed"),this.editMode=!this.editMode,this.profileEditText==="Edit Profile."?this.profileEditText="Close Edit Menu.":this.profileEditText="Edit Profile."}_handleNameChange(r){const e=r.target;this.profile.name=e.value,this.requestUpdate()}_handleBioChange(r){const e=r.target;this.profile.bio=e.value,this.requestUpdate()}_handleMusicTasteChange(r){const e=r.target;this.profile.musicTaste=e.value,this.requestUpdate()}_handleTimezoneChange(r){const e=r.target;this.profile.timezone=e.value,this.requestUpdate()}_handleSpotifyChange(r){const e=r.target;this.profile.spotify=e.value==="true",this.requestUpdate()}_handleSubmit(r){r.preventDefault(),console.log("Form submitted with:",this.profile);const e=new CustomEvent("profile-update",{detail:{profile:this.profile},bubbles:!0,composed:!0});console.log("dispatching event: ",e),this.dispatchEvent(e),this.editMode=!this.editMode}render(){const{name:r,profileImage:e,profileDescription:t,bio:s}=this.profile;return x`
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
                    .value=${s}
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
    `}};se.styles=O`
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
  `;ze([v()],se.prototype,"path",2);ze([v()],se.prototype,"editMode",2);ze([v()],se.prototype,"profileEditText",2);ze([v({attribute:!1})],se.prototype,"using",2);se=ze([T("user-profile")],se);function rt(r){return r=r||[],Array.isArray(r)?r:[r]}function N(r){return`[Vaadin.Router] ${r}`}function En(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const it="module",nt="nomodule",St=[it,nt];function dr(r){if(!r.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Vr(r){if(!r||!M(r.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!oe(r.action)&&!Array.isArray(r.children)&&!oe(r.children)&&!st(e)&&!t.some(s=>M(r[s])))throw new Error(N(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(M(e))dr(e);else if(St.some(s=>s in e))St.forEach(s=>s in e&&dr(e[s]));else throw new Error(N('Expected route bundle to include either "'+nt+'" or "'+it+'" keys, or both'));r.redirect&&["bundle","component"].forEach(s=>{s in r&&console.warn(N(`Route config "${r.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function pr(r){rt(r).forEach(e=>Vr(e))}function fr(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===it?t.setAttribute("type",it):e===nt&&t.setAttribute(nt,""),t.async=!0),new Promise((s,o)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,s(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),o(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function An(r){return M(r)?fr(r):Promise.race(St.filter(e=>e in r).map(e=>fr(r[e],e)))}function Ie(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function st(r){return typeof r=="object"&&!!r}function oe(r){return typeof r=="function"}function M(r){return typeof r=="string"}function Wr(r){const e=new Error(N(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const me=new class{};function Pn(r){const e=r.port,t=r.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function mr(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let u=0;u<t.length;u++){const d=t[u];if(d.nodeName&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Pn(e))!==window.location.origin)return;const{pathname:o,search:a,hash:l}=e;Ie("go",{pathname:o,search:a,hash:l})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Sn={activate(){window.document.addEventListener("click",mr)},inactivate(){window.document.removeEventListener("click",mr)}},Cn=/Trident/.test(navigator.userAgent);Cn&&!oe(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function gr(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;Ie("go",{pathname:e,search:t,hash:s})}const Tn={activate(){window.addEventListener("popstate",gr)},inactivate(){window.removeEventListener("popstate",gr)}};var $e=Xr,Bn=Lt,In=Rn,On=Kr,kn=Qr,Gr="/",Jr="./",Un=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Lt(r,e){for(var t=[],s=0,o=0,a="",l=e&&e.delimiter||Gr,u=e&&e.delimiters||Jr,d=!1,g;(g=Un.exec(r))!==null;){var b=g[0],y=g[1],_=g.index;if(a+=r.slice(o,_),o=_+b.length,y){a+=y[1],d=!0;continue}var w="",R=r[o],ee=g[2],mt=g[3],Ae=g[4],le=g[5];if(!d&&a.length){var he=a.length-1;u.indexOf(a[he])>-1&&(w=a[he],a=a.slice(0,he))}a&&(t.push(a),a="",d=!1);var gt=w!==""&&R!==void 0&&R!==w,V=le==="+"||le==="*",Ve=le==="?"||le==="*",Pe=w||l,We=mt||Ae;t.push({name:ee||s++,prefix:w,delimiter:Pe,optional:Ve,repeat:V,partial:gt,pattern:We?Fn(We):"[^"+G(Pe)+"]+?"})}return(a||o<r.length)&&t.push(a+r.substr(o)),t}function Rn(r,e){return Kr(Lt(r,e))}function Kr(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(s,o){for(var a="",l=o&&o.encode||encodeURIComponent,u=0;u<r.length;u++){var d=r[u];if(typeof d=="string"){a+=d;continue}var g=s?s[d.name]:void 0,b;if(Array.isArray(g)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(g.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var y=0;y<g.length;y++){if(b=l(g[y],d),!e[u].test(b))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');a+=(y===0?d.prefix:d.delimiter)+b}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(b=l(String(g),d),!e[u].test(b))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+b+'"');a+=d.prefix+b;continue}if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"))}return a}}function G(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Fn(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Yr(r){return r&&r.sensitive?"":"i"}function Dn(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Ln(r,e,t){for(var s=[],o=0;o<r.length;o++)s.push(Xr(r[o],e,t).source);return new RegExp("(?:"+s.join("|")+")",Yr(t))}function Mn(r,e,t){return Qr(Lt(r,t),e,t)}function Qr(r,e,t){t=t||{};for(var s=t.strict,o=t.start!==!1,a=t.end!==!1,l=G(t.delimiter||Gr),u=t.delimiters||Jr,d=[].concat(t.endsWith||[]).map(G).concat("$").join("|"),g=o?"^":"",b=r.length===0,y=0;y<r.length;y++){var _=r[y];if(typeof _=="string")g+=G(_),b=y===r.length-1&&u.indexOf(_[_.length-1])>-1;else{var w=_.repeat?"(?:"+_.pattern+")(?:"+G(_.delimiter)+"(?:"+_.pattern+"))*":_.pattern;e&&e.push(_),_.optional?_.partial?g+=G(_.prefix)+"("+w+")?":g+="(?:"+G(_.prefix)+"("+w+"))?":g+=G(_.prefix)+"("+w+")"}}return a?(s||(g+="(?:"+l+")?"),g+=d==="$"?"$":"(?="+d+")"):(s||(g+="(?:"+l+"(?="+d+"))?"),b||(g+="(?="+l+"|"+d+")")),new RegExp(g,Yr(t))}function Xr(r,e,t){return r instanceof RegExp?Dn(r,e):Array.isArray(r)?Ln(r,e,t):Mn(r,e,t)}$e.parse=Bn;$e.compile=In;$e.tokensToFunction=On;$e.tokensToRegExp=kn;const{hasOwnProperty:jn}=Object.prototype,Ct=new Map;Ct.set("|false",{keys:[],pattern:/(?:)/});function br(r){try{return decodeURIComponent(r)}catch{return r}}function Nn(r,e,t,s,o){t=!!t;const a=`${r}|${t}`;let l=Ct.get(a);if(!l){const g=[];l={keys:g,pattern:$e(r,g,{end:t,strict:r===""})},Ct.set(a,l)}const u=l.pattern.exec(e);if(!u)return null;const d=Object.assign({},o);for(let g=1;g<u.length;g++){const b=l.keys[g-1],y=b.name,_=u[g];(_!==void 0||!jn.call(d,y))&&(b.repeat?d[y]=_?_.split(b.delimiter).map(br):[]:d[y]=_&&br(_))}return{path:u[0],keys:(s||[]).concat(l.keys),params:d}}function Zr(r,e,t,s,o){let a,l,u=0,d=r.path||"";return d.charAt(0)==="/"&&(t&&(d=d.substr(1)),t=!0),{next(g){if(r===g)return{done:!0};const b=r.__children=r.__children||r.children;if(!a&&(a=Nn(d,e,!b,s,o),a))return{done:!1,value:{route:r,keys:a.keys,params:a.params,path:a.path}};if(a&&b)for(;u<b.length;){if(!l){const _=b[u];_.parent=r;let w=a.path.length;w>0&&e.charAt(w)==="/"&&(w+=1),l=Zr(_,e.substr(w),t,a.keys,a.params)}const y=l.next(g);if(!y.done)return{done:!1,value:y.value};l=null,u++}return{done:!0}}}}function zn(r){if(oe(r.route.action))return r.route.action(r)}function Hn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function qn(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Vn(r,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const o={path:s,route:t};if(!r.chain)r.chain=[];else if(t.parent){let a=r.chain.length;for(;a--&&r.chain[a].route&&r.chain[a].route!==t.parent;)r.chain.pop()}r.chain.push(o)}}class Le{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||zn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){pr(e);const t=[...rt(e)];this.root.__children=t}addRoutes(e){return pr(e),this.root.__children.push(...rt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,M(e)?{pathname:e}:e),s=Zr(this.root,this.__normalizePathname(t.pathname),this.baseUrl),o=this.resolveRoute;let a=null,l=null,u=t;function d(g,b=a.value.route,y){const _=y===null&&a.value.route;return a=l||s.next(_),l=null,!g&&(a.done||!Hn(b,a.value.route))?(l=a,Promise.resolve(me)):a.done?Promise.reject(Wr(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),Vn(u,a.value),Promise.resolve(o(u)).then(w=>w!=null&&w!==me?(u.result=w.result||w,u):d(g,b,w)))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(g=>{const b=qn(u);if(g?console.warn(b):g=new Error(b),g.context=g.context||u,g instanceof DOMException||(g.code=g.code||500),this.errorHandler)return u.result=this.errorHandler(g),u;throw g})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}Le.pathToRegexp=$e;const{pathToRegexp:yr}=Le,_r=new Map;function ei(r,e,t){const s=e.name||e.component;if(s&&(r.has(s)?r.get(s).push(e):r.set(s,[e])),Array.isArray(t))for(let o=0;o<t.length;o++){const a=t[o];a.parent=e,ei(r,a,a.__children||a.children)}}function wr(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function vr(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Wn(r,e={}){if(!(r instanceof Le))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,o)=>{let a=wr(t,s);if(!a&&(t.clear(),ei(t,r.root,r.root.__children),a=wr(t,s),!a))throw new Error(`Route "${s}" not found`);let l=_r.get(a.fullPath);if(!l){let d=vr(a),g=a.parent;for(;g;){const w=vr(g);w&&(d=w.replace(/\/$/,"")+"/"+d.replace(/^\//,"")),g=g.parent}const b=yr.parse(d),y=yr.tokensToFunction(b),_=Object.create(null);for(let w=0;w<b.length;w++)M(b[w])||(_[b[w].name]=!0);l={toPath:y,keys:_},_r.set(d,l),a.fullPath=d}let u=l.toPath(o,e)||"/";if(e.stringifyQueryParams&&o){const d={},g=Object.keys(o);for(let y=0;y<g.length;y++){const _=g[y];l.keys[_]||(d[_]=o[_])}const b=e.stringifyQueryParams(d);b&&(u+=b.charAt(0)==="?"?b:`?${b}`)}return u}}let xr=[];function Gn(r){xr.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),xr=r}const Jn=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Kn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function $r(r,e){return r.classList.add(e),new Promise(t=>{if(Jn(r)){const s=r.getBoundingClientRect(),o=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;r.setAttribute("style",`position: absolute; ${o}`),Kn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Yn=256;function Et(r){return r!=null}function Qn(r){const e=Object.assign({},r);return delete e.next,e}function L({pathname:r="",search:e="",hash:t="",chain:s=[],params:o={},redirectFrom:a,resolver:l},u){const d=s.map(g=>g.route);return{baseUrl:l&&l.baseUrl||"",pathname:r,search:e,hash:t,routes:d,route:u||d.length&&d[d.length-1]||null,params:o,redirectFrom:a,getUrl:(g={})=>Qe(Y.pathToRegexp.compile(ti(d))(Object.assign({},o,g)),l)}}function Er(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Xn(r,e){e.location=L(r);const t=r.chain.map(s=>s.route).indexOf(r.route);return r.chain[t].element=e,e}function Ye(r,e,t){if(oe(r))return r.apply(t,e)}function Ar(r,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return Ye(t[r],e,t)}}function Zn(r,e){if(!Array.isArray(r)&&!st(r))throw new Error(N(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=rt(r);for(let s=0;s<t.length;s++)Vr(t[s]),e.__children.push(t[s])}function Je(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Qe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function ti(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class Y extends Le{constructor(e,t){const s=document.head.querySelector("base"),o=s&&s.getAttribute("href");super([],Object.assign({baseUrl:o&&Le.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=l=>this.__resolveRoute(l);const a=Y.NavigationTrigger;Y.setTriggers.apply(Y,Object.keys(a).map(l=>a[l])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=L({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();oe(t.children)&&(s=s.then(()=>t.children(Qn(e))).then(a=>{!Et(a)&&!oe(t.children)&&(a=t.children),Zn(a,t)}));const o={redirect:a=>Er(e,a),component:a=>{const l=document.createElement(a);return this.__createdByRouter.set(l,!0),l}};return s.then(()=>{if(this.__isLatestRender(e))return Ye(t.action,[e,o],t)}).then(a=>{if(Et(a)&&(a instanceof HTMLElement||a.redirect||a===me))return a;if(M(t.redirect))return o.redirect(t.redirect);if(t.bundle)return An(t.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(Et(a))return a;if(M(t.component))return o.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},M(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(o).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const l=this.__previousContext;if(a===l)return this.__updateBrowserHistory(l,!0),this.location;if(this.location=L(a),t&&this.__updateBrowserHistory(a,s===1),Ie("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,l),this.__previousContext=a,this.location;this.__addAppearingContent(a,l);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,l),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(o),Je(this.__outlet&&this.__outlet.children),this.location=L(Object.assign(o,{resolver:this})),Ie("error",Object.assign({router:this,error:a},o)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const a=s!==t?s:e,u=Qe(ti(s.chain),s.resolver)===s.pathname,d=(g,b=g.route,y)=>g.next(void 0,b,y).then(_=>_===null||_===me?u?g:b.parent!==null?d(g,b.parent,_):_:_);return d(s).then(g=>{if(g===null||g===me)throw Wr(a);return g&&g!==me&&g!==s?this.__fullyResolveChain(a,g):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Xn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(N(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${En(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],o=e.chain;let a=Promise.resolve();const l=()=>({cancel:!0}),u=d=>Er(e,d);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let d=0;d<Math.min(s.length,o.length)&&!(s[d].route!==o[d].route||s[d].path!==o[d].path&&s[d].element!==o[d].element||!this.__isReusableElement(s[d].element,o[d].element));d=++e.__divergedChainIndex);if(e.__skipAttach=o.length===s.length&&e.__divergedChainIndex==o.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let d=o.length-1;d>=0;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},s[d]);for(let d=0;d<o.length;d++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},o[d]),s[d].element.location=L(e,s[d].route)}else for(let d=s.length-1;d>=e.__divergedChainIndex;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},s[d])}if(!e.__skipAttach)for(let d=0;d<o.length;d++)d<e.__divergedChainIndex?d<s.length&&s[d].element&&(s[d].element.location=L(e,s[d].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},o[d]),o[d].element&&(o[d].element.location=L(e,o[d].route)));return a.then(d=>{if(d){if(d.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(d.redirect)return this.__redirect(d.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,o){const a=L(t);return e.then(l=>{if(this.__isLatestRender(t))return Ar("onBeforeLeave",[a,s,this],o.element)(l)}).then(l=>{if(!(l||{}).redirect)return l})}__runOnBeforeEnterCallbacks(e,t,s,o){const a=L(t,o.route);return e.then(l=>{if(this.__isLatestRender(t))return Ar("onBeforeEnter",[a,s,this],o.element)(l)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>Yn)throw new Error(N(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},o){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const a=o?"replaceState":"pushState";window.history[a](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let o=0;o<e.__divergedChainIndex;o++){const a=t&&t.chain[o].element;if(a)if(a.parentNode===s)e.chain[o].element=a,s=a;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let o=s;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const l=e.chain[a].element;l&&(o.appendChild(l),this.__addedByRouter.set(l,!0),o===s&&this.__appearingContent.push(l),o=l)}}__removeDisappearingContent(){this.__disappearingContent&&Je(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Je(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const o=t.chain[s].element;if(o)try{const a=L(e);Ye(o.onAfterLeave,[a,{},t.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&Je(o.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},o=L(e,e.chain[t].route);Ye(s.onAfterEnter,[o,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],o=[],a=e.chain;let l;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){l=a[u-1].route.animate;break}if(t&&s&&l){const u=st(l)&&l.leave||"leaving",d=st(l)&&l.enter||"entering";o.push($r(t,u)),o.push($r(s,d))}return Promise.all(o).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:o}=e?e.detail:window.location;M(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:o},!0))}static setTriggers(...e){Gn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Wn(this)),Qe(this.__urlForName(e,t),this)}urlForPath(e,t){return Qe(Y.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:o}=M(e)?this.__createUrl(e,"http://a"):e;return Ie("go",{pathname:t,search:s,hash:o})}}const es=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Xe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ts(){function r(){return!0}return ri(r)}function rs(){try{return is()?!0:ns()?Xe?!ss():!ts():!1}catch{return!1}}function is(){return localStorage.getItem("vaadin.developmentmode.force")}function ns(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ss(){return!!(Xe&&Object.keys(Xe).map(e=>Xe[e]).filter(e=>e.productionMode).length>0)}function ri(r,e){if(typeof r!="function")return;const t=es.exec(r.toString());if(t)try{r=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return r(e)}window.Vaadin=window.Vaadin||{};const Pr=function(r,e){if(window.Vaadin.developmentMode)return ri(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=rs());function os(){}const as=function(){if(typeof Pr=="function")return Pr(os)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});as();Y.NavigationTrigger={POPSTATE:Tn,CLICK:Sn};var cs=Object.defineProperty,ls=Object.getOwnPropertyDescriptor,ii=(r,e,t,s)=>{for(var o=s>1?void 0:s?ls(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&cs(e,t,o),o};let Tt=class extends P{constructor(){super(...arguments),this.router=new Y(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return x`<slot></slot>`}};ii([v({attribute:!1})],Tt.prototype,"routes",2);Tt=ii([T("vaadin-router")],Tt);var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,Ee=(r,e,t,s)=>{for(var o=s>1?void 0:s?us(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&hs(e,t,o),o};let ni="auth",Z=class extends P{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.activeForm="register",this.showLoginForm=!1,this.user=Re.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}toggleLoginForm(){this.showLoginForm=!this.showLoginForm,this.requestUpdate()}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){return x`
      <section class="formsContainer">
        ${this.showLoginForm?x` <form
              @submit=${this._handleLogin}
              class="loginForm ${this.activeForm==="login"?"active":""}"
            >
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
                <input type="password" name="password" required />
              </div>
              <button type="submit" class="submitButton">Sign in</button>
              <p class="loginSignupLink">
                Don&apos;t have an account yet?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign Up Here</span
                >
              </p>
            </form>`:x`<form @submit=${this._handleRegister} class="registrationForm">
              <h2>Sign Up</h2>
              <p class="formInformation">
                Join your friends and see who can match the vibe the best!
              </p>
              <div class="formLabelAndInput">
                <label>Name</label>
                <input name="name" type="text" required />
              </div>
              <div class="formLabelAndInput">
                <label>Email</label>
                <input name="email" type="email" required />
              </div>
              <div class="formLabelAndInput">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>

              <button type="submit" class="submitButton">Sign up</button>
              <p class="loginSignupLink">
                Already have an account?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign In</span
                >
              </p>
            </form>`}
      </section>
    `}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new hr(t).base().post("/login").then(o=>{if(o.status===200)return o.json();this.loginStatus=o.status}).then(o=>{o&&(console.log("Authentication:",o.token),this.user=Re.authenticate(o.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e),s=new hr(t);console.log("handling registration, about to make signup request"),s.base().post("/signup").then(o=>{if(o.status===200)return o.json();this.registerStatus=o.status}).then(o=>{console.log("Registration response:",o)}).catch(o=>{console.error("Error during registration:",o)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=j.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};Z.styles=O`
    :host {
      display: block;
      font-family: "Arial", sans-serif;
      max-width: 400px;
      margin: auto;
    }

    .formsContainer {
      border-radius: 8px;
      padding: 20px;
      background-color: white;
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
  `;Ee([k()],Z.prototype,"loginStatus",2);Ee([k()],Z.prototype,"registerStatus",2);Ee([k()],Z.prototype,"activeForm",2);Ee([k()],Z.prototype,"showLoginForm",2);Ee([Fr({context:ni}),k()],Z.prototype,"user",2);Z=Ee([T("auth-required")],Z);var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,Mt=(r,e,t,s)=>{for(var o=s>1?void 0:s?ps(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&ds(e,t,o),o};let Me=class extends P{constructor(){super(...arguments),this.user=new j}render(){const{profileImage:r,profileDescription:e,userid:t}=this.profile||{};return x`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${r}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Lr().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};Me.styles=O`
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
  `;Mt([k()],Me.prototype,"profile",2);Mt([Dr({context:ni,subscribe:!0}),v({attribute:!1})],Me.prototype,"user",2);Me=Mt([T("match-the-vibe-header")],Me);var fs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,He=(r,e,t,s)=>{for(var o=s>1?void 0:s?ms(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&fs(e,t,o),o};let ae=class extends Ut{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return x`
      <section class="profile-page">
        <user-profile .using=${this.profile}> </user-profile>
      </section>
    `}};ae.styles=[O`
      :host {
        display: contents;
      }

      .profile-page {
        display: flex;
        justify-content: center;
      }
    `];He([v({attribute:!1})],ae.prototype,"location",2);He([v({reflect:!0})],ae.prototype,"userid",1);He([v({reflect:!0})],ae.prototype,"edit",1);He([v()],ae.prototype,"profile",1);ae=He([T("profile-page")],ae);var jt={},dt={};dt.byteLength=ys;dt.toByteArray=ws;dt.fromByteArray=$s;var q=[],D=[],gs=typeof Uint8Array<"u"?Uint8Array:Array,At="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var pe=0,bs=At.length;pe<bs;++pe)q[pe]=At[pe],D[At.charCodeAt(pe)]=pe;D[45]=62;D[95]=63;function si(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var s=t===e?0:4-t%4;return[t,s]}function ys(r){var e=si(r),t=e[0],s=e[1];return(t+s)*3/4-s}function _s(r,e,t){return(e+t)*3/4-t}function ws(r){var e,t=si(r),s=t[0],o=t[1],a=new gs(_s(r,s,o)),l=0,u=o>0?s-4:s,d;for(d=0;d<u;d+=4)e=D[r.charCodeAt(d)]<<18|D[r.charCodeAt(d+1)]<<12|D[r.charCodeAt(d+2)]<<6|D[r.charCodeAt(d+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return o===2&&(e=D[r.charCodeAt(d)]<<2|D[r.charCodeAt(d+1)]>>4,a[l++]=e&255),o===1&&(e=D[r.charCodeAt(d)]<<10|D[r.charCodeAt(d+1)]<<4|D[r.charCodeAt(d+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function vs(r){return q[r>>18&63]+q[r>>12&63]+q[r>>6&63]+q[r&63]}function xs(r,e,t){for(var s,o=[],a=e;a<t;a+=3)s=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),o.push(vs(s));return o.join("")}function $s(r){for(var e,t=r.length,s=t%3,o=[],a=16383,l=0,u=t-s;l<u;l+=a)o.push(xs(r,l,l+a>u?u:l+a));return s===1?(e=r[t-1],o.push(q[e>>2]+q[e<<4&63]+"==")):s===2&&(e=(r[t-2]<<8)+r[t-1],o.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"=")),o.join("")}var Nt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Nt.read=function(r,e,t,s,o){var a,l,u=o*8-s-1,d=(1<<u)-1,g=d>>1,b=-7,y=t?o-1:0,_=t?-1:1,w=r[e+y];for(y+=_,a=w&(1<<-b)-1,w>>=-b,b+=u;b>0;a=a*256+r[e+y],y+=_,b-=8);for(l=a&(1<<-b)-1,a>>=-b,b+=s;b>0;l=l*256+r[e+y],y+=_,b-=8);if(a===0)a=1-g;else{if(a===d)return l?NaN:(w?-1:1)*(1/0);l=l+Math.pow(2,s),a=a-g}return(w?-1:1)*l*Math.pow(2,a-s)};Nt.write=function(r,e,t,s,o,a){var l,u,d,g=a*8-o-1,b=(1<<g)-1,y=b>>1,_=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=s?0:a-1,R=s?1:-1,ee=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,l=b):(l=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-l))<1&&(l--,d*=2),l+y>=1?e+=_/d:e+=_*Math.pow(2,1-y),e*d>=2&&(l++,d/=2),l+y>=b?(u=0,l=b):l+y>=1?(u=(e*d-1)*Math.pow(2,o),l=l+y):(u=e*Math.pow(2,y-1)*Math.pow(2,o),l=0));o>=8;r[t+w]=u&255,w+=R,u/=256,o-=8);for(l=l<<o|u,g+=o;g>0;r[t+w]=l&255,w+=R,l/=256,g-=8);r[t+w-R]|=ee*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(r){const e=dt,t=Nt,s=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=u,r.SlowBuffer=le,r.INSPECT_MAX_BYTES=50;const o=2147483647;r.kMaxLength=o,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const c=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(c,i),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function l(c){if(c>o)throw new RangeError('The value "'+c+'" is invalid for option "size"');const i=new Uint8Array(c);return Object.setPrototypeOf(i,u.prototype),i}function u(c,i,n){if(typeof c=="number"){if(typeof i=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return y(c)}return d(c,i,n)}u.poolSize=8192;function d(c,i,n){if(typeof c=="string")return _(c,i);if(ArrayBuffer.isView(c))return R(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(H(c,ArrayBuffer)||c&&H(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(H(c,SharedArrayBuffer)||c&&H(c.buffer,SharedArrayBuffer)))return ee(c,i,n);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=c.valueOf&&c.valueOf();if(h!=null&&h!==c)return u.from(h,i,n);const p=mt(c);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),i,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,i,n){return d(c,i,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function g(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function b(c,i,n){return g(c),c<=0?l(c):i!==void 0?typeof n=="string"?l(c).fill(i,n):l(c).fill(i):l(c)}u.alloc=function(c,i,n){return b(c,i,n)};function y(c){return g(c),l(c<0?0:Ae(c)|0)}u.allocUnsafe=function(c){return y(c)},u.allocUnsafeSlow=function(c){return y(c)};function _(c,i){if((typeof i!="string"||i==="")&&(i="utf8"),!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);const n=he(c,i)|0;let h=l(n);const p=h.write(c,i);return p!==n&&(h=h.slice(0,p)),h}function w(c){const i=c.length<0?0:Ae(c.length)|0,n=l(i);for(let h=0;h<i;h+=1)n[h]=c[h]&255;return n}function R(c){if(H(c,Uint8Array)){const i=new Uint8Array(c);return ee(i.buffer,i.byteOffset,i.byteLength)}return w(c)}function ee(c,i,n){if(i<0||c.byteLength<i)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<i+(n||0))throw new RangeError('"length" is outside of buffer bounds');let h;return i===void 0&&n===void 0?h=new Uint8Array(c):n===void 0?h=new Uint8Array(c,i):h=new Uint8Array(c,i,n),Object.setPrototypeOf(h,u.prototype),h}function mt(c){if(u.isBuffer(c)){const i=Ae(c.length)|0,n=l(i);return n.length===0||c.copy(n,0,0,i),n}if(c.length!==void 0)return typeof c.length!="number"||_t(c.length)?l(0):w(c);if(c.type==="Buffer"&&Array.isArray(c.data))return w(c.data)}function Ae(c){if(c>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return c|0}function le(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(i){return i!=null&&i._isBuffer===!0&&i!==u.prototype},u.compare=function(i,n){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),H(n,Uint8Array)&&(n=u.from(n,n.offset,n.byteLength)),!u.isBuffer(i)||!u.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(i===n)return 0;let h=i.length,p=n.length;for(let f=0,m=Math.min(h,p);f<m;++f)if(i[f]!==n[f]){h=i[f],p=n[f];break}return h<p?-1:p<h?1:0},u.isEncoding=function(i){switch(String(i).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(i,n){if(!Array.isArray(i))throw new TypeError('"list" argument must be an Array of Buffers');if(i.length===0)return u.alloc(0);let h;if(n===void 0)for(n=0,h=0;h<i.length;++h)n+=i[h].length;const p=u.allocUnsafe(n);let f=0;for(h=0;h<i.length;++h){let m=i[h];if(H(m,Uint8Array))f+m.length>p.length?(u.isBuffer(m)||(m=u.from(m)),m.copy(p,f)):Uint8Array.prototype.set.call(p,m,f);else if(u.isBuffer(m))m.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=m.length}return p};function he(c,i){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||H(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const n=c.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&n===0)return 0;let p=!1;for(;;)switch(i){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return yt(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Qt(c).length;default:if(p)return h?-1:yt(c).length;i=(""+i).toLowerCase(),p=!0}}u.byteLength=he;function gt(c,i,n){let h=!1;if((i===void 0||i<0)&&(i=0),i>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,i>>>=0,n<=i))return"";for(c||(c="utf8");;)switch(c){case"hex":return bi(this,i,n);case"utf8":case"utf-8":return zt(this,i,n);case"ascii":return mi(this,i,n);case"latin1":case"binary":return gi(this,i,n);case"base64":return pi(this,i,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yi(this,i,n);default:if(h)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function V(c,i,n){const h=c[i];c[i]=c[n],c[n]=h}u.prototype.swap16=function(){const i=this.length;if(i%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<i;n+=2)V(this,n,n+1);return this},u.prototype.swap32=function(){const i=this.length;if(i%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<i;n+=4)V(this,n,n+3),V(this,n+1,n+2);return this},u.prototype.swap64=function(){const i=this.length;if(i%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<i;n+=8)V(this,n,n+7),V(this,n+1,n+6),V(this,n+2,n+5),V(this,n+3,n+4);return this},u.prototype.toString=function(){const i=this.length;return i===0?"":arguments.length===0?zt(this,0,i):gt.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(i){if(!u.isBuffer(i))throw new TypeError("Argument must be a Buffer");return this===i?!0:u.compare(this,i)===0},u.prototype.inspect=function(){let i="";const n=r.INSPECT_MAX_BYTES;return i=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(i+=" ... "),"<Buffer "+i+">"},s&&(u.prototype[s]=u.prototype.inspect),u.prototype.compare=function(i,n,h,p,f){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(i))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof i);if(n===void 0&&(n=0),h===void 0&&(h=i?i.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),n<0||h>i.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&n>=h)return 0;if(p>=f)return-1;if(n>=h)return 1;if(n>>>=0,h>>>=0,p>>>=0,f>>>=0,this===i)return 0;let m=f-p,$=h-n;const S=Math.min(m,$),A=this.slice(p,f),C=i.slice(n,h);for(let E=0;E<S;++E)if(A[E]!==C[E]){m=A[E],$=C[E];break}return m<$?-1:$<m?1:0};function Ve(c,i,n,h,p){if(c.length===0)return-1;if(typeof n=="string"?(h=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,_t(n)&&(n=p?0:c.length-1),n<0&&(n=c.length+n),n>=c.length){if(p)return-1;n=c.length-1}else if(n<0)if(p)n=0;else return-1;if(typeof i=="string"&&(i=u.from(i,h)),u.isBuffer(i))return i.length===0?-1:Pe(c,i,n,h,p);if(typeof i=="number")return i=i&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(c,i,n):Uint8Array.prototype.lastIndexOf.call(c,i,n):Pe(c,[i],n,h,p);throw new TypeError("val must be string, number or Buffer")}function Pe(c,i,n,h,p){let f=1,m=c.length,$=i.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(c.length<2||i.length<2)return-1;f=2,m/=2,$/=2,n/=2}function S(C,E){return f===1?C[E]:C.readUInt16BE(E*f)}let A;if(p){let C=-1;for(A=n;A<m;A++)if(S(c,A)===S(i,C===-1?0:A-C)){if(C===-1&&(C=A),A-C+1===$)return C*f}else C!==-1&&(A-=A-C),C=-1}else for(n+$>m&&(n=m-$),A=n;A>=0;A--){let C=!0;for(let E=0;E<$;E++)if(S(c,A+E)!==S(i,E)){C=!1;break}if(C)return A}return-1}u.prototype.includes=function(i,n,h){return this.indexOf(i,n,h)!==-1},u.prototype.indexOf=function(i,n,h){return Ve(this,i,n,h,!0)},u.prototype.lastIndexOf=function(i,n,h){return Ve(this,i,n,h,!1)};function We(c,i,n,h){n=Number(n)||0;const p=c.length-n;h?(h=Number(h),h>p&&(h=p)):h=p;const f=i.length;h>f/2&&(h=f/2);let m;for(m=0;m<h;++m){const $=parseInt(i.substr(m*2,2),16);if(_t($))return m;c[n+m]=$}return m}function li(c,i,n,h){return Ge(yt(i,c.length-n),c,n,h)}function hi(c,i,n,h){return Ge(xi(i),c,n,h)}function ui(c,i,n,h){return Ge(Qt(i),c,n,h)}function di(c,i,n,h){return Ge($i(i,c.length-n),c,n,h)}u.prototype.write=function(i,n,h,p){if(n===void 0)p="utf8",h=this.length,n=0;else if(h===void 0&&typeof n=="string")p=n,h=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(h)?(h=h>>>0,p===void 0&&(p="utf8")):(p=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-n;if((h===void 0||h>f)&&(h=f),i.length>0&&(h<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let m=!1;for(;;)switch(p){case"hex":return We(this,i,n,h);case"utf8":case"utf-8":return li(this,i,n,h);case"ascii":case"latin1":case"binary":return hi(this,i,n,h);case"base64":return ui(this,i,n,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return di(this,i,n,h);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function pi(c,i,n){return i===0&&n===c.length?e.fromByteArray(c):e.fromByteArray(c.slice(i,n))}function zt(c,i,n){n=Math.min(c.length,n);const h=[];let p=i;for(;p<n;){const f=c[p];let m=null,$=f>239?4:f>223?3:f>191?2:1;if(p+$<=n){let S,A,C,E;switch($){case 1:f<128&&(m=f);break;case 2:S=c[p+1],(S&192)===128&&(E=(f&31)<<6|S&63,E>127&&(m=E));break;case 3:S=c[p+1],A=c[p+2],(S&192)===128&&(A&192)===128&&(E=(f&15)<<12|(S&63)<<6|A&63,E>2047&&(E<55296||E>57343)&&(m=E));break;case 4:S=c[p+1],A=c[p+2],C=c[p+3],(S&192)===128&&(A&192)===128&&(C&192)===128&&(E=(f&15)<<18|(S&63)<<12|(A&63)<<6|C&63,E>65535&&E<1114112&&(m=E))}}m===null?(m=65533,$=1):m>65535&&(m-=65536,h.push(m>>>10&1023|55296),m=56320|m&1023),h.push(m),p+=$}return fi(h)}const Ht=4096;function fi(c){const i=c.length;if(i<=Ht)return String.fromCharCode.apply(String,c);let n="",h=0;for(;h<i;)n+=String.fromCharCode.apply(String,c.slice(h,h+=Ht));return n}function mi(c,i,n){let h="";n=Math.min(c.length,n);for(let p=i;p<n;++p)h+=String.fromCharCode(c[p]&127);return h}function gi(c,i,n){let h="";n=Math.min(c.length,n);for(let p=i;p<n;++p)h+=String.fromCharCode(c[p]);return h}function bi(c,i,n){const h=c.length;(!i||i<0)&&(i=0),(!n||n<0||n>h)&&(n=h);let p="";for(let f=i;f<n;++f)p+=Ei[c[f]];return p}function yi(c,i,n){const h=c.slice(i,n);let p="";for(let f=0;f<h.length-1;f+=2)p+=String.fromCharCode(h[f]+h[f+1]*256);return p}u.prototype.slice=function(i,n){const h=this.length;i=~~i,n=n===void 0?h:~~n,i<0?(i+=h,i<0&&(i=0)):i>h&&(i=h),n<0?(n+=h,n<0&&(n=0)):n>h&&(n=h),n<i&&(n=i);const p=this.subarray(i,n);return Object.setPrototypeOf(p,u.prototype),p};function B(c,i,n){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+i>n)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let p=this[i],f=1,m=0;for(;++m<n&&(f*=256);)p+=this[i+m]*f;return p},u.prototype.readUintBE=u.prototype.readUIntBE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let p=this[i+--n],f=1;for(;n>0&&(f*=256);)p+=this[i+--n]*f;return p},u.prototype.readUint8=u.prototype.readUInt8=function(i,n){return i=i>>>0,n||B(i,1,this.length),this[i]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(i,n){return i=i>>>0,n||B(i,2,this.length),this[i]|this[i+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(i,n){return i=i>>>0,n||B(i,2,this.length),this[i]<<8|this[i+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(i,n){return i=i>>>0,n||B(i,4,this.length),(this[i]|this[i+1]<<8|this[i+2]<<16)+this[i+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(i,n){return i=i>>>0,n||B(i,4,this.length),this[i]*16777216+(this[i+1]<<16|this[i+2]<<8|this[i+3])},u.prototype.readBigUInt64LE=W(function(i){i=i>>>0,de(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Se(i,this.length-8);const p=n+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24,f=this[++i]+this[++i]*2**8+this[++i]*2**16+h*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=W(function(i){i=i>>>0,de(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Se(i,this.length-8);const p=n*2**24+this[++i]*2**16+this[++i]*2**8+this[++i],f=this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h;return(BigInt(p)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let p=this[i],f=1,m=0;for(;++m<n&&(f*=256);)p+=this[i+m]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*n)),p},u.prototype.readIntBE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let p=n,f=1,m=this[i+--p];for(;p>0&&(f*=256);)m+=this[i+--p]*f;return f*=128,m>=f&&(m-=Math.pow(2,8*n)),m},u.prototype.readInt8=function(i,n){return i=i>>>0,n||B(i,1,this.length),this[i]&128?(255-this[i]+1)*-1:this[i]},u.prototype.readInt16LE=function(i,n){i=i>>>0,n||B(i,2,this.length);const h=this[i]|this[i+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(i,n){i=i>>>0,n||B(i,2,this.length);const h=this[i+1]|this[i]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(i,n){return i=i>>>0,n||B(i,4,this.length),this[i]|this[i+1]<<8|this[i+2]<<16|this[i+3]<<24},u.prototype.readInt32BE=function(i,n){return i=i>>>0,n||B(i,4,this.length),this[i]<<24|this[i+1]<<16|this[i+2]<<8|this[i+3]},u.prototype.readBigInt64LE=W(function(i){i=i>>>0,de(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Se(i,this.length-8);const p=this[i+4]+this[i+5]*2**8+this[i+6]*2**16+(h<<24);return(BigInt(p)<<BigInt(32))+BigInt(n+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24)}),u.prototype.readBigInt64BE=W(function(i){i=i>>>0,de(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Se(i,this.length-8);const p=(n<<24)+this[++i]*2**16+this[++i]*2**8+this[++i];return(BigInt(p)<<BigInt(32))+BigInt(this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h)}),u.prototype.readFloatLE=function(i,n){return i=i>>>0,n||B(i,4,this.length),t.read(this,i,!0,23,4)},u.prototype.readFloatBE=function(i,n){return i=i>>>0,n||B(i,4,this.length),t.read(this,i,!1,23,4)},u.prototype.readDoubleLE=function(i,n){return i=i>>>0,n||B(i,8,this.length),t.read(this,i,!0,52,8)},u.prototype.readDoubleBE=function(i,n){return i=i>>>0,n||B(i,8,this.length),t.read(this,i,!1,52,8)};function U(c,i,n,h,p,f){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(i>p||i<f)throw new RangeError('"value" argument is out of bounds');if(n+h>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(i,n,h,p){if(i=+i,n=n>>>0,h=h>>>0,!p){const $=Math.pow(2,8*h)-1;U(this,i,n,h,$,0)}let f=1,m=0;for(this[n]=i&255;++m<h&&(f*=256);)this[n+m]=i/f&255;return n+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(i,n,h,p){if(i=+i,n=n>>>0,h=h>>>0,!p){const $=Math.pow(2,8*h)-1;U(this,i,n,h,$,0)}let f=h-1,m=1;for(this[n+f]=i&255;--f>=0&&(m*=256);)this[n+f]=i/m&255;return n+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,1,255,0),this[n]=i&255,n+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,2,65535,0),this[n]=i&255,this[n+1]=i>>>8,n+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,2,65535,0),this[n]=i>>>8,this[n+1]=i&255,n+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,4,4294967295,0),this[n+3]=i>>>24,this[n+2]=i>>>16,this[n+1]=i>>>8,this[n]=i&255,n+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,4,4294967295,0),this[n]=i>>>24,this[n+1]=i>>>16,this[n+2]=i>>>8,this[n+3]=i&255,n+4};function qt(c,i,n,h,p){Yt(i,h,p,c,n,7);let f=Number(i&BigInt(4294967295));c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,n}function Vt(c,i,n,h,p){Yt(i,h,p,c,n,7);let f=Number(i&BigInt(4294967295));c[n+7]=f,f=f>>8,c[n+6]=f,f=f>>8,c[n+5]=f,f=f>>8,c[n+4]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[n+3]=m,m=m>>8,c[n+2]=m,m=m>>8,c[n+1]=m,m=m>>8,c[n]=m,n+8}u.prototype.writeBigUInt64LE=W(function(i,n=0){return qt(this,i,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=W(function(i,n=0){return Vt(this,i,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(i,n,h,p){if(i=+i,n=n>>>0,!p){const S=Math.pow(2,8*h-1);U(this,i,n,h,S-1,-S)}let f=0,m=1,$=0;for(this[n]=i&255;++f<h&&(m*=256);)i<0&&$===0&&this[n+f-1]!==0&&($=1),this[n+f]=(i/m>>0)-$&255;return n+h},u.prototype.writeIntBE=function(i,n,h,p){if(i=+i,n=n>>>0,!p){const S=Math.pow(2,8*h-1);U(this,i,n,h,S-1,-S)}let f=h-1,m=1,$=0;for(this[n+f]=i&255;--f>=0&&(m*=256);)i<0&&$===0&&this[n+f+1]!==0&&($=1),this[n+f]=(i/m>>0)-$&255;return n+h},u.prototype.writeInt8=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,1,127,-128),i<0&&(i=255+i+1),this[n]=i&255,n+1},u.prototype.writeInt16LE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,2,32767,-32768),this[n]=i&255,this[n+1]=i>>>8,n+2},u.prototype.writeInt16BE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,2,32767,-32768),this[n]=i>>>8,this[n+1]=i&255,n+2},u.prototype.writeInt32LE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,4,2147483647,-2147483648),this[n]=i&255,this[n+1]=i>>>8,this[n+2]=i>>>16,this[n+3]=i>>>24,n+4},u.prototype.writeInt32BE=function(i,n,h){return i=+i,n=n>>>0,h||U(this,i,n,4,2147483647,-2147483648),i<0&&(i=4294967295+i+1),this[n]=i>>>24,this[n+1]=i>>>16,this[n+2]=i>>>8,this[n+3]=i&255,n+4},u.prototype.writeBigInt64LE=W(function(i,n=0){return qt(this,i,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=W(function(i,n=0){return Vt(this,i,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Wt(c,i,n,h,p,f){if(n+h>c.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Gt(c,i,n,h,p){return i=+i,n=n>>>0,p||Wt(c,i,n,4),t.write(c,i,n,h,23,4),n+4}u.prototype.writeFloatLE=function(i,n,h){return Gt(this,i,n,!0,h)},u.prototype.writeFloatBE=function(i,n,h){return Gt(this,i,n,!1,h)};function Jt(c,i,n,h,p){return i=+i,n=n>>>0,p||Wt(c,i,n,8),t.write(c,i,n,h,52,8),n+8}u.prototype.writeDoubleLE=function(i,n,h){return Jt(this,i,n,!0,h)},u.prototype.writeDoubleBE=function(i,n,h){return Jt(this,i,n,!1,h)},u.prototype.copy=function(i,n,h,p){if(!u.isBuffer(i))throw new TypeError("argument should be a Buffer");if(h||(h=0),!p&&p!==0&&(p=this.length),n>=i.length&&(n=i.length),n||(n=0),p>0&&p<h&&(p=h),p===h||i.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),i.length-n<p-h&&(p=i.length-n+h);const f=p-h;return this===i&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,h,p):Uint8Array.prototype.set.call(i,this.subarray(h,p),n),f},u.prototype.fill=function(i,n,h,p){if(typeof i=="string"){if(typeof n=="string"?(p=n,n=0,h=this.length):typeof h=="string"&&(p=h,h=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!u.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(i.length===1){const m=i.charCodeAt(0);(p==="utf8"&&m<128||p==="latin1")&&(i=m)}}else typeof i=="number"?i=i&255:typeof i=="boolean"&&(i=Number(i));if(n<0||this.length<n||this.length<h)throw new RangeError("Out of range index");if(h<=n)return this;n=n>>>0,h=h===void 0?this.length:h>>>0,i||(i=0);let f;if(typeof i=="number")for(f=n;f<h;++f)this[f]=i;else{const m=u.isBuffer(i)?i:u.from(i,p),$=m.length;if($===0)throw new TypeError('The value "'+i+'" is invalid for argument "value"');for(f=0;f<h-n;++f)this[f+n]=m[f%$]}return this};const ue={};function bt(c,i,n){ue[c]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:i.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}bt("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),bt("ERR_INVALID_ARG_TYPE",function(c,i){return`The "${c}" argument must be of type number. Received type ${typeof i}`},TypeError),bt("ERR_OUT_OF_RANGE",function(c,i,n){let h=`The value of "${c}" is out of range.`,p=n;return Number.isInteger(n)&&Math.abs(n)>2**32?p=Kt(String(n)):typeof n=="bigint"&&(p=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(p=Kt(p)),p+="n"),h+=` It must be ${i}. Received ${p}`,h},RangeError);function Kt(c){let i="",n=c.length;const h=c[0]==="-"?1:0;for(;n>=h+4;n-=3)i=`_${c.slice(n-3,n)}${i}`;return`${c.slice(0,n)}${i}`}function _i(c,i,n){de(i,"offset"),(c[i]===void 0||c[i+n]===void 0)&&Se(i,c.length-(n+1))}function Yt(c,i,n,h,p,f){if(c>n||c<i){const m=typeof i=="bigint"?"n":"";let $;throw f>3?i===0||i===BigInt(0)?$=`>= 0${m} and < 2${m} ** ${(f+1)*8}${m}`:$=`>= -(2${m} ** ${(f+1)*8-1}${m}) and < 2 ** ${(f+1)*8-1}${m}`:$=`>= ${i}${m} and <= ${n}${m}`,new ue.ERR_OUT_OF_RANGE("value",$,c)}_i(h,p,f)}function de(c,i){if(typeof c!="number")throw new ue.ERR_INVALID_ARG_TYPE(i,"number",c)}function Se(c,i,n){throw Math.floor(c)!==c?(de(c,n),new ue.ERR_OUT_OF_RANGE(n||"offset","an integer",c)):i<0?new ue.ERR_BUFFER_OUT_OF_BOUNDS:new ue.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${i}`,c)}const wi=/[^+/0-9A-Za-z-_]/g;function vi(c){if(c=c.split("=")[0],c=c.trim().replace(wi,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function yt(c,i){i=i||1/0;let n;const h=c.length;let p=null;const f=[];for(let m=0;m<h;++m){if(n=c.charCodeAt(m),n>55295&&n<57344){if(!p){if(n>56319){(i-=3)>-1&&f.push(239,191,189);continue}else if(m+1===h){(i-=3)>-1&&f.push(239,191,189);continue}p=n;continue}if(n<56320){(i-=3)>-1&&f.push(239,191,189),p=n;continue}n=(p-55296<<10|n-56320)+65536}else p&&(i-=3)>-1&&f.push(239,191,189);if(p=null,n<128){if((i-=1)<0)break;f.push(n)}else if(n<2048){if((i-=2)<0)break;f.push(n>>6|192,n&63|128)}else if(n<65536){if((i-=3)<0)break;f.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((i-=4)<0)break;f.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return f}function xi(c){const i=[];for(let n=0;n<c.length;++n)i.push(c.charCodeAt(n)&255);return i}function $i(c,i){let n,h,p;const f=[];for(let m=0;m<c.length&&!((i-=2)<0);++m)n=c.charCodeAt(m),h=n>>8,p=n%256,f.push(p),f.push(h);return f}function Qt(c){return e.toByteArray(vi(c))}function Ge(c,i,n,h){let p;for(p=0;p<h&&!(p+n>=i.length||p>=c.length);++p)i[p+n]=c[p];return p}function H(c,i){return c instanceof i||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===i.name}function _t(c){return c!==c}const Ei=function(){const c="0123456789abcdef",i=new Array(256);for(let n=0;n<16;++n){const h=n*16;for(let p=0;p<16;++p)i[h+p]=c[n]+c[p]}return i}();function W(c){return typeof BigInt>"u"?Ai:c}function Ai(){throw new Error("BigInt not supported")}})(jt);var Es=Object.defineProperty,As=Object.getOwnPropertyDescriptor,oi=(r,e,t,s)=>{for(var o=s>1?void 0:s?As(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Es(e,t,o),o};let ot=class extends P{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return x`
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
    `}};ot.styles=O`
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
  `;oi([v({type:Object})],ot.prototype,"track",2);ot=oi([T("track-card")],ot);var Ps=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,pt=(r,e,t,s)=>{for(var o=s>1?void 0:s?Ss(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Ps(e,t,o),o};let we=class extends P{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(r){const e=`https://api.spotify.com/v1/tracks/${r}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const s=await t.json();return this.currentTracks=[...this.currentTracks,s],s}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+jt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const s=await t.json();this.accessToken=s.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var r;super.connectedCallback(),(r=this.comment)!=null&&r.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(r){try{this.currentTracks=[];const e=r.map(s=>this.findSong(s)),t=await Promise.all(e);this.currentTracks=t.filter(s=>s!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return x`
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
          ${this.currentTracks.map(s=>x`
              <div class="track-info">
                <img
                  src="${s.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${s.name}</p>
                  <p class="track-artist">
                    ${s.artists.map(o=>o.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};we.styles=O`
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
  `;pt([v({type:Object})],we.prototype,"comment",2);pt([v({type:String})],we.prototype,"accessToken",2);pt([k()],we.prototype,"currentTracks",2);we=pt([T("comment-card")],we);var Cs=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,z=(r,e,t,s)=>{for(var o=s>1?void 0:s?Ts(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Cs(e,t,o),o};let F=class extends P{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post",this.addEventListener("track-selected",r=>{const e=r;this._selectTrack(e.detail.track)})}_selectTrack(r){const e=this.selectedTracks.findIndex(t=>t.id===r.id);e>-1?this.selectedTracks=[...this.selectedTracks.slice(0,e),...this.selectedTracks.slice(e+1)]:this.selectedTracks=[...this.selectedTracks,r]}_calculateTimeFromDate(){var o;const r=(o=this.post)!=null&&o.postTime?new Date(this.post.postTime):void 0;if(!r)return console.error("Posted time is undefined"),"Post time cannot be found.";let s=(new Date().getTime()-r.getTime())/(1e3*60*60);return s=Math.round(s),s<1?"Less than an hour ago.":s>23?`${s%24} days ago`:`${s} hours ago`}async _recommendTracks(r){var d;r.preventDefault(),this.submissionSuccess=null;const e=r.target,t=new FormData(e),s="http://localhost:3000";let o=t.get("input-comment");const a=this.selectedTracks.map(g=>g.id),l=`${s}/posts/${(d=this.post)==null?void 0:d._id}`,u={userName:"aidan",commentTime:new Date,commentMessage:o,SongIDs:a};try{if((await fetch(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).ok)console.log("Comment successfully added"),this._clearTopTracks(),this._clearSelectedTracks(),this.submissionSuccess=!0,e.reset(),this._handleCommentAdded();else throw new Error("Failed to post comment")}catch(g){console.error("Error:",g),this.submissionSuccess=!1}}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),this.searchSpotify()}_clearTopTracks(){this.topTracks=[]}_clearSelectedTracks(){this.selectedTracks=[]}async fetchTopTracks(r){const e=await fetch(`https://api.spotify.com/v1/artists/${r}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?this.topTracks=t.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}connectedCallback(){var r;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((r=this.post)==null?void 0:r.comments)||[])}async _handleCommentAdded(){var e;console.log("Comment Created, Now Refreshing Component");const r="http://localhost:3000";if(console.log("SERVER URL FROM COMMENT ADDED: ",r),!((e=this.post)!=null&&e._id)){console.error("Post ID is undefined.");return}try{const t=await fetch(`${r}/comments/${this.post._id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch comments");const s=await t.json();this.getPostComments=[...s]}catch(t){console.error("Error fetching comments:",t)}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+jt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const s=await t.json();this.accessToken=s.access_token}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const r=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(r,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();t.tracks.items.length>0?this.topTracks=t.tracks.items:(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t;const r=this._calculateTimeFromDate();return x`
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
                              ${this.topTracks.slice(0,5).map(s=>x`<track-card
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
                        ${this.selectedTracks.map(s=>x`<track-card .track=${s}></track-card>`)}
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
  `;z([v({type:Object})],F.prototype,"post",2);z([k()],F.prototype,"getPostComments",2);z([k()],F.prototype,"expanded",2);z([k()],F.prototype,"submissionSuccess",2);z([v()],F.prototype,"expandedText",2);z([v({type:String})],F.prototype,"requestedSearchQuery",2);z([v({type:String})],F.prototype,"accessToken",2);z([v()],F.prototype,"topTracks",2);z([v()],F.prototype,"selectedTracks",2);z([k()],F.prototype,"expandedClass",2);F=z([T("feed-post")],F);var Bs=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,ai=(r,e,t,s)=>{for(var o=s>1?void 0:s?Is(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Bs(e,t,o),o};let at=class extends P{constructor(){super(...arguments),this.posts=[]}render(){return x`
      <div class="posts-container">
        ${this.posts.map(r=>x` <feed-post .post=${r}></feed-post>`)}
      </div>
    `}};at.styles=O``;ai([v({type:Array})],at.prototype,"posts",2);at=ai([T("feed-post-list")],at);var Os=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,ft=(r,e,t,s)=>{for(var o=s>1?void 0:s?ks(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Os(e,t,o),o};let ve=class extends P{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(r){r.preventDefault(),this.submissionSuccess=!1;const e=r.target;let s=new FormData(e).get("input-message");s?(console.log("submitting post!"),this._sendPostRequest(s,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(r,e){const t={userid:"65caf83fcdc541534288d60b",userName:"aidan",postTime:new Date,postMessage:r,comments:[]},s="http://localhost:3000";console.log("new post: ",t);try{const o=`${s}/posts`;if((await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(o){console.error("Error: ",o),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const r=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",r),this.dispatchEvent(r)}render(){return x`
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
    `}};ve.styles=O`
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
  `;ft([k()],ve.prototype,"expanded",2);ft([k()],ve.prototype,"submissionSuccess",2);ft([k()],ve.prototype,"errorMessage",2);ve=ft([T("create-post")],ve);var Us=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,ci=(r,e,t,s)=>{for(var o=s>1?void 0:s?Rs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Us(e,t,o),o};let ct=class extends P{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchData()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchData()}async _fetchData(){console.log("fetching posts!");const r="http://localhost:3000";try{const e=await fetch(`${r}/posts`);if(e.ok){const t=await e.json();this.posts=t,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",e.status)}catch(e){console.error("Error fetching posts:",e)}}render(){return x`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <create-post></create-post>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};ct.styles=O`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;ci([k()],ct.prototype,"posts",2);ct=ci([T("main-feed")],ct);var Fs=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,qe=(r,e,t,s)=>{for(var o=s>1?void 0:s?Ds(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Fs(e,t,o),o};let ce=class extends Ut{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}render(){return x`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `}};ce.styles=O`
    .feed-page {
      display: flex;
      justify-content: center;
    }
  `;qe([v({attribute:!1})],ce.prototype,"location",2);qe([v({reflect:!0})],ce.prototype,"userid",1);qe([v({reflect:!0})],ce.prototype,"edit",1);qe([v()],ce.prototype,"profile",1);ce=qe([T("home-page")],ce);var Ls=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,js=(r,e,t,s)=>{for(var o=s>1?void 0:s?Ms(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(s?l(e,t,o):l(o))||o);return s&&o&&Ls(e,t,o),o};let Ns=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Sr=class extends Hr{constructor(){super(an)}render(){return x`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Ns}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("MTVAPPElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Sr=js([T("mtv-app")],Sr);
