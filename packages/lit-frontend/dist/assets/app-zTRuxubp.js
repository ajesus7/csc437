(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,He=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Ye=new WeakMap;let St=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(He&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Ye.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ye.set(t,e))}return e}toString(){return this.cssText}};const dr=r=>new St(typeof r=="string"?r:r+"",void 0,Be),b=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new St(t,r,Be)},ur=(r,e)=>{if(He)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=de.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Ze=He?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return dr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pr,defineProperty:fr,getOwnPropertyDescriptor:gr,getOwnPropertyNames:mr,getOwnPropertySymbols:_r,getPrototypeOf:vr}=Object,S=globalThis,et=S.trustedTypes,br=et?et.emptyScript:"",xe=S.reactiveElementPolyfillSupport,K=(r,e)=>r,ge={toAttribute(r,e){switch(e){case Boolean:r=r?br:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ze=(r,e)=>!pr(r,e),tt={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ze};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&fr(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=gr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);n.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=vr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,s=[...mr(t),..._r(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Ze(i))}else e!==void 0&&t.push(Ze(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ur(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:ge).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ge;this._$Em=i,this[i]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??ze)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[K("elementProperties")]=new Map,I[K("finalized")]=new Map,xe==null||xe({ReactiveElement:I}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,me=J.trustedTypes,rt=me?me.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ct="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+O,yr=`<${Rt}>`,T=document,X=()=>T.createComment(""),Q=r=>r===null||typeof r!="object"&&typeof r!="function",Ut=Array.isArray,wr=r=>Ut(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,st=/>/g,R=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,ot=/"/g,Tt=/^(?:script|style|textarea|title)$/i,$r=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),_=$r(1),B=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),at=new WeakMap,U=T.createTreeWalker(T,129);function jt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(e):e}const Er=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":"",o=W;for(let c=0;c<t;c++){const a=r[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===W?h[1]==="!--"?o=it:h[1]!==void 0?o=st:h[2]!==void 0?(Tt.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=R):h[3]!==void 0&&(o=R):o===R?h[0]===">"?(o=i??W,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?R:h[3]==='"'?ot:nt):o===ot||o===nt?o=R:o===it||o===st?o=W:(o=R,i=void 0);const p=o===R&&r[c+1].startsWith("/>")?" ":"";n+=o===W?a+yr:d>=0?(s.push(l),a.slice(0,d)+Ct+a.slice(d)+O+p):a+O+(d===-2?c:p)}return[jt(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class Y{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=Er(e,t);if(this.el=Y.createElement(l,s),U.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=U.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Ct)){const u=h[o++],p=i.getAttribute(d).split(O),C=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:C[2],strings:p,ctor:C[1]==="."?Pr:C[1]==="?"?Or:C[1]==="@"?xr:$e}),i.removeAttribute(d)}else d.startsWith(O)&&(a.push({type:6,index:n}),i.removeAttribute(d));if(Tt.test(i.tagName)){const d=i.textContent.split(O),u=d.length-1;if(u>0){i.textContent=me?me.emptyScript:"";for(let p=0;p<u;p++)i.append(d[p],X()),U.nextNode(),a.push({type:2,index:++n});i.append(d[u],X())}}}else if(i.nodeType===8)if(i.data===Rt)a.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:n}),d+=O.length-1}n++}}static createElement(e,t){const s=T.createElement("template");return s.innerHTML=e,s}}function z(r,e,t=r,s){var o,c;if(e===B)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const n=Q(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=z(r,i._$AS(r,e.values),i,s)),e}class Ar{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??T).importNode(t,!0);U.currentNode=i;let n=U.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new ne(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Sr(n,this,e)),this._$AV.push(l),a=s[++c]}o!==(a==null?void 0:a.index)&&(n=U.nextNode(),o++)}return U.currentNode=T,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class ne{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),Q(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==g&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Y.createElement(jt(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const o=new Ar(i,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new Y(e)),t}k(e){Ut(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new ne(this.S(X()),this.S(X()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class $e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=z(this,e,t,0),o=!Q(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=z(this,c[s+a],t,a),l===B&&(l=this._$AH[a]),o||(o=!Q(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pr extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Or extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class xr extends $e{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??g)===B)return;const s=this._$AH,i=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Sr{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const Ce=J.litHtmlPolyfillSupport;Ce==null||Ce(Y,ne),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.1.2");const Cr=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new ne(e.insertBefore(X(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return B}};var xt;m._$litElement$=!0,m.finalized=!0,(xt=globalThis.litElementHydrateSupport)==null||xt.call(globalThis,{LitElement:m});const Re=globalThis.litElementPolyfillSupport;Re==null||Re({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ze},Ur=(r=Rr,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(s==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function f(r){return(e,t)=>typeof t=="object"?Ur(r,e,t):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(r){return f({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dt=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class{constructor(e,t,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Dt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Tr{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class ct extends Tr{constructor(e,t,s){var i,n;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new Dt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(i=this.host).addController)==null||n.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new jr(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt({context:r}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new ct(this,{context:r}))}),{get(){return e.get.call(this)},set(i){var n;return(n=s.get(this))==null||n.setValue(i),e.set.call(this,i)},init(i){var n;return(n=s.get(this))==null||n.setValue(i),i}};{e.constructor.addInitializer(o=>{s.set(o,new ct(o,{context:r}))});const i=Object.getOwnPropertyDescriptor(e,t);let n;if(i===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(c){s.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=i.set;n={...i,set:function(c){s.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt({context:r,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new lt(this,{context:r,callback:i=>{this[s.name]=i},subscribe:e})}):t.constructor.addInitializer(i=>{new lt(i,{context:r,callback:n=>{i[s]=n},subscribe:e})})}}let Dr=class extends m{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",s=>{const i=s.detail;console.log("Got message: ",i),this.receive(i)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(i=>{const n=i(this.model);this.model=n}):this.model=t}}},Lr=class extends m{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class Mr{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,i=this._handlers.get(s);return i?i(t,e):e}}function Nr(r){return e=>Object.assign({},e,r)}function Ir(r){return r}const Hr="http://localhost:3000",Br="/api",Te="JWT_AUTH_TOKEN",P=class P{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new P;return console.log("Deauthenticating",e,P._theUser),e===P._theUser&&(localStorage.removeItem(Te),P._theUser=t),t}};P._theUser=new P;let $=P;class Z extends ${constructor(e,t){super();const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(i).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){return $._theUser=new Z(e,t),localStorage.setItem(Te,e),$._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Te);return t?Z.authenticate(t,e):$._theUser}}class Fe{constructor(e){this._base=Br,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=$._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${$._theUser.token}`};return e?{...s,...n}:n}else return e?{...s}:void 0}_url(e){return`${Hr}${this._base}${e}`}}class ht extends Fe{constructor(e){super(Object.fromEntries(e))}}class Nt extends Fe{constructor(){super(void 0)}}var zr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,It=(r,e,t,s)=>{for(var i=s>1?void 0:s?Fr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&zr(e,t,i),i};const Ht="BlazingModel",je={user:new $},qr=()=>new Mr,Bt=Nr,zt=Ir;class Ft extends Dr{constructor(e){super(e,je),this.model=je}}It([Lt({context:Ht}),N()],Ft.prototype,"model",2);class qe extends Lr{getFromModel(e){if(console.log("GET FROM MODEL CALLED"),console.log("dlakjflda",je),this._model)return console.log("MODEL PROFILE IN APP.TS: ",this._model.profile),this._model[e]}}It([Mt({context:Ht,subscribe:!0}),f({attribute:!1})],qe.prototype,"_model",2);const Ve=qr(),Vr=Ve.update;Ve.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Nt().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Bt({profile:t}):zt)});Ve.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new Fe(t).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{s&&console.log("Profile:",s)}).then(s=>s?Bt({profile:s}):zt)});var kr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,oe=(r,e,t,s)=>{for(var i=s>1?void 0:s?Wr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&kr(e,t,i),i};let j=class extends m{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,s)=>{const i=t[0].toUpperCase(),n=s[0].toUpperCase();return i<n?-1:i>n?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return _`
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
          ${this.names.map(r=>_`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
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
  `;oe([f({type:Array})],j.prototype,"names",2);oe([f({type:Array})],j.prototype,"namesOriginalOrder",2);oe([f({type:Array})],j.prototype,"listAttributes",2);oe([N()],j.prototype,"sort_state",2);j=oe([v("sortable-list")],j);var Kr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ee=(r,e,t,s)=>{for(var i=s>1?void 0:s?Jr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Kr(e,t,i),i};let F=class extends m{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return _`
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
          ${this.names.map(r=>_`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
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
  `;Ee([f({type:Array})],F.prototype,"names",2);Ee([f({type:Array})],F.prototype,"listAttributes",2);Ee([N()],F.prototype,"sort_state",2);F=Ee([v("general-list")],F);var Gr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,ke=(r,e,t,s)=>{for(var i=s>1?void 0:s?Xr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Gr(e,t,i),i};let ee=class extends m{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return _`
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
  `;ke([f({type:Array})],ee.prototype,"artists",2);ke([f({type:String})],ee.prototype,"listAttributes",2);ee=ke([v("favorites-list")],ee);var Qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,ae=(r,e,t,s)=>{for(var i=s>1?void 0:s?Yr(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Qr(e,t,i),i};let D=class extends m{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return _`
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
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};D.styles=b`
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
  `;ae([f({reflect:!0,type:Boolean})],D.prototype,"open",2);ae([f()],D.prototype,"align",2);ae([f()],D.prototype,"profileImage",2);ae([f()],D.prototype,"profileDescription",2);D=ae([v("drop-down")],D);var Zr=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,qt=(r,e,t,s)=>{for(var i=s>1?void 0:s?ei(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Zr(e,t,i),i};let _e=class extends m{constructor(){super(...arguments),this.on=!1}render(){return _`<label>
      <slot>light mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};_e.styles=b`
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
  `;qt([f({reflect:!0,type:Boolean})],_e.prototype,"on",2);_e=qt([v("color-mode-switch")],_e);var ti=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,Ae=(r,e,t,s)=>{for(var i=s>1?void 0:s?ri(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ti(e,t,i),i};let q=class extends m{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return _`<div class="user-friend">
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
  `;Ae([f()],q.prototype,"title",2);Ae([f()],q.prototype,"description",2);Ae([f()],q.prototype,"user_id",2);q=Ae([v("default-card")],q);var ii=Object.defineProperty,si=Object.getOwnPropertyDescriptor,We=(r,e,t,s)=>{for(var i=s>1?void 0:s?si(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ii(e,t,i),i};let te=class extends m{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return _`<label>
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
  `;We([f({reflect:!0,type:Boolean})],te.prototype,"on",2);We([f()],te.prototype,"filteredState",2);te=We([v("toggle-switch")],te);var ni=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,Ke=(r,e,t,s)=>{for(var i=s>1?void 0:s?oi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ni(e,t,i),i};let re=class extends m{constructor(){super(...arguments),this.path=""}get profile(){return this.using||{}}render(){const{name:r,profileImage:e,profileDescription:t,bio:s}=this.profile;return _`
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
  `;Ke([f()],re.prototype,"path",2);Ke([f({attribute:!1})],re.prototype,"using",2);re=Ke([v("user-profile")],re);function ve(r){return r=r||[],Array.isArray(r)?r:[r]}function E(r){return`[Vaadin.Router] ${r}`}function ai(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const be="module",ye="nomodule",De=[be,ye];function dt(r){if(!r.match(/.+\.[m]?js$/))throw new Error(E(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Vt(r){if(!r||!w(r.path))throw new Error(E('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!L(r.action)&&!Array.isArray(r.children)&&!L(r.children)&&!we(e)&&!t.some(s=>w(r[s])))throw new Error(E(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))dt(e);else if(De.some(s=>s in e))De.forEach(s=>s in e&&dt(e[s]));else throw new Error(E('Expected route bundle to include either "'+ye+'" or "'+be+'" keys, or both'));r.redirect&&["bundle","component"].forEach(s=>{s in r&&console.warn(E(`Route config "${r.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function ut(r){ve(r).forEach(e=>Vt(e))}function pt(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===be?t.setAttribute("type",be):e===ye&&t.setAttribute(ye,""),t.async=!0),new Promise((s,i)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,s(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),i(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function li(r){return w(r)?pt(r):Promise.race(De.filter(e=>e in r).map(e=>pt(r[e],e)))}function G(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function we(r){return typeof r=="object"&&!!r}function L(r){return typeof r=="function"}function w(r){return typeof r=="string"}function kt(r){const e=new Error(E(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const H=new class{};function ci(r){const e=r.port,t=r.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${n}`}function ft(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||ci(e))!==window.location.origin)return;const{pathname:i,search:n,hash:o}=e;G("go",{pathname:i,search:n,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const hi={activate(){window.document.addEventListener("click",ft)},inactivate(){window.document.removeEventListener("click",ft)}},di=/Trident/.test(navigator.userAgent);di&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function gt(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;G("go",{pathname:e,search:t,hash:s})}const ui={activate(){window.addEventListener("popstate",gt)},inactivate(){window.removeEventListener("popstate",gt)}};var k=Qt,pi=Je,fi=vi,gi=Jt,mi=Xt,Wt="/",Kt="./",_i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Je(r,e){for(var t=[],s=0,i=0,n="",o=e&&e.delimiter||Wt,c=e&&e.delimiters||Kt,a=!1,l;(l=_i.exec(r))!==null;){var h=l[0],d=l[1],u=l.index;if(n+=r.slice(i,u),i=u+h.length,d){n+=d[1],a=!0;continue}var p="",C=r[i],nr=l[2],or=l[3],ar=l[4],ce=l[5];if(!a&&n.length){var Oe=n.length-1;c.indexOf(n[Oe])>-1&&(p=n[Oe],n=n.slice(0,Oe))}n&&(t.push(n),n="",a=!1);var lr=p!==""&&C!==void 0&&C!==p,cr=ce==="+"||ce==="*",hr=ce==="?"||ce==="*",Xe=p||o,Qe=or||ar;t.push({name:nr||s++,prefix:p,delimiter:Xe,optional:hr,repeat:cr,partial:lr,pattern:Qe?bi(Qe):"[^"+A(Xe)+"]+?"})}return(n||i<r.length)&&t.push(n+r.substr(i)),t}function vi(r,e){return Jt(Je(r,e))}function Jt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(s,i){for(var n="",o=i&&i.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){n+=a;continue}var l=s?s[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function A(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function bi(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Gt(r){return r&&r.sensitive?"":"i"}function yi(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function wi(r,e,t){for(var s=[],i=0;i<r.length;i++)s.push(Qt(r[i],e,t).source);return new RegExp("(?:"+s.join("|")+")",Gt(t))}function $i(r,e,t){return Xt(Je(r,t),e,t)}function Xt(r,e,t){t=t||{};for(var s=t.strict,i=t.start!==!1,n=t.end!==!1,o=A(t.delimiter||Wt),c=t.delimiters||Kt,a=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),l=i?"^":"",h=r.length===0,d=0;d<r.length;d++){var u=r[d];if(typeof u=="string")l+=A(u),h=d===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=A(u.prefix)+"("+p+")?":l+="(?:"+A(u.prefix)+"("+p+"))?":l+=A(u.prefix)+"("+p+")"}}return n?(s||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(s||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Gt(t))}function Qt(r,e,t){return r instanceof RegExp?yi(r,e):Array.isArray(r)?wi(r,e,t):$i(r,e,t)}k.parse=pi;k.compile=fi;k.tokensToFunction=gi;k.tokensToRegExp=mi;const{hasOwnProperty:Ei}=Object.prototype,Le=new Map;Le.set("|false",{keys:[],pattern:/(?:)/});function mt(r){try{return decodeURIComponent(r)}catch{return r}}function Ai(r,e,t,s,i){t=!!t;const n=`${r}|${t}`;let o=Le.get(n);if(!o){const l=[];o={keys:l,pattern:k(r,l,{end:t,strict:r===""})},Le.set(n,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},i);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!Ei.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(mt):[]:a[d]=u&&mt(u))}return{path:c[0],keys:(s||[]).concat(o.keys),params:a}}function Yt(r,e,t,s,i){let n,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!n&&(n=Ai(a,e,!h,s,i),n))return{done:!1,value:{route:r,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=r;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Yt(u,e.substr(p),t,n.keys,n.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Pi(r){if(L(r.route.action))return r.route.action(r)}function Oi(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function xi(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Si(r,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const i={path:s,route:t};if(!r.chain)r.chain=[];else if(t.parent){let n=r.chain.length;for(;n--&&r.chain[n].route&&r.chain[n].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class ie{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Pi,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ut(e);const t=[...ve(e)];this.root.__children=t}addRoutes(e){return ut(e),this.root.__children.push(...ve(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),s=Yt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let n=null,o=null,c=t;function a(l,h=n.value.route,d){const u=d===null&&n.value.route;return n=o||s.next(u),o=null,!l&&(n.done||!Oi(h,n.value.route))?(o=n,Promise.resolve(H)):n.done?Promise.reject(kt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),Si(c,n.value),Promise.resolve(i(c)).then(p=>p!=null&&p!==H?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=xi(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}ie.pathToRegexp=k;const{pathToRegexp:_t}=ie,vt=new Map;function Zt(r,e,t){const s=e.name||e.component;if(s&&(r.has(s)?r.get(s).push(e):r.set(s,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const n=t[i];n.parent=e,Zt(r,n,n.__children||n.children)}}function bt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function yt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ci(r,e={}){if(!(r instanceof ie))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,i)=>{let n=bt(t,s);if(!n&&(t.clear(),Zt(t,r.root,r.root.__children),n=bt(t,s),!n))throw new Error(`Route "${s}" not found`);let o=vt.get(n.fullPath);if(!o){let a=yt(n),l=n.parent;for(;l;){const p=yt(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=_t.parse(a),d=_t.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},vt.set(a,o),n.fullPath=a}let c=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},l=Object.keys(i);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=i[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let wt=[];function Ri(r){wt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),wt=r}const Ui=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Ti=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function $t(r,e){return r.classList.add(e),new Promise(t=>{if(Ui(r)){const s=r.getBoundingClientRect(),i=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;r.setAttribute("style",`position: absolute; ${i}`),Ti(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const ji=256;function Ue(r){return r!=null}function Di(r){const e=Object.assign({},r);return delete e.next,e}function y({pathname:r="",search:e="",hash:t="",chain:s=[],params:i={},redirectFrom:n,resolver:o},c){const a=s.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:i,redirectFrom:n,getUrl:(l={})=>pe(x.pathToRegexp.compile(er(a))(Object.assign({},i,l)),o)}}function Et(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Li(r,e){e.location=y(r);const t=r.chain.map(s=>s.route).indexOf(r.route);return r.chain[t].element=e,e}function ue(r,e,t){if(L(r))return r.apply(t,e)}function At(r,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return ue(t[r],e,t)}}function Mi(r,e){if(!Array.isArray(r)&&!we(r))throw new Error(E(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=ve(r);for(let s=0;s<t.length;s++)Vt(t[s]),e.__children.push(t[s])}function he(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function pe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function er(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class x extends ie{constructor(e,t){const s=document.head.querySelector("base"),i=s&&s.getAttribute("href");super([],Object.assign({baseUrl:i&&ie.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=x.NavigationTrigger;x.setTriggers.apply(x,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();L(t.children)&&(s=s.then(()=>t.children(Di(e))).then(n=>{!Ue(n)&&!L(t.children)&&(n=t.children),Mi(n,t)}));const i={redirect:n=>Et(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return s.then(()=>{if(this.__isLatestRender(e))return ue(t.action,[e,i],t)}).then(n=>{if(Ue(n)&&(n instanceof HTMLElement||n.redirect||n===H))return n;if(w(t.redirect))return i.redirect(t.redirect);if(t.bundle)return li(t.bundle).then(()=>{},()=>{throw new Error(E(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Ue(n))return n;if(w(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(i).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(n),t&&this.__updateBrowserHistory(n,s===1),G("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),he(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(i,{resolver:this})),G("error",Object.assign({router:this,error:n},i)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const n=s!==t?s:e,c=pe(er(s.chain),s.resolver)===s.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===H?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(s).then(l=>{if(l===null||l===H)throw kt(n);return l&&l!==H&&l!==s?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Li(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(E(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${ai(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],i=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),c=a=>Et(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let a=0;a<Math.min(s.length,i.length)&&!(s[a].route!==i[a].route||s[a].path!==i[a].path&&s[a].element!==i[a].element||!this.__isReusableElement(s[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===s.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},s[a]);for(let a=0;a<i.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},i[a]),s[a].element.location=y(e,s[a].route)}else for(let a=s.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},s[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<s.length&&s[a].element&&(s[a].element.location=y(e,s[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},i[a]),i[a].element&&(i[a].element.location=y(e,i[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,i){const n=y(t);return e.then(o=>{if(this.__isLatestRender(t))return At("onBeforeLeave",[n,s,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,s,i){const n=y(t,i.route);return e.then(o=>{if(this.__isLatestRender(t))return At("onBeforeEnter",[n,s,this],i.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>ji)throw new Error(E(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(E(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const n=i?"replaceState":"pushState";window.history[n](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const n=t&&t.chain[i].element;if(n)if(n.parentNode===s)e.chain[i].element=n,s=n;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let i=s;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===s&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&he(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(he(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const i=t.chain[s].element;if(i)try{const n=y(e);ue(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&he(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},i=y(e,e.chain[t].route);ue(s.onAfterEnter,[i,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],i=[],n=e.chain;let o;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){o=n[c-1].route.animate;break}if(t&&s&&o){const c=we(o)&&o.leave||"leaving",a=we(o)&&o.enter||"entering";i.push($t(t,c)),i.push($t(s,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:i}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:i},!0))}static setTriggers(...e){Ri(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ci(this)),pe(this.__urlForName(e,t),this)}urlForPath(e,t){return pe(x.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:i}=w(e)?this.__createUrl(e,"http://a"):e;return G("go",{pathname:t,search:s,hash:i})}}const Ni=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,fe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ii(){function r(){return!0}return tr(r)}function Hi(){try{return Bi()?!0:zi()?fe?!Fi():!Ii():!1}catch{return!1}}function Bi(){return localStorage.getItem("vaadin.developmentmode.force")}function zi(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Fi(){return!!(fe&&Object.keys(fe).map(e=>fe[e]).filter(e=>e.productionMode).length>0)}function tr(r,e){if(typeof r!="function")return;const t=Ni.exec(r.toString());if(t)try{r=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return r(e)}window.Vaadin=window.Vaadin||{};const Pt=function(r,e){if(window.Vaadin.developmentMode)return tr(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Hi());function qi(){}const Vi=function(){if(typeof Pt=="function")return Pt(qi)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Vi();x.NavigationTrigger={POPSTATE:ui,CLICK:hi};var ki=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,rr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Wi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ki(e,t,i),i};let Me=class extends m{constructor(){super(...arguments),this.router=new x(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return _`<slot></slot>`}};rr([f({attribute:!1})],Me.prototype,"routes",2);Me=rr([v("vaadin-router")],Me);var Ki=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Pe=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ji(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ki(e,t,i),i};let ir="auth",V=class extends m{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Z.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const r=_`
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
    `;return _`${this.isAuthenticated()?"":r} <slot></slot>`}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new ht(t).base().post("/login").then(i=>{if(i.status===200)return i.json();this.loginStatus=i.status}).then(i=>{i&&(console.log("Authentication:",i.token),this.user=Z.authenticate(i.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new ht(t).base().post("/signup").then(i=>{if(i.status===200)return i.json();this.registerStatus=i.status}).then(i=>{console.log("Registration:",i)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=$.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};V.styles=b`
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
  `;Pe([N()],V.prototype,"loginStatus",2);Pe([N()],V.prototype,"registerStatus",2);Pe([Lt({context:ir}),N()],V.prototype,"user",2);V=Pe([v("auth-required")],V);var Gi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,Ge=(r,e,t,s)=>{for(var i=s>1?void 0:s?Xi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Gi(e,t,i),i};let se=class extends m{constructor(){super(...arguments),this.user=new $}render(){const{profileImage:r,profileDescription:e}=this.profile||{};return _`
      <section class="match-the-vibe-header">
        <a href="/app">match the vibe home</a>
        <drop-down
          profileImage="${r}"
          profileDescription="${e}"
        ></drop-down>
      </section>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Nt().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};se.styles=b`
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
  `;Ge([N()],se.prototype,"profile",2);Ge([Mt({context:ir,subscribe:!0}),f({attribute:!1})],se.prototype,"user",2);se=Ge([v("match-the-vibe-header")],se);var Qi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,le=(r,e,t,s)=>{for(var i=s>1?void 0:s?Yi(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Qi(e,t,i),i};let M=class extends qe{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}render(){return _` <user-profile .using=${this.profile}> </user-profile> `}};M.styles=[b`
      :host {
        display: contents;
      }
    `];le([f({attribute:!1})],M.prototype,"location",2);le([f({reflect:!0})],M.prototype,"userid",1);le([f({reflect:!0})],M.prototype,"edit",1);le([f()],M.prototype,"profile",1);M=le([v("profile-page")],M);var Zi=Object.defineProperty,es=Object.getOwnPropertyDescriptor,sr=(r,e,t,s)=>{for(var i=s>1?void 0:s?es(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Zi(e,t,i),i};let Ne=class extends qe{constructor(){super(...arguments),this.title=""}render(){return _` <p>hi</p> `}};sr([f()],Ne.prototype,"title",2);Ne=sr([v("home-page")],Ne);var ts=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,is=(r,e,t,s)=>{for(var i=s>1?void 0:s?rs(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ts(e,t,i),i};let Ie=class extends m{render(){return _`<h1>This is a Test Page</h1>`}};Ie.styles=b`
    h1 {
      color: blue;
    }
  `;Ie=is([v("test-page")],Ie);var ss=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,os=(r,e,t,s)=>{for(var i=s>1?void 0:s?ns(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ss(e,t,i),i};let as=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/",component:"home-page"},{path:"(.*)",component:"not-found-component"}],Ot=class extends Ft{constructor(){super(Vr)}render(){return _`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${as}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("BlazingAppElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Ot=os([v("mtv-app")],Ot);
