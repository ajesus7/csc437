(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,Re=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),De=new WeakMap;let ft=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Re&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&De.set(t,e))}return e}toString(){return this.cssText}};const Kt=r=>new ft(typeof r=="string"?r:r+"",void 0,Ce),X=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new ft(t,r,Ce)},Jt=(r,e)=>{if(Re)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=re.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Ie=Re?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Kt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gt,defineProperty:Xt,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:Yt,getOwnPropertySymbols:Zt,getPrototypeOf:er}=Object,S=globalThis,He=S.trustedTypes,tr=He?He.emptyScript:"",me=S.reactiveElementPolyfillSupport,z=(r,e)=>r,oe={toAttribute(r,e){switch(e){case Boolean:r=r?tr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},xe=(r,e)=>!Gt(r,e),Be={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:xe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class L extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Xt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Qt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Be}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=er(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const t=this.properties,i=[...Yt(t),...Zt(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Ie(s))}else e!==void 0&&t.push(Ie(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:oe).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:oe;this._$Em=s,this[s]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??xe)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[z("elementProperties")]=new Map,L[z("finalized")]=new Map,me==null||me({ReactiveElement:L}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,ae=q.trustedTypes,Fe=ae?ae.createPolicy("lit-html",{createHTML:r=>r}):void 0,gt="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+A,rr=`<${_t}>`,U=document,k=()=>U.createComment(""),W=r=>r===null||typeof r!="object"&&typeof r!="function",mt=Array.isArray,ir=r=>mt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ve=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,qe=/>/g,C=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,ke=/"/g,vt=/^(?:script|style|textarea|title)$/i,sr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),$=sr(1),D=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),We=new WeakMap,x=U.createTreeWalker(U,129);function bt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fe!==void 0?Fe.createHTML(e):e}const nr=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",o=F;for(let c=0;c<t;c++){const a=r[c];let l,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===F?h[1]==="!--"?o=ze:h[1]!==void 0?o=qe:h[2]!==void 0?(vt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=C):h[3]!==void 0&&(o=C):o===C?h[0]===">"?(o=s??F,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?C:h[3]==='"'?ke:Ve):o===ke||o===Ve?o=C:o===ze||o===qe?o=F:(o=C,s=void 0);const p=o===C&&r[c+1].startsWith("/>")?" ":"";n+=o===F?a+rr:u>=0?(i.push(l),a.slice(0,u)+gt+a.slice(u)+A+p):a+A+(u===-2?c:p)}return[bt(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class K{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=nr(e,t);if(this.el=K.createElement(l,i),x.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=x.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(gt)){const d=h[o++],p=s.getAttribute(u).split(A),R=/([.?@])?(.*)/.exec(d);a.push({type:1,index:n,name:R[2],strings:p,ctor:R[1]==="."?ar:R[1]==="?"?lr:R[1]==="@"?cr:pe}),s.removeAttribute(u)}else u.startsWith(A)&&(a.push({type:6,index:n}),s.removeAttribute(u));if(vt.test(s.tagName)){const u=s.textContent.split(A),d=u.length-1;if(d>0){s.textContent=ae?ae.emptyScript:"";for(let p=0;p<d;p++)s.append(u[p],k()),x.nextNode(),a.push({type:2,index:++n});s.append(u[d],k())}}}else if(s.nodeType===8)if(s.data===_t)a.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(A,u+1))!==-1;)a.push({type:7,index:n}),u+=A.length-1}n++}}static createElement(e,t){const i=U.createElement("template");return i.innerHTML=e,i}}function I(r,e,t=r,i){var o,c;if(e===D)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=W(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=I(r,s._$AS(r,e.values),s,i)),e}class or{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??U).importNode(t,!0);x.currentNode=s;let n=x.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new Q(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new hr(n,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(n=x.nextNode(),o++)}return x.currentNode=U,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),W(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ir(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==f&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=K.createElement(bt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new or(s,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new K(e)),t}k(e){mt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Q(this.S(k()),this.S(k()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=I(this,e,t,0),o=!W(e)||e!==this._$AH&&e!==D,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=I(this,c[i+a],t,a),l===D&&(l=this._$AH[a]),o||(o=!W(l)||l!==this._$AH[a]),l===f?e=f:e!==f&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ar extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class lr extends pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class cr extends pe{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??f)===D)return;const i=this._$AH,s=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class hr{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const be=q.litHtmlPolyfillSupport;be==null||be(K,Q),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.1.2");const ur=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Q(e.insertBefore(k(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ur(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}};var pt;y._$litElement$=!0,y.finalized=!0,(pt=globalThis.litElementHydrateSupport)==null||pt.call(globalThis,{LitElement:y});const ye=globalThis.litElementPolyfillSupport;ye==null||ye({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:xe},pr=(r=dr,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function v(r){return(e,t)=>typeof t=="object"?pr(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(r){return v({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yt=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ke=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new yt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fr{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Je extends fr{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new yt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new gr(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Je(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new Je(o,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(c){i.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set:function(c){i.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _r({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Ke(this,{context:r,callback:s=>{this[i.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new Ke(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let mr=class extends y{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",i=>{const s=i.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(s=>{const n=s(this.model);this.model=n}):this.model=t}}},vr=class extends y{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class br{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,s=this._handlers.get(i);return s?s(t,e):e}}function yr(r){return e=>Object.assign({},e,r)}function $r(r){return r}const wr="http://localhost:3000",Er="/api",we="JWT_AUTH_TOKEN",E=class E{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new E;return console.log("Deauthenticating",e,E._theUser),e===E._theUser&&(localStorage.removeItem(we),E._theUser=t),t}};E._theUser=new E;let b=E;class J extends b{constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(s).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){return b._theUser=new J(e,t),localStorage.setItem(we,e),b._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(we);return t?J.authenticate(t,e):b._theUser}}class Ue{constructor(e){this._base=Er,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=b._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${b._theUser.token}`};return e?{...i,...n}:n}else return e?{...i}:void 0}_url(e){return`${wr}${this._base}${e}`}}class Ge extends Ue{constructor(e){super(Object.fromEntries(e))}}class Ar extends Ue{constructor(){super(void 0)}}var Pr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,wt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Pr(e,t,s),s};const Et="BlazingModel",Xe={user:new b},Or=()=>new br,At=yr,Pt=$r;class St extends mr{constructor(e){super(e,Xe),this.model=Xe}}wt([$t({context:Et}),fe()],St.prototype,"model",2);class Te extends vr{getFromModel(e){if(this._model)return this._model[e]}}wt([_r({context:Et,subscribe:!0}),v({attribute:!1})],Te.prototype,"_model",2);const Me=Or(),Rr=Me.update;Me.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Ar().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?At({profile:t}):Pt)});Me.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new Ue(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{i&&console.log("Profile:",i)}).then(i=>i?At({profile:i}):Pt)});var Cr=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Y=(r,e,t,i)=>{for(var s=i>1?void 0:i?xr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Cr(e,t,s),s};let T=class extends y{constructor(){super(...arguments),this.path=""}get profile(){return this.using||{}}render(){const{name:r,profileImage:e,profileDescription:t,bio:i}=this.profile;return $`
      <section class="match-the-vibe-header">
        <a href="./index.html">match the vibe home</a>
        <drop-down
          profileImage="${e}"
          profileDescription="${t}"
        ></drop-down>
      </section>

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
            <h1>${r}&apos;s Page</h1>
            <p class="user-description">${i}</p>
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

      <user-profile-edit path="/profile/aidan"></user-profile-edit>
    `}};T.styles=X`
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
  `;Y([v()],T.prototype,"path",2);Y([v({attribute:!1})],T.prototype,"using",2);T=Y([O("user-profile")],T);let le=class extends T{constructor(){super(...arguments),this.path=""}render(){return $` <section class="form-container">
      <h2>edit profile form</h2>

      <form }>
        <div class="form-group">
          <label for="name">First Name</label>
          <input type="text" id="name" name="name" placeholder="e.g John" />
        </div>
        <div class="form-group">
          <label for="timezone">Timezone</label>
          <input
            type="text"
            id="timezone"
            name="timezone"
            placeholder="e.g PST"
          />
        </div>
        <div class="form-group">
          <label for="music-taste">Music Taste</label>
          <input
            type="text"
            id="music-taste"
            name="musicTaste"
            placeholder="e.g Indie Rock"
          />
        </div>
        <div class="form-group">
          <label for="profile-image">Profile Image</label>
          <input
            type="text"
            id="profile-image"
            name="profileImage"
            placeholder="(slug)"
          />
        </div>
        <div class="form-group">
          <label for="bio">Bio</label>
          <textarea id="bio" name="bio" placeholder="A short bio..."></textarea>
        </div>
        <div class="form-group">
          <label for="image-description" name="profileDescription"
            >Profile Image Description</label
          >
          <input
            type="text"
            id="image-description"
            placeholder="Describe your profile image"
          />
        </div>
        <div class="form-group">
          <label>Spotify</label>
          <div class="radio-group">
            <input type="radio" id="spotify-yes" name="spotify" value="yes" />
            <label for="spotify-yes">Yes</label>
            <input type="radio" id="spotify-no" name="spotify" value="no" />
            <label for="spotify-no">No</label>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </section>`}};le.styles=X`
    ${T.styles}

    .form-container {
      border: 0.05em solid white;
      border-radius: var(--box-border-radius);
      width: 70%;
      margin: 25px 0 100px 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .form-container h2 {
      font-weight: var(--medium-weight);
    }

    .form-group,
    .form-container {
      background-color: var(--background-color);
      padding: .6em;
      border-radius: 8px;
      width: 95%;
      max-width: 625px;
    }

    form {
      width: 90%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items; center;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--white-color);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--darker-color);
      border-radius: 4px;
      box-sizing: border-box;
    }

    .radio-group {
      display: flex;
      align-items: center;
    }

    .radio-group label {
      margin-left: 0.5rem;
      margin-right: 1rem;
    }

    .radio-group input[type="radio"] {
      margin-right: 0.25rem;
    }

    .btn {
      display: block;
      width: 100%;
      padding: 1rem;

      background-color: var(--accent-color);
      color: var(--white-color);
      border: none;
      border-radius: 4px;
      margin-top: .85rem;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
    }

    .btn:hover {
      background-color: var(--accent-color-hover);
    }
  `;Y([v()],le.prototype,"path",2);le=Y([O("user-profile-edit")],le);function ce(r){return r=r||[],Array.isArray(r)?r:[r]}function m(r){return`[Vaadin.Router] ${r}`}function Ur(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const he="module",ue="nomodule",Ee=[he,ue];function Qe(r){if(!r.match(/.+\.[m]?js$/))throw new Error(m(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Ot(r){if(!r||!_(r.path))throw new Error(m('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!M(r.action)&&!Array.isArray(r.children)&&!M(r.children)&&!de(e)&&!t.some(i=>_(r[i])))throw new Error(m(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(_(e))Qe(e);else if(Ee.some(i=>i in e))Ee.forEach(i=>i in e&&Qe(e[i]));else throw new Error(m('Expected route bundle to include either "'+ue+'" or "'+he+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn(m(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function Ye(r){ce(r).forEach(e=>Ot(e))}function Ze(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===he?t.setAttribute("type",he):e===ue&&t.setAttribute(ue,""),t.async=!0),new Promise((i,s)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,i(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),s(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function Tr(r){return _(r)?Ze(r):Promise.race(Ee.filter(e=>e in r).map(e=>Ze(r[e],e)))}function V(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function de(r){return typeof r=="object"&&!!r}function M(r){return typeof r=="function"}function _(r){return typeof r=="string"}function Rt(r){const e=new Error(m(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const N=new class{};function Mr(r){const e=r.port,t=r.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${n}`}function et(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Mr(e))!==window.location.origin)return;const{pathname:s,search:n,hash:o}=e;V("go",{pathname:s,search:n,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const jr={activate(){window.document.addEventListener("click",et)},inactivate(){window.document.removeEventListener("click",et)}},Lr=/Trident/.test(navigator.userAgent);Lr&&!M(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function tt(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;V("go",{pathname:e,search:t,hash:i})}const Nr={activate(){window.addEventListener("popstate",tt)},inactivate(){window.removeEventListener("popstate",tt)}};var B=jt,Dr=je,Ir=zr,Hr=Ut,Br=Mt,Ct="/",xt="./",Fr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function je(r,e){for(var t=[],i=0,s=0,n="",o=e&&e.delimiter||Ct,c=e&&e.delimiters||xt,a=!1,l;(l=Fr.exec(r))!==null;){var h=l[0],u=l[1],d=l.index;if(n+=r.slice(s,d),s=d+h.length,u){n+=u[1],a=!0;continue}var p="",R=r[s],Ft=l[2],zt=l[3],qt=l[4],ee=l[5];if(!a&&n.length){var _e=n.length-1;c.indexOf(n[_e])>-1&&(p=n[_e],n=n.slice(0,_e))}n&&(t.push(n),n="",a=!1);var Vt=p!==""&&R!==void 0&&R!==p,kt=ee==="+"||ee==="*",Wt=ee==="?"||ee==="*",Le=p||o,Ne=zt||qt;t.push({name:Ft||i++,prefix:p,delimiter:Le,optional:Wt,repeat:kt,partial:Vt,pattern:Ne?qr(Ne):"[^"+w(Le)+"]+?"})}return(n||s<r.length)&&t.push(n+r.substr(s)),t}function zr(r,e){return Ut(je(r,e))}function Ut(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,s){for(var n="",o=s&&s.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){n+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(h=o(l[u],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function w(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function qr(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Tt(r){return r&&r.sensitive?"":"i"}function Vr(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function kr(r,e,t){for(var i=[],s=0;s<r.length;s++)i.push(jt(r[s],e,t).source);return new RegExp("(?:"+i.join("|")+")",Tt(t))}function Wr(r,e,t){return Mt(je(r,t),e,t)}function Mt(r,e,t){t=t||{};for(var i=t.strict,s=t.start!==!1,n=t.end!==!1,o=w(t.delimiter||Ct),c=t.delimiters||xt,a=[].concat(t.endsWith||[]).map(w).concat("$").join("|"),l=s?"^":"",h=r.length===0,u=0;u<r.length;u++){var d=r[u];if(typeof d=="string")l+=w(d),h=u===r.length-1&&c.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+w(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?l+=w(d.prefix)+"("+p+")?":l+="(?:"+w(d.prefix)+"("+p+"))?":l+=w(d.prefix)+"("+p+")"}}return n?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Tt(t))}function jt(r,e,t){return r instanceof RegExp?Vr(r,e):Array.isArray(r)?kr(r,e,t):Wr(r,e,t)}B.parse=Dr;B.compile=Ir;B.tokensToFunction=Hr;B.tokensToRegExp=Br;const{hasOwnProperty:Kr}=Object.prototype,Ae=new Map;Ae.set("|false",{keys:[],pattern:/(?:)/});function rt(r){try{return decodeURIComponent(r)}catch{return r}}function Jr(r,e,t,i,s){t=!!t;const n=`${r}|${t}`;let o=Ae.get(n);if(!o){const l=[];o={keys:l,pattern:B(r,l,{end:t,strict:r===""})},Ae.set(n,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},s);for(let l=1;l<c.length;l++){const h=o.keys[l-1],u=h.name,d=c[l];(d!==void 0||!Kr.call(a,u))&&(h.repeat?a[u]=d?d.split(h.delimiter).map(rt):[]:a[u]=d&&rt(d))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function Lt(r,e,t,i,s){let n,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!n&&(n=Jr(a,e,!h,i,s),n))return{done:!1,value:{route:r,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!o){const d=h[c];d.parent=r;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Lt(d,e.substr(p),t,n.keys,n.params)}const u=o.next(l);if(!u.done)return{done:!1,value:u.value};o=null,c++}return{done:!0}}}}function Gr(r){if(M(r.route.action))return r.route.action(r)}function Xr(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Qr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Yr(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const s={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let n=r.chain.length;for(;n--&&r.chain[n].route&&r.chain[n].route!==t.parent;)r.chain.pop()}r.chain.push(s)}}class G{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Gr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Ye(e);const t=[...ce(e)];this.root.__children=t}addRoutes(e){return Ye(e),this.root.__children.push(...ce(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,_(e)?{pathname:e}:e),i=Lt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let n=null,o=null,c=t;function a(l,h=n.value.route,u){const d=u===null&&n.value.route;return n=o||i.next(d),o=null,!l&&(n.done||!Xr(h,n.value.route))?(o=n,Promise.resolve(N)):n.done?Promise.reject(Rt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),Yr(c,n.value),Promise.resolve(s(c)).then(p=>p!=null&&p!==N?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Qr(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}G.pathToRegexp=B;const{pathToRegexp:it}=G,st=new Map;function Nt(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const n=t[s];n.parent=e,Nt(r,n,n.__children||n.children)}}function nt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function ot(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Zr(r,e={}){if(!(r instanceof G))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,s)=>{let n=nt(t,i);if(!n&&(t.clear(),Nt(t,r.root,r.root.__children),n=nt(t,i),!n))throw new Error(`Route "${i}" not found`);let o=st.get(n.fullPath);if(!o){let a=ot(n),l=n.parent;for(;l;){const p=ot(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=it.parse(a),u=it.tokensToFunction(h),d=Object.create(null);for(let p=0;p<h.length;p++)_(h[p])||(d[h[p].name]=!0);o={toPath:u,keys:d},st.set(a,o),n.fullPath=a}let c=o.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const a={},l=Object.keys(s);for(let u=0;u<l.length;u++){const d=l[u];o.keys[d]||(a[d]=s[d])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let at=[];function ei(r){at.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),at=r}const ti=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},ri=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function lt(r,e){return r.classList.add(e),new Promise(t=>{if(ti(r)){const i=r.getBoundingClientRect(),s=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${s}`),ri(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const ii=256;function $e(r){return r!=null}function si(r){const e=Object.assign({},r);return delete e.next,e}function g({pathname:r="",search:e="",hash:t="",chain:i=[],params:s={},redirectFrom:n,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:s,redirectFrom:n,getUrl:(l={})=>se(P.pathToRegexp.compile(Dt(a))(Object.assign({},s,l)),o)}}function ct(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function ni(r,e){e.location=g(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function ie(r,e,t){if(M(r))return r.apply(t,e)}function ht(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return ie(t[r],e,t)}}function oi(r,e){if(!Array.isArray(r)&&!de(r))throw new Error(m(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=ce(r);for(let i=0;i<t.length;i++)Ot(t[i]),e.__children.push(t[i])}function te(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function se(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Dt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class P extends G{constructor(e,t){const i=document.head.querySelector("base"),s=i&&i.getAttribute("href");super([],Object.assign({baseUrl:s&&G.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=P.NavigationTrigger;P.setTriggers.apply(P,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=g({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();M(t.children)&&(i=i.then(()=>t.children(si(e))).then(n=>{!$e(n)&&!M(t.children)&&(n=t.children),oi(n,t)}));const s={redirect:n=>ct(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return ie(t.action,[e,s],t)}).then(n=>{if($e(n)&&(n instanceof HTMLElement||n.redirect||n===N))return n;if(_(t.redirect))return s.redirect(t.redirect);if(t.bundle)return Tr(t.bundle).then(()=>{},()=>{throw new Error(m(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if($e(n))return n;if(_(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(s).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=g(n),t&&this.__updateBrowserHistory(n,i===1),V("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),te(this.__outlet&&this.__outlet.children),this.location=g(Object.assign(s,{resolver:this})),V("error",Object.assign({router:this,error:n},s)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const n=i!==t?i:e,c=se(Dt(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,u)=>l.next(void 0,h,u).then(d=>d===null||d===N?c?l:h.parent!==null?a(l,h.parent,d):d:d);return a(i).then(l=>{if(l===null||l===N)throw Rt(n);return l&&l!==N&&l!==i?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(ni(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(m(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Ur(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],s=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),c=a=>ct(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,s.length)&&!(i[a].route!==s[a].route||i[a].path!==s[a].path&&i[a].element!==s[a].element||!this.__isReusableElement(i[a].element,s[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=s.length===i.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a]);for(let a=0;a<s.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},s[a]),i[a].element.location=g(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=g(e,i[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},s[a]),s[a].element&&(s[a].element.location=g(e,s[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,s){const n=g(t);return e.then(o=>{if(this.__isLatestRender(t))return ht("onBeforeLeave",[n,i,this],s.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,s){const n=g(t,s.route);return e.then(o=>{if(this.__isLatestRender(t))return ht("onBeforeEnter",[n,i,this],s.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>ii)throw new Error(m(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(m(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const n=s?"replaceState":"pushState";window.history[n](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const n=t&&t.chain[s].element;if(n)if(n.parentNode===i)e.chain[s].element=n,i=n;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let s=i;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(s.appendChild(o),this.__addedByRouter.set(o,!0),s===i&&this.__appearingContent.push(o),s=o)}}__removeDisappearingContent(){this.__disappearingContent&&te(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(te(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const s=t.chain[i].element;if(s)try{const n=g(e);ie(s.onAfterLeave,[n,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&te(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},s=g(e,e.chain[t].route);ie(i.onAfterEnter,[s,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],s=[],n=e.chain;let o;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){o=n[c-1].route.animate;break}if(t&&i&&o){const c=de(o)&&o.leave||"leaving",a=de(o)&&o.enter||"entering";s.push(lt(t,c)),s.push(lt(i,a))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:s}=e?e.detail:window.location;_(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:s},!0))}static setTriggers(...e){ei(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Zr(this)),se(this.__urlForName(e,t),this)}urlForPath(e,t){return se(P.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:s}=_(e)?this.__createUrl(e,"http://a"):e;return V("go",{pathname:t,search:i,hash:s})}}const ai=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ne=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function li(){function r(){return!0}return It(r)}function ci(){try{return hi()?!0:ui()?ne?!di():!li():!1}catch{return!1}}function hi(){return localStorage.getItem("vaadin.developmentmode.force")}function ui(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function di(){return!!(ne&&Object.keys(ne).map(e=>ne[e]).filter(e=>e.productionMode).length>0)}function It(r,e){if(typeof r!="function")return;const t=ai.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const ut=function(r,e){if(window.Vaadin.developmentMode)return It(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ci());function pi(){}const fi=function(){if(typeof ut=="function")return ut(pi)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});fi();P.NavigationTrigger={POPSTATE:Nr,CLICK:jr};var gi=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,Ht=(r,e,t,i)=>{for(var s=i>1?void 0:i?_i(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&gi(e,t,s),s};let Pe=class extends y{constructor(){super(...arguments),this.router=new P(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return $`<slot></slot>`}};Ht([v({attribute:!1})],Pe.prototype,"routes",2);Pe=Ht([O("vaadin-router")],Pe);var mi=Object.defineProperty,vi=Object.getOwnPropertyDescriptor,ge=(r,e,t,i)=>{for(var s=i>1?void 0:i?vi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&mi(e,t,s),s};let bi="auth",H=class extends y{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=J.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const r=$`
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
    `;return $`${this.isAuthenticated()?"":r} <slot></slot>`}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new Ge(t).base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{s&&(console.log("Authentication:",s.token),this.user=J.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new Ge(t).base().post("/signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration:",s)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=b.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};H.styles=X`
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
  `;ge([fe()],H.prototype,"loginStatus",2);ge([fe()],H.prototype,"registerStatus",2);ge([$t({context:bi}),fe()],H.prototype,"user",2);H=ge([O("auth-required")],H);var yi=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,Z=(r,e,t,i)=>{for(var s=i>1?void 0:i?$i(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&yi(e,t,s),s};let j=class extends Te{get userid(){var r;return(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),console.log(t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}render(){return $`
      <main class="page">
        <user-profile .using=${this.profile}> </user-profile>
      </main>
    `}};j.styles=[X`
      :host {
        display: contents;
      }
    `];Z([v({attribute:!1})],j.prototype,"location",2);Z([v({reflect:!0})],j.prototype,"userid",1);Z([v({reflect:!0})],j.prototype,"edit",1);Z([v()],j.prototype,"profile",1);j=Z([O("profile-page")],j);var wi=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Bt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ei(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&wi(e,t,s),s};let Se=class extends Te{constructor(){super(...arguments),this.title=""}render(){return $` <p>hi</p> `}};Bt([v()],Se.prototype,"title",2);Se=Bt([O("home-page")],Se);var Ai=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,Si=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ai(e,t,s),s};let Oe=class extends y{render(){return $`<h1>This is a Test Page</h1>`}};Oe.styles=X`
    h1 {
      color: blue;
    }
  `;Oe=Si([O("test-page")],Oe);var Oi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Ci=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ri(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Oi(e,t,s),s};let xi=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/",component:"home-page"},{path:"(.*)",component:"not-found-component"}],dt=class extends St{constructor(){super(Rr)}render(){return $`
      <auth-required>
        <vaadin-router .routes=${xi}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("BlazingAppElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};dt=Ci([O("mtv-app")],dt);
