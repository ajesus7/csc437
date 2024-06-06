(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=globalThis,gs=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bs=Symbol(),Ws=new WeakMap;let Br=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==bs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(gs&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ws.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ws.set(t,e))}return e}toString(){return this.cssText}};const Gi=s=>new Br(typeof s=="string"?s:s+"",void 0,bs),P=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,i,o)=>r+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new Br(t,s,bs)},Yi=(s,e)=>{if(gs)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=_t.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,s.appendChild(r)}},Gs=gs?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Gi(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ki,defineProperty:Ji,getOwnPropertyDescriptor:Xi,getOwnPropertyNames:Qi,getOwnPropertySymbols:Zi,getPrototypeOf:en}=Object,le=globalThis,Ys=le.trustedTypes,tn=Ys?Ys.emptyScript:"",Jt=le.reactiveElementPolyfillSupport,Ge=(s,e)=>s,Tt={toAttribute(s,e){switch(e){case Boolean:s=s?tn:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ys=(s,e)=>!Ki(s,e),Ks={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:ys};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),le.litPropertyMetadata??(le.litPropertyMetadata=new WeakMap);class Ae extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ks){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Ji(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=Xi(this.prototype,e)??{get(){return this[t]},set(c){this[t]=c}};return{get(){return i==null?void 0:i.call(this)},set(c){const h=i==null?void 0:i.call(this);o.call(this,c),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ks}static _$Ei(){if(this.hasOwnProperty(Ge("elementProperties")))return;const e=en(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ge("properties"))){const t=this.properties,r=[...Qi(t),...Zi(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Gs(i))}else e!==void 0&&t.push(Gs(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const c=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Tt).toAttribute(t,r.type);this._$Em=e,c==null?this.removeAttribute(i):this.setAttribute(i,c),this._$Em=null}}_$AK(e,t){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const c=r.getPropertyOptions(i),h=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:Tt;this._$Em=i,this[i]=h.fromAttribute(t,c.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??ys)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,c]of this._$Ep)this[o]=c;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,c]of i)c.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],c)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},Ae[Ge("elementProperties")]=new Map,Ae[Ge("finalized")]=new Map,Jt==null||Jt({ReactiveElement:Ae}),(le.reactiveElementVersions??(le.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,Pt=Ye.trustedTypes,Js=Pt?Pt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ir="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,Lr="?"+ce,sn=`<${Lr}>`,fe=document,Je=()=>fe.createComment(""),Xe=s=>s===null||typeof s!="object"&&typeof s!="function",Dr=Array.isArray,rn=s=>Dr(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Xt=`[ 	
\f\r]`,ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xs=/-->/g,Qs=/>/g,ue=RegExp(`>|${Xt}(?:([^\\s"'>=/]+)(${Xt}*=${Xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zs=/'/g,er=/"/g,Fr=/^(?:script|style|textarea|title)$/i,nn=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),y=nn(1),Ce=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),tr=new WeakMap,pe=fe.createTreeWalker(fe,129);function Nr(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Js!==void 0?Js.createHTML(e):e}const on=(s,e)=>{const t=s.length-1,r=[];let i,o=e===2?"<svg>":"",c=ze;for(let h=0;h<t;h++){const u=s[h];let m,b,w=-1,v=0;for(;v<u.length&&(c.lastIndex=v,b=c.exec(u),b!==null);)v=c.lastIndex,c===ze?b[1]==="!--"?c=Xs:b[1]!==void 0?c=Qs:b[2]!==void 0?(Fr.test(b[2])&&(i=RegExp("</"+b[2],"g")),c=ue):b[3]!==void 0&&(c=ue):c===ue?b[0]===">"?(c=i??ze,w=-1):b[1]===void 0?w=-2:(w=c.lastIndex-b[2].length,m=b[1],c=b[3]===void 0?ue:b[3]==='"'?er:Zs):c===er||c===Zs?c=ue:c===Xs||c===Qs?c=ze:(c=ue,i=void 0);const E=c===ue&&s[h+1].startsWith("/>")?" ":"";o+=c===ze?u+sn:w>=0?(r.push(m),u.slice(0,w)+Ir+u.slice(w)+ce+E):u+ce+(w===-2?h:E)}return[Nr(s,o+(s[t]||"<?>")+(e===2?"</svg>":"")),r]};class Qe{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,c=0;const h=e.length-1,u=this.parts,[m,b]=on(e,t);if(this.el=Qe.createElement(m,r),pe.currentNode=this.el.content,t===2){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(i=pe.nextNode())!==null&&u.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const w of i.getAttributeNames())if(w.endsWith(Ir)){const v=b[c++],E=i.getAttribute(w).split(ce),j=/([.?@])?(.*)/.exec(v);u.push({type:1,index:o,name:j[2],strings:E,ctor:j[1]==="."?cn:j[1]==="?"?ln:j[1]==="@"?hn:Lt}),i.removeAttribute(w)}else w.startsWith(ce)&&(u.push({type:6,index:o}),i.removeAttribute(w));if(Fr.test(i.tagName)){const w=i.textContent.split(ce),v=w.length-1;if(v>0){i.textContent=Pt?Pt.emptyScript:"";for(let E=0;E<v;E++)i.append(w[E],Je()),pe.nextNode(),u.push({type:2,index:++o});i.append(w[v],Je())}}}else if(i.nodeType===8)if(i.data===Lr)u.push({type:2,index:o});else{let w=-1;for(;(w=i.data.indexOf(ce,w+1))!==-1;)u.push({type:7,index:o}),w+=ce.length-1}o++}}static createElement(e,t){const r=fe.createElement("template");return r.innerHTML=e,r}}function Re(s,e,t=s,r){var c,h;if(e===Ce)return e;let i=r!==void 0?(c=t._$Co)==null?void 0:c[r]:t._$Cl;const o=Xe(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=i:t._$Cl=i),i!==void 0&&(e=Re(s,i._$AS(s,e.values),i,r)),e}class an{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??fe).importNode(t,!0);pe.currentNode=i;let o=pe.nextNode(),c=0,h=0,u=r[0];for(;u!==void 0;){if(c===u.index){let m;u.type===2?m=new at(o,o.nextSibling,this,e):u.type===1?m=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(m=new dn(o,this,e)),this._$AV.push(m),u=r[++h]}c!==(u==null?void 0:u.index)&&(o=pe.nextNode(),c++)}return pe.currentNode=fe,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class at{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Re(this,e,t),Xe(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==Ce&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rn(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==F&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Qe.createElement(Nr(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const c=new an(i,this),h=c.u(this.options);c.p(t),this.T(h),this._$AH=c}}_$AC(e){let t=tr.get(e.strings);return t===void 0&&tr.set(e.strings,t=new Qe(e)),t}k(e){Dr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new at(this.S(Je()),this.S(Je()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}_$AI(e,t=this,r,i){const o=this.strings;let c=!1;if(o===void 0)e=Re(this,e,t,0),c=!Xe(e)||e!==this._$AH&&e!==Ce,c&&(this._$AH=e);else{const h=e;let u,m;for(e=o[0],u=0;u<o.length-1;u++)m=Re(this,h[r+u],t,u),m===Ce&&(m=this._$AH[u]),c||(c=!Xe(m)||m!==this._$AH[u]),m===F?e=F:e!==F&&(e+=(m??"")+o[u+1]),this._$AH[u]=m}c&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class cn extends Lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ln extends Lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class hn extends Lt{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=Re(this,e,t,0)??F)===Ce)return;const r=this._$AH,i=e===F&&r!==F||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==F&&(r===F||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class dn{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Re(this,e)}}const Qt=Ye.litHtmlPolyfillSupport;Qt==null||Qt(Qe,at),(Ye.litHtmlVersions??(Ye.litHtmlVersions=[])).push("3.1.2");const un=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=i=new at(e.insertBefore(Je(),o),o,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=un(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ce}};var Ur;S._$litElement$=!0,S.finalized=!0,(Ur=globalThis.litElementHydrateSupport)==null||Ur.call(globalThis,{LitElement:S});const Zt=globalThis.litElementPolyfillSupport;Zt==null||Zt({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:ys},fn=(s=pn,e,t)=>{const{kind:r,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(t.name,s),r==="accessor"){const{name:c}=t;return{set(h){const u=e.get.call(this);e.set.call(this,h),this.requestUpdate(c,u,s)},init(h){return h!==void 0&&this.P(c,void 0,s),h}}}if(r==="setter"){const{name:c}=t;return function(h){const u=this[c];e.call(this,h),this.requestUpdate(c,u,s)}}throw Error("Unsupported decorator location: "+r)};function x(s){return(e,t)=>typeof t=="object"?fn(s,e,t):((r,i,o)=>{const c=i.hasOwnProperty(o);return i.constructor.createProperty(o,c?{...r,wrapped:!0}:r),c?Object.getOwnPropertyDescriptor(i,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(s){return x({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mr=class extends Event{constructor(e,t,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let sr=class{constructor(e,t,r,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,c)),this.unsubscribe=c},this.host=e,t.context!==void 0){const o=t;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=t,this.callback=r,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Mr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mn{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:r}]of this.subscriptions)t(this.o,r)},e!==void 0&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gn=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},rr=class extends mn{constructor(e,t,r){var i,o;super(t.context!==void 0?t.initialValue:r),this.onContextRequest=c=>{const h=c.composedPath()[0];c.context===this.context&&h!==this.host&&(c.stopPropagation(),this.addCallback(c.callback,h,c.subscribe))},this.onProviderRequest=c=>{const h=c.composedPath()[0];if(c.context!==this.context||h===this.host)return;const u=new Set;for(const[m,{consumerHost:b}]of this.subscriptions)u.has(m)||(u.add(m),b.dispatchEvent(new Mr(this.context,m,!0)));c.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new gn(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jr({context:s}){return(e,t)=>{const r=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){r.set(this,new rr(this,{context:s}))}),{get(){return e.get.call(this)},set(i){var o;return(o=r.get(this))==null||o.setValue(i),e.set.call(this,i)},init(i){var o;return(o=r.get(this))==null||o.setValue(i),i}};{e.constructor.addInitializer(c=>{r.set(c,new rr(c,{context:s}))});const i=Object.getOwnPropertyDescriptor(e,t);let o;if(i===void 0){const c=new WeakMap;o={get:function(){return c.get(this)},set:function(h){r.get(this).setValue(h),c.set(this,h)},configurable:!0,enumerable:!0}}else{const c=i.set;o={...i,set:function(h){r.get(this).setValue(h),c==null||c.call(this,h)}}}return void Object.defineProperty(e,t,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qr({context:s,subscribe:e}){return(t,r)=>{typeof r=="object"?r.addInitializer(function(){new sr(this,{context:s,callback:i=>{this[r.name]=i},subscribe:e})}):t.constructor.addInitializer(i=>{new sr(i,{context:s,callback:o=>{i[r]=o},subscribe:e})})}}let bn=class extends S{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",r=>{const i=r.detail;console.log("Got message: ",i),this.receive(i)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),r=t;typeof(r==null?void 0:r.then)=="function"?r.then(i=>{const o=i(this.model);this.model=o}):this.model=t}}},yn=class extends S{dispatchMessage(e,t=this){const r=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(r)}};class wn{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:r}=t,i=this._handlers.get(r);return i?i(t,e):e}}function vn(s){return e=>Object.assign({},e,s)}function _n(s){return s}const xn="http://localhost:3000",En=`${xn}`,$n="/api",is="JWT_AUTH_TOKEN",ae=class ae{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new ae;return console.log("Deauthenticating",e,ae._theUser),e===ae._theUser&&(localStorage.removeItem(is),ae._theUser=t),t}};ae._theUser=new ae;let L=ae;class Ze extends L{constructor(e,t){super();const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(window.atob(i).split("").map(function(h){return"%"+("00"+h.charCodeAt(0).toString(16)).slice(-2)}).join("")),c=JSON.parse(o);console.log("Token payload",c),this.token=e,this.authenticated=!0,this.username=c.username,this.signOut=t}static authenticate(e,t){return L._theUser=new Ze(e,t),localStorage.setItem(is,e),L._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(is);return t?Ze.authenticate(t,e):L._theUser}}class ws{constructor(e){this._base=$n,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=L._theUser.authenticated,r={"Content-Type":"application/json"};if(t){const o={Authorization:`Bearer ${L._theUser.token}`};return e?{...r,...o}:o}else return e?{...r}:void 0}_url(e){return`${En}${this._base}${e}`}}class ir extends ws{constructor(e){super(Object.fromEntries(e))}}class Vr extends ws{constructor(){super(void 0)}}var kn=Object.defineProperty,zr=(s,e,t,r)=>{for(var i=void 0,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=c(e,t,i)||i);return i&&kn(e,t,i),i};const Hr="MTVModel",nr={user:new L,profile:void 0},Sn=()=>new wn,Wr=vn,Gr=_n;class Yr extends bn{constructor(e){super(e,nr),this.model=nr}}zr([jr({context:Hr}),_()],Yr.prototype,"model");class Fe extends yn{getFromModel(e){if(console.log("Accessing model for path:",e,"Model:",this._model),this._model)return this._model[e]}}zr([qr({context:Hr,subscribe:!0}),x({attribute:!1})],Fe.prototype,"_model");const vs=Sn(),An=vs.update;vs.addMessage("ProfileSelected",async s=>{const{userid:e}=s;try{const t=new Vr,r=await t.get(`/profiles/${e}`);if(console.log("Request headers:",t._headers()),r.status===200){const i=await r.json();return console.log("Profile:",i),Wr({profile:i})}}catch(t){console.error("Error fetching profile:",t)}return Gr});vs.addMessage("ProfileSaved",async s=>{const{userid:e,profile:t}=s;try{const r=new ws(t),i=await r.put(`/profiles/${e}`);if(console.log("Request headers:",r._headers()),i.status===200){const o=await i.json();return console.log("Profile:",o),Wr({profile:o})}}catch(r){console.error("Error saving profile:",r)}return Gr});const Tn=P`
  .user-profile-header {
    margin: auto;
    margin-top: 2.5em;
  }

  .coming-soon-container {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1.5em;
  }

  .info {
    color: var(--subtext-color);
    font-size: 0.9em;
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
  .edit-profile-toggle:hover {
    cursor: pointer;
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
`,Pn=P`
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
`;var Cn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,ct=(s,e,t,r)=>{for(var i=r>1?void 0:r?Rn(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Cn(e,t,i),i};let me=class extends S{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(s){const e=s.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,r)=>{const i=t[0].toUpperCase(),o=r[0].toUpperCase();return i<o?-1:i>o?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return y`
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
          ${this.names.map(s=>y`<slot
                ><default-card
                  title=${s[0]}
                  description=${s[1]}
                  user_id=${s[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};me.styles=[Pn];ct([x({type:Array})],me.prototype,"names",2);ct([x({type:Array})],me.prototype,"namesOriginalOrder",2);ct([x({type:Array})],me.prototype,"listAttributes",2);ct([_()],me.prototype,"sort_state",2);me=ct([A("sortable-list")],me);const On=P`
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
`;var Un=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,Dt=(s,e,t,r)=>{for(var i=r>1?void 0:r?Bn(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Un(e,t,i),i};let Oe=class extends S{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return y`
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
          ${this.names.map(s=>y`<slot
                ><default-card
                  title=${s[0]}
                  description=${s[1]}
                  user_id=${s[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};Oe.styles=[On];Dt([x({type:Array})],Oe.prototype,"names",2);Dt([x({type:Array})],Oe.prototype,"listAttributes",2);Dt([_()],Oe.prototype,"sort_state",2);Oe=Dt([A("general-list")],Oe);const In=P`
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
`;var Ln=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,_s=(s,e,t,r)=>{for(var i=r>1?void 0:r?Dn(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Ln(e,t,i),i};let et=class extends S{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return y`
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
    `}};et.styles=[In];_s([x({type:Array})],et.prototype,"artists",2);_s([x({type:String})],et.prototype,"listAttributes",2);et=_s([A("favorites-list")],et);const Fn=P`
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
`;var Nn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,_e=(s,e,t,r)=>{for(var i=r>1?void 0:r?Mn(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Nn(e,t,i),i};let ie=class extends S{constructor(){super(...arguments),this.open=!1,this.align="left",this.profileImageLink=""}_signOutUser(){console.log("Log Out Clicked.");const s=new CustomEvent("userSignOutTriggeredWithinDropDown",{bubbles:!0,composed:!0});this.dispatchEvent(s)}render(){return y`
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
            <li>
              <color-mode-switch></color-mode-switch>
            </li>
            <li
              class="border-bottom-only signOut link"
              @click=${this._signOutUser}
            >
              Sign out
            </li>
          </ul>
        </slot>
      </section>
    `}_handleChange(s){const e=s.target;this._toggle(e.checked)}_toggle(s){this.open=s,this._toggleClickAway(s)}_toggleClickAway(s){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};s?document.addEventListener("click",e):document.removeEventListener("click",e)}};ie.styles=[Fn];_e([x({reflect:!0,type:Boolean})],ie.prototype,"open",2);_e([x()],ie.prototype,"align",2);_e([x()],ie.prototype,"profileImage",2);_e([x()],ie.prototype,"profileUserID",2);_e([x()],ie.prototype,"profileDescription",2);_e([x()],ie.prototype,"profileImageLink",2);ie=_e([A("drop-down")],ie);const jn=P`
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
`;var qn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Kr=(s,e,t,r)=>{for(var i=r>1?void 0:r?Vn(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&qn(e,t,i),i};let Ct=class extends S{constructor(){super(...arguments),this.on=!1}render(){return y`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(s){const e=s.target,t=new Event(s.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};Ct.styles=[jn];Kr([x({reflect:!0,type:Boolean})],Ct.prototype,"on",2);Ct=Kr([A("color-mode-switch")],Ct);const zn=P`
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
`;var Hn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Ft=(s,e,t,r)=>{for(var i=r>1?void 0:r?Wn(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Hn(e,t,i),i};let Ue=class extends S{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return y`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};Ue.styles=[zn];Ft([x()],Ue.prototype,"title",2);Ft([x()],Ue.prototype,"description",2);Ft([x()],Ue.prototype,"user_id",2);Ue=Ft([A("default-card")],Ue);const Gn=P`
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
`;var Yn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,xs=(s,e,t,r)=>{for(var i=r>1?void 0:r?Kn(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Yn(e,t,i),i};let tt=class extends S{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return y`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};tt.styles=[Gn];xs([x({reflect:!0,type:Boolean})],tt.prototype,"on",2);xs([x()],tt.prototype,"filteredState",2);tt=xs([A("toggle-switch")],tt);const Jn=P`
  /* General form styling */
  .edit-mode-section {
    background-color: var(--menu-color);
    border-radius: var(--default-border-radius);
    padding: 20px;
    box-shadow: var(--box-shadow);
    margin: 20px auto;
    width: 30em;
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
`;function Rt(s){return s=s||[],Array.isArray(s)?s:[s]}function K(s){return`[Vaadin.Router] ${s}`}function Xn(s){if(typeof s!="object")return String(s);const e=Object.prototype.toString.call(s).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(s)}`:e}const Ot="module",Ut="nomodule",ns=[Ot,Ut];function or(s){if(!s.match(/.+\.[m]?js$/))throw new Error(K(`Unsupported type for bundle "${s}": .js or .mjs expected.`))}function Jr(s){if(!s||!Y(s.path))throw new Error(K('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=s.bundle,t=["component","redirect","bundle"];if(!ge(s.action)&&!Array.isArray(s.children)&&!ge(s.children)&&!Bt(e)&&!t.some(r=>Y(s[r])))throw new Error(K(`Expected route config "${s.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(Y(e))or(e);else if(ns.some(r=>r in e))ns.forEach(r=>r in e&&or(e[r]));else throw new Error(K('Expected route bundle to include either "'+Ut+'" or "'+Ot+'" keys, or both'));s.redirect&&["bundle","component"].forEach(r=>{r in s&&console.warn(K(`Route config "${s.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function ar(s){Rt(s).forEach(e=>Jr(e))}function cr(s,e){let t=document.head.querySelector('script[src="'+s+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",s),e===Ot?t.setAttribute("type",Ot):e===Ut&&t.setAttribute(Ut,""),t.async=!0),new Promise((r,i)=>{t.onreadystatechange=t.onload=o=>{t.__dynamicImportLoaded=!0,r(o)},t.onerror=o=>{t.parentNode&&t.parentNode.removeChild(t),i(o)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function Qn(s){return Y(s)?cr(s):Promise.race(ns.filter(e=>e in s).map(e=>cr(s[e],e)))}function Ke(s,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${s}`,{cancelable:s==="go",detail:e}))}function Bt(s){return typeof s=="object"&&!!s}function ge(s){return typeof s=="function"}function Y(s){return typeof s=="string"}function Xr(s){const e=new Error(K(`Page not found (${s.pathname})`));return e.context=s,e.code=404,e}const Pe=new class{};function Zn(s){const e=s.port,t=s.protocol,o=t==="http:"&&e==="80"||t==="https:"&&e==="443"?s.hostname:s.host;return`${t}//${o}`}function lr(s){if(s.defaultPrevented||s.button!==0||s.shiftKey||s.ctrlKey||s.altKey||s.metaKey)return;let e=s.target;const t=s.composedPath?s.composedPath():s.path||[];for(let h=0;h<t.length;h++){const u=t[h];if(u.nodeName&&u.nodeName.toLowerCase()==="a"){e=u;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Zn(e))!==window.location.origin)return;const{pathname:i,search:o,hash:c}=e;Ke("go",{pathname:i,search:o,hash:c})&&(s.preventDefault(),s&&s.type==="click"&&window.scrollTo(0,0))}const eo={activate(){window.document.addEventListener("click",lr)},inactivate(){window.document.removeEventListener("click",lr)}},to=/Trident/.test(navigator.userAgent);to&&!ge(window.PopStateEvent)&&(window.PopStateEvent=function(s,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(s,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function hr(s){if(s.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;Ke("go",{pathname:e,search:t,hash:r})}const so={activate(){window.addEventListener("popstate",hr)},inactivate(){window.removeEventListener("popstate",hr)}};var Ne=ri,ro=Es,io=co,no=ei,oo=si,Qr="/",Zr="./",ao=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Es(s,e){for(var t=[],r=0,i=0,o="",c=e&&e.delimiter||Qr,h=e&&e.delimiters||Zr,u=!1,m;(m=ao.exec(s))!==null;){var b=m[0],w=m[1],v=m.index;if(o+=s.slice(i,v),i=v+b.length,w){o+=w[1],u=!0;continue}var E="",j=s[i],de=m[2],Ht=m[3],je=m[4],xe=m[5];if(!u&&o.length){var Ee=o.length-1;h.indexOf(o[Ee])>-1&&(E=o[Ee],o=o.slice(0,Ee))}o&&(t.push(o),o="",u=!1);var Wt=E!==""&&j!==void 0&&j!==E,re=xe==="+"||xe==="*",pt=xe==="?"||xe==="*",qe=E||c,ft=Ht||je;t.push({name:de||r++,prefix:E,delimiter:qe,optional:pt,repeat:re,partial:Wt,pattern:ft?lo(ft):"[^"+oe(qe)+"]+?"})}return(o||i<s.length)&&t.push(o+s.substr(i)),t}function co(s,e){return ei(Es(s,e))}function ei(s){for(var e=new Array(s.length),t=0;t<s.length;t++)typeof s[t]=="object"&&(e[t]=new RegExp("^(?:"+s[t].pattern+")$"));return function(r,i){for(var o="",c=i&&i.encode||encodeURIComponent,h=0;h<s.length;h++){var u=s[h];if(typeof u=="string"){o+=u;continue}var m=r?r[u.name]:void 0,b;if(Array.isArray(m)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(m.length===0){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var w=0;w<m.length;w++){if(b=c(m[w],u),!e[h].test(b))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(w===0?u.prefix:u.delimiter)+b}continue}if(typeof m=="string"||typeof m=="number"||typeof m=="boolean"){if(b=c(String(m),u),!e[h].test(b))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+b+'"');o+=u.prefix+b;continue}if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"))}return o}}function oe(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function lo(s){return s.replace(/([=!:$/()])/g,"\\$1")}function ti(s){return s&&s.sensitive?"":"i"}function ho(s,e){if(!e)return s;var t=s.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return s}function uo(s,e,t){for(var r=[],i=0;i<s.length;i++)r.push(ri(s[i],e,t).source);return new RegExp("(?:"+r.join("|")+")",ti(t))}function po(s,e,t){return si(Es(s,t),e,t)}function si(s,e,t){t=t||{};for(var r=t.strict,i=t.start!==!1,o=t.end!==!1,c=oe(t.delimiter||Qr),h=t.delimiters||Zr,u=[].concat(t.endsWith||[]).map(oe).concat("$").join("|"),m=i?"^":"",b=s.length===0,w=0;w<s.length;w++){var v=s[w];if(typeof v=="string")m+=oe(v),b=w===s.length-1&&h.indexOf(v[v.length-1])>-1;else{var E=v.repeat?"(?:"+v.pattern+")(?:"+oe(v.delimiter)+"(?:"+v.pattern+"))*":v.pattern;e&&e.push(v),v.optional?v.partial?m+=oe(v.prefix)+"("+E+")?":m+="(?:"+oe(v.prefix)+"("+E+"))?":m+=oe(v.prefix)+"("+E+")"}}return o?(r||(m+="(?:"+c+")?"),m+=u==="$"?"$":"(?="+u+")"):(r||(m+="(?:"+c+"(?="+u+"))?"),b||(m+="(?="+c+"|"+u+")")),new RegExp(m,ti(t))}function ri(s,e,t){return s instanceof RegExp?ho(s,e):Array.isArray(s)?uo(s,e,t):po(s,e,t)}Ne.parse=ro;Ne.compile=io;Ne.tokensToFunction=no;Ne.tokensToRegExp=oo;const{hasOwnProperty:fo}=Object.prototype,os=new Map;os.set("|false",{keys:[],pattern:/(?:)/});function dr(s){try{return decodeURIComponent(s)}catch{return s}}function mo(s,e,t,r,i){t=!!t;const o=`${s}|${t}`;let c=os.get(o);if(!c){const m=[];c={keys:m,pattern:Ne(s,m,{end:t,strict:s===""})},os.set(o,c)}const h=c.pattern.exec(e);if(!h)return null;const u=Object.assign({},i);for(let m=1;m<h.length;m++){const b=c.keys[m-1],w=b.name,v=h[m];(v!==void 0||!fo.call(u,w))&&(b.repeat?u[w]=v?v.split(b.delimiter).map(dr):[]:u[w]=v&&dr(v))}return{path:h[0],keys:(r||[]).concat(c.keys),params:u}}function ii(s,e,t,r,i){let o,c,h=0,u=s.path||"";return u.charAt(0)==="/"&&(t&&(u=u.substr(1)),t=!0),{next(m){if(s===m)return{done:!0};const b=s.__children=s.__children||s.children;if(!o&&(o=mo(u,e,!b,r,i),o))return{done:!1,value:{route:s,keys:o.keys,params:o.params,path:o.path}};if(o&&b)for(;h<b.length;){if(!c){const v=b[h];v.parent=s;let E=o.path.length;E>0&&e.charAt(E)==="/"&&(E+=1),c=ii(v,e.substr(E),t,o.keys,o.params)}const w=c.next(m);if(!w.done)return{done:!1,value:w.value};c=null,h++}return{done:!0}}}}function go(s){if(ge(s.route.action))return s.route.action(s)}function bo(s,e){let t=e;for(;t;)if(t=t.parent,t===s)return!0;return!1}function yo(s){let e=`Path '${s.pathname}' is not properly resolved due to an error.`;const t=(s.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function wo(s,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const i={path:r,route:t};if(!s.chain)s.chain=[];else if(t.parent){let o=s.chain.length;for(;o--&&s.chain[o].route&&s.chain[o].route!==t.parent;)s.chain.pop()}s.chain.push(i)}}class st{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||go,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ar(e);const t=[...Rt(e)];this.root.__children=t}addRoutes(e){return ar(e),this.root.__children.push(...Rt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,Y(e)?{pathname:e}:e),r=ii(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let o=null,c=null,h=t;function u(m,b=o.value.route,w){const v=w===null&&o.value.route;return o=c||r.next(v),c=null,!m&&(o.done||!bo(b,o.value.route))?(c=o,Promise.resolve(Pe)):o.done?Promise.reject(Xr(t)):(h=Object.assign(h?{chain:h.chain?h.chain.slice(0):[]}:{},t,o.value),wo(h,o.value),Promise.resolve(i(h)).then(E=>E!=null&&E!==Pe?(h.result=E.result||E,h):u(m,b,E)))}return t.next=u,Promise.resolve().then(()=>u(!0,this.root)).catch(m=>{const b=yo(h);if(m?console.warn(b):m=new Error(b),m.context=m.context||h,m instanceof DOMException||(m.code=m.code||500),this.errorHandler)return h.result=this.errorHandler(m),h;throw m})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}st.pathToRegexp=Ne;const{pathToRegexp:ur}=st,pr=new Map;function ni(s,e,t){const r=e.name||e.component;if(r&&(s.has(r)?s.get(r).push(e):s.set(r,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const o=t[i];o.parent=e,ni(s,o,o.__children||o.children)}}function fr(s,e){const t=s.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function mr(s){let e=s.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function vo(s,e={}){if(!(s instanceof st))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,i)=>{let o=fr(t,r);if(!o&&(t.clear(),ni(t,s.root,s.root.__children),o=fr(t,r),!o))throw new Error(`Route "${r}" not found`);let c=pr.get(o.fullPath);if(!c){let u=mr(o),m=o.parent;for(;m;){const E=mr(m);E&&(u=E.replace(/\/$/,"")+"/"+u.replace(/^\//,"")),m=m.parent}const b=ur.parse(u),w=ur.tokensToFunction(b),v=Object.create(null);for(let E=0;E<b.length;E++)Y(b[E])||(v[b[E].name]=!0);c={toPath:w,keys:v},pr.set(u,c),o.fullPath=u}let h=c.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const u={},m=Object.keys(i);for(let w=0;w<m.length;w++){const v=m[w];c.keys[v]||(u[v]=i[v])}const b=e.stringifyQueryParams(u);b&&(h+=b.charAt(0)==="?"?b:`?${b}`)}return h}}let gr=[];function _o(s){gr.forEach(e=>e.inactivate()),s.forEach(e=>e.activate()),gr=s}const xo=s=>{const e=getComputedStyle(s).getPropertyValue("animation-name");return e&&e!=="none"},Eo=(s,e)=>{const t=()=>{s.removeEventListener("animationend",t),e()};s.addEventListener("animationend",t)};function br(s,e){return s.classList.add(e),new Promise(t=>{if(xo(s)){const r=s.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;s.setAttribute("style",`position: absolute; ${i}`),Eo(s,()=>{s.classList.remove(e),s.removeAttribute("style"),t()})}else s.classList.remove(e),t()})}const $o=256;function es(s){return s!=null}function ko(s){const e=Object.assign({},s);return delete e.next,e}function W({pathname:s="",search:e="",hash:t="",chain:r=[],params:i={},redirectFrom:o,resolver:c},h){const u=r.map(m=>m.route);return{baseUrl:c&&c.baseUrl||"",pathname:s,search:e,hash:t,routes:u,route:h||u.length&&u[u.length-1]||null,params:i,redirectFrom:o,getUrl:(m={})=>Et(J.pathToRegexp.compile(oi(u))(Object.assign({},i,m)),c)}}function yr(s,e){const t=Object.assign({},s.params);return{redirect:{pathname:e,from:s.pathname,params:t}}}function So(s,e){e.location=W(s);const t=s.chain.map(r=>r.route).indexOf(s.route);return s.chain[t].element=e,e}function xt(s,e,t){if(ge(s))return s.apply(t,e)}function wr(s,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return xt(t[s],e,t)}}function Ao(s,e){if(!Array.isArray(s)&&!Bt(s))throw new Error(K(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${s}`));e.__children=[];const t=Rt(s);for(let r=0;r<t.length;r++)Jr(t[r]),e.__children.push(t[r])}function gt(s){if(s&&s.length){const e=s[0].parentNode;for(let t=0;t<s.length;t++)e.removeChild(s[t])}}function Et(s,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(s.replace(/^\//,""),t).pathname:s}function oi(s){return s.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class J extends st{constructor(e,t){const r=document.head.querySelector("base"),i=r&&r.getAttribute("href");super([],Object.assign({baseUrl:i&&st.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=c=>this.__resolveRoute(c);const o=J.NavigationTrigger;J.setTriggers.apply(J,Object.keys(o).map(c=>o[c])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=W({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();ge(t.children)&&(r=r.then(()=>t.children(ko(e))).then(o=>{!es(o)&&!ge(t.children)&&(o=t.children),Ao(o,t)}));const i={redirect:o=>yr(e,o),component:o=>{const c=document.createElement(o);return this.__createdByRouter.set(c,!0),c}};return r.then(()=>{if(this.__isLatestRender(e))return xt(t.action,[e,i],t)}).then(o=>{if(es(o)&&(o instanceof HTMLElement||o.redirect||o===Pe))return o;if(Y(t.redirect))return i.redirect(t.redirect);if(t.bundle)return Qn(t.bundle).then(()=>{},()=>{throw new Error(K(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(o=>{if(es(o))return o;if(Y(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},Y(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(i).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const c=this.__previousContext;if(o===c)return this.__updateBrowserHistory(c,!0),this.location;if(this.location=W(o),t&&this.__updateBrowserHistory(o,r===1),Ke("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,c),this.__previousContext=o,this.location;this.__addAppearingContent(o,c);const h=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,c),h.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),gt(this.__outlet&&this.__outlet.children),this.location=W(Object.assign(i,{resolver:this})),Ke("error",Object.assign({router:this,error:o},i)),o}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const o=r!==t?r:e,h=Et(oi(r.chain),r.resolver)===r.pathname,u=(m,b=m.route,w)=>m.next(void 0,b,w).then(v=>v===null||v===Pe?h?m:b.parent!==null?u(m,b.parent,v):v:v);return u(r).then(m=>{if(m===null||m===Pe)throw Xr(o);return m&&m!==Pe&&m!==r?this.__fullyResolveChain(o,m):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(So(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(K(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Xn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],i=e.chain;let o=Promise.resolve();const c=()=>({cancel:!0}),h=u=>yr(e,u);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let u=0;u<Math.min(r.length,i.length)&&!(r[u].route!==i[u].route||r[u].path!==i[u].path&&r[u].element!==i[u].element||!this.__isReusableElement(r[u].element,i[u].element));u=++e.__divergedChainIndex);if(e.__skipAttach=i.length===r.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let u=i.length-1;u>=0;u--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:c},r[u]);for(let u=0;u<i.length;u++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:c,redirect:h},i[u]),r[u].element.location=W(e,r[u].route)}else for(let u=r.length-1;u>=e.__divergedChainIndex;u--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:c},r[u])}if(!e.__skipAttach)for(let u=0;u<i.length;u++)u<e.__divergedChainIndex?u<r.length&&r[u].element&&(r[u].element.location=W(e,r[u].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:c,redirect:h},i[u]),i[u].element&&(i[u].element.location=W(e,i[u].route)));return o.then(u=>{if(u){if(u.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(u.redirect)return this.__redirect(u.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,i){const o=W(t);return e.then(c=>{if(this.__isLatestRender(t))return wr("onBeforeLeave",[o,r,this],i.element)(c)}).then(c=>{if(!(c||{}).redirect)return c})}__runOnBeforeEnterCallbacks(e,t,r,i){const o=W(t,i.route);return e.then(c=>{if(this.__isLatestRender(t))return wr("onBeforeEnter",[o,r,this],i.element)(c)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>$o)throw new Error(K(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(K(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const o=i?"replaceState":"pushState";window.history[o](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const o=t&&t.chain[i].element;if(o)if(o.parentNode===r)e.chain[i].element=o,r=o;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(o=>this.__addedByRouter.get(o)&&o!==e.result);let i=r;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const c=e.chain[o].element;c&&(i.appendChild(c),this.__addedByRouter.set(c,!0),i===r&&this.__appearingContent.push(c),i=c)}}__removeDisappearingContent(){this.__disappearingContent&&gt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(gt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const i=t.chain[r].element;if(i)try{const o=W(e);xt(i.onAfterLeave,[o,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&gt(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},i=W(e,e.chain[t].route);xt(r.onAfterEnter,[i,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],i=[],o=e.chain;let c;for(let h=o.length;h>0;h--)if(o[h-1].route.animate){c=o[h-1].route.animate;break}if(t&&r&&c){const h=Bt(c)&&c.leave||"leaving",u=Bt(c)&&c.enter||"entering";i.push(br(t,h)),i.push(br(r,u))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:i}=e?e.detail:window.location;Y(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:i},!0))}static setTriggers(...e){_o(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=vo(this)),Et(this.__urlForName(e,t),this)}urlForPath(e,t){return Et(J.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:i}=Y(e)?this.__createUrl(e,"http://a"):e;return Ke("go",{pathname:t,search:r,hash:i})}}const To=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,$t=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Po(){function s(){return!0}return ai(s)}function Co(){try{return Ro()?!0:Oo()?$t?!Uo():!Po():!1}catch{return!1}}function Ro(){return localStorage.getItem("vaadin.developmentmode.force")}function Oo(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Uo(){return!!($t&&Object.keys($t).map(e=>$t[e]).filter(e=>e.productionMode).length>0)}function ai(s,e){if(typeof s!="function")return;const t=To.exec(s.toString());if(t)try{s=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return s(e)}window.Vaadin=window.Vaadin||{};const vr=function(s,e){if(window.Vaadin.developmentMode)return ai(s,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Co());function Bo(){}const Io=function(){if(typeof vr=="function")return vr(Bo)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Io();J.NavigationTrigger={POPSTATE:so,CLICK:eo};var Lo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,$s=(s,e,t,r)=>{for(var i=r>1?void 0:r?Do(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Lo(e,t,i),i};let rt=class extends S{constructor(s){super(),this.redirectAfterSubmit=!1,this.profile=s}_handleSubmit(s){s.preventDefault();const e=s.target,t=new FormData(e),r={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),spotify:t.get("spotify")==="true"},i=new CustomEvent("profile-update",{detail:{profile:r},bubbles:!0,composed:!0});console.log("profile-update Event being sent to DOM"),this.dispatchEvent(i);const o=new CustomEvent("update-using",{detail:{profile:r},bubbles:!0,composed:!0});console.log("profile update event being sent to profile component to update using"),this.dispatchEvent(o),this.requestUpdate(),this.redirectAfterSubmit&&J.go("/app/home")}render(){var s,e,t,r,i;return y`
            <section class="edit-mode-section">
              <form @submit=${this._handleSubmit}>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    .value=${(s=this.profile)==null?void 0:s.name}
                    placeholder="Your Name"
                    />
                    </div>
                    <div class="form-group">
                    <label for="bio">Bio</label>
                    <input
                    type="text"
                    id="bio"
                    name="bio"
                    .value=${(e=this.profile)==null?void 0:e.bio}
                    placeholder="Tell us about yourself!"
                    />
                    </div>
                    <div class="form-group">
                    <label for="musicTaste">Music Taste</label>
                    <input
                    type="text"
                    id="musicTaste"
                    name="musicTaste"
                    .value=${(t=this.profile)==null?void 0:t.musicTaste}
                    placeholder="Your music taste in a few words"
                    />
                    </div>
                  <fieldset class="form-group">
                      <legend>Do you use Spotify?</legend>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="true"
                          ?checked=${((r=this.profile)==null?void 0:r.spotify)===!0}
                        /> Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="false"
                          ?checked=${((i=this.profile)==null?void 0:i.spotify)===!1}
                        /> No
                      </label>
                    </fieldset>
                </fieldset>
                <div class="form-group">
                  <button type="submit">Save</button>
                </div>
              </form>
            </section>
          `}};rt.styles=[Jn];$s([x({type:Object})],rt.prototype,"profile",2);$s([x({type:Boolean})],rt.prototype,"redirectAfterSubmit",2);rt=$s([A("edit-profile-form")],rt);var Fo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,lt=(s,e,t,r)=>{for(var i=r>1?void 0:r?No(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Fo(e,t,i),i};let be=class extends S{constructor(){super(...arguments),this.path="",this.editMode=!1,this.profileEditText="Edit Profile."}get profile(){return this.using||{}}connectedCallback(){super.connectedCallback(),this.addEventListener("update-using",this._handleUsingUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("update-using",this._handleUsingUpdate)}_handleUsingUpdate(s){s.detail&&s.detail.profile&&(this.using=s.detail.profile,this._changeEditMode(),this.requestUpdate())}_changeEditMode(){this.editMode=!this.editMode,this.profileEditText=this.editMode?"Close Edit Menu.":"Edit Profile."}_handleSubmit(s){s.preventDefault();const e=s.target,t=new FormData(e),r={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),profileImage:t.get("profileImage"),spotify:t.get("spotify")==="true"};this.using=r,this.requestUpdate(),console.log("Form submitted with:",r);const i=new CustomEvent("profile-update",{detail:{profile:r},bubbles:!0,composed:!0});this.dispatchEvent(i),this._changeEditMode()}render(){const{name:s,profileImage:e,profileDescription:t,bio:r}=this.profile;return y`
      ${this.editMode?y`<edit-profile-form .profile=${this.profile}></edit-profile-form>`:""}

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
            <h1>${s}&apos;s Page</h1>
            <p class="user-description">${r}</p>
          </section>
        </section>

        <section class="coming-soon-container">
          <p class="info">More profile functionality is coming soon!</p>
        </section>
      </section>
    `}};be.styles=Tn;lt([x()],be.prototype,"path",2);lt([x()],be.prototype,"editMode",2);lt([x()],be.prototype,"profileEditText",2);lt([x({attribute:!1})],be.prototype,"using",2);be=lt([A("user-profile")],be);var Mo=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,ci=(s,e,t,r)=>{for(var i=r>1?void 0:r?jo(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Mo(e,t,i),i};let as=class extends S{constructor(){super(...arguments),this.router=new J(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return y`<slot></slot>`}};ci([x({attribute:!1})],as.prototype,"routes",2);as=ci([A("vaadin-router")],as);const qo=P`
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
`;var Vo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,he=(s,e,t,r)=>{for(var i=r>1?void 0:r?zo(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Vo(e,t,i),i};let li="auth",te=class extends S{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Ze.authenticateFromLocalStorage(()=>this._signOut()),this.showLoginForm=!1,this.whereToRedirect="/createProfile",this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this._handleSignOutEvent=s=>{console.log("Sign out event received",s),this._signOut()}}isAuthenticated(){return this.user.authenticated}toggleLoginForm(){this.showLoginForm=!this.showLoginForm,this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this.requestUpdate()}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}_loginUser(s,e){const t=new FormData;t.append("username",s),t.append("pwd",e),new ir(t).base().post("/login").then(i=>{if(i.status===200)return i.json();throw this.loginStatus=i.status,new Error(`Login failed with status: ${i.status}`)}).then(i=>{console.log("Log In Request Successful!"),this.user=Ze.authenticate(i.token,()=>this._signOut()),this._toggleDialog(!1),console.log("WTR within login ",this.whereToRedirect),J.go(this.whereToRedirect==="app/home"?"app/home":"/createProfile"),this.requestUpdate()}).catch(i=>console.error("Login Error:",i))}_handleLoginSubmit(s){s.preventDefault();const e=s.target,t=new FormData(e),r=t.get("username"),i=t.get("pwd");this.whereToRedirect="app/home",typeof r=="string"&&typeof i=="string"?this._loginUser(r,i):console.error("Username or password field is missing or not correctly entered.")}async _handleRegister(s){s.preventDefault();const e=s.target,t=new FormData(e),r=t.get("username"),i=t.get("pwd");if(!r||!i)throw this.communicateResultToUser("error"),new Error("Username or password missing from form data.");try{const c=await new ir(t).base().post("/signup");if(c.status===201)await this.createNewUserProfileAfterRegisterSuccess(r),this.whereToRedirect=`/createProfile/${r}`,console.log("whereToRedirect within Register: ",this.whereToRedirect),this.communicateResultToUser("success"),this._loginUser(r,i);else throw new Error(`Failed to register. Status: ${c.status}`)}catch(o){console.error("Error during registration:",o),this.communicateResultToUser("error")}}async createNewUserProfileAfterRegisterSuccess(s){const e="http://localhost:3000";try{const t=await fetch(`${e}/profileCreation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:s})});if(!t.ok)throw new Error(`Failed to create profile: ${t.statusText}`);const r=await t.json();return console.log("Profile created:",r),r}catch(t){return console.error("Error creating profile:",t),null}}communicateResultToUser(s){s==="error"&&(this.showSignUpErrorMessage=!this.showSignUpErrorMessage),s==="success"&&(this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!0)}connectedCallback(){super.connectedCallback(),this.addEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}render(){const s=y`
      <dialog class="formsContainer">
        ${this.showLoginForm?y` <form @submit=${this._handleLoginSubmit} class="loginForm">
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
            </form>`:y`<form @submit=${this._handleRegister} class="registrationForm">
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
              ${this.showSignUpErrorMessage?y`<p class="errorMessage">
                    There was an error with signing you up, please try again.
                  </p>`:y``}
              ${this.showSignUpSuccessMessage?y`<p class="successMessage">
                    Sign up successful. If you are not redirected shortly,
                    please
                    <span @click=${this.toggleLoginForm} class="signInLink"
                      >log in here.</span
                    >
                  </p>`:y``}
              <p class="loginSignupLink">
                Already have an account?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign In</span
                >
              </p>
            </form>`}
      </dialog>
    `;return y`${this.isAuthenticated()?"":s} <slot></slot>`}_toggleDialog(s){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(s?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=L.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};te.styles=[qo];he([_()],te.prototype,"loginStatus",2);he([_()],te.prototype,"registerStatus",2);he([jr({context:li}),_()],te.prototype,"user",2);he([_()],te.prototype,"showLoginForm",2);he([_()],te.prototype,"whereToRedirect",2);he([_()],te.prototype,"showSignUpErrorMessage",2);he([_()],te.prototype,"showSignUpSuccessMessage",2);te=he([A("auth-required")],te);const Ho=P`
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
`;var Wo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Nt=(s,e,t,r)=>{for(var i=r>1?void 0:r?Go(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Wo(e,t,i),i};let Be=class extends S{constructor(){super(...arguments),this.loading=!0,this.user=new L}render(){return y`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        ${this.loading?y`<p>Loading...</p>`:this.profile?y`
              <drop-down
                .profileImage="${this.profile.profileImage}"
                .profileDescription="${this.profile.profileDescription}"
                .profileUserID="${this.profile.userid}"
              ></drop-down>
            `:y``}
      </section>
    `}async updated(s){if(console.log("within header updated"),s.has("user")){console.log("New user",this.user);const{username:e}=this.user;console.log("NEW USER USERNAME: ",e),await this._getData(`/profiles/${e}`),console.log("NEW PROFILE: ",this.profile)}else console.log("changed properties doesn't have user, printing profile anyway? ",this.profile);return!0}async _getData(s){console.log("WITHIN HEADER GET DATA");const e=new Vr;try{const t=await e.get(s);if(t.status===200){const r=await t.json();console.log("Profile:",r),this.profile=r,console.log("Profile successfully updated:",this.profile)}else console.error("Failed to fetch profile data. Status:",t.status)}catch(t){console.error("Error fetching profile data:",t)}finally{this.loading=!1}}_signOut(){console.log("Signout"),this.user.signOut()}};Be.styles=[Ho];Nt([_()],Be.prototype,"profile",2);Nt([_()],Be.prototype,"loading",2);Nt([qr({context:li,subscribe:!0}),x({attribute:!1})],Be.prototype,"user",2);Be=Nt([A("match-the-vibe-header")],Be);var Yo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,ht=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ko(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Yo(e,t,i),i};let ye=class extends Fe{get userid(){var s;return console.log(),(s=this.location)==null?void 0:s.params.userid}get edit(){var s;return(s=this.location)==null?void 0:s.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(s,e,t){s==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(s,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",s=>this._handleProfileUpdate(s))}_handleProfileUpdate(s){console.log("Profile updated",s.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:s.detail.profile}):console.error("UserID is undefined.")}render(){return y`
      <section class="profile-page">
        <user-profile .using=${this.profile}> </user-profile>
      </section>
    `}};ye.styles=[P`
      :host {
        display: contents;
      }

      .profile-page {
        display: flex;
        justify-content: center;
      }
    `];ht([x({attribute:!1})],ye.prototype,"location",2);ht([x({reflect:!0})],ye.prototype,"userid",1);ht([x({reflect:!0})],ye.prototype,"edit",1);ht([x()],ye.prototype,"profile",1);ye=ht([A("profile-page")],ye);const Jo=P`
  .feed-container {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 60%;
    margin-top: 2.5em;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .nav-section {
    width: 200px;
    background-color: var(--background-color);
    border-right: 1px solid #e0e0e0;
    padding: 1em;
  }

  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .navlink {
    margin-bottom: 0.5em;
  }

  .navlink a {
    text-decoration: none;
    font-size: 1em;
    color: var(--subtext-color);
    display: block;
    padding: 0.25em;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }

  .navlink a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .main-posts-section {
    flex-grow: 1;
    padding: 1em;
    margin-left: 3em;
  }

  .feed-header {
    font-size: 1.75em;
    font-weight: 400;
    margin-bottom: 1em;
  }

  .nav-header {
    font-size: 1.15em;
    font-weight: 400;
    margin-bottom: 1em;
  }

  create-post {
    margin-bottom: 1em;
  }
`,Xo=P``,Qo=P`
  .feed-single-post,
  .feed-single-post-expanded {
    background-color: var(--background-color);
    padding: 10px;
    width: 34em;
    margin-bottom: 10px;
    color: var(--text-color);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 17px 0 10px 25px;
  }

  .profile-name-time {
    display: flex;
    flex-direction: column;
  }

  .post-content {
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
    margin-bottom: 0.3em;
    font-size: 1em;
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

  .expand-unexpand,
  .expand-unexpand-right {
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

  .expand-unexpand-right {
    margin-left: 0.55em;
  }

  .expand-unexpand:hover {
    color: var(--text-color);
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

  .subtext {
    font-size: 0.9em;
    color: var(--subtext-color);
  }

  .expanded-header {
    font-weight: 500;
  }

  .margin-left {
    margin-left: 1.51em;
  }
`,Zo=P`
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
`;var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,hi=(s,e,t,r)=>{for(var i=r>1?void 0:r?ta(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&ea(e,t,i),i};let It=class extends S{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return y`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{name:s}=this.track,e=this.track.artists[0].name,{url:t}=this.track.album.images[0];return y`
      <section class="single-track" @click=${()=>this._handleClick()}>
        <img src="${t}" alt="Album cover for ${s}" class="track-image" />
        <section class="details">
          <p class="track-name">${s}</p>
          <p class="artist-name">${e}</p>
        </section>
      </section>
    `}};It.styles=[Zo];hi([x({type:Object})],It.prototype,"track",2);It=hi([A("track-card")],It);var ks={},Mt={};Mt.byteLength=ia;Mt.toByteArray=oa;Mt.fromByteArray=la;var Z=[],V=[],sa=typeof Uint8Array<"u"?Uint8Array:Array,ts="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Se=0,ra=ts.length;Se<ra;++Se)Z[Se]=ts[Se],V[ts.charCodeAt(Se)]=Se;V[45]=62;V[95]=63;function di(s){var e=s.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=s.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return[t,r]}function ia(s){var e=di(s),t=e[0],r=e[1];return(t+r)*3/4-r}function na(s,e,t){return(e+t)*3/4-t}function oa(s){var e,t=di(s),r=t[0],i=t[1],o=new sa(na(s,r,i)),c=0,h=i>0?r-4:r,u;for(u=0;u<h;u+=4)e=V[s.charCodeAt(u)]<<18|V[s.charCodeAt(u+1)]<<12|V[s.charCodeAt(u+2)]<<6|V[s.charCodeAt(u+3)],o[c++]=e>>16&255,o[c++]=e>>8&255,o[c++]=e&255;return i===2&&(e=V[s.charCodeAt(u)]<<2|V[s.charCodeAt(u+1)]>>4,o[c++]=e&255),i===1&&(e=V[s.charCodeAt(u)]<<10|V[s.charCodeAt(u+1)]<<4|V[s.charCodeAt(u+2)]>>2,o[c++]=e>>8&255,o[c++]=e&255),o}function aa(s){return Z[s>>18&63]+Z[s>>12&63]+Z[s>>6&63]+Z[s&63]}function ca(s,e,t){for(var r,i=[],o=e;o<t;o+=3)r=(s[o]<<16&16711680)+(s[o+1]<<8&65280)+(s[o+2]&255),i.push(aa(r));return i.join("")}function la(s){for(var e,t=s.length,r=t%3,i=[],o=16383,c=0,h=t-r;c<h;c+=o)i.push(ca(s,c,c+o>h?h:c+o));return r===1?(e=s[t-1],i.push(Z[e>>2]+Z[e<<4&63]+"==")):r===2&&(e=(s[t-2]<<8)+s[t-1],i.push(Z[e>>10]+Z[e>>4&63]+Z[e<<2&63]+"=")),i.join("")}var Ss={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Ss.read=function(s,e,t,r,i){var o,c,h=i*8-r-1,u=(1<<h)-1,m=u>>1,b=-7,w=t?i-1:0,v=t?-1:1,E=s[e+w];for(w+=v,o=E&(1<<-b)-1,E>>=-b,b+=h;b>0;o=o*256+s[e+w],w+=v,b-=8);for(c=o&(1<<-b)-1,o>>=-b,b+=r;b>0;c=c*256+s[e+w],w+=v,b-=8);if(o===0)o=1-m;else{if(o===u)return c?NaN:(E?-1:1)*(1/0);c=c+Math.pow(2,r),o=o-m}return(E?-1:1)*c*Math.pow(2,o-r)};Ss.write=function(s,e,t,r,i,o){var c,h,u,m=o*8-i-1,b=(1<<m)-1,w=b>>1,v=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:o-1,j=r?1:-1,de=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(h=isNaN(e)?1:0,c=b):(c=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-c))<1&&(c--,u*=2),c+w>=1?e+=v/u:e+=v*Math.pow(2,1-w),e*u>=2&&(c++,u/=2),c+w>=b?(h=0,c=b):c+w>=1?(h=(e*u-1)*Math.pow(2,i),c=c+w):(h=e*Math.pow(2,w-1)*Math.pow(2,i),c=0));i>=8;s[t+E]=h&255,E+=j,h/=256,i-=8);for(c=c<<i|h,m+=i;m>0;s[t+E]=c&255,E+=j,c/=256,m-=8);s[t+E-j]|=de*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(s){const e=Mt,t=Ss,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;s.Buffer=h,s.SlowBuffer=xe,s.INSPECT_MAX_BYTES=50;const i=2147483647;s.kMaxLength=i,h.TYPED_ARRAY_SUPPORT=o(),!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const l=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(l,n),l.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function c(l){if(l>i)throw new RangeError('The value "'+l+'" is invalid for option "size"');const n=new Uint8Array(l);return Object.setPrototypeOf(n,h.prototype),n}function h(l,n,a){if(typeof l=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(l)}return u(l,n,a)}h.poolSize=8192;function u(l,n,a){if(typeof l=="string")return v(l,n);if(ArrayBuffer.isView(l))return j(l);if(l==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l);if(Q(l,ArrayBuffer)||l&&Q(l.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Q(l,SharedArrayBuffer)||l&&Q(l.buffer,SharedArrayBuffer)))return de(l,n,a);if(typeof l=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const d=l.valueOf&&l.valueOf();if(d!=null&&d!==l)return h.from(d,n,a);const p=Ht(l);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof l[Symbol.toPrimitive]=="function")return h.from(l[Symbol.toPrimitive]("string"),n,a);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l)}h.from=function(l,n,a){return u(l,n,a)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array);function m(l){if(typeof l!="number")throw new TypeError('"size" argument must be of type number');if(l<0)throw new RangeError('The value "'+l+'" is invalid for option "size"')}function b(l,n,a){return m(l),l<=0?c(l):n!==void 0?typeof a=="string"?c(l).fill(n,a):c(l).fill(n):c(l)}h.alloc=function(l,n,a){return b(l,n,a)};function w(l){return m(l),c(l<0?0:je(l)|0)}h.allocUnsafe=function(l){return w(l)},h.allocUnsafeSlow=function(l){return w(l)};function v(l,n){if((typeof n!="string"||n==="")&&(n="utf8"),!h.isEncoding(n))throw new TypeError("Unknown encoding: "+n);const a=Ee(l,n)|0;let d=c(a);const p=d.write(l,n);return p!==a&&(d=d.slice(0,p)),d}function E(l){const n=l.length<0?0:je(l.length)|0,a=c(n);for(let d=0;d<n;d+=1)a[d]=l[d]&255;return a}function j(l){if(Q(l,Uint8Array)){const n=new Uint8Array(l);return de(n.buffer,n.byteOffset,n.byteLength)}return E(l)}function de(l,n,a){if(n<0||l.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(l.byteLength<n+(a||0))throw new RangeError('"length" is outside of buffer bounds');let d;return n===void 0&&a===void 0?d=new Uint8Array(l):a===void 0?d=new Uint8Array(l,n):d=new Uint8Array(l,n,a),Object.setPrototypeOf(d,h.prototype),d}function Ht(l){if(h.isBuffer(l)){const n=je(l.length)|0,a=c(n);return a.length===0||l.copy(a,0,0,n),a}if(l.length!==void 0)return typeof l.length!="number"||Kt(l.length)?c(0):E(l);if(l.type==="Buffer"&&Array.isArray(l.data))return E(l.data)}function je(l){if(l>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return l|0}function xe(l){return+l!=l&&(l=0),h.alloc(+l)}h.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==h.prototype},h.compare=function(n,a){if(Q(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),Q(a,Uint8Array)&&(a=h.from(a,a.offset,a.byteLength)),!h.isBuffer(n)||!h.isBuffer(a))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===a)return 0;let d=n.length,p=a.length;for(let f=0,g=Math.min(d,p);f<g;++f)if(n[f]!==a[f]){d=n[f],p=a[f];break}return d<p?-1:p<d?1:0},h.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(n,a){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return h.alloc(0);let d;if(a===void 0)for(a=0,d=0;d<n.length;++d)a+=n[d].length;const p=h.allocUnsafe(a);let f=0;for(d=0;d<n.length;++d){let g=n[d];if(Q(g,Uint8Array))f+g.length>p.length?(h.isBuffer(g)||(g=h.from(g)),g.copy(p,f)):Uint8Array.prototype.set.call(p,g,f);else if(h.isBuffer(g))g.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=g.length}return p};function Ee(l,n){if(h.isBuffer(l))return l.length;if(ArrayBuffer.isView(l)||Q(l,ArrayBuffer))return l.byteLength;if(typeof l!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof l);const a=l.length,d=arguments.length>2&&arguments[2]===!0;if(!d&&a===0)return 0;let p=!1;for(;;)switch(n){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return Yt(l).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a*2;case"hex":return a>>>1;case"base64":return Hs(l).length;default:if(p)return d?-1:Yt(l).length;n=(""+n).toLowerCase(),p=!0}}h.byteLength=Ee;function Wt(l,n,a){let d=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((a===void 0||a>this.length)&&(a=this.length),a<=0)||(a>>>=0,n>>>=0,a<=n))return"";for(l||(l="utf8");;)switch(l){case"hex":return Fi(this,n,a);case"utf8":case"utf-8":return Ls(this,n,a);case"ascii":return Li(this,n,a);case"latin1":case"binary":return Di(this,n,a);case"base64":return Bi(this,n,a);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ni(this,n,a);default:if(d)throw new TypeError("Unknown encoding: "+l);l=(l+"").toLowerCase(),d=!0}}h.prototype._isBuffer=!0;function re(l,n,a){const d=l[n];l[n]=l[a],l[a]=d}h.prototype.swap16=function(){const n=this.length;if(n%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let a=0;a<n;a+=2)re(this,a,a+1);return this},h.prototype.swap32=function(){const n=this.length;if(n%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let a=0;a<n;a+=4)re(this,a,a+3),re(this,a+1,a+2);return this},h.prototype.swap64=function(){const n=this.length;if(n%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let a=0;a<n;a+=8)re(this,a,a+7),re(this,a+1,a+6),re(this,a+2,a+5),re(this,a+3,a+4);return this},h.prototype.toString=function(){const n=this.length;return n===0?"":arguments.length===0?Ls(this,0,n):Wt.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(n){if(!h.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n?!0:h.compare(this,n)===0},h.prototype.inspect=function(){let n="";const a=s.INSPECT_MAX_BYTES;return n=this.toString("hex",0,a).replace(/(.{2})/g,"$1 ").trim(),this.length>a&&(n+=" ... "),"<Buffer "+n+">"},r&&(h.prototype[r]=h.prototype.inspect),h.prototype.compare=function(n,a,d,p,f){if(Q(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(a===void 0&&(a=0),d===void 0&&(d=n?n.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),a<0||d>n.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&a>=d)return 0;if(p>=f)return-1;if(a>=d)return 1;if(a>>>=0,d>>>=0,p>>>=0,f>>>=0,this===n)return 0;let g=f-p,$=d-a;const O=Math.min(g,$),C=this.slice(p,f),U=n.slice(a,d);for(let T=0;T<O;++T)if(C[T]!==U[T]){g=C[T],$=U[T];break}return g<$?-1:$<g?1:0};function pt(l,n,a,d,p){if(l.length===0)return-1;if(typeof a=="string"?(d=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),a=+a,Kt(a)&&(a=p?0:l.length-1),a<0&&(a=l.length+a),a>=l.length){if(p)return-1;a=l.length-1}else if(a<0)if(p)a=0;else return-1;if(typeof n=="string"&&(n=h.from(n,d)),h.isBuffer(n))return n.length===0?-1:qe(l,n,a,d,p);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(l,n,a):Uint8Array.prototype.lastIndexOf.call(l,n,a):qe(l,[n],a,d,p);throw new TypeError("val must be string, number or Buffer")}function qe(l,n,a,d,p){let f=1,g=l.length,$=n.length;if(d!==void 0&&(d=String(d).toLowerCase(),d==="ucs2"||d==="ucs-2"||d==="utf16le"||d==="utf-16le")){if(l.length<2||n.length<2)return-1;f=2,g/=2,$/=2,a/=2}function O(U,T){return f===1?U[T]:U.readUInt16BE(T*f)}let C;if(p){let U=-1;for(C=a;C<g;C++)if(O(l,C)===O(n,U===-1?0:C-U)){if(U===-1&&(U=C),C-U+1===$)return U*f}else U!==-1&&(C-=C-U),U=-1}else for(a+$>g&&(a=g-$),C=a;C>=0;C--){let U=!0;for(let T=0;T<$;T++)if(O(l,C+T)!==O(n,T)){U=!1;break}if(U)return C}return-1}h.prototype.includes=function(n,a,d){return this.indexOf(n,a,d)!==-1},h.prototype.indexOf=function(n,a,d){return pt(this,n,a,d,!0)},h.prototype.lastIndexOf=function(n,a,d){return pt(this,n,a,d,!1)};function ft(l,n,a,d){a=Number(a)||0;const p=l.length-a;d?(d=Number(d),d>p&&(d=p)):d=p;const f=n.length;d>f/2&&(d=f/2);let g;for(g=0;g<d;++g){const $=parseInt(n.substr(g*2,2),16);if(Kt($))return g;l[a+g]=$}return g}function Ci(l,n,a,d){return mt(Yt(n,l.length-a),l,a,d)}function Ri(l,n,a,d){return mt(Vi(n),l,a,d)}function Oi(l,n,a,d){return mt(Hs(n),l,a,d)}function Ui(l,n,a,d){return mt(zi(n,l.length-a),l,a,d)}h.prototype.write=function(n,a,d,p){if(a===void 0)p="utf8",d=this.length,a=0;else if(d===void 0&&typeof a=="string")p=a,d=this.length,a=0;else if(isFinite(a))a=a>>>0,isFinite(d)?(d=d>>>0,p===void 0&&(p="utf8")):(p=d,d=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-a;if((d===void 0||d>f)&&(d=f),n.length>0&&(d<0||a<0)||a>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let g=!1;for(;;)switch(p){case"hex":return ft(this,n,a,d);case"utf8":case"utf-8":return Ci(this,n,a,d);case"ascii":case"latin1":case"binary":return Ri(this,n,a,d);case"base64":return Oi(this,n,a,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ui(this,n,a,d);default:if(g)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),g=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Bi(l,n,a){return n===0&&a===l.length?e.fromByteArray(l):e.fromByteArray(l.slice(n,a))}function Ls(l,n,a){a=Math.min(l.length,a);const d=[];let p=n;for(;p<a;){const f=l[p];let g=null,$=f>239?4:f>223?3:f>191?2:1;if(p+$<=a){let O,C,U,T;switch($){case 1:f<128&&(g=f);break;case 2:O=l[p+1],(O&192)===128&&(T=(f&31)<<6|O&63,T>127&&(g=T));break;case 3:O=l[p+1],C=l[p+2],(O&192)===128&&(C&192)===128&&(T=(f&15)<<12|(O&63)<<6|C&63,T>2047&&(T<55296||T>57343)&&(g=T));break;case 4:O=l[p+1],C=l[p+2],U=l[p+3],(O&192)===128&&(C&192)===128&&(U&192)===128&&(T=(f&15)<<18|(O&63)<<12|(C&63)<<6|U&63,T>65535&&T<1114112&&(g=T))}}g===null?(g=65533,$=1):g>65535&&(g-=65536,d.push(g>>>10&1023|55296),g=56320|g&1023),d.push(g),p+=$}return Ii(d)}const Ds=4096;function Ii(l){const n=l.length;if(n<=Ds)return String.fromCharCode.apply(String,l);let a="",d=0;for(;d<n;)a+=String.fromCharCode.apply(String,l.slice(d,d+=Ds));return a}function Li(l,n,a){let d="";a=Math.min(l.length,a);for(let p=n;p<a;++p)d+=String.fromCharCode(l[p]&127);return d}function Di(l,n,a){let d="";a=Math.min(l.length,a);for(let p=n;p<a;++p)d+=String.fromCharCode(l[p]);return d}function Fi(l,n,a){const d=l.length;(!n||n<0)&&(n=0),(!a||a<0||a>d)&&(a=d);let p="";for(let f=n;f<a;++f)p+=Hi[l[f]];return p}function Ni(l,n,a){const d=l.slice(n,a);let p="";for(let f=0;f<d.length-1;f+=2)p+=String.fromCharCode(d[f]+d[f+1]*256);return p}h.prototype.slice=function(n,a){const d=this.length;n=~~n,a=a===void 0?d:~~a,n<0?(n+=d,n<0&&(n=0)):n>d&&(n=d),a<0?(a+=d,a<0&&(a=0)):a>d&&(a=d),a<n&&(a=n);const p=this.subarray(n,a);return Object.setPrototypeOf(p,h.prototype),p};function D(l,n,a){if(l%1!==0||l<0)throw new RangeError("offset is not uint");if(l+n>a)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(n,a,d){n=n>>>0,a=a>>>0,d||D(n,a,this.length);let p=this[n],f=1,g=0;for(;++g<a&&(f*=256);)p+=this[n+g]*f;return p},h.prototype.readUintBE=h.prototype.readUIntBE=function(n,a,d){n=n>>>0,a=a>>>0,d||D(n,a,this.length);let p=this[n+--a],f=1;for(;a>0&&(f*=256);)p+=this[n+--a]*f;return p},h.prototype.readUint8=h.prototype.readUInt8=function(n,a){return n=n>>>0,a||D(n,1,this.length),this[n]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(n,a){return n=n>>>0,a||D(n,2,this.length),this[n]|this[n+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(n,a){return n=n>>>0,a||D(n,2,this.length),this[n]<<8|this[n+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(n,a){return n=n>>>0,a||D(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+this[n+3]*16777216},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(n,a){return n=n>>>0,a||D(n,4,this.length),this[n]*16777216+(this[n+1]<<16|this[n+2]<<8|this[n+3])},h.prototype.readBigUInt64LE=ne(function(n){n=n>>>0,ke(n,"offset");const a=this[n],d=this[n+7];(a===void 0||d===void 0)&&Ve(n,this.length-8);const p=a+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24,f=this[++n]+this[++n]*2**8+this[++n]*2**16+d*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),h.prototype.readBigUInt64BE=ne(function(n){n=n>>>0,ke(n,"offset");const a=this[n],d=this[n+7];(a===void 0||d===void 0)&&Ve(n,this.length-8);const p=a*2**24+this[++n]*2**16+this[++n]*2**8+this[++n],f=this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+d;return(BigInt(p)<<BigInt(32))+BigInt(f)}),h.prototype.readIntLE=function(n,a,d){n=n>>>0,a=a>>>0,d||D(n,a,this.length);let p=this[n],f=1,g=0;for(;++g<a&&(f*=256);)p+=this[n+g]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*a)),p},h.prototype.readIntBE=function(n,a,d){n=n>>>0,a=a>>>0,d||D(n,a,this.length);let p=a,f=1,g=this[n+--p];for(;p>0&&(f*=256);)g+=this[n+--p]*f;return f*=128,g>=f&&(g-=Math.pow(2,8*a)),g},h.prototype.readInt8=function(n,a){return n=n>>>0,a||D(n,1,this.length),this[n]&128?(255-this[n]+1)*-1:this[n]},h.prototype.readInt16LE=function(n,a){n=n>>>0,a||D(n,2,this.length);const d=this[n]|this[n+1]<<8;return d&32768?d|4294901760:d},h.prototype.readInt16BE=function(n,a){n=n>>>0,a||D(n,2,this.length);const d=this[n+1]|this[n]<<8;return d&32768?d|4294901760:d},h.prototype.readInt32LE=function(n,a){return n=n>>>0,a||D(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24},h.prototype.readInt32BE=function(n,a){return n=n>>>0,a||D(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]},h.prototype.readBigInt64LE=ne(function(n){n=n>>>0,ke(n,"offset");const a=this[n],d=this[n+7];(a===void 0||d===void 0)&&Ve(n,this.length-8);const p=this[n+4]+this[n+5]*2**8+this[n+6]*2**16+(d<<24);return(BigInt(p)<<BigInt(32))+BigInt(a+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24)}),h.prototype.readBigInt64BE=ne(function(n){n=n>>>0,ke(n,"offset");const a=this[n],d=this[n+7];(a===void 0||d===void 0)&&Ve(n,this.length-8);const p=(a<<24)+this[++n]*2**16+this[++n]*2**8+this[++n];return(BigInt(p)<<BigInt(32))+BigInt(this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+d)}),h.prototype.readFloatLE=function(n,a){return n=n>>>0,a||D(n,4,this.length),t.read(this,n,!0,23,4)},h.prototype.readFloatBE=function(n,a){return n=n>>>0,a||D(n,4,this.length),t.read(this,n,!1,23,4)},h.prototype.readDoubleLE=function(n,a){return n=n>>>0,a||D(n,8,this.length),t.read(this,n,!0,52,8)},h.prototype.readDoubleBE=function(n,a){return n=n>>>0,a||D(n,8,this.length),t.read(this,n,!1,52,8)};function N(l,n,a,d,p,f){if(!h.isBuffer(l))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>p||n<f)throw new RangeError('"value" argument is out of bounds');if(a+d>l.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(n,a,d,p){if(n=+n,a=a>>>0,d=d>>>0,!p){const $=Math.pow(2,8*d)-1;N(this,n,a,d,$,0)}let f=1,g=0;for(this[a]=n&255;++g<d&&(f*=256);)this[a+g]=n/f&255;return a+d},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(n,a,d,p){if(n=+n,a=a>>>0,d=d>>>0,!p){const $=Math.pow(2,8*d)-1;N(this,n,a,d,$,0)}let f=d-1,g=1;for(this[a+f]=n&255;--f>=0&&(g*=256);)this[a+f]=n/g&255;return a+d},h.prototype.writeUint8=h.prototype.writeUInt8=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,1,255,0),this[a]=n&255,a+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,2,65535,0),this[a]=n&255,this[a+1]=n>>>8,a+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,2,65535,0),this[a]=n>>>8,this[a+1]=n&255,a+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,4,4294967295,0),this[a+3]=n>>>24,this[a+2]=n>>>16,this[a+1]=n>>>8,this[a]=n&255,a+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,4,4294967295,0),this[a]=n>>>24,this[a+1]=n>>>16,this[a+2]=n>>>8,this[a+3]=n&255,a+4};function Fs(l,n,a,d,p){zs(n,d,p,l,a,7);let f=Number(n&BigInt(4294967295));l[a++]=f,f=f>>8,l[a++]=f,f=f>>8,l[a++]=f,f=f>>8,l[a++]=f;let g=Number(n>>BigInt(32)&BigInt(4294967295));return l[a++]=g,g=g>>8,l[a++]=g,g=g>>8,l[a++]=g,g=g>>8,l[a++]=g,a}function Ns(l,n,a,d,p){zs(n,d,p,l,a,7);let f=Number(n&BigInt(4294967295));l[a+7]=f,f=f>>8,l[a+6]=f,f=f>>8,l[a+5]=f,f=f>>8,l[a+4]=f;let g=Number(n>>BigInt(32)&BigInt(4294967295));return l[a+3]=g,g=g>>8,l[a+2]=g,g=g>>8,l[a+1]=g,g=g>>8,l[a]=g,a+8}h.prototype.writeBigUInt64LE=ne(function(n,a=0){return Fs(this,n,a,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=ne(function(n,a=0){return Ns(this,n,a,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(n,a,d,p){if(n=+n,a=a>>>0,!p){const O=Math.pow(2,8*d-1);N(this,n,a,d,O-1,-O)}let f=0,g=1,$=0;for(this[a]=n&255;++f<d&&(g*=256);)n<0&&$===0&&this[a+f-1]!==0&&($=1),this[a+f]=(n/g>>0)-$&255;return a+d},h.prototype.writeIntBE=function(n,a,d,p){if(n=+n,a=a>>>0,!p){const O=Math.pow(2,8*d-1);N(this,n,a,d,O-1,-O)}let f=d-1,g=1,$=0;for(this[a+f]=n&255;--f>=0&&(g*=256);)n<0&&$===0&&this[a+f+1]!==0&&($=1),this[a+f]=(n/g>>0)-$&255;return a+d},h.prototype.writeInt8=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,1,127,-128),n<0&&(n=255+n+1),this[a]=n&255,a+1},h.prototype.writeInt16LE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,2,32767,-32768),this[a]=n&255,this[a+1]=n>>>8,a+2},h.prototype.writeInt16BE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,2,32767,-32768),this[a]=n>>>8,this[a+1]=n&255,a+2},h.prototype.writeInt32LE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,4,2147483647,-2147483648),this[a]=n&255,this[a+1]=n>>>8,this[a+2]=n>>>16,this[a+3]=n>>>24,a+4},h.prototype.writeInt32BE=function(n,a,d){return n=+n,a=a>>>0,d||N(this,n,a,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[a]=n>>>24,this[a+1]=n>>>16,this[a+2]=n>>>8,this[a+3]=n&255,a+4},h.prototype.writeBigInt64LE=ne(function(n,a=0){return Fs(this,n,a,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=ne(function(n,a=0){return Ns(this,n,a,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ms(l,n,a,d,p,f){if(a+d>l.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("Index out of range")}function js(l,n,a,d,p){return n=+n,a=a>>>0,p||Ms(l,n,a,4),t.write(l,n,a,d,23,4),a+4}h.prototype.writeFloatLE=function(n,a,d){return js(this,n,a,!0,d)},h.prototype.writeFloatBE=function(n,a,d){return js(this,n,a,!1,d)};function qs(l,n,a,d,p){return n=+n,a=a>>>0,p||Ms(l,n,a,8),t.write(l,n,a,d,52,8),a+8}h.prototype.writeDoubleLE=function(n,a,d){return qs(this,n,a,!0,d)},h.prototype.writeDoubleBE=function(n,a,d){return qs(this,n,a,!1,d)},h.prototype.copy=function(n,a,d,p){if(!h.isBuffer(n))throw new TypeError("argument should be a Buffer");if(d||(d=0),!p&&p!==0&&(p=this.length),a>=n.length&&(a=n.length),a||(a=0),p>0&&p<d&&(p=d),p===d||n.length===0||this.length===0)return 0;if(a<0)throw new RangeError("targetStart out of bounds");if(d<0||d>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),n.length-a<p-d&&(p=n.length-a+d);const f=p-d;return this===n&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(a,d,p):Uint8Array.prototype.set.call(n,this.subarray(d,p),a),f},h.prototype.fill=function(n,a,d,p){if(typeof n=="string"){if(typeof a=="string"?(p=a,a=0,d=this.length):typeof d=="string"&&(p=d,d=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!h.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(n.length===1){const g=n.charCodeAt(0);(p==="utf8"&&g<128||p==="latin1")&&(n=g)}}else typeof n=="number"?n=n&255:typeof n=="boolean"&&(n=Number(n));if(a<0||this.length<a||this.length<d)throw new RangeError("Out of range index");if(d<=a)return this;a=a>>>0,d=d===void 0?this.length:d>>>0,n||(n=0);let f;if(typeof n=="number")for(f=a;f<d;++f)this[f]=n;else{const g=h.isBuffer(n)?n:h.from(n,p),$=g.length;if($===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(f=0;f<d-a;++f)this[f+a]=g[f%$]}return this};const $e={};function Gt(l,n,a){$e[l]=class extends a{constructor(){super(),Object.defineProperty(this,"message",{value:n.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${l}]`,this.stack,delete this.name}get code(){return l}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${l}]: ${this.message}`}}}Gt("ERR_BUFFER_OUT_OF_BOUNDS",function(l){return l?`${l} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Gt("ERR_INVALID_ARG_TYPE",function(l,n){return`The "${l}" argument must be of type number. Received type ${typeof n}`},TypeError),Gt("ERR_OUT_OF_RANGE",function(l,n,a){let d=`The value of "${l}" is out of range.`,p=a;return Number.isInteger(a)&&Math.abs(a)>2**32?p=Vs(String(a)):typeof a=="bigint"&&(p=String(a),(a>BigInt(2)**BigInt(32)||a<-(BigInt(2)**BigInt(32)))&&(p=Vs(p)),p+="n"),d+=` It must be ${n}. Received ${p}`,d},RangeError);function Vs(l){let n="",a=l.length;const d=l[0]==="-"?1:0;for(;a>=d+4;a-=3)n=`_${l.slice(a-3,a)}${n}`;return`${l.slice(0,a)}${n}`}function Mi(l,n,a){ke(n,"offset"),(l[n]===void 0||l[n+a]===void 0)&&Ve(n,l.length-(a+1))}function zs(l,n,a,d,p,f){if(l>a||l<n){const g=typeof n=="bigint"?"n":"";let $;throw n===0||n===BigInt(0)?$=`>= 0${g} and < 2${g} ** ${(f+1)*8}${g}`:$=`>= -(2${g} ** ${(f+1)*8-1}${g}) and < 2 ** ${(f+1)*8-1}${g}`,new $e.ERR_OUT_OF_RANGE("value",$,l)}Mi(d,p,f)}function ke(l,n){if(typeof l!="number")throw new $e.ERR_INVALID_ARG_TYPE(n,"number",l)}function Ve(l,n,a){throw Math.floor(l)!==l?(ke(l,a),new $e.ERR_OUT_OF_RANGE("offset","an integer",l)):n<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${n}`,l)}const ji=/[^+/0-9A-Za-z-_]/g;function qi(l){if(l=l.split("=")[0],l=l.trim().replace(ji,""),l.length<2)return"";for(;l.length%4!==0;)l=l+"=";return l}function Yt(l,n){n=n||1/0;let a;const d=l.length;let p=null;const f=[];for(let g=0;g<d;++g){if(a=l.charCodeAt(g),a>55295&&a<57344){if(!p){if(a>56319){(n-=3)>-1&&f.push(239,191,189);continue}else if(g+1===d){(n-=3)>-1&&f.push(239,191,189);continue}p=a;continue}if(a<56320){(n-=3)>-1&&f.push(239,191,189),p=a;continue}a=(p-55296<<10|a-56320)+65536}else p&&(n-=3)>-1&&f.push(239,191,189);if(p=null,a<128){if((n-=1)<0)break;f.push(a)}else if(a<2048){if((n-=2)<0)break;f.push(a>>6|192,a&63|128)}else if(a<65536){if((n-=3)<0)break;f.push(a>>12|224,a>>6&63|128,a&63|128)}else if(a<1114112){if((n-=4)<0)break;f.push(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}else throw new Error("Invalid code point")}return f}function Vi(l){const n=[];for(let a=0;a<l.length;++a)n.push(l.charCodeAt(a)&255);return n}function zi(l,n){let a,d,p;const f=[];for(let g=0;g<l.length&&!((n-=2)<0);++g)a=l.charCodeAt(g),d=a>>8,p=a%256,f.push(p),f.push(d);return f}function Hs(l){return e.toByteArray(qi(l))}function mt(l,n,a,d){let p;for(p=0;p<d&&!(p+a>=n.length||p>=l.length);++p)n[p+a]=l[p];return p}function Q(l,n){return l instanceof n||l!=null&&l.constructor!=null&&l.constructor.name!=null&&l.constructor.name===n.name}function Kt(l){return l!==l}const Hi=function(){const l="0123456789abcdef",n=new Array(256);for(let a=0;a<16;++a){const d=a*16;for(let p=0;p<16;++p)n[d+p]=l[a]+l[p]}return n}();function ne(l){return typeof BigInt>"u"?Wi:l}function Wi(){throw new Error("BigInt not supported")}})(ks);const ha=P`
  .single-comment {
    display: flex;
    flex-direction: row;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 6px;
    width: 23em;
    border-radius: var(--default-border-radius);
    margin-bottom: 10px;
    box-shadow: var(--box-shadow);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .comment-left,
  .comment-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .details-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5em;
  }

  .details {
    padding: 5px;
  }

  .comment-name {
    font-weight: 600;
    margin: 0;
    padding: 0;
    margin-right: 0.5em;
    font-size: 0.8em;
  }

  .comment-time {
    font-size: var(--small-size);
    color: var(--subtext-color);
    margin: 0;
    padding: 0;
  }

  .comment-message {
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }

  .track-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--track-background-color);
    padding: 5px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .track-info:hover {
    background-color: var(--track-hover-background-color);
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

  .track-name {
    font-size: 0.8em;
    font-weight: 500;
  }

  .track-artist {
    font-size: 0.7em;
    color: var(--subtext-color);
  }

  .track-image {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    object-fit: cover;
  }
`;var da=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,jt=(s,e,t,r)=>{for(var i=r>1?void 0:r?ua(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&da(e,t,i),i};let Ie=class extends S{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(s){const e=`https://api.spotify.com/v1/tracks/${s}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const r=await t.json();return this.currentTracks=[...this.currentTracks,r],r}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+ks.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const r=await t.json();this.accessToken=r.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var s;super.connectedCallback(),(s=this.comment)!=null&&s.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(s){try{this.currentTracks=[];const e=s.map(r=>this.findSong(r)),t=await Promise.all(e);this.currentTracks=t.filter(r=>r!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return y`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{userName:s,commentTime:e,commentMessage:t}=this.comment,i=new Date(e).toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"});return y`
      <section class="single-comment">
        <section class="comment-left">
          <section class="details">
            <section class="details-header">
              <p class="comment-name">${s}</p>
              <p class="comment-time">${i}</p>
            </section>
            <p class="comment-message">${t}</p>
          </section>
        </section>
        <section class="comment-right">
          ${this.currentTracks.map(o=>y`
              <div class="track-info">
                <img
                  src="${o.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${o.name}</p>
                  <p class="track-artist">
                    ${o.artists.map(c=>c.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};Ie.styles=[ha];jt([x({type:Object})],Ie.prototype,"comment",2);jt([x({type:String})],Ie.prototype,"accessToken",2);jt([_()],Ie.prototype,"currentTracks",2);Ie=jt([A("comment-card")],Ie);const pa=P`
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
  .search-form {
    margin-bottom: 15px;
  }

  .search-form button,
  comment-message-form button {
    padding: 2px 20px 2px 20px;
    margin-left: 10px;
    background-color: var(--button-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .search-form button:hover {
    background-color: var(--button-hover-color);
  }
  .search-bar-form {
    display: flex;
    flex-direction: row;
  }
  comment-message-form button {
    padding: 6px 20px;
    margin-left: 1em;
  }
  .search-and-selected {
    display: flex;
    flex-direction: row;
  }

  .selected-tracks,
  .query-results {
    width: 50%;
  }
  .query-results h3,
  .selected-tracks h3 {
    color: var(--text-color);
    font-size: 1.1em;
    font-weight: 300;
    margin: 0;
    margin-top: 6px;
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
  .comment-message-form {
    display: flex;
    flex-direction: row;
    width: 99%;
  }

  .expanded-window {
    background: var(--menu-color);
    border-left: 2px solid var(--sub-menu-color);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0.3em 2em 1em 2em;
  }

  .margin-left {
    margin-left: 1.51em;
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

  .game-song-button {
    background-color: var(--button-color);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 1em 0.7em;
    cursor: pointer;
    margin-top: 1em;
  }
`;function fa(s,e,t){const r=s.selectedTracks.findIndex(i=>i.id===e.id);t?r>-1?s.selectedTracks=[...s.selectedTracks.slice(0,r),...s.selectedTracks.slice(r+1)]:s.selectedTracks=[...s.selectedTracks,e]:r>-1?s.selectedTracks=[]:s.selectedTracks=[e]}function ui(s){s.topTracks=[]}function pi(s){s.selectedTracks=[]}async function ma(s,e){const t=await fetch(`https://api.spotify.com/v1/artists/${e}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${s.accessToken}`,"Content-Type":"application/json"}});if(t.ok){const r=await t.json();r&&r.tracks?s.topTracks=r.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${t.statusText}`)}async function fi(s){const r=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+ks.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(r.ok){const i=await r.json();s.accessToken=i.access_token}else console.error("Spotify authentication failed")}async function mi(s){if(!s.requestedSearchQuery.trim())return;const e=`https://api.spotify.com/v1/search?q=${encodeURIComponent(s.requestedSearchQuery)}&type=track&limit=10`;try{await fi(s);const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${s.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const r=await t.json();r.tracks.items.length>0?s.topTracks=r.tracks.items:(s.topTracks=[],alert("No tracks found. Please try another search."))}catch(t){console.error("Error searching for tracks:",t)}}async function ga(s,e){s.preventDefault();const t=s.target,r=new FormData(t);e.requestedSearchQuery=r.get("inputted-artist-name"),await mi(e)}async function ba(s,e){var m;s.preventDefault(),e.submissionSuccess=null;const t=s.target,r=new FormData(t),i="http://localhost:3000";let o=r.get("input-comment");const c=e.selectedTracks.map(b=>b.id),h=`${i}/posts/${(m=e.post)==null?void 0:m._id}`,u={userName:e.using.name,commentTime:new Date,commentMessage:o,SongIDs:c};try{if((await fetch(h,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).ok)console.log("Comment successfully added"),ui(e),pi(e),e.submissionSuccess=!0,t.reset(),e.dispatchEvent(new CustomEvent("handle-comment-added",{bubbles:!0,composed:!0}));else throw new Error("Failed to post comment")}catch(b){console.error("Error:",b),e.submissionSuccess=!1}}const ya=P`
  .search-and-selected {
    display: flex;
    flex-direction: row;
  }
  .selected-tracks,
  .query-results {
    width: 50%;
  }
  .query-results h3,
  .selected-tracks h3 {
    color: var(--text-color);
    font-size: 1.1em;
    font-weight: 300;
    margin: 0;
    margin-top: 6px;
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
  .expanded-content {
    padding-top: 20px; /* Space above the content */
  }
`;var wa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,As=(s,e,t,r)=>{for(var i=r>1?void 0:r?va(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&wa(e,t,i),i};let it=class extends S{constructor(){super(...arguments),this.topTracks=[],this.selectedTracks=[]}_sendClearTracks(s){console.log("wanting to clear ",s," tracks"),this.dispatchEvent(new CustomEvent("clear-tracks",{detail:{topOrSelected:s},bubbles:!0,composed:!0}))}render(){return y`
      <section class="search-and-selected">
        <section class="query-results">
          <h3 class="search-results">Search Results</h3>
          ${this.topTracks.length>0?y`<div class="track-box-search-results">
                  ${this.topTracks.slice(0,5).map(s=>y`<track-card .track=${s}></track-card>`)}
                </div>
                <div class="clear-results-section">
                  <button
                    class="clear-results"
                    @click=${()=>this._sendClearTracks("top")}
                  >
                    Clear Results
                  </button>
                </div>`:y`<div class="track-box-search-results"></div>
                <div class="clear-results-section">
                  <button
                    class="clear-results"
                    @click=${()=>this._sendClearTracks("top")}
                  >
                    Clear Results
                  </button>
                </div>`}
        </section>
        <section class="selected-tracks">
          <h3>Selected Songs</h3>
          <div class="track-box-selected-tracks">
            ${this.selectedTracks.map(s=>y`<track-card .track=${s}></track-card>`)}
          </div>
          <div class="clear-selected-tracks-section">
            <button
              class="clear-selected-tracks"
              @click=${()=>this._sendClearTracks("selected")}
            >
              Clear Selected Tracks
            </button>
          </div>
        </section>
      </section>
    `}};it.styles=[ya];As([_()],it.prototype,"topTracks",2);As([_()],it.prototype,"selectedTracks",2);it=As([A("multi-song-ui")],it);const _a=P`
  .search-and-selected {
    display: flex;
    flex-direction: column;
  }
  .selected-tracks,
  .query-results {
    width: 100%;
  }
  .query-results h3,
  .selected-tracks h3 {
    color: var(--text-color);
    font-size: 1.1em;
    font-weight: 300;
    margin: 0;
    margin-top: 6px;
  }
  .track-box-selected-tracks,
  .track-box-search-results {
    background: var(--sub-menu-color);
    border-radius: 12px;
    padding: 10px;
    width: 92%;
    height: 9em; /* overflows if smaller */
    margin-top: 10px;
    overflow: auto; /* Allow scrolling if content exceeds container size */
  }

  /* update height to reflect only one song being chosen*/
  .track-box-selected-tracks {
    height: 3em;
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
  .expanded-content {
    padding-top: 20px; /* Space above the content */
  }

  .singleSongMessage {
    color: var(--subtext-color);
    font-size: 0.8em;
    margin: 0.25em 0 0.6em 0;
    padding: 0;
  }

  /* FIX: id to override other header styling, was too lazy to fix cascade issue*/
  #selectedSongHeader {
    margin-top: 1em;
  }
`;var xa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Ts=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ea(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&xa(e,t,i),i};let nt=class extends S{constructor(){super(...arguments),this.topTracks=[],this.selectedTracks=[]}_sendClearTracks(s){console.log("wanting to clear ",s," tracks"),this.dispatchEvent(new CustomEvent("clear-tracks",{detail:{topOrSelected:s},bubbles:!0,composed:!0}))}render(){return y`
      <section class="search-and-selected">
        <section class="query-results">
          <h3 class="search-results">Search Results</h3>
          ${this.topTracks.length>0?y`<div class="track-box-search-results">
                  ${this.topTracks.slice(0,5).map(s=>y`<track-card .track=${s}></track-card>`)}
                </div>
                <div class="clear-results-section">
                  <button
                    class="clear-results"
                    @click=${()=>this._sendClearTracks("top")}
                  >
                    Clear Results
                  </button>
                </div>`:y`<div class="track-box-search-results"></div>
                <div class="clear-results-section">
                  <button
                    class="clear-results"
                    @click=${()=>this._sendClearTracks("top")}
                  >
                    Clear Results
                  </button>
                </div>`}
        </section>
        <section class="selected-tracks">
          <h3 id="selectedSongHeader">Selected Song</h3>
          <p class="singleSongMessage">
            You may only choose to submit one song at a time. Selecting another
            song will replace any current selection.
          </p>
          <div class="track-box-selected-tracks">
            ${this.selectedTracks.map(s=>y`<track-card .track=${s}></track-card>`)}
          </div>
          <div class="clear-selected-tracks-section">
            <button
              class="clear-selected-tracks"
              @click=${()=>this._sendClearTracks("selected")}
            >
              Clear Selected Song
            </button>
          </div>
        </section>
      </section>
    `}};nt.styles=[_a];Ts([_()],nt.prototype,"topTracks",2);Ts([_()],nt.prototype,"selectedTracks",2);nt=Ts([A("single-song-ui")],nt);var $a=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,H=(s,e,t,r)=>{for(var i=r>1?void 0:r?ka(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&$a(e,t,i),i};let M=class extends S{constructor(){super(),this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.hasMargin=!1,this.expandedClass="feed-single-post",this.multiPicker=!1,this.addEventListener("track-selected",s=>{const e=s;this._selectTrack(e.detail.track,this.multiPicker)}),this.addEventListener("clear-tracks",s=>{console.log("Within Clear Tracks Listener"),s.detail.topOrSelected==="top"?(console.log("Within Top, executing clear top tracks"),this._clearTopTracks()):(console.log("Within Selected, executing clear selected tracks"),this._clearSelectedTracks())})}async _authenticate(){await fi(this)}async _submitCommentToDatabase(s){await ba(s,this)}_handleSubmit(s){ga(s,this)}_clearTopTracks(){ui(this)}_clearSelectedTracks(){pi(this)}_selectTrack(s,e){fa(this,s,e)}async fetchTopTracks(s){await ma(this,s)}async searchSpotify(){await mi(this)}_submitSongRecommendationToGameState(s){s.preventDefault(),console.log("submit song recommendation clicked"),this.selectedTracks.length==1?(console.log("the selected track, ",this.selectedTracks[0]),this.dispatchEvent(new CustomEvent("single-track-submitted",{detail:{track:this.selectedTracks[0]},bubbles:!0,composed:!0}))):console.log("no track selected, cannot submit form")}render(){return y`
      <section
        class="${this.hasMargin?"margin-left expanded-window":"expanded-window"}"
      >
        <section class="search-form">
          <form class="search-bar-form" @submit=${this._handleSubmit}>
            <input
              type="text"
              id="inputted-artist-name"
              name="inputted-artist-name"
              placeholder="Search for a song, artist, album... anything!"
            />
            <button class="recommend-songs" type="submit">Search</button>
          </form>
        </section>
        ${this.multiPicker?y`<multi-song-ui
              .selectedTracks=${this.selectedTracks}
              .topTracks=${this.topTracks}
            ></multi-song-ui>`:y`<single-song-ui
              .selectedTracks=${this.selectedTracks}
              .topTracks=${this.topTracks}
            ></single-song-ui>`}
        ${this.multiPicker?y`<section class="expanded-content">
              <section class="recommend-form">
                ${this.submissionSuccess===!0?y`<p>Submission successful!</p>`:""}
                ${this.submissionSuccess===!1?y`<p>Submission failed. Please try again.</p>`:""}
                <form
                  class="comment-message-form"
                  @submit=${this._submitCommentToDatabase}
                >
                  <input
                    type="text"
                    id="input-comment"
                    name="input-comment"
                    placeholder="Leave a message..."
                  />
                  <button class="recommend-songs" type="submit">Submit</button>
                </form>
              </section>
            </section>`:y`
              <button
                class="game-song-button"
                type="submit"
                @click=${this._submitSongRecommendationToGameState}
              >
                Submit Your Song Recommendation
              </button>
            `}
      </section>
    `}};M.styles=[pa];H([_()],M.prototype,"submissionSuccess",2);H([x()],M.prototype,"expandedText",2);H([x({type:String})],M.prototype,"requestedSearchQuery",2);H([x({type:String})],M.prototype,"accessToken",2);H([x()],M.prototype,"topTracks",2);H([x()],M.prototype,"selectedTracks",2);H([x({type:Object})],M.prototype,"post",2);H([_()],M.prototype,"using",2);H([x({type:Boolean})],M.prototype,"hasMargin",2);H([_()],M.prototype,"expandedClass",2);H([x({type:Boolean})],M.prototype,"multiPicker",2);M=H([A("song-picker")],M);function Sa(s){var o;const e=(o=s.post)!=null&&o.postTime?new Date(s.post.postTime):void 0;if(!e)return console.error("Posted time is undefined"),"Post time cannot be found.";let i=(new Date().getTime()-e.getTime())/(1e3*60*60);return i=Math.round(i),i<1?"Less than an hour ago.":i>23?`${i%24} days ago`:`${i} hours ago`}var Aa=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,X=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ta(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Aa(e,t,i),i};let q=class extends S{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.commentsSectionExpanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.expandedClass="feed-single-post",this.addEventListener("handle-comment-added",()=>{this._handleCommentAdded()})}_expand(){this.commentsSectionExpanded=!1,this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_showComments(){this.commentsSectionExpanded=!this.commentsSectionExpanded,this.expanded=!1,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}connectedCallback(){var s;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((s=this.post)==null?void 0:s.comments)||[])}async _handleCommentAdded(){var e;console.log("Comment Created, Now Refreshing Component");const s="http://localhost:3000";if(console.log("SERVER URL FROM COMMENT ADDED: ",s),!((e=this.post)!=null&&e._id)){console.error("Post ID is undefined.");return}try{const t=await fetch(`${s}/comments/${this.post._id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch comments");const r=await t.json();this.getPostComments=[...r],setTimeout(()=>{this.expanded=!this.expanded},1e3)}catch(t){console.error("Error fetching comments:",t)}}_calculateTimeFromDate(){Sa(this)}render(){var t,r,i,o,c,h,u;const s=this._calculateTimeFromDate(),e=((t=this.getPostComments)==null?void 0:t.length)??0;return y`
      <section class="${this.expandedClass}">
        <section class="profile-name-time">
          <section class="post-content">
            <section class="individual-post-profile-image">
              <img
                src="/images/${(r=this.post)==null?void 0:r.profileImage}.png"
                alt="${(i=this.post)==null?void 0:i.profileDescription}"
              />
              ${this.expanded?y`<div class="line-decoration"></div>`:y`<div></div>`}
            </section>
            <section class="non-image-content">
              <section class="name-and-time">
                <h3 class="feed-name">${(o=this.post)==null?void 0:o.userName}</h3>
                <p class="time-posted">${s}</p>
              </section>
              <p class="message">${(c=this.post)==null?void 0:c.postMessage}</p>
              <button class="expand-unexpand" @click=${this._expand}>
                ${this.expanded?"Close song recommendation form.":"Recommend a song."}
              </button>
              <button
                class="expand-unexpand-right"
                @click=${this._showComments}
              >
                ${this.commentsSectionExpanded?"Close comments.":`View (${(h=this.getPostComments)==null?void 0:h.length}) comments.`}
              </button>
            </section>
          </section>
        </section>

        ${this.commentsSectionExpanded&&e>0?y` <section class="comment-list">
              ${(u=this.getPostComments)==null?void 0:u.map(m=>y`
                  <comment-card .comment=${m}></comment-card>
                `)}
            </section>`:""}
        ${this.commentsSectionExpanded&&e<=0?y` <section class="comment-list">
              <p class="subtext">There are no comments on this post yet.</p>
            </section>`:""}
        ${this.expanded?y` <song-picker
              .post=${this.post}
              .multiPicker=${!0}
              .hasMargin=${!0}
              .using=${this.using}
            ></song-picker>`:""}
      </section>
    `}};q.styles=Qo;X([x({type:Object})],q.prototype,"post",2);X([_()],q.prototype,"getPostComments",2);X([_()],q.prototype,"expanded",2);X([_()],q.prototype,"commentsSectionExpanded",2);X([_()],q.prototype,"submissionSuccess",2);X([x()],q.prototype,"expandedText",2);X([x({type:String})],q.prototype,"requestedSearchQuery",2);X([x({type:String})],q.prototype,"accessToken",2);X([_()],q.prototype,"expandedClass",2);X([_()],q.prototype,"using",2);q=X([A("feed-post")],q);var Pa=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,Ps=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ca(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Pa(e,t,i),i};let ot=class extends S{constructor(){super(...arguments),this.posts=[]}render(){return y`
      <div class="posts-container">
        ${this.posts.map(s=>y` <feed-post
              .using=${this.using}
              .hasMargin=${!0}
              .post=${s}
            ></feed-post>`)}
      </div>
    `}};ot.styles=[Xo];Ps([x({type:Array})],ot.prototype,"posts",2);Ps([_()],ot.prototype,"using",2);ot=Ps([A("feed-post-list")],ot);const Ra=P`
  :host {
    display: block;
  }

  .post-button,
  .close-form {
    background: var(--button-color);
    color: white;
    border: none;
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
    width: 32.5em;
    border: 1.5px solid var(--section-border-color);
    padding: 1.25em;
    margin: 0;
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
    color: #155724;
    background-color: #d4edda;
    padding: 12px;
    border-radius: 8px;
    font-size: 0.8em;
    border: 1px solid #c3e6cb;
    margin: 10px 0;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 35em;
  }

  .post-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;var Oa=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,dt=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ua(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Oa(e,t,i),i};let we=class extends S{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(s){s.preventDefault(),this.submissionSuccess=!1;const e=s.target;let r=new FormData(e).get("input-message");r?(console.log("submitting post!"),this._sendPostRequest(r,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(s,e){if(!this.using||!this.using._id||!this.using.name||!this.using.profileDescription||!this.using.profileImage)return console.error("User information is incomplete."),!1;const t={userid:this.using._id,userName:this.using.name,profileImage:this.using.profileImage,profileDescription:this.using.profileDescription,postTime:new Date,postMessage:s,comments:[]};console.log("new post: ",t);try{if((await fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,setTimeout(()=>{this.submissionSuccess=!1},2500),this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(r){console.error("Error: ",r),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const s=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",s),this.dispatchEvent(s)}render(){return y`
      ${this.expanded?y`
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
              ${this.errorMessage?y`<p class="error-message">
                      Message input cannot be blank.
                    </p>`:""}
              <button class="post-button">Submit your post!</button>
            </form>
          </section>`:y` ${this.submissionSuccess?y`<p class="submit-success-message">
                  post successfully submitted
                </p>`:""}
            <button class="post-button" @click=${this._togglePost}>
              Create New Post &#43;
            </button>`}
    `}};we.styles=[Ra];dt([_()],we.prototype,"expanded",2);dt([_()],we.prototype,"using",2);dt([_()],we.prototype,"submissionSuccess",2);dt([_()],we.prototype,"errorMessage",2);we=dt([A("create-post")],we);var Ba=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,qt=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ia(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Ba(e,t,i),i};let Le=class extends S{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchPostDataFromDatabase()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchPostDataFromDatabase()}async _fetchPostDataFromDatabase(){console.log("fetching posts!");const s="http://localhost:3000";try{const e=await fetch(`${s}/posts`);if(e.ok){const t=await e.json();this.posts=t,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",e.status)}catch(e){console.error("Error fetching posts:",e)}}render(){var s,e;return y`
      <section class="feed-container">
        <section class="nav-section">
          <h3 class="nav-header">Navigation</h3>
          <ul class="nav">
            <li class="navlink">
              <a href="app/chatRoom/${(s=this.using)==null?void 0:s.userid}">Chat Room</a>
            </li>
            <li class="navlink">
              <a href="app/profile/${(e=this.using)==null?void 0:e.userid}">Your Profile</a>
            </li>
          </ul>
        </section>
        <section class="main-posts-section">
          <h2 class="feed-header">Song Recommendation Feed</h2>
          <create-post .using=${this.using}></create-post>
          <feed-post-list
            .using=${this.using}
            .posts=${this.posts}
          ></feed-post-list>
        </section>
      </section>
    `}};Le.styles=[Jo];qt([_()],Le.prototype,"posts",2);qt([_()],Le.prototype,"using",2);qt([x({type:String})],Le.prototype,"userId",2);Le=qt([A("main-feed")],Le);var La=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Fa=(s,e,t,r)=>{for(var i=r>1?void 0:r?Da(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&La(e,t,i),i};let _r=class extends Fe{get profile(){return this.getFromModel("profile")}firstUpdated(s){console.log("******* HOME PAGE FIRST UPDATED ********"),L._theUser.authenticated?(console.log("___ dispatching ProfileSelected____"),this.dispatchMessage({type:"ProfileSelected",userid:L._theUser.username})):console.log("***** this.userid is undefined *****")}render(){return console.log("this.profile within home page",this.profile),y`
      <section class="feed-page">
        <main-feed .using=${this.profile}></main-feed>
      </section>
    `}};_r=Fa([A("home-page")],_r);const Na=P`
  :host {
    display: block;
    font-family: "Arial", sans-serif;
    text-align: center;
    padding: 2em;
    color: #333;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2em;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1.5em;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  button {
    padding: 0.75em 1.5em;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
`;var Ma=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,qa=(s,e,t,r)=>{for(var i=r>1?void 0:r?ja(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Ma(e,t,i),i};let cs=class extends Fe{get profile(){return this.getFromModel("profile")}navigateTo(s){J.go(s)}firstUpdated(s){console.log("******* HOME PAGE FIRST UPDATED ********"),L._theUser.authenticated?(console.log("___ dispatching ProfileSelected____"),this.dispatchMessage({type:"ProfileSelected",userid:L._theUser.username})):console.log("***** this.userid is undefined *****")}render(){var s;return console.log("within not found page this.profile ",this.profile),y`
      <section class="container">
        <h1>Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist. Here are some helpful
          links:
        </p>
        <div class="links">
          <button @click="${()=>this.navigateTo("/app/home")}">Home</button>
          ${(s=this.profile)!=null&&s.userid?y`
                <button
                  @click="${()=>{var e;return this.navigateTo(`app/chatRoom/${(e=this.profile)==null?void 0:e.userid}`)}}"
                >
                  Chat Room
                </button>
                <button
                  @click="${()=>{var e;return this.navigateTo(`app/profile/${(e=this.profile)==null?void 0:e.userid}`)}}"
                >
                  Profile
                </button>
              `:y`<p>Profile not found.</p>`}
        </div>
      </section>
    `}};cs.styles=[Na];cs=qa([A("not-found-page")],cs);const Va=P`
  .page-content {
    display: flex;
    justify-content: center;
    width: 70%;
    margin: auto;
  }

  .descriptionAndForm {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .formHeader {
    margin: 0;
    padding: 0;
    margin-bottom: 0.5em;
  }

  .formParagraph {
    margin: 0;
    padding: 0;
  }

  .description {
    padding: 2.5em;
    padding-bottom: 0.5em;
  }
`;var za=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,Wa=(s,e,t,r)=>{for(var i=r>1?void 0:r?Ha(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&za(e,t,i),i};let ls=class extends Fe{get profile(){return this.getFromModel("profile")}firstUpdated(s){console.log("******* CREATE PROFILE FIRST UPDATED ********"),L._theUser.authenticated?(console.log("___ dispatching ProfileSelected____"),this.dispatchMessage({type:"ProfileSelected",userid:L._theUser.username})):console.log("***** this.userid is undefined *****")}attributeChangedCallback(s,e,t){s==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(s,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",s=>this._handleProfileUpdate(s))}_handleProfileUpdate(s){console.log("Profile updated",s.detail.profile),L._theUser.authenticated?this.dispatchMessage({type:"ProfileSaved",userid:L._theUser.username,profile:s.detail.profile}):console.error("Profile is undefined within model.")}render(){return console.log("this.profile within createprofile page",this.profile),y`
      <section class="page-content">
        <div class="descriptionAndForm">
          <div class="description">
            <h2 class="formHeader">Please set up your profile.</h2>
            <p class="formParagraph">
              You're almost ready to start matching the vibe, just take a few
              seconds to fill in some more details about yourself!
            </p>
          </div>
          <edit-profile-form
            .redirectAfterSubmit=${!0}
            .profile=${this.profile}
          ></edit-profile-form>
        </div>
      </section>
    `}};ls.styles=Va;ls=Wa([A("create-profile-page")],ls);const Ga=P`
  :host {
    display: block;
  }
  .gameFeature {
    margin: auto;
  }
`,se=Object.create(null);se.open="0";se.close="1";se.ping="2";se.pong="3";se.message="4";se.upgrade="5";se.noop="6";const kt=Object.create(null);Object.keys(se).forEach(s=>{kt[se[s]]=s});const hs={type:"error",data:"parser error"},gi=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",bi=typeof ArrayBuffer=="function",yi=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Cs=({type:s,data:e},t,r)=>gi&&e instanceof Blob?t?r(e):xr(e,r):bi&&(e instanceof ArrayBuffer||yi(e))?t?r(e):xr(new Blob([e]),r):r(se[s]+(e||"")),xr=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function Er(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let ss;function Ya(s,e){if(gi&&s.data instanceof Blob)return s.data.arrayBuffer().then(Er).then(e);if(bi&&(s.data instanceof ArrayBuffer||yi(s.data)))return e(Er(s.data));Cs(s,!1,t=>{ss||(ss=new TextEncoder),e(ss.encode(t))})}const $r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",We=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<$r.length;s++)We[$r.charCodeAt(s)]=s;const Ka=s=>{let e=s.length*.75,t=s.length,r,i=0,o,c,h,u;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const m=new ArrayBuffer(e),b=new Uint8Array(m);for(r=0;r<t;r+=4)o=We[s.charCodeAt(r)],c=We[s.charCodeAt(r+1)],h=We[s.charCodeAt(r+2)],u=We[s.charCodeAt(r+3)],b[i++]=o<<2|c>>4,b[i++]=(c&15)<<4|h>>2,b[i++]=(h&3)<<6|u&63;return m},Ja=typeof ArrayBuffer=="function",Rs=(s,e)=>{if(typeof s!="string")return{type:"message",data:wi(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:Xa(s.substring(1),e)}:kt[t]?s.length>1?{type:kt[t],data:s.substring(1)}:{type:kt[t]}:hs},Xa=(s,e)=>{if(Ja){const t=Ka(s);return wi(t,e)}else return{base64:!0,data:s}},wi=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},vi="",Qa=(s,e)=>{const t=s.length,r=new Array(t);let i=0;s.forEach((o,c)=>{Cs(o,!1,h=>{r[c]=h,++i===t&&e(r.join(vi))})})},Za=(s,e)=>{const t=s.split(vi),r=[];for(let i=0;i<t.length;i++){const o=Rs(t[i],e);if(r.push(o),o.type==="error")break}return r};function ec(){return new TransformStream({transform(s,e){Ya(s,t=>{const r=t.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const o=new DataView(i.buffer);o.setUint8(0,126),o.setUint16(1,r)}else{i=new Uint8Array(9);const o=new DataView(i.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let rs;function bt(s){return s.reduce((e,t)=>e+t.length,0)}function yt(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let i=0;i<e;i++)t[i]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function tc(s,e){rs||(rs=new TextDecoder);const t=[];let r=0,i=-1,o=!1;return new TransformStream({transform(c,h){for(t.push(c);;){if(r===0){if(bt(t)<1)break;const u=yt(t,1);o=(u[0]&128)===128,i=u[0]&127,i<126?r=3:i===126?r=1:r=2}else if(r===1){if(bt(t)<2)break;const u=yt(t,2);i=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),r=3}else if(r===2){if(bt(t)<8)break;const u=yt(t,8),m=new DataView(u.buffer,u.byteOffset,u.length),b=m.getUint32(0);if(b>Math.pow(2,21)-1){h.enqueue(hs);break}i=b*Math.pow(2,32)+m.getUint32(4),r=3}else{if(bt(t)<i)break;const u=yt(t,i);h.enqueue(Rs(o?u:rs.decode(u),e)),r=0}if(i===0||i>s){h.enqueue(hs);break}}}})}const _i=4;function I(s){if(s)return sc(s)}function sc(s){for(var e in I.prototype)s[e]=I.prototype[e];return s}I.prototype.on=I.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};I.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};I.prototype.off=I.prototype.removeListener=I.prototype.removeAllListeners=I.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,i=0;i<t.length;i++)if(r=t[i],r===e||r.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};I.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,i=t.length;r<i;++r)t[r].apply(this,e)}return this};I.prototype.emitReserved=I.prototype.emit;I.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};I.prototype.hasListeners=function(s){return!!this.listeners(s).length};const z=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function xi(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const rc=z.setTimeout,ic=z.clearTimeout;function Vt(s,e){e.useNativeTimers?(s.setTimeoutFn=rc.bind(z),s.clearTimeoutFn=ic.bind(z)):(s.setTimeoutFn=z.setTimeout.bind(z),s.clearTimeoutFn=z.clearTimeout.bind(z))}const nc=1.33;function oc(s){return typeof s=="string"?ac(s):Math.ceil((s.byteLength||s.size)*nc)}function ac(s){let e=0,t=0;for(let r=0,i=s.length;r<i;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function cc(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function lc(s){let e={},t=s.split("&");for(let r=0,i=t.length;r<i;r++){let o=t[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class hc extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class Os extends I{constructor(e){super(),this.writable=!1,Vt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,r){return super.emitReserved("error",new hc(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Rs(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=cc(e);return t.length?"?"+t:""}}const Ei="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),ds=64,dc={};let kr=0,wt=0,Sr;function Ar(s){let e="";do e=Ei[s%ds]+e,s=Math.floor(s/ds);while(s>0);return e}function $i(){const s=Ar(+new Date);return s!==Sr?(kr=0,Sr=s):s+"."+Ar(kr++)}for(;wt<ds;wt++)dc[Ei[wt]]=wt;let ki=!1;try{ki=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const uc=ki;function Si(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||uc))return new XMLHttpRequest}catch{}if(!e)try{return new z[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function pc(){}const fc=function(){return new Si({xdomain:!1}).responseType!=null}();class mc extends Os{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const t=e&&e.forceBase64;this.supportsBinary=fc&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};Za(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Qa(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=$i()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new ee(this.uri(),e)}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(i,o)=>{this.onError("xhr post error",i,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class ee extends I{constructor(e,t){super(),Vt(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=xi(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const r=this.xhr=new Si(t);try{r.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&r.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(r.timeout=this.opts.requestTimeout),r.onreadystatechange=()=>{var i;r.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(r)),r.readyState===4&&(r.status===200||r.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof r.status=="number"?r.status:0)},0))},r.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=ee.requestsCount++,ee.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=pc,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete ee.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}ee.requestsCount=0;ee.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Tr);else if(typeof addEventListener=="function"){const s="onpagehide"in z?"pagehide":"unload";addEventListener(s,Tr,!1)}}function Tr(){for(let s in ee.requests)ee.requests.hasOwnProperty(s)&&ee.requests[s].abort()}const Us=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),vt=z.WebSocket||z.MozWebSocket,Pr=!0,gc="arraybuffer",Cr=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class bc extends Os{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,r=Cr?{}:xi(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=Pr&&!Cr?t?new vt(e,t):new vt(e):new vt(e,t,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],i=t===e.length-1;Cs(r,this.supportsBinary,o=>{const c={};try{Pr&&this.ws.send(o)}catch{}i&&Us(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=$i()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!vt}}class yc extends Os{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=tc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),i=ec();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const o=()=>{r.read().then(({done:h,value:u})=>{h||(this.onPacket(u),o())}).catch(h=>{})};o();const c={type:"open"};this.query.sid&&(c.data=`{"sid":"${this.query.sid}"}`),this.writer.write(c).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],i=t===e.length-1;this.writer.write(r).then(()=>{i&&Us(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const wc={websocket:bc,webtransport:yc,polling:mc},vc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,_c=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function us(s){if(s.length>2e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let i=vc.exec(s||""),o={},c=14;for(;c--;)o[_c[c]]=i[c]||"";return t!=-1&&r!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=xc(o,o.path),o.queryKey=Ec(o,o.query),o}function xc(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Ec(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,o){i&&(t[i]=o)}),t}let Ai=class Te extends I{constructor(e,t={}){super(),this.binaryType=gc,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=us(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=us(t.host).host),Vt(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=lc(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=_i,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new wc[e](r)}open(){let e;if(this.opts.rememberUpgrade&&Te.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),r=!1;Te.priorWebsocketSuccess=!1;const i=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",w=>{if(!r)if(w.type==="pong"&&w.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Te.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(b(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const v=new Error("probe error");v.transport=t.name,this.emitReserved("upgradeError",v)}}))};function o(){r||(r=!0,b(),t.close(),t=null)}const c=w=>{const v=new Error("probe error: "+w);v.transport=t.name,o(),this.emitReserved("upgradeError",v)};function h(){c("transport closed")}function u(){c("socket closed")}function m(w){t&&w.name!==t.name&&o()}const b=()=>{t.removeListener("open",i),t.removeListener("error",c),t.removeListener("close",h),this.off("close",u),this.off("upgrading",m)};t.once("open",i),t.once("error",c),t.once("close",h),this.once("close",u),this.once("upgrading",m),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Te.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(t+=oc(i)),r>0&&t>this.maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}write(e,t,r){return this.sendPacket("message",e,t,r),this}send(e,t,r){return this.sendPacket("message",e,t,r),this}sendPacket(e,t,r,i){if(typeof t=="function"&&(i=t,t=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const o={type:e,data:t,options:r};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){Te.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let r=0;const i=e.length;for(;r<i;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};Ai.protocol=_i;function $c(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=us(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const o=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+o+":"+r.port+e,r.href=r.protocol+"://"+o+(t&&t.port===r.port?"":":"+r.port),r}const kc=typeof ArrayBuffer=="function",Sc=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Ti=Object.prototype.toString,Ac=typeof Blob=="function"||typeof Blob<"u"&&Ti.call(Blob)==="[object BlobConstructor]",Tc=typeof File=="function"||typeof File<"u"&&Ti.call(File)==="[object FileConstructor]";function Bs(s){return kc&&(s instanceof ArrayBuffer||Sc(s))||Ac&&s instanceof Blob||Tc&&s instanceof File}function St(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(St(s[t]))return!0;return!1}if(Bs(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return St(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&St(s[t]))return!0;return!1}function Pc(s){const e=[],t=s.data,r=s;return r.data=ps(t,e),r.attachments=e.length,{packet:r,buffers:e}}function ps(s,e){if(!s)return s;if(Bs(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let r=0;r<s.length;r++)t[r]=ps(s[r],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=ps(s[r],e));return t}return s}function Cc(s,e){return s.data=fs(s.data,e),delete s.attachments,s}function fs(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=fs(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=fs(s[t],e));return s}const Rc=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Oc=5;var k;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(k||(k={}));class Uc{constructor(e){this.replacer=e}encode(e){return(e.type===k.EVENT||e.type===k.ACK)&&St(e)?this.encodeAsBinary({type:e.type===k.EVENT?k.BINARY_EVENT:k.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===k.BINARY_EVENT||e.type===k.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Pc(e),r=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(r),i}}function Rr(s){return Object.prototype.toString.call(s)==="[object Object]"}class Is extends I{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===k.BINARY_EVENT;r||t.type===k.BINARY_ACK?(t.type=r?k.EVENT:k.ACK,this.reconstructor=new Bc(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Bs(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(k[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===k.BINARY_EVENT||r.type===k.BINARY_ACK){const o=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const c=e.substring(o,t);if(c!=Number(c)||e.charAt(t)!=="-")throw new Error("Illegal attachments");r.attachments=Number(c)}if(e.charAt(t+1)==="/"){const o=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(o,t)}else r.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const o=t+1;for(;++t;){const c=e.charAt(t);if(c==null||Number(c)!=c){--t;break}if(t===e.length)break}r.id=Number(e.substring(o,t+1))}if(e.charAt(++t)){const o=this.tryParse(e.substr(t));if(Is.isPayloadValid(r.type,o))r.data=o;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case k.CONNECT:return Rr(t);case k.DISCONNECT:return t===void 0;case k.CONNECT_ERROR:return typeof t=="string"||Rr(t);case k.EVENT:case k.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Rc.indexOf(t[0])===-1);case k.ACK:case k.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Bc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Cc(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Ic=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Is,Encoder:Uc,get PacketType(){return k},protocol:Oc},Symbol.toStringTag,{value:"Module"}));function G(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const Lc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Pi extends I{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[G(e,"open",this.onopen.bind(this)),G(e,"packet",this.onpacket.bind(this)),G(e,"error",this.onerror.bind(this)),G(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Lc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const r={type:k.EVENT,data:t};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const c=this.ids++,h=t.pop();this._registerAckCallback(c,h),r.id=c}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,t){var r;const i=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let h=0;h<this.sendBuffer.length;h++)this.sendBuffer[h].id===e&&this.sendBuffer.splice(h,1);t.call(this,new Error("operation has timed out"))},i),c=(...h)=>{this.io.clearTimeoutFn(o),t.apply(this,h)};c.withError=!0,this.acks[e]=c}emitWithAck(e,...t){return new Promise((r,i)=>{const o=(c,h)=>c?i(c):r(h);o.withError=!0,t.push(o),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...o)=>r!==this._queue[0]?void 0:(i!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...o)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:k.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case k.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case k.EVENT:case k.BINARY_EVENT:this.onevent(e);break;case k.ACK:case k.BINARY_ACK:this.onack(e);break;case k.DISCONNECT:this.ondisconnect();break;case k.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...i){r||(r=!0,t.packet({type:k.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:k.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function Me(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Me.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=Math.floor(e*10)&1?s+t:s-t}return Math.min(s,this.max)|0};Me.prototype.reset=function(){this.attempts=0};Me.prototype.setMin=function(s){this.ms=s};Me.prototype.setMax=function(s){this.max=s};Me.prototype.setJitter=function(s){this.jitter=s};class ms extends I{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Vt(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Me({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||Ic;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ai(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=G(t,"open",function(){r.onopen(),e&&e()}),o=h=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",h),e?e(h):this.maybeReconnectOnOpen()},c=G(t,"error",o);if(this._timeout!==!1){const h=this._timeout,u=this.setTimeoutFn(()=>{i(),o(new Error("timeout")),t.close()},h);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(i),this.subs.push(c),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(G(e,"ping",this.onping.bind(this)),G(e,"data",this.ondata.bind(this)),G(e,"error",this.onerror.bind(this)),G(e,"close",this.onclose.bind(this)),G(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Us(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Pi(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const He={};function At(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=$c(s,e.path||"/socket.io"),r=t.source,i=t.id,o=t.path,c=He[i]&&o in He[i].nsps,h=e.forceNew||e["force new connection"]||e.multiplex===!1||c;let u;return h?u=new ms(r,e):(He[i]||(He[i]=new ms(r,e)),u=He[i]),t.query&&!e.query&&(e.query=t.queryKey),u.socket(t.path,e)}Object.assign(At,{Manager:ms,Socket:Pi,io:At,connect:At});const Dc=P`
  :host {
    display: block;
    font-family: "Arial", sans-serif;
  }

  .game-columns {
    display: flex;
    gap: 1em;
    margin: 2.5em auto;
    padding: 1em;
    max-width: 1500px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-wrap: nowrap; /* Ensure columns do not wrap */
  }

  .left-column,
  .middle-column,
  .right-column {
    flex: 1; /* Ensure all columns have equal flex value */
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1em;
  }

  .left-column {
    max-width: 225px;
  }

  .middle-column {
    flex: 2;
    padding: 1em 2em;
  }

  .right-column {
    flex: 2;
    padding: 1em 2em;
  }

  .game-info,
  .user-section,
  .playlist-section,
  .chat-section {
    margin-bottom: 1em;
  }

  h3.game-sub-header {
    color: #333;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.2em;
  }

  a {
    text-decoration: none;
  }

  .leave-game {
    color: var(--subtext-color);
    font-size: 0.9em;
  }

  .leave-game:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .user-list {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    background: #f1f1f1;
    border-radius: 8px;
    transition: background 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .user:hover {
    background: #e1e1e1;
  }

  .user img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #ddd;
    margin-bottom: 0.5em;
  }

  .username {
    font-size: 0.9em;
    color: #555;
  }

  .song-picker-holder {
    margin-top: 1em;
  }

  .playlist-section,
  .chat-section {
    padding: 1em;
    border-radius: 8px;
    background: #f1f1f1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .playlist,
  .chat-log {
    background: white;
    border-radius: 8px;
    padding: 0.5em;
    height: 150px;
    overflow-y: auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .chat-message {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    padding: 0.75em;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .chat-profile-pic {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.5em;
  }

  .chat-sender {
    font-weight: bold;
    margin-right: 0.5em;
  }

  .message-input {
    display: flex;
    gap: 0.5em;
    margin-top: 0.5em;
  }

  .message-input input {
    flex: 1;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .message-input button {
    padding: 0.5em 1em;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .message-input button:hover {
    background: #0056b3;
  }

  .subtext {
    color: var(--subtext-color);
    font-size: 0.9em;
    margin: 0;
    padding: 0;
  }

  .sub-sub-header {
    font-size: 1em;
    color: var(--text-color);
    margin-bottom: 0.2em;
  }

  .last-recommended-song {
    margin-bottom: 1em;
  }

  h3,
  h4 {
    margin: 0;
    padding: 0;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Ensure it appears above other content */
  }

  .modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75%;
    height: 75%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 2em;
  }

  .modal button.start-game {
    margin-top: 1em;
    padding: 0.75em 1.5em;
    border: none;
    background: #4caf50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
    font-size: 1em;
  }

  .modal button.start-game:hover {
    background: #45a049;
  }

  .loading-bar-container {
    width: 100%;
    background: #ddd;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 1em;
  }

  .loading-bar {
    width: 0%;
    height: 10px;
    background: #4caf50;
    transition: width 10s linear;
  }

  .logo {
    width: 40%;
    height: auto;
    margin-bottom: 3em;
  }

  .modal {
    background: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .modal h2 {
    margin-top: 0;
  }

  .modal form {
    display: flex;
    flex-direction: row;
    width: 35%;
    gap: 1em;
    margin-top: 1em;
  }

  .modal input {
    padding: 0.2em;
    width: 30em;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .user-list-within-modal {
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-bottom: 2em;
  }

  .user {
    background: #f1f1f1;
    padding: 1em;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .modal button {
    margin-top: 1em;
    padding: 0.75em 1.25em;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .modal button:hover {
    background: #0056b3;
  }

  .return-home {
    font-size: 0.9em;
    display: block;
    margin-top: 2.5em;
    font-size: 1em;
    color: var(--subtext-color);
    text-decoration: none;
    padding: 0.5em 1em;
  }

  .return-home:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .song-player-component {
    background: #fff;
    padding: 1em;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 2em;
  }

  .song-player-component .song-name {
    font-size: 1.25em;
    font-weight: bold;
    margin-bottom: 0.15em;
    margin: 0;
    padding: 0;
  }

  .song-player-component .artist-name {
    font-size: 1.15em;
    color: #666;
    margin: 0;
    padding: 0;
    margin: 0;
    margin-bottom: 0.25em;
  }

  .song-player-component .album-cover {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin: 0.5em 0;
  }

  .song-player-component .recommended-by {
    font-size: 1em;
    color: #333;
  }

  .song-player-component button {
    padding: 0.5em 1em;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .song-player-component button:hover {
    background: #0056b3;
  }

  .notification-box {
    width: calc(100% - 1em);
    height: 1.5em;
    padding: 0.5em;
    border-radius: 8px;
    background: #f1f1f1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  /* position it in the center more elegantly, at a later point*/
  .notification-list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    top: 2px;
  }

  .light-green {
    background: #d4edda;
  }

  .notification-item {
    text-align: center;
  }

  .waiting-on-user-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    background-color: #d4edda;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin-top: 1em;
  }

  .waiting-on-user-message p {
    text-align: center;
    font-size: 0.9em;
    margin: 0;
    padding: 0;
  }

  .current-user-is-picking-notif {
    width: calc(100% - 1em);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5em;
    padding: 0.5em;
    margin-top: 1em;
    border-radius: 8px;
    background: #f1f1f1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    background: #d4edda;
  }

  .current-user-is-picking-notif p {
    background: #d4edda;
    text-align: center;
  }

  .notification-item button {
    background: none;
    border: none;
    color: red;
    font-size: 1em;
    cursor: pointer;
  }

  .senderIsGame {
    background: #e0e0e0; /* Light grey for system messages */
  }

  .vibeMatched {
    background: #d4edda; /* Soft green */
  }

  .vibeNotMatched {
    background: #f8d7da; /* Soft red */
  }
`,Fc=P`
  .form-container {
    border: 1px solid #ddd;
    width: 20em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .question,
  .results-header {
    font-size: 1em;
    margin: 0 0 0.5em;
    text-align: center;
    font-weight: 400;
  }

  .choices-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style-type: none;
    margin-bottom: 0.5em;
  }

  .choice {
    flex: 1;
    text-align: center;
    padding: 1em 0.5em;
    margin: 0;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 8px;
    font-weight: bold;
    color: #333;
    background-color: rgb(241, 241, 241);
  }

  .choice:hover {
    background-color: #e0e0e0;
  }

  .results-container {
    border: 1px solid #ddd;
    width: 20em;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: 1em;
  }

  .results-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .result {
    flex: 1;
    text-align: center;
    padding: 0.5em 0;
    margin: 0;
    font-weight: bold;
  }

  .big-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
  }
`;var Nc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,ut=(s,e,t,r)=>{for(var i=r>1?void 0:r?Mc(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Nc(e,t,i),i};let ve=class extends S{constructor(){super(...arguments),this.numberYes=0,this.hasUserVoted=!1,this.numberOfUsers=0,this.numberNo=0}updateYesVotes(){console.log("before setting vote, hasUserVoted: ",this.hasUserVoted),this.hasUserVoted?console.log("user cannot vote twice"):(this.numberYes+=1,this.hasUserVoted=!0,this.dispatchSingleVote("YES"),this.dispatchHasUserVoted(!0),this.checkMajorityDecision())}updateNoVotes(){console.log("before setting vote, hasUserVoted: ",this.hasUserVoted),this.hasUserVoted?console.log("user cannot vote twice"):(this.numberNo+=1,this.hasUserVoted=!0,this.dispatchSingleVote("NO"),this.dispatchHasUserVoted(!0),this.checkMajorityDecision())}dispatchHasUserVoted(s){console.log("dispatching has user voted!",s);const e=new CustomEvent("has-user-voted",{detail:{voteState:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}checkMajorityDecision(){const s=Math.floor(this.numberOfUsers/2)+1;this.numberYes>=s?this.dispatchVotingMajorityReached("YES"):(this.numberNo>=s||this.numberNo+this.numberYes==this.numberOfUsers)&&(console.log("SENDING NO MAJORITY DECISION"),this.dispatchVotingMajorityReached("NO"))}dispatchVotingMajorityReached(s){console.log("decision dispatched!");const e=new CustomEvent("voting-decision-made",{detail:{decision:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}dispatchSingleVote(s){console.log("single vote dispatched!");const e=new CustomEvent("single-vote-made",{detail:{vote:s},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return console.log(" __ ON VF RENDER __: this.hasVoted: ",this.hasUserVoted),y`
      <section class="big-container">
        <section class="form-container">
          <h4 class="question">Does this song match the vibe?</h4>
          <ul class="choices-list">
            <li class="choice" @click=${this.updateYesVotes}>YES</li>
            <li class="choice" @click=${this.updateNoVotes}>NO</li>
          </ul>
          <h4 class="results-header">
            Voting results out of ${this.numberOfUsers}
          </h4>
          <ul class="results-list">
            <li class="result">${this.numberYes} YES</li>
            <li class="result">${this.numberNo} NO</li>
          </ul>
        </section>
      </section>
    `}};ve.styles=Fc;ut([_()],ve.prototype,"numberYes",2);ut([x({type:Boolean})],ve.prototype,"hasUserVoted",2);ut([x()],ve.prototype,"numberOfUsers",2);ut([_()],ve.prototype,"numberNo",2);ve=ut([A("voting-form")],ve);var jc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,B=(s,e,t,r)=>{for(var i=r>1?void 0:r?qc(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&jc(e,t,i),i};let R=class extends S{constructor(){super(...arguments),this.userDetails=null,this.messages=[],this.users=[],this.isInputFocused=!1,this.playlist=[],this.submittedTrackList=[],this.chosenVibe="",this.isPlaying=!1,this.isLoading=!1,this.loadingProgress=0,this.audio=null,this.numberYes=0,this.numberNo=0,this.hasUserVoted=!1,this.userWhoIsChoosingSong=!1,this.idOfUserChoosingSong="",this.lastUserToRecommendASong="",this.notificationsList=[],this.gameConcluded=!1,this.currentSong=null,this.currentRound=1,this.roundsForThisGame=0}connectedCallback(){var e;super.connectedCallback();const s="http://localhost:3000";console.log("WEBSOCKETS SERVER: ",`${s}`),this.socket=At(`${s}`),this.addEventListener("single-track-submitted",t=>{const r=t;this._handleSongSubmittedByUser(r.detail.track)}),this.addEventListener("voting-decision-made",t=>{const r=t;this._handleMajorityReached(r.detail.decision)}),this.addEventListener("single-vote-made",t=>{const r=t;this._handleSingleVoteMade(r.detail.vote)}),this.addEventListener("has-user-voted",t=>{var o,c;const r=t,i=((o=this.userDetails)==null?void 0:o.name)||"Unknown";(c=this.socket)==null||c.emit("has-user-voted",{userName:i,voteState:r.detail.voteState})}),this.userDetails&&((e=this.socket)==null||e.emit("userDetails",this.userDetails)),this.socket.on("message",t=>{this.messages=[...this.messages,t]}),this.socket.on("game-ended",()=>{setTimeout(()=>{this.gameConcluded=!0},2e3)}),this.socket.on("notification",t=>{this.notificationsList=[...this.notificationsList,t]}),this.socket.on("has-user-voted",({userName:t,voteState:r})=>{var i;console.log("within front end has-user-voted, voteState:",r),((i=this.userDetails)==null?void 0:i.name)==t&&(console.log("USERNAMES MATCH!"),this.hasUserVoted=r)}),this.socket.on("track-submitted",t=>{this.submittedTrackList=[...this.submittedTrackList,t]}),this.socket.on("is-loading",t=>{this.isLoading=t,this.startGameLoading()}),this.socket.on("vibe-submitted",t=>{this.chosenVibe=t}),this.socket.on("voting-decision-made",t=>{var i,o;const r=this.submittedTrackList.pop();if(t.toUpperCase()==="YES"){const c={text:`${r==null?void 0:r.name} matches the vibe!`,sender:"GAME",class:"chat-message vibeMatched"};(i=this.socket)==null||i.emit("message",c),r?this.playlist=[...this.playlist,r]:console.error("No track to add to the playlist")}else{const c={text:`${r==null?void 0:r.name} does not match the vibe!`,sender:"GAME",class:"chat-message vibeNotMatched"};(o=this.socket)==null||o.emit("message",c)}this.lastUserToRecommendASong=this.idOfUserChoosingSong,this.startNextRoundOfGame()}),this.socket.on("single-vote-made",t=>{t.toUpperCase()==="YES"?this.numberYes+=1:this.numberNo+=1}),this.socket.on("current-song",t=>{this.currentSong=t}),this.socket.on("user-chosen-to-pick",t=>{var r,i,o;console.log("user-chosen-to-pick within frontend websocket receiver: ",t," and username of who emitted this: ",(r=this.userDetails)==null?void 0:r.name),console.log("userName",(i=this.userDetails)==null?void 0:i.name),t===((o=this.userDetails)==null?void 0:o.name)&&(this.userWhoIsChoosingSong=!0),this.idOfUserChoosingSong=t}),this.socket.on("users",t=>{this.users=t}),this.socket.on("connect",()=>{console.log("Connected to WebSocket server")}),this.socket.on("disconnect",()=>{console.log("Disconnected from WebSocket server")})}disconnectedCallback(){super.disconnectedCallback(),this.socket&&this.socket.disconnect(),this.removeEventListener("single-track-submitted",this._handleSongSubmittedByUser),this.removeEventListener("single-vote-made",this._handleSingleVoteMade),this.removeEventListener("voting-decision-made",this._handleMajorityReached)}_handleMajorityReached(s){var e;console.log("decision within majority reached event listener: ",s),(e=this.socket)==null||e.emit("voting-decision-made",s)}_handleSingleVoteMade(s){var e;console.log("single vote made: ",s),(e=this.socket)==null||e.emit("single-vote-made",s)}_handleSongSubmittedByUser(s){var e,t,r,i,o;if(s){console.log("submitting track from the front end"),(e=this.socket)==null||e.emit("track-submitted",s),(t=this.socket)==null||t.emit("single-vote-made","yes"),this.hasUserVoted=!0,this.users.length==1&&((r=this.socket)==null||r.emit("voting-decision-made","yes"));const c={name:s.name,artist:s.artists[0].name,albumCover:s.album.images[0].url,previewURL:s.preview_url,recommendedBy:((i=this.userDetails)==null?void 0:i.name)||"Unknown"};this.currentSong=c,console.log("emitting song from the frontend, ",c),(o=this.socket)==null||o.emit("current-song",c),this.userWhoIsChoosingSong=!1}}handleInputFocus(){this.isInputFocused=!0}handleInputBlur(){this.isInputFocused=!1}handleKeydown(s){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("input");s.key==="Enter"&&this.isInputFocused&&(e!=null&&e.value.trim())&&this.sendMessage()}sendMessage(){var e,t;const s=(e=this.shadowRoot)==null?void 0:e.querySelector("input");if(s&&s.value.trim()&&this.userDetails){const r={text:s.value.trim(),sender:this.userDetails.name,profilePic:this.userDetails.profilePic,class:"chat-message"};(t=this.socket)==null||t.emit("message",r),this.messages=[...this.messages,r],s.value=""}}removeMostRecentNotification(){this.notificationsList.pop(),this.requestUpdate()}render(){var s,e,t,r;return y`
      <section class="game-columns">
        <section class="left-column">
          <section class="game-info">
            <h3 class="game-sub-header">
              Round ${this.currentRound}/${this.roundsForThisGame}
            </h3>
            <a href="/app/home" class="leave-game">Leave Game</a>
          </section>
          <section class="last-recommended-song">
            <h4 class="sub-sub-header">Last Song Recommended By:</h4>
            <p class="subtext">${this.lastUserToRecommendASong}</p>
          </section>
          <p class="subtext">The vibe: ${this.chosenVibe}</p>
          <section class="user-section">
            <h3 class="game-sub-header">Player List</h3>
            <div class="user-list">
              ${this.users.map(i=>y`
                  <div class="user">
                    <img
                      src="/images/${i.profilePic}.png"
                      alt="${i.name}"
                    />
                    <span class="username">${i.name}</span>
                  </div>
                `)}
            </div>
          </section>
        </section>
        <section class="middle-column">
          <div class="notification-box">
            <ul class="notification-list">
              ${this.notificationsList.length>0?y`
                    <div class="notification-item">
                      ${this.notificationsList[this.notificationsList.length-1]}
                      <button @click="${this.removeMostRecentNotification}">
                        X
                      </button>
                    </div>
                  `:y``}
            </ul>
          </div>

          ${this.userWhoIsChoosingSong?y`<div class="current-user-is-picking-notif">
                  <p>It is your turn to pick!</p>
                </div>
                <div class="song-picker-holder">
                  <h3 class="game-sub-header">Pick a Song.</h3>
                  <song-picker .multiPicker=${!1}></song-picker>
                </div>`:""}
          ${this.currentSong?y`
                <div class="song-player-component">
                  <h3 class="song-name">${(s=this.currentSong)==null?void 0:s.name}</h3>
                  <p class="artist-name">${(e=this.currentSong)==null?void 0:e.artist}</p>
                  <img
                    src="${(t=this.currentSong)==null?void 0:t.albumCover}"
                    alt="Album cover"
                    class="album-cover"
                  />
                  <p class="recommended-by">
                    Recommended by: ${(r=this.currentSong)==null?void 0:r.recommendedBy}
                  </p>
                  <button @click="${this.playSong}">
                    ${this.isPlaying?"Stop Song":"Play"}
                  </button>
                  <audio></audio>
                </div>
              `:""}
          ${!this.currentSong&&!this.userWhoIsChoosingSong?y` <div class="song-player-component">
                <h3 class="song-name">---------</h3>
                <p class="artist-name">---------</p>
                <img
                  src="/images/gray_square.png"
                  alt="Gray square as placeholder album cover."
                  class="album-cover"
                />
                <p class="recommended-by">Recommended by: ---------</p>
              </div>`:""}
          ${this.currentSong&&!this.hasUserVoted?y` <div class="waiting-on-user-message">
                  <p>
                    It&apos;s your turn to decide if the song matches the vibe!
                  </p>
                </div>
                <voting-form
                  .numberYes=${this.numberYes}
                  .numberNo=${this.numberNo}
                  .numberOfUsers=${this.users.length}
                  .hasUserVoted=${this.hasUserVoted}
                ></voting-form>`:""}
          ${this.hasUserVoted?y`
                <div class="waiting-on-user-message">
                  <p>
                    You have voted yes on your own song, waiting on the other
                    user to vote.
                  </p>
                </div>
              `:""}
        </section>
        <section class="right-column">
          <section class="playlist-section">
            <h3 class="game-sub-header">Game Playlist</h3>
            <ul class="playlist">
              ${this.playlist.map(i=>i?y`<track-card .track=${i}></track-card>`:"")}
            </ul>
          </section>
          <section class="chat-section">
            <h3 class="game-sub-header">Chat Room</h3>
            <ul class="chat-log">
              ${this.messages.map(i=>y`
                  <li class="${i.class}">
                    <img
                      src="/images/${i.profilePic}.png"
                      alt="${i.sender}"
                      class="chat-profile-pic"
                    />
                    <span class="chat-sender">${i.sender}:</span>
                    <span class="chat-text">${i.text}</span>
                  </li>
                `)}
            </ul>
            <div class="message-input">
              <input
                placeholder="message"
                @keydown="${this.handleKeydown}"
                @focus="${this.handleInputFocus}"
                @blur="${this.handleInputBlur}"
                tabindex="0"
              />
              <button @click="${this.sendMessage}">Send</button>
            </div>
          </section>
        </section>
      </section>
      ${this.chosenVibe&&this.loadingProgress==100?"":this.renderVibeModal()}
      ${this.gameConcluded?this.showGameOverModal():""}
    `}showGameOverModal(){return y`
      <div class="modal-overlay">
        <section class="modal">
          <div class="modal-content">
            <h3 class="game-sub-header">Game Over! Thanks for playing.</h3>
            <h4 class="sub-sub-header">Game Playlist</h4>
            <ul class="playlist">
              ${this.playlist.map(s=>s?y`<track-card .track=${s}></track-card>`:"")}
            </ul>
            <a href="/app/home" class="return-home">Return to Home</a>
          </div>
        </section>
      </div>
    `}renderVibeModal(){return y`
      <div class="modal-overlay">
        <section class="modal">
          <div class="modal-content">
            <img
              src="images/mtv_logo.png"
              alt="Match the Vibe Logo."
              class="logo"
            />
            <h3 class="game-sub-header">Connected Players.</h3>
            <div class="user-list-within-modal">
              ${this.users.map(s=>y`
                  <div class="user">
                    <img
                      src="/images/${s.profilePic}.png"
                      alt="${s.name}"
                    />
                    <span class="username">${s.name}</span>
                  </div>
                `)}
            </div>
            <p>Select a vibe for the game.</p>
            ${this.chosenVibe?y`<p class="subtext">
                  the vibe has been set as: ${this.chosenVibe}
                </p>`:y`<form @submit="${this.handleVibeSubmit}">
                  <input
                    type="text"
                    name="vibe"
                    placeholder="Enter your vibe"
                    required
                  />
                  <button type="submit">Submit</button>
                </form>`}
            <button
              class="start-game"
              @click="${this.submitIsLoadingToServer}"
              ?disabled="${!this.chosenVibe}"
            >
              Start Game
            </button>
            ${this.isLoading?y`
                  <p class="subtext">the game is starting soon:</p>
                  <div class="loading-bar-container">
                    <div
                      class="loading-bar"
                      style="width: ${this.loadingProgress}%"
                    ></div>
                  </div>
                `:""}
            <a href="/app/home" class="return-home">Return to Home</a>
          </div>
        </section>
      </div>
    `}submitIsLoadingToServer(){var s;this.isLoading=!0,(s=this.socket)==null||s.emit("is-loading",this.isLoading)}startGameLoading(){this.isLoading=!0,this.loadingProgress=0;const s=10,e=20,t=setInterval(()=>{console.log("within interval:"),this.loadingProgress+=e,this.loadingProgress>=100&&(clearInterval(t),this.loadingProgress=100,this.isLoading=!1,this.startGameLogic())},s)}startGameLogic(){var s,e,t;if(console.log("startGameLogic Ran!"),this.users){const r=this.users[0];console.log("randomUser",r),(s=this.socket)==null||s.emit("user-chosen-to-pick",r.name),(e=this.socket)==null||e.emit("notification",`${r.name} is picking a song!`);const i={text:`${r.name} is picking a song!`,sender:"GAME",class:"chat-message senderIsGame"};(t=this.socket)==null||t.emit("message",i),this.roundsForThisGame=this.users.length*2}}handleVibeSubmit(s){var r;s.preventDefault();const t=s.target.elements.namedItem("vibe");this.chosenVibe=t.value,(r=this.socket)==null||r.emit("vibe-submitted",this.chosenVibe),this.closeModal(),this.requestUpdate()}startNextRoundOfGame(){var s,e,t,r,i,o,c;if(console.log("Starting next round logic!"),this.currentRound<this.roundsForThisGame){this.currentRound+=1,this.currentSong=null,this.numberNo=0,this.numberYes=0,this.isPlaying=!1,this.hasUserVoted=!1,console.log("user voted set to false");const u=(this.users.findIndex(v=>v.name===this.idOfUserChoosingSong)+1)%this.users.length,m=this.users[u],b=(s=this.userDetails)==null?void 0:s.name;(e=this.socket)==null||e.emit("has-user-voted",{usersName:b,voteState:!1}),(t=this.socket)==null||t.emit("notification",`Round ${this.currentRound} is starting now.`);const w={text:`Round ${this.currentRound} is starting now.`,sender:"GAME",class:"chat-message senderIsGame"};(r=this.socket)==null||r.emit("message",w),this.idOfUserChoosingSong=m.name,(i=this.socket)==null||i.emit("user-chosen-to-pick",m.name)}else{console.log("The game is over!"),(o=this.socket)==null||o.emit("notification","The game has ended!");const h={text:"The game has ended!",sender:"GAME",class:"chat-message senderIsGame"};(c=this.socket)==null||c.emit("message",h),this.numberNo=0,this.numberYes=0,setTimeout(()=>{var u;(u=this.socket)==null||u.emit("game-ended")},3e3)}}closeModal(){this.chosenVibe&&this.requestUpdate()}playSong(){var s,e;(s=this.currentSong)!=null&&s.previewURL&&(this.audio||(this.audio=((e=this.shadowRoot)==null?void 0:e.querySelector("audio"))||null),this.audio&&(this.audio.volume=.1,this.isPlaying?this.audio.pause():(this.audio.src=this.currentSong.previewURL,this.audio.play()),this.isPlaying=!this.isPlaying))}};R.styles=Dc;B([_()],R.prototype,"userDetails",2);B([_()],R.prototype,"messages",2);B([_()],R.prototype,"users",2);B([_()],R.prototype,"isInputFocused",2);B([_()],R.prototype,"playlist",2);B([_()],R.prototype,"submittedTrackList",2);B([x()],R.prototype,"chosenVibe",2);B([_()],R.prototype,"isPlaying",2);B([_()],R.prototype,"isLoading",2);B([_()],R.prototype,"loadingProgress",2);B([_()],R.prototype,"numberYes",2);B([_()],R.prototype,"numberNo",2);B([_()],R.prototype,"hasUserVoted",2);B([_()],R.prototype,"userWhoIsChoosingSong",2);B([_()],R.prototype,"idOfUserChoosingSong",2);B([_()],R.prototype,"lastUserToRecommendASong",2);B([_()],R.prototype,"notificationsList",2);B([_()],R.prototype,"gameConcluded",2);B([_()],R.prototype,"currentSong",2);B([_()],R.prototype,"currentRound",2);B([_()],R.prototype,"roundsForThisGame",2);R=B([A("game-feature")],R);var Vc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,zt=(s,e,t,r)=>{for(var i=r>1?void 0:r?zc(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Vc(e,t,i),i};let De=class extends Fe{constructor(){super(...arguments),this.userDetails=null}get userid(){var s;return(s=this.location)==null?void 0:s.params.userid}async _getUserFromDatabase(s){const e="http://localhost:3000";try{const t=await fetch(`${e}/profile/${s}`);if(!t.ok)throw new Error(`Error fetching profile: ${t.statusText}`);return await t.json()}catch(t){throw console.error("Error fetching user profile: ",t),t}}connectedCallback(){super.connectedCallback(),this.location&&this.location.params&&this.location.params.userid?this._getUserFromDatabase(this.location.params.userid).then(s=>{this.userDetails={name:s.name||"Unknown",profilePic:s.profileImage||"defaultProfileImage"},console.log("User details set:",this.userDetails)}).catch(s=>{console.error("Failed to fetch user profile:",s)}):console.error("User ID is not available in location parameters")}render(){return this.userDetails?y`
      <section class="gameFeature">
        <game-feature .userDetails=${this.userDetails}></game-feature>
      </section>
    `:y`<p>Loading...</p>`}};De.styles=[Ga];zt([x({attribute:!1})],De.prototype,"location",2);zt([x({reflect:!0})],De.prototype,"userid",1);zt([_()],De.prototype,"userDetails",2);De=zt([A("chat-room-page")],De);var Hc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Gc=(s,e,t,r)=>{for(var i=r>1?void 0:r?Wc(e,t):e,o=s.length-1,c;o>=0;o--)(c=s[o])&&(i=(r?c(e,t,i):c(i))||i);return r&&i&&Hc(e,t,i),i};let Yc=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"/createProfile",component:"create-profile-page"},{path:"app/chatRoom/:userid",component:"chat-room-page"},{path:"(.*)",component:"not-found-page"}],Or=class extends Yr{constructor(){super(An)}render(){return y`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Yc}> </vaadin-router>
      </auth-required>
    `}updated(s){console.log("MTVAPPElement updated:",s.keys()),s.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Or=Gc([A("mtv-app")],Or);
