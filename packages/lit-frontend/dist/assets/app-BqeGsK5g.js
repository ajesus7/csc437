(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=globalThis,$t=ze.ShadowRoot&&(ze.ShadyCSS===void 0||ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),Wt=new WeakMap;let xr=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($t&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=Wt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Wt.set(t,e))}return e}toString(){return this.cssText}};const vi=n=>new xr(typeof n=="string"?n:n+"",void 0,At),U=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((o,s,a)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[a+1],n[0]);return new xr(t,n,At)},Ei=(n,e)=>{if($t)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=ze.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,n.appendChild(o)}},Gt=$t?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return vi(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xi,defineProperty:$i,getOwnPropertyDescriptor:Ai,getOwnPropertyNames:Pi,getOwnPropertySymbols:Bi,getPrototypeOf:Si}=Object,Y=globalThis,Kt=Y.trustedTypes,Ci=Kt?Kt.emptyScript:"",dt=Y.reactiveElementPolyfillSupport,$e=(n,e)=>n,Ge={toAttribute(n,e){switch(e){case Boolean:n=n?Ci:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Pt=(n,e)=>!xi(n,e),Jt={attribute:!0,type:String,converter:Ge,reflect:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Y.litPropertyMetadata??(Y.litPropertyMetadata=new WeakMap);class ue extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Jt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&$i(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:a}=Ai(this.prototype,e)??{get(){return this[t]},set(c){this[t]=c}};return{get(){return s==null?void 0:s.call(this)},set(c){const u=s==null?void 0:s.call(this);a.call(this,c),this.requestUpdate(e,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Jt}static _$Ei(){if(this.hasOwnProperty($e("elementProperties")))return;const e=Si(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($e("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($e("properties"))){const t=this.properties,o=[...Pi(t),...Bi(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(Gt(s))}else e!==void 0&&t.push(Gt(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ei(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var a;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const c=(((a=o.converter)==null?void 0:a.toAttribute)!==void 0?o.converter:Ge).toAttribute(t,o.type);this._$Em=e,c==null?this.removeAttribute(s):this.setAttribute(s,c),this._$Em=null}}_$AK(e,t){var a;const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const c=o.getPropertyOptions(s),u=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:Ge;this._$Em=s,this[s]=u.fromAttribute(t,c.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Pt)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,c]of this._$Ep)this[a]=c;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,c]of s)c.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],c)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[$e("elementProperties")]=new Map,ue[$e("finalized")]=new Map,dt==null||dt({ReactiveElement:ue}),(Y.reactiveElementVersions??(Y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=globalThis,Ke=Ae.trustedTypes,Yt=Ke?Ke.createPolicy("lit-html",{createHTML:n=>n}):void 0,$r="$lit$",K=`lit$${(Math.random()+"").slice(9)}$`,Ar="?"+K,Ii=`<${Ar}>`,te=document,Be=()=>te.createComment(""),Se=n=>n===null||typeof n!="object"&&typeof n!="function",Pr=Array.isArray,Oi=n=>Pr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ft=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,Xt=/>/g,Z=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zt=/'/g,er=/"/g,Br=/^(?:script|style|textarea|title)$/i,Ui=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),$=Ui(1),de=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),tr=new WeakMap,ee=te.createTreeWalker(te,129);function Sr(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yt!==void 0?Yt.createHTML(e):e}const Ti=(n,e)=>{const t=n.length-1,o=[];let s,a=e===2?"<svg>":"",c=xe;for(let u=0;u<t;u++){const d=n[u];let g,_,y=-1,w=0;for(;w<d.length&&(c.lastIndex=w,_=c.exec(d),_!==null);)w=c.lastIndex,c===xe?_[1]==="!--"?c=Qt:_[1]!==void 0?c=Xt:_[2]!==void 0?(Br.test(_[2])&&(s=RegExp("</"+_[2],"g")),c=Z):_[3]!==void 0&&(c=Z):c===Z?_[0]===">"?(c=s??xe,y=-1):_[1]===void 0?y=-2:(y=c.lastIndex-_[2].length,g=_[1],c=_[3]===void 0?Z:_[3]==='"'?er:Zt):c===er||c===Zt?c=Z:c===Qt||c===Xt?c=xe:(c=Z,s=void 0);const b=c===Z&&n[u+1].startsWith("/>")?" ":"";a+=c===xe?d+Ii:y>=0?(o.push(g),d.slice(0,y)+$r+d.slice(y)+K+b):d+K+(y===-2?u:b)}return[Sr(n,a+(n[t]||"<?>")+(e===2?"</svg>":"")),o]};class Ce{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let a=0,c=0;const u=e.length-1,d=this.parts,[g,_]=Ti(e,t);if(this.el=Ce.createElement(g,o),ee.currentNode=this.el.content,t===2){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(s=ee.nextNode())!==null&&d.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const y of s.getAttributeNames())if(y.endsWith($r)){const w=_[c++],b=s.getAttribute(y).split(K),R=/([.?@])?(.*)/.exec(w);d.push({type:1,index:a,name:R[2],strings:b,ctor:R[1]==="."?Fi:R[1]==="?"?Di:R[1]==="@"?Li:it}),s.removeAttribute(y)}else y.startsWith(K)&&(d.push({type:6,index:a}),s.removeAttribute(y));if(Br.test(s.tagName)){const y=s.textContent.split(K),w=y.length-1;if(w>0){s.textContent=Ke?Ke.emptyScript:"";for(let b=0;b<w;b++)s.append(y[b],Be()),ee.nextNode(),d.push({type:2,index:++a});s.append(y[w],Be())}}}else if(s.nodeType===8)if(s.data===Ar)d.push({type:2,index:a});else{let y=-1;for(;(y=s.data.indexOf(K,y+1))!==-1;)d.push({type:7,index:a}),y+=K.length-1}a++}}static createElement(e,t){const o=te.createElement("template");return o.innerHTML=e,o}}function fe(n,e,t=n,o){var c,u;if(e===de)return e;let s=o!==void 0?(c=t._$Co)==null?void 0:c[o]:t._$Cl;const a=Se(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((u=s==null?void 0:s._$AO)==null||u.call(s,!1),a===void 0?s=void 0:(s=new a(n),s._$AT(n,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=fe(n,s._$AS(n,e.values),s,o)),e}class Ri{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=((e==null?void 0:e.creationScope)??te).importNode(t,!0);ee.currentNode=s;let a=ee.nextNode(),c=0,u=0,d=o[0];for(;d!==void 0;){if(c===d.index){let g;d.type===2?g=new De(a,a.nextSibling,this,e):d.type===1?g=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(g=new Mi(a,this,e)),this._$AV.push(g),d=o[++u]}c!==(d==null?void 0:d.index)&&(a=ee.nextNode(),c++)}return ee.currentNode=te,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class De{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fe(this,e,t),Se(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==de&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==I&&Se(this._$AH)?this._$AA.nextSibling.data=e:this.T(te.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ce.createElement(Sr(o.h,o.h[0]),this.options)),o);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const c=new Ri(s,this),u=c.u(this.options);c.p(t),this.T(u),this._$AH=c}}_$AC(e){let t=tr.get(e.strings);return t===void 0&&tr.set(e.strings,t=new Ce(e)),t}k(e){Pr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const a of e)s===t.length?t.push(o=new De(this.S(Be()),this.S(Be()),this,this.options)):o=t[s],o._$AI(a),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,a){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(e,t=this,o,s){const a=this.strings;let c=!1;if(a===void 0)e=fe(this,e,t,0),c=!Se(e)||e!==this._$AH&&e!==de,c&&(this._$AH=e);else{const u=e;let d,g;for(e=a[0],d=0;d<a.length-1;d++)g=fe(this,u[o+d],t,d),g===de&&(g=this._$AH[d]),c||(c=!Se(g)||g!==this._$AH[d]),g===I?e=I:e!==I&&(e+=(g??"")+a[d+1]),this._$AH[d]=g}c&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Fi extends it{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Di extends it{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class Li extends it{constructor(e,t,o,s,a){super(e,t,o,s,a),this.type=5}_$AI(e,t=this){if((e=fe(this,e,t,0)??I)===de)return;const o=this._$AH,s=e===I&&o!==I||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==I&&(o===I||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Mi{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}}const mt=Ae.litHtmlPolyfillSupport;mt==null||mt(Ce,De),(Ae.litHtmlVersions??(Ae.litHtmlVersions=[])).push("3.1.2");const Ni=(n,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let s=o._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;o._$litPart$=s=new De(e.insertBefore(Be(),a),a,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ni(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return de}};var Er;S._$litElement$=!0,S.finalized=!0,(Er=globalThis.litElementHydrateSupport)==null||Er.call(globalThis,{LitElement:S});const gt=globalThis.litElementPolyfillSupport;gt==null||gt({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji={attribute:!0,type:String,converter:Ge,reflect:!1,hasChanged:Pt},ki=(n=ji,e,t)=>{const{kind:o,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(t.name,n),o==="accessor"){const{name:c}=t;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(c,d,n)},init(u){return u!==void 0&&this.P(c,void 0,n),u}}}if(o==="setter"){const{name:c}=t;return function(u){const d=this[c];e.call(this,u),this.requestUpdate(c,d,n)}}throw Error("Unsupported decorator location: "+o)};function E(n){return(e,t)=>typeof t=="object"?ki(n,e,t):((o,s,a)=>{const c=s.hasOwnProperty(a);return s.constructor.createProperty(a,c?{...o,wrapped:!0}:o),c?Object.getOwnPropertyDescriptor(s,a):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(n){return E({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Cr=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rr=class{constructor(e,t,o,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,c)),this.unsubscribe=c},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Cr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zi=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},ir=class extends Hi{constructor(e,t,o){var s,a;super(t.context!==void 0?t.initialValue:o),this.onContextRequest=c=>{const u=c.composedPath()[0];c.context===this.context&&u!==this.host&&(c.stopPropagation(),this.addCallback(c.callback,u,c.subscribe))},this.onProviderRequest=c=>{const u=c.composedPath()[0];if(c.context!==this.context||u===this.host)return;const d=new Set;for(const[g,{consumerHost:_}]of this.subscriptions)d.has(g)||(d.add(g),_.dispatchEvent(new Cr(this.context,g,!0)));c.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(s=this.host).addController)==null||a.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new zi(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ir({context:n}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){o.set(this,new ir(this,{context:n}))}),{get(){return e.get.call(this)},set(s){var a;return(a=o.get(this))==null||a.setValue(s),e.set.call(this,s)},init(s){var a;return(a=o.get(this))==null||a.setValue(s),s}};{e.constructor.addInitializer(c=>{o.set(c,new ir(c,{context:n}))});const s=Object.getOwnPropertyDescriptor(e,t);let a;if(s===void 0){const c=new WeakMap;a={get:function(){return c.get(this)},set:function(u){o.get(this).setValue(u),c.set(this,u)},configurable:!0,enumerable:!0}}else{const c=s.set;a={...s,set:function(u){o.get(this).setValue(u),c==null||c.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Or({context:n,subscribe:e}){return(t,o)=>{typeof o=="object"?o.addInitializer(function(){new rr(this,{context:n,callback:s=>{this[o.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new rr(s,{context:n,callback:a=>{s[o]=a},subscribe:e})})}}let qi=class extends S{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",o=>{const s=o.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),o=t;typeof(o==null?void 0:o.then)=="function"?o.then(s=>{const a=s(this.model);this.model=a}):this.model=t}}},Vi=class extends S{dispatchMessage(e,t=this){const o=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(o)}};class Wi{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:o}=t,s=this._handlers.get(o);return s?s(t,e):e}}function Gi(n){return e=>Object.assign({},e,n)}function Ki(n){return n}const Ji="http://localhost:3000",Yi="/api",wt="JWT_AUTH_TOKEN",G=class G{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new G;return console.log("Deauthenticating",e,G._theUser),e===G._theUser&&(localStorage.removeItem(wt),G._theUser=t),t}};G._theUser=new G;let M=G;class Ie extends M{constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(s).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),c=JSON.parse(a);console.log("Token payload",c),this.token=e,this.authenticated=!0,this.username=c.username,this.signOut=t}static authenticate(e,t){return M._theUser=new Ie(e,t),localStorage.setItem(wt,e),M._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(wt);return t?Ie.authenticate(t,e):M._theUser}}class Bt{constructor(e){this._base=Yi,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=M._theUser.authenticated,o={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${M._theUser.token}`};return e?{...o,...a}:a}else return e?{...o}:void 0}_url(e){return`${Ji}${this._base}${e}`}}class nr extends Bt{constructor(e){super(Object.fromEntries(e))}}class Ur extends Bt{constructor(){super(void 0)}}var Qi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,Tr=(n,e,t,o)=>{for(var s=o>1?void 0:o?Xi(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&Qi(e,t,s),s};const Rr="MTVModel",sr={user:new M},Zi=()=>new Wi,Fr=Gi,Dr=Ki;class Lr extends qi{constructor(e){super(e,sr),this.model=sr}}Tr([Ir({context:Rr}),q()],Lr.prototype,"model",2);class St extends Vi{getFromModel(e){if(this._model)return this._model[e]}}Tr([Or({context:Rr,subscribe:!0}),E({attribute:!1})],St.prototype,"_model",2);const Ct=Zi(),en=Ct.update;Ct.addMessage("ProfileSelected",n=>{const{userid:e}=n;return new Ur().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Fr({profile:t}):Dr)});Ct.addMessage("ProfileSaved",n=>{const{userid:e,profile:t}=n;return new Bt(t).put(`/profiles/${e}`).then(o=>{if(o.status===200)return o.json()}).then(o=>{o&&console.log("Profile:",o)}).then(o=>o?Fr({profile:o}):Dr)});var tn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,Le=(n,e,t,o)=>{for(var s=o>1?void 0:o?rn(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&tn(e,t,s),s};let re=class extends S{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(n){const e=n.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,o)=>{const s=t[0].toUpperCase(),a=o[0].toUpperCase();return s<a?-1:s>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return $`
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
          ${this.names.map(n=>$`<slot
                ><default-card
                  title=${n[0]}
                  description=${n[1]}
                  user_id=${n[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};re.styles=U`
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
  `;Le([E({type:Array})],re.prototype,"names",2);Le([E({type:Array})],re.prototype,"namesOriginalOrder",2);Le([E({type:Array})],re.prototype,"listAttributes",2);Le([q()],re.prototype,"sort_state",2);re=Le([O("sortable-list")],re);var nn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,nt=(n,e,t,o)=>{for(var s=o>1?void 0:o?sn(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&nn(e,t,s),s};let me=class extends S{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return $`
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
          ${this.names.map(n=>$`<slot
                ><default-card
                  title=${n[0]}
                  description=${n[1]}
                  user_id=${n[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};me.styles=U`
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
  `;nt([E({type:Array})],me.prototype,"names",2);nt([E({type:Array})],me.prototype,"listAttributes",2);nt([q()],me.prototype,"sort_state",2);me=nt([O("general-list")],me);var on=Object.defineProperty,an=Object.getOwnPropertyDescriptor,It=(n,e,t,o)=>{for(var s=o>1?void 0:o?an(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&on(e,t,s),s};let Oe=class extends S{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return $`
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
    `}};Oe.styles=U`
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
  `;It([E({type:Array})],Oe.prototype,"artists",2);It([E({type:String})],Oe.prototype,"listAttributes",2);Oe=It([O("favorites-list")],Oe);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,ye=(n,e,t,o)=>{for(var s=o>1?void 0:o?cn(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&ln(e,t,s),s};let Q=class extends S{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return $`
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
    `}_handleChange(n){const e=n.target;this._toggle(e.checked)}_toggle(n){this.open=n,this._toggleClickAway(n)}_toggleClickAway(n){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};n?document.addEventListener("click",e):document.removeEventListener("click",e)}};Q.styles=U`
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
  `;ye([E({reflect:!0,type:Boolean})],Q.prototype,"open",2);ye([E()],Q.prototype,"align",2);ye([E()],Q.prototype,"profileImage",2);ye([E()],Q.prototype,"profileUserID",2);ye([E()],Q.prototype,"profileDescription",2);Q=ye([O("drop-down")],Q);var hn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,Mr=(n,e,t,o)=>{for(var s=o>1?void 0:o?un(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&hn(e,t,s),s};let Je=class extends S{constructor(){super(...arguments),this.on=!1}render(){return $`<label>
      <slot>light mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(n){const e=n.target,t=new Event(n.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};Je.styles=U`
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
  `;Mr([E({reflect:!0,type:Boolean})],Je.prototype,"on",2);Je=Mr([O("color-mode-switch")],Je);var pn=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,st=(n,e,t,o)=>{for(var s=o>1?void 0:o?dn(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&pn(e,t,s),s};let ge=class extends S{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return $`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};ge.styles=U`
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
  `;st([E()],ge.prototype,"title",2);st([E()],ge.prototype,"description",2);st([E()],ge.prototype,"user_id",2);ge=st([O("default-card")],ge);var fn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,Ot=(n,e,t,o)=>{for(var s=o>1?void 0:o?mn(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&fn(e,t,s),s};let Ue=class extends S{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return $`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};Ue.styles=U`
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
  `;Ot([E({reflect:!0,type:Boolean})],Ue.prototype,"on",2);Ot([E()],Ue.prototype,"filteredState",2);Ue=Ot([O("toggle-switch")],Ue);var gn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Ut=(n,e,t,o)=>{for(var s=o>1?void 0:o?_n(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&gn(e,t,s),s};let Te=class extends S{constructor(){super(...arguments),this.path=""}get profile(){return this.using||{}}render(){const{name:n,profileImage:e,profileDescription:t,bio:o}=this.profile;return $`
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
            <h1>${n}&apos;s Page</h1>
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
    `}};Te.styles=U`
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
  `;Ut([E()],Te.prototype,"path",2);Ut([E({attribute:!1})],Te.prototype,"using",2);Te=Ut([O("user-profile")],Te);function Ye(n){return n=n||[],Array.isArray(n)?n:[n]}function N(n){return`[Vaadin.Router] ${n}`}function yn(n){if(typeof n!="object")return String(n);const e=Object.prototype.toString.call(n).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(n)}`:e}const Qe="module",Xe="nomodule",bt=[Qe,Xe];function or(n){if(!n.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${n}": .js or .mjs expected.`))}function Nr(n){if(!n||!L(n.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=n.bundle,t=["component","redirect","bundle"];if(!ie(n.action)&&!Array.isArray(n.children)&&!ie(n.children)&&!Ze(e)&&!t.some(o=>L(n[o])))throw new Error(N(`Expected route config "${n.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(L(e))or(e);else if(bt.some(o=>o in e))bt.forEach(o=>o in e&&or(e[o]));else throw new Error(N('Expected route bundle to include either "'+Xe+'" or "'+Qe+'" keys, or both'));n.redirect&&["bundle","component"].forEach(o=>{o in n&&console.warn(N(`Route config "${n.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function ar(n){Ye(n).forEach(e=>Nr(e))}function lr(n,e){let t=document.head.querySelector('script[src="'+n+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",n),e===Qe?t.setAttribute("type",Qe):e===Xe&&t.setAttribute(Xe,""),t.async=!0),new Promise((o,s)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,o(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),s(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&o()})}function wn(n){return L(n)?lr(n):Promise.race(bt.filter(e=>e in n).map(e=>lr(n[e],e)))}function Pe(n,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${n}`,{cancelable:n==="go",detail:e}))}function Ze(n){return typeof n=="object"&&!!n}function ie(n){return typeof n=="function"}function L(n){return typeof n=="string"}function jr(n){const e=new Error(N(`Page not found (${n.pathname})`));return e.context=n,e.code=404,e}const pe=new class{};function bn(n){const e=n.port,t=n.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?n.hostname:n.host;return`${t}//${a}`}function cr(n){if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let e=n.target;const t=n.composedPath?n.composedPath():n.path||[];for(let u=0;u<t.length;u++){const d=t[u];if(d.nodeName&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||bn(e))!==window.location.origin)return;const{pathname:s,search:a,hash:c}=e;Pe("go",{pathname:s,search:a,hash:c})&&(n.preventDefault(),n&&n.type==="click"&&window.scrollTo(0,0))}const vn={activate(){window.document.addEventListener("click",cr)},inactivate(){window.document.removeEventListener("click",cr)}},En=/Trident/.test(navigator.userAgent);En&&!ie(window.PopStateEvent)&&(window.PopStateEvent=function(n,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(n,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function hr(n){if(n.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:o}=window.location;Pe("go",{pathname:e,search:t,hash:o})}const xn={activate(){window.addEventListener("popstate",hr)},inactivate(){window.removeEventListener("popstate",hr)}};var we=Wr,$n=Tt,An=Cn,Pn=zr,Bn=Vr,kr="/",Hr="./",Sn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Tt(n,e){for(var t=[],o=0,s=0,a="",c=e&&e.delimiter||kr,u=e&&e.delimiters||Hr,d=!1,g;(g=Sn.exec(n))!==null;){var _=g[0],y=g[1],w=g.index;if(a+=n.slice(s,w),s=w+_.length,y){a+=y[1],d=!0;continue}var b="",R=n[s],X=g[2],lt=g[3],be=g[4],oe=g[5];if(!d&&a.length){var ae=a.length-1;u.indexOf(a[ae])>-1&&(b=a[ae],a=a.slice(0,ae))}a&&(t.push(a),a="",d=!1);var ct=b!==""&&R!==void 0&&R!==b,H=oe==="+"||oe==="*",Ne=oe==="?"||oe==="*",ve=b||c,je=lt||be;t.push({name:X||o++,prefix:b,delimiter:ve,optional:Ne,repeat:H,partial:ct,pattern:je?In(je):"[^"+W(ve)+"]+?"})}return(a||s<n.length)&&t.push(a+n.substr(s)),t}function Cn(n,e){return zr(Tt(n,e))}function zr(n){for(var e=new Array(n.length),t=0;t<n.length;t++)typeof n[t]=="object"&&(e[t]=new RegExp("^(?:"+n[t].pattern+")$"));return function(o,s){for(var a="",c=s&&s.encode||encodeURIComponent,u=0;u<n.length;u++){var d=n[u];if(typeof d=="string"){a+=d;continue}var g=o?o[d.name]:void 0,_;if(Array.isArray(g)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(g.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var y=0;y<g.length;y++){if(_=c(g[y],d),!e[u].test(_))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');a+=(y===0?d.prefix:d.delimiter)+_}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(_=c(String(g),d),!e[u].test(_))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+_+'"');a+=d.prefix+_;continue}if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"))}return a}}function W(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function In(n){return n.replace(/([=!:$/()])/g,"\\$1")}function qr(n){return n&&n.sensitive?"":"i"}function On(n,e){if(!e)return n;var t=n.source.match(/\((?!\?)/g);if(t)for(var o=0;o<t.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return n}function Un(n,e,t){for(var o=[],s=0;s<n.length;s++)o.push(Wr(n[s],e,t).source);return new RegExp("(?:"+o.join("|")+")",qr(t))}function Tn(n,e,t){return Vr(Tt(n,t),e,t)}function Vr(n,e,t){t=t||{};for(var o=t.strict,s=t.start!==!1,a=t.end!==!1,c=W(t.delimiter||kr),u=t.delimiters||Hr,d=[].concat(t.endsWith||[]).map(W).concat("$").join("|"),g=s?"^":"",_=n.length===0,y=0;y<n.length;y++){var w=n[y];if(typeof w=="string")g+=W(w),_=y===n.length-1&&u.indexOf(w[w.length-1])>-1;else{var b=w.repeat?"(?:"+w.pattern+")(?:"+W(w.delimiter)+"(?:"+w.pattern+"))*":w.pattern;e&&e.push(w),w.optional?w.partial?g+=W(w.prefix)+"("+b+")?":g+="(?:"+W(w.prefix)+"("+b+"))?":g+=W(w.prefix)+"("+b+")"}}return a?(o||(g+="(?:"+c+")?"),g+=d==="$"?"$":"(?="+d+")"):(o||(g+="(?:"+c+"(?="+d+"))?"),_||(g+="(?="+c+"|"+d+")")),new RegExp(g,qr(t))}function Wr(n,e,t){return n instanceof RegExp?On(n,e):Array.isArray(n)?Un(n,e,t):Tn(n,e,t)}we.parse=$n;we.compile=An;we.tokensToFunction=Pn;we.tokensToRegExp=Bn;const{hasOwnProperty:Rn}=Object.prototype,vt=new Map;vt.set("|false",{keys:[],pattern:/(?:)/});function ur(n){try{return decodeURIComponent(n)}catch{return n}}function Fn(n,e,t,o,s){t=!!t;const a=`${n}|${t}`;let c=vt.get(a);if(!c){const g=[];c={keys:g,pattern:we(n,g,{end:t,strict:n===""})},vt.set(a,c)}const u=c.pattern.exec(e);if(!u)return null;const d=Object.assign({},s);for(let g=1;g<u.length;g++){const _=c.keys[g-1],y=_.name,w=u[g];(w!==void 0||!Rn.call(d,y))&&(_.repeat?d[y]=w?w.split(_.delimiter).map(ur):[]:d[y]=w&&ur(w))}return{path:u[0],keys:(o||[]).concat(c.keys),params:d}}function Gr(n,e,t,o,s){let a,c,u=0,d=n.path||"";return d.charAt(0)==="/"&&(t&&(d=d.substr(1)),t=!0),{next(g){if(n===g)return{done:!0};const _=n.__children=n.__children||n.children;if(!a&&(a=Fn(d,e,!_,o,s),a))return{done:!1,value:{route:n,keys:a.keys,params:a.params,path:a.path}};if(a&&_)for(;u<_.length;){if(!c){const w=_[u];w.parent=n;let b=a.path.length;b>0&&e.charAt(b)==="/"&&(b+=1),c=Gr(w,e.substr(b),t,a.keys,a.params)}const y=c.next(g);if(!y.done)return{done:!1,value:y.value};c=null,u++}return{done:!0}}}}function Dn(n){if(ie(n.route.action))return n.route.action(n)}function Ln(n,e){let t=e;for(;t;)if(t=t.parent,t===n)return!0;return!1}function Mn(n){let e=`Path '${n.pathname}' is not properly resolved due to an error.`;const t=(n.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Nn(n,e){const{route:t,path:o}=e;if(t&&!t.__synthetic){const s={path:o,route:t};if(!n.chain)n.chain=[];else if(t.parent){let a=n.chain.length;for(;a--&&n.chain[a].route&&n.chain[a].route!==t.parent;)n.chain.pop()}n.chain.push(s)}}class Re{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Dn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ar(e);const t=[...Ye(e)];this.root.__children=t}addRoutes(e){return ar(e),this.root.__children.push(...Ye(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,L(e)?{pathname:e}:e),o=Gr(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let a=null,c=null,u=t;function d(g,_=a.value.route,y){const w=y===null&&a.value.route;return a=c||o.next(w),c=null,!g&&(a.done||!Ln(_,a.value.route))?(c=a,Promise.resolve(pe)):a.done?Promise.reject(jr(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),Nn(u,a.value),Promise.resolve(s(u)).then(b=>b!=null&&b!==pe?(u.result=b.result||b,u):d(g,_,b)))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(g=>{const _=Mn(u);if(g?console.warn(_):g=new Error(_),g.context=g.context||u,g instanceof DOMException||(g.code=g.code||500),this.errorHandler)return u.result=this.errorHandler(g),u;throw g})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,o=this.constructor.__createUrl(e,t).href;if(o.slice(0,t.length)===t)return o.slice(t.length)}}Re.pathToRegexp=we;const{pathToRegexp:pr}=Re,dr=new Map;function Kr(n,e,t){const o=e.name||e.component;if(o&&(n.has(o)?n.get(o).push(e):n.set(o,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];a.parent=e,Kr(n,a,a.__children||a.children)}}function fr(n,e){const t=n.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function mr(n){let e=n.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function jn(n,e={}){if(!(n instanceof Re))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(o,s)=>{let a=fr(t,o);if(!a&&(t.clear(),Kr(t,n.root,n.root.__children),a=fr(t,o),!a))throw new Error(`Route "${o}" not found`);let c=dr.get(a.fullPath);if(!c){let d=mr(a),g=a.parent;for(;g;){const b=mr(g);b&&(d=b.replace(/\/$/,"")+"/"+d.replace(/^\//,"")),g=g.parent}const _=pr.parse(d),y=pr.tokensToFunction(_),w=Object.create(null);for(let b=0;b<_.length;b++)L(_[b])||(w[_[b].name]=!0);c={toPath:y,keys:w},dr.set(d,c),a.fullPath=d}let u=c.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const d={},g=Object.keys(s);for(let y=0;y<g.length;y++){const w=g[y];c.keys[w]||(d[w]=s[w])}const _=e.stringifyQueryParams(d);_&&(u+=_.charAt(0)==="?"?_:`?${_}`)}return u}}let gr=[];function kn(n){gr.forEach(e=>e.inactivate()),n.forEach(e=>e.activate()),gr=n}const Hn=n=>{const e=getComputedStyle(n).getPropertyValue("animation-name");return e&&e!=="none"},zn=(n,e)=>{const t=()=>{n.removeEventListener("animationend",t),e()};n.addEventListener("animationend",t)};function _r(n,e){return n.classList.add(e),new Promise(t=>{if(Hn(n)){const o=n.getBoundingClientRect(),s=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;n.setAttribute("style",`position: absolute; ${s}`),zn(n,()=>{n.classList.remove(e),n.removeAttribute("style"),t()})}else n.classList.remove(e),t()})}const qn=256;function _t(n){return n!=null}function Vn(n){const e=Object.assign({},n);return delete e.next,e}function D({pathname:n="",search:e="",hash:t="",chain:o=[],params:s={},redirectFrom:a,resolver:c},u){const d=o.map(g=>g.route);return{baseUrl:c&&c.baseUrl||"",pathname:n,search:e,hash:t,routes:d,route:u||d.length&&d[d.length-1]||null,params:s,redirectFrom:a,getUrl:(g={})=>Ve(J.pathToRegexp.compile(Jr(d))(Object.assign({},s,g)),c)}}function yr(n,e){const t=Object.assign({},n.params);return{redirect:{pathname:e,from:n.pathname,params:t}}}function Wn(n,e){e.location=D(n);const t=n.chain.map(o=>o.route).indexOf(n.route);return n.chain[t].element=e,e}function qe(n,e,t){if(ie(n))return n.apply(t,e)}function wr(n,e,t){return o=>{if(o&&(o.cancel||o.redirect))return o;if(t)return qe(t[n],e,t)}}function Gn(n,e){if(!Array.isArray(n)&&!Ze(n))throw new Error(N(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${n}`));e.__children=[];const t=Ye(n);for(let o=0;o<t.length;o++)Nr(t[o]),e.__children.push(t[o])}function He(n){if(n&&n.length){const e=n[0].parentNode;for(let t=0;t<n.length;t++)e.removeChild(n[t])}}function Ve(n,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(n.replace(/^\//,""),t).pathname:n}function Jr(n){return n.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class J extends Re{constructor(e,t){const o=document.head.querySelector("base"),s=o&&o.getAttribute("href");super([],Object.assign({baseUrl:s&&Re.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=c=>this.__resolveRoute(c);const a=J.NavigationTrigger;J.setTriggers.apply(J,Object.keys(a).map(c=>a[c])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=D({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let o=Promise.resolve();ie(t.children)&&(o=o.then(()=>t.children(Vn(e))).then(a=>{!_t(a)&&!ie(t.children)&&(a=t.children),Gn(a,t)}));const s={redirect:a=>yr(e,a),component:a=>{const c=document.createElement(a);return this.__createdByRouter.set(c,!0),c}};return o.then(()=>{if(this.__isLatestRender(e))return qe(t.action,[e,s],t)}).then(a=>{if(_t(a)&&(a instanceof HTMLElement||a.redirect||a===pe))return a;if(L(t.redirect))return s.redirect(t.redirect);if(t.bundle)return wn(t.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(_t(a))return a;if(L(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const o=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},L(e)?{pathname:e}:e,{__renderId:o});return this.ready=this.resolve(s).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const c=this.__previousContext;if(a===c)return this.__updateBrowserHistory(c,!0),this.location;if(this.location=D(a),t&&this.__updateBrowserHistory(a,o===1),Pe("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,c),this.__previousContext=a,this.location;this.__addAppearingContent(a,c);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,c),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(o===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),He(this.__outlet&&this.__outlet.children),this.location=D(Object.assign(s,{resolver:this})),Pe("error",Object.assign({router:this,error:a},s)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(o=>{const a=o!==t?o:e,u=Ve(Jr(o.chain),o.resolver)===o.pathname,d=(g,_=g.route,y)=>g.next(void 0,_,y).then(w=>w===null||w===pe?u?g:_.parent!==null?d(g,_.parent,w):w:w);return d(o).then(g=>{if(g===null||g===pe)throw jr(a);return g&&g!==pe&&g!==o?this.__fullyResolveChain(a,g):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Wn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(N(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${yn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},o=t.chain||[],s=e.chain;let a=Promise.resolve();const c=()=>({cancel:!0}),u=d=>yr(e,d);if(e.__divergedChainIndex=0,e.__skipAttach=!1,o.length){for(let d=0;d<Math.min(o.length,s.length)&&!(o[d].route!==s[d].route||o[d].path!==s[d].path&&o[d].element!==s[d].element||!this.__isReusableElement(o[d].element,s[d].element));d=++e.__divergedChainIndex);if(e.__skipAttach=s.length===o.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let d=s.length-1;d>=0;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:c},o[d]);for(let d=0;d<s.length;d++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:c,redirect:u},s[d]),o[d].element.location=D(e,o[d].route)}else for(let d=o.length-1;d>=e.__divergedChainIndex;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:c},o[d])}if(!e.__skipAttach)for(let d=0;d<s.length;d++)d<e.__divergedChainIndex?d<o.length&&o[d].element&&(o[d].element.location=D(e,o[d].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:c,redirect:u},s[d]),s[d].element&&(s[d].element.location=D(e,s[d].route)));return a.then(d=>{if(d){if(d.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(d.redirect)return this.__redirect(d.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,o,s){const a=D(t);return e.then(c=>{if(this.__isLatestRender(t))return wr("onBeforeLeave",[a,o,this],s.element)(c)}).then(c=>{if(!(c||{}).redirect)return c})}__runOnBeforeEnterCallbacks(e,t,o,s){const a=D(t,s.route);return e.then(c=>{if(this.__isLatestRender(t))return wr("onBeforeEnter",[a,o,this],s.element)(c)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,o){if(t>qn)throw new Error(N(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:o})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:o=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==o){const a=s?"replaceState":"pushState";window.history[a](null,document.title,e+t+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let o=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const a=t&&t.chain[s].element;if(a)if(a.parentNode===o)e.chain[s].element=a,o=a;else break}return o}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let s=o;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const c=e.chain[a].element;c&&(s.appendChild(c),this.__addedByRouter.set(c,!0),s===o&&this.__appearingContent.push(c),s=c)}}__removeDisappearingContent(){this.__disappearingContent&&He(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(He(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let o=t.chain.length-1;o>=e.__divergedChainIndex&&this.__isLatestRender(e);o--){const s=t.chain[o].element;if(s)try{const a=D(e);qe(s.onAfterLeave,[a,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&He(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const o=e.chain[t].element||{},s=D(e,e.chain[t].route);qe(o.onAfterEnter,[s,{},e.resolver],o)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],s=[],a=e.chain;let c;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){c=a[u-1].route.animate;break}if(t&&o&&c){const u=Ze(c)&&c.leave||"leaving",d=Ze(c)&&c.enter||"entering";s.push(_r(t,u)),s.push(_r(o,d))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:o,hash:s}=e?e.detail:window.location;L(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:o,hash:s},!0))}static setTriggers(...e){kn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=jn(this)),Ve(this.__urlForName(e,t),this)}urlForPath(e,t){return Ve(J.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:o,hash:s}=L(e)?this.__createUrl(e,"http://a"):e;return Pe("go",{pathname:t,search:o,hash:s})}}const Kn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,We=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Jn(){function n(){return!0}return Yr(n)}function Yn(){try{return Qn()?!0:Xn()?We?!Zn():!Jn():!1}catch{return!1}}function Qn(){return localStorage.getItem("vaadin.developmentmode.force")}function Xn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Zn(){return!!(We&&Object.keys(We).map(e=>We[e]).filter(e=>e.productionMode).length>0)}function Yr(n,e){if(typeof n!="function")return;const t=Kn.exec(n.toString());if(t)try{n=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return n(e)}window.Vaadin=window.Vaadin||{};const br=function(n,e){if(window.Vaadin.developmentMode)return Yr(n,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Yn());function es(){}const ts=function(){if(typeof br=="function")return br(es)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ts();J.NavigationTrigger={POPSTATE:xn,CLICK:vn};var rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,Qr=(n,e,t,o)=>{for(var s=o>1?void 0:o?is(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&rs(e,t,s),s};let Et=class extends S{constructor(){super(...arguments),this.router=new J(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return $`<slot></slot>`}};Qr([E({attribute:!1})],Et.prototype,"routes",2);Et=Qr([O("vaadin-router")],Et);var ns=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,ot=(n,e,t,o)=>{for(var s=o>1?void 0:o?ss(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&ns(e,t,s),s};let Xr="auth",_e=class extends S{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Ie.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const n=$`
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
    `;return $`${this.isAuthenticated()?"":n} <slot></slot>`}_handleLogin(n){n.preventDefault();const e=n.target,t=new FormData(e);new nr(t).base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{s&&(console.log("Authentication:",s.token),this.user=Ie.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(n){n.preventDefault();const e=n.target,t=new FormData(e);new nr(t).base().post("/signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration:",s)})}_toggleDialog(n){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(n?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=M.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};_e.styles=U`
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
  `;ot([q()],_e.prototype,"loginStatus",2);ot([q()],_e.prototype,"registerStatus",2);ot([Ir({context:Xr}),q()],_e.prototype,"user",2);_e=ot([O("auth-required")],_e);var os=Object.defineProperty,as=Object.getOwnPropertyDescriptor,Rt=(n,e,t,o)=>{for(var s=o>1?void 0:o?as(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&os(e,t,s),s};let Fe=class extends S{constructor(){super(...arguments),this.user=new M}render(){const{profileImage:n,profileDescription:e,userid:t}=this.profile||{};return $`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${n}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(n){if(console.log("Profile Data has been updated",n),n.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(n){new Ur().get(n).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};Fe.styles=U`
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
  `;Rt([q()],Fe.prototype,"profile",2);Rt([Or({context:Xr,subscribe:!0}),E({attribute:!1})],Fe.prototype,"user",2);Fe=Rt([O("match-the-vibe-header")],Fe);var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,Me=(n,e,t,o)=>{for(var s=o>1?void 0:o?cs(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&ls(e,t,s),s};let ne=class extends St{get userid(){var n;return console.log(),(n=this.location)==null?void 0:n.params.userid}get edit(){var n;return(n=this.location)==null?void 0:n.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(n,e,t){n==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(n,e,t)}render(){return $` <user-profile .using=${this.profile}> </user-profile> `}};ne.styles=[U`
      :host {
        display: contents;
      }
    `];Me([E({attribute:!1})],ne.prototype,"location",2);Me([E({reflect:!0})],ne.prototype,"userid",1);Me([E({reflect:!0})],ne.prototype,"edit",1);Me([E()],ne.prototype,"profile",1);ne=Me([O("profile-page")],ne);var Zr={},at={};at.byteLength=ps;at.toByteArray=fs;at.fromByteArray=_s;var k=[],F=[],hs=typeof Uint8Array<"u"?Uint8Array:Array,yt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var he=0,us=yt.length;he<us;++he)k[he]=yt[he],F[yt.charCodeAt(he)]=he;F[45]=62;F[95]=63;function ei(n){var e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=n.indexOf("=");t===-1&&(t=e);var o=t===e?0:4-t%4;return[t,o]}function ps(n){var e=ei(n),t=e[0],o=e[1];return(t+o)*3/4-o}function ds(n,e,t){return(e+t)*3/4-t}function fs(n){var e,t=ei(n),o=t[0],s=t[1],a=new hs(ds(n,o,s)),c=0,u=s>0?o-4:o,d;for(d=0;d<u;d+=4)e=F[n.charCodeAt(d)]<<18|F[n.charCodeAt(d+1)]<<12|F[n.charCodeAt(d+2)]<<6|F[n.charCodeAt(d+3)],a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=e&255;return s===2&&(e=F[n.charCodeAt(d)]<<2|F[n.charCodeAt(d+1)]>>4,a[c++]=e&255),s===1&&(e=F[n.charCodeAt(d)]<<10|F[n.charCodeAt(d+1)]<<4|F[n.charCodeAt(d+2)]>>2,a[c++]=e>>8&255,a[c++]=e&255),a}function ms(n){return k[n>>18&63]+k[n>>12&63]+k[n>>6&63]+k[n&63]}function gs(n,e,t){for(var o,s=[],a=e;a<t;a+=3)o=(n[a]<<16&16711680)+(n[a+1]<<8&65280)+(n[a+2]&255),s.push(ms(o));return s.join("")}function _s(n){for(var e,t=n.length,o=t%3,s=[],a=16383,c=0,u=t-o;c<u;c+=a)s.push(gs(n,c,c+a>u?u:c+a));return o===1?(e=n[t-1],s.push(k[e>>2]+k[e<<4&63]+"==")):o===2&&(e=(n[t-2]<<8)+n[t-1],s.push(k[e>>10]+k[e>>4&63]+k[e<<2&63]+"=")),s.join("")}var Ft={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Ft.read=function(n,e,t,o,s){var a,c,u=s*8-o-1,d=(1<<u)-1,g=d>>1,_=-7,y=t?s-1:0,w=t?-1:1,b=n[e+y];for(y+=w,a=b&(1<<-_)-1,b>>=-_,_+=u;_>0;a=a*256+n[e+y],y+=w,_-=8);for(c=a&(1<<-_)-1,a>>=-_,_+=o;_>0;c=c*256+n[e+y],y+=w,_-=8);if(a===0)a=1-g;else{if(a===d)return c?NaN:(b?-1:1)*(1/0);c=c+Math.pow(2,o),a=a-g}return(b?-1:1)*c*Math.pow(2,a-o)};Ft.write=function(n,e,t,o,s,a){var c,u,d,g=a*8-s-1,_=(1<<g)-1,y=_>>1,w=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=o?0:a-1,R=o?1:-1,X=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,c=_):(c=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-c))<1&&(c--,d*=2),c+y>=1?e+=w/d:e+=w*Math.pow(2,1-y),e*d>=2&&(c++,d/=2),c+y>=_?(u=0,c=_):c+y>=1?(u=(e*d-1)*Math.pow(2,s),c=c+y):(u=e*Math.pow(2,y-1)*Math.pow(2,s),c=0));s>=8;n[t+b]=u&255,b+=R,u/=256,s-=8);for(c=c<<s|u,g+=s;g>0;n[t+b]=c&255,b+=R,c/=256,g-=8);n[t+b-R]|=X*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){const e=at,t=Ft,o=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=u,n.SlowBuffer=oe,n.INSPECT_MAX_BYTES=50;const s=2147483647;n.kMaxLength=s,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const l=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(l,r),l.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function c(l){if(l>s)throw new RangeError('The value "'+l+'" is invalid for option "size"');const r=new Uint8Array(l);return Object.setPrototypeOf(r,u.prototype),r}function u(l,r,i){if(typeof l=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return y(l)}return d(l,r,i)}u.poolSize=8192;function d(l,r,i){if(typeof l=="string")return w(l,r);if(ArrayBuffer.isView(l))return R(l);if(l==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l);if(j(l,ArrayBuffer)||l&&j(l.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(j(l,SharedArrayBuffer)||l&&j(l.buffer,SharedArrayBuffer)))return X(l,r,i);if(typeof l=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=l.valueOf&&l.valueOf();if(h!=null&&h!==l)return u.from(h,r,i);const p=lt(l);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof l[Symbol.toPrimitive]=="function")return u.from(l[Symbol.toPrimitive]("string"),r,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l)}u.from=function(l,r,i){return d(l,r,i)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function g(l){if(typeof l!="number")throw new TypeError('"size" argument must be of type number');if(l<0)throw new RangeError('The value "'+l+'" is invalid for option "size"')}function _(l,r,i){return g(l),l<=0?c(l):r!==void 0?typeof i=="string"?c(l).fill(r,i):c(l).fill(r):c(l)}u.alloc=function(l,r,i){return _(l,r,i)};function y(l){return g(l),c(l<0?0:be(l)|0)}u.allocUnsafe=function(l){return y(l)},u.allocUnsafeSlow=function(l){return y(l)};function w(l,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const i=ae(l,r)|0;let h=c(i);const p=h.write(l,r);return p!==i&&(h=h.slice(0,p)),h}function b(l){const r=l.length<0?0:be(l.length)|0,i=c(r);for(let h=0;h<r;h+=1)i[h]=l[h]&255;return i}function R(l){if(j(l,Uint8Array)){const r=new Uint8Array(l);return X(r.buffer,r.byteOffset,r.byteLength)}return b(l)}function X(l,r,i){if(r<0||l.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(l.byteLength<r+(i||0))throw new RangeError('"length" is outside of buffer bounds');let h;return r===void 0&&i===void 0?h=new Uint8Array(l):i===void 0?h=new Uint8Array(l,r):h=new Uint8Array(l,r,i),Object.setPrototypeOf(h,u.prototype),h}function lt(l){if(u.isBuffer(l)){const r=be(l.length)|0,i=c(r);return i.length===0||l.copy(i,0,0,r),i}if(l.length!==void 0)return typeof l.length!="number"||pt(l.length)?c(0):b(l);if(l.type==="Buffer"&&Array.isArray(l.data))return b(l.data)}function be(l){if(l>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return l|0}function oe(l){return+l!=l&&(l=0),u.alloc(+l)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,i){if(j(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),j(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(r)||!u.isBuffer(i))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===i)return 0;let h=r.length,p=i.length;for(let f=0,m=Math.min(h,p);f<m;++f)if(r[f]!==i[f]){h=r[f],p=i[f];break}return h<p?-1:p<h?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,i){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);let h;if(i===void 0)for(i=0,h=0;h<r.length;++h)i+=r[h].length;const p=u.allocUnsafe(i);let f=0;for(h=0;h<r.length;++h){let m=r[h];if(j(m,Uint8Array))f+m.length>p.length?(u.isBuffer(m)||(m=u.from(m)),m.copy(p,f)):Uint8Array.prototype.set.call(p,m,f);else if(u.isBuffer(m))m.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=m.length}return p};function ae(l,r){if(u.isBuffer(l))return l.length;if(ArrayBuffer.isView(l)||j(l,ArrayBuffer))return l.byteLength;if(typeof l!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof l);const i=l.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&i===0)return 0;let p=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return ut(l).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return Vt(l).length;default:if(p)return h?-1:ut(l).length;r=(""+r).toLowerCase(),p=!0}}u.byteLength=ae;function ct(l,r,i){let h=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,r>>>=0,i<=r))return"";for(l||(l="utf8");;)switch(l){case"hex":return pi(this,r,i);case"utf8":case"utf-8":return Dt(this,r,i);case"ascii":return hi(this,r,i);case"latin1":case"binary":return ui(this,r,i);case"base64":return li(this,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return di(this,r,i);default:if(h)throw new TypeError("Unknown encoding: "+l);l=(l+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function H(l,r,i){const h=l[r];l[r]=l[i],l[i]=h}u.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let i=0;i<r;i+=2)H(this,i,i+1);return this},u.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let i=0;i<r;i+=4)H(this,i,i+3),H(this,i+1,i+2);return this},u.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let i=0;i<r;i+=8)H(this,i,i+7),H(this,i+1,i+6),H(this,i+2,i+5),H(this,i+3,i+4);return this},u.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?Dt(this,0,r):ct.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){let r="";const i=n.INSPECT_MAX_BYTES;return r=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(r+=" ... "),"<Buffer "+r+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(r,i,h,p,f){if(j(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(i===void 0&&(i=0),h===void 0&&(h=r?r.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),i<0||h>r.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&i>=h)return 0;if(p>=f)return-1;if(i>=h)return 1;if(i>>>=0,h>>>=0,p>>>=0,f>>>=0,this===r)return 0;let m=f-p,v=h-i;const P=Math.min(m,v),A=this.slice(p,f),B=r.slice(i,h);for(let x=0;x<P;++x)if(A[x]!==B[x]){m=A[x],v=B[x];break}return m<v?-1:v<m?1:0};function Ne(l,r,i,h,p){if(l.length===0)return-1;if(typeof i=="string"?(h=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,pt(i)&&(i=p?0:l.length-1),i<0&&(i=l.length+i),i>=l.length){if(p)return-1;i=l.length-1}else if(i<0)if(p)i=0;else return-1;if(typeof r=="string"&&(r=u.from(r,h)),u.isBuffer(r))return r.length===0?-1:ve(l,r,i,h,p);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(l,r,i):Uint8Array.prototype.lastIndexOf.call(l,r,i):ve(l,[r],i,h,p);throw new TypeError("val must be string, number or Buffer")}function ve(l,r,i,h,p){let f=1,m=l.length,v=r.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(l.length<2||r.length<2)return-1;f=2,m/=2,v/=2,i/=2}function P(B,x){return f===1?B[x]:B.readUInt16BE(x*f)}let A;if(p){let B=-1;for(A=i;A<m;A++)if(P(l,A)===P(r,B===-1?0:A-B)){if(B===-1&&(B=A),A-B+1===v)return B*f}else B!==-1&&(A-=A-B),B=-1}else for(i+v>m&&(i=m-v),A=i;A>=0;A--){let B=!0;for(let x=0;x<v;x++)if(P(l,A+x)!==P(r,x)){B=!1;break}if(B)return A}return-1}u.prototype.includes=function(r,i,h){return this.indexOf(r,i,h)!==-1},u.prototype.indexOf=function(r,i,h){return Ne(this,r,i,h,!0)},u.prototype.lastIndexOf=function(r,i,h){return Ne(this,r,i,h,!1)};function je(l,r,i,h){i=Number(i)||0;const p=l.length-i;h?(h=Number(h),h>p&&(h=p)):h=p;const f=r.length;h>f/2&&(h=f/2);let m;for(m=0;m<h;++m){const v=parseInt(r.substr(m*2,2),16);if(pt(v))return m;l[i+m]=v}return m}function ni(l,r,i,h){return ke(ut(r,l.length-i),l,i,h)}function si(l,r,i,h){return ke(_i(r),l,i,h)}function oi(l,r,i,h){return ke(Vt(r),l,i,h)}function ai(l,r,i,h){return ke(yi(r,l.length-i),l,i,h)}u.prototype.write=function(r,i,h,p){if(i===void 0)p="utf8",h=this.length,i=0;else if(h===void 0&&typeof i=="string")p=i,h=this.length,i=0;else if(isFinite(i))i=i>>>0,isFinite(h)?(h=h>>>0,p===void 0&&(p="utf8")):(p=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-i;if((h===void 0||h>f)&&(h=f),r.length>0&&(h<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let m=!1;for(;;)switch(p){case"hex":return je(this,r,i,h);case"utf8":case"utf-8":return ni(this,r,i,h);case"ascii":case"latin1":case"binary":return si(this,r,i,h);case"base64":return oi(this,r,i,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ai(this,r,i,h);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function li(l,r,i){return r===0&&i===l.length?e.fromByteArray(l):e.fromByteArray(l.slice(r,i))}function Dt(l,r,i){i=Math.min(l.length,i);const h=[];let p=r;for(;p<i;){const f=l[p];let m=null,v=f>239?4:f>223?3:f>191?2:1;if(p+v<=i){let P,A,B,x;switch(v){case 1:f<128&&(m=f);break;case 2:P=l[p+1],(P&192)===128&&(x=(f&31)<<6|P&63,x>127&&(m=x));break;case 3:P=l[p+1],A=l[p+2],(P&192)===128&&(A&192)===128&&(x=(f&15)<<12|(P&63)<<6|A&63,x>2047&&(x<55296||x>57343)&&(m=x));break;case 4:P=l[p+1],A=l[p+2],B=l[p+3],(P&192)===128&&(A&192)===128&&(B&192)===128&&(x=(f&15)<<18|(P&63)<<12|(A&63)<<6|B&63,x>65535&&x<1114112&&(m=x))}}m===null?(m=65533,v=1):m>65535&&(m-=65536,h.push(m>>>10&1023|55296),m=56320|m&1023),h.push(m),p+=v}return ci(h)}const Lt=4096;function ci(l){const r=l.length;if(r<=Lt)return String.fromCharCode.apply(String,l);let i="",h=0;for(;h<r;)i+=String.fromCharCode.apply(String,l.slice(h,h+=Lt));return i}function hi(l,r,i){let h="";i=Math.min(l.length,i);for(let p=r;p<i;++p)h+=String.fromCharCode(l[p]&127);return h}function ui(l,r,i){let h="";i=Math.min(l.length,i);for(let p=r;p<i;++p)h+=String.fromCharCode(l[p]);return h}function pi(l,r,i){const h=l.length;(!r||r<0)&&(r=0),(!i||i<0||i>h)&&(i=h);let p="";for(let f=r;f<i;++f)p+=wi[l[f]];return p}function di(l,r,i){const h=l.slice(r,i);let p="";for(let f=0;f<h.length-1;f+=2)p+=String.fromCharCode(h[f]+h[f+1]*256);return p}u.prototype.slice=function(r,i){const h=this.length;r=~~r,i=i===void 0?h:~~i,r<0?(r+=h,r<0&&(r=0)):r>h&&(r=h),i<0?(i+=h,i<0&&(i=0)):i>h&&(i=h),i<r&&(i=r);const p=this.subarray(r,i);return Object.setPrototypeOf(p,u.prototype),p};function C(l,r,i){if(l%1!==0||l<0)throw new RangeError("offset is not uint");if(l+r>i)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,i,h){r=r>>>0,i=i>>>0,h||C(r,i,this.length);let p=this[r],f=1,m=0;for(;++m<i&&(f*=256);)p+=this[r+m]*f;return p},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,i,h){r=r>>>0,i=i>>>0,h||C(r,i,this.length);let p=this[r+--i],f=1;for(;i>0&&(f*=256);)p+=this[r+--i]*f;return p},u.prototype.readUint8=u.prototype.readUInt8=function(r,i){return r=r>>>0,i||C(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,i){return r=r>>>0,i||C(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,i){return r=r>>>0,i||C(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,i){return r=r>>>0,i||C(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,i){return r=r>>>0,i||C(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readBigUInt64LE=V(function(r){r=r>>>0,ce(r,"offset");const i=this[r],h=this[r+7];(i===void 0||h===void 0)&&Ee(r,this.length-8);const p=i+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,f=this[++r]+this[++r]*2**8+this[++r]*2**16+h*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=V(function(r){r=r>>>0,ce(r,"offset");const i=this[r],h=this[r+7];(i===void 0||h===void 0)&&Ee(r,this.length-8);const p=i*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],f=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+h;return(BigInt(p)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(r,i,h){r=r>>>0,i=i>>>0,h||C(r,i,this.length);let p=this[r],f=1,m=0;for(;++m<i&&(f*=256);)p+=this[r+m]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*i)),p},u.prototype.readIntBE=function(r,i,h){r=r>>>0,i=i>>>0,h||C(r,i,this.length);let p=i,f=1,m=this[r+--p];for(;p>0&&(f*=256);)m+=this[r+--p]*f;return f*=128,m>=f&&(m-=Math.pow(2,8*i)),m},u.prototype.readInt8=function(r,i){return r=r>>>0,i||C(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,i){r=r>>>0,i||C(r,2,this.length);const h=this[r]|this[r+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(r,i){r=r>>>0,i||C(r,2,this.length);const h=this[r+1]|this[r]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(r,i){return r=r>>>0,i||C(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,i){return r=r>>>0,i||C(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readBigInt64LE=V(function(r){r=r>>>0,ce(r,"offset");const i=this[r],h=this[r+7];(i===void 0||h===void 0)&&Ee(r,this.length-8);const p=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(h<<24);return(BigInt(p)<<BigInt(32))+BigInt(i+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),u.prototype.readBigInt64BE=V(function(r){r=r>>>0,ce(r,"offset");const i=this[r],h=this[r+7];(i===void 0||h===void 0)&&Ee(r,this.length-8);const p=(i<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(p)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+h)}),u.prototype.readFloatLE=function(r,i){return r=r>>>0,i||C(r,4,this.length),t.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,i){return r=r>>>0,i||C(r,4,this.length),t.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,i){return r=r>>>0,i||C(r,8,this.length),t.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,i){return r=r>>>0,i||C(r,8,this.length),t.read(this,r,!1,52,8)};function T(l,r,i,h,p,f){if(!u.isBuffer(l))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>p||r<f)throw new RangeError('"value" argument is out of bounds');if(i+h>l.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,i,h,p){if(r=+r,i=i>>>0,h=h>>>0,!p){const v=Math.pow(2,8*h)-1;T(this,r,i,h,v,0)}let f=1,m=0;for(this[i]=r&255;++m<h&&(f*=256);)this[i+m]=r/f&255;return i+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,i,h,p){if(r=+r,i=i>>>0,h=h>>>0,!p){const v=Math.pow(2,8*h)-1;T(this,r,i,h,v,0)}let f=h-1,m=1;for(this[i+f]=r&255;--f>=0&&(m*=256);)this[i+f]=r/m&255;return i+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,1,255,0),this[i]=r&255,i+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,2,65535,0),this[i]=r&255,this[i+1]=r>>>8,i+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,2,65535,0),this[i]=r>>>8,this[i+1]=r&255,i+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,4,4294967295,0),this[i+3]=r>>>24,this[i+2]=r>>>16,this[i+1]=r>>>8,this[i]=r&255,i+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,4,4294967295,0),this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255,i+4};function Mt(l,r,i,h,p){qt(r,h,p,l,i,7);let f=Number(r&BigInt(4294967295));l[i++]=f,f=f>>8,l[i++]=f,f=f>>8,l[i++]=f,f=f>>8,l[i++]=f;let m=Number(r>>BigInt(32)&BigInt(4294967295));return l[i++]=m,m=m>>8,l[i++]=m,m=m>>8,l[i++]=m,m=m>>8,l[i++]=m,i}function Nt(l,r,i,h,p){qt(r,h,p,l,i,7);let f=Number(r&BigInt(4294967295));l[i+7]=f,f=f>>8,l[i+6]=f,f=f>>8,l[i+5]=f,f=f>>8,l[i+4]=f;let m=Number(r>>BigInt(32)&BigInt(4294967295));return l[i+3]=m,m=m>>8,l[i+2]=m,m=m>>8,l[i+1]=m,m=m>>8,l[i]=m,i+8}u.prototype.writeBigUInt64LE=V(function(r,i=0){return Mt(this,r,i,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=V(function(r,i=0){return Nt(this,r,i,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(r,i,h,p){if(r=+r,i=i>>>0,!p){const P=Math.pow(2,8*h-1);T(this,r,i,h,P-1,-P)}let f=0,m=1,v=0;for(this[i]=r&255;++f<h&&(m*=256);)r<0&&v===0&&this[i+f-1]!==0&&(v=1),this[i+f]=(r/m>>0)-v&255;return i+h},u.prototype.writeIntBE=function(r,i,h,p){if(r=+r,i=i>>>0,!p){const P=Math.pow(2,8*h-1);T(this,r,i,h,P-1,-P)}let f=h-1,m=1,v=0;for(this[i+f]=r&255;--f>=0&&(m*=256);)r<0&&v===0&&this[i+f+1]!==0&&(v=1),this[i+f]=(r/m>>0)-v&255;return i+h},u.prototype.writeInt8=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,1,127,-128),r<0&&(r=255+r+1),this[i]=r&255,i+1},u.prototype.writeInt16LE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,2,32767,-32768),this[i]=r&255,this[i+1]=r>>>8,i+2},u.prototype.writeInt16BE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,2,32767,-32768),this[i]=r>>>8,this[i+1]=r&255,i+2},u.prototype.writeInt32LE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,4,2147483647,-2147483648),this[i]=r&255,this[i+1]=r>>>8,this[i+2]=r>>>16,this[i+3]=r>>>24,i+4},u.prototype.writeInt32BE=function(r,i,h){return r=+r,i=i>>>0,h||T(this,r,i,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255,i+4},u.prototype.writeBigInt64LE=V(function(r,i=0){return Mt(this,r,i,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=V(function(r,i=0){return Nt(this,r,i,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function jt(l,r,i,h,p,f){if(i+h>l.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function kt(l,r,i,h,p){return r=+r,i=i>>>0,p||jt(l,r,i,4),t.write(l,r,i,h,23,4),i+4}u.prototype.writeFloatLE=function(r,i,h){return kt(this,r,i,!0,h)},u.prototype.writeFloatBE=function(r,i,h){return kt(this,r,i,!1,h)};function Ht(l,r,i,h,p){return r=+r,i=i>>>0,p||jt(l,r,i,8),t.write(l,r,i,h,52,8),i+8}u.prototype.writeDoubleLE=function(r,i,h){return Ht(this,r,i,!0,h)},u.prototype.writeDoubleBE=function(r,i,h){return Ht(this,r,i,!1,h)},u.prototype.copy=function(r,i,h,p){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(h||(h=0),!p&&p!==0&&(p=this.length),i>=r.length&&(i=r.length),i||(i=0),p>0&&p<h&&(p=h),p===h||r.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),r.length-i<p-h&&(p=r.length-i+h);const f=p-h;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(i,h,p):Uint8Array.prototype.set.call(r,this.subarray(h,p),i),f},u.prototype.fill=function(r,i,h,p){if(typeof r=="string"){if(typeof i=="string"?(p=i,i=0,h=this.length):typeof h=="string"&&(p=h,h=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!u.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(r.length===1){const m=r.charCodeAt(0);(p==="utf8"&&m<128||p==="latin1")&&(r=m)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(i<0||this.length<i||this.length<h)throw new RangeError("Out of range index");if(h<=i)return this;i=i>>>0,h=h===void 0?this.length:h>>>0,r||(r=0);let f;if(typeof r=="number")for(f=i;f<h;++f)this[f]=r;else{const m=u.isBuffer(r)?r:u.from(r,p),v=m.length;if(v===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(f=0;f<h-i;++f)this[f+i]=m[f%v]}return this};const le={};function ht(l,r,i){le[l]=class extends i{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${l}]`,this.stack,delete this.name}get code(){return l}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${l}]: ${this.message}`}}}ht("ERR_BUFFER_OUT_OF_BOUNDS",function(l){return l?`${l} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ht("ERR_INVALID_ARG_TYPE",function(l,r){return`The "${l}" argument must be of type number. Received type ${typeof r}`},TypeError),ht("ERR_OUT_OF_RANGE",function(l,r,i){let h=`The value of "${l}" is out of range.`,p=i;return Number.isInteger(i)&&Math.abs(i)>2**32?p=zt(String(i)):typeof i=="bigint"&&(p=String(i),(i>BigInt(2)**BigInt(32)||i<-(BigInt(2)**BigInt(32)))&&(p=zt(p)),p+="n"),h+=` It must be ${r}. Received ${p}`,h},RangeError);function zt(l){let r="",i=l.length;const h=l[0]==="-"?1:0;for(;i>=h+4;i-=3)r=`_${l.slice(i-3,i)}${r}`;return`${l.slice(0,i)}${r}`}function fi(l,r,i){ce(r,"offset"),(l[r]===void 0||l[r+i]===void 0)&&Ee(r,l.length-(i+1))}function qt(l,r,i,h,p,f){if(l>i||l<r){const m=typeof r=="bigint"?"n":"";let v;throw f>3?r===0||r===BigInt(0)?v=`>= 0${m} and < 2${m} ** ${(f+1)*8}${m}`:v=`>= -(2${m} ** ${(f+1)*8-1}${m}) and < 2 ** ${(f+1)*8-1}${m}`:v=`>= ${r}${m} and <= ${i}${m}`,new le.ERR_OUT_OF_RANGE("value",v,l)}fi(h,p,f)}function ce(l,r){if(typeof l!="number")throw new le.ERR_INVALID_ARG_TYPE(r,"number",l)}function Ee(l,r,i){throw Math.floor(l)!==l?(ce(l,i),new le.ERR_OUT_OF_RANGE(i||"offset","an integer",l)):r<0?new le.ERR_BUFFER_OUT_OF_BOUNDS:new le.ERR_OUT_OF_RANGE(i||"offset",`>= ${i?1:0} and <= ${r}`,l)}const mi=/[^+/0-9A-Za-z-_]/g;function gi(l){if(l=l.split("=")[0],l=l.trim().replace(mi,""),l.length<2)return"";for(;l.length%4!==0;)l=l+"=";return l}function ut(l,r){r=r||1/0;let i;const h=l.length;let p=null;const f=[];for(let m=0;m<h;++m){if(i=l.charCodeAt(m),i>55295&&i<57344){if(!p){if(i>56319){(r-=3)>-1&&f.push(239,191,189);continue}else if(m+1===h){(r-=3)>-1&&f.push(239,191,189);continue}p=i;continue}if(i<56320){(r-=3)>-1&&f.push(239,191,189),p=i;continue}i=(p-55296<<10|i-56320)+65536}else p&&(r-=3)>-1&&f.push(239,191,189);if(p=null,i<128){if((r-=1)<0)break;f.push(i)}else if(i<2048){if((r-=2)<0)break;f.push(i>>6|192,i&63|128)}else if(i<65536){if((r-=3)<0)break;f.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((r-=4)<0)break;f.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return f}function _i(l){const r=[];for(let i=0;i<l.length;++i)r.push(l.charCodeAt(i)&255);return r}function yi(l,r){let i,h,p;const f=[];for(let m=0;m<l.length&&!((r-=2)<0);++m)i=l.charCodeAt(m),h=i>>8,p=i%256,f.push(p),f.push(h);return f}function Vt(l){return e.toByteArray(gi(l))}function ke(l,r,i,h){let p;for(p=0;p<h&&!(p+i>=r.length||p>=l.length);++p)r[p+i]=l[p];return p}function j(l,r){return l instanceof r||l!=null&&l.constructor!=null&&l.constructor.name!=null&&l.constructor.name===r.name}function pt(l){return l!==l}const wi=function(){const l="0123456789abcdef",r=new Array(256);for(let i=0;i<16;++i){const h=i*16;for(let p=0;p<16;++p)r[h+p]=l[i]+l[p]}return r}();function V(l){return typeof BigInt>"u"?bi:l}function bi(){throw new Error("BigInt not supported")}})(Zr);var ys=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,ti=(n,e,t,o)=>{for(var s=o>1?void 0:o?ws(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&ys(e,t,s),s};let et=class extends S{render(){if(!this.track)return $`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{name:n}=this.track,e=this.track.artists[0].name,{url:t}=this.track.album.images[0];return $`
      <section class="single-track">
        <img src="${t}" alt="Album cover for ${n}" class="track-image" />
        <section class="details">
          <p class="track-name">${n}</p>
          <p class="artist-name">${e}</p>
        </section>
      </section>
    `}};et.styles=U`
    .single-track {
      display: flex;
      flex-direction: row;
      border: 2px solid white;
      font-weight: 500;
    }
    .track-name {
      font-size: 1.25em;
      padding: 0;
      margin: 0;
    }
    .artist-name {
      color: darkgray;
      font-size: 0.8em;
      margin: 0;
      padding: 0;
    }
    .track-image {
      width: 4em;
      height: 4em;
    }
  `;ti([E({type:Object})],et.prototype,"track",2);et=ti([O("track-card")],et);var bs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,se=(n,e,t,o)=>{for(var s=o>1?void 0:o?vs(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&bs(e,t,s),s};let z=class extends S{constructor(){super(),this.expanded=!1,this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.expandedClass="feed-single-post"}_expand(){console.log("EXPAND CALLED"),this.expanded=!this.expanded,console.log("class was: ",this.expandedClass),this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post",console.log("class now is: ",this.expandedClass)}_handleSubmit(n){n.preventDefault();const e=n.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),console.log("Artist Name: ",this.requestedSearchQuery),this.searchSpotify()}async fetchTopTracks(n){console.log(`WITHIN FETCH TOP TRACKS
 ArtistId: `,n);const e=await fetch(`https://api.spotify.com/v1/artists/${n}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?(this.topTracks=t.tracks,console.log("body: ",this.topTracks)):console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}async authenticate(){console.log("AUTHENTICATING");const n="7fd3e17624134115b09da726f05a671c",e="09d164c52b1e43d9bcef963d9f2a8aac";console.log("CLIENTID: ",n,`
`,"CLIENTSECRET: ",e);const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Zr.Buffer.from(`${n}:${e}`).toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const o=await t.json();console.log("Authentication response data: ",o),this.accessToken=o.access_token,console.log("Access Token:",this.accessToken)}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const n=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(n,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();console.log("Tracks Search Response: ",t),t.tracks.items.length>0?(this.topTracks=t.tracks.items,console.log("Tracks found:",this.topTracks)):(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t,o;const n=(e=this.post)!=null&&e.postTime?new Date(this.post.postTime).toLocaleString():"";return $`
      <section class="${this.expandedClass}">
        <section class="name-and-time">
          <h3 class="feed-name">${(t=this.post)==null?void 0:t.userName}</h3>
          <p class="time-posted">${n}</p>
        </section>
        <p class="message">${(o=this.post)==null?void 0:o.postMessage}</p>

        ${this.expanded?$`
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
                  ${this.topTracks.length>0?this.topTracks.slice(0,5).map(s=>$`<track-card .track=${s}></track-card>`):$`<h3>
                        The tracks you search for will show up here
                      </h3>`}
                </section>
                <section class="selected-tracks">
                  <h3>Selected Tracks</h3>
                  <!-- Render selected tracks or any other relevant information here -->
                </section>
              </section>

              <button class="recommend-songs" @click=${this._expand}>
                Unexpand Post
              </button>
            `:$`
              <button class="recommend-songs" @click=${this._expand}>
                Expand
              </button>
            `}
      </section>
    `}};z.styles=U`
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
      margin-bottom: 1.5em;
    }

    .search-and-selected {
      display: flex;
      flex-direction: row;
      width: 100%;
      min-height: 8em; /* Set minimum height and allow expansion */
      margin-bottom: 1.5em;
    }

    .query-results,
    .selected-tracks {
      flex: 1; /* Each takes up half of the container */
      min-height: 8em; /* Set minimum height and allow expansion */
      padding: 0.5em;
      box-sizing: border-box; /* Ensures padding is included in dimensions */
      border: 2px solid white;
    }

    .query-results {
      width: 48%;
      background: blue;
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

    .recommend-songs {
      background: var(--accent-color);
      padding: 1em;
      border: none;
      color: white;
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
      margin-right: 1em;
      font-size: 1.2em;
    }

    .time-posted {
      font-size: 0.8em;
      font-weight: 300;
      color: lightgray;
    }
  `;se([E({type:Object})],z.prototype,"post",2);se([q()],z.prototype,"expanded",2);se([E({type:String})],z.prototype,"requestedSearchQuery",2);se([E({type:String})],z.prototype,"accessToken",2);se([E()],z.prototype,"topTracks",2);se([q()],z.prototype,"expandedClass",2);z=se([O("feed-post")],z);var Es=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,ri=(n,e,t,o)=>{for(var s=o>1?void 0:o?xs(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&Es(e,t,s),s};let tt=class extends S{constructor(){super(...arguments),this.posts=[]}render(){return $`
      <div class="posts-container">
        ${this.posts.map(n=>$` <feed-post .post=${n}></feed-post>`)}
      </div>
    `}};tt.styles=U``;ri([E({type:Array})],tt.prototype,"posts",2);tt=ri([O("feed-post-list")],tt);var $s=Object.defineProperty,As=Object.getOwnPropertyDescriptor,ii=(n,e,t,o)=>{for(var s=o>1?void 0:o?As(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&$s(e,t,s),s};let rt=class extends S{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),await this._fetchData()}async _fetchData(){console.log("fetching posts!");try{const n=await fetch("http://localhost:3000/posts");if(n.ok){const e=await n.json();this.posts=e,console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",n.status)}catch(n){console.error("Error fetching posts:",n)}}render(){return $`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};rt.styles=U`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;ii([E({type:Array})],rt.prototype,"posts",2);rt=ii([O("main-feed")],rt);var Ps=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,Ss=(n,e,t,o)=>{for(var s=o>1?void 0:o?Bs(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&Ps(e,t,s),s};let xt=class extends St{render(){return $`
      <section class="feed-page">
        <main-feed></main-feed>
      </section>
    `}};xt.styles=U`
    .feed-page {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `;xt=Ss([O("home-page")],xt);var Cs=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,Os=(n,e,t,o)=>{for(var s=o>1?void 0:o?Is(e,t):e,a=n.length-1,c;a>=0;a--)(c=n[a])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&Cs(e,t,s),s};let Us=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],vr=class extends Lr{constructor(){super(en)}render(){return $`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Us}> </vaadin-router>
      </auth-required>
    `}updated(n){console.log("MTVAPPElement updated:",n.keys()),n.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};vr=Os([O("mtv-app")],vr);
