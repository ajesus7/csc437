(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=globalThis,Tt=We.ShadowRoot&&(We.ShadyCSS===void 0||We.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bt=Symbol(),Yt=new WeakMap;let Pr=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Tt&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=Yt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Yt.set(t,e))}return e}toString(){return this.cssText}};const Ei=i=>new Pr(typeof i=="string"?i:i+"",void 0,Bt),I=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((o,s,a)=>o+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[a+1],i[0]);return new Pr(t,i,Bt)},Ai=(i,e)=>{if(Tt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=We.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)}},Qt=Tt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ei(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Si,defineProperty:Pi,getOwnPropertyDescriptor:Ti,getOwnPropertyNames:Bi,getOwnPropertySymbols:Ci,getPrototypeOf:Oi}=Object,Q=globalThis,Xt=Q.trustedTypes,Ii=Xt?Xt.emptyScript:"",_t=Q.reactiveElementPolyfillSupport,Pe=(i,e)=>i,Ye={toAttribute(i,e){switch(e){case Boolean:i=i?Ii:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ct=(i,e)=>!Si(i,e),Zt={attribute:!0,type:String,converter:Ye,reflect:!1,hasChanged:Ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Q.litPropertyMetadata??(Q.litPropertyMetadata=new WeakMap);class de extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Zt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Pi(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:a}=Ti(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get(){return s==null?void 0:s.call(this)},set(l){const u=s==null?void 0:s.call(this);a.call(this,l),this.requestUpdate(e,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Zt}static _$Ei(){if(this.hasOwnProperty(Pe("elementProperties")))return;const e=Oi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe("properties"))){const t=this.properties,o=[...Bi(t),...Ci(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(Qt(s))}else e!==void 0&&t.push(Qt(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ai(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var a;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const l=(((a=o.converter)==null?void 0:a.toAttribute)!==void 0?o.converter:Ye).toAttribute(t,o.type);this._$Em=e,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Em=null}}_$AK(e,t){var a;const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=o.getPropertyOptions(s),u=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Ye;this._$Em=s,this[s]=u.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Ct)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,l]of s)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}de.elementStyles=[],de.shadowRootOptions={mode:"open"},de[Pe("elementProperties")]=new Map,de[Pe("finalized")]=new Map,_t==null||_t({ReactiveElement:de}),(Q.reactiveElementVersions??(Q.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=globalThis,Qe=Te.trustedTypes,er=Qe?Qe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Tr="$lit$",J=`lit$${(Math.random()+"").slice(9)}$`,Br="?"+J,Ui=`<${Br}>`,re=document,Ce=()=>re.createComment(""),Oe=i=>i===null||typeof i!="object"&&typeof i!="function",Cr=Array.isArray,Ri=i=>Cr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",bt=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tr=/-->/g,rr=/>/g,ee=RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ir=/'/g,nr=/"/g,Or=/^(?:script|style|textarea|title)$/i,ki=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),$=ki(1),fe=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),sr=new WeakMap,te=re.createTreeWalker(re,129);function Ir(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return er!==void 0?er.createHTML(e):e}const Fi=(i,e)=>{const t=i.length-1,o=[];let s,a=e===2?"<svg>":"",l=Se;for(let u=0;u<t;u++){const d=i[u];let g,y,_=-1,b=0;for(;b<d.length&&(l.lastIndex=b,y=l.exec(d),y!==null);)b=l.lastIndex,l===Se?y[1]==="!--"?l=tr:y[1]!==void 0?l=rr:y[2]!==void 0?(Or.test(y[2])&&(s=RegExp("</"+y[2],"g")),l=ee):y[3]!==void 0&&(l=ee):l===ee?y[0]===">"?(l=s??Se,_=-1):y[1]===void 0?_=-2:(_=l.lastIndex-y[2].length,g=y[1],l=y[3]===void 0?ee:y[3]==='"'?nr:ir):l===nr||l===ir?l=ee:l===tr||l===rr?l=Se:(l=ee,s=void 0);const w=l===ee&&i[u+1].startsWith("/>")?" ":"";a+=l===Se?d+Ui:_>=0?(o.push(g),d.slice(0,_)+Tr+d.slice(_)+J+w):d+J+(_===-2?u:w)}return[Ir(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),o]};class Ie{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let a=0,l=0;const u=e.length-1,d=this.parts,[g,y]=Fi(e,t);if(this.el=Ie.createElement(g,o),te.currentNode=this.el.content,t===2){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(s=te.nextNode())!==null&&d.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const _ of s.getAttributeNames())if(_.endsWith(Tr)){const b=y[l++],w=s.getAttribute(_).split(J),R=/([.?@])?(.*)/.exec(b);d.push({type:1,index:a,name:R[2],strings:w,ctor:R[1]==="."?Mi:R[1]==="?"?ji:R[1]==="@"?Li:ot}),s.removeAttribute(_)}else _.startsWith(J)&&(d.push({type:6,index:a}),s.removeAttribute(_));if(Or.test(s.tagName)){const _=s.textContent.split(J),b=_.length-1;if(b>0){s.textContent=Qe?Qe.emptyScript:"";for(let w=0;w<b;w++)s.append(_[w],Ce()),te.nextNode(),d.push({type:2,index:++a});s.append(_[b],Ce())}}}else if(s.nodeType===8)if(s.data===Br)d.push({type:2,index:a});else{let _=-1;for(;(_=s.data.indexOf(J,_+1))!==-1;)d.push({type:7,index:a}),_+=J.length-1}a++}}static createElement(e,t){const o=re.createElement("template");return o.innerHTML=e,o}}function me(i,e,t=i,o){var l,u;if(e===fe)return e;let s=o!==void 0?(l=t._$Co)==null?void 0:l[o]:t._$Cl;const a=Oe(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((u=s==null?void 0:s._$AO)==null||u.call(s,!1),a===void 0?s=void 0:(s=new a(i),s._$AT(i,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=me(i,s._$AS(i,e.values),s,o)),e}class Di{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=((e==null?void 0:e.creationScope)??re).importNode(t,!0);te.currentNode=s;let a=te.nextNode(),l=0,u=0,d=o[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new Me(a,a.nextSibling,this,e):d.type===1?g=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(g=new Ni(a,this,e)),this._$AV.push(g),d=o[++u]}l!==(d==null?void 0:d.index)&&(a=te.nextNode(),l++)}return te.currentNode=re,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Me{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=me(this,e,t),Oe(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==fe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ri(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==O&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ie.createElement(Ir(o.h,o.h[0]),this.options)),o);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const l=new Di(s,this),u=l.u(this.options);l.p(t),this.T(u),this._$AH=l}}_$AC(e){let t=sr.get(e.strings);return t===void 0&&sr.set(e.strings,t=new Ie(e)),t}k(e){Cr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const a of e)s===t.length?t.push(o=new Me(this.S(Ce()),this.S(Ce()),this,this.options)):o=t[s],o._$AI(a),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,a){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}_$AI(e,t=this,o,s){const a=this.strings;let l=!1;if(a===void 0)e=me(this,e,t,0),l=!Oe(e)||e!==this._$AH&&e!==fe,l&&(this._$AH=e);else{const u=e;let d,g;for(e=a[0],d=0;d<a.length-1;d++)g=me(this,u[o+d],t,d),g===fe&&(g=this._$AH[d]),l||(l=!Oe(g)||g!==this._$AH[d]),g===O?e=O:e!==O&&(e+=(g??"")+a[d+1]),this._$AH[d]=g}l&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mi extends ot{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class ji extends ot{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}class Li extends ot{constructor(e,t,o,s,a){super(e,t,o,s,a),this.type=5}_$AI(e,t=this){if((e=me(this,e,t,0)??O)===fe)return;const o=this._$AH,s=e===O&&o!==O||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==O&&(o===O||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ni{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){me(this,e)}}const wt=Te.litHtmlPolyfillSupport;wt==null||wt(Ie,Me),(Te.litHtmlVersions??(Te.litHtmlVersions=[])).push("3.1.2");const zi=(i,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let s=o._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;o._$litPart$=s=new Me(e.insertBefore(Ce(),a),a,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return fe}};var Sr;T._$litElement$=!0,T.finalized=!0,(Sr=globalThis.litElementHydrateSupport)==null||Sr.call(globalThis,{LitElement:T});const vt=globalThis.litElementPolyfillSupport;vt==null||vt({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi={attribute:!0,type:String,converter:Ye,reflect:!1,hasChanged:Ct},qi=(i=Hi,e,t)=>{const{kind:o,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(t.name,i),o==="accessor"){const{name:l}=t;return{set(u){const d=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,d,i)},init(u){return u!==void 0&&this.P(l,void 0,i),u}}}if(o==="setter"){const{name:l}=t;return function(u){const d=this[l];e.call(this,u),this.requestUpdate(l,d,i)}}throw Error("Unsupported decorator location: "+o)};function v(i){return(e,t)=>typeof t=="object"?qi(i,e,t):((o,s,a)=>{const l=s.hasOwnProperty(a);return s.constructor.createProperty(a,l?{...o,wrapped:!0}:o),l?Object.getOwnPropertyDescriptor(s,a):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(i){return v({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ur=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let or=class{constructor(e,t,o,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ur(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wi=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},ar=class extends Vi{constructor(e,t,o){var s,a;super(t.context!==void 0?t.initialValue:o),this.onContextRequest=l=>{const u=l.composedPath()[0];l.context===this.context&&u!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,u,l.subscribe))},this.onProviderRequest=l=>{const u=l.composedPath()[0];if(l.context!==this.context||u===this.host)return;const d=new Set;for(const[g,{consumerHost:y}]of this.subscriptions)d.has(g)||(d.add(g),y.dispatchEvent(new Ur(this.context,g,!0)));l.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(s=this.host).addController)==null||a.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Wi(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rr({context:i}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){o.set(this,new ar(this,{context:i}))}),{get(){return e.get.call(this)},set(s){var a;return(a=o.get(this))==null||a.setValue(s),e.set.call(this,s)},init(s){var a;return(a=o.get(this))==null||a.setValue(s),s}};{e.constructor.addInitializer(l=>{o.set(l,new ar(l,{context:i}))});const s=Object.getOwnPropertyDescriptor(e,t);let a;if(s===void 0){const l=new WeakMap;a={get:function(){return l.get(this)},set:function(u){o.get(this).setValue(u),l.set(this,u)},configurable:!0,enumerable:!0}}else{const l=s.set;a={...s,set:function(u){o.get(this).setValue(u),l==null||l.call(this,u)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kr({context:i,subscribe:e}){return(t,o)=>{typeof o=="object"?o.addInitializer(function(){new or(this,{context:i,callback:s=>{this[o.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new or(s,{context:i,callback:a=>{s[o]=a},subscribe:e})})}}let Gi=class extends T{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",o=>{const s=o.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),o=t;typeof(o==null?void 0:o.then)=="function"?o.then(s=>{const a=s(this.model);this.model=a}):this.model=t}}},Ki=class extends T{dispatchMessage(e,t=this){const o=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(o)}};class Ji{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:o}=t,s=this._handlers.get(o);return s?s(t,e):e}}function Yi(i){return e=>Object.assign({},e,i)}function Qi(i){return i}const Xi="http://localhost:3000",Zi="/api",Et="JWT_AUTH_TOKEN",K=class K{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new K;return console.log("Deauthenticating",e,K._theUser),e===K._theUser&&(localStorage.removeItem(Et),K._theUser=t),t}};K._theUser=new K;let j=K;class Ue extends j{constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(s).split("").map(function(u){return"%"+("00"+u.charCodeAt(0).toString(16)).slice(-2)}).join("")),l=JSON.parse(a);console.log("Token payload",l),this.token=e,this.authenticated=!0,this.username=l.username,this.signOut=t}static authenticate(e,t){return j._theUser=new Ue(e,t),localStorage.setItem(Et,e),j._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Et);return t?Ue.authenticate(t,e):j._theUser}}class Ot{constructor(e){this._base=Zi,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=j._theUser.authenticated,o={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${j._theUser.token}`};return e?{...o,...a}:a}else return e?{...o}:void 0}_url(e){return`${Xi}${this._base}${e}`}}class cr extends Ot{constructor(e){super(Object.fromEntries(e))}}class Fr extends Ot{constructor(){super(void 0)}}var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,Dr=(i,e,t,o)=>{for(var s=o>1?void 0:o?tn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&en(e,t,s),s};const Mr="MTVModel",lr={user:new j},rn=()=>new Ji,jr=Yi,Lr=Qi;class Nr extends Gi{constructor(e){super(e,lr),this.model=lr}}Dr([Rr({context:Mr}),N()],Nr.prototype,"model",2);class It extends Ki{getFromModel(e){if(this._model)return this._model[e]}}Dr([kr({context:Mr,subscribe:!0}),v({attribute:!1})],It.prototype,"_model",2);const Ut=rn(),nn=Ut.update;Ut.addMessage("ProfileSelected",i=>{const{userid:e}=i;return new Fr().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?jr({profile:t}):Lr)});Ut.addMessage("ProfileSaved",i=>{const{userid:e,profile:t}=i;return new Ot(t).put(`/profiles/${e}`).then(o=>{if(o.status===200)return o.json()}).then(o=>{o&&console.log("Profile:",o)}).then(o=>o?jr({profile:o}):Lr)});var sn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,je=(i,e,t,o)=>{for(var s=o>1?void 0:o?on(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&sn(e,t,s),s};let ie=class extends T{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(i){const e=i.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,o)=>{const s=t[0].toUpperCase(),a=o[0].toUpperCase();return s<a?-1:s>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return $`
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
  `;je([v({type:Array})],ie.prototype,"names",2);je([v({type:Array})],ie.prototype,"namesOriginalOrder",2);je([v({type:Array})],ie.prototype,"listAttributes",2);je([N()],ie.prototype,"sort_state",2);ie=je([B("sortable-list")],ie);var an=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,at=(i,e,t,o)=>{for(var s=o>1?void 0:o?cn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&an(e,t,s),s};let ge=class extends T{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return $`
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
  `;at([v({type:Array})],ge.prototype,"names",2);at([v({type:Array})],ge.prototype,"listAttributes",2);at([N()],ge.prototype,"sort_state",2);ge=at([B("general-list")],ge);var ln=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,Rt=(i,e,t,o)=>{for(var s=o>1?void 0:o?hn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&ln(e,t,s),s};let Re=class extends T{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return $`
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
  `;Rt([v({type:Array})],Re.prototype,"artists",2);Rt([v({type:String})],Re.prototype,"listAttributes",2);Re=Rt([B("favorites-list")],Re);var un=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,ve=(i,e,t,o)=>{for(var s=o>1?void 0:o?dn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&un(e,t,s),s};let X=class extends T{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){return $`
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
  `;ve([v({reflect:!0,type:Boolean})],X.prototype,"open",2);ve([v()],X.prototype,"align",2);ve([v()],X.prototype,"profileImage",2);ve([v()],X.prototype,"profileUserID",2);ve([v()],X.prototype,"profileDescription",2);X=ve([B("drop-down")],X);var pn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,zr=(i,e,t,o)=>{for(var s=o>1?void 0:o?fn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&pn(e,t,s),s};let Xe=class extends T{constructor(){super(...arguments),this.on=!1}render(){return $`<label>
      <slot>light mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(i){const e=i.target,t=new Event(i.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};Xe.styles=I`
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
  `;zr([v({reflect:!0,type:Boolean})],Xe.prototype,"on",2);Xe=zr([B("color-mode-switch")],Xe);var mn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,ct=(i,e,t,o)=>{for(var s=o>1?void 0:o?gn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&mn(e,t,s),s};let ye=class extends T{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return $`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};ye.styles=I`
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
  `;ct([v()],ye.prototype,"title",2);ct([v()],ye.prototype,"description",2);ct([v()],ye.prototype,"user_id",2);ye=ct([B("default-card")],ye);var yn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,kt=(i,e,t,o)=>{for(var s=o>1?void 0:o?_n(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&yn(e,t,s),s};let ke=class extends T{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return $`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};ke.styles=I`
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
  `;kt([v({reflect:!0,type:Boolean})],ke.prototype,"on",2);kt([v()],ke.prototype,"filteredState",2);ke=kt([B("toggle-switch")],ke);var bn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,lt=(i,e,t,o)=>{for(var s=o>1?void 0:o?wn(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&bn(e,t,s),s};let _e=class extends T{constructor(){super(...arguments),this.path="",this.editMode=!1}get profile(){return this.using||{}}_changeEditMode(){console.log("Edit mode changed"),this.editMode=!this.editMode}_handleNameChange(i){const e=i.target;this.profile.name=e.value,this.requestUpdate()}_handleBioChange(i){const e=i.target;this.profile.bio=e.value,this.requestUpdate()}_handleMusicTasteChange(i){const e=i.target;this.profile.musicTaste=e.value,this.requestUpdate()}_handleTimezoneChange(i){const e=i.target;this.profile.timezone=e.value,this.requestUpdate()}_handleSpotifyChange(i){const e=i.target;this.profile.spotify=e.value==="true",this.requestUpdate()}_handleSubmit(i){i.preventDefault(),console.log("Form submitted with:",this.profile);const e=new CustomEvent("profile-update",{detail:{profile:this.profile},bubbles:!0,composed:!0});console.log("dispatching event: ",e),this.dispatchEvent(e),this.editMode=!this.editMode}render(){const{name:i,profileImage:e,profileDescription:t,bio:o}=this.profile;return $`
      ${this.editMode?$`
            <section class="edit-mode-section">
              <form @submit=${this._handleSubmit}>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    .value=${i}
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
    `}};_e.styles=I`
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
  `;lt([v()],_e.prototype,"path",2);lt([v()],_e.prototype,"editMode",2);lt([v({attribute:!1})],_e.prototype,"using",2);_e=lt([B("user-profile")],_e);function Ze(i){return i=i||[],Array.isArray(i)?i:[i]}function L(i){return`[Vaadin.Router] ${i}`}function vn(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const et="module",tt="nomodule",At=[et,tt];function hr(i){if(!i.match(/.+\.[m]?js$/))throw new Error(L(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Hr(i){if(!i||!M(i.path))throw new Error(L('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!ne(i.action)&&!Array.isArray(i.children)&&!ne(i.children)&&!rt(e)&&!t.some(o=>M(i[o])))throw new Error(L(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(M(e))hr(e);else if(At.some(o=>o in e))At.forEach(o=>o in e&&hr(e[o]));else throw new Error(L('Expected route bundle to include either "'+tt+'" or "'+et+'" keys, or both'));i.redirect&&["bundle","component"].forEach(o=>{o in i&&console.warn(L(`Route config "${i.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function ur(i){Ze(i).forEach(e=>Hr(e))}function dr(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===et?t.setAttribute("type",et):e===tt&&t.setAttribute(tt,""),t.async=!0),new Promise((o,s)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,o(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),s(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&o()})}function xn(i){return M(i)?dr(i):Promise.race(At.filter(e=>e in i).map(e=>dr(i[e],e)))}function Be(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function rt(i){return typeof i=="object"&&!!i}function ne(i){return typeof i=="function"}function M(i){return typeof i=="string"}function qr(i){const e=new Error(L(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const pe=new class{};function $n(i){const e=i.port,t=i.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${a}`}function pr(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let u=0;u<t.length;u++){const d=t[u];if(d.nodeName&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||$n(e))!==window.location.origin)return;const{pathname:s,search:a,hash:l}=e;Be("go",{pathname:s,search:a,hash:l})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const En={activate(){window.document.addEventListener("click",pr)},inactivate(){window.document.removeEventListener("click",pr)}},An=/Trident/.test(navigator.userAgent);An&&!ne(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function fr(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:o}=window.location;Be("go",{pathname:e,search:t,hash:o})}const Sn={activate(){window.addEventListener("popstate",fr)},inactivate(){window.removeEventListener("popstate",fr)}};var xe=Yr,Pn=Ft,Tn=In,Bn=Gr,Cn=Jr,Vr="/",Wr="./",On=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ft(i,e){for(var t=[],o=0,s=0,a="",l=e&&e.delimiter||Vr,u=e&&e.delimiters||Wr,d=!1,g;(g=On.exec(i))!==null;){var y=g[0],_=g[1],b=g.index;if(a+=i.slice(s,b),s=b+y.length,_){a+=_[1],d=!0;continue}var w="",R=i[s],Z=g[2],pt=g[3],$e=g[4],ae=g[5];if(!d&&a.length){var ce=a.length-1;u.indexOf(a[ce])>-1&&(w=a[ce],a=a.slice(0,ce))}a&&(t.push(a),a="",d=!1);var ft=w!==""&&R!==void 0&&R!==w,V=ae==="+"||ae==="*",ze=ae==="?"||ae==="*",Ee=w||l,He=pt||$e;t.push({name:Z||o++,prefix:w,delimiter:Ee,optional:ze,repeat:V,partial:ft,pattern:He?Un(He):"[^"+G(Ee)+"]+?"})}return(a||s<i.length)&&t.push(a+i.substr(s)),t}function In(i,e){return Gr(Ft(i,e))}function Gr(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(o,s){for(var a="",l=s&&s.encode||encodeURIComponent,u=0;u<i.length;u++){var d=i[u];if(typeof d=="string"){a+=d;continue}var g=o?o[d.name]:void 0,y;if(Array.isArray(g)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(g.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var _=0;_<g.length;_++){if(y=l(g[_],d),!e[u].test(y))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');a+=(_===0?d.prefix:d.delimiter)+y}continue}if(typeof g=="string"||typeof g=="number"||typeof g=="boolean"){if(y=l(String(g),d),!e[u].test(y))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+y+'"');a+=d.prefix+y;continue}if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"))}return a}}function G(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Un(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Kr(i){return i&&i.sensitive?"":"i"}function Rn(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var o=0;o<t.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function kn(i,e,t){for(var o=[],s=0;s<i.length;s++)o.push(Yr(i[s],e,t).source);return new RegExp("(?:"+o.join("|")+")",Kr(t))}function Fn(i,e,t){return Jr(Ft(i,t),e,t)}function Jr(i,e,t){t=t||{};for(var o=t.strict,s=t.start!==!1,a=t.end!==!1,l=G(t.delimiter||Vr),u=t.delimiters||Wr,d=[].concat(t.endsWith||[]).map(G).concat("$").join("|"),g=s?"^":"",y=i.length===0,_=0;_<i.length;_++){var b=i[_];if(typeof b=="string")g+=G(b),y=_===i.length-1&&u.indexOf(b[b.length-1])>-1;else{var w=b.repeat?"(?:"+b.pattern+")(?:"+G(b.delimiter)+"(?:"+b.pattern+"))*":b.pattern;e&&e.push(b),b.optional?b.partial?g+=G(b.prefix)+"("+w+")?":g+="(?:"+G(b.prefix)+"("+w+"))?":g+=G(b.prefix)+"("+w+")"}}return a?(o||(g+="(?:"+l+")?"),g+=d==="$"?"$":"(?="+d+")"):(o||(g+="(?:"+l+"(?="+d+"))?"),y||(g+="(?="+l+"|"+d+")")),new RegExp(g,Kr(t))}function Yr(i,e,t){return i instanceof RegExp?Rn(i,e):Array.isArray(i)?kn(i,e,t):Fn(i,e,t)}xe.parse=Pn;xe.compile=Tn;xe.tokensToFunction=Bn;xe.tokensToRegExp=Cn;const{hasOwnProperty:Dn}=Object.prototype,St=new Map;St.set("|false",{keys:[],pattern:/(?:)/});function mr(i){try{return decodeURIComponent(i)}catch{return i}}function Mn(i,e,t,o,s){t=!!t;const a=`${i}|${t}`;let l=St.get(a);if(!l){const g=[];l={keys:g,pattern:xe(i,g,{end:t,strict:i===""})},St.set(a,l)}const u=l.pattern.exec(e);if(!u)return null;const d=Object.assign({},s);for(let g=1;g<u.length;g++){const y=l.keys[g-1],_=y.name,b=u[g];(b!==void 0||!Dn.call(d,_))&&(y.repeat?d[_]=b?b.split(y.delimiter).map(mr):[]:d[_]=b&&mr(b))}return{path:u[0],keys:(o||[]).concat(l.keys),params:d}}function Qr(i,e,t,o,s){let a,l,u=0,d=i.path||"";return d.charAt(0)==="/"&&(t&&(d=d.substr(1)),t=!0),{next(g){if(i===g)return{done:!0};const y=i.__children=i.__children||i.children;if(!a&&(a=Mn(d,e,!y,o,s),a))return{done:!1,value:{route:i,keys:a.keys,params:a.params,path:a.path}};if(a&&y)for(;u<y.length;){if(!l){const b=y[u];b.parent=i;let w=a.path.length;w>0&&e.charAt(w)==="/"&&(w+=1),l=Qr(b,e.substr(w),t,a.keys,a.params)}const _=l.next(g);if(!_.done)return{done:!1,value:_.value};l=null,u++}return{done:!0}}}}function jn(i){if(ne(i.route.action))return i.route.action(i)}function Ln(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Nn(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function zn(i,e){const{route:t,path:o}=e;if(t&&!t.__synthetic){const s={path:o,route:t};if(!i.chain)i.chain=[];else if(t.parent){let a=i.chain.length;for(;a--&&i.chain[a].route&&i.chain[a].route!==t.parent;)i.chain.pop()}i.chain.push(s)}}class Fe{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||jn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ur(e);const t=[...Ze(e)];this.root.__children=t}addRoutes(e){return ur(e),this.root.__children.push(...Ze(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,M(e)?{pathname:e}:e),o=Qr(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let a=null,l=null,u=t;function d(g,y=a.value.route,_){const b=_===null&&a.value.route;return a=l||o.next(b),l=null,!g&&(a.done||!Ln(y,a.value.route))?(l=a,Promise.resolve(pe)):a.done?Promise.reject(qr(t)):(u=Object.assign(u?{chain:u.chain?u.chain.slice(0):[]}:{},t,a.value),zn(u,a.value),Promise.resolve(s(u)).then(w=>w!=null&&w!==pe?(u.result=w.result||w,u):d(g,y,w)))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(g=>{const y=Nn(u);if(g?console.warn(y):g=new Error(y),g.context=g.context||u,g instanceof DOMException||(g.code=g.code||500),this.errorHandler)return u.result=this.errorHandler(g),u;throw g})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,o=this.constructor.__createUrl(e,t).href;if(o.slice(0,t.length)===t)return o.slice(t.length)}}Fe.pathToRegexp=xe;const{pathToRegexp:gr}=Fe,yr=new Map;function Xr(i,e,t){const o=e.name||e.component;if(o&&(i.has(o)?i.get(o).push(e):i.set(o,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];a.parent=e,Xr(i,a,a.__children||a.children)}}function _r(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function br(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Hn(i,e={}){if(!(i instanceof Fe))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(o,s)=>{let a=_r(t,o);if(!a&&(t.clear(),Xr(t,i.root,i.root.__children),a=_r(t,o),!a))throw new Error(`Route "${o}" not found`);let l=yr.get(a.fullPath);if(!l){let d=br(a),g=a.parent;for(;g;){const w=br(g);w&&(d=w.replace(/\/$/,"")+"/"+d.replace(/^\//,"")),g=g.parent}const y=gr.parse(d),_=gr.tokensToFunction(y),b=Object.create(null);for(let w=0;w<y.length;w++)M(y[w])||(b[y[w].name]=!0);l={toPath:_,keys:b},yr.set(d,l),a.fullPath=d}let u=l.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const d={},g=Object.keys(s);for(let _=0;_<g.length;_++){const b=g[_];l.keys[b]||(d[b]=s[b])}const y=e.stringifyQueryParams(d);y&&(u+=y.charAt(0)==="?"?y:`?${y}`)}return u}}let wr=[];function qn(i){wr.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),wr=i}const Vn=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},Wn=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function vr(i,e){return i.classList.add(e),new Promise(t=>{if(Vn(i)){const o=i.getBoundingClientRect(),s=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;i.setAttribute("style",`position: absolute; ${s}`),Wn(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const Gn=256;function xt(i){return i!=null}function Kn(i){const e=Object.assign({},i);return delete e.next,e}function D({pathname:i="",search:e="",hash:t="",chain:o=[],params:s={},redirectFrom:a,resolver:l},u){const d=o.map(g=>g.route);return{baseUrl:l&&l.baseUrl||"",pathname:i,search:e,hash:t,routes:d,route:u||d.length&&d[d.length-1]||null,params:s,redirectFrom:a,getUrl:(g={})=>Ke(Y.pathToRegexp.compile(Zr(d))(Object.assign({},s,g)),l)}}function xr(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function Jn(i,e){e.location=D(i);const t=i.chain.map(o=>o.route).indexOf(i.route);return i.chain[t].element=e,e}function Ge(i,e,t){if(ne(i))return i.apply(t,e)}function $r(i,e,t){return o=>{if(o&&(o.cancel||o.redirect))return o;if(t)return Ge(t[i],e,t)}}function Yn(i,e){if(!Array.isArray(i)&&!rt(i))throw new Error(L(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=Ze(i);for(let o=0;o<t.length;o++)Hr(t[o]),e.__children.push(t[o])}function Ve(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function Ke(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Zr(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class Y extends Fe{constructor(e,t){const o=document.head.querySelector("base"),s=o&&o.getAttribute("href");super([],Object.assign({baseUrl:s&&Fe.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=l=>this.__resolveRoute(l);const a=Y.NavigationTrigger;Y.setTriggers.apply(Y,Object.keys(a).map(l=>a[l])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=D({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let o=Promise.resolve();ne(t.children)&&(o=o.then(()=>t.children(Kn(e))).then(a=>{!xt(a)&&!ne(t.children)&&(a=t.children),Yn(a,t)}));const s={redirect:a=>xr(e,a),component:a=>{const l=document.createElement(a);return this.__createdByRouter.set(l,!0),l}};return o.then(()=>{if(this.__isLatestRender(e))return Ge(t.action,[e,s],t)}).then(a=>{if(xt(a)&&(a instanceof HTMLElement||a.redirect||a===pe))return a;if(M(t.redirect))return s.redirect(t.redirect);if(t.bundle)return xn(t.bundle).then(()=>{},()=>{throw new Error(L(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(xt(a))return a;if(M(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const o=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},M(e)?{pathname:e}:e,{__renderId:o});return this.ready=this.resolve(s).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const l=this.__previousContext;if(a===l)return this.__updateBrowserHistory(l,!0),this.location;if(this.location=D(a),t&&this.__updateBrowserHistory(a,o===1),Be("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,l),this.__previousContext=a,this.location;this.__addAppearingContent(a,l);const u=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,l),u.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(o===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),Ve(this.__outlet&&this.__outlet.children),this.location=D(Object.assign(s,{resolver:this})),Be("error",Object.assign({router:this,error:a},s)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(o=>{const a=o!==t?o:e,u=Ke(Zr(o.chain),o.resolver)===o.pathname,d=(g,y=g.route,_)=>g.next(void 0,y,_).then(b=>b===null||b===pe?u?g:y.parent!==null?d(g,y.parent,b):b:b);return d(o).then(g=>{if(g===null||g===pe)throw qr(a);return g&&g!==pe&&g!==o?this.__fullyResolveChain(a,g):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Jn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(L(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${vn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},o=t.chain||[],s=e.chain;let a=Promise.resolve();const l=()=>({cancel:!0}),u=d=>xr(e,d);if(e.__divergedChainIndex=0,e.__skipAttach=!1,o.length){for(let d=0;d<Math.min(o.length,s.length)&&!(o[d].route!==s[d].route||o[d].path!==s[d].path&&o[d].element!==s[d].element||!this.__isReusableElement(o[d].element,s[d].element));d=++e.__divergedChainIndex);if(e.__skipAttach=s.length===o.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let d=s.length-1;d>=0;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},o[d]);for(let d=0;d<s.length;d++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[d]),o[d].element.location=D(e,o[d].route)}else for(let d=o.length-1;d>=e.__divergedChainIndex;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:l},o[d])}if(!e.__skipAttach)for(let d=0;d<s.length;d++)d<e.__divergedChainIndex?d<o.length&&o[d].element&&(o[d].element.location=D(e,o[d].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:l,redirect:u},s[d]),s[d].element&&(s[d].element.location=D(e,s[d].route)));return a.then(d=>{if(d){if(d.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(d.redirect)return this.__redirect(d.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,o,s){const a=D(t);return e.then(l=>{if(this.__isLatestRender(t))return $r("onBeforeLeave",[a,o,this],s.element)(l)}).then(l=>{if(!(l||{}).redirect)return l})}__runOnBeforeEnterCallbacks(e,t,o,s){const a=D(t,s.route);return e.then(l=>{if(this.__isLatestRender(t))return $r("onBeforeEnter",[a,o,this],s.element)(l)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,o){if(t>Gn)throw new Error(L(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:o})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(L(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:o=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==o){const a=s?"replaceState":"pushState";window.history[a](null,document.title,e+t+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let o=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const a=t&&t.chain[s].element;if(a)if(a.parentNode===o)e.chain[s].element=a,o=a;else break}return o}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let s=o;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const l=e.chain[a].element;l&&(s.appendChild(l),this.__addedByRouter.set(l,!0),s===o&&this.__appearingContent.push(l),s=l)}}__removeDisappearingContent(){this.__disappearingContent&&Ve(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ve(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let o=t.chain.length-1;o>=e.__divergedChainIndex&&this.__isLatestRender(e);o--){const s=t.chain[o].element;if(s)try{const a=D(e);Ge(s.onAfterLeave,[a,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&Ve(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const o=e.chain[t].element||{},s=D(e,e.chain[t].route);Ge(o.onAfterEnter,[s,{},e.resolver],o)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],s=[],a=e.chain;let l;for(let u=a.length;u>0;u--)if(a[u-1].route.animate){l=a[u-1].route.animate;break}if(t&&o&&l){const u=rt(l)&&l.leave||"leaving",d=rt(l)&&l.enter||"entering";s.push(vr(t,u)),s.push(vr(o,d))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:o,hash:s}=e?e.detail:window.location;M(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:o,hash:s},!0))}static setTriggers(...e){qn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Hn(this)),Ke(this.__urlForName(e,t),this)}urlForPath(e,t){return Ke(Y.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:o,hash:s}=M(e)?this.__createUrl(e,"http://a"):e;return Be("go",{pathname:t,search:o,hash:s})}}const Qn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Je=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Xn(){function i(){return!0}return ei(i)}function Zn(){try{return es()?!0:ts()?Je?!rs():!Xn():!1}catch{return!1}}function es(){return localStorage.getItem("vaadin.developmentmode.force")}function ts(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function rs(){return!!(Je&&Object.keys(Je).map(e=>Je[e]).filter(e=>e.productionMode).length>0)}function ei(i,e){if(typeof i!="function")return;const t=Qn.exec(i.toString());if(t)try{i=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return i(e)}window.Vaadin=window.Vaadin||{};const Er=function(i,e){if(window.Vaadin.developmentMode)return ei(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Zn());function is(){}const ns=function(){if(typeof Er=="function")return Er(is)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ns();Y.NavigationTrigger={POPSTATE:Sn,CLICK:En};var ss=Object.defineProperty,os=Object.getOwnPropertyDescriptor,ti=(i,e,t,o)=>{for(var s=o>1?void 0:o?os(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&ss(e,t,s),s};let Pt=class extends T{constructor(){super(...arguments),this.router=new Y(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return $`<slot></slot>`}};ti([v({attribute:!1})],Pt.prototype,"routes",2);Pt=ti([B("vaadin-router")],Pt);var as=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,ht=(i,e,t,o)=>{for(var s=o>1?void 0:o?cs(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&as(e,t,s),s};let ri="auth",be=class extends T{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Ue.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}render(){const i=$`
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
    `;return $`${this.isAuthenticated()?"":i} <slot></slot>`}_handleLogin(i){i.preventDefault();const e=i.target,t=new FormData(e);new cr(t).base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{s&&(console.log("Authentication:",s.token),this.user=Ue.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),this.requestUpdate())})}_handleRegister(i){i.preventDefault();const e=i.target,t=new FormData(e);new cr(t).base().post("/signup").then(s=>{if(s.status===200)return s.json();this.registerStatus=s.status}).then(s=>{console.log("Registration:",s)})}_toggleDialog(i){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(i?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=j.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};be.styles=I`
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
  `;ht([N()],be.prototype,"loginStatus",2);ht([N()],be.prototype,"registerStatus",2);ht([Rr({context:ri}),N()],be.prototype,"user",2);be=ht([B("auth-required")],be);var ls=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,Dt=(i,e,t,o)=>{for(var s=o>1?void 0:o?hs(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&ls(e,t,s),s};let De=class extends T{constructor(){super(...arguments),this.user=new j}render(){const{profileImage:i,profileDescription:e,userid:t}=this.profile||{};return $`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${i}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(i){if(console.log("Profile Data has been updated",i),i.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(i){new Fr().get(i).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};De.styles=I`
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
  `;Dt([N()],De.prototype,"profile",2);Dt([kr({context:ri,subscribe:!0}),v({attribute:!1})],De.prototype,"user",2);De=Dt([B("match-the-vibe-header")],De);var us=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,Le=(i,e,t,o)=>{for(var s=o>1?void 0:o?ds(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&us(e,t,s),s};let se=class extends It{get userid(){var i;return console.log(),(i=this.location)==null?void 0:i.params.userid}get edit(){var i;return(i=this.location)==null?void 0:i.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(i,e,t){i==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(i,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",i=>this._handleProfileUpdate(i))}_handleProfileUpdate(i){console.log("Profile updated",i.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:i.detail.profile}):console.error("UserID is undefined.")}render(){return $` <user-profile .using=${this.profile}> </user-profile> `}};se.styles=[I`
      :host {
        display: contents;
      }
    `];Le([v({attribute:!1})],se.prototype,"location",2);Le([v({reflect:!0})],se.prototype,"userid",1);Le([v({reflect:!0})],se.prototype,"edit",1);Le([v()],se.prototype,"profile",1);se=Le([B("profile-page")],se);var Mt={},ut={};ut.byteLength=ms;ut.toByteArray=ys;ut.fromByteArray=ws;var H=[],k=[],ps=typeof Uint8Array<"u"?Uint8Array:Array,$t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var ue=0,fs=$t.length;ue<fs;++ue)H[ue]=$t[ue],k[$t.charCodeAt(ue)]=ue;k[45]=62;k[95]=63;function ii(i){var e=i.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=i.indexOf("=");t===-1&&(t=e);var o=t===e?0:4-t%4;return[t,o]}function ms(i){var e=ii(i),t=e[0],o=e[1];return(t+o)*3/4-o}function gs(i,e,t){return(e+t)*3/4-t}function ys(i){var e,t=ii(i),o=t[0],s=t[1],a=new ps(gs(i,o,s)),l=0,u=s>0?o-4:o,d;for(d=0;d<u;d+=4)e=k[i.charCodeAt(d)]<<18|k[i.charCodeAt(d+1)]<<12|k[i.charCodeAt(d+2)]<<6|k[i.charCodeAt(d+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return s===2&&(e=k[i.charCodeAt(d)]<<2|k[i.charCodeAt(d+1)]>>4,a[l++]=e&255),s===1&&(e=k[i.charCodeAt(d)]<<10|k[i.charCodeAt(d+1)]<<4|k[i.charCodeAt(d+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function _s(i){return H[i>>18&63]+H[i>>12&63]+H[i>>6&63]+H[i&63]}function bs(i,e,t){for(var o,s=[],a=e;a<t;a+=3)o=(i[a]<<16&16711680)+(i[a+1]<<8&65280)+(i[a+2]&255),s.push(_s(o));return s.join("")}function ws(i){for(var e,t=i.length,o=t%3,s=[],a=16383,l=0,u=t-o;l<u;l+=a)s.push(bs(i,l,l+a>u?u:l+a));return o===1?(e=i[t-1],s.push(H[e>>2]+H[e<<4&63]+"==")):o===2&&(e=(i[t-2]<<8)+i[t-1],s.push(H[e>>10]+H[e>>4&63]+H[e<<2&63]+"=")),s.join("")}var jt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */jt.read=function(i,e,t,o,s){var a,l,u=s*8-o-1,d=(1<<u)-1,g=d>>1,y=-7,_=t?s-1:0,b=t?-1:1,w=i[e+_];for(_+=b,a=w&(1<<-y)-1,w>>=-y,y+=u;y>0;a=a*256+i[e+_],_+=b,y-=8);for(l=a&(1<<-y)-1,a>>=-y,y+=o;y>0;l=l*256+i[e+_],_+=b,y-=8);if(a===0)a=1-g;else{if(a===d)return l?NaN:(w?-1:1)*(1/0);l=l+Math.pow(2,o),a=a-g}return(w?-1:1)*l*Math.pow(2,a-o)};jt.write=function(i,e,t,o,s,a){var l,u,d,g=a*8-s-1,y=(1<<g)-1,_=y>>1,b=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=o?0:a-1,R=o?1:-1,Z=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,l=y):(l=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-l))<1&&(l--,d*=2),l+_>=1?e+=b/d:e+=b*Math.pow(2,1-_),e*d>=2&&(l++,d/=2),l+_>=y?(u=0,l=y):l+_>=1?(u=(e*d-1)*Math.pow(2,s),l=l+_):(u=e*Math.pow(2,_-1)*Math.pow(2,s),l=0));s>=8;i[t+w]=u&255,w+=R,u/=256,s-=8);for(l=l<<s|u,g+=s;g>0;i[t+w]=l&255,w+=R,l/=256,g-=8);i[t+w-R]|=Z*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const e=ut,t=jt,o=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=u,i.SlowBuffer=ae,i.INSPECT_MAX_BYTES=50;const s=2147483647;i.kMaxLength=s,u.TYPED_ARRAY_SUPPORT=a(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const c=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(c,r),c.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function l(c){if(c>s)throw new RangeError('The value "'+c+'" is invalid for option "size"');const r=new Uint8Array(c);return Object.setPrototypeOf(r,u.prototype),r}function u(c,r,n){if(typeof c=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(c)}return d(c,r,n)}u.poolSize=8192;function d(c,r,n){if(typeof c=="string")return b(c,r);if(ArrayBuffer.isView(c))return R(c);if(c==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c);if(z(c,ArrayBuffer)||c&&z(c.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(z(c,SharedArrayBuffer)||c&&z(c.buffer,SharedArrayBuffer)))return Z(c,r,n);if(typeof c=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const h=c.valueOf&&c.valueOf();if(h!=null&&h!==c)return u.from(h,r,n);const p=pt(c);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof c[Symbol.toPrimitive]=="function")return u.from(c[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof c)}u.from=function(c,r,n){return d(c,r,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function g(c){if(typeof c!="number")throw new TypeError('"size" argument must be of type number');if(c<0)throw new RangeError('The value "'+c+'" is invalid for option "size"')}function y(c,r,n){return g(c),c<=0?l(c):r!==void 0?typeof n=="string"?l(c).fill(r,n):l(c).fill(r):l(c)}u.alloc=function(c,r,n){return y(c,r,n)};function _(c){return g(c),l(c<0?0:$e(c)|0)}u.allocUnsafe=function(c){return _(c)},u.allocUnsafeSlow=function(c){return _(c)};function b(c,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const n=ce(c,r)|0;let h=l(n);const p=h.write(c,r);return p!==n&&(h=h.slice(0,p)),h}function w(c){const r=c.length<0?0:$e(c.length)|0,n=l(r);for(let h=0;h<r;h+=1)n[h]=c[h]&255;return n}function R(c){if(z(c,Uint8Array)){const r=new Uint8Array(c);return Z(r.buffer,r.byteOffset,r.byteLength)}return w(c)}function Z(c,r,n){if(r<0||c.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(c.byteLength<r+(n||0))throw new RangeError('"length" is outside of buffer bounds');let h;return r===void 0&&n===void 0?h=new Uint8Array(c):n===void 0?h=new Uint8Array(c,r):h=new Uint8Array(c,r,n),Object.setPrototypeOf(h,u.prototype),h}function pt(c){if(u.isBuffer(c)){const r=$e(c.length)|0,n=l(r);return n.length===0||c.copy(n,0,0,r),n}if(c.length!==void 0)return typeof c.length!="number"||yt(c.length)?l(0):w(c);if(c.type==="Buffer"&&Array.isArray(c.data))return w(c.data)}function $e(c){if(c>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return c|0}function ae(c){return+c!=c&&(c=0),u.alloc(+c)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,n){if(z(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),z(n,Uint8Array)&&(n=u.from(n,n.offset,n.byteLength)),!u.isBuffer(r)||!u.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===n)return 0;let h=r.length,p=n.length;for(let f=0,m=Math.min(h,p);f<m;++f)if(r[f]!==n[f]){h=r[f],p=n[f];break}return h<p?-1:p<h?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,n){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);let h;if(n===void 0)for(n=0,h=0;h<r.length;++h)n+=r[h].length;const p=u.allocUnsafe(n);let f=0;for(h=0;h<r.length;++h){let m=r[h];if(z(m,Uint8Array))f+m.length>p.length?(u.isBuffer(m)||(m=u.from(m)),m.copy(p,f)):Uint8Array.prototype.set.call(p,m,f);else if(u.isBuffer(m))m.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=m.length}return p};function ce(c,r){if(u.isBuffer(c))return c.length;if(ArrayBuffer.isView(c)||z(c,ArrayBuffer))return c.byteLength;if(typeof c!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof c);const n=c.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&n===0)return 0;let p=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return gt(c).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Jt(c).length;default:if(p)return h?-1:gt(c).length;r=(""+r).toLowerCase(),p=!0}}u.byteLength=ce;function ft(c,r,n){let h=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,r>>>=0,n<=r))return"";for(c||(c="utf8");;)switch(c){case"hex":return mi(this,r,n);case"utf8":case"utf-8":return Lt(this,r,n);case"ascii":return pi(this,r,n);case"latin1":case"binary":return fi(this,r,n);case"base64":return ui(this,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gi(this,r,n);default:if(h)throw new TypeError("Unknown encoding: "+c);c=(c+"").toLowerCase(),h=!0}}u.prototype._isBuffer=!0;function V(c,r,n){const h=c[r];c[r]=c[n],c[n]=h}u.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<r;n+=2)V(this,n,n+1);return this},u.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<r;n+=4)V(this,n,n+3),V(this,n+1,n+2);return this},u.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<r;n+=8)V(this,n,n+7),V(this,n+1,n+6),V(this,n+2,n+5),V(this,n+3,n+4);return this},u.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?Lt(this,0,r):ft.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){let r="";const n=i.INSPECT_MAX_BYTES;return r=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(r+=" ... "),"<Buffer "+r+">"},o&&(u.prototype[o]=u.prototype.inspect),u.prototype.compare=function(r,n,h,p,f){if(z(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(n===void 0&&(n=0),h===void 0&&(h=r?r.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),n<0||h>r.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&n>=h)return 0;if(p>=f)return-1;if(n>=h)return 1;if(n>>>=0,h>>>=0,p>>>=0,f>>>=0,this===r)return 0;let m=f-p,x=h-n;const S=Math.min(m,x),A=this.slice(p,f),P=r.slice(n,h);for(let E=0;E<S;++E)if(A[E]!==P[E]){m=A[E],x=P[E];break}return m<x?-1:x<m?1:0};function ze(c,r,n,h,p){if(c.length===0)return-1;if(typeof n=="string"?(h=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,yt(n)&&(n=p?0:c.length-1),n<0&&(n=c.length+n),n>=c.length){if(p)return-1;n=c.length-1}else if(n<0)if(p)n=0;else return-1;if(typeof r=="string"&&(r=u.from(r,h)),u.isBuffer(r))return r.length===0?-1:Ee(c,r,n,h,p);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(c,r,n):Uint8Array.prototype.lastIndexOf.call(c,r,n):Ee(c,[r],n,h,p);throw new TypeError("val must be string, number or Buffer")}function Ee(c,r,n,h,p){let f=1,m=c.length,x=r.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(c.length<2||r.length<2)return-1;f=2,m/=2,x/=2,n/=2}function S(P,E){return f===1?P[E]:P.readUInt16BE(E*f)}let A;if(p){let P=-1;for(A=n;A<m;A++)if(S(c,A)===S(r,P===-1?0:A-P)){if(P===-1&&(P=A),A-P+1===x)return P*f}else P!==-1&&(A-=A-P),P=-1}else for(n+x>m&&(n=m-x),A=n;A>=0;A--){let P=!0;for(let E=0;E<x;E++)if(S(c,A+E)!==S(r,E)){P=!1;break}if(P)return A}return-1}u.prototype.includes=function(r,n,h){return this.indexOf(r,n,h)!==-1},u.prototype.indexOf=function(r,n,h){return ze(this,r,n,h,!0)},u.prototype.lastIndexOf=function(r,n,h){return ze(this,r,n,h,!1)};function He(c,r,n,h){n=Number(n)||0;const p=c.length-n;h?(h=Number(h),h>p&&(h=p)):h=p;const f=r.length;h>f/2&&(h=f/2);let m;for(m=0;m<h;++m){const x=parseInt(r.substr(m*2,2),16);if(yt(x))return m;c[n+m]=x}return m}function ai(c,r,n,h){return qe(gt(r,c.length-n),c,n,h)}function ci(c,r,n,h){return qe(wi(r),c,n,h)}function li(c,r,n,h){return qe(Jt(r),c,n,h)}function hi(c,r,n,h){return qe(vi(r,c.length-n),c,n,h)}u.prototype.write=function(r,n,h,p){if(n===void 0)p="utf8",h=this.length,n=0;else if(h===void 0&&typeof n=="string")p=n,h=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(h)?(h=h>>>0,p===void 0&&(p="utf8")):(p=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-n;if((h===void 0||h>f)&&(h=f),r.length>0&&(h<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let m=!1;for(;;)switch(p){case"hex":return He(this,r,n,h);case"utf8":case"utf-8":return ai(this,r,n,h);case"ascii":case"latin1":case"binary":return ci(this,r,n,h);case"base64":return li(this,r,n,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return hi(this,r,n,h);default:if(m)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),m=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ui(c,r,n){return r===0&&n===c.length?e.fromByteArray(c):e.fromByteArray(c.slice(r,n))}function Lt(c,r,n){n=Math.min(c.length,n);const h=[];let p=r;for(;p<n;){const f=c[p];let m=null,x=f>239?4:f>223?3:f>191?2:1;if(p+x<=n){let S,A,P,E;switch(x){case 1:f<128&&(m=f);break;case 2:S=c[p+1],(S&192)===128&&(E=(f&31)<<6|S&63,E>127&&(m=E));break;case 3:S=c[p+1],A=c[p+2],(S&192)===128&&(A&192)===128&&(E=(f&15)<<12|(S&63)<<6|A&63,E>2047&&(E<55296||E>57343)&&(m=E));break;case 4:S=c[p+1],A=c[p+2],P=c[p+3],(S&192)===128&&(A&192)===128&&(P&192)===128&&(E=(f&15)<<18|(S&63)<<12|(A&63)<<6|P&63,E>65535&&E<1114112&&(m=E))}}m===null?(m=65533,x=1):m>65535&&(m-=65536,h.push(m>>>10&1023|55296),m=56320|m&1023),h.push(m),p+=x}return di(h)}const Nt=4096;function di(c){const r=c.length;if(r<=Nt)return String.fromCharCode.apply(String,c);let n="",h=0;for(;h<r;)n+=String.fromCharCode.apply(String,c.slice(h,h+=Nt));return n}function pi(c,r,n){let h="";n=Math.min(c.length,n);for(let p=r;p<n;++p)h+=String.fromCharCode(c[p]&127);return h}function fi(c,r,n){let h="";n=Math.min(c.length,n);for(let p=r;p<n;++p)h+=String.fromCharCode(c[p]);return h}function mi(c,r,n){const h=c.length;(!r||r<0)&&(r=0),(!n||n<0||n>h)&&(n=h);let p="";for(let f=r;f<n;++f)p+=xi[c[f]];return p}function gi(c,r,n){const h=c.slice(r,n);let p="";for(let f=0;f<h.length-1;f+=2)p+=String.fromCharCode(h[f]+h[f+1]*256);return p}u.prototype.slice=function(r,n){const h=this.length;r=~~r,n=n===void 0?h:~~n,r<0?(r+=h,r<0&&(r=0)):r>h&&(r=h),n<0?(n+=h,n<0&&(n=0)):n>h&&(n=h),n<r&&(n=r);const p=this.subarray(r,n);return Object.setPrototypeOf(p,u.prototype),p};function C(c,r,n){if(c%1!==0||c<0)throw new RangeError("offset is not uint");if(c+r>n)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let p=this[r],f=1,m=0;for(;++m<n&&(f*=256);)p+=this[r+m]*f;return p},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let p=this[r+--n],f=1;for(;n>0&&(f*=256);)p+=this[r+--n]*f;return p},u.prototype.readUint8=u.prototype.readUInt8=function(r,n){return r=r>>>0,n||C(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,n){return r=r>>>0,n||C(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,n){return r=r>>>0,n||C(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,n){return r=r>>>0,n||C(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,n){return r=r>>>0,n||C(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readBigUInt64LE=W(function(r){r=r>>>0,he(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&Ae(r,this.length-8);const p=n+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,f=this[++r]+this[++r]*2**8+this[++r]*2**16+h*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=W(function(r){r=r>>>0,he(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&Ae(r,this.length-8);const p=n*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],f=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+h;return(BigInt(p)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let p=this[r],f=1,m=0;for(;++m<n&&(f*=256);)p+=this[r+m]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*n)),p},u.prototype.readIntBE=function(r,n,h){r=r>>>0,n=n>>>0,h||C(r,n,this.length);let p=n,f=1,m=this[r+--p];for(;p>0&&(f*=256);)m+=this[r+--p]*f;return f*=128,m>=f&&(m-=Math.pow(2,8*n)),m},u.prototype.readInt8=function(r,n){return r=r>>>0,n||C(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,n){r=r>>>0,n||C(r,2,this.length);const h=this[r]|this[r+1]<<8;return h&32768?h|4294901760:h},u.prototype.readInt16BE=function(r,n){r=r>>>0,n||C(r,2,this.length);const h=this[r+1]|this[r]<<8;return h&32768?h|4294901760:h},u.prototype.readInt32LE=function(r,n){return r=r>>>0,n||C(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,n){return r=r>>>0,n||C(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readBigInt64LE=W(function(r){r=r>>>0,he(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&Ae(r,this.length-8);const p=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(h<<24);return(BigInt(p)<<BigInt(32))+BigInt(n+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),u.prototype.readBigInt64BE=W(function(r){r=r>>>0,he(r,"offset");const n=this[r],h=this[r+7];(n===void 0||h===void 0)&&Ae(r,this.length-8);const p=(n<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(p)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+h)}),u.prototype.readFloatLE=function(r,n){return r=r>>>0,n||C(r,4,this.length),t.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,n){return r=r>>>0,n||C(r,4,this.length),t.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,n){return r=r>>>0,n||C(r,8,this.length),t.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,n){return r=r>>>0,n||C(r,8,this.length),t.read(this,r,!1,52,8)};function U(c,r,n,h,p,f){if(!u.isBuffer(c))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>p||r<f)throw new RangeError('"value" argument is out of bounds');if(n+h>c.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,n,h,p){if(r=+r,n=n>>>0,h=h>>>0,!p){const x=Math.pow(2,8*h)-1;U(this,r,n,h,x,0)}let f=1,m=0;for(this[n]=r&255;++m<h&&(f*=256);)this[n+m]=r/f&255;return n+h},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,n,h,p){if(r=+r,n=n>>>0,h=h>>>0,!p){const x=Math.pow(2,8*h)-1;U(this,r,n,h,x,0)}let f=h-1,m=1;for(this[n+f]=r&255;--f>=0&&(m*=256);)this[n+f]=r/m&255;return n+h},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,1,255,0),this[n]=r&255,n+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,65535,0),this[n]=r&255,this[n+1]=r>>>8,n+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,65535,0),this[n]=r>>>8,this[n+1]=r&255,n+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,4294967295,0),this[n+3]=r>>>24,this[n+2]=r>>>16,this[n+1]=r>>>8,this[n]=r&255,n+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,4294967295,0),this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255,n+4};function zt(c,r,n,h,p){Kt(r,h,p,c,n,7);let f=Number(r&BigInt(4294967295));c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f,f=f>>8,c[n++]=f;let m=Number(r>>BigInt(32)&BigInt(4294967295));return c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,m=m>>8,c[n++]=m,n}function Ht(c,r,n,h,p){Kt(r,h,p,c,n,7);let f=Number(r&BigInt(4294967295));c[n+7]=f,f=f>>8,c[n+6]=f,f=f>>8,c[n+5]=f,f=f>>8,c[n+4]=f;let m=Number(r>>BigInt(32)&BigInt(4294967295));return c[n+3]=m,m=m>>8,c[n+2]=m,m=m>>8,c[n+1]=m,m=m>>8,c[n]=m,n+8}u.prototype.writeBigUInt64LE=W(function(r,n=0){return zt(this,r,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=W(function(r,n=0){return Ht(this,r,n,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(r,n,h,p){if(r=+r,n=n>>>0,!p){const S=Math.pow(2,8*h-1);U(this,r,n,h,S-1,-S)}let f=0,m=1,x=0;for(this[n]=r&255;++f<h&&(m*=256);)r<0&&x===0&&this[n+f-1]!==0&&(x=1),this[n+f]=(r/m>>0)-x&255;return n+h},u.prototype.writeIntBE=function(r,n,h,p){if(r=+r,n=n>>>0,!p){const S=Math.pow(2,8*h-1);U(this,r,n,h,S-1,-S)}let f=h-1,m=1,x=0;for(this[n+f]=r&255;--f>=0&&(m*=256);)r<0&&x===0&&this[n+f+1]!==0&&(x=1),this[n+f]=(r/m>>0)-x&255;return n+h},u.prototype.writeInt8=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,1,127,-128),r<0&&(r=255+r+1),this[n]=r&255,n+1},u.prototype.writeInt16LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,32767,-32768),this[n]=r&255,this[n+1]=r>>>8,n+2},u.prototype.writeInt16BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,2,32767,-32768),this[n]=r>>>8,this[n+1]=r&255,n+2},u.prototype.writeInt32LE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,2147483647,-2147483648),this[n]=r&255,this[n+1]=r>>>8,this[n+2]=r>>>16,this[n+3]=r>>>24,n+4},u.prototype.writeInt32BE=function(r,n,h){return r=+r,n=n>>>0,h||U(this,r,n,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255,n+4},u.prototype.writeBigInt64LE=W(function(r,n=0){return zt(this,r,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=W(function(r,n=0){return Ht(this,r,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function qt(c,r,n,h,p,f){if(n+h>c.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Vt(c,r,n,h,p){return r=+r,n=n>>>0,p||qt(c,r,n,4),t.write(c,r,n,h,23,4),n+4}u.prototype.writeFloatLE=function(r,n,h){return Vt(this,r,n,!0,h)},u.prototype.writeFloatBE=function(r,n,h){return Vt(this,r,n,!1,h)};function Wt(c,r,n,h,p){return r=+r,n=n>>>0,p||qt(c,r,n,8),t.write(c,r,n,h,52,8),n+8}u.prototype.writeDoubleLE=function(r,n,h){return Wt(this,r,n,!0,h)},u.prototype.writeDoubleBE=function(r,n,h){return Wt(this,r,n,!1,h)},u.prototype.copy=function(r,n,h,p){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(h||(h=0),!p&&p!==0&&(p=this.length),n>=r.length&&(n=r.length),n||(n=0),p>0&&p<h&&(p=h),p===h||r.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),r.length-n<p-h&&(p=r.length-n+h);const f=p-h;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(n,h,p):Uint8Array.prototype.set.call(r,this.subarray(h,p),n),f},u.prototype.fill=function(r,n,h,p){if(typeof r=="string"){if(typeof n=="string"?(p=n,n=0,h=this.length):typeof h=="string"&&(p=h,h=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!u.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(r.length===1){const m=r.charCodeAt(0);(p==="utf8"&&m<128||p==="latin1")&&(r=m)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(n<0||this.length<n||this.length<h)throw new RangeError("Out of range index");if(h<=n)return this;n=n>>>0,h=h===void 0?this.length:h>>>0,r||(r=0);let f;if(typeof r=="number")for(f=n;f<h;++f)this[f]=r;else{const m=u.isBuffer(r)?r:u.from(r,p),x=m.length;if(x===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(f=0;f<h-n;++f)this[f+n]=m[f%x]}return this};const le={};function mt(c,r,n){le[c]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${c}]`,this.stack,delete this.name}get code(){return c}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${c}]: ${this.message}`}}}mt("ERR_BUFFER_OUT_OF_BOUNDS",function(c){return c?`${c} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),mt("ERR_INVALID_ARG_TYPE",function(c,r){return`The "${c}" argument must be of type number. Received type ${typeof r}`},TypeError),mt("ERR_OUT_OF_RANGE",function(c,r,n){let h=`The value of "${c}" is out of range.`,p=n;return Number.isInteger(n)&&Math.abs(n)>2**32?p=Gt(String(n)):typeof n=="bigint"&&(p=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(p=Gt(p)),p+="n"),h+=` It must be ${r}. Received ${p}`,h},RangeError);function Gt(c){let r="",n=c.length;const h=c[0]==="-"?1:0;for(;n>=h+4;n-=3)r=`_${c.slice(n-3,n)}${r}`;return`${c.slice(0,n)}${r}`}function yi(c,r,n){he(r,"offset"),(c[r]===void 0||c[r+n]===void 0)&&Ae(r,c.length-(n+1))}function Kt(c,r,n,h,p,f){if(c>n||c<r){const m=typeof r=="bigint"?"n":"";let x;throw f>3?r===0||r===BigInt(0)?x=`>= 0${m} and < 2${m} ** ${(f+1)*8}${m}`:x=`>= -(2${m} ** ${(f+1)*8-1}${m}) and < 2 ** ${(f+1)*8-1}${m}`:x=`>= ${r}${m} and <= ${n}${m}`,new le.ERR_OUT_OF_RANGE("value",x,c)}yi(h,p,f)}function he(c,r){if(typeof c!="number")throw new le.ERR_INVALID_ARG_TYPE(r,"number",c)}function Ae(c,r,n){throw Math.floor(c)!==c?(he(c,n),new le.ERR_OUT_OF_RANGE(n||"offset","an integer",c)):r<0?new le.ERR_BUFFER_OUT_OF_BOUNDS:new le.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${r}`,c)}const _i=/[^+/0-9A-Za-z-_]/g;function bi(c){if(c=c.split("=")[0],c=c.trim().replace(_i,""),c.length<2)return"";for(;c.length%4!==0;)c=c+"=";return c}function gt(c,r){r=r||1/0;let n;const h=c.length;let p=null;const f=[];for(let m=0;m<h;++m){if(n=c.charCodeAt(m),n>55295&&n<57344){if(!p){if(n>56319){(r-=3)>-1&&f.push(239,191,189);continue}else if(m+1===h){(r-=3)>-1&&f.push(239,191,189);continue}p=n;continue}if(n<56320){(r-=3)>-1&&f.push(239,191,189),p=n;continue}n=(p-55296<<10|n-56320)+65536}else p&&(r-=3)>-1&&f.push(239,191,189);if(p=null,n<128){if((r-=1)<0)break;f.push(n)}else if(n<2048){if((r-=2)<0)break;f.push(n>>6|192,n&63|128)}else if(n<65536){if((r-=3)<0)break;f.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((r-=4)<0)break;f.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return f}function wi(c){const r=[];for(let n=0;n<c.length;++n)r.push(c.charCodeAt(n)&255);return r}function vi(c,r){let n,h,p;const f=[];for(let m=0;m<c.length&&!((r-=2)<0);++m)n=c.charCodeAt(m),h=n>>8,p=n%256,f.push(p),f.push(h);return f}function Jt(c){return e.toByteArray(bi(c))}function qe(c,r,n,h){let p;for(p=0;p<h&&!(p+n>=r.length||p>=c.length);++p)r[p+n]=c[p];return p}function z(c,r){return c instanceof r||c!=null&&c.constructor!=null&&c.constructor.name!=null&&c.constructor.name===r.name}function yt(c){return c!==c}const xi=function(){const c="0123456789abcdef",r=new Array(256);for(let n=0;n<16;++n){const h=n*16;for(let p=0;p<16;++p)r[h+p]=c[n]+c[p]}return r}();function W(c){return typeof BigInt>"u"?$i:c}function $i(){throw new Error("BigInt not supported")}})(Mt);var vs=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,ni=(i,e,t,o)=>{for(var s=o>1?void 0:o?xs(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&vs(e,t,s),s};let it=class extends T{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return $`
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
    `}};it.styles=I`
    .single-track {
      display: flex;
      flex-direction: row;
      border: 1px solid white;
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
  `;ni([v({type:Object})],it.prototype,"track",2);it=ni([B("track-card")],it);var $s=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,dt=(i,e,t,o)=>{for(var s=o>1?void 0:o?Es(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&$s(e,t,s),s};let we=class extends T{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(i){const e=`https://api.spotify.com/v1/tracks/${i}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const o=await t.json();return this.currentTracks=[...this.currentTracks,o],o}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Mt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const o=await t.json();this.accessToken=o.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var i;super.connectedCallback(),(i=this.comment)!=null&&i.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(i){try{this.currentTracks=[];const e=i.map(o=>this.findSong(o)),t=await Promise.all(e);this.currentTracks=t.filter(o=>o!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return $`
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
    `}};we.styles=I`
    .single-comment {
      display: flex;
      flex-direction: row;
      border: 1px solid white;
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
  `;dt([v({type:Object})],we.prototype,"comment",2);dt([v({type:String})],we.prototype,"accessToken",2);dt([N()],we.prototype,"currentTracks",2);we=dt([B("comment-card")],we);var As=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,q=(i,e,t,o)=>{for(var s=o>1?void 0:o?Ss(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&As(e,t,s),s};let F=class extends T{constructor(){super(),this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post",this.addEventListener("track-selected",i=>{const e=i;this._selectTrack(e.detail.track)})}_selectTrack(i){const e=this.selectedTracks.findIndex(t=>t.id===i.id);e>-1?this.selectedTracks=[...this.selectedTracks.slice(0,e),...this.selectedTracks.slice(e+1)]:this.selectedTracks=[...this.selectedTracks,i]}async _recommendTracks(i){var u;i.preventDefault(),this.submissionSuccess=null;const e=i.target;let o=new FormData(e).get("input-comment");const s=this.selectedTracks.map(d=>d.id),a=`http://localhost:3000/posts/${(u=this.post)==null?void 0:u._id}`,l={userName:"aidan",commentTime:new Date,commentMessage:o,SongIDs:s};try{if((await fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).ok)console.log("Comment successfully added"),this._clearTopTracks(),this._clearSelectedTracks(),this.submissionSuccess=!0,e.reset();else throw new Error("Failed to post comment")}catch(d){console.error("Error:",d),this.submissionSuccess=!1}}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}_handleSubmit(i){i.preventDefault();const e=i.target,t=new FormData(e);this.requestedSearchQuery=t.get("inputted-artist-name"),this.searchSpotify()}_clearTopTracks(){this.topTracks=[]}_clearSelectedTracks(){this.selectedTracks=[]}async fetchTopTracks(i){const e=await fetch(`https://api.spotify.com/v1/artists/${i}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(e.ok){const t=await e.json();t&&t.tracks?this.topTracks=t.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${e.statusText}`)}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+Mt.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const o=await t.json();this.accessToken=o.access_token}else console.error("Spotify authentication failed")}async searchSpotify(){if(!this.requestedSearchQuery.trim())return;const i=`https://api.spotify.com/v1/search?q=${encodeURIComponent(this.requestedSearchQuery)}&type=track&limit=10`;try{await this.authenticate();const e=await fetch(i,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!e.ok)throw new Error(`Error: ${e.statusText}`);const t=await e.json();t.tracks.items.length>0?this.topTracks=t.tracks.items:(this.topTracks=[],alert("No tracks found. Please try another search."))}catch(e){console.error("Error searching for tracks:",e)}}render(){var e,t,o,s;const i=(e=this.post)!=null&&e.postTime?new Date(this.post.postTime).toLocaleString():"";return $`
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
                  ${this.submissionSuccess===!0?$`<p>Submission successful!</p>`:""}
                  ${this.submissionSuccess===!1?$`<p>Submission failed. Please try again.</p>`:""}
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
      border-bottom: 1px solid white;
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
      border: 1px solid white;
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
  `;q([v({type:Object})],F.prototype,"post",2);q([N()],F.prototype,"expanded",2);q([N()],F.prototype,"submissionSuccess",2);q([v()],F.prototype,"expandedText",2);q([v({type:String})],F.prototype,"requestedSearchQuery",2);q([v({type:String})],F.prototype,"accessToken",2);q([v()],F.prototype,"topTracks",2);q([v()],F.prototype,"selectedTracks",2);q([N()],F.prototype,"expandedClass",2);F=q([B("feed-post")],F);var Ps=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,si=(i,e,t,o)=>{for(var s=o>1?void 0:o?Ts(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Ps(e,t,s),s};let nt=class extends T{constructor(){super(...arguments),this.posts=[]}render(){return $`
      <div class="posts-container">
        ${this.posts.map(i=>$` <feed-post .post=${i}></feed-post>`)}
      </div>
    `}};nt.styles=I``;si([v({type:Array})],nt.prototype,"posts",2);nt=si([B("feed-post-list")],nt);var Bs=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,oi=(i,e,t,o)=>{for(var s=o>1?void 0:o?Cs(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Bs(e,t,s),s};let st=class extends T{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),await this._fetchData()}async _fetchData(){console.log("fetching posts!");try{const i=await fetch("http://localhost:3000/posts");if(i.ok){const e=await i.json();this.posts=e,console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",i.status)}catch(i){console.error("Error fetching posts:",i)}}render(){return $`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};st.styles=I`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;oi([v({type:Array})],st.prototype,"posts",2);st=oi([B("main-feed")],st);var Os=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,Ne=(i,e,t,o)=>{for(var s=o>1?void 0:o?Is(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Os(e,t,s),s};let oe=class extends It{get userid(){var i;return console.log(),(i=this.location)==null?void 0:i.params.userid}get edit(){var i;return(i=this.location)==null?void 0:i.params.edit}get profile(){return this.getFromModel("profile")}render(){return $`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `}};oe.styles=I`
    .feed-page {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `;Ne([v({attribute:!1})],oe.prototype,"location",2);Ne([v({reflect:!0})],oe.prototype,"userid",1);Ne([v({reflect:!0})],oe.prototype,"edit",1);Ne([v()],oe.prototype,"profile",1);oe=Ne([B("home-page")],oe);var Us=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,ks=(i,e,t,o)=>{for(var s=o>1?void 0:o?Rs(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(o?l(e,t,s):l(s))||s);return o&&s&&Us(e,t,s),s};let Fs=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"(.*)",component:"not-found-page"}],Ar=class extends Nr{constructor(){super(nn)}render(){return $`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Fs}> </vaadin-router>
      </auth-required>
    `}updated(i){console.log("MTVAPPElement updated:",i.keys()),i.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Ar=ks([B("mtv-app")],Ar);
