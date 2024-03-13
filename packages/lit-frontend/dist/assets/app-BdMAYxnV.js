(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Be=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),Ze=new WeakMap;let Rt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Be&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ze.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ze.set(t,e))}return e}toString(){return this.cssText}};const gs=s=>new Rt(typeof s=="string"?s:s+"",void 0,Fe),b=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new Rt(t,s,Fe)},ms=(s,e)=>{if(Be)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=de.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},et=Be?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return gs(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_s,defineProperty:vs,getOwnPropertyDescriptor:bs,getOwnPropertyNames:ys,getOwnPropertySymbols:ws,getPrototypeOf:$s}=Object,S=globalThis,tt=S.trustedTypes,Es=tt?tt.emptyScript:"",Re=S.reactiveElementPolyfillSupport,J=(s,e)=>s,ge={toAttribute(s,e){switch(e){case Boolean:s=s?Es:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ze=(s,e)=>!_s(s,e),st={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ze};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=st){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&vs(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:n}=bs(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const c=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??st}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const e=$s(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const t=this.properties,i=[...ys(t),...ws(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(et(r))}else e!==void 0&&t.push(et(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ms(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ge).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ge;this._$Em=r,this[r]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ze)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[J("elementProperties")]=new Map,I[J("finalized")]=new Map,Re==null||Re({ReactiveElement:I}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,me=G.trustedTypes,rt=me?me.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ut="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,jt="?"+O,As=`<${jt}>`,D=document,Q=()=>D.createComment(""),Y=s=>s===null||typeof s!="object"&&typeof s!="function",Dt=Array.isArray,Ps=s=>Dt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ue=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,nt=/>/g,U=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,at=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Os=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),g=Os(1),B=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),lt=new WeakMap,j=D.createTreeWalker(D,129);function Lt(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(e):e}const xs=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":"",o=k;for(let c=0;c<t;c++){const a=s[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===k?h[1]==="!--"?o=it:h[1]!==void 0?o=nt:h[2]!==void 0?(Tt.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=U):h[3]!==void 0&&(o=U):o===U?h[0]===">"?(o=r??k,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?U:h[3]==='"'?at:ot):o===at||o===ot?o=U:o===it||o===nt?o=k:(o=U,r=void 0);const p=o===U&&s[c+1].startsWith("/>")?" ":"";n+=o===k?a+As:d>=0?(i.push(l),a.slice(0,d)+Ut+a.slice(d)+O+p):a+O+(d===-2?c:p)}return[Lt(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class Z{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const c=e.length-1,a=this.parts,[l,h]=xs(e,t);if(this.el=Z.createElement(l,i),j.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=j.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Ut)){const u=h[o++],p=r.getAttribute(d).split(O),R=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:R[2],strings:p,ctor:R[1]==="."?Cs:R[1]==="?"?Rs:R[1]==="@"?Us:Pe}),r.removeAttribute(d)}else d.startsWith(O)&&(a.push({type:6,index:n}),r.removeAttribute(d));if(Tt.test(r.tagName)){const d=r.textContent.split(O),u=d.length-1;if(u>0){r.textContent=me?me.emptyScript:"";for(let p=0;p<u;p++)r.append(d[p],Q()),j.nextNode(),a.push({type:2,index:++n});r.append(d[u],Q())}}}else if(r.nodeType===8)if(r.data===jt)a.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:n}),d+=O.length-1}n++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function F(s,e,t=s,i){var o,c;if(e===B)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=Y(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=F(s,r._$AS(s,e.values),r,i)),e}class Ss{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??D).importNode(t,!0);j.currentNode=r;let n=j.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new oe(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new js(n,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(n=j.nextNode(),o++)}return j.currentNode=D,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class oe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),Y(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ps(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Z.createElement(Lt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(t);else{const o=new Ss(r,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=lt.get(e.strings);return t===void 0&&lt.set(e.strings,t=new Z(e)),t}k(e){Dt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new oe(this.S(Q()),this.S(Q()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=F(this,e,t,0),o=!Y(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const c=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=F(this,c[i+a],t,a),l===B&&(l=this._$AH[a]),o||(o=!Y(l)||l!==this._$AH[a]),l===_?e=_:e!==_&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Cs extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class Rs extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class Us extends Pe{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=F(this,e,t,0)??_)===B)return;const i=this._$AH,r=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==_&&(i===_||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class js{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const je=G.litHtmlPolyfillSupport;je==null||je(Z,oe),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.1.2");const Ds=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new oe(e.insertBefore(Q(),n),n,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ds(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return B}};var Ct;m._$litElement$=!0,m.finalized=!0,(Ct=globalThis.litElementHydrateSupport)==null||Ct.call(globalThis,{LitElement:m});const De=globalThis.litElementPolyfillSupport;De==null||De({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ze},Ls=(s=Ts,e,t)=>{const{kind:i,metadata:r}=t;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(t.name,s),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,s)},init(c){return c!==void 0&&this.P(o,void 0,s),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+i)};function f(s){return(e,t)=>typeof t=="object"?Ls(s,e,t):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(s){return f({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mt=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class{constructor(e,t,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Mt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ms{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ns=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class ht extends Ms{constructor(e,t,i){var r,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:h}]of this.subscriptions)a.has(l)||(a.add(l),h.dispatchEvent(new Mt(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(r=this.host).addController)==null||n.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ns(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt({context:s}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new ht(this,{context:s}))}),{get(){return e.get.call(this)},set(r){var n;return(n=i.get(this))==null||n.setValue(r),e.set.call(this,r)},init(r){var n;return(n=i.get(this))==null||n.setValue(r),r}};{e.constructor.addInitializer(o=>{i.set(o,new ht(o,{context:s}))});const r=Object.getOwnPropertyDescriptor(e,t);let n;if(r===void 0){const o=new WeakMap;n={get:function(){return o.get(this)},set:function(c){i.get(this).setValue(c),o.set(this,c)},configurable:!0,enumerable:!0}}else{const o=r.set;n={...r,set:function(c){i.get(this).setValue(c),o==null||o.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It({context:s,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new ct(this,{context:s,callback:r=>{this[i.name]=r},subscribe:e})}):t.constructor.addInitializer(r=>{new ct(r,{context:s,callback:n=>{r[i]=n},subscribe:e})})}}let Is=class extends m{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",i=>{const r=i.detail;console.log("Got message: ",r),this.receive(r)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(r=>{const n=r(this.model);this.model=n}):this.model=t}}},Hs=class extends m{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class Bs{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,r=this._handlers.get(i);return r?r(t,e):e}}function Fs(s){return e=>Object.assign({},e,s)}function zs(s){return s}const Vs="http://localhost:3000",qs="/api",Le="JWT_AUTH_TOKEN",P=class P{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new P;return console.log("Deauthenticating",e,P._theUser),e===P._theUser&&(localStorage.removeItem(Le),P._theUser=t),t}};P._theUser=new P;let $=P;class ee extends ${constructor(e,t){super();const r=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(r).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(n);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){return $._theUser=new ee(e,t),localStorage.setItem(Le,e),$._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Le);return t?ee.authenticate(t,e):$._theUser}}class Ve{constructor(e){this._base=qs,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=$._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const n={Authorization:`Bearer ${$._theUser.token}`};return e?{...i,...n}:n}else return e?{...i}:void 0}_url(e){return`${Vs}${this._base}${e}`}}class dt extends Ve{constructor(e){super(Object.fromEntries(e))}}class Ht extends Ve{constructor(){super(void 0)}}var Ws=Object.defineProperty,Ks=Object.getOwnPropertyDescriptor,Bt=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ks(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ws(e,t,r),r};const Ft="MTVModel",ut={user:new $},ks=()=>new Bs,zt=Fs,Vt=zs;class qt extends Is{constructor(e){super(e,ut),this.model=ut}}Bt([Nt({context:Ft}),N()],qt.prototype,"model",2);class qe extends Hs{getFromModel(e){if(this._model)return this._model[e]}}Bt([It({context:Ft,subscribe:!0}),f({attribute:!1})],qe.prototype,"_model",2);const We=ks(),Js=We.update;We.addMessage("ProfileSelected",s=>{const{userid:e}=s;return new Ht().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?zt({profile:t}):Vt)});We.addMessage("ProfileSaved",s=>{const{userid:e,profile:t}=s;return new Ve(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{i&&console.log("Profile:",i)}).then(i=>i?zt({profile:i}):Vt)});var Gs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,ae=(s,e,t,i)=>{for(var r=i>1?void 0:i?Xs(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Gs(e,t,r),r};let T=class extends m{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(s){const e=s.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,i)=>{const r=t[0].toUpperCase(),n=i[0].toUpperCase();return r<n?-1:r>n?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return g`
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
          ${this.names.map(s=>g`<slot
                ><default-card
                  title=${s[0]}
                  description=${s[1]}
                  user_id=${s[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};T.styles=b`
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
  `;ae([f({type:Array})],T.prototype,"names",2);ae([f({type:Array})],T.prototype,"namesOriginalOrder",2);ae([f({type:Array})],T.prototype,"listAttributes",2);ae([N()],T.prototype,"sort_state",2);T=ae([v("sortable-list")],T);var Qs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Oe=(s,e,t,i)=>{for(var r=i>1?void 0:i?Ys(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Qs(e,t,r),r};let z=class extends m{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return g`
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
          ${this.names.map(s=>g`<slot
                ><default-card
                  title=${s[0]}
                  description=${s[1]}
                  user_id=${s[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};z.styles=b`
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
  `;Oe([f({type:Array})],z.prototype,"names",2);Oe([f({type:Array})],z.prototype,"listAttributes",2);Oe([N()],z.prototype,"sort_state",2);z=Oe([v("general-list")],z);var Zs=Object.defineProperty,er=Object.getOwnPropertyDescriptor,Ke=(s,e,t,i)=>{for(var r=i>1?void 0:i?er(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Zs(e,t,r),r};let te=class extends m{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return g`
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
  `;Ke([f({type:Array})],te.prototype,"artists",2);Ke([f({type:String})],te.prototype,"listAttributes",2);te=Ke([v("favorites-list")],te);var tr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,W=(s,e,t,i)=>{for(var r=i>1?void 0:i?sr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&tr(e,t,r),r};let C=class extends m{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return g`
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
    `}_handleChange(s){const e=s.target;this._toggle(e.checked)}_toggle(s){this.open=s,this._toggleClickAway(s)}_toggleClickAway(s){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};s?document.addEventListener("click",e):document.removeEventListener("click",e)}};C.styles=b`
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
  `;W([f({reflect:!0,type:Boolean})],C.prototype,"open",2);W([f()],C.prototype,"align",2);W([f()],C.prototype,"profileImage",2);W([f()],C.prototype,"profileUserID",2);W([f()],C.prototype,"profileDescription",2);C=W([v("drop-down")],C);var rr=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,Wt=(s,e,t,i)=>{for(var r=i>1?void 0:i?ir(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&rr(e,t,r),r};let _e=class extends m{constructor(){super(...arguments),this.on=!1}render(){return g`<label>
      <slot>light mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(s){const e=s.target,t=new Event(s.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};_e.styles=b`
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
  `;Wt([f({reflect:!0,type:Boolean})],_e.prototype,"on",2);_e=Wt([v("color-mode-switch")],_e);var nr=Object.defineProperty,or=Object.getOwnPropertyDescriptor,xe=(s,e,t,i)=>{for(var r=i>1?void 0:i?or(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&nr(e,t,r),r};let V=class extends m{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return g`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};V.styles=b`
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
  `;xe([f()],V.prototype,"title",2);xe([f()],V.prototype,"description",2);xe([f()],V.prototype,"user_id",2);V=xe([v("default-card")],V);var ar=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,ke=(s,e,t,i)=>{for(var r=i>1?void 0:i?lr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ar(e,t,r),r};let se=class extends m{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return g`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};se.styles=b`
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
  `;ke([f({reflect:!0,type:Boolean})],se.prototype,"on",2);ke([f()],se.prototype,"filteredState",2);se=ke([v("toggle-switch")],se);var cr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,Je=(s,e,t,i)=>{for(var r=i>1?void 0:i?hr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&cr(e,t,r),r};let re=class extends m{constructor(){super(...arguments),this.path=""}get profile(){return this.using||{}}render(){const{name:s,profileImage:e,profileDescription:t,bio:i}=this.profile;return g`
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
            <h1>${s}&apos;s Page</h1>
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
  `;Je([f()],re.prototype,"path",2);Je([f({attribute:!1})],re.prototype,"using",2);re=Je([v("user-profile")],re);function ve(s){return s=s||[],Array.isArray(s)?s:[s]}function E(s){return`[Vaadin.Router] ${s}`}function dr(s){if(typeof s!="object")return String(s);const e=Object.prototype.toString.call(s).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(s)}`:e}const be="module",ye="nomodule",Me=[be,ye];function pt(s){if(!s.match(/.+\.[m]?js$/))throw new Error(E(`Unsupported type for bundle "${s}": .js or .mjs expected.`))}function Kt(s){if(!s||!w(s.path))throw new Error(E('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=s.bundle,t=["component","redirect","bundle"];if(!L(s.action)&&!Array.isArray(s.children)&&!L(s.children)&&!we(e)&&!t.some(i=>w(s[i])))throw new Error(E(`Expected route config "${s.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))pt(e);else if(Me.some(i=>i in e))Me.forEach(i=>i in e&&pt(e[i]));else throw new Error(E('Expected route bundle to include either "'+ye+'" or "'+be+'" keys, or both'));s.redirect&&["bundle","component"].forEach(i=>{i in s&&console.warn(E(`Route config "${s.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function ft(s){ve(s).forEach(e=>Kt(e))}function gt(s,e){let t=document.head.querySelector('script[src="'+s+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",s),e===be?t.setAttribute("type",be):e===ye&&t.setAttribute(ye,""),t.async=!0),new Promise((i,r)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,i(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),r(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function ur(s){return w(s)?gt(s):Promise.race(Me.filter(e=>e in s).map(e=>gt(s[e],e)))}function X(s,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${s}`,{cancelable:s==="go",detail:e}))}function we(s){return typeof s=="object"&&!!s}function L(s){return typeof s=="function"}function w(s){return typeof s=="string"}function kt(s){const e=new Error(E(`Page not found (${s.pathname})`));return e.context=s,e.code=404,e}const H=new class{};function pr(s){const e=s.port,t=s.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?s.hostname:s.host;return`${t}//${n}`}function mt(s){if(s.defaultPrevented||s.button!==0||s.shiftKey||s.ctrlKey||s.altKey||s.metaKey)return;let e=s.target;const t=s.composedPath?s.composedPath():s.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||pr(e))!==window.location.origin)return;const{pathname:r,search:n,hash:o}=e;X("go",{pathname:r,search:n,hash:o})&&(s.preventDefault(),s&&s.type==="click"&&window.scrollTo(0,0))}const fr={activate(){window.document.addEventListener("click",mt)},inactivate(){window.document.removeEventListener("click",mt)}},gr=/Trident/.test(navigator.userAgent);gr&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(s,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(s,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function _t(s){if(s.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;X("go",{pathname:e,search:t,hash:i})}const mr={activate(){window.addEventListener("popstate",_t)},inactivate(){window.removeEventListener("popstate",_t)}};var K=Zt,_r=Ge,vr=$r,br=Xt,yr=Yt,Jt="/",Gt="./",wr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ge(s,e){for(var t=[],i=0,r=0,n="",o=e&&e.delimiter||Jt,c=e&&e.delimiters||Gt,a=!1,l;(l=wr.exec(s))!==null;){var h=l[0],d=l[1],u=l.index;if(n+=s.slice(r,u),r=u+h.length,d){n+=d[1],a=!0;continue}var p="",R=s[r],cs=l[2],hs=l[3],ds=l[4],ce=l[5];if(!a&&n.length){var Ce=n.length-1;c.indexOf(n[Ce])>-1&&(p=n[Ce],n=n.slice(0,Ce))}n&&(t.push(n),n="",a=!1);var us=p!==""&&R!==void 0&&R!==p,ps=ce==="+"||ce==="*",fs=ce==="?"||ce==="*",Qe=p||o,Ye=hs||ds;t.push({name:cs||i++,prefix:p,delimiter:Qe,optional:fs,repeat:ps,partial:us,pattern:Ye?Er(Ye):"[^"+A(Qe)+"]+?"})}return(n||r<s.length)&&t.push(n+s.substr(r)),t}function $r(s,e){return Xt(Ge(s,e))}function Xt(s){for(var e=new Array(s.length),t=0;t<s.length;t++)typeof s[t]=="object"&&(e[t]=new RegExp("^(?:"+s[t].pattern+")$"));return function(i,r){for(var n="",o=r&&r.encode||encodeURIComponent,c=0;c<s.length;c++){var a=s[c];if(typeof a=="string"){n+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function A(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Er(s){return s.replace(/([=!:$/()])/g,"\\$1")}function Qt(s){return s&&s.sensitive?"":"i"}function Ar(s,e){if(!e)return s;var t=s.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return s}function Pr(s,e,t){for(var i=[],r=0;r<s.length;r++)i.push(Zt(s[r],e,t).source);return new RegExp("(?:"+i.join("|")+")",Qt(t))}function Or(s,e,t){return Yt(Ge(s,t),e,t)}function Yt(s,e,t){t=t||{};for(var i=t.strict,r=t.start!==!1,n=t.end!==!1,o=A(t.delimiter||Jt),c=t.delimiters||Gt,a=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),l=r?"^":"",h=s.length===0,d=0;d<s.length;d++){var u=s[d];if(typeof u=="string")l+=A(u),h=d===s.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=A(u.prefix)+"("+p+")?":l+="(?:"+A(u.prefix)+"("+p+"))?":l+=A(u.prefix)+"("+p+")"}}return n?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,Qt(t))}function Zt(s,e,t){return s instanceof RegExp?Ar(s,e):Array.isArray(s)?Pr(s,e,t):Or(s,e,t)}K.parse=_r;K.compile=vr;K.tokensToFunction=br;K.tokensToRegExp=yr;const{hasOwnProperty:xr}=Object.prototype,Ne=new Map;Ne.set("|false",{keys:[],pattern:/(?:)/});function vt(s){try{return decodeURIComponent(s)}catch{return s}}function Sr(s,e,t,i,r){t=!!t;const n=`${s}|${t}`;let o=Ne.get(n);if(!o){const l=[];o={keys:l,pattern:K(s,l,{end:t,strict:s===""})},Ne.set(n,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!xr.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(vt):[]:a[d]=u&&vt(u))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function es(s,e,t,i,r){let n,o,c=0,a=s.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(s===l)return{done:!0};const h=s.__children=s.__children||s.children;if(!n&&(n=Sr(a,e,!h,i,r),n))return{done:!1,value:{route:s,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=s;let p=n.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=es(u,e.substr(p),t,n.keys,n.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function Cr(s){if(L(s.route.action))return s.route.action(s)}function Rr(s,e){let t=e;for(;t;)if(t=t.parent,t===s)return!0;return!1}function Ur(s){let e=`Path '${s.pathname}' is not properly resolved due to an error.`;const t=(s.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function jr(s,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const r={path:i,route:t};if(!s.chain)s.chain=[];else if(t.parent){let n=s.chain.length;for(;n--&&s.chain[n].route&&s.chain[n].route!==t.parent;)s.chain.pop()}s.chain.push(r)}}class ie{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Cr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ft(e);const t=[...ve(e)];this.root.__children=t}addRoutes(e){return ft(e),this.root.__children.push(...ve(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),i=es(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let n=null,o=null,c=t;function a(l,h=n.value.route,d){const u=d===null&&n.value.route;return n=o||i.next(u),o=null,!l&&(n.done||!Rr(h,n.value.route))?(o=n,Promise.resolve(H)):n.done?Promise.reject(kt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),jr(c,n.value),Promise.resolve(r(c)).then(p=>p!=null&&p!==H?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Ur(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}ie.pathToRegexp=K;const{pathToRegexp:bt}=ie,yt=new Map;function ts(s,e,t){const i=e.name||e.component;if(i&&(s.has(i)?s.get(i).push(e):s.set(i,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const n=t[r];n.parent=e,ts(s,n,n.__children||n.children)}}function wt(s,e){const t=s.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function $t(s){let e=s.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Dr(s,e={}){if(!(s instanceof ie))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,r)=>{let n=wt(t,i);if(!n&&(t.clear(),ts(t,s.root,s.root.__children),n=wt(t,i),!n))throw new Error(`Route "${i}" not found`);let o=yt.get(n.fullPath);if(!o){let a=$t(n),l=n.parent;for(;l;){const p=$t(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=bt.parse(a),d=bt.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},yt.set(a,o),n.fullPath=a}let c=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=r[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let Et=[];function Tr(s){Et.forEach(e=>e.inactivate()),s.forEach(e=>e.activate()),Et=s}const Lr=s=>{const e=getComputedStyle(s).getPropertyValue("animation-name");return e&&e!=="none"},Mr=(s,e)=>{const t=()=>{s.removeEventListener("animationend",t),e()};s.addEventListener("animationend",t)};function At(s,e){return s.classList.add(e),new Promise(t=>{if(Lr(s)){const i=s.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;s.setAttribute("style",`position: absolute; ${r}`),Mr(s,()=>{s.classList.remove(e),s.removeAttribute("style"),t()})}else s.classList.remove(e),t()})}const Nr=256;function Te(s){return s!=null}function Ir(s){const e=Object.assign({},s);return delete e.next,e}function y({pathname:s="",search:e="",hash:t="",chain:i=[],params:r={},redirectFrom:n,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:s,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:n,getUrl:(l={})=>pe(x.pathToRegexp.compile(ss(a))(Object.assign({},r,l)),o)}}function Pt(s,e){const t=Object.assign({},s.params);return{redirect:{pathname:e,from:s.pathname,params:t}}}function Hr(s,e){e.location=y(s);const t=s.chain.map(i=>i.route).indexOf(s.route);return s.chain[t].element=e,e}function ue(s,e,t){if(L(s))return s.apply(t,e)}function Ot(s,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return ue(t[s],e,t)}}function Br(s,e){if(!Array.isArray(s)&&!we(s))throw new Error(E(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${s}`));e.__children=[];const t=ve(s);for(let i=0;i<t.length;i++)Kt(t[i]),e.__children.push(t[i])}function he(s){if(s&&s.length){const e=s[0].parentNode;for(let t=0;t<s.length;t++)e.removeChild(s[t])}}function pe(s,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(s.replace(/^\//,""),t).pathname:s}function ss(s){return s.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class x extends ie{constructor(e,t){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&ie.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const n=x.NavigationTrigger;x.setTriggers.apply(x,Object.keys(n).map(o=>n[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();L(t.children)&&(i=i.then(()=>t.children(Ir(e))).then(n=>{!Te(n)&&!L(t.children)&&(n=t.children),Br(n,t)}));const r={redirect:n=>Pt(e,n),component:n=>{const o=document.createElement(n);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return ue(t.action,[e,r],t)}).then(n=>{if(Te(n)&&(n instanceof HTMLElement||n.redirect||n===H))return n;if(w(t.redirect))return r.redirect(t.redirect);if(t.bundle)return ur(t.bundle).then(()=>{},()=>{throw new Error(E(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Te(n))return n;if(w(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(r).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const o=this.__previousContext;if(n===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(n),t&&this.__updateBrowserHistory(n,i===1),X("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,o),this.__previousContext=n,this.location;this.__addAppearingContent(n,o);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,o),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),he(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(r,{resolver:this})),X("error",Object.assign({router:this,error:n},r)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const n=i!==t?i:e,c=pe(ss(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===H?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(i).then(l=>{if(l===null||l===H)throw kt(n);return l&&l!==H&&l!==i?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Hr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(E(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${dr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],r=e.chain;let n=Promise.resolve();const o=()=>({cancel:!0}),c=a=>Pt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,r.length)&&!(i[a].route!==r[a].route||i[a].path!==r[a].path&&i[a].element!==r[a].element||!this.__isReusableElement(i[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===i.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a]);for(let a=0;a<r.length;a++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},r[a]),i[a].element.location=y(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=y(e,i[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:o,redirect:c},r[a]),r[a].element&&(r[a].element.location=y(e,r[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,r){const n=y(t);return e.then(o=>{if(this.__isLatestRender(t))return Ot("onBeforeLeave",[n,i,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,r){const n=y(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return Ot("onBeforeEnter",[n,i,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>Nr)throw new Error(E(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(E(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const n=r?"replaceState":"pushState";window.history[n](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const n=t&&t.chain[r].element;if(n)if(n.parentNode===i)e.chain[r].element=n,i=n;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let r=i;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const o=e.chain[n].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===i&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&he(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(he(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const r=t.chain[i].element;if(r)try{const n=y(e);ue(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&he(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},r=y(e,e.chain[t].route);ue(i.onAfterEnter,[r,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],n=e.chain;let o;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){o=n[c-1].route.animate;break}if(t&&i&&o){const c=we(o)&&o.leave||"leaving",a=we(o)&&o.enter||"entering";r.push(At(t,c)),r.push(At(i,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:r}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:r},!0))}static setTriggers(...e){Tr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Dr(this)),pe(this.__urlForName(e,t),this)}urlForPath(e,t){return pe(x.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:r}=w(e)?this.__createUrl(e,"http://a"):e;return X("go",{pathname:t,search:i,hash:r})}}const Fr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,fe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function zr(){function s(){return!0}return rs(s)}function Vr(){try{return qr()?!0:Wr()?fe?!Kr():!zr():!1}catch{return!1}}function qr(){return localStorage.getItem("vaadin.developmentmode.force")}function Wr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Kr(){return!!(fe&&Object.keys(fe).map(e=>fe[e]).filter(e=>e.productionMode).length>0)}function rs(s,e){if(typeof s!="function")return;const t=Fr.exec(s.toString());if(t)try{s=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return s(e)}window.Vaadin=window.Vaadin||{};const xt=function(s,e){if(window.Vaadin.developmentMode)return rs(s,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Vr());function kr(){}const Jr=function(){if(typeof xt=="function")return xt(kr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Jr();x.NavigationTrigger={POPSTATE:mr,CLICK:fr};var Gr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,is=(s,e,t,i)=>{for(var r=i>1?void 0:i?Xr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Gr(e,t,r),r};let Ie=class extends m{constructor(){super(...arguments),this.router=new x(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return g`<slot></slot>`}};is([f({attribute:!1})],Ie.prototype,"routes",2);Ie=is([v("vaadin-router")],Ie);var Qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Se=(s,e,t,i)=>{for(var r=i>1?void 0:i?Yr(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Qr(e,t,r),r};let ns="auth",q=class extends m{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=ee.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const s=g`
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
    `;return g`${this.isAuthenticated()?"":s} <slot></slot>`}_handleLogin(s){s.preventDefault();const e=s.target,t=new FormData(e);new dt(t).base().post("/login").then(r=>{if(r.status===200)return r.json();this.loginStatus=r.status}).then(r=>{r&&(console.log("Authentication:",r.token),this.user=ee.authenticate(r.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(s){s.preventDefault();const e=s.target,t=new FormData(e);new dt(t).base().post("/signup").then(r=>{if(r.status===200)return r.json();this.registerStatus=r.status}).then(r=>{console.log("Registration:",r)})}_toggleDialog(s){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(s?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=$.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};q.styles=b`
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
  `;Se([N()],q.prototype,"loginStatus",2);Se([N()],q.prototype,"registerStatus",2);Se([Nt({context:ns}),N()],q.prototype,"user",2);q=Se([v("auth-required")],q);var Zr=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,Xe=(s,e,t,i)=>{for(var r=i>1?void 0:i?ei(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Zr(e,t,r),r};let ne=class extends m{constructor(){super(...arguments),this.user=new $}render(){const{profileImage:s,profileDescription:e,userid:t}=this.profile||{};return g`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${s}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(s){if(console.log("Profile Data has been updated",s),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(s){new Ht().get(s).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};ne.styles=b`
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
  `;Xe([N()],ne.prototype,"profile",2);Xe([It({context:ns,subscribe:!0}),f({attribute:!1})],ne.prototype,"user",2);ne=Xe([v("match-the-vibe-header")],ne);var ti=Object.defineProperty,si=Object.getOwnPropertyDescriptor,le=(s,e,t,i)=>{for(var r=i>1?void 0:i?si(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ti(e,t,r),r};let M=class extends qe{get userid(){var s;return console.log(),(s=this.location)==null?void 0:s.params.userid}get edit(){var s;return(s=this.location)==null?void 0:s.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(s,e,t){s==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(s,e,t)}render(){return g` <user-profile .using=${this.profile}> </user-profile> `}};M.styles=[b`
      :host {
        display: contents;
      }
    `];le([f({attribute:!1})],M.prototype,"location",2);le([f({reflect:!0})],M.prototype,"userid",1);le([f({reflect:!0})],M.prototype,"edit",1);le([f()],M.prototype,"profile",1);M=le([v("profile-page")],M);var ri=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,os=(s,e,t,i)=>{for(var r=i>1?void 0:i?ii(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ri(e,t,r),r};let $e=class extends m{render(){var s;return g`
      <section class="feed-single-post">
        <h3 class="feed-name">${(s=this.post)==null?void 0:s.userName}</h3>
      </section>
    `}};$e.styles=b``;os([f({type:Object})],$e.prototype,"post",2);$e=os([v("feed-post")],$e);var ni=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,as=(s,e,t,i)=>{for(var r=i>1?void 0:i?oi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ni(e,t,r),r};let Ee=class extends m{constructor(){super(...arguments),this.posts=[]}render(){return g`
      <div class="posts-container">
        ${this.posts.map(s=>g` <feed-post .post=${s}></feed-post>`)}
      </div>
    `}};Ee.styles=b``;as([f({type:Array})],Ee.prototype,"posts",2);Ee=as([v("feed-post-list")],Ee);var ai=Object.defineProperty,li=Object.getOwnPropertyDescriptor,ls=(s,e,t,i)=>{for(var r=i>1?void 0:i?li(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ai(e,t,r),r};let Ae=class extends m{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),await this._fetchData()}async _fetchData(){console.log("fetching posts!");try{const s=await fetch("http://localhost:3000/posts");if(s.ok){const e=await s.json();this.posts=e,console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",s.status)}catch(s){console.error("Error fetching posts:",s)}}render(){return g`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};Ae.styles=b`
    .feed-container {
      border: 2px solid white;
      width: 40em;
    }
  `;ls([f({type:Array})],Ae.prototype,"posts",2);Ae=ls([v("main-feed")],Ae);var ci=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,di=(s,e,t,i)=>{for(var r=i>1?void 0:i?hi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ci(e,t,r),r};let He=class extends qe{render(){return g`
      <section class="feed-page">
        <main-feed></main-feed>
      </section>
    `}};He.styles=b`
    .feed-page {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `;He=di([v("home-page")],He);var ui=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,fi=(s,e,t,i)=>{for(var r=i>1?void 0:i?pi(e,t):e,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ui(e,t,r),r};let gi=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],St=class extends qt{constructor(){super(Js)}render(){return g`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${gi}> </vaadin-router>
      </auth-required>
    `}updated(s){console.log("MTVAPPElement updated:",s.keys()),s.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};St=fi([v("mtv-app")],St);
