(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=globalThis,Ot=Ke.ShadowRoot&&(Ke.ShadyCSS===void 0||Ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bt=Symbol(),Zt=new WeakMap;let Ir=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ot&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Zt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Zt.set(t,e))}return e}toString(){return this.cssText}};const Ci=r=>new Ir(typeof r=="string"?r:r+"",void 0,Bt),I=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,o,a)=>n+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new Ir(t,r,Bt)},Ti=(r,e)=>{if(Ot)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=Ke.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},er=Ot?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ci(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ii,defineProperty:Oi,getOwnPropertyDescriptor:Bi,getOwnPropertyNames:Ui,getOwnPropertySymbols:ki,getPrototypeOf:Ri}=Object,X=globalThis,tr=X.trustedTypes,Fi=tr?tr.emptyScript:"",vt=X.reactiveElementPolyfillSupport,Te=(r,e)=>r,Ze={toAttribute(r,e){switch(e){case Boolean:r=r?Fi:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ut=(r,e)=>!Ii(r,e),rr={attribute:!0,type:String,converter:Ze,reflect:!1,hasChanged:Ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),X.litPropertyMetadata??(X.litPropertyMetadata=new WeakMap);class me extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=rr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Oi(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=Bi(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return o==null?void 0:o.call(this)},set(l){const u=o==null?void 0:o.call(this);a.call(this,l),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??rr}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;const e=Ri(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){const t=this.properties,n=[...Ui(t),...ki(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(er(o))}else e!==void 0&&t.push(er(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ti(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var a;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const l=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:Ze).toAttribute(t,n.type);this._$Em=e,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(e,t){var a;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const l=n.getPropertyOptions(o),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Ze;this._$Em=o,this[o]=u.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Ut)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,l]of o)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[Te("elementProperties")]=new Map,me[Te("finalized")]=new Map,vt==null||vt({ReactiveElement:me}),(X.reactiveElementVersions??(X.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=globalThis,et=Ie.trustedTypes,ir=et?et.createPolicy("lit-html",{createHTML:r=>r}):void 0,Or="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Br="?"+Q,Di=`<${Br}>`,ie=document,Be=()=>ie.createComment(""),Ue=r=>r===null||typeof r!="object"&&typeof r!="function",Ur=Array.isArray,Mi=r=>Ur(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",xt=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sr=/-->/g,nr=/>/g,te=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),or=/'/g,ar=/"/g,kr=/^(?:script|style|textarea|title)$/i,Li=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),v=Li(1),be=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),cr=new WeakMap,re=ie.createTreeWalker(ie,129);function Rr(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ir!==void 0?ir.createHTML(e):e}const ji=(r,e)=>{const t=r.length-1,n=[];let o,a=e===2?"<svg>":"",l=Ce;for(let u=0;u<t;u++){const d=r[u];let g,b,y=-1,_=0;for(;_<d.length&&(l.lastIndex=_,b=l.exec(d),b!==null);)_=l.lastIndex,l===Ce?b[1]==="!--"?l=sr:b[1]!==void 0?l=nr:b[2]!==void 0?(kr.test(b[2])&&(o=RegExp("</"+b[2],"g")),l=te):b[3]!==void 0&&(l=te):l===te?b[0]===">"?(l=o??Ce,y=-1):b[1]===void 0?y=-2:(y=l.lastIndex-b[2].length,g=b[1],l=b[3]===void 0?te:b[3]==='"'?ar:or):l===ar||l===or?l=te:l===sr||l===nr?l=Ce:(l=te,o=void 0);const w=l===te&&r[u+1].startsWith("/>")?" ":"";a+=l===Ce?d+Di:y>=0?(n.push(g),d.slice(0,y)+Or+d.slice(y)+Q+w):d+Q+(y===-2?u:w)}return[Rr(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class ke{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,l=0;const u=e.length-1,d=this.parts,[g,b]=ji(e,t);if(this.el=ke.createElement(g,n),re.currentNode=this.el.content,t===2){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(o=re.nextNode())!==null&&d.length<u;){if(o.nodeType===1){if(o.hasAttributes())for(const y of o.getAttributeNames())if(y.endsWith(Or)){const _=b[l++],w=o.getAttribute(y).split(Q),R=/([.?@])?(.*)/.exec(_);d.push({type:1,index:a,name:R[2],strings:w,ctor:R[1]==="."?zi:R[1]==="?"?Hi:R[1]==="@"?qi:ht}),o.removeAttribute(y)}else y.startsWith(Q)&&(d.push({type:6,index:a}),o.removeAttribute(y));if(kr.test(o.tagName)){const y=o.textContent.split(Q),_=y.length-1;if(_>0){o.textContent=et?et.emptyScript:"";for(let w=0;w<_;w++)o.append(y[w],Be()),re.nextNode(),d.push({type:2,index:++a});o.append(y[_],Be())}}}else if(o.nodeType===8)if(o.data===Br)d.push({type:2,index:a});else{let y=-1;for(;(y=o.data.indexOf(Q,y+1))!==-1;)d.push({type:7,index:a}),y+=Q.length-1}a++}}static createElement(e,t){const n=ie.createElement("template");return n.innerHTML=e,n}}function ye(r,e,t=r,n){var l,u;if(e===be)return e;let o=n!==void 0?(l=t._$Co)==null?void 0:l[n]:t._$Cl;const a=Ue(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((u=o==null?void 0:o._$AO)==null||u.call(o,!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=o:t._$Cl=o),o!==void 0&&(e=ye(r,o._$AS(r,e.values),o,n)),e}class Ni{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??ie).importNode(t,!0);re.currentNode=o;let a=re.nextNode(),l=0,u=0,d=n[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new je(a,a.nextSibling,this,e):d.type===1?g=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(g=new Vi(a,this,e)),this._$AV.push(g),d=n[++u]}l!==(d==null?void 0:d.index)&&(a=re.nextNode(),l++)}return re.currentNode=ie,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class je{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ye(this,e,t),Ue(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==be&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==U&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(ie.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ke.createElement(Rr(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(t);else{const l=new Ni(o,this),u=l.u(this.options);l.p(t),this.T(u),this._$AH=l}}_$AC(e){let t=cr.get(e.strings);return t===void 0&&cr.set(e.strings,t=new ke(e)),t}k(e){Ur(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new je(this.S(Be()),this.S(Be()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}_$AI(e,t=this,n,o){const a=this.strings;let l=!1;if(a===void 0)e=ye(this,e,t,0),l=!Ue(e)||e!==this._$AH&&e!==be,l&&(this._$AH=e);else{const u=e;let d,g;for(e=a[0],d=0;d<a.length-1;d++)g=ye(this,u[n+d],t,d),g===be&&(g=this._$AH[d]),l||(l=!Ue(g)||g!==this._$AH[d]),g===U?e=U:e!==U&&(e+=(g??"")+a[d+1]),this._$AH[d]=g}l&&!o&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class zi extends ht{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}class Hi extends ht{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class qi extends ht{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=ye(this,e,t,0)??U)===be)return;const n=this._$AH,o=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==U&&(n===U||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Vi{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ye(this,e)}}const Et=Ie.litHtmlPolyfillSupport;Et==null||Et(ke,je),(Ie.litHtmlVersions??(Ie.litHtmlVersions=[])).push("3.1.2");const Wi=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const a=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new je(e.insertBefore(Be(),a),a,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return be}};var Tr;S._$litElement$=!0,S.finalized=!0,(Tr=globalThis.litElementHydrateSupport)==null||Tr.call(globalThis,{LitElement:S});const $t=globalThis.litElementPolyfillSupport;$t==null||$t({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi={attribute:!0,type:String,converter:Ze,reflect:!1,hasChanged:Ut},Ji=(r=Gi,e,t)=>{const{kind:n,metadata:o}=t;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(t.name,r),n==="accessor"){const{name:l}=t;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,d,r)},init(u){return u!==void 0&&this.P(l,void 0,r),u}}}if(n==="setter"){const{name:l}=t;return function(u){const d=this[l];e.call(this,u),this.requestUpdate(l,d,r)}}throw Error("Unsupported decorator location: "+n)};function x(r){return(e,t)=>typeof t=="object"?Ji(r,e,t):((n,o,a)=>{const l=o.hasOwnProperty(a);return o.constructor.createProperty(a,l?{...n,wrapped:!0}:n),l?Object.getOwnPropertyDescriptor(o,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(r){return x({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fr=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lr=class{constructor(e,t,n,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Fr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ki{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yi=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},hr=class extends Ki{constructor(e,t,n){var o,a;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=l=>{const u=l.composedPath()[0];l.context===this.context&&u!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,u,l.subscribe))},this.onProviderRequest=l=>{const u=l.composedPath()[0];if(l.context!==this.context||u===this.host)return;const d=new Set;for(const[g,{consumerHost:b}]of this.subscriptions)d.has(g)||(d.add(g),b.dispatchEvent(new Fr(this.context,g,!0)));l.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(o=this.host).addController)==null||a.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Yi(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dr({context:r}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new hr(this,{context:r}))}),{get(){return e.get.call(this)},set(o){var a;return(a=n.get(this))==null||a.setValue(o),e.set.call(this,o)},init(o){var a;return(a=n.get(this))==null||a.setValue(o),o}};{e.constructor.addInitializer(l=>{n.set(l,new hr(l,{context:r}))});const o=Object.getOwnPropertyDescriptor(e,t);let a;if(o===void 0){const l=new WeakMap;a={get:function(){return l.get(this)},set:function(u){n.get(this).setValue(u),l.set(this,u)},configurable:!0,enumerable:!0}}else{const l=o.set;a={...o,set:function(u){n.get(this).setValue(u),l==null||l.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mr({context:r,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new lr(this,{context:r,callback:o=>{this[n.name]=o},subscribe:e})}):t.constructor.addInitializer(o=>{new lr(o,{context:r,callback:a=>{o[n]=a},subscribe:e})})}}let Qi=class extends S{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",n=>{const o=n.detail;console.log("Got message: ",o),this.receive(o)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),n=t;typeof(n==null?void 0:n.then)=="function"?n.then(o=>{const a=o(this.model);this.model=a}):this.model=t}}},Xi=class extends S{dispatchMessage(e,t=this){const n=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(n)}};class Zi{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:n}=t,o=this._handlers.get(n);return o?o(t,e):e}}function es(r){return e=>Object.assign({},e,r)}function ts(r){return r}const rs="http://localhost:3000",is=`${rs}`,ss="/api",Pt="JWT_AUTH_TOKEN",Y=class Y{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new Y;return console.log("Deauthenticating",e,Y._theUser),e===Y._theUser&&(localStorage.removeItem(Pt),Y._theUser=t),t}};Y._theUser=new Y;let j=Y;class Re extends j{constructor(e,t){super();const o=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(o).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),l=JSON.parse(a);console.log("Token payload",l),this.token=e,this.authenticated=!0,this.username=l.username,this.signOut=t}static authenticate(e,t){return j._theUser=new Re(e,t),localStorage.setItem(Pt,e),j._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Pt);return t?Re.authenticate(t,e):j._theUser}}class kt{constructor(e){this._base=ss,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=j._theUser.authenticated,n={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${j._theUser.token}`};return e?{...n,...a}:a}else return e?{...n}:void 0}_url(e){return`${is}${this._base}${e}`}}class ur extends kt{constructor(e){super(Object.fromEntries(e))}}class Lr extends kt{constructor(){super(void 0)}}var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,jr=(r,e,t,n)=>{for(var o=n>1?void 0:n?os(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&ns(e,t,o),o};const Nr="MTVModel",dr={user:new j},as=()=>new Zi,zr=es,Hr=ts;class qr extends Qi{constructor(e){super(e,dr),this.model=dr}}jr([Dr({context:Nr}),O()],qr.prototype,"model",2);class Rt extends Xi{getFromModel(e){if(this._model)return this._model[e]}}jr([Mr({context:Nr,subscribe:!0}),x({attribute:!1})],Rt.prototype,"_model",2);const Ft=as(),cs=Ft.update;Ft.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Lr().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?zr({profile:t}):Hr)});Ft.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new kt(t).put(`/profiles/${e}`).then(n=>{if(n.status===200)return n.json()}).then(n=>{n&&console.log("Profile:",n)}).then(n=>n?zr({profile:n}):Hr)});const ls=I`
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
`;var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,Ne=(r,e,t,n)=>{for(var o=n>1?void 0:n?us(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&hs(e,t,o),o};let se=class extends S{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,n)=>{const o=t[0].toUpperCase(),a=n[0].toUpperCase();return o<a?-1:o>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return v`
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
    `}};se.styles=I`
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
  `;Ne([x({type:Array})],se.prototype,"names",2);Ne([x({type:Array})],se.prototype,"namesOriginalOrder",2);Ne([x({type:Array})],se.prototype,"listAttributes",2);Ne([O()],se.prototype,"sort_state",2);se=Ne([T("sortable-list")],se);var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,ut=(r,e,t,n)=>{for(var o=n>1?void 0:n?ps(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&ds(e,t,o),o};let _e=class extends S{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return v`
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
    `}};_e.styles=I`
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
  `;ut([x({type:Array})],_e.prototype,"names",2);ut([x({type:Array})],_e.prototype,"listAttributes",2);ut([O()],_e.prototype,"sort_state",2);_e=ut([T("general-list")],_e);var fs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,Dt=(r,e,t,n)=>{for(var o=n>1?void 0:n?ms(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&fs(e,t,o),o};let Fe=class extends S{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return v`
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
    `}};Fe.styles=I`
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
  `;Dt([x({type:Array})],Fe.prototype,"artists",2);Dt([x({type:String})],Fe.prototype,"listAttributes",2);Fe=Dt([T("favorites-list")],Fe);var gs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,Ee=(r,e,t,n)=>{for(var o=n>1?void 0:n?bs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&gs(e,t,o),o};let Z=class extends S{constructor(){super(...arguments),this.open=!1,this.align="left"}_signOutUser(){console.log("Log Out Clicked.");const r=new CustomEvent("userSignOutTriggeredWithinDropDown",{bubbles:!0,composed:!0});this.dispatchEvent(r)}render(){return v`
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
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};Z.styles=I`
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
  `;Ee([x({reflect:!0,type:Boolean})],Z.prototype,"open",2);Ee([x()],Z.prototype,"align",2);Ee([x()],Z.prototype,"profileImage",2);Ee([x()],Z.prototype,"profileUserID",2);Ee([x()],Z.prototype,"profileDescription",2);Z=Ee([T("drop-down")],Z);var ys=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Vr=(r,e,t,n)=>{for(var o=n>1?void 0:n?_s(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&ys(e,t,o),o};let tt=class extends S{constructor(){super(...arguments),this.on=!1}render(){return v`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};tt.styles=I`
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
  `;Vr([x({reflect:!0,type:Boolean})],tt.prototype,"on",2);tt=Vr([T("color-mode-switch")],tt);var ws=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,dt=(r,e,t,n)=>{for(var o=n>1?void 0:n?vs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&ws(e,t,o),o};let we=class extends S{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return v`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};we.styles=I`
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
  `;dt([x()],we.prototype,"title",2);dt([x()],we.prototype,"description",2);dt([x()],we.prototype,"user_id",2);we=dt([T("default-card")],we);var xs=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,Mt=(r,e,t,n)=>{for(var o=n>1?void 0:n?Es(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&xs(e,t,o),o};let De=class extends S{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return v`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};De.styles=I`
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
  `;Mt([x({reflect:!0,type:Boolean})],De.prototype,"on",2);Mt([x()],De.prototype,"filteredState",2);De=Mt([T("toggle-switch")],De);const $s=I`
  /* General form styling */
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
`;var As=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Wr=(r,e,t,n)=>{for(var o=n>1?void 0:n?Ss(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&As(e,t,o),o};let rt=class extends S{constructor(r){super(),this.profile=r}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),n={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),profileImage:t.get("profileImage"),spotify:t.get("spotify")==="true"},o=new CustomEvent("profile-update",{detail:{profile:n},bubbles:!0,composed:!0});console.log("profile-update Event being sent to DOM"),this.dispatchEvent(o);const a=new CustomEvent("update-using",{detail:{profile:n},bubbles:!0,composed:!0});console.log("profile update event being sent to profile component to update using"),this.dispatchEvent(a),this.requestUpdate()}render(){var r,e,t,n,o,a,l;return v`
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
                    .value=${(n=this.profile)==null?void 0:n.timezone}
                  />
                </div>
                <div class="form-group">
                  <label for="profileImage">Profile Image URL</label>
                  <input
                    type="text"
                    id="profileImage"
                    name="profileImage"
                    .value=${(o=this.profile)==null?void 0:o.profileImage}
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
          `}};rt.styles=[$s];Wr([x({type:Object})],rt.prototype,"profile",2);rt=Wr([T("edit-profile-form")],rt);var Ps=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,ze=(r,e,t,n)=>{for(var o=n>1?void 0:n?Cs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&Ps(e,t,o),o};let ne=class extends S{constructor(){super(...arguments),this.path="",this.editMode=!1,this.profileEditText="Edit Profile."}get profile(){return this.using||{}}connectedCallback(){super.connectedCallback(),this.addEventListener("update-using",this._handleUsingUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("update-using",this._handleUsingUpdate)}_handleUsingUpdate(r){r.detail&&r.detail.profile&&(this.using=r.detail.profile,this._changeEditMode(),this.requestUpdate())}_changeEditMode(){this.editMode=!this.editMode,this.profileEditText=this.editMode?"Close Edit Menu.":"Edit Profile."}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),n={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),profileImage:t.get("profileImage"),spotify:t.get("spotify")==="true"};this.using=n,this.requestUpdate(),console.log("Form submitted with:",n);const o=new CustomEvent("profile-update",{detail:{profile:n},bubbles:!0,composed:!0});this.dispatchEvent(o),this._changeEditMode()}render(){const{name:r,profileImage:e,profileDescription:t,bio:n}=this.profile;return v`
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
    `}};ne.styles=ls;ze([x()],ne.prototype,"path",2);ze([x()],ne.prototype,"editMode",2);ze([x()],ne.prototype,"profileEditText",2);ze([x({attribute:!1})],ne.prototype,"using",2);ne=ze([T("user-profile")],ne);function it(r){return r=r||[],Array.isArray(r)?r:[r]}function N(r){return`[Vaadin.Router] ${r}`}function Ts(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const st="module",nt="nomodule",Ct=[st,nt];function pr(r){if(!r.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Gr(r){if(!r||!L(r.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!oe(r.action)&&!Array.isArray(r.children)&&!oe(r.children)&&!ot(e)&&!t.some(n=>L(r[n])))throw new Error(N(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(L(e))pr(e);else if(Ct.some(n=>n in e))Ct.forEach(n=>n in e&&pr(e[n]));else throw new Error(N('Expected route bundle to include either "'+nt+'" or "'+st+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(N(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function fr(r){it(r).forEach(e=>Gr(e))}function mr(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===st?t.setAttribute("type",st):e===nt&&t.setAttribute(nt,""),t.async=!0),new Promise((n,o)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,n(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),o(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function Is(r){return L(r)?mr(r):Promise.race(Ct.filter(e=>e in r).map(e=>mr(r[e],e)))}function Oe(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ot(r){return typeof r=="object"&&!!r}function oe(r){return typeof r=="function"}function L(r){return typeof r=="string"}function Jr(r){const e=new Error(N(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const ge=new class{};function Os(r){const e=r.port,t=r.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function gr(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let u=0;u<t.length;u++){const d=t[u];if(d.nodeName&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Os(e))!==window.location.origin)return;const{pathname:o,search:a,hash:l}=e;Oe("go",{pathname:o,search:a,hash:l})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Bs={activate(){window.document.addEventListener("click",gr)},inactivate(){window.document.removeEventListener("click",gr)}},Us=/Trident/.test(navigator.userAgent);Us&&!oe(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function br(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;Oe("go",{pathname:e,search:t,hash:n})}const ks={activate(){window.addEventListener("popstate",br)},inactivate(){window.removeEventListener("popstate",br)}};var $e=ei,Rs=Lt,Fs=js,Ds=Qr,Ms=Zr,Kr="/",Yr="./",Ls=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Lt(r,e){for(var t=[],n=0,o=0,a="",l=e&&e.delimiter||Kr,u=e&&e.delimiters||Yr,d=!1,g;(g=Ls.exec(r))!==null;){var b=g[0],y=g[1],_=g.index;if(a+=r.slice(o,_),o=_+b.length,y){a+=y[1],d=!0;continue}var w="",R=r[o],ee=g[2],gt=g[3],Ae=g[4],he=g[5];if(!d&&a.length){var ue=a.length-1;u.indexOf(a[ue])>-1&&(w=a[ue],a=a.slice(0,ue))}a&&(t.push(a),a="",d=!1);var bt=w!==""&&R!==void 0&&R!==w,V=he==="+"||he==="*",Ve=he==="?"||he==="*",Se=w||l,We=gt||Ae;t.push({name:ee||n++,prefix:w,delimiter:Se,optional:Ve,repeat:V,partial:bt,pattern:We?Ns(We):"[^"+K(Se)+"]+?"})}return(a||o<r.length)&&t.push(a+r.substr(o)),t}function js(r,e){return Qr(Lt(r,e))}function Qr(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,o){for(var a="",l=o&&o.encode||encodeURIComponent,u=0;u<r.length;u++){var d=r[u];if(typeof d=="string"){a+=d;continue}var g=n?n[d.name]:void 0,b;if(Array.isArray(g)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(g.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var y=0;y<g.length;y++){if(b=l(g[y],d),!e[u].test(b))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');a+=(y===0?d.prefix:d.delimiter)+b}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(b=l(String(g),d),!e[u].test(b))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+b+'"');a+=d.prefix+b;continue}if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"))}return a}}function K(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ns(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Xr(r){return r&&r.sensitive?"":"i"}function zs(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Hs(r,e,t){for(var n=[],o=0;o<r.length;o++)n.push(ei(r[o],e,t).source);return new RegExp("(?:"+n.join("|")+")",Xr(t))}function qs(r,e,t){return Zr(Lt(r,t),e,t)}function Zr(r,e,t){t=t||{};for(var n=t.strict,o=t.start!==!1,a=t.end!==!1,l=K(t.delimiter||Kr),u=t.delimiters||Yr,d=[].concat(t.endsWith||[]).map(K).concat("$").join("|"),g=o?"^":"",b=r.length===0,y=0;y<r.length;y++){var _=r[y];if(typeof _=="string")g+=K(_),b=y===r.length-1&&u.indexOf(_[_.length-1])>-1;else{var w=_.repeat?"(?:"+_.pattern+")(?:"+K(_.delimiter)+"(?:"+_.pattern+"))*":_.pattern;e&&e.push(_),_.optional?_.partial?g+=K(_.prefix)+"("+w+")?":g+="(?:"+K(_.prefix)+"("+w+"))?":g+=K(_.prefix)+"("+w+")"}}return a?(n||(g+="(?:"+l+")?"),g+=d==="$"?"$":"(?="+d+")"):(n||(g+="(?:"+l+"(?="+d+"))?"),b||(g+="(?="+l+"|"+d+")")),new RegExp(g,Xr(t))}function ei(r,e,t){return r instanceof RegExp?zs(r,e):Array.isArray(r)?Hs(r,e,t):qs(r,e,t)}$e.parse=Rs;$e.compile=Fs;$e.tokensToFunction=Ds;$e.tokensToRegExp=Ms;const{hasOwnProperty:Vs}=Object.prototype,Tt=new Map;Tt.set("|false",{keys:[],pattern:/(?:)/});function yr(r){try{return decodeURIComponent(r)}catch{return r}}function Ws(r,e,t,n,o){t=!!t;const a=`${r}|${t}`;let l=Tt.get(a);if(!l){const g=[];l={keys:g,pattern:$e(r,g,{end:t,strict:r===""})},Tt.set(a,l)}const u=l.pattern.exec(e);if(!u)return null;const d=Object.assign({},o);for(let g=1;g<u.length;g++){const b=l.keys[g-1],y=b.name,_=u[g];(_!==void 0||!Vs.call(d,y))&&(b.repeat?d[y]=_?_.split(b.delimiter).map(yr):[]:d[y]=_&&yr(_))}return{path:u[0],keys:(n||[]).concat(l.keys),params:d}}function ti(r,e,t,n,o){let a,l,u=0,d=r.path||"";return d.charAt(0)==="/"&&(t&&(d=d.substr(1)),t=!0),{next(g){if(r===g)return{done:!0};const b=r.__children=r.__children||r.children;if(!a&&(a=Ws(d,e,!b,n,o),a))return{done:!1,value:{route:r,keys:a.keys,params:a.params,path:a.path}};if(a&&b)for(;u<b.length;){if(!l){const _=b[u];_.parent=r;let w=a.path.length;w>0&&e.charAt(w)==="/"&&(w+=1),l=ti(_,e.substr(w),t,a.keys,a.params)}const y=l.next(g);if(!y.done)return{done:!1,value:y.value};l=null,u++}return{done:!0}}}}function Gs(r){if(oe(r.route.action))return r.route.action(r)}function Js(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Ks(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Ys(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const o={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let a=r.chain.length;for(;a--&&r.chain[a].route&&r.chain[a].route!==t.parent;)r.chain.pop()}r.chain.push(o)}}class Me{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Gs,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){fr(e);const t=[...it(e)];this.root.__children=t}addRoutes(e){return fr(e),this.root.__children.push(...it(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,L(e)?{pathname:e}:e),n=ti(this.root,this.__normalizePathname(t.pathname),this.baseUrl),o=this.resolveRoute;let a=null,l=null,u=t;function d(g,b=a.value.route,y){const _=y===null&&a.value.route;return a=l||n.next(_),l=null,!g&&(a.done||!Js(b,a.value.route))?(l=a,Promise.resolve(ge)):a.done?Promise.reject(Jr(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),Ys(u,a.value),Promise.resolve(o(u)).then(w=>w!=null&&w!==ge?(u.result=w.result||w,u):d(g,b,w)))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(g=>{const b=Ks(u);if(g?console.warn(b):g=new Error(b),g.context=g.context||u,g instanceof DOMException||(g.code=g.code||500),this.errorHandler)return u.result=this.errorHandler(g),u;throw g})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}Me.pathToRegexp=$e;const{pathToRegexp:_r}=Me,wr=new Map;function ri(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let o=0;o<t.length;o++){const a=t[o];a.parent=e,ri(r,a,a.__children||a.children)}}function vr(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function xr(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Qs(r,e={}){if(!(r instanceof Me))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,o)=>{let a=vr(t,n);if(!a&&(t.clear(),ri(t,r.root,r.root.__children),a=vr(t,n),!a))throw new Error(`Route "${n}" not found`);let l=wr.get(a.fullPath);if(!l){let d=xr(a),g=a.parent;for(;g;){const w=xr(g);w&&(d=w.replace(/\/$/,"")+"/"+d.replace(/^\//,"")),g=g.parent}const b=_r.parse(d),y=_r.tokensToFunction(b),_=Object.create(null);for(let w=0;w<b.length;w++)L(b[w])||(_[b[w].name]=!0);l={toPath:y,keys:_},wr.set(d,l),a.fullPath=d}let u=l.toPath(o,e)||"/";if(e.stringifyQueryParams&&o){const d={},g=Object.keys(o);for(let y=0;y<g.length;y++){const _=g[y];l.keys[_]||(d[_]=o[_])}const b=e.stringifyQueryParams(d);b&&(u+=b.charAt(0)==="?"?b:`?${b}`)}return u}}let Er=[];function Xs(r){Er.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Er=r}const Zs=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},en=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function $r(r,e){return r.classList.add(e),new Promise(t=>{if(Zs(r)){const n=r.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${o}`),en(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const tn=256;function At(r){return r!=null}function rn(r){const e=Object.assign({},r);return delete e.next,e}function M({pathname:r="",search:e="",hash:t="",chain:n=[],params:o={},redirectFrom:a,resolver:l},u){const d=n.map(g=>g.route);return{baseUrl:l&&l.baseUrl||"",pathname:r,search:e,hash:t,routes:d,route:u||d.length&&d[d.length-1]||null,params:o,redirectFrom:a,getUrl:(g={})=>Qe(W.pathToRegexp.compile(ii(d))(Object.assign({},o,g)),l)}}function Ar(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function sn(r,e){e.location=M(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function Ye(r,e,t){if(oe(r))return r.apply(t,e)}function Sr(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return Ye(t[r],e,t)}}function nn(r,e){if(!Array.isArray(r)&&!ot(r))throw new Error(N(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=it(r);for(let n=0;n<t.length;n++)Gr(t[n]),e.__children.push(t[n])}function Je(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Qe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function ii(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class W extends Me{constructor(e,t){const n=document.head.querySelector("base"),o=n&&n.getAttribute("href");super([],Object.assign({baseUrl:o&&Me.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=l=>this.__resolveRoute(l);const a=W.NavigationTrigger;W.setTriggers.apply(W,Object.keys(a).map(l=>a[l])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=M({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();oe(t.children)&&(n=n.then(()=>t.children(rn(e))).then(a=>{!At(a)&&!oe(t.children)&&(a=t.children),nn(a,t)}));const o={redirect:a=>Ar(e,a),component:a=>{const l=document.createElement(a);return this.__createdByRouter.set(l,!0),l}};return n.then(()=>{if(this.__isLatestRender(e))return Ye(t.action,[e,o],t)}).then(a=>{if(At(a)&&(a instanceof HTMLElement||a.redirect||a===ge))return a;if(L(t.redirect))return o.redirect(t.redirect);if(t.bundle)return Is(t.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(At(a))return a;if(L(t.component))return o.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},L(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(o).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const l=this.__previousContext;if(a===l)return this.__updateBrowserHistory(l,!0),this.location;if(this.location=M(a),t&&this.__updateBrowserHistory(a,n===1),Oe("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,l),this.__previousContext=a,this.location;this.__addAppearingContent(a,l);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,l),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(o),Je(this.__outlet&&this.__outlet.children),this.location=M(Object.assign(o,{resolver:this})),Oe("error",Object.assign({router:this,error:a},o)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const a=n!==t?n:e,u=Qe(ii(n.chain),n.resolver)===n.pathname,d=(g,b=g.route,y)=>g.next(void 0,b,y).then(_=>_===null||_===ge?u?g:b.parent!==null?d(g,b.parent,_):_:_);return d(n).then(g=>{if(g===null||g===ge)throw Jr(a);return g&&g!==ge&&g!==n?this.__fullyResolveChain(a,g):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(sn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(N(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Ts(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],o=e.chain;let a=Promise.resolve();const l=()=>({cancel:!0}),u=d=>Ar(e,d);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let d=0;d<Math.min(n.length,o.length)&&!(n[d].route!==o[d].route||n[d].path!==o[d].path&&n[d].element!==o[d].element||!this.__isReusableElement(n[d].element,o[d].element));d=++e.__divergedChainIndex);if(e.__skipAttach=o.length===n.length&&e.__divergedChainIndex==o.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let d=o.length-1;d>=0;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},n[d]);for(let d=0;d<o.length;d++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},o[d]),n[d].element.location=M(e,n[d].route)}else for(let d=n.length-1;d>=e.__divergedChainIndex;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},n[d])}if(!e.__skipAttach)for(let d=0;d<o.length;d++)d<e.__divergedChainIndex?d<n.length&&n[d].element&&(n[d].element.location=M(e,n[d].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},o[d]),o[d].element&&(o[d].element.location=M(e,o[d].route)));return a.then(d=>{if(d){if(d.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(d.redirect)return this.__redirect(d.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,o){const a=M(t);return e.then(l=>{if(this.__isLatestRender(t))return Sr("onBeforeLeave",[a,n,this],o.element)(l)}).then(l=>{if(!(l||{}).redirect)return l})}__runOnBeforeEnterCallbacks(e,t,n,o){const a=M(t,o.route);return e.then(l=>{if(this.__isLatestRender(t))return Sr("onBeforeEnter",[a,n,this],o.element)(l)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>tn)throw new Error(N(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},o){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const a=o?"replaceState":"pushState";window.history[a](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let o=0;o<e.__divergedChainIndex;o++){const a=t&&t.chain[o].element;if(a)if(a.parentNode===n)e.chain[o].element=a,n=a;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let o=n;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const l=e.chain[a].element;l&&(o.appendChild(l),this.__addedByRouter.set(l,!0),o===n&&this.__appearingContent.push(l),o=l)}}__removeDisappearingContent(){this.__disappearingContent&&Je(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Je(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const o=t.chain[n].element;if(o)try{const a=M(e);Ye(o.onAfterLeave,[a,{},t.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&Je(o.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},o=M(e,e.chain[t].route);Ye(n.onAfterEnter,[o,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],o=[],a=e.chain;let l;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){l=a[u-1].route.animate;break}if(t&&n&&l){const u=ot(l)&&l.leave||"leaving",d=ot(l)&&l.enter||"entering";o.push($r(t,u)),o.push($r(n,d))}return Promise.all(o).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:o}=e?e.detail:window.location;L(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:o},!0))}static setTriggers(...e){Xs(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Qs(this)),Qe(this.__urlForName(e,t),this)}urlForPath(e,t){return Qe(W.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:o}=L(e)?this.__createUrl(e,"http://a"):e;return Oe("go",{pathname:t,search:n,hash:o})}}const on=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Xe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function an(){function r(){return!0}return si(r)}function cn(){try{return ln()?!0:hn()?Xe?!un():!an():!1}catch{return!1}}function ln(){return localStorage.getItem("vaadin.developmentmode.force")}function hn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function un(){return!!(Xe&&Object.keys(Xe).map(e=>Xe[e]).filter(e=>e.productionMode).length>0)}function si(r,e){if(typeof r!="function")return;const t=on.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const Pr=function(r,e){if(window.Vaadin.developmentMode)return si(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=cn());function dn(){}const pn=function(){if(typeof Pr=="function")return Pr(dn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});pn();W.NavigationTrigger={POPSTATE:ks,CLICK:Bs};var fn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,ni=(r,e,t,n)=>{for(var o=n>1?void 0:n?mn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&fn(e,t,o),o};let It=class extends S{constructor(){super(...arguments),this.router=new W(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return v`<slot></slot>`}};ni([x({attribute:!1})],It.prototype,"routes",2);It=ni([T("vaadin-router")],It);var gn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,le=(r,e,t,n)=>{for(var o=n>1?void 0:n?bn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&gn(e,t,o),o};let oi="auth",G=class extends S{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Re.authenticateFromLocalStorage(()=>this._signOut()),this.showLoginForm=!1,this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this._handleSignOutEvent=r=>{console.log("Sign out event received",r),this._signOut()}}isAuthenticated(){return this.user.authenticated}toggleLoginForm(){this.showLoginForm=!this.showLoginForm,this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this.requestUpdate()}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}_loginUser(r,e){const t=new FormData;t.append("username",r),t.append("pwd",e),new ur(t).base().post("/login").then(o=>{if(o.status===200)return o.json();throw this.loginStatus=o.status,new Error(`Login failed with status: ${o.status}`)}).then(o=>{console.log("Log In Request Successful!"),this.user=Re.authenticate(o.token,()=>this._signOut()),this._toggleDialog(!1),W.go("/app/home"),this.requestUpdate()}).catch(o=>console.error("Login Error:",o))}_handleLoginSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),n=t.get("username"),o=t.get("pwd");typeof n=="string"&&typeof o=="string"?this._loginUser(n,o):console.error("Username or password field is missing or not correctly entered.")}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e),n=new ur(t),o=t.get("username"),a=t.get("pwd");n.base().post("/signup").then(l=>{if(l.status===201)return l.json();throw new Error(`Failed to register. Status: ${l.status}`)}).then(l=>{if(console.log("Registration Successful!",l),this.communicateResultToUser("success"),typeof o=="string"&&typeof a=="string")this._loginUser(o,a);else throw new Error("Username or password missing from form data.")}).catch(l=>{console.error("Error during registration:",l),this.communicateResultToUser("error")})}communicateResultToUser(r){r==="error"&&(this.showSignUpErrorMessage=!this.showSignUpErrorMessage),r==="success"&&(this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!0)}connectedCallback(){super.connectedCallback(),this.addEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}render(){const r=v`
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
    `;return v`${this.isAuthenticated()?"":r} <slot></slot>`}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=j.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};G.styles=I`
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
  `;le([O()],G.prototype,"loginStatus",2);le([O()],G.prototype,"registerStatus",2);le([Dr({context:oi}),O()],G.prototype,"user",2);le([O()],G.prototype,"showLoginForm",2);le([O()],G.prototype,"showSignUpErrorMessage",2);le([O()],G.prototype,"showSignUpSuccessMessage",2);G=le([T("auth-required")],G);var yn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,jt=(r,e,t,n)=>{for(var o=n>1?void 0:n?_n(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&yn(e,t,o),o};let Le=class extends S{constructor(){super(...arguments),this.user=new j}render(){const{profileImage:r,profileDescription:e,userid:t}=this.profile||{};return v`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${r}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Lr().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};Le.styles=I`
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
  `;jt([O()],Le.prototype,"profile",2);jt([Mr({context:oi,subscribe:!0}),x({attribute:!1})],Le.prototype,"user",2);Le=jt([T("match-the-vibe-header")],Le);var wn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,He=(r,e,t,n)=>{for(var o=n>1?void 0:n?vn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&wn(e,t,o),o};let ae=class extends Rt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return v`
      <section class="profile-page">
        <user-profile .using=${this.profile}> </user-profile>
      </section>
    `}};ae.styles=[I`
      :host {
        display: contents;
      }

      .profile-page {
        display: flex;
        justify-content: center;
      }
    `];He([x({attribute:!1})],ae.prototype,"location",2);He([x({reflect:!0})],ae.prototype,"userid",1);He([x({reflect:!0})],ae.prototype,"edit",1);He([x()],ae.prototype,"profile",1);ae=He([T("profile-page")],ae);var Nt={},pt={};pt.byteLength=$n;pt.toByteArray=Sn;pt.fromByteArray=Tn;var q=[],D=[],xn=typeof Uint8Array<"u"?Uint8Array:Array,St="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var fe=0,En=St.length;fe<En;++fe)q[fe]=St[fe],D[St.charCodeAt(fe)]=fe;D[45]=62;D[95]=63;function ai(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}function $n(r){var e=ai(r),t=e[0],n=e[1];return(t+n)*3/4-n}function An(r,e,t){return(e+t)*3/4-t}function Sn(r){var e,t=ai(r),n=t[0],o=t[1],a=new xn(An(r,n,o)),l=0,u=o>0?n-4:n,d;for(d=0;d<u;d+=4)e=D[r.charCodeAt(d)]<<18|D[r.charCodeAt(d+1)]<<12|D[r.charCodeAt(d+2)]<<6|D[r.charCodeAt(d+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return o===2&&(e=D[r.charCodeAt(d)]<<2|D[r.charCodeAt(d+1)]>>4,a[l++]=e&255),o===1&&(e=D[r.charCodeAt(d)]<<10|D[r.charCodeAt(d+1)]<<4|D[r.charCodeAt(d+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function Pn(r){return q[r>>18&63]+q[r>>12&63]+q[r>>6&63]+q[r&63]}function Cn(r,e,t){for(var n,o=[],a=e;a<t;a+=3)n=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),o.push(Pn(n));return o.join("")}function Tn(r){for(var e,t=r.length,n=t%3,o=[],a=16383,l=0,u=t-n;l<u;l+=a)o.push(Cn(r,l,l+a>u?u:l+a));return n===1?(e=r[t-1],o.push(q[e>>2]+q[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],o.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"=")),o.join("")}var zt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */zt.read=function(r,e,t,n,o){var a,l,u=o*8-n-1,d=(1<<u)-1,g=d>>1,b=-7,y=t?o-1:0,_=t?-1:1,w=r[e+y];for(y+=_,a=w&(1<<-b)-1,w>>=-b,b+=u;b>0;a=a*256+r[e+y],y+=_,b-=8);for(l=a&(1<<-b)-1,a>>=-b,b+=n;b>0;l=l*256+r[e+y],y+=_,b-=8);if(a===0)a=1-g;else{if(a===d)return l?NaN:(w?-1:1)*(1/0);l=l+Math.pow(2,n),a=a-g}return(w?-1:1)*l*Math.pow(2,a-n)};zt.write=function(r,e,t,n,o,a){var l,u,d,g=a*8-o-1,b=(1<<g)-1,y=b>>1,_=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=n?0:a-1,R=n?1:-1,ee=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,l=b):(l=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-l))<1&&(l--,d*=2),l+y>=1?e+=_/d:e+=_*Math.pow(2,1-y),e*d>=2&&(l++,d/=2),l+y>=b?(u=0,l=b):l+y>=1?(u=(e*d-1)*Math.pow(2,o),l=l+y):(u=e*Math.pow(2,y-1)*Math.pow(2,o),l=0));o>=8;r[t+w]=u&255,w+=R,u/=256,o-=8);for(l=l<<o|u,g+=o;g>0;r[t+w]=l&255,w+=R,l/=256,g-=8);r[t+w-R]|=ee*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(r){const e=pt,t=zt,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=u,r.SlowBuffer=he,r.INSPECT_MAX_BYTES=50;const o=2147483647;r.kMaxLength=o,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const c=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(c,i),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function l(c){if(c>o)throw new RangeError('The value "'+c+'" is invalid for option "size"');const i=new Uint8Array(c);return Object.setPrototypeOf(i,u.prototype),i}function u(c,i,s){if(typeof c=="number"){if(typeof i=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return y(c)}return d(c,i,s)}u.poolSize=8192;function d(c,i,s){if(typeof c=="string")return _(c,i);if(ArrayBuffer.isView(c))return R(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(H(c,ArrayBuffer)||c&&H(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(H(c,SharedArrayBuffer)||c&&H(c.buffer,SharedArrayBuffer)))return ee(c,i,s);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=c.valueOf&&c.valueOf();if(h!=null&&h!==c)return u.from(h,i,s);const p=gt(c);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),i,s);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,i,s){return d(c,i,s)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function g(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function b(c,i,s){return g(c),c<=0?l(c):i!==void 0?typeof s=="string"?l(c).fill(i,s):l(c).fill(i):l(c)}u.alloc=function(c,i,s){return b(c,i,s)};function y(c){return g(c),l(c<0?0:Ae(c)|0)}u.allocUnsafe=function(c){return y(c)},u.allocUnsafeSlow=function(c){return y(c)};function _(c,i){if((typeof i!="string"||i==="")&&(i="utf8"),!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);const s=ue(c,i)|0;let h=l(s);const p=h.write(c,i);return p!==s&&(h=h.slice(0,p)),h}function w(c){const i=c.length<0?0:Ae(c.length)|0,s=l(i);for(let h=0;h<i;h+=1)s[h]=c[h]&255;return s}function R(c){if(H(c,Uint8Array)){const i=new Uint8Array(c);return ee(i.buffer,i.byteOffset,i.byteLength)}return w(c)}function ee(c,i,s){if(i<0||c.byteLength<i)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<i+(s||0))throw new RangeError('"length" is outside of buffer bounds');let h;return i===void 0&&s===void 0?h=new Uint8Array(c):s===void 0?h=new Uint8Array(c,i):h=new Uint8Array(c,i,s),Object.setPrototypeOf(h,u.prototype),h}function gt(c){if(u.isBuffer(c)){const i=Ae(c.length)|0,s=l(i);return s.length===0||c.copy(s,0,0,i),s}if(c.length!==void 0)return typeof c.length!="number"||wt(c.length)?l(0):w(c);if(c.type==="Buffer"&&Array.isArray(c.data))return w(c.data)}function Ae(c){if(c>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return c|0}function he(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(i){return i!=null&&i._isBuffer===!0&&i!==u.prototype},u.compare=function(i,s){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),H(s,Uint8Array)&&(s=u.from(s,s.offset,s.byteLength)),!u.isBuffer(i)||!u.isBuffer(s))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(i===s)return 0;let h=i.length,p=s.length;for(let f=0,m=Math.min(h,p);f<m;++f)if(i[f]!==s[f]){h=i[f],p=s[f];break}return h<p?-1:p<h?1:0},u.isEncoding=function(i){switch(String(i).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(i,s){if(!Array.isArray(i))throw new TypeError('"list" argument must be an Array of Buffers');if(i.length===0)return u.alloc(0);let h;if(s===void 0)for(s=0,h=0;h<i.length;++h)s+=i[h].length;const p=u.allocUnsafe(s);let f=0;for(h=0;h<i.length;++h){let m=i[h];if(H(m,Uint8Array))f+m.length>p.length?(u.isBuffer(m)||(m=u.from(m)),m.copy(p,f)):Uint8Array.prototype.set.call(p,m,f);else if(u.isBuffer(m))m.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=m.length}return p};function ue(c,i){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||H(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const s=c.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&s===0)return 0;let p=!1;for(;;)switch(i){case"ascii":case"latin1":case"binary":return s;case"utf8":case"utf-8":return _t(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return s*2;case"hex":return s>>>1;case"base64":return Xt(c).length;default:if(p)return h?-1:_t(c).length;i=(""+i).toLowerCase(),p=!0}}u.byteLength=ue;function bt(c,i,s){let h=!1;if((i===void 0||i<0)&&(i=0),i>this.length||((s===void 0||s>this.length)&&(s=this.length),s<=0)||(s>>>=0,i>>>=0,s<=i))return"";for(c||(c="utf8");;)switch(c){case"hex":return _i(this,i,s);case"utf8":case"utf-8":return Ht(this,i,s);case"ascii":return bi(this,i,s);case"latin1":case"binary":return yi(this,i,s);case"base64":return mi(this,i,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wi(this,i,s);default:if(h)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function V(c,i,s){const h=c[i];c[i]=c[s],c[s]=h}u.prototype.swap16=function(){const i=this.length;if(i%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let s=0;s<i;s+=2)V(this,s,s+1);return this},u.prototype.swap32=function(){const i=this.length;if(i%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let s=0;s<i;s+=4)V(this,s,s+3),V(this,s+1,s+2);return this},u.prototype.swap64=function(){const i=this.length;if(i%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let s=0;s<i;s+=8)V(this,s,s+7),V(this,s+1,s+6),V(this,s+2,s+5),V(this,s+3,s+4);return this},u.prototype.toString=function(){const i=this.length;return i===0?"":arguments.length===0?Ht(this,0,i):bt.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(i){if(!u.isBuffer(i))throw new TypeError("Argument must be a Buffer");return this===i?!0:u.compare(this,i)===0},u.prototype.inspect=function(){let i="";const s=r.INSPECT_MAX_BYTES;return i=this.toString("hex",0,s).replace(/(.{2})/g,"$1 ").trim(),this.length>s&&(i+=" ... "),"<Buffer "+i+">"},n&&(u.prototype[n]=u.prototype.inspect),u.prototype.compare=function(i,s,h,p,f){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(i))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof i);if(s===void 0&&(s=0),h===void 0&&(h=i?i.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),s<0||h>i.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&s>=h)return 0;if(p>=f)return-1;if(s>=h)return 1;if(s>>>=0,h>>>=0,p>>>=0,f>>>=0,this===i)return 0;let m=f-p,E=h-s;const P=Math.min(m,E),A=this.slice(p,f),C=i.slice(s,h);for(let $=0;$<P;++$)if(A[$]!==C[$]){m=A[$],E=C[$];break}return m<E?-1:E<m?1:0};function Ve(c,i,s,h,p){if(c.length===0)return-1;if(typeof s=="string"?(h=s,s=0):s>2147483647?s=2147483647:s<-2147483648&&(s=-2147483648),s=+s,wt(s)&&(s=p?0:c.length-1),s<0&&(s=c.length+s),s>=c.length){if(p)return-1;s=c.length-1}else if(s<0)if(p)s=0;else return-1;if(typeof i=="string"&&(i=u.from(i,h)),u.isBuffer(i))return i.length===0?-1:Se(c,i,s,h,p);if(typeof i=="number")return i=i&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(c,i,s):Uint8Array.prototype.lastIndexOf.call(c,i,s):Se(c,[i],s,h,p);throw new TypeError("val must be string, number or Buffer")}function Se(c,i,s,h,p){let f=1,m=c.length,E=i.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(c.length<2||i.length<2)return-1;f=2,m/=2,E/=2,s/=2}function P(C,$){return f===1?C[$]:C.readUInt16BE($*f)}let A;if(p){let C=-1;for(A=s;A<m;A++)if(P(c,A)===P(i,C===-1?0:A-C)){if(C===-1&&(C=A),A-C+1===E)return C*f}else C!==-1&&(A-=A-C),C=-1}else for(s+E>m&&(s=m-E),A=s;A>=0;A--){let C=!0;for(let $=0;$<E;$++)if(P(c,A+$)!==P(i,$)){C=!1;break}if(C)return A}return-1}u.prototype.includes=function(i,s,h){return this.indexOf(i,s,h)!==-1},u.prototype.indexOf=function(i,s,h){return Ve(this,i,s,h,!0)},u.prototype.lastIndexOf=function(i,s,h){return Ve(this,i,s,h,!1)};function We(c,i,s,h){s=Number(s)||0;const p=c.length-s;h?(h=Number(h),h>p&&(h=p)):h=p;const f=i.length;h>f/2&&(h=f/2);let m;for(m=0;m<h;++m){const E=parseInt(i.substr(m*2,2),16);if(wt(E))return m;c[s+m]=E}return m}function ui(c,i,s,h){return Ge(_t(i,c.length-s),c,s,h)}function di(c,i,s,h){return Ge($i(i),c,s,h)}function pi(c,i,s,h){return Ge(Xt(i),c,s,h)}function fi(c,i,s,h){return Ge(Ai(i,c.length-s),c,s,h)}u.prototype.write=function(i,s,h,p){if(s===void 0)p="utf8",h=this.length,s=0;else if(h===void 0&&typeof s=="string")p=s,h=this.length,s=0;else if(isFinite(s))s=s>>>0,isFinite(h)?(h=h>>>0,p===void 0&&(p="utf8")):(p=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-s;if((h===void 0||h>f)&&(h=f),i.length>0&&(h<0||s<0)||s>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let m=!1;for(;;)switch(p){case"hex":return We(this,i,s,h);case"utf8":case"utf-8":return ui(this,i,s,h);case"ascii":case"latin1":case"binary":return di(this,i,s,h);case"base64":return pi(this,i,s,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fi(this,i,s,h);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function mi(c,i,s){return i===0&&s===c.length?e.fromByteArray(c):e.fromByteArray(c.slice(i,s))}function Ht(c,i,s){s=Math.min(c.length,s);const h=[];let p=i;for(;p<s;){const f=c[p];let m=null,E=f>239?4:f>223?3:f>191?2:1;if(p+E<=s){let P,A,C,$;switch(E){case 1:f<128&&(m=f);break;case 2:P=c[p+1],(P&192)===128&&($=(f&31)<<6|P&63,$>127&&(m=$));break;case 3:P=c[p+1],A=c[p+2],(P&192)===128&&(A&192)===128&&($=(f&15)<<12|(P&63)<<6|A&63,$>2047&&($<55296||$>57343)&&(m=$));break;case 4:P=c[p+1],A=c[p+2],C=c[p+3],(P&192)===128&&(A&192)===128&&(C&192)===128&&($=(f&15)<<18|(P&63)<<12|(A&63)<<6|C&63,$>65535&&$<1114112&&(m=$))}}m===null?(m=65533,E=1):m>65535&&(m-=65536,h.push(m>>>10&1023|55296),m=56320|m&1023),h.push(m),p+=E}return gi(h)}const qt=4096;function gi(c){const i=c.length;if(i<=qt)return String.fromCharCode.apply(String,c);let s="",h=0;for(;h<i;)s+=String.fromCharCode.apply(String,c.slice(h,h+=qt));return s}function bi(c,i,s){let h="";s=Math.min(c.length,s);for(let p=i;p<s;++p)h+=String.fromCharCode(c[p]&127);return h}function yi(c,i,s){let h="";s=Math.min(c.length,s);for(let p=i;p<s;++p)h+=String.fromCharCode(c[p]);return h}function _i(c,i,s){const h=c.length;(!i||i<0)&&(i=0),(!s||s<0||s>h)&&(s=h);let p="";for(let f=i;f<s;++f)p+=Si[c[f]];return p}function wi(c,i,s){const h=c.slice(i,s);let p="";for(let f=0;f<h.length-1;f+=2)p+=String.fromCharCode(h[f]+h[f+1]*256);return p}u.prototype.slice=function(i,s){const h=this.length;i=~~i,s=s===void 0?h:~~s,i<0?(i+=h,i<0&&(i=0)):i>h&&(i=h),s<0?(s+=h,s<0&&(s=0)):s>h&&(s=h),s<i&&(s=i);const p=this.subarray(i,s);return Object.setPrototypeOf(p,u.prototype),p};function B(c,i,s){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+i>s)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(i,s,h){i=i>>>0,s=s>>>0,h||B(i,s,this.length);let p=this[i],f=1,m=0;for(;++m<s&&(f*=256);)p+=this[i+m]*f;return p},u.prototype.readUintBE=u.prototype.readUIntBE=function(i,s,h){i=i>>>0,s=s>>>0,h||B(i,s,this.length);let p=this[i+--s],f=1;for(;s>0&&(f*=256);)p+=this[i+--s]*f;return p},u.prototype.readUint8=u.prototype.readUInt8=function(i,s){return i=i>>>0,s||B(i,1,this.length),this[i]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(i,s){return i=i>>>0,s||B(i,2,this.length),this[i]|this[i+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(i,s){return i=i>>>0,s||B(i,2,this.length),this[i]<<8|this[i+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(i,s){return i=i>>>0,s||B(i,4,this.length),(this[i]|this[i+1]<<8|this[i+2]<<16)+this[i+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(i,s){return i=i>>>0,s||B(i,4,this.length),this[i]*16777216+(this[i+1]<<16|this[i+2]<<8|this[i+3])},u.prototype.readBigUInt64LE=J(function(i){i=i>>>0,pe(i,"offset");const s=this[i],h=this[i+7];(s===void 0||h===void 0)&&Pe(i,this.length-8);const p=s+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24,f=this[++i]+this[++i]*2**8+this[++i]*2**16+h*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=J(function(i){i=i>>>0,pe(i,"offset");const s=this[i],h=this[i+7];(s===void 0||h===void 0)&&Pe(i,this.length-8);const p=s*2**24+this[++i]*2**16+this[++i]*2**8+this[++i],f=this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h;return(BigInt(p)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(i,s,h){i=i>>>0,s=s>>>0,h||B(i,s,this.length);let p=this[i],f=1,m=0;for(;++m<s&&(f*=256);)p+=this[i+m]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*s)),p},u.prototype.readIntBE=function(i,s,h){i=i>>>0,s=s>>>0,h||B(i,s,this.length);let p=s,f=1,m=this[i+--p];for(;p>0&&(f*=256);)m+=this[i+--p]*f;return f*=128,m>=f&&(m-=Math.pow(2,8*s)),m},u.prototype.readInt8=function(i,s){return i=i>>>0,s||B(i,1,this.length),this[i]&128?(255-this[i]+1)*-1:this[i]},u.prototype.readInt16LE=function(i,s){i=i>>>0,s||B(i,2,this.length);const h=this[i]|this[i+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(i,s){i=i>>>0,s||B(i,2,this.length);const h=this[i+1]|this[i]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(i,s){return i=i>>>0,s||B(i,4,this.length),this[i]|this[i+1]<<8|this[i+2]<<16|this[i+3]<<24},u.prototype.readInt32BE=function(i,s){return i=i>>>0,s||B(i,4,this.length),this[i]<<24|this[i+1]<<16|this[i+2]<<8|this[i+3]},u.prototype.readBigInt64LE=J(function(i){i=i>>>0,pe(i,"offset");const s=this[i],h=this[i+7];(s===void 0||h===void 0)&&Pe(i,this.length-8);const p=this[i+4]+this[i+5]*2**8+this[i+6]*2**16+(h<<24);return(BigInt(p)<<BigInt(32))+BigInt(s+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24)}),u.prototype.readBigInt64BE=J(function(i){i=i>>>0,pe(i,"offset");const s=this[i],h=this[i+7];(s===void 0||h===void 0)&&Pe(i,this.length-8);const p=(s<<24)+this[++i]*2**16+this[++i]*2**8+this[++i];return(BigInt(p)<<BigInt(32))+BigInt(this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h)}),u.prototype.readFloatLE=function(i,s){return i=i>>>0,s||B(i,4,this.length),t.read(this,i,!0,23,4)},u.prototype.readFloatBE=function(i,s){return i=i>>>0,s||B(i,4,this.length),t.read(this,i,!1,23,4)},u.prototype.readDoubleLE=function(i,s){return i=i>>>0,s||B(i,8,this.length),t.read(this,i,!0,52,8)},u.prototype.readDoubleBE=function(i,s){return i=i>>>0,s||B(i,8,this.length),t.read(this,i,!1,52,8)};function k(c,i,s,h,p,f){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(i>p||i<f)throw new RangeError('"value" argument is out of bounds');if(s+h>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(i,s,h,p){if(i=+i,s=s>>>0,h=h>>>0,!p){const E=Math.pow(2,8*h)-1;k(this,i,s,h,E,0)}let f=1,m=0;for(this[s]=i&255;++m<h&&(f*=256);)this[s+m]=i/f&255;return s+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(i,s,h,p){if(i=+i,s=s>>>0,h=h>>>0,!p){const E=Math.pow(2,8*h)-1;k(this,i,s,h,E,0)}let f=h-1,m=1;for(this[s+f]=i&255;--f>=0&&(m*=256);)this[s+f]=i/m&255;return s+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,1,255,0),this[s]=i&255,s+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,2,65535,0),this[s]=i&255,this[s+1]=i>>>8,s+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,2,65535,0),this[s]=i>>>8,this[s+1]=i&255,s+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,4,4294967295,0),this[s+3]=i>>>24,this[s+2]=i>>>16,this[s+1]=i>>>8,this[s]=i&255,s+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,4,4294967295,0),this[s]=i>>>24,this[s+1]=i>>>16,this[s+2]=i>>>8,this[s+3]=i&255,s+4};function Vt(c,i,s,h,p){Qt(i,h,p,c,s,7);let f=Number(i&BigInt(4294967295));c[s++]=f,f=f>>8,c[s++]=f,f=f>>8,c[s++]=f,f=f>>8,c[s++]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[s++]=m,m=m>>8,c[s++]=m,m=m>>8,c[s++]=m,m=m>>8,c[s++]=m,s}function Wt(c,i,s,h,p){Qt(i,h,p,c,s,7);let f=Number(i&BigInt(4294967295));c[s+7]=f,f=f>>8,c[s+6]=f,f=f>>8,c[s+5]=f,f=f>>8,c[s+4]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[s+3]=m,m=m>>8,c[s+2]=m,m=m>>8,c[s+1]=m,m=m>>8,c[s]=m,s+8}u.prototype.writeBigUInt64LE=J(function(i,s=0){return Vt(this,i,s,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=J(function(i,s=0){return Wt(this,i,s,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(i,s,h,p){if(i=+i,s=s>>>0,!p){const P=Math.pow(2,8*h-1);k(this,i,s,h,P-1,-P)}let f=0,m=1,E=0;for(this[s]=i&255;++f<h&&(m*=256);)i<0&&E===0&&this[s+f-1]!==0&&(E=1),this[s+f]=(i/m>>0)-E&255;return s+h},u.prototype.writeIntBE=function(i,s,h,p){if(i=+i,s=s>>>0,!p){const P=Math.pow(2,8*h-1);k(this,i,s,h,P-1,-P)}let f=h-1,m=1,E=0;for(this[s+f]=i&255;--f>=0&&(m*=256);)i<0&&E===0&&this[s+f+1]!==0&&(E=1),this[s+f]=(i/m>>0)-E&255;return s+h},u.prototype.writeInt8=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,1,127,-128),i<0&&(i=255+i+1),this[s]=i&255,s+1},u.prototype.writeInt16LE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,2,32767,-32768),this[s]=i&255,this[s+1]=i>>>8,s+2},u.prototype.writeInt16BE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,2,32767,-32768),this[s]=i>>>8,this[s+1]=i&255,s+2},u.prototype.writeInt32LE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,4,2147483647,-2147483648),this[s]=i&255,this[s+1]=i>>>8,this[s+2]=i>>>16,this[s+3]=i>>>24,s+4},u.prototype.writeInt32BE=function(i,s,h){return i=+i,s=s>>>0,h||k(this,i,s,4,2147483647,-2147483648),i<0&&(i=4294967295+i+1),this[s]=i>>>24,this[s+1]=i>>>16,this[s+2]=i>>>8,this[s+3]=i&255,s+4},u.prototype.writeBigInt64LE=J(function(i,s=0){return Vt(this,i,s,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=J(function(i,s=0){return Wt(this,i,s,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Gt(c,i,s,h,p,f){if(s+h>c.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("Index out of range")}function Jt(c,i,s,h,p){return i=+i,s=s>>>0,p||Gt(c,i,s,4),t.write(c,i,s,h,23,4),s+4}u.prototype.writeFloatLE=function(i,s,h){return Jt(this,i,s,!0,h)},u.prototype.writeFloatBE=function(i,s,h){return Jt(this,i,s,!1,h)};function Kt(c,i,s,h,p){return i=+i,s=s>>>0,p||Gt(c,i,s,8),t.write(c,i,s,h,52,8),s+8}u.prototype.writeDoubleLE=function(i,s,h){return Kt(this,i,s,!0,h)},u.prototype.writeDoubleBE=function(i,s,h){return Kt(this,i,s,!1,h)},u.prototype.copy=function(i,s,h,p){if(!u.isBuffer(i))throw new TypeError("argument should be a Buffer");if(h||(h=0),!p&&p!==0&&(p=this.length),s>=i.length&&(s=i.length),s||(s=0),p>0&&p<h&&(p=h),p===h||i.length===0||this.length===0)return 0;if(s<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),i.length-s<p-h&&(p=i.length-s+h);const f=p-h;return this===i&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(s,h,p):Uint8Array.prototype.set.call(i,this.subarray(h,p),s),f},u.prototype.fill=function(i,s,h,p){if(typeof i=="string"){if(typeof s=="string"?(p=s,s=0,h=this.length):typeof h=="string"&&(p=h,h=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!u.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(i.length===1){const m=i.charCodeAt(0);(p==="utf8"&&m<128||p==="latin1")&&(i=m)}}else typeof i=="number"?i=i&255:typeof i=="boolean"&&(i=Number(i));if(s<0||this.length<s||this.length<h)throw new RangeError("Out of range index");if(h<=s)return this;s=s>>>0,h=h===void 0?this.length:h>>>0,i||(i=0);let f;if(typeof i=="number")for(f=s;f<h;++f)this[f]=i;else{const m=u.isBuffer(i)?i:u.from(i,p),E=m.length;if(E===0)throw new TypeError('The value "'+i+'" is invalid for argument "value"');for(f=0;f<h-s;++f)this[f+s]=m[f%E]}return this};const de={};function yt(c,i,s){de[c]=class extends s{constructor(){super(),Object.defineProperty(this,"message",{value:i.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}yt("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),yt("ERR_INVALID_ARG_TYPE",function(c,i){return`The "${c}" argument must be of type number. Received type ${typeof i}`},TypeError),yt("ERR_OUT_OF_RANGE",function(c,i,s){let h=`The value of "${c}" is out of range.`,p=s;return Number.isInteger(s)&&Math.abs(s)>2**32?p=Yt(String(s)):typeof s=="bigint"&&(p=String(s),(s>BigInt(2)**BigInt(32)||s<-(BigInt(2)**BigInt(32)))&&(p=Yt(p)),p+="n"),h+=` It must be ${i}. Received ${p}`,h},RangeError);function Yt(c){let i="",s=c.length;const h=c[0]==="-"?1:0;for(;s>=h+4;s-=3)i=`_${c.slice(s-3,s)}${i}`;return`${c.slice(0,s)}${i}`}function vi(c,i,s){pe(i,"offset"),(c[i]===void 0||c[i+s]===void 0)&&Pe(i,c.length-(s+1))}function Qt(c,i,s,h,p,f){if(c>s||c<i){const m=typeof i=="bigint"?"n":"";let E;throw f>3?i===0||i===BigInt(0)?E=`>= 0${m} and < 2${m} ** ${(f+1)*8}${m}`:E=`>= -(2${m} ** ${(f+1)*8-1}${m}) and < 2 ** ${(f+1)*8-1}${m}`:E=`>= ${i}${m} and <= ${s}${m}`,new de.ERR_OUT_OF_RANGE("value",E,c)}vi(h,p,f)}function pe(c,i){if(typeof c!="number")throw new de.ERR_INVALID_ARG_TYPE(i,"number",c)}function Pe(c,i,s){throw Math.floor(c)!==c?(pe(c,s),new de.ERR_OUT_OF_RANGE(s||"offset","an integer",c)):i<0?new de.ERR_BUFFER_OUT_OF_BOUNDS:new de.ERR_OUT_OF_RANGE(s||"offset",`>= ${s?1:0} and <= ${i}`,c)}const xi=/[^+/0-9A-Za-z-_]/g;function Ei(c){if(c=c.split("=")[0],c=c.trim().replace(xi,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function _t(c,i){i=i||1/0;let s;const h=c.length;let p=null;const f=[];for(let m=0;m<h;++m){if(s=c.charCodeAt(m),s>55295&&s<57344){if(!p){if(s>56319){(i-=3)>-1&&f.push(239,191,189);continue}else if(m+1===h){(i-=3)>-1&&f.push(239,191,189);continue}p=s;continue}if(s<56320){(i-=3)>-1&&f.push(239,191,189),p=s;continue}s=(p-55296<<10|s-56320)+65536}else p&&(i-=3)>-1&&f.push(239,191,189);if(p=null,s<128){if((i-=1)<0)break;f.push(s)}else if(s<2048){if((i-=2)<0)break;f.push(s>>6|192,s&63|128)}else if(s<65536){if((i-=3)<0)break;f.push(s>>12|224,s>>6&63|128,s&63|128)}else if(s<1114112){if((i-=4)<0)break;f.push(s>>18|240,s>>12&63|128,s>>6&63|128,s&63|128)}else throw new Error("Invalid code point")}return f}function $i(c){const i=[];for(let s=0;s<c.length;++s)i.push(c.charCodeAt(s)&255);return i}function Ai(c,i){let s,h,p;const f=[];for(let m=0;m<c.length&&!((i-=2)<0);++m)s=c.charCodeAt(m),h=s>>8,p=s%256,f.push(p),f.push(h);return f}function Xt(c){return e.toByteArray(Ei(c))}function Ge(c,i,s,h){let p;for(p=0;p<h&&!(p+s>=i.length||p>=c.length);++p)i[p+s]=c[p];return p}function H(c,i){return c instanceof i||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===i.name}function wt(c){return c!==c}const Si=function(){const c="0123456789abcdef",i=new Array(256);for(let s=0;s<16;++s){const h=s*16;for(let p=0;p<16;++p)i[h+p]=c[s]+c[p]}return i}();function J(c){return typeof BigInt>"u"?Pi:c}function Pi(){throw new Error("BigInt not supported")}})(Nt);var In=Object.defineProperty,On=Object.getOwnPropertyDescriptor,ci=(r,e,t,n)=>{for(var o=n>1?void 0:n?On(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&In(e,t,o),o};let at=class extends S{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return v`
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
    `}};at.styles=I`
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
  `;ci([x({type:Object})],at.prototype,"track",2);at=ci([T("track-card")],at);var Bn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,ft=(r,e,t,n)=>{for(var o=n>1?void 0:n?Un(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&Bn(e,t,o),o};let ve=class extends S{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(r){const e=`https://api.spotify.com/v1/tracks/${r}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const n=await t.json();return this.currentTracks=[...this.currentTracks,n],n}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Nt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const n=await t.json();this.accessToken=n.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var r;super.connectedCallback(),(r=this.comment)!=null&&r.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(r){try{this.currentTracks=[];const e=r.map(n=>this.findSong(n)),t=await Promise.all(e);this.currentTracks=t.filter(n=>n!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return v`
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
          ${this.currentTracks.map(n=>v`
              <div class="track-info">
                <img
                  src="${n.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${n.name}</p>
                  <p class="track-artist">
                    ${n.artists.map(o=>o.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};ve.styles=I`
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
  `;ft([x({type:Object})],ve.prototype,"comment",2);ft([x({type:String})],ve.prototype,"accessToken",2);ft([O()],ve.prototype,"currentTracks",2);ve=ft([T("comment-card")],ve);var kn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,z=(r,e,t,n)=>{for(var o=n>1?void 0:n?Rn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&kn(e,t,o),o};let F=class extends S{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post",this.addEventListener("track-selected",r=>{const e=r;this._selectTrack(e.detail.track)})}_selectTrack(r){const e=this.selectedTracks.findIndex(t=>t.id===r.id);e>-1?this.selectedTracks=[...this.selectedTracks.slice(0,e),...this.selectedTracks.slice(e+1)]:this.selectedTracks=[...this.selectedTracks,r]}_calculateTimeFromDate(){var o;const r=(o=this.post)!=null&&o.postTime?new Date(this.post.postTime):void 0;if(!r)return console.error("Posted time is undefined"),"Post time cannot be found.";let n=(new Date().getTime()-r.getTime())/(1e3*60*60);return n=Math.round(n),n<1?"Less than an hour ago.":n>23?`${n%24} days ago`:`${n} hours ago`}async _recommendTracks(r){var d;r.preventDefault(),this.submissionSuccess=null;const e=r.target,t=new FormData(e),n="http://localhost:3000";let o=t.get("input-comment");const a=this.selectedTracks.map(g=>g.id),l=`${n}/posts/${(d=this.post)==null?void 0:d._id}`,u={userName:"aidan",commentTime:new Date,commentMessage:o,SongIDs:a};try{if((await fetch(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).ok)console.log("Comment successfully added"),this._clearTopTracks(),this._clearSelectedTracks(),this.submissionSuccess=!0,e.reset(),this._handleCommentAdded();else throw new Error("Failed to post comment")}catch(g){console.error("Error:",g),this.submissionSuccess=!1}}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),this.searchSpotify()}_clearTopTracks(){this.topTracks=[]}_clearSelectedTracks(){this.selectedTracks=[]}async fetchTopTracks(r){const e=await fetch(`https://api.spotify.com/v1/artists/${r}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?this.topTracks=t.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}connectedCallback(){var r;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((r=this.post)==null?void 0:r.comments)||[])}async _handleCommentAdded(){var e;console.log("Comment Created, Now Refreshing Component");const r="http://localhost:3000";if(console.log("SERVER URL FROM COMMENT ADDED: ",r),!((e=this.post)!=null&&e._id)){console.error("Post ID is undefined.");return}try{const t=await fetch(`${r}/comments/${this.post._id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch comments");const n=await t.json();this.getPostComments=[...n]}catch(t){console.error("Error fetching comments:",t)}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Nt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const n=await t.json();this.accessToken=n.access_token}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const r=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(r,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();t.tracks.items.length>0?this.topTracks=t.tracks.items:(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t;const r=this._calculateTimeFromDate();return v`
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
                              ${this.topTracks.slice(0,5).map(n=>v`<track-card
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
                        ${this.selectedTracks.map(n=>v`<track-card .track=${n}></track-card>`)}
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
    `}};F.styles=I`
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
  `;z([x({type:Object})],F.prototype,"post",2);z([O()],F.prototype,"getPostComments",2);z([O()],F.prototype,"expanded",2);z([O()],F.prototype,"submissionSuccess",2);z([x()],F.prototype,"expandedText",2);z([x({type:String})],F.prototype,"requestedSearchQuery",2);z([x({type:String})],F.prototype,"accessToken",2);z([x()],F.prototype,"topTracks",2);z([x()],F.prototype,"selectedTracks",2);z([O()],F.prototype,"expandedClass",2);F=z([T("feed-post")],F);var Fn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,li=(r,e,t,n)=>{for(var o=n>1?void 0:n?Dn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&Fn(e,t,o),o};let ct=class extends S{constructor(){super(...arguments),this.posts=[]}render(){return v`
      <div class="posts-container">
        ${this.posts.map(r=>v` <feed-post .post=${r}></feed-post>`)}
      </div>
    `}};ct.styles=I``;li([x({type:Array})],ct.prototype,"posts",2);ct=li([T("feed-post-list")],ct);var Mn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,mt=(r,e,t,n)=>{for(var o=n>1?void 0:n?Ln(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&Mn(e,t,o),o};let xe=class extends S{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(r){r.preventDefault(),this.submissionSuccess=!1;const e=r.target;let n=new FormData(e).get("input-message");n?(console.log("submitting post!"),this._sendPostRequest(n,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(r,e){const t={userid:"65caf83fcdc541534288d60b",userName:"aidan",postTime:new Date,postMessage:r,comments:[]},n="http://localhost:3000";console.log("new post: ",t);try{const o=`${n}/posts`;if((await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(o){console.error("Error: ",o),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const r=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",r),this.dispatchEvent(r)}render(){return v`
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
    `}};xe.styles=I`
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
  `;mt([O()],xe.prototype,"expanded",2);mt([O()],xe.prototype,"submissionSuccess",2);mt([O()],xe.prototype,"errorMessage",2);xe=mt([T("create-post")],xe);var jn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,hi=(r,e,t,n)=>{for(var o=n>1?void 0:n?Nn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&jn(e,t,o),o};let lt=class extends S{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchData()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchData()}async _fetchData(){console.log("fetching posts!");const r="http://localhost:3000";try{const e=await fetch(`${r}/posts`);if(e.ok){const t=await e.json();this.posts=t,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",e.status)}catch(e){console.error("Error fetching posts:",e)}}render(){return v`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <create-post></create-post>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};lt.styles=I`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;hi([O()],lt.prototype,"posts",2);lt=hi([T("main-feed")],lt);var zn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,qe=(r,e,t,n)=>{for(var o=n>1?void 0:n?Hn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&zn(e,t,o),o};let ce=class extends Rt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}render(){return v`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `}};ce.styles=I`
    .feed-page {
      display: flex;
      justify-content: center;
    }
  `;qe([x({attribute:!1})],ce.prototype,"location",2);qe([x({reflect:!0})],ce.prototype,"userid",1);qe([x({reflect:!0})],ce.prototype,"edit",1);qe([x()],ce.prototype,"profile",1);ce=qe([T("home-page")],ce);var qn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Wn=(r,e,t,n)=>{for(var o=n>1?void 0:n?Vn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(o=(n?l(e,t,o):l(o))||o);return n&&o&&qn(e,t,o),o};let Gn=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Cr=class extends qr{constructor(){super(cs)}render(){return v`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Gn}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("MTVAPPElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Cr=Wn([T("mtv-app")],Cr);
