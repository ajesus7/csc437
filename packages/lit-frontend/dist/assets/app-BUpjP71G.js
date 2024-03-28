(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=globalThis,Bt=Ge.ShadowRoot&&(Ge.ShadyCSS===void 0||Ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ot=Symbol(),Xt=new WeakMap;let Tr=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bt&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=Xt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Xt.set(t,e))}return e}toString(){return this.cssText}};const Pi=r=>new Tr(typeof r=="string"?r:r+"",void 0,Ot),I=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((o,s,a)=>o+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new Tr(t,r,Ot)},Si=(r,e)=>{if(Bt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=Ge.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,r.appendChild(o)}},Zt=Bt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Pi(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ci,defineProperty:Ti,getOwnPropertyDescriptor:Bi,getOwnPropertyNames:Oi,getOwnPropertySymbols:Ii,getPrototypeOf:Ui}=Object,Q=globalThis,er=Q.trustedTypes,ki=er?er.emptyScript:"",wt=Q.reactiveElementPolyfillSupport,Ce=(r,e)=>r,Qe={toAttribute(r,e){switch(e){case Boolean:r=r?ki:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},It=(r,e)=>!Ci(r,e),tr={attribute:!0,type:String,converter:Qe,reflect:!1,hasChanged:It};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Q.litPropertyMetadata??(Q.litPropertyMetadata=new WeakMap);class pe extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Ti(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:a}=Bi(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return s==null?void 0:s.call(this)},set(l){const u=s==null?void 0:s.call(this);a.call(this,l),this.requestUpdate(e,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tr}static _$Ei(){if(this.hasOwnProperty(Ce("elementProperties")))return;const e=Ui(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ce("properties"))){const t=this.properties,o=[...Oi(t),...Ii(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(Zt(s))}else e!==void 0&&t.push(Zt(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Si(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var a;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const l=(((a=o.converter)==null?void 0:a.toAttribute)!==void 0?o.converter:Qe).toAttribute(t,o.type);this._$Em=e,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Em=null}}_$AK(e,t){var a;const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=o.getPropertyOptions(s),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Qe;this._$Em=s,this[s]=u.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??It)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,l]of s)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[Ce("elementProperties")]=new Map,pe[Ce("finalized")]=new Map,wt==null||wt({ReactiveElement:pe}),(Q.reactiveElementVersions??(Q.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=globalThis,Xe=Te.trustedTypes,rr=Xe?Xe.createPolicy("lit-html",{createHTML:r=>r}):void 0,Br="$lit$",K=`lit$${(Math.random()+"").slice(9)}$`,Or="?"+K,Ri=`<${Or}>`,re=document,Oe=()=>re.createComment(""),Ie=r=>r===null||typeof r!="object"&&typeof r!="function",Ir=Array.isArray,Fi=r=>Ir(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",vt=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ir=/-->/g,nr=/>/g,ee=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sr=/'/g,or=/"/g,Ur=/^(?:script|style|textarea|title)$/i,Di=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),x=Di(1),fe=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),ar=new WeakMap,te=re.createTreeWalker(re,129);function kr(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rr!==void 0?rr.createHTML(e):e}const Mi=(r,e)=>{const t=r.length-1,o=[];let s,a=e===2?"<svg>":"",l=Se;for(let u=0;u<t;u++){const p=r[u];let g,b,y=-1,_=0;for(;_<p.length&&(l.lastIndex=_,b=l.exec(p),b!==null);)_=l.lastIndex,l===Se?b[1]==="!--"?l=ir:b[1]!==void 0?l=nr:b[2]!==void 0?(Ur.test(b[2])&&(s=RegExp("</"+b[2],"g")),l=ee):b[3]!==void 0&&(l=ee):l===ee?b[0]===">"?(l=s??Se,y=-1):b[1]===void 0?y=-2:(y=l.lastIndex-b[2].length,g=b[1],l=b[3]===void 0?ee:b[3]==='"'?or:sr):l===or||l===sr?l=ee:l===ir||l===nr?l=Se:(l=ee,s=void 0);const w=l===ee&&r[u+1].startsWith("/>")?" ":"";a+=l===Se?p+Ri:y>=0?(o.push(g),p.slice(0,y)+Br+p.slice(y)+K+w):p+K+(y===-2?u:w)}return[kr(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),o]};class Ue{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let a=0,l=0;const u=e.length-1,p=this.parts,[g,b]=Mi(e,t);if(this.el=Ue.createElement(g,o),te.currentNode=this.el.content,t===2){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(s=te.nextNode())!==null&&p.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const y of s.getAttributeNames())if(y.endsWith(Br)){const _=b[l++],w=s.getAttribute(y).split(K),R=/([.?@])?(.*)/.exec(_);p.push({type:1,index:a,name:R[2],strings:w,ctor:R[1]==="."?Li:R[1]==="?"?Ni:R[1]==="@"?zi:at}),s.removeAttribute(y)}else y.startsWith(K)&&(p.push({type:6,index:a}),s.removeAttribute(y));if(Ur.test(s.tagName)){const y=s.textContent.split(K),_=y.length-1;if(_>0){s.textContent=Xe?Xe.emptyScript:"";for(let w=0;w<_;w++)s.append(y[w],Oe()),te.nextNode(),p.push({type:2,index:++a});s.append(y[_],Oe())}}}else if(s.nodeType===8)if(s.data===Or)p.push({type:2,index:a});else{let y=-1;for(;(y=s.data.indexOf(K,y+1))!==-1;)p.push({type:7,index:a}),y+=K.length-1}a++}}static createElement(e,t){const o=re.createElement("template");return o.innerHTML=e,o}}function me(r,e,t=r,o){var l,u;if(e===fe)return e;let s=o!==void 0?(l=t._$Co)==null?void 0:l[o]:t._$Cl;const a=Ie(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((u=s==null?void 0:s._$AO)==null||u.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=me(r,s._$AS(r,e.values),s,o)),e}class ji{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=((e==null?void 0:e.creationScope)??re).importNode(t,!0);te.currentNode=s;let a=te.nextNode(),l=0,u=0,p=o[0];for(;p!==void 0;){if(l===p.index){let g;p.type===2?g=new je(a,a.nextSibling,this,e):p.type===1?g=new p.ctor(a,p.name,p.strings,this,e):p.type===6&&(g=new Hi(a,this,e)),this._$AV.push(g),p=o[++u]}l!==(p==null?void 0:p.index)&&(a=te.nextNode(),l++)}return te.currentNode=re,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class je{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=me(this,e,t),Ie(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==fe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fi(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==O&&Ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ue.createElement(kr(o.h,o.h[0]),this.options)),o);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const l=new ji(s,this),u=l.u(this.options);l.p(t),this.T(u),this._$AH=l}}_$AC(e){let t=ar.get(e.strings);return t===void 0&&ar.set(e.strings,t=new Ue(e)),t}k(e){Ir(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const a of e)s===t.length?t.push(o=new je(this.S(Oe()),this.S(Oe()),this,this.options)):o=t[s],o._$AI(a),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,a){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}_$AI(e,t=this,o,s){const a=this.strings;let l=!1;if(a===void 0)e=me(this,e,t,0),l=!Ie(e)||e!==this._$AH&&e!==fe,l&&(this._$AH=e);else{const u=e;let p,g;for(e=a[0],p=0;p<a.length-1;p++)g=me(this,u[o+p],t,p),g===fe&&(g=this._$AH[p]),l||(l=!Ie(g)||g!==this._$AH[p]),g===O?e=O:e!==O&&(e+=(g??"")+a[p+1]),this._$AH[p]=g}l&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Li extends at{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class Ni extends at{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}class zi extends at{constructor(e,t,o,s,a){super(e,t,o,s,a),this.type=5}_$AI(e,t=this){if((e=me(this,e,t,0)??O)===fe)return;const o=this._$AH,s=e===O&&o!==O||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==O&&(o===O||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Hi{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){me(this,e)}}const xt=Te.litHtmlPolyfillSupport;xt==null||xt(Ue,je),(Te.litHtmlVersions??(Te.litHtmlVersions=[])).push("3.1.2");const qi=(r,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let s=o._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;o._$litPart$=s=new je(e.insertBefore(Oe(),a),a,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return fe}};var Cr;P._$litElement$=!0,P.finalized=!0,(Cr=globalThis.litElementHydrateSupport)==null||Cr.call(globalThis,{LitElement:P});const $t=globalThis.litElementPolyfillSupport;$t==null||$t({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vi={attribute:!0,type:String,converter:Qe,reflect:!1,hasChanged:It},Wi=(r=Vi,e,t)=>{const{kind:o,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(t.name,r),o==="accessor"){const{name:l}=t;return{set(u){const p=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,p,r)},init(u){return u!==void 0&&this.P(l,void 0,r),u}}}if(o==="setter"){const{name:l}=t;return function(u){const p=this[l];e.call(this,u),this.requestUpdate(l,p,r)}}throw Error("Unsupported decorator location: "+o)};function v(r){return(e,t)=>typeof t=="object"?Wi(r,e,t):((o,s,a)=>{const l=s.hasOwnProperty(a);return s.constructor.createProperty(a,l?{...o,wrapped:!0}:o),l?Object.getOwnPropertyDescriptor(s,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(r){return v({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Rr=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cr=class{constructor(e,t,o,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Rr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ji=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},lr=class extends Gi{constructor(e,t,o){var s,a;super(t.context!==void 0?t.initialValue:o),this.onContextRequest=l=>{const u=l.composedPath()[0];l.context===this.context&&u!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,u,l.subscribe))},this.onProviderRequest=l=>{const u=l.composedPath()[0];if(l.context!==this.context||u===this.host)return;const p=new Set;for(const[g,{consumerHost:b}]of this.subscriptions)p.has(g)||(p.add(g),b.dispatchEvent(new Rr(this.context,g,!0)));l.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(s=this.host).addController)==null||a.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ji(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fr({context:r}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){o.set(this,new lr(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var a;return(a=o.get(this))==null||a.setValue(s),e.set.call(this,s)},init(s){var a;return(a=o.get(this))==null||a.setValue(s),s}};{e.constructor.addInitializer(l=>{o.set(l,new lr(l,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let a;if(s===void 0){const l=new WeakMap;a={get:function(){return l.get(this)},set:function(u){o.get(this).setValue(u),l.set(this,u)},configurable:!0,enumerable:!0}}else{const l=s.set;a={...s,set:function(u){o.get(this).setValue(u),l==null||l.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dr({context:r,subscribe:e}){return(t,o)=>{typeof o=="object"?o.addInitializer(function(){new cr(this,{context:r,callback:s=>{this[o.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new cr(s,{context:r,callback:a=>{s[o]=a},subscribe:e})})}}let Ki=class extends P{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",o=>{const s=o.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),o=t;typeof(o==null?void 0:o.then)=="function"?o.then(s=>{const a=s(this.model);this.model=a}):this.model=t}}},Yi=class extends P{dispatchMessage(e,t=this){const o=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(o)}};class Qi{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:o}=t,s=this._handlers.get(o);return s?s(t,e):e}}function Xi(r){return e=>Object.assign({},e,r)}function Zi(r){return r}const en="http://localhost:3000",tn="/api",Pt="JWT_AUTH_TOKEN",J=class J{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new J;return console.log("Deauthenticating",e,J._theUser),e===J._theUser&&(localStorage.removeItem(Pt),J._theUser=t),t}};J._theUser=new J;let L=J;class ke extends L{constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(s).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),l=JSON.parse(a);console.log("Token payload",l),this.token=e,this.authenticated=!0,this.username=l.username,this.signOut=t}static authenticate(e,t){return L._theUser=new ke(e,t),localStorage.setItem(Pt,e),L._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Pt);return t?ke.authenticate(t,e):L._theUser}}class Ut{constructor(e){this._base=tn,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=L._theUser.authenticated,o={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${L._theUser.token}`};return e?{...o,...a}:a}else return e?{...o}:void 0}_url(e){return`${en}${this._base}${e}`}}class hr extends Ut{constructor(e){super(Object.fromEntries(e))}}class Mr extends Ut{constructor(){super(void 0)}}var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,jr=(r,e,t,o)=>{for(var s=o>1?void 0:o?nn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&rn(e,t,s),s};const Lr="MTVModel",ur={user:new L},sn=()=>new Qi,Nr=Xi,zr=Zi;class Hr extends Ki{constructor(e){super(e,ur),this.model=ur}}jr([Fr({context:Lr}),U()],Hr.prototype,"model",2);class kt extends Yi{getFromModel(e){if(this._model)return this._model[e]}}jr([Dr({context:Lr,subscribe:!0}),v({attribute:!1})],kt.prototype,"_model",2);const Rt=sn(),on=Rt.update;Rt.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Mr().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Nr({profile:t}):zr)});Rt.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new Ut(t).put(`/profiles/${e}`).then(o=>{if(o.status===200)return o.json()}).then(o=>{o&&console.log("Profile:",o)}).then(o=>o?Nr({profile:o}):zr)});var an=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Le=(r,e,t,o)=>{for(var s=o>1?void 0:o?cn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&an(e,t,s),s};let ie=class extends P{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,o)=>{const s=t[0].toUpperCase(),a=o[0].toUpperCase();return s<a?-1:s>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return x`
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
  `;Le([v({type:Array})],ie.prototype,"names",2);Le([v({type:Array})],ie.prototype,"namesOriginalOrder",2);Le([v({type:Array})],ie.prototype,"listAttributes",2);Le([U()],ie.prototype,"sort_state",2);ie=Le([T("sortable-list")],ie);var ln=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,ct=(r,e,t,o)=>{for(var s=o>1?void 0:o?hn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&ln(e,t,s),s};let ge=class extends P{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return x`
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
    `}};ge.styles=I`
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
  `;ct([v({type:Array})],ge.prototype,"names",2);ct([v({type:Array})],ge.prototype,"listAttributes",2);ct([U()],ge.prototype,"sort_state",2);ge=ct([T("general-list")],ge);var un=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,Ft=(r,e,t,o)=>{for(var s=o>1?void 0:o?pn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&un(e,t,s),s};let Re=class extends P{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return x`
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
    `}};Re.styles=I`
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
  `;Ft([v({type:Array})],Re.prototype,"artists",2);Ft([v({type:String})],Re.prototype,"listAttributes",2);Re=Ft([T("favorites-list")],Re);var dn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,xe=(r,e,t,o)=>{for(var s=o>1?void 0:o?fn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&dn(e,t,s),s};let X=class extends P{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return x`
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
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};X.styles=I`
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
  `;xe([v({reflect:!0,type:Boolean})],X.prototype,"open",2);xe([v()],X.prototype,"align",2);xe([v()],X.prototype,"profileImage",2);xe([v()],X.prototype,"profileUserID",2);xe([v()],X.prototype,"profileDescription",2);X=xe([T("drop-down")],X);var mn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,qr=(r,e,t,o)=>{for(var s=o>1?void 0:o?gn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&mn(e,t,s),s};let Ze=class extends P{constructor(){super(...arguments),this.on=!1}render(){return x`<label>
      <slot>light mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};Ze.styles=I`
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
  `;qr([v({reflect:!0,type:Boolean})],Ze.prototype,"on",2);Ze=qr([T("color-mode-switch")],Ze);var bn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,lt=(r,e,t,o)=>{for(var s=o>1?void 0:o?yn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&bn(e,t,s),s};let be=class extends P{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return x`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};be.styles=I`
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
  `;lt([v()],be.prototype,"title",2);lt([v()],be.prototype,"description",2);lt([v()],be.prototype,"user_id",2);be=lt([T("default-card")],be);var _n=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,Dt=(r,e,t,o)=>{for(var s=o>1?void 0:o?wn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&_n(e,t,s),s};let Fe=class extends P{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return x`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};Fe.styles=I`
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
  `;Dt([v({reflect:!0,type:Boolean})],Fe.prototype,"on",2);Dt([v()],Fe.prototype,"filteredState",2);Fe=Dt([T("toggle-switch")],Fe);var vn=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,ht=(r,e,t,o)=>{for(var s=o>1?void 0:o?xn(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&vn(e,t,s),s};let ye=class extends P{constructor(){super(...arguments),this.path="",this.editMode=!1}get profile(){return this.using||{}}_changeEditMode(){console.log("Edit mode changed"),this.editMode=!this.editMode}_handleNameChange(r){const e=r.target;this.profile.name=e.value,this.requestUpdate()}_handleBioChange(r){const e=r.target;this.profile.bio=e.value,this.requestUpdate()}_handleMusicTasteChange(r){const e=r.target;this.profile.musicTaste=e.value,this.requestUpdate()}_handleTimezoneChange(r){const e=r.target;this.profile.timezone=e.value,this.requestUpdate()}_handleSpotifyChange(r){const e=r.target;this.profile.spotify=e.value==="true",this.requestUpdate()}_handleSubmit(r){r.preventDefault(),console.log("Form submitted with:",this.profile);const e=new CustomEvent("profile-update",{detail:{profile:this.profile},bubbles:!0,composed:!0});console.log("dispatching event: ",e),this.dispatchEvent(e),this.editMode=!this.editMode}render(){const{name:r,profileImage:e,profileDescription:t,bio:o}=this.profile;return x`
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
                    .value=${o}
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
          Edit profile.
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
    `}};ye.styles=I`
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

    /* edit form styling */
    .edit-mode-section {
      background-color: #f8f9fa; /* Light gray background */
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
      color: #333;
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
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button[type="submit"]:hover {
      background-color: #0056b3;
    }

    fieldset {
      border: none;
      margin: 0;
      padding: 0;
    }

    legend {
      margin-bottom: 10px;
      font-weight: bold;
      color: #333;
    }

    .radio-group {
      display: flex;
      align-items: center;
    }

    .radio-group label {
      margin-right: 20px; /* Space between radio buttons */
    }
  `;ht([v()],ye.prototype,"path",2);ht([v()],ye.prototype,"editMode",2);ht([v({attribute:!1})],ye.prototype,"using",2);ye=ht([T("user-profile")],ye);function et(r){return r=r||[],Array.isArray(r)?r:[r]}function N(r){return`[Vaadin.Router] ${r}`}function $n(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const tt="module",rt="nomodule",St=[tt,rt];function pr(r){if(!r.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Vr(r){if(!r||!j(r.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!ne(r.action)&&!Array.isArray(r.children)&&!ne(r.children)&&!it(e)&&!t.some(o=>j(r[o])))throw new Error(N(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(j(e))pr(e);else if(St.some(o=>o in e))St.forEach(o=>o in e&&pr(e[o]));else throw new Error(N('Expected route bundle to include either "'+rt+'" or "'+tt+'" keys, or both'));r.redirect&&["bundle","component"].forEach(o=>{o in r&&console.warn(N(`Route config "${r.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function dr(r){et(r).forEach(e=>Vr(e))}function fr(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===tt?t.setAttribute("type",tt):e===rt&&t.setAttribute(rt,""),t.async=!0),new Promise((o,s)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,o(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),s(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&o()})}function En(r){return j(r)?fr(r):Promise.race(St.filter(e=>e in r).map(e=>fr(r[e],e)))}function Be(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function it(r){return typeof r=="object"&&!!r}function ne(r){return typeof r=="function"}function j(r){return typeof r=="string"}function Wr(r){const e=new Error(N(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const de=new class{};function An(r){const e=r.port,t=r.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function mr(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let u=0;u<t.length;u++){const p=t[u];if(p.nodeName&&p.nodeName.toLowerCase()==="a"){e=p;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||An(e))!==window.location.origin)return;const{pathname:s,search:a,hash:l}=e;Be("go",{pathname:s,search:a,hash:l})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Pn={activate(){window.document.addEventListener("click",mr)},inactivate(){window.document.removeEventListener("click",mr)}},Sn=/Trident/.test(navigator.userAgent);Sn&&!ne(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function gr(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:o}=window.location;Be("go",{pathname:e,search:t,hash:o})}const Cn={activate(){window.addEventListener("popstate",gr)},inactivate(){window.removeEventListener("popstate",gr)}};var $e=Xr,Tn=Mt,Bn=kn,On=Kr,In=Qr,Gr="/",Jr="./",Un=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Mt(r,e){for(var t=[],o=0,s=0,a="",l=e&&e.delimiter||Gr,u=e&&e.delimiters||Jr,p=!1,g;(g=Un.exec(r))!==null;){var b=g[0],y=g[1],_=g.index;if(a+=r.slice(s,_),s=_+b.length,y){a+=y[1],p=!0;continue}var w="",R=r[s],Z=g[2],mt=g[3],Ee=g[4],ae=g[5];if(!p&&a.length){var ce=a.length-1;u.indexOf(a[ce])>-1&&(w=a[ce],a=a.slice(0,ce))}a&&(t.push(a),a="",p=!1);var gt=w!==""&&R!==void 0&&R!==w,V=ae==="+"||ae==="*",He=ae==="?"||ae==="*",Ae=w||l,qe=mt||Ee;t.push({name:Z||o++,prefix:w,delimiter:Ae,optional:He,repeat:V,partial:gt,pattern:qe?Rn(qe):"[^"+G(Ae)+"]+?"})}return(a||s<r.length)&&t.push(a+r.substr(s)),t}function kn(r,e){return Kr(Mt(r,e))}function Kr(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(o,s){for(var a="",l=s&&s.encode||encodeURIComponent,u=0;u<r.length;u++){var p=r[u];if(typeof p=="string"){a+=p;continue}var g=o?o[p.name]:void 0,b;if(Array.isArray(g)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but got array');if(g.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var y=0;y<g.length;y++){if(b=l(g[y],p),!e[u].test(b))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'"');a+=(y===0?p.prefix:p.delimiter)+b}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(b=l(String(g),p),!e[u].test(b))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but got "'+b+'"');a+=p.prefix+b;continue}if(p.optional){p.partial&&(a+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be '+(p.repeat?"an array":"a string"))}return a}}function G(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Rn(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Yr(r){return r&&r.sensitive?"":"i"}function Fn(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var o=0;o<t.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function Dn(r,e,t){for(var o=[],s=0;s<r.length;s++)o.push(Xr(r[s],e,t).source);return new RegExp("(?:"+o.join("|")+")",Yr(t))}function Mn(r,e,t){return Qr(Mt(r,t),e,t)}function Qr(r,e,t){t=t||{};for(var o=t.strict,s=t.start!==!1,a=t.end!==!1,l=G(t.delimiter||Gr),u=t.delimiters||Jr,p=[].concat(t.endsWith||[]).map(G).concat("$").join("|"),g=s?"^":"",b=r.length===0,y=0;y<r.length;y++){var _=r[y];if(typeof _=="string")g+=G(_),b=y===r.length-1&&u.indexOf(_[_.length-1])>-1;else{var w=_.repeat?"(?:"+_.pattern+")(?:"+G(_.delimiter)+"(?:"+_.pattern+"))*":_.pattern;e&&e.push(_),_.optional?_.partial?g+=G(_.prefix)+"("+w+")?":g+="(?:"+G(_.prefix)+"("+w+"))?":g+=G(_.prefix)+"("+w+")"}}return a?(o||(g+="(?:"+l+")?"),g+=p==="$"?"$":"(?="+p+")"):(o||(g+="(?:"+l+"(?="+p+"))?"),b||(g+="(?="+l+"|"+p+")")),new RegExp(g,Yr(t))}function Xr(r,e,t){return r instanceof RegExp?Fn(r,e):Array.isArray(r)?Dn(r,e,t):Mn(r,e,t)}$e.parse=Tn;$e.compile=Bn;$e.tokensToFunction=On;$e.tokensToRegExp=In;const{hasOwnProperty:jn}=Object.prototype,Ct=new Map;Ct.set("|false",{keys:[],pattern:/(?:)/});function br(r){try{return decodeURIComponent(r)}catch{return r}}function Ln(r,e,t,o,s){t=!!t;const a=`${r}|${t}`;let l=Ct.get(a);if(!l){const g=[];l={keys:g,pattern:$e(r,g,{end:t,strict:r===""})},Ct.set(a,l)}const u=l.pattern.exec(e);if(!u)return null;const p=Object.assign({},s);for(let g=1;g<u.length;g++){const b=l.keys[g-1],y=b.name,_=u[g];(_!==void 0||!jn.call(p,y))&&(b.repeat?p[y]=_?_.split(b.delimiter).map(br):[]:p[y]=_&&br(_))}return{path:u[0],keys:(o||[]).concat(l.keys),params:p}}function Zr(r,e,t,o,s){let a,l,u=0,p=r.path||"";return p.charAt(0)==="/"&&(t&&(p=p.substr(1)),t=!0),{next(g){if(r===g)return{done:!0};const b=r.__children=r.__children||r.children;if(!a&&(a=Ln(p,e,!b,o,s),a))return{done:!1,value:{route:r,keys:a.keys,params:a.params,path:a.path}};if(a&&b)for(;u<b.length;){if(!l){const _=b[u];_.parent=r;let w=a.path.length;w>0&&e.charAt(w)==="/"&&(w+=1),l=Zr(_,e.substr(w),t,a.keys,a.params)}const y=l.next(g);if(!y.done)return{done:!1,value:y.value};l=null,u++}return{done:!0}}}}function Nn(r){if(ne(r.route.action))return r.route.action(r)}function zn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Hn(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function qn(r,e){const{route:t,path:o}=e;if(t&&!t.__synthetic){const s={path:o,route:t};if(!r.chain)r.chain=[];else if(t.parent){let a=r.chain.length;for(;a--&&r.chain[a].route&&r.chain[a].route!==t.parent;)r.chain.pop()}r.chain.push(s)}}class De{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Nn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){dr(e);const t=[...et(e)];this.root.__children=t}addRoutes(e){return dr(e),this.root.__children.push(...et(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,j(e)?{pathname:e}:e),o=Zr(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let a=null,l=null,u=t;function p(g,b=a.value.route,y){const _=y===null&&a.value.route;return a=l||o.next(_),l=null,!g&&(a.done||!zn(b,a.value.route))?(l=a,Promise.resolve(de)):a.done?Promise.reject(Wr(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),qn(u,a.value),Promise.resolve(s(u)).then(w=>w!=null&&w!==de?(u.result=w.result||w,u):p(g,b,w)))}return t.next=p,Promise.resolve().then(()=>p(!0,this.root)).catch(g=>{const b=Hn(u);if(g?console.warn(b):g=new Error(b),g.context=g.context||u,g instanceof DOMException||(g.code=g.code||500),this.errorHandler)return u.result=this.errorHandler(g),u;throw g})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,o=this.constructor.__createUrl(e,t).href;if(o.slice(0,t.length)===t)return o.slice(t.length)}}De.pathToRegexp=$e;const{pathToRegexp:yr}=De,_r=new Map;function ei(r,e,t){const o=e.name||e.component;if(o&&(r.has(o)?r.get(o).push(e):r.set(o,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];a.parent=e,ei(r,a,a.__children||a.children)}}function wr(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function vr(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Vn(r,e={}){if(!(r instanceof De))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(o,s)=>{let a=wr(t,o);if(!a&&(t.clear(),ei(t,r.root,r.root.__children),a=wr(t,o),!a))throw new Error(`Route "${o}" not found`);let l=_r.get(a.fullPath);if(!l){let p=vr(a),g=a.parent;for(;g;){const w=vr(g);w&&(p=w.replace(/\/$/,"")+"/"+p.replace(/^\//,"")),g=g.parent}const b=yr.parse(p),y=yr.tokensToFunction(b),_=Object.create(null);for(let w=0;w<b.length;w++)j(b[w])||(_[b[w].name]=!0);l={toPath:y,keys:_},_r.set(p,l),a.fullPath=p}let u=l.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const p={},g=Object.keys(s);for(let y=0;y<g.length;y++){const _=g[y];l.keys[_]||(p[_]=s[_])}const b=e.stringifyQueryParams(p);b&&(u+=b.charAt(0)==="?"?b:`?${b}`)}return u}}let xr=[];function Wn(r){xr.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),xr=r}const Gn=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Jn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function $r(r,e){return r.classList.add(e),new Promise(t=>{if(Gn(r)){const o=r.getBoundingClientRect(),s=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;r.setAttribute("style",`position: absolute; ${s}`),Jn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Kn=256;function Et(r){return r!=null}function Yn(r){const e=Object.assign({},r);return delete e.next,e}function M({pathname:r="",search:e="",hash:t="",chain:o=[],params:s={},redirectFrom:a,resolver:l},u){const p=o.map(g=>g.route);return{baseUrl:l&&l.baseUrl||"",pathname:r,search:e,hash:t,routes:p,route:u||p.length&&p[p.length-1]||null,params:s,redirectFrom:a,getUrl:(g={})=>Ke(Y.pathToRegexp.compile(ti(p))(Object.assign({},s,g)),l)}}function Er(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Qn(r,e){e.location=M(r);const t=r.chain.map(o=>o.route).indexOf(r.route);return r.chain[t].element=e,e}function Je(r,e,t){if(ne(r))return r.apply(t,e)}function Ar(r,e,t){return o=>{if(o&&(o.cancel||o.redirect))return o;if(t)return Je(t[r],e,t)}}function Xn(r,e){if(!Array.isArray(r)&&!it(r))throw new Error(N(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=et(r);for(let o=0;o<t.length;o++)Vr(t[o]),e.__children.push(t[o])}function We(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Ke(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function ti(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class Y extends De{constructor(e,t){const o=document.head.querySelector("base"),s=o&&o.getAttribute("href");super([],Object.assign({baseUrl:s&&De.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=l=>this.__resolveRoute(l);const a=Y.NavigationTrigger;Y.setTriggers.apply(Y,Object.keys(a).map(l=>a[l])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=M({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let o=Promise.resolve();ne(t.children)&&(o=o.then(()=>t.children(Yn(e))).then(a=>{!Et(a)&&!ne(t.children)&&(a=t.children),Xn(a,t)}));const s={redirect:a=>Er(e,a),component:a=>{const l=document.createElement(a);return this.__createdByRouter.set(l,!0),l}};return o.then(()=>{if(this.__isLatestRender(e))return Je(t.action,[e,s],t)}).then(a=>{if(Et(a)&&(a instanceof HTMLElement||a.redirect||a===de))return a;if(j(t.redirect))return s.redirect(t.redirect);if(t.bundle)return En(t.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(Et(a))return a;if(j(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const o=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},j(e)?{pathname:e}:e,{__renderId:o});return this.ready=this.resolve(s).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const l=this.__previousContext;if(a===l)return this.__updateBrowserHistory(l,!0),this.location;if(this.location=M(a),t&&this.__updateBrowserHistory(a,o===1),Be("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,l),this.__previousContext=a,this.location;this.__addAppearingContent(a,l);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,l),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(o===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),We(this.__outlet&&this.__outlet.children),this.location=M(Object.assign(s,{resolver:this})),Be("error",Object.assign({router:this,error:a},s)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(o=>{const a=o!==t?o:e,u=Ke(ti(o.chain),o.resolver)===o.pathname,p=(g,b=g.route,y)=>g.next(void 0,b,y).then(_=>_===null||_===de?u?g:b.parent!==null?p(g,b.parent,_):_:_);return p(o).then(g=>{if(g===null||g===de)throw Wr(a);return g&&g!==de&&g!==o?this.__fullyResolveChain(a,g):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Qn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(N(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${$n(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},o=t.chain||[],s=e.chain;let a=Promise.resolve();const l=()=>({cancel:!0}),u=p=>Er(e,p);if(e.__divergedChainIndex=0,e.__skipAttach=!1,o.length){for(let p=0;p<Math.min(o.length,s.length)&&!(o[p].route!==s[p].route||o[p].path!==s[p].path&&o[p].element!==s[p].element||!this.__isReusableElement(o[p].element,s[p].element));p=++e.__divergedChainIndex);if(e.__skipAttach=s.length===o.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let p=s.length-1;p>=0;p--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},o[p]);for(let p=0;p<s.length;p++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[p]),o[p].element.location=M(e,o[p].route)}else for(let p=o.length-1;p>=e.__divergedChainIndex;p--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},o[p])}if(!e.__skipAttach)for(let p=0;p<s.length;p++)p<e.__divergedChainIndex?p<o.length&&o[p].element&&(o[p].element.location=M(e,o[p].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[p]),s[p].element&&(s[p].element.location=M(e,s[p].route)));return a.then(p=>{if(p){if(p.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(p.redirect)return this.__redirect(p.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,o,s){const a=M(t);return e.then(l=>{if(this.__isLatestRender(t))return Ar("onBeforeLeave",[a,o,this],s.element)(l)}).then(l=>{if(!(l||{}).redirect)return l})}__runOnBeforeEnterCallbacks(e,t,o,s){const a=M(t,s.route);return e.then(l=>{if(this.__isLatestRender(t))return Ar("onBeforeEnter",[a,o,this],s.element)(l)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,o){if(t>Kn)throw new Error(N(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:o})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:o=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==o){const a=s?"replaceState":"pushState";window.history[a](null,document.title,e+t+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let o=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const a=t&&t.chain[s].element;if(a)if(a.parentNode===o)e.chain[s].element=a,o=a;else break}return o}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let s=o;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const l=e.chain[a].element;l&&(s.appendChild(l),this.__addedByRouter.set(l,!0),s===o&&this.__appearingContent.push(l),s=l)}}__removeDisappearingContent(){this.__disappearingContent&&We(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(We(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let o=t.chain.length-1;o>=e.__divergedChainIndex&&this.__isLatestRender(e);o--){const s=t.chain[o].element;if(s)try{const a=M(e);Je(s.onAfterLeave,[a,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&We(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const o=e.chain[t].element||{},s=M(e,e.chain[t].route);Je(o.onAfterEnter,[s,{},e.resolver],o)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],s=[],a=e.chain;let l;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){l=a[u-1].route.animate;break}if(t&&o&&l){const u=it(l)&&l.leave||"leaving",p=it(l)&&l.enter||"entering";s.push($r(t,u)),s.push($r(o,p))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:o,hash:s}=e?e.detail:window.location;j(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:o,hash:s},!0))}static setTriggers(...e){Wn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Vn(this)),Ke(this.__urlForName(e,t),this)}urlForPath(e,t){return Ke(Y.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:o,hash:s}=j(e)?this.__createUrl(e,"http://a"):e;return Be("go",{pathname:t,search:o,hash:s})}}const Zn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ye=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function es(){function r(){return!0}return ri(r)}function ts(){try{return rs()?!0:is()?Ye?!ns():!es():!1}catch{return!1}}function rs(){return localStorage.getItem("vaadin.developmentmode.force")}function is(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ns(){return!!(Ye&&Object.keys(Ye).map(e=>Ye[e]).filter(e=>e.productionMode).length>0)}function ri(r,e){if(typeof r!="function")return;const t=Zn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return r(e)}window.Vaadin=window.Vaadin||{};const Pr=function(r,e){if(window.Vaadin.developmentMode)return ri(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ts());function ss(){}const os=function(){if(typeof Pr=="function")return Pr(ss)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});os();Y.NavigationTrigger={POPSTATE:Cn,CLICK:Pn};var as=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,ii=(r,e,t,o)=>{for(var s=o>1?void 0:o?cs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&as(e,t,s),s};let Tt=class extends P{constructor(){super(...arguments),this.router=new Y(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return x`<slot></slot>`}};ii([v({attribute:!1})],Tt.prototype,"routes",2);Tt=ii([T("vaadin-router")],Tt);var ls=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,ut=(r,e,t,o)=>{for(var s=o>1?void 0:o?hs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&ls(e,t,s),s};let ni="auth",_e=class extends P{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=ke.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const r=x`
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
    `;return x`${this.isAuthenticated()?"":r} <slot></slot>`}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new hr(t).base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{s&&(console.log("Authentication:",s.token),this.user=ke.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new hr(t).base().post("/signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration:",s)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=L.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};_e.styles=I`
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
  `;ut([U()],_e.prototype,"loginStatus",2);ut([U()],_e.prototype,"registerStatus",2);ut([Fr({context:ni}),U()],_e.prototype,"user",2);_e=ut([T("auth-required")],_e);var us=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,jt=(r,e,t,o)=>{for(var s=o>1?void 0:o?ps(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&us(e,t,s),s};let Me=class extends P{constructor(){super(...arguments),this.user=new L}render(){const{profileImage:r,profileDescription:e,userid:t}=this.profile||{};return x`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${r}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Mr().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};Me.styles=I`
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
      width: 100%;
    }
  `;jt([U()],Me.prototype,"profile",2);jt([Dr({context:ni,subscribe:!0}),v({attribute:!1})],Me.prototype,"user",2);Me=jt([T("match-the-vibe-header")],Me);var ds=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,Ne=(r,e,t,o)=>{for(var s=o>1?void 0:o?fs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&ds(e,t,s),s};let se=class extends kt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return x`
      <section class="profile-page">
        <user-profile .using=${this.profile}> </user-profile>
      </section>
    `}};se.styles=[I`
      :host {
        display: contents;
      }

      .profile-page {
        display: flex;
        justify-content: center;
      }
    `];Ne([v({attribute:!1})],se.prototype,"location",2);Ne([v({reflect:!0})],se.prototype,"userid",1);Ne([v({reflect:!0})],se.prototype,"edit",1);Ne([v()],se.prototype,"profile",1);se=Ne([T("profile-page")],se);var Lt={},pt={};pt.byteLength=bs;pt.toByteArray=_s;pt.fromByteArray=xs;var q=[],D=[],ms=typeof Uint8Array<"u"?Uint8Array:Array,At="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var ue=0,gs=At.length;ue<gs;++ue)q[ue]=At[ue],D[At.charCodeAt(ue)]=ue;D[45]=62;D[95]=63;function si(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var o=t===e?0:4-t%4;return[t,o]}function bs(r){var e=si(r),t=e[0],o=e[1];return(t+o)*3/4-o}function ys(r,e,t){return(e+t)*3/4-t}function _s(r){var e,t=si(r),o=t[0],s=t[1],a=new ms(ys(r,o,s)),l=0,u=s>0?o-4:o,p;for(p=0;p<u;p+=4)e=D[r.charCodeAt(p)]<<18|D[r.charCodeAt(p+1)]<<12|D[r.charCodeAt(p+2)]<<6|D[r.charCodeAt(p+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return s===2&&(e=D[r.charCodeAt(p)]<<2|D[r.charCodeAt(p+1)]>>4,a[l++]=e&255),s===1&&(e=D[r.charCodeAt(p)]<<10|D[r.charCodeAt(p+1)]<<4|D[r.charCodeAt(p+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function ws(r){return q[r>>18&63]+q[r>>12&63]+q[r>>6&63]+q[r&63]}function vs(r,e,t){for(var o,s=[],a=e;a<t;a+=3)o=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),s.push(ws(o));return s.join("")}function xs(r){for(var e,t=r.length,o=t%3,s=[],a=16383,l=0,u=t-o;l<u;l+=a)s.push(vs(r,l,l+a>u?u:l+a));return o===1?(e=r[t-1],s.push(q[e>>2]+q[e<<4&63]+"==")):o===2&&(e=(r[t-2]<<8)+r[t-1],s.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"=")),s.join("")}var Nt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Nt.read=function(r,e,t,o,s){var a,l,u=s*8-o-1,p=(1<<u)-1,g=p>>1,b=-7,y=t?s-1:0,_=t?-1:1,w=r[e+y];for(y+=_,a=w&(1<<-b)-1,w>>=-b,b+=u;b>0;a=a*256+r[e+y],y+=_,b-=8);for(l=a&(1<<-b)-1,a>>=-b,b+=o;b>0;l=l*256+r[e+y],y+=_,b-=8);if(a===0)a=1-g;else{if(a===p)return l?NaN:(w?-1:1)*(1/0);l=l+Math.pow(2,o),a=a-g}return(w?-1:1)*l*Math.pow(2,a-o)};Nt.write=function(r,e,t,o,s,a){var l,u,p,g=a*8-s-1,b=(1<<g)-1,y=b>>1,_=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=o?0:a-1,R=o?1:-1,Z=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,l=b):(l=Math.floor(Math.log(e)/Math.LN2),e*(p=Math.pow(2,-l))<1&&(l--,p*=2),l+y>=1?e+=_/p:e+=_*Math.pow(2,1-y),e*p>=2&&(l++,p/=2),l+y>=b?(u=0,l=b):l+y>=1?(u=(e*p-1)*Math.pow(2,s),l=l+y):(u=e*Math.pow(2,y-1)*Math.pow(2,s),l=0));s>=8;r[t+w]=u&255,w+=R,u/=256,s-=8);for(l=l<<s|u,g+=s;g>0;r[t+w]=l&255,w+=R,l/=256,g-=8);r[t+w-R]|=Z*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(r){const e=pt,t=Nt,o=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=u,r.SlowBuffer=ae,r.INSPECT_MAX_BYTES=50;const s=2147483647;r.kMaxLength=s,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const c=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(c,i),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function l(c){if(c>s)throw new RangeError('The value "'+c+'" is invalid for option "size"');const i=new Uint8Array(c);return Object.setPrototypeOf(i,u.prototype),i}function u(c,i,n){if(typeof c=="number"){if(typeof i=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return y(c)}return p(c,i,n)}u.poolSize=8192;function p(c,i,n){if(typeof c=="string")return _(c,i);if(ArrayBuffer.isView(c))return R(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(H(c,ArrayBuffer)||c&&H(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(H(c,SharedArrayBuffer)||c&&H(c.buffer,SharedArrayBuffer)))return Z(c,i,n);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=c.valueOf&&c.valueOf();if(h!=null&&h!==c)return u.from(h,i,n);const d=mt(c);if(d)return d;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),i,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,i,n){return p(c,i,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function g(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function b(c,i,n){return g(c),c<=0?l(c):i!==void 0?typeof n=="string"?l(c).fill(i,n):l(c).fill(i):l(c)}u.alloc=function(c,i,n){return b(c,i,n)};function y(c){return g(c),l(c<0?0:Ee(c)|0)}u.allocUnsafe=function(c){return y(c)},u.allocUnsafeSlow=function(c){return y(c)};function _(c,i){if((typeof i!="string"||i==="")&&(i="utf8"),!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i);const n=ce(c,i)|0;let h=l(n);const d=h.write(c,i);return d!==n&&(h=h.slice(0,d)),h}function w(c){const i=c.length<0?0:Ee(c.length)|0,n=l(i);for(let h=0;h<i;h+=1)n[h]=c[h]&255;return n}function R(c){if(H(c,Uint8Array)){const i=new Uint8Array(c);return Z(i.buffer,i.byteOffset,i.byteLength)}return w(c)}function Z(c,i,n){if(i<0||c.byteLength<i)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<i+(n||0))throw new RangeError('"length" is outside of buffer bounds');let h;return i===void 0&&n===void 0?h=new Uint8Array(c):n===void 0?h=new Uint8Array(c,i):h=new Uint8Array(c,i,n),Object.setPrototypeOf(h,u.prototype),h}function mt(c){if(u.isBuffer(c)){const i=Ee(c.length)|0,n=l(i);return n.length===0||c.copy(n,0,0,i),n}if(c.length!==void 0)return typeof c.length!="number"||_t(c.length)?l(0):w(c);if(c.type==="Buffer"&&Array.isArray(c.data))return w(c.data)}function Ee(c){if(c>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return c|0}function ae(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(i){return i!=null&&i._isBuffer===!0&&i!==u.prototype},u.compare=function(i,n){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),H(n,Uint8Array)&&(n=u.from(n,n.offset,n.byteLength)),!u.isBuffer(i)||!u.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(i===n)return 0;let h=i.length,d=n.length;for(let f=0,m=Math.min(h,d);f<m;++f)if(i[f]!==n[f]){h=i[f],d=n[f];break}return h<d?-1:d<h?1:0},u.isEncoding=function(i){switch(String(i).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(i,n){if(!Array.isArray(i))throw new TypeError('"list" argument must be an Array of Buffers');if(i.length===0)return u.alloc(0);let h;if(n===void 0)for(n=0,h=0;h<i.length;++h)n+=i[h].length;const d=u.allocUnsafe(n);let f=0;for(h=0;h<i.length;++h){let m=i[h];if(H(m,Uint8Array))f+m.length>d.length?(u.isBuffer(m)||(m=u.from(m)),m.copy(d,f)):Uint8Array.prototype.set.call(d,m,f);else if(u.isBuffer(m))m.copy(d,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=m.length}return d};function ce(c,i){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||H(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const n=c.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&n===0)return 0;let d=!1;for(;;)switch(i){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return yt(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Qt(c).length;default:if(d)return h?-1:yt(c).length;i=(""+i).toLowerCase(),d=!0}}u.byteLength=ce;function gt(c,i,n){let h=!1;if((i===void 0||i<0)&&(i=0),i>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,i>>>=0,n<=i))return"";for(c||(c="utf8");;)switch(c){case"hex":return bi(this,i,n);case"utf8":case"utf-8":return zt(this,i,n);case"ascii":return mi(this,i,n);case"latin1":case"binary":return gi(this,i,n);case"base64":return di(this,i,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yi(this,i,n);default:if(h)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function V(c,i,n){const h=c[i];c[i]=c[n],c[n]=h}u.prototype.swap16=function(){const i=this.length;if(i%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<i;n+=2)V(this,n,n+1);return this},u.prototype.swap32=function(){const i=this.length;if(i%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<i;n+=4)V(this,n,n+3),V(this,n+1,n+2);return this},u.prototype.swap64=function(){const i=this.length;if(i%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<i;n+=8)V(this,n,n+7),V(this,n+1,n+6),V(this,n+2,n+5),V(this,n+3,n+4);return this},u.prototype.toString=function(){const i=this.length;return i===0?"":arguments.length===0?zt(this,0,i):gt.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(i){if(!u.isBuffer(i))throw new TypeError("Argument must be a Buffer");return this===i?!0:u.compare(this,i)===0},u.prototype.inspect=function(){let i="";const n=r.INSPECT_MAX_BYTES;return i=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(i+=" ... "),"<Buffer "+i+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(i,n,h,d,f){if(H(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(i))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof i);if(n===void 0&&(n=0),h===void 0&&(h=i?i.length:0),d===void 0&&(d=0),f===void 0&&(f=this.length),n<0||h>i.length||d<0||f>this.length)throw new RangeError("out of range index");if(d>=f&&n>=h)return 0;if(d>=f)return-1;if(n>=h)return 1;if(n>>>=0,h>>>=0,d>>>=0,f>>>=0,this===i)return 0;let m=f-d,$=h-n;const S=Math.min(m,$),A=this.slice(d,f),C=i.slice(n,h);for(let E=0;E<S;++E)if(A[E]!==C[E]){m=A[E],$=C[E];break}return m<$?-1:$<m?1:0};function He(c,i,n,h,d){if(c.length===0)return-1;if(typeof n=="string"?(h=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,_t(n)&&(n=d?0:c.length-1),n<0&&(n=c.length+n),n>=c.length){if(d)return-1;n=c.length-1}else if(n<0)if(d)n=0;else return-1;if(typeof i=="string"&&(i=u.from(i,h)),u.isBuffer(i))return i.length===0?-1:Ae(c,i,n,h,d);if(typeof i=="number")return i=i&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(c,i,n):Uint8Array.prototype.lastIndexOf.call(c,i,n):Ae(c,[i],n,h,d);throw new TypeError("val must be string, number or Buffer")}function Ae(c,i,n,h,d){let f=1,m=c.length,$=i.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(c.length<2||i.length<2)return-1;f=2,m/=2,$/=2,n/=2}function S(C,E){return f===1?C[E]:C.readUInt16BE(E*f)}let A;if(d){let C=-1;for(A=n;A<m;A++)if(S(c,A)===S(i,C===-1?0:A-C)){if(C===-1&&(C=A),A-C+1===$)return C*f}else C!==-1&&(A-=A-C),C=-1}else for(n+$>m&&(n=m-$),A=n;A>=0;A--){let C=!0;for(let E=0;E<$;E++)if(S(c,A+E)!==S(i,E)){C=!1;break}if(C)return A}return-1}u.prototype.includes=function(i,n,h){return this.indexOf(i,n,h)!==-1},u.prototype.indexOf=function(i,n,h){return He(this,i,n,h,!0)},u.prototype.lastIndexOf=function(i,n,h){return He(this,i,n,h,!1)};function qe(c,i,n,h){n=Number(n)||0;const d=c.length-n;h?(h=Number(h),h>d&&(h=d)):h=d;const f=i.length;h>f/2&&(h=f/2);let m;for(m=0;m<h;++m){const $=parseInt(i.substr(m*2,2),16);if(_t($))return m;c[n+m]=$}return m}function li(c,i,n,h){return Ve(yt(i,c.length-n),c,n,h)}function hi(c,i,n,h){return Ve(xi(i),c,n,h)}function ui(c,i,n,h){return Ve(Qt(i),c,n,h)}function pi(c,i,n,h){return Ve($i(i,c.length-n),c,n,h)}u.prototype.write=function(i,n,h,d){if(n===void 0)d="utf8",h=this.length,n=0;else if(h===void 0&&typeof n=="string")d=n,h=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(h)?(h=h>>>0,d===void 0&&(d="utf8")):(d=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-n;if((h===void 0||h>f)&&(h=f),i.length>0&&(h<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");d||(d="utf8");let m=!1;for(;;)switch(d){case"hex":return qe(this,i,n,h);case"utf8":case"utf-8":return li(this,i,n,h);case"ascii":case"latin1":case"binary":return hi(this,i,n,h);case"base64":return ui(this,i,n,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pi(this,i,n,h);default:if(m)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function di(c,i,n){return i===0&&n===c.length?e.fromByteArray(c):e.fromByteArray(c.slice(i,n))}function zt(c,i,n){n=Math.min(c.length,n);const h=[];let d=i;for(;d<n;){const f=c[d];let m=null,$=f>239?4:f>223?3:f>191?2:1;if(d+$<=n){let S,A,C,E;switch($){case 1:f<128&&(m=f);break;case 2:S=c[d+1],(S&192)===128&&(E=(f&31)<<6|S&63,E>127&&(m=E));break;case 3:S=c[d+1],A=c[d+2],(S&192)===128&&(A&192)===128&&(E=(f&15)<<12|(S&63)<<6|A&63,E>2047&&(E<55296||E>57343)&&(m=E));break;case 4:S=c[d+1],A=c[d+2],C=c[d+3],(S&192)===128&&(A&192)===128&&(C&192)===128&&(E=(f&15)<<18|(S&63)<<12|(A&63)<<6|C&63,E>65535&&E<1114112&&(m=E))}}m===null?(m=65533,$=1):m>65535&&(m-=65536,h.push(m>>>10&1023|55296),m=56320|m&1023),h.push(m),d+=$}return fi(h)}const Ht=4096;function fi(c){const i=c.length;if(i<=Ht)return String.fromCharCode.apply(String,c);let n="",h=0;for(;h<i;)n+=String.fromCharCode.apply(String,c.slice(h,h+=Ht));return n}function mi(c,i,n){let h="";n=Math.min(c.length,n);for(let d=i;d<n;++d)h+=String.fromCharCode(c[d]&127);return h}function gi(c,i,n){let h="";n=Math.min(c.length,n);for(let d=i;d<n;++d)h+=String.fromCharCode(c[d]);return h}function bi(c,i,n){const h=c.length;(!i||i<0)&&(i=0),(!n||n<0||n>h)&&(n=h);let d="";for(let f=i;f<n;++f)d+=Ei[c[f]];return d}function yi(c,i,n){const h=c.slice(i,n);let d="";for(let f=0;f<h.length-1;f+=2)d+=String.fromCharCode(h[f]+h[f+1]*256);return d}u.prototype.slice=function(i,n){const h=this.length;i=~~i,n=n===void 0?h:~~n,i<0?(i+=h,i<0&&(i=0)):i>h&&(i=h),n<0?(n+=h,n<0&&(n=0)):n>h&&(n=h),n<i&&(n=i);const d=this.subarray(i,n);return Object.setPrototypeOf(d,u.prototype),d};function B(c,i,n){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+i>n)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let d=this[i],f=1,m=0;for(;++m<n&&(f*=256);)d+=this[i+m]*f;return d},u.prototype.readUintBE=u.prototype.readUIntBE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let d=this[i+--n],f=1;for(;n>0&&(f*=256);)d+=this[i+--n]*f;return d},u.prototype.readUint8=u.prototype.readUInt8=function(i,n){return i=i>>>0,n||B(i,1,this.length),this[i]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(i,n){return i=i>>>0,n||B(i,2,this.length),this[i]|this[i+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(i,n){return i=i>>>0,n||B(i,2,this.length),this[i]<<8|this[i+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(i,n){return i=i>>>0,n||B(i,4,this.length),(this[i]|this[i+1]<<8|this[i+2]<<16)+this[i+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(i,n){return i=i>>>0,n||B(i,4,this.length),this[i]*16777216+(this[i+1]<<16|this[i+2]<<8|this[i+3])},u.prototype.readBigUInt64LE=W(function(i){i=i>>>0,he(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Pe(i,this.length-8);const d=n+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24,f=this[++i]+this[++i]*2**8+this[++i]*2**16+h*2**24;return BigInt(d)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=W(function(i){i=i>>>0,he(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Pe(i,this.length-8);const d=n*2**24+this[++i]*2**16+this[++i]*2**8+this[++i],f=this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h;return(BigInt(d)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let d=this[i],f=1,m=0;for(;++m<n&&(f*=256);)d+=this[i+m]*f;return f*=128,d>=f&&(d-=Math.pow(2,8*n)),d},u.prototype.readIntBE=function(i,n,h){i=i>>>0,n=n>>>0,h||B(i,n,this.length);let d=n,f=1,m=this[i+--d];for(;d>0&&(f*=256);)m+=this[i+--d]*f;return f*=128,m>=f&&(m-=Math.pow(2,8*n)),m},u.prototype.readInt8=function(i,n){return i=i>>>0,n||B(i,1,this.length),this[i]&128?(255-this[i]+1)*-1:this[i]},u.prototype.readInt16LE=function(i,n){i=i>>>0,n||B(i,2,this.length);const h=this[i]|this[i+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(i,n){i=i>>>0,n||B(i,2,this.length);const h=this[i+1]|this[i]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(i,n){return i=i>>>0,n||B(i,4,this.length),this[i]|this[i+1]<<8|this[i+2]<<16|this[i+3]<<24},u.prototype.readInt32BE=function(i,n){return i=i>>>0,n||B(i,4,this.length),this[i]<<24|this[i+1]<<16|this[i+2]<<8|this[i+3]},u.prototype.readBigInt64LE=W(function(i){i=i>>>0,he(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Pe(i,this.length-8);const d=this[i+4]+this[i+5]*2**8+this[i+6]*2**16+(h<<24);return(BigInt(d)<<BigInt(32))+BigInt(n+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24)}),u.prototype.readBigInt64BE=W(function(i){i=i>>>0,he(i,"offset");const n=this[i],h=this[i+7];(n===void 0||h===void 0)&&Pe(i,this.length-8);const d=(n<<24)+this[++i]*2**16+this[++i]*2**8+this[++i];return(BigInt(d)<<BigInt(32))+BigInt(this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+h)}),u.prototype.readFloatLE=function(i,n){return i=i>>>0,n||B(i,4,this.length),t.read(this,i,!0,23,4)},u.prototype.readFloatBE=function(i,n){return i=i>>>0,n||B(i,4,this.length),t.read(this,i,!1,23,4)},u.prototype.readDoubleLE=function(i,n){return i=i>>>0,n||B(i,8,this.length),t.read(this,i,!0,52,8)},u.prototype.readDoubleBE=function(i,n){return i=i>>>0,n||B(i,8,this.length),t.read(this,i,!1,52,8)};function k(c,i,n,h,d,f){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(i>d||i<f)throw new RangeError('"value" argument is out of bounds');if(n+h>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(i,n,h,d){if(i=+i,n=n>>>0,h=h>>>0,!d){const $=Math.pow(2,8*h)-1;k(this,i,n,h,$,0)}let f=1,m=0;for(this[n]=i&255;++m<h&&(f*=256);)this[n+m]=i/f&255;return n+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(i,n,h,d){if(i=+i,n=n>>>0,h=h>>>0,!d){const $=Math.pow(2,8*h)-1;k(this,i,n,h,$,0)}let f=h-1,m=1;for(this[n+f]=i&255;--f>=0&&(m*=256);)this[n+f]=i/m&255;return n+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,1,255,0),this[n]=i&255,n+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,2,65535,0),this[n]=i&255,this[n+1]=i>>>8,n+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,2,65535,0),this[n]=i>>>8,this[n+1]=i&255,n+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,4,4294967295,0),this[n+3]=i>>>24,this[n+2]=i>>>16,this[n+1]=i>>>8,this[n]=i&255,n+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,4,4294967295,0),this[n]=i>>>24,this[n+1]=i>>>16,this[n+2]=i>>>8,this[n+3]=i&255,n+4};function qt(c,i,n,h,d){Yt(i,h,d,c,n,7);let f=Number(i&BigInt(4294967295));c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,n}function Vt(c,i,n,h,d){Yt(i,h,d,c,n,7);let f=Number(i&BigInt(4294967295));c[n+7]=f,f=f>>8,c[n+6]=f,f=f>>8,c[n+5]=f,f=f>>8,c[n+4]=f;let m=Number(i>>BigInt(32)&BigInt(4294967295));return c[n+3]=m,m=m>>8,c[n+2]=m,m=m>>8,c[n+1]=m,m=m>>8,c[n]=m,n+8}u.prototype.writeBigUInt64LE=W(function(i,n=0){return qt(this,i,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=W(function(i,n=0){return Vt(this,i,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(i,n,h,d){if(i=+i,n=n>>>0,!d){const S=Math.pow(2,8*h-1);k(this,i,n,h,S-1,-S)}let f=0,m=1,$=0;for(this[n]=i&255;++f<h&&(m*=256);)i<0&&$===0&&this[n+f-1]!==0&&($=1),this[n+f]=(i/m>>0)-$&255;return n+h},u.prototype.writeIntBE=function(i,n,h,d){if(i=+i,n=n>>>0,!d){const S=Math.pow(2,8*h-1);k(this,i,n,h,S-1,-S)}let f=h-1,m=1,$=0;for(this[n+f]=i&255;--f>=0&&(m*=256);)i<0&&$===0&&this[n+f+1]!==0&&($=1),this[n+f]=(i/m>>0)-$&255;return n+h},u.prototype.writeInt8=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,1,127,-128),i<0&&(i=255+i+1),this[n]=i&255,n+1},u.prototype.writeInt16LE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,2,32767,-32768),this[n]=i&255,this[n+1]=i>>>8,n+2},u.prototype.writeInt16BE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,2,32767,-32768),this[n]=i>>>8,this[n+1]=i&255,n+2},u.prototype.writeInt32LE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,4,2147483647,-2147483648),this[n]=i&255,this[n+1]=i>>>8,this[n+2]=i>>>16,this[n+3]=i>>>24,n+4},u.prototype.writeInt32BE=function(i,n,h){return i=+i,n=n>>>0,h||k(this,i,n,4,2147483647,-2147483648),i<0&&(i=4294967295+i+1),this[n]=i>>>24,this[n+1]=i>>>16,this[n+2]=i>>>8,this[n+3]=i&255,n+4},u.prototype.writeBigInt64LE=W(function(i,n=0){return qt(this,i,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=W(function(i,n=0){return Vt(this,i,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Wt(c,i,n,h,d,f){if(n+h>c.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Gt(c,i,n,h,d){return i=+i,n=n>>>0,d||Wt(c,i,n,4),t.write(c,i,n,h,23,4),n+4}u.prototype.writeFloatLE=function(i,n,h){return Gt(this,i,n,!0,h)},u.prototype.writeFloatBE=function(i,n,h){return Gt(this,i,n,!1,h)};function Jt(c,i,n,h,d){return i=+i,n=n>>>0,d||Wt(c,i,n,8),t.write(c,i,n,h,52,8),n+8}u.prototype.writeDoubleLE=function(i,n,h){return Jt(this,i,n,!0,h)},u.prototype.writeDoubleBE=function(i,n,h){return Jt(this,i,n,!1,h)},u.prototype.copy=function(i,n,h,d){if(!u.isBuffer(i))throw new TypeError("argument should be a Buffer");if(h||(h=0),!d&&d!==0&&(d=this.length),n>=i.length&&(n=i.length),n||(n=0),d>0&&d<h&&(d=h),d===h||i.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),i.length-n<d-h&&(d=i.length-n+h);const f=d-h;return this===i&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,h,d):Uint8Array.prototype.set.call(i,this.subarray(h,d),n),f},u.prototype.fill=function(i,n,h,d){if(typeof i=="string"){if(typeof n=="string"?(d=n,n=0,h=this.length):typeof h=="string"&&(d=h,h=this.length),d!==void 0&&typeof d!="string")throw new TypeError("encoding must be a string");if(typeof d=="string"&&!u.isEncoding(d))throw new TypeError("Unknown encoding: "+d);if(i.length===1){const m=i.charCodeAt(0);(d==="utf8"&&m<128||d==="latin1")&&(i=m)}}else typeof i=="number"?i=i&255:typeof i=="boolean"&&(i=Number(i));if(n<0||this.length<n||this.length<h)throw new RangeError("Out of range index");if(h<=n)return this;n=n>>>0,h=h===void 0?this.length:h>>>0,i||(i=0);let f;if(typeof i=="number")for(f=n;f<h;++f)this[f]=i;else{const m=u.isBuffer(i)?i:u.from(i,d),$=m.length;if($===0)throw new TypeError('The value "'+i+'" is invalid for argument "value"');for(f=0;f<h-n;++f)this[f+n]=m[f%$]}return this};const le={};function bt(c,i,n){le[c]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:i.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(d){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:d,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}bt("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),bt("ERR_INVALID_ARG_TYPE",function(c,i){return`The "${c}" argument must be of type number. Received type ${typeof i}`},TypeError),bt("ERR_OUT_OF_RANGE",function(c,i,n){let h=`The value of "${c}" is out of range.`,d=n;return Number.isInteger(n)&&Math.abs(n)>2**32?d=Kt(String(n)):typeof n=="bigint"&&(d=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(d=Kt(d)),d+="n"),h+=` It must be ${i}. Received ${d}`,h},RangeError);function Kt(c){let i="",n=c.length;const h=c[0]==="-"?1:0;for(;n>=h+4;n-=3)i=`_${c.slice(n-3,n)}${i}`;return`${c.slice(0,n)}${i}`}function _i(c,i,n){he(i,"offset"),(c[i]===void 0||c[i+n]===void 0)&&Pe(i,c.length-(n+1))}function Yt(c,i,n,h,d,f){if(c>n||c<i){const m=typeof i=="bigint"?"n":"";let $;throw f>3?i===0||i===BigInt(0)?$=`>= 0${m} and < 2${m} ** ${(f+1)*8}${m}`:$=`>= -(2${m} ** ${(f+1)*8-1}${m}) and < 2 ** ${(f+1)*8-1}${m}`:$=`>= ${i}${m} and <= ${n}${m}`,new le.ERR_OUT_OF_RANGE("value",$,c)}_i(h,d,f)}function he(c,i){if(typeof c!="number")throw new le.ERR_INVALID_ARG_TYPE(i,"number",c)}function Pe(c,i,n){throw Math.floor(c)!==c?(he(c,n),new le.ERR_OUT_OF_RANGE(n||"offset","an integer",c)):i<0?new le.ERR_BUFFER_OUT_OF_BOUNDS:new le.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${i}`,c)}const wi=/[^+/0-9A-Za-z-_]/g;function vi(c){if(c=c.split("=")[0],c=c.trim().replace(wi,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function yt(c,i){i=i||1/0;let n;const h=c.length;let d=null;const f=[];for(let m=0;m<h;++m){if(n=c.charCodeAt(m),n>55295&&n<57344){if(!d){if(n>56319){(i-=3)>-1&&f.push(239,191,189);continue}else if(m+1===h){(i-=3)>-1&&f.push(239,191,189);continue}d=n;continue}if(n<56320){(i-=3)>-1&&f.push(239,191,189),d=n;continue}n=(d-55296<<10|n-56320)+65536}else d&&(i-=3)>-1&&f.push(239,191,189);if(d=null,n<128){if((i-=1)<0)break;f.push(n)}else if(n<2048){if((i-=2)<0)break;f.push(n>>6|192,n&63|128)}else if(n<65536){if((i-=3)<0)break;f.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((i-=4)<0)break;f.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return f}function xi(c){const i=[];for(let n=0;n<c.length;++n)i.push(c.charCodeAt(n)&255);return i}function $i(c,i){let n,h,d;const f=[];for(let m=0;m<c.length&&!((i-=2)<0);++m)n=c.charCodeAt(m),h=n>>8,d=n%256,f.push(d),f.push(h);return f}function Qt(c){return e.toByteArray(vi(c))}function Ve(c,i,n,h){let d;for(d=0;d<h&&!(d+n>=i.length||d>=c.length);++d)i[d+n]=c[d];return d}function H(c,i){return c instanceof i||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===i.name}function _t(c){return c!==c}const Ei=function(){const c="0123456789abcdef",i=new Array(256);for(let n=0;n<16;++n){const h=n*16;for(let d=0;d<16;++d)i[h+d]=c[n]+c[d]}return i}();function W(c){return typeof BigInt>"u"?Ai:c}function Ai(){throw new Error("BigInt not supported")}})(Lt);var $s=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,oi=(r,e,t,o)=>{for(var s=o>1?void 0:o?Es(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&$s(e,t,s),s};let nt=class extends P{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return x`
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
    `}};nt.styles=I`
    .single-track {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #ffffff;
      border: 1px solid #eee;
      border-radius: 8px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .single-track:hover {
      background-color: #f0f0f0;
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
      font-weight: bold;
      color: var(--darker-color);
    }

    .artist-name {
      font-size: 0.875em;
      color: #666;
    }
  `;oi([v({type:Object})],nt.prototype,"track",2);nt=oi([T("track-card")],nt);var As=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,dt=(r,e,t,o)=>{for(var s=o>1?void 0:o?Ps(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&As(e,t,s),s};let we=class extends P{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(r){const e=`https://api.spotify.com/v1/tracks/${r}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const o=await t.json();return this.currentTracks=[...this.currentTracks,o],o}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Lt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const o=await t.json();this.accessToken=o.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var r;super.connectedCallback(),(r=this.comment)!=null&&r.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(r){try{this.currentTracks=[];const e=r.map(o=>this.findSong(o)),t=await Promise.all(e);this.currentTracks=t.filter(o=>o!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return x`
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
          ${this.currentTracks.map(o=>x`
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
    `}};we.styles=I`
    .single-comment {
      display: flex;
      flex-direction: row;
      background-color: #2c2c2e;
      color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
      font-size: 0.8em;
      color: #a9a9a9;
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
      color: #a9a9a9;
    }

    .track-image {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      object-fit: cover;
    }
  `;dt([v({type:Object})],we.prototype,"comment",2);dt([v({type:String})],we.prototype,"accessToken",2);dt([U()],we.prototype,"currentTracks",2);we=dt([T("comment-card")],we);var Ss=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,z=(r,e,t,o)=>{for(var s=o>1?void 0:o?Cs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Ss(e,t,s),s};let F=class extends P{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post",this.addEventListener("track-selected",r=>{const e=r;this._selectTrack(e.detail.track)})}_selectTrack(r){const e=this.selectedTracks.findIndex(t=>t.id===r.id);e>-1?this.selectedTracks=[...this.selectedTracks.slice(0,e),...this.selectedTracks.slice(e+1)]:this.selectedTracks=[...this.selectedTracks,r]}async _recommendTracks(r){var u;r.preventDefault(),this.submissionSuccess=null;const e=r.target;let o=new FormData(e).get("input-comment");const s=this.selectedTracks.map(p=>p.id),a=`http://localhost:3000/posts/${(u=this.post)==null?void 0:u._id}`,l={userName:"aidan",commentTime:new Date,commentMessage:o,SongIDs:s};try{if((await fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).ok)console.log("Comment successfully added"),this._clearTopTracks(),this._clearSelectedTracks(),this.submissionSuccess=!0,e.reset(),this._handleCommentAdded();else throw new Error("Failed to post comment")}catch(p){console.error("Error:",p),this.submissionSuccess=!1}}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),this.searchSpotify()}_clearTopTracks(){this.topTracks=[]}_clearSelectedTracks(){this.selectedTracks=[]}async fetchTopTracks(r){const e=await fetch(`https://api.spotify.com/v1/artists/${r}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?this.topTracks=t.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}connectedCallback(){var r;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((r=this.post)==null?void 0:r.comments)||[])}async _handleCommentAdded(){var r;if(console.log("Comment Created, Now Refreshing Component"),!((r=this.post)!=null&&r._id)){console.error("Post ID is undefined.");return}try{const e=await fetch(`http://localhost:3000/comments/${this.post._id}`,{method:"GET"});if(!e.ok)throw new Error("Failed to fetch comments");const t=await e.json();this.getPostComments=[...t]}catch(e){console.error("Error fetching comments:",e)}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Lt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const o=await t.json();this.accessToken=o.access_token}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const r=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(r,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();t.tracks.items.length>0?this.topTracks=t.tracks.items:(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t,o,s;const r=(e=this.post)!=null&&e.postTime?new Date(this.post.postTime).toLocaleString():"";return x`
      <section class="${this.expandedClass}">
        <section class="name-and-time-and-expand">
          <section class="name-and-time">
            <h3 class="feed-name">${(t=this.post)==null?void 0:t.userName}</h3>
            <p class="time-posted">${r}</p>
          </section>
          <button class="expand-unexpand" @click=${this._expand}>
            ${this.expanded?"Unexpand":"Expand"}
          </button>
        </section>
        <p class="message">${(o=this.post)==null?void 0:o.postMessage}</p>
        <section class="post-comments">
          <h3 class="comments-header">Comments</h3>
          ${(s=this.getPostComments)==null?void 0:s.map(a=>x`<comment-card .comment=${a}></comment-card>`)}
        </section>
        ${this.expanded?x`
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
                    ${this.topTracks.length>0?this.topTracks.slice(0,5).map(a=>x`<track-card .track=${a}></track-card>`):x`<h3>
                          The tracks you search for will show up here
                        </h3>`}
                  </section>
                  <section class="selected-tracks">
                    <h3>Selected Tracks</h3>
                    ${this.selectedTracks.map(a=>x`<track-card .track=${a}></track-card>`)}
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
                  ${this.submissionSuccess===!0?x`<p>Submission successful!</p>`:""}
                  ${this.submissionSuccess===!1?x`<p>Submission failed. Please try again.</p>`:""}
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
    `}};F.styles=I`
    .feed-single-post,
    .feed-single-post-expanded {
      background-color: #2c2c2e;
      color: #ffffff;
      padding: 20px;
      margin-bottom: 1em;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .message {
      padding-bottom: 1.5em;
    }

    .name-and-time-and-expand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1em;
    }

    .name-and-time {
      display: flex;
      align-items: center;
      flex-grow: 1;
    }

    .feed-name {
      font-weight: 600;
      margin-right: 1em; /* Adjust as needed */
    }

    .time-posted {
      font-size: 0.8em;
      color: #a9a9a9;
      margin-left: 1em; /* Ensures the time is to the right of the name */
      flex-grow: 1;
    }

    .expand-unexpand {
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      font-size: 0.875em;
      white-space: nowrap; /* Prevents wrapping on small screens */
    }

    .expand-unexpand:hover {
      background: #0056b3;
    }

    .message {
      font-size: 1em;
      margin-bottom: 1em;
    }
    /* Additional Styles for Expanded Content */
    .query-results,
    .selected-tracks {
      background-color: #3a3a3c;
      padding: 10px;
      margin-top: 10px;
      border-radius: 8px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
      overflow: auto; /* Allow scrolling if content exceeds container size */
    }

    .query-results h3,
    .selected-tracks h3 {
      color: #ddd;
      font-size: 1.2em;
    }

    .track-card {
      display: flex;
      align-items: center;
      background-color: #2c2c2e;
      color: #fff;
      margin: 10px 0;
      padding: 10px;
      border-radius: 6px;
      transition: background-color 0.2s ease;
    }

    .track-card:hover {
      background-color: #424244;
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
      font-size: 0.875em;
      color: #bbbbbb;
    }

    /* Search Form */
    .search-form input[type="text"] {
      width: calc(
        100% - 130px
      ); /* Adjust based on button width to fit on one line */
      padding: 8px;
      margin-right: 10px; /* Space between input and button */
      border: 1px solid #555;
      background-color: #2c2c2e;
      color: #fff;
      border-radius: 4px;
    }

    .search-form button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .search-form button:hover {
      background-color: #0056b3;
    }

    /* Clear Buttons */
    .clear-results,
    .clear-selected-tracks {
      padding: 8px 16px;
      background-color: #444;
      border: none;
      color: #ccc;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875em;
    }

    .clear-results:hover,
    .clear-selected-tracks:hover {
      background-color: #555;
    }

    /* Styling for the entire expanded content section */
    .expanded-content {
      border-top: 1px solid #555; /* Adds a subtle separation line */
      padding-top: 20px; /* Space above the content */
    }
  `;z([v({type:Object})],F.prototype,"post",2);z([U()],F.prototype,"getPostComments",2);z([U()],F.prototype,"expanded",2);z([U()],F.prototype,"submissionSuccess",2);z([v()],F.prototype,"expandedText",2);z([v({type:String})],F.prototype,"requestedSearchQuery",2);z([v({type:String})],F.prototype,"accessToken",2);z([v()],F.prototype,"topTracks",2);z([v()],F.prototype,"selectedTracks",2);z([U()],F.prototype,"expandedClass",2);F=z([T("feed-post")],F);var Ts=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,ai=(r,e,t,o)=>{for(var s=o>1?void 0:o?Bs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Ts(e,t,s),s};let st=class extends P{constructor(){super(...arguments),this.posts=[]}render(){return x`
      <div class="posts-container">
        ${this.posts.map(r=>x` <feed-post .post=${r}></feed-post>`)}
      </div>
    `}};st.styles=I``;ai([v({type:Array})],st.prototype,"posts",2);st=ai([T("feed-post-list")],st);var Os=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,ft=(r,e,t,o)=>{for(var s=o>1?void 0:o?Is(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Os(e,t,s),s};let ve=class extends P{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(r){r.preventDefault(),this.submissionSuccess=!1;const e=r.target;let o=new FormData(e).get("input-message");o?(console.log("submitting post!"),this._sendPostRequest(o,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(r,e){const t={userid:"65caf83fcdc541534288d60b",userName:"aidan",postTime:new Date,postMessage:r,comments:[]};console.log("new post: ",t);try{if((await fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(o){console.error("Error: ",o),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const r=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",r),this.dispatchEvent(r)}render(){return x`
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
    `}};ve.styles=I`
    :host {
      display: block;
      --background-color: #121212;
      --text-color: #e0e0e0;
      --accent-color: #bb86fc;
      --error-color: #cf6679;
    }

    .post-button,
    .close-form {
      background: var(--accent-color);
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
      background: #9277ff;
    }

    .create-post-ui {
      background-color: #2c2c2e; /* Lighter dark mode background color, matching the Feed Post component */
      color: var(--text-color);
      border: 1px solid #333;
      padding: 2em;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      margin-bottom: 1em;
    }

    .create-post-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    textarea {
      background-color: #333;
      color: var(--text-color);
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #555;
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
  `;ft([U()],ve.prototype,"expanded",2);ft([U()],ve.prototype,"submissionSuccess",2);ft([U()],ve.prototype,"errorMessage",2);ve=ft([T("create-post")],ve);var Us=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,ci=(r,e,t,o)=>{for(var s=o>1?void 0:o?ks(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Us(e,t,s),s};let ot=class extends P{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchData()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchData()}async _fetchData(){console.log("fetching posts!");try{const r=await fetch("http://localhost:3000/posts");if(r.ok){const e=await r.json();this.posts=e,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",r.status)}catch(r){console.error("Error fetching posts:",r)}}render(){return x`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <create-post></create-post>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};ot.styles=I`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;ci([U()],ot.prototype,"posts",2);ot=ci([T("main-feed")],ot);var Rs=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,ze=(r,e,t,o)=>{for(var s=o>1?void 0:o?Fs(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Rs(e,t,s),s};let oe=class extends kt{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}render(){return x`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `}};oe.styles=I`
    .feed-page {
      display: flex;
      justify-content: center;
    }
  `;ze([v({attribute:!1})],oe.prototype,"location",2);ze([v({reflect:!0})],oe.prototype,"userid",1);ze([v({reflect:!0})],oe.prototype,"edit",1);ze([v()],oe.prototype,"profile",1);oe=ze([T("home-page")],oe);var Ds=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,js=(r,e,t,o)=>{for(var s=o>1?void 0:o?Ms(e,t):e,a=r.length-1,l;a>=0;a--)(l=r[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Ds(e,t,s),s};let Ls=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Sr=class extends Hr{constructor(){super(on)}render(){return x`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Ls}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("MTVAPPElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Sr=js([T("mtv-app")],Sr);
