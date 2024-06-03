(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis,gr=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,br=Symbol(),Hr=new WeakMap;let Bs=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==br)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(gr&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Hr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Hr.set(t,e))}return e}toString(){return this.cssText}};const Yi=r=>new Bs(typeof r=="string"?r:r+"",void 0,br),P=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,a)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new Bs(t,r,br)},Gi=(r,e)=>{if(gr)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=vt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Wr=gr?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Yi(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ki,defineProperty:Ji,getOwnPropertyDescriptor:Xi,getOwnPropertyNames:Qi,getOwnPropertySymbols:Zi,getPrototypeOf:en}=Object,le=globalThis,Yr=le.trustedTypes,tn=Yr?Yr.emptyScript:"",Jt=le.reactiveElementPolyfillSupport,Ye=(r,e)=>r,At={toAttribute(r,e){switch(e){case Boolean:r=r?tn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},yr=(r,e)=>!Ki(r,e),Gr={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:yr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),le.litPropertyMetadata??(le.litPropertyMetadata=new WeakMap);class Ae extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Gr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ji(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:a}=Xi(this.prototype,e)??{get(){return this[t]},set(c){this[t]=c}};return{get(){return i==null?void 0:i.call(this)},set(c){const h=i==null?void 0:i.call(this);a.call(this,c),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Gr}static _$Ei(){if(this.hasOwnProperty(Ye("elementProperties")))return;const e=en(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ye("properties"))){const t=this.properties,s=[...Qi(t),...Zi(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Wr(i))}else e!==void 0&&t.push(Wr(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var a;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const c=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:At).toAttribute(t,s.type);this._$Em=e,c==null?this.removeAttribute(i):this.setAttribute(i,c),this._$Em=null}}_$AK(e,t){var a;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const c=s.getPropertyOptions(i),h=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:At;this._$Em=i,this[i]=h.fromAttribute(t,c.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??yr)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,c]of this._$Ep)this[a]=c;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,c]of i)c.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],c)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},Ae[Ye("elementProperties")]=new Map,Ae[Ye("finalized")]=new Map,Jt==null||Jt({ReactiveElement:Ae}),(le.reactiveElementVersions??(le.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=globalThis,Tt=Ge.trustedTypes,Kr=Tt?Tt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Us="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,Is="?"+ce,rn=`<${Is}>`,fe=document,Je=()=>fe.createComment(""),Xe=r=>r===null||typeof r!="object"&&typeof r!="function",Ls=Array.isArray,sn=r=>Ls(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Xt=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jr=/-->/g,Xr=/>/g,de=RegExp(`>|${Xt}(?:([^\\s"'>=/]+)(${Xt}*=${Xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qr=/'/g,Zr=/"/g,Ds=/^(?:script|style|textarea|title)$/i,nn=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),y=nn(1),Ce=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),es=new WeakMap,pe=fe.createTreeWalker(fe,129);function Fs(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kr!==void 0?Kr.createHTML(e):e}const on=(r,e)=>{const t=r.length-1,s=[];let i,a=e===2?"<svg>":"",c=Ve;for(let h=0;h<t;h++){const d=r[h];let m,b,w=-1,v=0;for(;v<d.length&&(c.lastIndex=v,b=c.exec(d),b!==null);)v=c.lastIndex,c===Ve?b[1]==="!--"?c=Jr:b[1]!==void 0?c=Xr:b[2]!==void 0?(Ds.test(b[2])&&(i=RegExp("</"+b[2],"g")),c=de):b[3]!==void 0&&(c=de):c===de?b[0]===">"?(c=i??Ve,w=-1):b[1]===void 0?w=-2:(w=c.lastIndex-b[2].length,m=b[1],c=b[3]===void 0?de:b[3]==='"'?Zr:Qr):c===Zr||c===Qr?c=de:c===Jr||c===Xr?c=Ve:(c=de,i=void 0);const x=c===de&&r[h+1].startsWith("/>")?" ":"";a+=c===Ve?d+rn:w>=0?(s.push(m),d.slice(0,w)+Us+d.slice(w)+ce+x):d+ce+(w===-2?h:x)}return[Fs(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class Qe{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,c=0;const h=e.length-1,d=this.parts,[m,b]=on(e,t);if(this.el=Qe.createElement(m,s),pe.currentNode=this.el.content,t===2){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(i=pe.nextNode())!==null&&d.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const w of i.getAttributeNames())if(w.endsWith(Us)){const v=b[c++],x=i.getAttribute(w).split(ce),M=/([.?@])?(.*)/.exec(v);d.push({type:1,index:a,name:M[2],strings:x,ctor:M[1]==="."?cn:M[1]==="?"?ln:M[1]==="@"?hn:Lt}),i.removeAttribute(w)}else w.startsWith(ce)&&(d.push({type:6,index:a}),i.removeAttribute(w));if(Ds.test(i.tagName)){const w=i.textContent.split(ce),v=w.length-1;if(v>0){i.textContent=Tt?Tt.emptyScript:"";for(let x=0;x<v;x++)i.append(w[x],Je()),pe.nextNode(),d.push({type:2,index:++a});i.append(w[v],Je())}}}else if(i.nodeType===8)if(i.data===Is)d.push({type:2,index:a});else{let w=-1;for(;(w=i.data.indexOf(ce,w+1))!==-1;)d.push({type:7,index:a}),w+=ce.length-1}a++}}static createElement(e,t){const s=fe.createElement("template");return s.innerHTML=e,s}}function Oe(r,e,t=r,s){var c,h;if(e===Ce)return e;let i=s!==void 0?(c=t._$Co)==null?void 0:c[s]:t._$Cl;const a=Xe(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=Oe(r,i._$AS(r,e.values),i,s)),e}class an{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??fe).importNode(t,!0);pe.currentNode=i;let a=pe.nextNode(),c=0,h=0,d=s[0];for(;d!==void 0;){if(c===d.index){let m;d.type===2?m=new ot(a,a.nextSibling,this,e):d.type===1?m=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(m=new un(a,this,e)),this._$AV.push(m),d=s[++h]}c!==(d==null?void 0:d.index)&&(a=pe.nextNode(),c++)}return pe.currentNode=fe,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class ot{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Oe(this,e,t),Xe(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==Ce&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):sn(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==L&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Qe.createElement(Fs(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(t);else{const c=new an(i,this),h=c.u(this.options);c.p(t),this.T(h),this._$AH=c}}_$AC(e){let t=es.get(e.strings);return t===void 0&&es.set(e.strings,t=new Qe(e)),t}k(e){Ls(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const a of e)i===t.length?t.push(s=new ot(this.S(Je()),this.S(Je()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}_$AI(e,t=this,s,i){const a=this.strings;let c=!1;if(a===void 0)e=Oe(this,e,t,0),c=!Xe(e)||e!==this._$AH&&e!==Ce,c&&(this._$AH=e);else{const h=e;let d,m;for(e=a[0],d=0;d<a.length-1;d++)m=Oe(this,h[s+d],t,d),m===Ce&&(m=this._$AH[d]),c||(c=!Xe(m)||m!==this._$AH[d]),m===L?e=L:e!==L&&(e+=(m??"")+a[d+1]),this._$AH[d]=m}c&&!i&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class cn extends Lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}class ln extends Lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}}class hn extends Lt{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=Oe(this,e,t,0)??L)===Ce)return;const s=this._$AH,i=e===L&&s!==L||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==L&&(s===L||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class un{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Oe(this,e)}}const Qt=Ge.litHtmlPolyfillSupport;Qt==null||Qt(Qe,ot),(Ge.litHtmlVersions??(Ge.litHtmlVersions=[])).push("3.1.2");const dn=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new ot(e.insertBefore(Je(),a),a,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ce}};var Rs;S._$litElement$=!0,S.finalized=!0,(Rs=globalThis.litElementHydrateSupport)==null||Rs.call(globalThis,{LitElement:S});const Zt=globalThis.litElementPolyfillSupport;Zt==null||Zt({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:yr},fn=(r=pn,e,t)=>{const{kind:s,metadata:i}=t;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(t.name,r),s==="accessor"){const{name:c}=t;return{set(h){const d=e.get.call(this);e.set.call(this,h),this.requestUpdate(c,d,r)},init(h){return h!==void 0&&this.P(c,void 0,r),h}}}if(s==="setter"){const{name:c}=t;return function(h){const d=this[c];e.call(this,h),this.requestUpdate(c,d,r)}}throw Error("Unsupported decorator location: "+s)};function _(r){return(e,t)=>typeof t=="object"?fn(r,e,t):((s,i,a)=>{const c=i.hasOwnProperty(a);return i.constructor.createProperty(a,c?{...s,wrapped:!0}:s),c?Object.getOwnPropertyDescriptor(i,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(r){return _({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ns=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ts=class{constructor(e,t,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,c)),this.unsubscribe=c},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ns(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mn{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gn=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},rs=class extends mn{constructor(e,t,s){var i,a;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=c=>{const h=c.composedPath()[0];c.context===this.context&&h!==this.host&&(c.stopPropagation(),this.addCallback(c.callback,h,c.subscribe))},this.onProviderRequest=c=>{const h=c.composedPath()[0];if(c.context!==this.context||h===this.host)return;const d=new Set;for(const[m,{consumerHost:b}]of this.subscriptions)d.has(m)||(d.add(m),b.dispatchEvent(new Ns(this.context,m,!0)));c.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(i=this.host).addController)==null||a.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new gn(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ms({context:r}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new rs(this,{context:r}))}),{get(){return e.get.call(this)},set(i){var a;return(a=s.get(this))==null||a.setValue(i),e.set.call(this,i)},init(i){var a;return(a=s.get(this))==null||a.setValue(i),i}};{e.constructor.addInitializer(c=>{s.set(c,new rs(c,{context:r}))});const i=Object.getOwnPropertyDescriptor(e,t);let a;if(i===void 0){const c=new WeakMap;a={get:function(){return c.get(this)},set:function(h){s.get(this).setValue(h),c.set(this,h)},configurable:!0,enumerable:!0}}else{const c=i.set;a={...i,set:function(h){s.get(this).setValue(h),c==null||c.call(this,h)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function js({context:r,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new ts(this,{context:r,callback:i=>{this[s.name]=i},subscribe:e})}):t.constructor.addInitializer(i=>{new ts(i,{context:r,callback:a=>{i[s]=a},subscribe:e})})}}let bn=class extends S{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",s=>{const i=s.detail;console.log("Got message: ",i),this.receive(i)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(i=>{const a=i(this.model);this.model=a}):this.model=t}}},yn=class extends S{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class wn{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,i=this._handlers.get(s);return i?i(t,e):e}}function vn(r){return e=>Object.assign({},e,r)}function _n(r){return r}const xn="http://localhost:3000",En=`${xn}`,$n="/api",ir="JWT_AUTH_TOKEN",ae=class ae{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new ae;return console.log("Deauthenticating",e,ae._theUser),e===ae._theUser&&(localStorage.removeItem(ir),ae._theUser=t),t}};ae._theUser=new ae;let U=ae;class Ze extends U{constructor(e,t){super();const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(i).split("").map(function(h){return"%"+("00"+h.charCodeAt(0).toString(16)).slice(-2)}).join("")),c=JSON.parse(a);console.log("Token payload",c),this.token=e,this.authenticated=!0,this.username=c.username,this.signOut=t}static authenticate(e,t){return U._theUser=new Ze(e,t),localStorage.setItem(ir,e),U._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(ir);return t?Ze.authenticate(t,e):U._theUser}}class wr{constructor(e){this._base=$n,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=U._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${U._theUser.token}`};return e?{...s,...a}:a}else return e?{...s}:void 0}_url(e){return`${En}${this._base}${e}`}}class ss extends wr{constructor(e){super(Object.fromEntries(e))}}class qs extends wr{constructor(){super(void 0)}}var kn=Object.defineProperty,zs=(r,e,t,s)=>{for(var i=void 0,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=c(e,t,i)||i);return i&&kn(e,t,i),i};const Vs="MTVModel",is={user:new U,profile:void 0},Sn=()=>new wn,Hs=vn,Ws=_n;class Ys extends bn{constructor(e){super(e,is),this.model=is}}zs([Ms({context:Vs}),E()],Ys.prototype,"model");class Fe extends yn{getFromModel(e){if(console.log("Accessing model for path:",e,"Model:",this._model),this._model)return this._model[e]}}zs([js({context:Vs,subscribe:!0}),_({attribute:!1})],Fe.prototype,"_model");const vr=Sn(),An=vr.update;vr.addMessage("ProfileSelected",async r=>{const{userid:e}=r;try{const t=new qs,s=await t.get(`/profiles/${e}`);if(console.log("Request headers:",t._headers()),s.status===200){const i=await s.json();return console.log("Profile:",i),Hs({profile:i})}}catch(t){console.error("Error fetching profile:",t)}return Ws});vr.addMessage("ProfileSaved",async r=>{const{userid:e,profile:t}=r;try{const s=new wr(t),i=await s.put(`/profiles/${e}`);if(console.log("Request headers:",s._headers()),i.status===200){const a=await i.json();return console.log("Profile:",a),Hs({profile:a})}}catch(s){console.error("Error saving profile:",s)}return Ws});const Tn=P`
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
`;var Cn=Object.defineProperty,On=Object.getOwnPropertyDescriptor,at=(r,e,t,s)=>{for(var i=s>1?void 0:s?On(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Cn(e,t,i),i};let me=class extends S{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,s)=>{const i=t[0].toUpperCase(),a=s[0].toUpperCase();return i<a?-1:i>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return y`
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
          ${this.names.map(r=>y`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
                ></default-card>
              </slot>`)}
        </section>
      </section>
    `}};me.styles=[Pn];at([_({type:Array})],me.prototype,"names",2);at([_({type:Array})],me.prototype,"namesOriginalOrder",2);at([_({type:Array})],me.prototype,"listAttributes",2);at([E()],me.prototype,"sort_state",2);me=at([A("sortable-list")],me);const Rn=P`
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
`;var Bn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,Dt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Un(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Bn(e,t,i),i};let Re=class extends S{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return y`
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
          ${this.names.map(r=>y`<slot
                ><default-card
                  title=${r[0]}
                  description=${r[1]}
                  user_id=${r[2]}
                ></default-card
              ></slot>`)}
        </section>
      </section>
    `}};Re.styles=[Rn];Dt([_({type:Array})],Re.prototype,"names",2);Dt([_({type:Array})],Re.prototype,"listAttributes",2);Dt([E()],Re.prototype,"sort_state",2);Re=Dt([A("general-list")],Re);const In=P`
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
`;var Ln=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,_r=(r,e,t,s)=>{for(var i=s>1?void 0:s?Dn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Ln(e,t,i),i};let et=class extends S{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return y`
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
    `}};et.styles=[In];_r([_({type:Array})],et.prototype,"artists",2);_r([_({type:String})],et.prototype,"listAttributes",2);et=_r([A("favorites-list")],et);const Fn=P`
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
`;var Nn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,_e=(r,e,t,s)=>{for(var i=s>1?void 0:s?Mn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Nn(e,t,i),i};let se=class extends S{constructor(){super(...arguments),this.open=!1,this.align="left",this.profileImageLink=""}_signOutUser(){console.log("Log Out Clicked.");const r=new CustomEvent("userSignOutTriggeredWithinDropDown",{bubbles:!0,composed:!0});this.dispatchEvent(r)}render(){return y`
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
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};se.styles=[Fn];_e([_({reflect:!0,type:Boolean})],se.prototype,"open",2);_e([_()],se.prototype,"align",2);_e([_()],se.prototype,"profileImage",2);_e([_()],se.prototype,"profileUserID",2);_e([_()],se.prototype,"profileDescription",2);_e([_()],se.prototype,"profileImageLink",2);se=_e([A("drop-down")],se);const jn=P`
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
`;var qn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Gs=(r,e,t,s)=>{for(var i=s>1?void 0:s?zn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&qn(e,t,i),i};let Pt=class extends S{constructor(){super(...arguments),this.on=!1}render(){return y`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};Pt.styles=[jn];Gs([_({reflect:!0,type:Boolean})],Pt.prototype,"on",2);Pt=Gs([A("color-mode-switch")],Pt);const Vn=P`
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
`;var Hn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Ft=(r,e,t,s)=>{for(var i=s>1?void 0:s?Wn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Hn(e,t,i),i};let Be=class extends S{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return y`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};Be.styles=[Vn];Ft([_()],Be.prototype,"title",2);Ft([_()],Be.prototype,"description",2);Ft([_()],Be.prototype,"user_id",2);Be=Ft([A("default-card")],Be);const Yn=P`
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
`;var Gn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,xr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Kn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Gn(e,t,i),i};let tt=class extends S{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return y`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};tt.styles=[Yn];xr([_({reflect:!0,type:Boolean})],tt.prototype,"on",2);xr([_()],tt.prototype,"filteredState",2);tt=xr([A("toggle-switch")],tt);const Jn=P`
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
`;function Ct(r){return r=r||[],Array.isArray(r)?r:[r]}function Y(r){return`[Vaadin.Router] ${r}`}function Xn(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const Ot="module",Rt="nomodule",nr=[Ot,Rt];function ns(r){if(!r.match(/.+\.[m]?js$/))throw new Error(Y(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Ks(r){if(!r||!W(r.path))throw new Error(Y('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!ge(r.action)&&!Array.isArray(r.children)&&!ge(r.children)&&!Bt(e)&&!t.some(s=>W(r[s])))throw new Error(Y(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(W(e))ns(e);else if(nr.some(s=>s in e))nr.forEach(s=>s in e&&ns(e[s]));else throw new Error(Y('Expected route bundle to include either "'+Rt+'" or "'+Ot+'" keys, or both'));r.redirect&&["bundle","component"].forEach(s=>{s in r&&console.warn(Y(`Route config "${r.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function os(r){Ct(r).forEach(e=>Ks(e))}function as(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===Ot?t.setAttribute("type",Ot):e===Rt&&t.setAttribute(Rt,""),t.async=!0),new Promise((s,i)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,s(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),i(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function Qn(r){return W(r)?as(r):Promise.race(nr.filter(e=>e in r).map(e=>as(r[e],e)))}function Ke(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function Bt(r){return typeof r=="object"&&!!r}function ge(r){return typeof r=="function"}function W(r){return typeof r=="string"}function Js(r){const e=new Error(Y(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const Pe=new class{};function Zn(r){const e=r.port,t=r.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function cs(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let h=0;h<t.length;h++){const d=t[h];if(d.nodeName&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Zn(e))!==window.location.origin)return;const{pathname:i,search:a,hash:c}=e;Ke("go",{pathname:i,search:a,hash:c})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const eo={activate(){window.document.addEventListener("click",cs)},inactivate(){window.document.removeEventListener("click",cs)}},to=/Trident/.test(navigator.userAgent);to&&!ge(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ls(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;Ke("go",{pathname:e,search:t,hash:s})}const ro={activate(){window.addEventListener("popstate",ls)},inactivate(){window.removeEventListener("popstate",ls)}};var Ne=ri,so=Er,io=co,no=Zs,oo=ti,Xs="/",Qs="./",ao=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Er(r,e){for(var t=[],s=0,i=0,a="",c=e&&e.delimiter||Xs,h=e&&e.delimiters||Qs,d=!1,m;(m=ao.exec(r))!==null;){var b=m[0],w=m[1],v=m.index;if(a+=r.slice(i,v),i=v+b.length,w){a+=w[1],d=!0;continue}var x="",M=r[i],ue=m[2],Ht=m[3],je=m[4],xe=m[5];if(!d&&a.length){var Ee=a.length-1;h.indexOf(a[Ee])>-1&&(x=a[Ee],a=a.slice(0,Ee))}a&&(t.push(a),a="",d=!1);var Wt=x!==""&&M!==void 0&&M!==x,re=xe==="+"||xe==="*",dt=xe==="?"||xe==="*",qe=x||c,pt=Ht||je;t.push({name:ue||s++,prefix:x,delimiter:qe,optional:dt,repeat:re,partial:Wt,pattern:pt?lo(pt):"[^"+oe(qe)+"]+?"})}return(a||i<r.length)&&t.push(a+r.substr(i)),t}function co(r,e){return Zs(Er(r,e))}function Zs(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(s,i){for(var a="",c=i&&i.encode||encodeURIComponent,h=0;h<r.length;h++){var d=r[h];if(typeof d=="string"){a+=d;continue}var m=s?s[d.name]:void 0,b;if(Array.isArray(m)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but got array');if(m.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var w=0;w<m.length;w++){if(b=c(m[w],d),!e[h].test(b))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'"');a+=(w===0?d.prefix:d.delimiter)+b}continue}if(typeof m=="string"||typeof m=="number"||typeof m=="boolean"){if(b=c(String(m),d),!e[h].test(b))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but got "'+b+'"');a+=d.prefix+b;continue}if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be '+(d.repeat?"an array":"a string"))}return a}}function oe(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function lo(r){return r.replace(/([=!:$/()])/g,"\\$1")}function ei(r){return r&&r.sensitive?"":"i"}function ho(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function uo(r,e,t){for(var s=[],i=0;i<r.length;i++)s.push(ri(r[i],e,t).source);return new RegExp("(?:"+s.join("|")+")",ei(t))}function po(r,e,t){return ti(Er(r,t),e,t)}function ti(r,e,t){t=t||{};for(var s=t.strict,i=t.start!==!1,a=t.end!==!1,c=oe(t.delimiter||Xs),h=t.delimiters||Qs,d=[].concat(t.endsWith||[]).map(oe).concat("$").join("|"),m=i?"^":"",b=r.length===0,w=0;w<r.length;w++){var v=r[w];if(typeof v=="string")m+=oe(v),b=w===r.length-1&&h.indexOf(v[v.length-1])>-1;else{var x=v.repeat?"(?:"+v.pattern+")(?:"+oe(v.delimiter)+"(?:"+v.pattern+"))*":v.pattern;e&&e.push(v),v.optional?v.partial?m+=oe(v.prefix)+"("+x+")?":m+="(?:"+oe(v.prefix)+"("+x+"))?":m+=oe(v.prefix)+"("+x+")"}}return a?(s||(m+="(?:"+c+")?"),m+=d==="$"?"$":"(?="+d+")"):(s||(m+="(?:"+c+"(?="+d+"))?"),b||(m+="(?="+c+"|"+d+")")),new RegExp(m,ei(t))}function ri(r,e,t){return r instanceof RegExp?ho(r,e):Array.isArray(r)?uo(r,e,t):po(r,e,t)}Ne.parse=so;Ne.compile=io;Ne.tokensToFunction=no;Ne.tokensToRegExp=oo;const{hasOwnProperty:fo}=Object.prototype,or=new Map;or.set("|false",{keys:[],pattern:/(?:)/});function hs(r){try{return decodeURIComponent(r)}catch{return r}}function mo(r,e,t,s,i){t=!!t;const a=`${r}|${t}`;let c=or.get(a);if(!c){const m=[];c={keys:m,pattern:Ne(r,m,{end:t,strict:r===""})},or.set(a,c)}const h=c.pattern.exec(e);if(!h)return null;const d=Object.assign({},i);for(let m=1;m<h.length;m++){const b=c.keys[m-1],w=b.name,v=h[m];(v!==void 0||!fo.call(d,w))&&(b.repeat?d[w]=v?v.split(b.delimiter).map(hs):[]:d[w]=v&&hs(v))}return{path:h[0],keys:(s||[]).concat(c.keys),params:d}}function si(r,e,t,s,i){let a,c,h=0,d=r.path||"";return d.charAt(0)==="/"&&(t&&(d=d.substr(1)),t=!0),{next(m){if(r===m)return{done:!0};const b=r.__children=r.__children||r.children;if(!a&&(a=mo(d,e,!b,s,i),a))return{done:!1,value:{route:r,keys:a.keys,params:a.params,path:a.path}};if(a&&b)for(;h<b.length;){if(!c){const v=b[h];v.parent=r;let x=a.path.length;x>0&&e.charAt(x)==="/"&&(x+=1),c=si(v,e.substr(x),t,a.keys,a.params)}const w=c.next(m);if(!w.done)return{done:!1,value:w.value};c=null,h++}return{done:!0}}}}function go(r){if(ge(r.route.action))return r.route.action(r)}function bo(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function yo(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function wo(r,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const i={path:s,route:t};if(!r.chain)r.chain=[];else if(t.parent){let a=r.chain.length;for(;a--&&r.chain[a].route&&r.chain[a].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class rt{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||go,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){os(e);const t=[...Ct(e)];this.root.__children=t}addRoutes(e){return os(e),this.root.__children.push(...Ct(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,W(e)?{pathname:e}:e),s=si(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let a=null,c=null,h=t;function d(m,b=a.value.route,w){const v=w===null&&a.value.route;return a=c||s.next(v),c=null,!m&&(a.done||!bo(b,a.value.route))?(c=a,Promise.resolve(Pe)):a.done?Promise.reject(Js(t)):(h=Object.assign(h?{chain:h.chain?h.chain.slice(0):[]}:{},t,a.value),wo(h,a.value),Promise.resolve(i(h)).then(x=>x!=null&&x!==Pe?(h.result=x.result||x,h):d(m,b,x)))}return t.next=d,Promise.resolve().then(()=>d(!0,this.root)).catch(m=>{const b=yo(h);if(m?console.warn(b):m=new Error(b),m.context=m.context||h,m instanceof DOMException||(m.code=m.code||500),this.errorHandler)return h.result=this.errorHandler(m),h;throw m})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}rt.pathToRegexp=Ne;const{pathToRegexp:us}=rt,ds=new Map;function ii(r,e,t){const s=e.name||e.component;if(s&&(r.has(s)?r.get(s).push(e):r.set(s,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const a=t[i];a.parent=e,ii(r,a,a.__children||a.children)}}function ps(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function fs(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function vo(r,e={}){if(!(r instanceof rt))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,i)=>{let a=ps(t,s);if(!a&&(t.clear(),ii(t,r.root,r.root.__children),a=ps(t,s),!a))throw new Error(`Route "${s}" not found`);let c=ds.get(a.fullPath);if(!c){let d=fs(a),m=a.parent;for(;m;){const x=fs(m);x&&(d=x.replace(/\/$/,"")+"/"+d.replace(/^\//,"")),m=m.parent}const b=us.parse(d),w=us.tokensToFunction(b),v=Object.create(null);for(let x=0;x<b.length;x++)W(b[x])||(v[b[x].name]=!0);c={toPath:w,keys:v},ds.set(d,c),a.fullPath=d}let h=c.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const d={},m=Object.keys(i);for(let w=0;w<m.length;w++){const v=m[w];c.keys[v]||(d[v]=i[v])}const b=e.stringifyQueryParams(d);b&&(h+=b.charAt(0)==="?"?b:`?${b}`)}return h}}let ms=[];function _o(r){ms.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),ms=r}const xo=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},Eo=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function gs(r,e){return r.classList.add(e),new Promise(t=>{if(xo(r)){const s=r.getBoundingClientRect(),i=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;r.setAttribute("style",`position: absolute; ${i}`),Eo(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const $o=256;function er(r){return r!=null}function ko(r){const e=Object.assign({},r);return delete e.next,e}function V({pathname:r="",search:e="",hash:t="",chain:s=[],params:i={},redirectFrom:a,resolver:c},h){const d=s.map(m=>m.route);return{baseUrl:c&&c.baseUrl||"",pathname:r,search:e,hash:t,routes:d,route:h||d.length&&d[d.length-1]||null,params:i,redirectFrom:a,getUrl:(m={})=>xt(G.pathToRegexp.compile(ni(d))(Object.assign({},i,m)),c)}}function bs(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function So(r,e){e.location=V(r);const t=r.chain.map(s=>s.route).indexOf(r.route);return r.chain[t].element=e,e}function _t(r,e,t){if(ge(r))return r.apply(t,e)}function ys(r,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return _t(t[r],e,t)}}function Ao(r,e){if(!Array.isArray(r)&&!Bt(r))throw new Error(Y(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=Ct(r);for(let s=0;s<t.length;s++)Ks(t[s]),e.__children.push(t[s])}function mt(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function xt(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function ni(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class G extends rt{constructor(e,t){const s=document.head.querySelector("base"),i=s&&s.getAttribute("href");super([],Object.assign({baseUrl:i&&rt.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=c=>this.__resolveRoute(c);const a=G.NavigationTrigger;G.setTriggers.apply(G,Object.keys(a).map(c=>a[c])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=V({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();ge(t.children)&&(s=s.then(()=>t.children(ko(e))).then(a=>{!er(a)&&!ge(t.children)&&(a=t.children),Ao(a,t)}));const i={redirect:a=>bs(e,a),component:a=>{const c=document.createElement(a);return this.__createdByRouter.set(c,!0),c}};return s.then(()=>{if(this.__isLatestRender(e))return _t(t.action,[e,i],t)}).then(a=>{if(er(a)&&(a instanceof HTMLElement||a.redirect||a===Pe))return a;if(W(t.redirect))return i.redirect(t.redirect);if(t.bundle)return Qn(t.bundle).then(()=>{},()=>{throw new Error(Y(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(er(a))return a;if(W(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},W(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(i).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const c=this.__previousContext;if(a===c)return this.__updateBrowserHistory(c,!0),this.location;if(this.location=V(a),t&&this.__updateBrowserHistory(a,s===1),Ke("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,c),this.__previousContext=a,this.location;this.__addAppearingContent(a,c);const h=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,c),h.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),mt(this.__outlet&&this.__outlet.children),this.location=V(Object.assign(i,{resolver:this})),Ke("error",Object.assign({router:this,error:a},i)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const a=s!==t?s:e,h=xt(ni(s.chain),s.resolver)===s.pathname,d=(m,b=m.route,w)=>m.next(void 0,b,w).then(v=>v===null||v===Pe?h?m:b.parent!==null?d(m,b.parent,v):v:v);return d(s).then(m=>{if(m===null||m===Pe)throw Js(a);return m&&m!==Pe&&m!==s?this.__fullyResolveChain(a,m):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(So(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(Y(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Xn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],i=e.chain;let a=Promise.resolve();const c=()=>({cancel:!0}),h=d=>bs(e,d);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let d=0;d<Math.min(s.length,i.length)&&!(s[d].route!==i[d].route||s[d].path!==i[d].path&&s[d].element!==i[d].element||!this.__isReusableElement(s[d].element,i[d].element));d=++e.__divergedChainIndex);if(e.__skipAttach=i.length===s.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let d=i.length-1;d>=0;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:c},s[d]);for(let d=0;d<i.length;d++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:c,redirect:h},i[d]),s[d].element.location=V(e,s[d].route)}else for(let d=s.length-1;d>=e.__divergedChainIndex;d--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:c},s[d])}if(!e.__skipAttach)for(let d=0;d<i.length;d++)d<e.__divergedChainIndex?d<s.length&&s[d].element&&(s[d].element.location=V(e,s[d].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:c,redirect:h},i[d]),i[d].element&&(i[d].element.location=V(e,i[d].route)));return a.then(d=>{if(d){if(d.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(d.redirect)return this.__redirect(d.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,i){const a=V(t);return e.then(c=>{if(this.__isLatestRender(t))return ys("onBeforeLeave",[a,s,this],i.element)(c)}).then(c=>{if(!(c||{}).redirect)return c})}__runOnBeforeEnterCallbacks(e,t,s,i){const a=V(t,i.route);return e.then(c=>{if(this.__isLatestRender(t))return ys("onBeforeEnter",[a,s,this],i.element)(c)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>$o)throw new Error(Y(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(Y(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const a=i?"replaceState":"pushState";window.history[a](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const a=t&&t.chain[i].element;if(a)if(a.parentNode===s)e.chain[i].element=a,s=a;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let i=s;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const c=e.chain[a].element;c&&(i.appendChild(c),this.__addedByRouter.set(c,!0),i===s&&this.__appearingContent.push(c),i=c)}}__removeDisappearingContent(){this.__disappearingContent&&mt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(mt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const i=t.chain[s].element;if(i)try{const a=V(e);_t(i.onAfterLeave,[a,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&mt(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},i=V(e,e.chain[t].route);_t(s.onAfterEnter,[i,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],i=[],a=e.chain;let c;for(let h=a.length;h>0;h--)if(a[h-1].route.animate){c=a[h-1].route.animate;break}if(t&&s&&c){const h=Bt(c)&&c.leave||"leaving",d=Bt(c)&&c.enter||"entering";i.push(gs(t,h)),i.push(gs(s,d))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:i}=e?e.detail:window.location;W(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:i},!0))}static setTriggers(...e){_o(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=vo(this)),xt(this.__urlForName(e,t),this)}urlForPath(e,t){return xt(G.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:i}=W(e)?this.__createUrl(e,"http://a"):e;return Ke("go",{pathname:t,search:s,hash:i})}}const To=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Et=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Po(){function r(){return!0}return oi(r)}function Co(){try{return Oo()?!0:Ro()?Et?!Bo():!Po():!1}catch{return!1}}function Oo(){return localStorage.getItem("vaadin.developmentmode.force")}function Ro(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Bo(){return!!(Et&&Object.keys(Et).map(e=>Et[e]).filter(e=>e.productionMode).length>0)}function oi(r,e){if(typeof r!="function")return;const t=To.exec(r.toString());if(t)try{r=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return r(e)}window.Vaadin=window.Vaadin||{};const ws=function(r,e){if(window.Vaadin.developmentMode)return oi(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Co());function Uo(){}const Io=function(){if(typeof ws=="function")return ws(Uo)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Io();G.NavigationTrigger={POPSTATE:ro,CLICK:eo};var Lo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,$r=(r,e,t,s)=>{for(var i=s>1?void 0:s?Do(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Lo(e,t,i),i};let st=class extends S{constructor(r){super(),this.redirectAfterSubmit=!1,this.profile=r}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),s={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),spotify:t.get("spotify")==="true"},i=new CustomEvent("profile-update",{detail:{profile:s},bubbles:!0,composed:!0});console.log("profile-update Event being sent to DOM"),this.dispatchEvent(i);const a=new CustomEvent("update-using",{detail:{profile:s},bubbles:!0,composed:!0});console.log("profile update event being sent to profile component to update using"),this.dispatchEvent(a),this.requestUpdate(),this.redirectAfterSubmit&&G.go("/app/home")}render(){var r,e,t,s,i,a;return y`
            <section class="edit-mode-section">
              <form @submit=${this._handleSubmit}>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    .value=${(r=this.profile)==null?void 0:r.name}
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
                    <div class="form-group">
                    <label for="timezone">Timezone</label>
                    <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    .value=${(s=this.profile)==null?void 0:s.timezone}
                    placeholder="ex. PST, CST, EST"
                    />
                    </div>
                  <fieldset class="form-group">
                      <legend>Do you use Spotify?</legend>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="true"
                          ?checked=${((i=this.profile)==null?void 0:i.spotify)===!0}
                        /> Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="false"
                          ?checked=${((a=this.profile)==null?void 0:a.spotify)===!1}
                        /> No
                      </label>
                    </fieldset>
                </fieldset>
                <div class="form-group">
                  <button type="submit">Save</button>
                </div>
              </form>
            </section>
          `}};st.styles=[Jn];$r([_({type:Object})],st.prototype,"profile",2);$r([_({type:Boolean})],st.prototype,"redirectAfterSubmit",2);st=$r([A("edit-profile-form")],st);var Fo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,ct=(r,e,t,s)=>{for(var i=s>1?void 0:s?No(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Fo(e,t,i),i};let be=class extends S{constructor(){super(...arguments),this.path="",this.editMode=!1,this.profileEditText="Edit Profile."}get profile(){return this.using||{}}connectedCallback(){super.connectedCallback(),this.addEventListener("update-using",this._handleUsingUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("update-using",this._handleUsingUpdate)}_handleUsingUpdate(r){r.detail&&r.detail.profile&&(this.using=r.detail.profile,this._changeEditMode(),this.requestUpdate())}_changeEditMode(){this.editMode=!this.editMode,this.profileEditText=this.editMode?"Close Edit Menu.":"Edit Profile."}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),s={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),profileImage:t.get("profileImage"),spotify:t.get("spotify")==="true"};this.using=s,this.requestUpdate(),console.log("Form submitted with:",s);const i=new CustomEvent("profile-update",{detail:{profile:s},bubbles:!0,composed:!0});this.dispatchEvent(i),this._changeEditMode()}render(){const{name:r,profileImage:e,profileDescription:t,bio:s}=this.profile;return y`
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
            <h1>${r}&apos;s Page</h1>
            <p class="user-description">${s}</p>
          </section>
        </section>

        <section class="coming-soon-container">
          <p class="info">More profile functionality is coming soon!</p>
        </section>
      </section>
    `}};be.styles=Tn;ct([_()],be.prototype,"path",2);ct([_()],be.prototype,"editMode",2);ct([_()],be.prototype,"profileEditText",2);ct([_({attribute:!1})],be.prototype,"using",2);be=ct([A("user-profile")],be);var Mo=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,ai=(r,e,t,s)=>{for(var i=s>1?void 0:s?jo(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Mo(e,t,i),i};let ar=class extends S{constructor(){super(...arguments),this.router=new G(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return y`<slot></slot>`}};ai([_({attribute:!1})],ar.prototype,"routes",2);ar=ai([A("vaadin-router")],ar);const qo=P`
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
`;var zo=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,he=(r,e,t,s)=>{for(var i=s>1?void 0:s?Vo(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&zo(e,t,i),i};let ci="auth",ee=class extends S{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Ze.authenticateFromLocalStorage(()=>this._signOut()),this.showLoginForm=!1,this.whereToRedirect="/createProfile",this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this._handleSignOutEvent=r=>{console.log("Sign out event received",r),this._signOut()}}isAuthenticated(){return this.user.authenticated}toggleLoginForm(){this.showLoginForm=!this.showLoginForm,this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this.requestUpdate()}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}_loginUser(r,e){const t=new FormData;t.append("username",r),t.append("pwd",e),new ss(t).base().post("/login").then(i=>{if(i.status===200)return i.json();throw this.loginStatus=i.status,new Error(`Login failed with status: ${i.status}`)}).then(i=>{console.log("Log In Request Successful!"),this.user=Ze.authenticate(i.token,()=>this._signOut()),this._toggleDialog(!1),console.log("WTR within login ",this.whereToRedirect),G.go(this.whereToRedirect==="app/home"?"app/home":"/createProfile"),this.requestUpdate()}).catch(i=>console.error("Login Error:",i))}_handleLoginSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),s=t.get("username"),i=t.get("pwd");this.whereToRedirect="app/home",typeof s=="string"&&typeof i=="string"?this._loginUser(s,i):console.error("Username or password field is missing or not correctly entered.")}async _handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e),s=t.get("username"),i=t.get("pwd");if(!s||!i)throw this.communicateResultToUser("error"),new Error("Username or password missing from form data.");try{const c=await new ss(t).base().post("/signup");if(c.status===201)await this.createNewUserProfileAfterRegisterSuccess(s),this.whereToRedirect=`/createProfile/${s}`,console.log("whereToRedirect within Register: ",this.whereToRedirect),this.communicateResultToUser("success"),this._loginUser(s,i);else throw new Error(`Failed to register. Status: ${c.status}`)}catch(a){console.error("Error during registration:",a),this.communicateResultToUser("error")}}async createNewUserProfileAfterRegisterSuccess(r){const e="http://localhost:3000";try{const t=await fetch(`${e}/profileCreation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:r})});if(!t.ok)throw new Error(`Failed to create profile: ${t.statusText}`);const s=await t.json();return console.log("Profile created:",s),s}catch(t){return console.error("Error creating profile:",t),null}}communicateResultToUser(r){r==="error"&&(this.showSignUpErrorMessage=!this.showSignUpErrorMessage),r==="success"&&(this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!0)}connectedCallback(){super.connectedCallback(),this.addEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}render(){const r=y`
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
    `;return y`${this.isAuthenticated()?"":r} <slot></slot>`}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=U.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};ee.styles=[qo];he([E()],ee.prototype,"loginStatus",2);he([E()],ee.prototype,"registerStatus",2);he([Ms({context:ci}),E()],ee.prototype,"user",2);he([E()],ee.prototype,"showLoginForm",2);he([E()],ee.prototype,"whereToRedirect",2);he([E()],ee.prototype,"showSignUpErrorMessage",2);he([E()],ee.prototype,"showSignUpSuccessMessage",2);ee=he([A("auth-required")],ee);const Ho=P`
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
`;var Wo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Nt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Yo(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Wo(e,t,i),i};let Ue=class extends S{constructor(){super(...arguments),this.loading=!0,this.user=new U}render(){return y`
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
    `}async updated(r){if(console.log("within header updated"),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;console.log("NEW USER USERNAME: ",e),await this._getData(`/profiles/${e}`),console.log("NEW PROFILE: ",this.profile)}else console.log("changed properties doesn't have user, printing profile anyway? ",this.profile);return!0}async _getData(r){console.log("WITHIN HEADER GET DATA");const e=new qs;try{const t=await e.get(r);if(t.status===200){const s=await t.json();console.log("Profile:",s),this.profile=s,console.log("Profile successfully updated:",this.profile)}else console.error("Failed to fetch profile data. Status:",t.status)}catch(t){console.error("Error fetching profile data:",t)}finally{this.loading=!1}}_signOut(){console.log("Signout"),this.user.signOut()}};Ue.styles=[Ho];Nt([E()],Ue.prototype,"profile",2);Nt([E()],Ue.prototype,"loading",2);Nt([js({context:ci,subscribe:!0}),_({attribute:!1})],Ue.prototype,"user",2);Ue=Nt([A("match-the-vibe-header")],Ue);var Go=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,lt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ko(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Go(e,t,i),i};let ye=class extends Fe{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return y`
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
    `];lt([_({attribute:!1})],ye.prototype,"location",2);lt([_({reflect:!0})],ye.prototype,"userid",1);lt([_({reflect:!0})],ye.prototype,"edit",1);lt([_()],ye.prototype,"profile",1);ye=lt([A("profile-page")],ye);const Jo=P`
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
`;var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,li=(r,e,t,s)=>{for(var i=s>1?void 0:s?ta(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&ea(e,t,i),i};let Ut=class extends S{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return y`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{name:r}=this.track,e=this.track.artists[0].name,{url:t}=this.track.album.images[0];return y`
      <section class="single-track" @click=${()=>this._handleClick()}>
        <img src="${t}" alt="Album cover for ${r}" class="track-image" />
        <section class="details">
          <p class="track-name">${r}</p>
          <p class="artist-name">${e}</p>
        </section>
      </section>
    `}};Ut.styles=[Zo];li([_({type:Object})],Ut.prototype,"track",2);Ut=li([A("track-card")],Ut);var kr={},Mt={};Mt.byteLength=ia;Mt.toByteArray=oa;Mt.fromByteArray=la;var Q=[],q=[],ra=typeof Uint8Array<"u"?Uint8Array:Array,tr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Se=0,sa=tr.length;Se<sa;++Se)Q[Se]=tr[Se],q[tr.charCodeAt(Se)]=Se;q[45]=62;q[95]=63;function hi(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var s=t===e?0:4-t%4;return[t,s]}function ia(r){var e=hi(r),t=e[0],s=e[1];return(t+s)*3/4-s}function na(r,e,t){return(e+t)*3/4-t}function oa(r){var e,t=hi(r),s=t[0],i=t[1],a=new ra(na(r,s,i)),c=0,h=i>0?s-4:s,d;for(d=0;d<h;d+=4)e=q[r.charCodeAt(d)]<<18|q[r.charCodeAt(d+1)]<<12|q[r.charCodeAt(d+2)]<<6|q[r.charCodeAt(d+3)],a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=e&255;return i===2&&(e=q[r.charCodeAt(d)]<<2|q[r.charCodeAt(d+1)]>>4,a[c++]=e&255),i===1&&(e=q[r.charCodeAt(d)]<<10|q[r.charCodeAt(d+1)]<<4|q[r.charCodeAt(d+2)]>>2,a[c++]=e>>8&255,a[c++]=e&255),a}function aa(r){return Q[r>>18&63]+Q[r>>12&63]+Q[r>>6&63]+Q[r&63]}function ca(r,e,t){for(var s,i=[],a=e;a<t;a+=3)s=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),i.push(aa(s));return i.join("")}function la(r){for(var e,t=r.length,s=t%3,i=[],a=16383,c=0,h=t-s;c<h;c+=a)i.push(ca(r,c,c+a>h?h:c+a));return s===1?(e=r[t-1],i.push(Q[e>>2]+Q[e<<4&63]+"==")):s===2&&(e=(r[t-2]<<8)+r[t-1],i.push(Q[e>>10]+Q[e>>4&63]+Q[e<<2&63]+"=")),i.join("")}var Sr={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Sr.read=function(r,e,t,s,i){var a,c,h=i*8-s-1,d=(1<<h)-1,m=d>>1,b=-7,w=t?i-1:0,v=t?-1:1,x=r[e+w];for(w+=v,a=x&(1<<-b)-1,x>>=-b,b+=h;b>0;a=a*256+r[e+w],w+=v,b-=8);for(c=a&(1<<-b)-1,a>>=-b,b+=s;b>0;c=c*256+r[e+w],w+=v,b-=8);if(a===0)a=1-m;else{if(a===d)return c?NaN:(x?-1:1)*(1/0);c=c+Math.pow(2,s),a=a-m}return(x?-1:1)*c*Math.pow(2,a-s)};Sr.write=function(r,e,t,s,i,a){var c,h,d,m=a*8-i-1,b=(1<<m)-1,w=b>>1,v=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,x=s?0:a-1,M=s?1:-1,ue=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(h=isNaN(e)?1:0,c=b):(c=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-c))<1&&(c--,d*=2),c+w>=1?e+=v/d:e+=v*Math.pow(2,1-w),e*d>=2&&(c++,d/=2),c+w>=b?(h=0,c=b):c+w>=1?(h=(e*d-1)*Math.pow(2,i),c=c+w):(h=e*Math.pow(2,w-1)*Math.pow(2,i),c=0));i>=8;r[t+x]=h&255,x+=M,h/=256,i-=8);for(c=c<<i|h,m+=i;m>0;r[t+x]=c&255,x+=M,c/=256,m-=8);r[t+x-M]|=ue*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(r){const e=Mt,t=Sr,s=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=h,r.SlowBuffer=xe,r.INSPECT_MAX_BYTES=50;const i=2147483647;r.kMaxLength=i,h.TYPED_ARRAY_SUPPORT=a(),!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const l=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(l,n),l.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function c(l){if(l>i)throw new RangeError('The value "'+l+'" is invalid for option "size"');const n=new Uint8Array(l);return Object.setPrototypeOf(n,h.prototype),n}function h(l,n,o){if(typeof l=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(l)}return d(l,n,o)}h.poolSize=8192;function d(l,n,o){if(typeof l=="string")return v(l,n);if(ArrayBuffer.isView(l))return M(l);if(l==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l);if(X(l,ArrayBuffer)||l&&X(l.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(X(l,SharedArrayBuffer)||l&&X(l.buffer,SharedArrayBuffer)))return ue(l,n,o);if(typeof l=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const u=l.valueOf&&l.valueOf();if(u!=null&&u!==l)return h.from(u,n,o);const p=Ht(l);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof l[Symbol.toPrimitive]=="function")return h.from(l[Symbol.toPrimitive]("string"),n,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l)}h.from=function(l,n,o){return d(l,n,o)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array);function m(l){if(typeof l!="number")throw new TypeError('"size" argument must be of type number');if(l<0)throw new RangeError('The value "'+l+'" is invalid for option "size"')}function b(l,n,o){return m(l),l<=0?c(l):n!==void 0?typeof o=="string"?c(l).fill(n,o):c(l).fill(n):c(l)}h.alloc=function(l,n,o){return b(l,n,o)};function w(l){return m(l),c(l<0?0:je(l)|0)}h.allocUnsafe=function(l){return w(l)},h.allocUnsafeSlow=function(l){return w(l)};function v(l,n){if((typeof n!="string"||n==="")&&(n="utf8"),!h.isEncoding(n))throw new TypeError("Unknown encoding: "+n);const o=Ee(l,n)|0;let u=c(o);const p=u.write(l,n);return p!==o&&(u=u.slice(0,p)),u}function x(l){const n=l.length<0?0:je(l.length)|0,o=c(n);for(let u=0;u<n;u+=1)o[u]=l[u]&255;return o}function M(l){if(X(l,Uint8Array)){const n=new Uint8Array(l);return ue(n.buffer,n.byteOffset,n.byteLength)}return x(l)}function ue(l,n,o){if(n<0||l.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(l.byteLength<n+(o||0))throw new RangeError('"length" is outside of buffer bounds');let u;return n===void 0&&o===void 0?u=new Uint8Array(l):o===void 0?u=new Uint8Array(l,n):u=new Uint8Array(l,n,o),Object.setPrototypeOf(u,h.prototype),u}function Ht(l){if(h.isBuffer(l)){const n=je(l.length)|0,o=c(n);return o.length===0||l.copy(o,0,0,n),o}if(l.length!==void 0)return typeof l.length!="number"||Kt(l.length)?c(0):x(l);if(l.type==="Buffer"&&Array.isArray(l.data))return x(l.data)}function je(l){if(l>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return l|0}function xe(l){return+l!=l&&(l=0),h.alloc(+l)}h.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==h.prototype},h.compare=function(n,o){if(X(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),X(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(n)||!h.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===o)return 0;let u=n.length,p=o.length;for(let f=0,g=Math.min(u,p);f<g;++f)if(n[f]!==o[f]){u=n[f],p=o[f];break}return u<p?-1:p<u?1:0},h.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(n,o){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return h.alloc(0);let u;if(o===void 0)for(o=0,u=0;u<n.length;++u)o+=n[u].length;const p=h.allocUnsafe(o);let f=0;for(u=0;u<n.length;++u){let g=n[u];if(X(g,Uint8Array))f+g.length>p.length?(h.isBuffer(g)||(g=h.from(g)),g.copy(p,f)):Uint8Array.prototype.set.call(p,g,f);else if(h.isBuffer(g))g.copy(p,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=g.length}return p};function Ee(l,n){if(h.isBuffer(l))return l.length;if(ArrayBuffer.isView(l)||X(l,ArrayBuffer))return l.byteLength;if(typeof l!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof l);const o=l.length,u=arguments.length>2&&arguments[2]===!0;if(!u&&o===0)return 0;let p=!1;for(;;)switch(n){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Gt(l).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Vr(l).length;default:if(p)return u?-1:Gt(l).length;n=(""+n).toLowerCase(),p=!0}}h.byteLength=Ee;function Wt(l,n,o){let u=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,n>>>=0,o<=n))return"";for(l||(l="utf8");;)switch(l){case"hex":return Fi(this,n,o);case"utf8":case"utf-8":return Ir(this,n,o);case"ascii":return Li(this,n,o);case"latin1":case"binary":return Di(this,n,o);case"base64":return Ui(this,n,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ni(this,n,o);default:if(u)throw new TypeError("Unknown encoding: "+l);l=(l+"").toLowerCase(),u=!0}}h.prototype._isBuffer=!0;function re(l,n,o){const u=l[n];l[n]=l[o],l[o]=u}h.prototype.swap16=function(){const n=this.length;if(n%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let o=0;o<n;o+=2)re(this,o,o+1);return this},h.prototype.swap32=function(){const n=this.length;if(n%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let o=0;o<n;o+=4)re(this,o,o+3),re(this,o+1,o+2);return this},h.prototype.swap64=function(){const n=this.length;if(n%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let o=0;o<n;o+=8)re(this,o,o+7),re(this,o+1,o+6),re(this,o+2,o+5),re(this,o+3,o+4);return this},h.prototype.toString=function(){const n=this.length;return n===0?"":arguments.length===0?Ir(this,0,n):Wt.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(n){if(!h.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n?!0:h.compare(this,n)===0},h.prototype.inspect=function(){let n="";const o=r.INSPECT_MAX_BYTES;return n=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(n+=" ... "),"<Buffer "+n+">"},s&&(h.prototype[s]=h.prototype.inspect),h.prototype.compare=function(n,o,u,p,f){if(X(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(o===void 0&&(o=0),u===void 0&&(u=n?n.length:0),p===void 0&&(p=0),f===void 0&&(f=this.length),o<0||u>n.length||p<0||f>this.length)throw new RangeError("out of range index");if(p>=f&&o>=u)return 0;if(p>=f)return-1;if(o>=u)return 1;if(o>>>=0,u>>>=0,p>>>=0,f>>>=0,this===n)return 0;let g=f-p,$=u-o;const O=Math.min(g,$),C=this.slice(p,f),R=n.slice(o,u);for(let T=0;T<O;++T)if(C[T]!==R[T]){g=C[T],$=R[T];break}return g<$?-1:$<g?1:0};function dt(l,n,o,u,p){if(l.length===0)return-1;if(typeof o=="string"?(u=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Kt(o)&&(o=p?0:l.length-1),o<0&&(o=l.length+o),o>=l.length){if(p)return-1;o=l.length-1}else if(o<0)if(p)o=0;else return-1;if(typeof n=="string"&&(n=h.from(n,u)),h.isBuffer(n))return n.length===0?-1:qe(l,n,o,u,p);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(l,n,o):Uint8Array.prototype.lastIndexOf.call(l,n,o):qe(l,[n],o,u,p);throw new TypeError("val must be string, number or Buffer")}function qe(l,n,o,u,p){let f=1,g=l.length,$=n.length;if(u!==void 0&&(u=String(u).toLowerCase(),u==="ucs2"||u==="ucs-2"||u==="utf16le"||u==="utf-16le")){if(l.length<2||n.length<2)return-1;f=2,g/=2,$/=2,o/=2}function O(R,T){return f===1?R[T]:R.readUInt16BE(T*f)}let C;if(p){let R=-1;for(C=o;C<g;C++)if(O(l,C)===O(n,R===-1?0:C-R)){if(R===-1&&(R=C),C-R+1===$)return R*f}else R!==-1&&(C-=C-R),R=-1}else for(o+$>g&&(o=g-$),C=o;C>=0;C--){let R=!0;for(let T=0;T<$;T++)if(O(l,C+T)!==O(n,T)){R=!1;break}if(R)return C}return-1}h.prototype.includes=function(n,o,u){return this.indexOf(n,o,u)!==-1},h.prototype.indexOf=function(n,o,u){return dt(this,n,o,u,!0)},h.prototype.lastIndexOf=function(n,o,u){return dt(this,n,o,u,!1)};function pt(l,n,o,u){o=Number(o)||0;const p=l.length-o;u?(u=Number(u),u>p&&(u=p)):u=p;const f=n.length;u>f/2&&(u=f/2);let g;for(g=0;g<u;++g){const $=parseInt(n.substr(g*2,2),16);if(Kt($))return g;l[o+g]=$}return g}function Ci(l,n,o,u){return ft(Gt(n,l.length-o),l,o,u)}function Oi(l,n,o,u){return ft(zi(n),l,o,u)}function Ri(l,n,o,u){return ft(Vr(n),l,o,u)}function Bi(l,n,o,u){return ft(Vi(n,l.length-o),l,o,u)}h.prototype.write=function(n,o,u,p){if(o===void 0)p="utf8",u=this.length,o=0;else if(u===void 0&&typeof o=="string")p=o,u=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(u)?(u=u>>>0,p===void 0&&(p="utf8")):(p=u,u=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-o;if((u===void 0||u>f)&&(u=f),n.length>0&&(u<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let g=!1;for(;;)switch(p){case"hex":return pt(this,n,o,u);case"utf8":case"utf-8":return Ci(this,n,o,u);case"ascii":case"latin1":case"binary":return Oi(this,n,o,u);case"base64":return Ri(this,n,o,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bi(this,n,o,u);default:if(g)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),g=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ui(l,n,o){return n===0&&o===l.length?e.fromByteArray(l):e.fromByteArray(l.slice(n,o))}function Ir(l,n,o){o=Math.min(l.length,o);const u=[];let p=n;for(;p<o;){const f=l[p];let g=null,$=f>239?4:f>223?3:f>191?2:1;if(p+$<=o){let O,C,R,T;switch($){case 1:f<128&&(g=f);break;case 2:O=l[p+1],(O&192)===128&&(T=(f&31)<<6|O&63,T>127&&(g=T));break;case 3:O=l[p+1],C=l[p+2],(O&192)===128&&(C&192)===128&&(T=(f&15)<<12|(O&63)<<6|C&63,T>2047&&(T<55296||T>57343)&&(g=T));break;case 4:O=l[p+1],C=l[p+2],R=l[p+3],(O&192)===128&&(C&192)===128&&(R&192)===128&&(T=(f&15)<<18|(O&63)<<12|(C&63)<<6|R&63,T>65535&&T<1114112&&(g=T))}}g===null?(g=65533,$=1):g>65535&&(g-=65536,u.push(g>>>10&1023|55296),g=56320|g&1023),u.push(g),p+=$}return Ii(u)}const Lr=4096;function Ii(l){const n=l.length;if(n<=Lr)return String.fromCharCode.apply(String,l);let o="",u=0;for(;u<n;)o+=String.fromCharCode.apply(String,l.slice(u,u+=Lr));return o}function Li(l,n,o){let u="";o=Math.min(l.length,o);for(let p=n;p<o;++p)u+=String.fromCharCode(l[p]&127);return u}function Di(l,n,o){let u="";o=Math.min(l.length,o);for(let p=n;p<o;++p)u+=String.fromCharCode(l[p]);return u}function Fi(l,n,o){const u=l.length;(!n||n<0)&&(n=0),(!o||o<0||o>u)&&(o=u);let p="";for(let f=n;f<o;++f)p+=Hi[l[f]];return p}function Ni(l,n,o){const u=l.slice(n,o);let p="";for(let f=0;f<u.length-1;f+=2)p+=String.fromCharCode(u[f]+u[f+1]*256);return p}h.prototype.slice=function(n,o){const u=this.length;n=~~n,o=o===void 0?u:~~o,n<0?(n+=u,n<0&&(n=0)):n>u&&(n=u),o<0?(o+=u,o<0&&(o=0)):o>u&&(o=u),o<n&&(o=n);const p=this.subarray(n,o);return Object.setPrototypeOf(p,h.prototype),p};function I(l,n,o){if(l%1!==0||l<0)throw new RangeError("offset is not uint");if(l+n>o)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(n,o,u){n=n>>>0,o=o>>>0,u||I(n,o,this.length);let p=this[n],f=1,g=0;for(;++g<o&&(f*=256);)p+=this[n+g]*f;return p},h.prototype.readUintBE=h.prototype.readUIntBE=function(n,o,u){n=n>>>0,o=o>>>0,u||I(n,o,this.length);let p=this[n+--o],f=1;for(;o>0&&(f*=256);)p+=this[n+--o]*f;return p},h.prototype.readUint8=h.prototype.readUInt8=function(n,o){return n=n>>>0,o||I(n,1,this.length),this[n]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(n,o){return n=n>>>0,o||I(n,2,this.length),this[n]|this[n+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(n,o){return n=n>>>0,o||I(n,2,this.length),this[n]<<8|this[n+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(n,o){return n=n>>>0,o||I(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+this[n+3]*16777216},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(n,o){return n=n>>>0,o||I(n,4,this.length),this[n]*16777216+(this[n+1]<<16|this[n+2]<<8|this[n+3])},h.prototype.readBigUInt64LE=ne(function(n){n=n>>>0,ke(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&ze(n,this.length-8);const p=o+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24,f=this[++n]+this[++n]*2**8+this[++n]*2**16+u*2**24;return BigInt(p)+(BigInt(f)<<BigInt(32))}),h.prototype.readBigUInt64BE=ne(function(n){n=n>>>0,ke(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&ze(n,this.length-8);const p=o*2**24+this[++n]*2**16+this[++n]*2**8+this[++n],f=this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+u;return(BigInt(p)<<BigInt(32))+BigInt(f)}),h.prototype.readIntLE=function(n,o,u){n=n>>>0,o=o>>>0,u||I(n,o,this.length);let p=this[n],f=1,g=0;for(;++g<o&&(f*=256);)p+=this[n+g]*f;return f*=128,p>=f&&(p-=Math.pow(2,8*o)),p},h.prototype.readIntBE=function(n,o,u){n=n>>>0,o=o>>>0,u||I(n,o,this.length);let p=o,f=1,g=this[n+--p];for(;p>0&&(f*=256);)g+=this[n+--p]*f;return f*=128,g>=f&&(g-=Math.pow(2,8*o)),g},h.prototype.readInt8=function(n,o){return n=n>>>0,o||I(n,1,this.length),this[n]&128?(255-this[n]+1)*-1:this[n]},h.prototype.readInt16LE=function(n,o){n=n>>>0,o||I(n,2,this.length);const u=this[n]|this[n+1]<<8;return u&32768?u|4294901760:u},h.prototype.readInt16BE=function(n,o){n=n>>>0,o||I(n,2,this.length);const u=this[n+1]|this[n]<<8;return u&32768?u|4294901760:u},h.prototype.readInt32LE=function(n,o){return n=n>>>0,o||I(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24},h.prototype.readInt32BE=function(n,o){return n=n>>>0,o||I(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]},h.prototype.readBigInt64LE=ne(function(n){n=n>>>0,ke(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&ze(n,this.length-8);const p=this[n+4]+this[n+5]*2**8+this[n+6]*2**16+(u<<24);return(BigInt(p)<<BigInt(32))+BigInt(o+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24)}),h.prototype.readBigInt64BE=ne(function(n){n=n>>>0,ke(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&ze(n,this.length-8);const p=(o<<24)+this[++n]*2**16+this[++n]*2**8+this[++n];return(BigInt(p)<<BigInt(32))+BigInt(this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+u)}),h.prototype.readFloatLE=function(n,o){return n=n>>>0,o||I(n,4,this.length),t.read(this,n,!0,23,4)},h.prototype.readFloatBE=function(n,o){return n=n>>>0,o||I(n,4,this.length),t.read(this,n,!1,23,4)},h.prototype.readDoubleLE=function(n,o){return n=n>>>0,o||I(n,8,this.length),t.read(this,n,!0,52,8)},h.prototype.readDoubleBE=function(n,o){return n=n>>>0,o||I(n,8,this.length),t.read(this,n,!1,52,8)};function N(l,n,o,u,p,f){if(!h.isBuffer(l))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>p||n<f)throw new RangeError('"value" argument is out of bounds');if(o+u>l.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(n,o,u,p){if(n=+n,o=o>>>0,u=u>>>0,!p){const $=Math.pow(2,8*u)-1;N(this,n,o,u,$,0)}let f=1,g=0;for(this[o]=n&255;++g<u&&(f*=256);)this[o+g]=n/f&255;return o+u},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(n,o,u,p){if(n=+n,o=o>>>0,u=u>>>0,!p){const $=Math.pow(2,8*u)-1;N(this,n,o,u,$,0)}let f=u-1,g=1;for(this[o+f]=n&255;--f>=0&&(g*=256);)this[o+f]=n/g&255;return o+u},h.prototype.writeUint8=h.prototype.writeUInt8=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,1,255,0),this[o]=n&255,o+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,2,65535,0),this[o]=n&255,this[o+1]=n>>>8,o+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,2,65535,0),this[o]=n>>>8,this[o+1]=n&255,o+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,4,4294967295,0),this[o+3]=n>>>24,this[o+2]=n>>>16,this[o+1]=n>>>8,this[o]=n&255,o+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,4,4294967295,0),this[o]=n>>>24,this[o+1]=n>>>16,this[o+2]=n>>>8,this[o+3]=n&255,o+4};function Dr(l,n,o,u,p){zr(n,u,p,l,o,7);let f=Number(n&BigInt(4294967295));l[o++]=f,f=f>>8,l[o++]=f,f=f>>8,l[o++]=f,f=f>>8,l[o++]=f;let g=Number(n>>BigInt(32)&BigInt(4294967295));return l[o++]=g,g=g>>8,l[o++]=g,g=g>>8,l[o++]=g,g=g>>8,l[o++]=g,o}function Fr(l,n,o,u,p){zr(n,u,p,l,o,7);let f=Number(n&BigInt(4294967295));l[o+7]=f,f=f>>8,l[o+6]=f,f=f>>8,l[o+5]=f,f=f>>8,l[o+4]=f;let g=Number(n>>BigInt(32)&BigInt(4294967295));return l[o+3]=g,g=g>>8,l[o+2]=g,g=g>>8,l[o+1]=g,g=g>>8,l[o]=g,o+8}h.prototype.writeBigUInt64LE=ne(function(n,o=0){return Dr(this,n,o,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=ne(function(n,o=0){return Fr(this,n,o,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(n,o,u,p){if(n=+n,o=o>>>0,!p){const O=Math.pow(2,8*u-1);N(this,n,o,u,O-1,-O)}let f=0,g=1,$=0;for(this[o]=n&255;++f<u&&(g*=256);)n<0&&$===0&&this[o+f-1]!==0&&($=1),this[o+f]=(n/g>>0)-$&255;return o+u},h.prototype.writeIntBE=function(n,o,u,p){if(n=+n,o=o>>>0,!p){const O=Math.pow(2,8*u-1);N(this,n,o,u,O-1,-O)}let f=u-1,g=1,$=0;for(this[o+f]=n&255;--f>=0&&(g*=256);)n<0&&$===0&&this[o+f+1]!==0&&($=1),this[o+f]=(n/g>>0)-$&255;return o+u},h.prototype.writeInt8=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,1,127,-128),n<0&&(n=255+n+1),this[o]=n&255,o+1},h.prototype.writeInt16LE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,2,32767,-32768),this[o]=n&255,this[o+1]=n>>>8,o+2},h.prototype.writeInt16BE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,2,32767,-32768),this[o]=n>>>8,this[o+1]=n&255,o+2},h.prototype.writeInt32LE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,4,2147483647,-2147483648),this[o]=n&255,this[o+1]=n>>>8,this[o+2]=n>>>16,this[o+3]=n>>>24,o+4},h.prototype.writeInt32BE=function(n,o,u){return n=+n,o=o>>>0,u||N(this,n,o,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[o]=n>>>24,this[o+1]=n>>>16,this[o+2]=n>>>8,this[o+3]=n&255,o+4},h.prototype.writeBigInt64LE=ne(function(n,o=0){return Dr(this,n,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=ne(function(n,o=0){return Fr(this,n,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Nr(l,n,o,u,p,f){if(o+u>l.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Mr(l,n,o,u,p){return n=+n,o=o>>>0,p||Nr(l,n,o,4),t.write(l,n,o,u,23,4),o+4}h.prototype.writeFloatLE=function(n,o,u){return Mr(this,n,o,!0,u)},h.prototype.writeFloatBE=function(n,o,u){return Mr(this,n,o,!1,u)};function jr(l,n,o,u,p){return n=+n,o=o>>>0,p||Nr(l,n,o,8),t.write(l,n,o,u,52,8),o+8}h.prototype.writeDoubleLE=function(n,o,u){return jr(this,n,o,!0,u)},h.prototype.writeDoubleBE=function(n,o,u){return jr(this,n,o,!1,u)},h.prototype.copy=function(n,o,u,p){if(!h.isBuffer(n))throw new TypeError("argument should be a Buffer");if(u||(u=0),!p&&p!==0&&(p=this.length),o>=n.length&&(o=n.length),o||(o=0),p>0&&p<u&&(p=u),p===u||n.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(u<0||u>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),n.length-o<p-u&&(p=n.length-o+u);const f=p-u;return this===n&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,u,p):Uint8Array.prototype.set.call(n,this.subarray(u,p),o),f},h.prototype.fill=function(n,o,u,p){if(typeof n=="string"){if(typeof o=="string"?(p=o,o=0,u=this.length):typeof u=="string"&&(p=u,u=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!h.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(n.length===1){const g=n.charCodeAt(0);(p==="utf8"&&g<128||p==="latin1")&&(n=g)}}else typeof n=="number"?n=n&255:typeof n=="boolean"&&(n=Number(n));if(o<0||this.length<o||this.length<u)throw new RangeError("Out of range index");if(u<=o)return this;o=o>>>0,u=u===void 0?this.length:u>>>0,n||(n=0);let f;if(typeof n=="number")for(f=o;f<u;++f)this[f]=n;else{const g=h.isBuffer(n)?n:h.from(n,p),$=g.length;if($===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(f=0;f<u-o;++f)this[f+o]=g[f%$]}return this};const $e={};function Yt(l,n,o){$e[l]=class extends o{constructor(){super(),Object.defineProperty(this,"message",{value:n.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${l}]`,this.stack,delete this.name}get code(){return l}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${l}]: ${this.message}`}}}Yt("ERR_BUFFER_OUT_OF_BOUNDS",function(l){return l?`${l} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Yt("ERR_INVALID_ARG_TYPE",function(l,n){return`The "${l}" argument must be of type number. Received type ${typeof n}`},TypeError),Yt("ERR_OUT_OF_RANGE",function(l,n,o){let u=`The value of "${l}" is out of range.`,p=o;return Number.isInteger(o)&&Math.abs(o)>2**32?p=qr(String(o)):typeof o=="bigint"&&(p=String(o),(o>BigInt(2)**BigInt(32)||o<-(BigInt(2)**BigInt(32)))&&(p=qr(p)),p+="n"),u+=` It must be ${n}. Received ${p}`,u},RangeError);function qr(l){let n="",o=l.length;const u=l[0]==="-"?1:0;for(;o>=u+4;o-=3)n=`_${l.slice(o-3,o)}${n}`;return`${l.slice(0,o)}${n}`}function Mi(l,n,o){ke(n,"offset"),(l[n]===void 0||l[n+o]===void 0)&&ze(n,l.length-(o+1))}function zr(l,n,o,u,p,f){if(l>o||l<n){const g=typeof n=="bigint"?"n":"";let $;throw n===0||n===BigInt(0)?$=`>= 0${g} and < 2${g} ** ${(f+1)*8}${g}`:$=`>= -(2${g} ** ${(f+1)*8-1}${g}) and < 2 ** ${(f+1)*8-1}${g}`,new $e.ERR_OUT_OF_RANGE("value",$,l)}Mi(u,p,f)}function ke(l,n){if(typeof l!="number")throw new $e.ERR_INVALID_ARG_TYPE(n,"number",l)}function ze(l,n,o){throw Math.floor(l)!==l?(ke(l,o),new $e.ERR_OUT_OF_RANGE("offset","an integer",l)):n<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${n}`,l)}const ji=/[^+/0-9A-Za-z-_]/g;function qi(l){if(l=l.split("=")[0],l=l.trim().replace(ji,""),l.length<2)return"";for(;l.length%4!==0;)l=l+"=";return l}function Gt(l,n){n=n||1/0;let o;const u=l.length;let p=null;const f=[];for(let g=0;g<u;++g){if(o=l.charCodeAt(g),o>55295&&o<57344){if(!p){if(o>56319){(n-=3)>-1&&f.push(239,191,189);continue}else if(g+1===u){(n-=3)>-1&&f.push(239,191,189);continue}p=o;continue}if(o<56320){(n-=3)>-1&&f.push(239,191,189),p=o;continue}o=(p-55296<<10|o-56320)+65536}else p&&(n-=3)>-1&&f.push(239,191,189);if(p=null,o<128){if((n-=1)<0)break;f.push(o)}else if(o<2048){if((n-=2)<0)break;f.push(o>>6|192,o&63|128)}else if(o<65536){if((n-=3)<0)break;f.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((n-=4)<0)break;f.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return f}function zi(l){const n=[];for(let o=0;o<l.length;++o)n.push(l.charCodeAt(o)&255);return n}function Vi(l,n){let o,u,p;const f=[];for(let g=0;g<l.length&&!((n-=2)<0);++g)o=l.charCodeAt(g),u=o>>8,p=o%256,f.push(p),f.push(u);return f}function Vr(l){return e.toByteArray(qi(l))}function ft(l,n,o,u){let p;for(p=0;p<u&&!(p+o>=n.length||p>=l.length);++p)n[p+o]=l[p];return p}function X(l,n){return l instanceof n||l!=null&&l.constructor!=null&&l.constructor.name!=null&&l.constructor.name===n.name}function Kt(l){return l!==l}const Hi=function(){const l="0123456789abcdef",n=new Array(256);for(let o=0;o<16;++o){const u=o*16;for(let p=0;p<16;++p)n[u+p]=l[o]+l[p]}return n}();function ne(l){return typeof BigInt>"u"?Wi:l}function Wi(){throw new Error("BigInt not supported")}})(kr);const ha=P`
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
    font-size: 0.9em;
    font-weight: 500;
  }

  .track-artist {
    font-size: 0.8em;
    color: var(--subtext-color);
  }

  .track-image {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    object-fit: cover;
  }
`;var ua=Object.defineProperty,da=Object.getOwnPropertyDescriptor,jt=(r,e,t,s)=>{for(var i=s>1?void 0:s?da(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&ua(e,t,i),i};let Ie=class extends S{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(r){const e=`https://api.spotify.com/v1/tracks/${r}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const s=await t.json();return this.currentTracks=[...this.currentTracks,s],s}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+kr.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const s=await t.json();this.accessToken=s.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var r;super.connectedCallback(),(r=this.comment)!=null&&r.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(r){try{this.currentTracks=[];const e=r.map(s=>this.findSong(s)),t=await Promise.all(e);this.currentTracks=t.filter(s=>s!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return y`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;const{userName:r,commentTime:e,commentMessage:t}=this.comment,i=new Date(e).toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"});return y`
      <section class="single-comment">
        <section class="comment-left">
          <section class="details">
            <section class="details-header">
              <p class="comment-name">${r}</p>
              <p class="comment-time">${i}</p>
            </section>
            <p class="comment-message">${t}</p>
          </section>
        </section>
        <section class="comment-right">
          ${this.currentTracks.map(a=>y`
              <div class="track-info">
                <img
                  src="${a.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${a.name}</p>
                  <p class="track-artist">
                    ${a.artists.map(c=>c.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};Ie.styles=[ha];jt([_({type:Object})],Ie.prototype,"comment",2);jt([_({type:String})],Ie.prototype,"accessToken",2);jt([E()],Ie.prototype,"currentTracks",2);Ie=jt([A("comment-card")],Ie);const pa=P`
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
`;function fa(r,e,t){const s=r.selectedTracks.findIndex(i=>i.id===e.id);t?s>-1?r.selectedTracks=[...r.selectedTracks.slice(0,s),...r.selectedTracks.slice(s+1)]:r.selectedTracks=[...r.selectedTracks,e]:s>-1?r.selectedTracks=[]:r.selectedTracks=[e]}function ui(r){r.topTracks=[]}function di(r){r.selectedTracks=[]}async function ma(r,e){const t=await fetch(`https://api.spotify.com/v1/artists/${e}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${r.accessToken}`,"Content-Type":"application/json"}});if(t.ok){const s=await t.json();s&&s.tracks?r.topTracks=s.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${t.statusText}`)}async function pi(r){const s=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+kr.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(s.ok){const i=await s.json();r.accessToken=i.access_token}else console.error("Spotify authentication failed")}async function fi(r){if(!r.requestedSearchQuery.trim())return;const e=`https://api.spotify.com/v1/search?q=${encodeURIComponent(r.requestedSearchQuery)}&type=track&limit=10`;try{await pi(r);const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${r.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const s=await t.json();s.tracks.items.length>0?r.topTracks=s.tracks.items:(r.topTracks=[],alert("No tracks found. Please try another search."))}catch(t){console.error("Error searching for tracks:",t)}}async function ga(r,e){r.preventDefault();const t=r.target,s=new FormData(t);e.requestedSearchQuery=s.get("inputted-artist-name"),await fi(e)}async function ba(r,e){var m;r.preventDefault(),e.submissionSuccess=null;const t=r.target,s=new FormData(t),i="http://localhost:3000";let a=s.get("input-comment");const c=e.selectedTracks.map(b=>b.id),h=`${i}/posts/${(m=e.post)==null?void 0:m._id}`,d={userName:"aidan",commentTime:new Date,commentMessage:a,SongIDs:c};try{if((await fetch(h,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).ok)console.log("Comment successfully added"),ui(e),di(e),e.submissionSuccess=!0,t.reset(),e.dispatchEvent(new CustomEvent("handle-comment-selected",{bubbles:!0,composed:!0}));else throw new Error("Failed to post comment")}catch(b){console.error("Error:",b),e.submissionSuccess=!1}}const ya=P`
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
`;var wa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,Ar=(r,e,t,s)=>{for(var i=s>1?void 0:s?va(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&wa(e,t,i),i};let it=class extends S{constructor(){super(...arguments),this.topTracks=[],this.selectedTracks=[]}_sendClearTracks(r){console.log("wanting to clear ",r," tracks"),this.dispatchEvent(new CustomEvent("clear-tracks",{detail:{topOrSelected:r},bubbles:!0,composed:!0}))}render(){return y`
      <section class="search-and-selected">
        <section class="query-results">
          <h3 class="search-results">Search Results</h3>
          ${this.topTracks.length>0?y`<div class="track-box-search-results">
                  ${this.topTracks.slice(0,5).map(r=>y`<track-card .track=${r}></track-card>`)}
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
            ${this.selectedTracks.map(r=>y`<track-card .track=${r}></track-card>`)}
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
    `}};it.styles=[ya];Ar([E()],it.prototype,"topTracks",2);Ar([E()],it.prototype,"selectedTracks",2);it=Ar([A("multi-song-ui")],it);const _a=P`
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
`;var xa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Tr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ea(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&xa(e,t,i),i};let nt=class extends S{constructor(){super(...arguments),this.topTracks=[],this.selectedTracks=[]}_sendClearTracks(r){console.log("wanting to clear ",r," tracks"),this.dispatchEvent(new CustomEvent("clear-tracks",{detail:{topOrSelected:r},bubbles:!0,composed:!0}))}render(){return y`
      <section class="search-and-selected">
        <section class="query-results">
          <h3 class="search-results">Search Results</h3>
          ${this.topTracks.length>0?y`<div class="track-box-search-results">
                  ${this.topTracks.slice(0,5).map(r=>y`<track-card .track=${r}></track-card>`)}
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
            ${this.selectedTracks.map(r=>y`<track-card .track=${r}></track-card>`)}
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
    `}};nt.styles=[_a];Tr([E()],nt.prototype,"topTracks",2);Tr([E()],nt.prototype,"selectedTracks",2);nt=Tr([A("single-song-ui")],nt);var $a=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,J=(r,e,t,s)=>{for(var i=s>1?void 0:s?ka(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&$a(e,t,i),i};let j=class extends S{constructor(){super(),this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.hasMargin=!1,this.expandedClass="feed-single-post",this.multiPicker=!1,this.addEventListener("track-selected",r=>{const e=r;this._selectTrack(e.detail.track,this.multiPicker)}),this.addEventListener("clear-tracks",r=>{console.log("Within Clear Tracks Listener"),r.detail.topOrSelected==="top"?(console.log("Within Top, executing clear top tracks"),this._clearTopTracks()):(console.log("Within Selected, executing clear selected tracks"),this._clearSelectedTracks())})}async _authenticate(){await pi(this)}async _submitCommentToDatabase(r){await ba(r,this)}_handleSubmit(r){ga(r,this)}_clearTopTracks(){ui(this)}_clearSelectedTracks(){di(this)}_selectTrack(r,e){fa(this,r,e)}async fetchTopTracks(r){await ma(this,r)}async searchSpotify(){await fi(this)}_submitSongRecommendationToGameState(r){r.preventDefault(),console.log("submit song recommendation clicked"),this.selectedTracks.length==1?(console.log("the selected track, ",this.selectedTracks[0]),this.dispatchEvent(new CustomEvent("single-track-submitted",{detail:{track:this.selectedTracks[0]},bubbles:!0,composed:!0}))):console.log("no track selected, cannot submit form")}render(){return y`
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
    `}};j.styles=[pa];J([E()],j.prototype,"submissionSuccess",2);J([_()],j.prototype,"expandedText",2);J([_({type:String})],j.prototype,"requestedSearchQuery",2);J([_({type:String})],j.prototype,"accessToken",2);J([_()],j.prototype,"topTracks",2);J([_()],j.prototype,"selectedTracks",2);J([_({type:Object})],j.prototype,"post",2);J([_({type:Boolean})],j.prototype,"hasMargin",2);J([E()],j.prototype,"expandedClass",2);J([_({type:Boolean})],j.prototype,"multiPicker",2);j=J([A("song-picker")],j);function Sa(r){var a;const e=(a=r.post)!=null&&a.postTime?new Date(r.post.postTime):void 0;if(!e)return console.error("Posted time is undefined"),"Post time cannot be found.";let i=(new Date().getTime()-e.getTime())/(1e3*60*60);return i=Math.round(i),i<1?"Less than an hour ago.":i>23?`${i%24} days ago`:`${i} hours ago`}var Aa=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,ie=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ta(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Aa(e,t,i),i};let K=class extends S{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.expandedClass="feed-single-post",this.addEventListener("handle-comment-added",()=>{this._handleCommentAdded()})}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}connectedCallback(){var r;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((r=this.post)==null?void 0:r.comments)||[])}async _handleCommentAdded(){var e;console.log("Comment Created, Now Refreshing Component");const r="http://localhost:3000";if(console.log("SERVER URL FROM COMMENT ADDED: ",r),!((e=this.post)!=null&&e._id)){console.error("Post ID is undefined.");return}try{const t=await fetch(`${r}/comments/${this.post._id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch comments");const s=await t.json();this.getPostComments=[...s]}catch(t){console.error("Error fetching comments:",t)}}_calculateTimeFromDate(){Sa(this)}render(){var e,t,s,i,a;const r=this._calculateTimeFromDate();return y`
      <section class="${this.expandedClass}">
        <section class="profile-name-time">
          <section class="post-content">
            <section class="individual-post-profile-image">
              <img
                src="/images/${(e=this.post)==null?void 0:e.profileImage}.png"
                alt="${(t=this.post)==null?void 0:t.profileDescription}"
              />
              ${this.expanded?y`<div class="line-decoration"></div>`:y`<div></div>`}
            </section>
            <section class="non-image-content">
              <section class="name-and-time">
                <h3 class="feed-name">${(s=this.post)==null?void 0:s.userName}</h3>
                <p class="time-posted">${r}</p>
              </section>
              <p class="message">${(i=this.post)==null?void 0:i.postMessage}</p>
              <button class="expand-unexpand" @click=${this._expand}>
                ${this.expanded?"Close song recommendation form.":"Recommend a song."}
              </button>
            </section>
          </section>

          <section class="comment-list">
            ${(a=this.getPostComments)==null?void 0:a.map(c=>y`
                <comment-card .comment=${c}></comment-card>
              `)}
          </section>
        </section>

        ${this.expanded?y` <song-picker
              .post=${this.post}
              .multiPicker=${!0}
              .hasMargin=${!0}
            ></song-picker>`:""}
      </section>
    `}};K.styles=Qo;ie([_({type:Object})],K.prototype,"post",2);ie([E()],K.prototype,"getPostComments",2);ie([E()],K.prototype,"expanded",2);ie([E()],K.prototype,"submissionSuccess",2);ie([_()],K.prototype,"expandedText",2);ie([_({type:String})],K.prototype,"requestedSearchQuery",2);ie([_({type:String})],K.prototype,"accessToken",2);ie([E()],K.prototype,"expandedClass",2);K=ie([A("feed-post")],K);var Pa=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,mi=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ca(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Pa(e,t,i),i};let It=class extends S{constructor(){super(...arguments),this.posts=[]}render(){return y`
      <div class="posts-container">
        ${this.posts.map(r=>y` <feed-post .hasMargin=${!0} .post=${r}></feed-post>`)}
      </div>
    `}};It.styles=[Xo];mi([_({type:Array})],It.prototype,"posts",2);It=mi([A("feed-post-list")],It);const Oa=P`
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
`;var Ra=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,ht=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ba(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Ra(e,t,i),i};let we=class extends S{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(r){r.preventDefault(),this.submissionSuccess=!1;const e=r.target;let s=new FormData(e).get("input-message");s?(console.log("submitting post!"),this._sendPostRequest(s,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(r,e){if(console.log("this.using",this.using),!this.using||!this.using._id||!this.using.name||!this.using.profileDescription||!this.using.profileImage)return console.error("User information is incomplete."),!1;const t={userid:this.using._id,userName:this.using.name,profileImage:this.using.profileImage,profileDescription:this.using.profileDescription,postTime:new Date,postMessage:r,comments:[]};console.log("new post: ",t);try{if((await fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(s){console.error("Error: ",s),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const r=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",r),this.dispatchEvent(r)}render(){return y`
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
    `}};we.styles=[Oa];ht([E()],we.prototype,"expanded",2);ht([E()],we.prototype,"using",2);ht([E()],we.prototype,"submissionSuccess",2);ht([E()],we.prototype,"errorMessage",2);we=ht([A("create-post")],we);var Ua=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,qt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ia(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Ua(e,t,i),i};let Le=class extends S{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchPostDataFromDatabase()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchPostDataFromDatabase()}async _fetchPostDataFromDatabase(){console.log("fetching posts!");const r="http://localhost:3000";try{const e=await fetch(`${r}/posts`);if(e.ok){const t=await e.json();this.posts=t,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",e.status)}catch(e){console.error("Error fetching posts:",e)}}render(){var r,e;return console.log("using",this.using),y`
      <section class="feed-container">
        <section class="nav-section">
          <h3 class="nav-header">Navigation</h3>
          <ul class="nav">
            <li class="navlink">
              <a href="app/chatRoom/${(r=this.using)==null?void 0:r.userid}">Chat Room</a>
            </li>
            <li class="navlink">
              <a href="app/profile/${(e=this.using)==null?void 0:e.userid}">Your Profile</a>
            </li>
          </ul>
        </section>
        <section class="main-posts-section">
          <h2 class="feed-header">Song Recommendation Feed</h2>
          <create-post .using=${this.using}></create-post>
          <feed-post-list .posts=${this.posts}></feed-post-list>
        </section>
      </section>
    `}};Le.styles=[Jo];qt([E()],Le.prototype,"posts",2);qt([E()],Le.prototype,"using",2);qt([_({type:String})],Le.prototype,"userId",2);Le=qt([A("main-feed")],Le);var La=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Fa=(r,e,t,s)=>{for(var i=s>1?void 0:s?Da(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&La(e,t,i),i};let vs=class extends Fe{get profile(){return this.getFromModel("profile")}firstUpdated(r){console.log("******* HOME PAGE FIRST UPDATED ********"),U._theUser.authenticated?(console.log("___ dispatching ProfileSelected____"),this.dispatchMessage({type:"ProfileSelected",userid:U._theUser.username})):console.log("***** this.userid is undefined *****")}render(){return console.log("this.profile within home page",this.profile),y`
      <section class="feed-page">
        <main-feed .using=${this.profile}></main-feed>
      </section>
    `}};vs=Fa([A("home-page")],vs);const Na=P`
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
`;var Ma=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,qa=(r,e,t,s)=>{for(var i=s>1?void 0:s?ja(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Ma(e,t,i),i};let cr=class extends Fe{get profile(){return this.getFromModel("profile")}navigateTo(r){G.go(r)}firstUpdated(r){console.log("******* HOME PAGE FIRST UPDATED ********"),U._theUser.authenticated?(console.log("___ dispatching ProfileSelected____"),this.dispatchMessage({type:"ProfileSelected",userid:U._theUser.username})):console.log("***** this.userid is undefined *****")}render(){var r;return console.log("within not found page this.profile ",this.profile),y`
      <section class="container">
        <h1>Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist. Here are some helpful
          links:
        </p>
        <div class="links">
          <button @click="${()=>this.navigateTo("/app/home")}">Home</button>
          ${(r=this.profile)!=null&&r.userid?y`
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
    `}};cr.styles=[Na];cr=qa([A("not-found-page")],cr);const za=P`
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
`;var Va=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,Wa=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ha(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Va(e,t,i),i};let lr=class extends Fe{get profile(){return this.getFromModel("profile")}firstUpdated(r){console.log("******* CREATE PROFILE FIRST UPDATED ********"),U._theUser.authenticated?(console.log("___ dispatching ProfileSelected____"),this.dispatchMessage({type:"ProfileSelected",userid:U._theUser.username})):console.log("***** this.userid is undefined *****")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile),U._theUser.authenticated?this.dispatchMessage({type:"ProfileSaved",userid:U._theUser.username,profile:r.detail.profile}):console.error("Profile is undefined within model.")}render(){return console.log("this.profile within createprofile page",this.profile),y`
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
            .profile=${this.profile}
            .redirectAfterSubmit="${!0}"
          ></edit-profile-form>
        </div>
      </section>
    `}};lr.styles=za;lr=Wa([A("create-profile-page")],lr);const Ya=P`
  :host {
    display: block;
  }
  .gameFeature {
    margin: auto;
  }
`,te=Object.create(null);te.open="0";te.close="1";te.ping="2";te.pong="3";te.message="4";te.upgrade="5";te.noop="6";const $t=Object.create(null);Object.keys(te).forEach(r=>{$t[te[r]]=r});const hr={type:"error",data:"parser error"},gi=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",bi=typeof ArrayBuffer=="function",yi=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,Pr=({type:r,data:e},t,s)=>gi&&e instanceof Blob?t?s(e):_s(e,s):bi&&(e instanceof ArrayBuffer||yi(e))?t?s(e):_s(new Blob([e]),s):s(te[r]+(e||"")),_s=(r,e)=>{const t=new FileReader;return t.onload=function(){const s=t.result.split(",")[1];e("b"+(s||""))},t.readAsDataURL(r)};function xs(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let rr;function Ga(r,e){if(gi&&r.data instanceof Blob)return r.data.arrayBuffer().then(xs).then(e);if(bi&&(r.data instanceof ArrayBuffer||yi(r.data)))return e(xs(r.data));Pr(r,!1,t=>{rr||(rr=new TextEncoder),e(rr.encode(t))})}const Es="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",We=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Es.length;r++)We[Es.charCodeAt(r)]=r;const Ka=r=>{let e=r.length*.75,t=r.length,s,i=0,a,c,h,d;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const m=new ArrayBuffer(e),b=new Uint8Array(m);for(s=0;s<t;s+=4)a=We[r.charCodeAt(s)],c=We[r.charCodeAt(s+1)],h=We[r.charCodeAt(s+2)],d=We[r.charCodeAt(s+3)],b[i++]=a<<2|c>>4,b[i++]=(c&15)<<4|h>>2,b[i++]=(h&3)<<6|d&63;return m},Ja=typeof ArrayBuffer=="function",Cr=(r,e)=>{if(typeof r!="string")return{type:"message",data:wi(r,e)};const t=r.charAt(0);return t==="b"?{type:"message",data:Xa(r.substring(1),e)}:$t[t]?r.length>1?{type:$t[t],data:r.substring(1)}:{type:$t[t]}:hr},Xa=(r,e)=>{if(Ja){const t=Ka(r);return wi(t,e)}else return{base64:!0,data:r}},wi=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},vi="",Qa=(r,e)=>{const t=r.length,s=new Array(t);let i=0;r.forEach((a,c)=>{Pr(a,!1,h=>{s[c]=h,++i===t&&e(s.join(vi))})})},Za=(r,e)=>{const t=r.split(vi),s=[];for(let i=0;i<t.length;i++){const a=Cr(t[i],e);if(s.push(a),a.type==="error")break}return s};function ec(){return new TransformStream({transform(r,e){Ga(r,t=>{const s=t.length;let i;if(s<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,s);else if(s<65536){i=new Uint8Array(3);const a=new DataView(i.buffer);a.setUint8(0,126),a.setUint16(1,s)}else{i=new Uint8Array(9);const a=new DataView(i.buffer);a.setUint8(0,127),a.setBigUint64(1,BigInt(s))}r.data&&typeof r.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let sr;function gt(r){return r.reduce((e,t)=>e+t.length,0)}function bt(r,e){if(r[0].length===e)return r.shift();const t=new Uint8Array(e);let s=0;for(let i=0;i<e;i++)t[i]=r[0][s++],s===r[0].length&&(r.shift(),s=0);return r.length&&s<r[0].length&&(r[0]=r[0].slice(s)),t}function tc(r,e){sr||(sr=new TextDecoder);const t=[];let s=0,i=-1,a=!1;return new TransformStream({transform(c,h){for(t.push(c);;){if(s===0){if(gt(t)<1)break;const d=bt(t,1);a=(d[0]&128)===128,i=d[0]&127,i<126?s=3:i===126?s=1:s=2}else if(s===1){if(gt(t)<2)break;const d=bt(t,2);i=new DataView(d.buffer,d.byteOffset,d.length).getUint16(0),s=3}else if(s===2){if(gt(t)<8)break;const d=bt(t,8),m=new DataView(d.buffer,d.byteOffset,d.length),b=m.getUint32(0);if(b>Math.pow(2,21)-1){h.enqueue(hr);break}i=b*Math.pow(2,32)+m.getUint32(4),s=3}else{if(gt(t)<i)break;const d=bt(t,i);h.enqueue(Cr(a?d:sr.decode(d),e)),s=0}if(i===0||i>r){h.enqueue(hr);break}}}})}const _i=4;function B(r){if(r)return rc(r)}function rc(r){for(var e in B.prototype)r[e]=B.prototype[e];return r}B.prototype.on=B.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};B.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};B.prototype.off=B.prototype.removeListener=B.prototype.removeAllListeners=B.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var s,i=0;i<t.length;i++)if(s=t[i],s===e||s.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+r],this};B.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+r],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(t){t=t.slice(0);for(var s=0,i=t.length;s<i;++s)t[s].apply(this,e)}return this};B.prototype.emitReserved=B.prototype.emit;B.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};B.prototype.hasListeners=function(r){return!!this.listeners(r).length};const z=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function xi(r,...e){return e.reduce((t,s)=>(r.hasOwnProperty(s)&&(t[s]=r[s]),t),{})}const sc=z.setTimeout,ic=z.clearTimeout;function zt(r,e){e.useNativeTimers?(r.setTimeoutFn=sc.bind(z),r.clearTimeoutFn=ic.bind(z)):(r.setTimeoutFn=z.setTimeout.bind(z),r.clearTimeoutFn=z.clearTimeout.bind(z))}const nc=1.33;function oc(r){return typeof r=="string"?ac(r):Math.ceil((r.byteLength||r.size)*nc)}function ac(r){let e=0,t=0;for(let s=0,i=r.length;s<i;s++)e=r.charCodeAt(s),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(s++,t+=4);return t}function cc(r){let e="";for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return e}function lc(r){let e={},t=r.split("&");for(let s=0,i=t.length;s<i;s++){let a=t[s].split("=");e[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}return e}class hc extends Error{constructor(e,t,s){super(e),this.description=t,this.context=s,this.type="TransportError"}}class Or extends B{constructor(e){super(),this.writable=!1,zt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,s){return super.emitReserved("error",new hc(e,t,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Cr(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=cc(e);return t.length?"?"+t:""}}const Ei="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),ur=64,uc={};let $s=0,yt=0,ks;function Ss(r){let e="";do e=Ei[r%ur]+e,r=Math.floor(r/ur);while(r>0);return e}function $i(){const r=Ss(+new Date);return r!==ks?($s=0,ks=r):r+"."+Ss($s++)}for(;yt<ur;yt++)uc[Ei[yt]]=yt;let ki=!1;try{ki=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const dc=ki;function Si(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||dc))return new XMLHttpRequest}catch{}if(!e)try{return new z[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function pc(){}const fc=function(){return new Si({xdomain:!1}).responseType!=null}();class mc extends Or{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const s=location.protocol==="https:";let i=location.port;i||(i=s?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const t=e&&e.forceBase64;this.supportsBinary=fc&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let s=0;this.polling&&(s++,this.once("pollComplete",function(){--s||t()})),this.writable||(s++,this.once("drain",function(){--s||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Za(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Qa(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=$i()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new Z(this.uri(),e)}doWrite(e,t){const s=this.request({method:"POST",data:e});s.on("success",t),s.on("error",(i,a)=>{this.onError("xhr post error",i,a)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,s)=>{this.onError("xhr poll error",t,s)}),this.pollXhr=e}}class Z extends B{constructor(e,t){super(),zt(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=xi(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const s=this.xhr=new Si(t);try{s.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&s.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(s.timeout=this.opts.requestTimeout),s.onreadystatechange=()=>{var i;s.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(s)),s.readyState===4&&(s.status===200||s.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof s.status=="number"?s.status:0)},0))},s.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=Z.requestsCount++,Z.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=pc,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Z.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}Z.requestsCount=0;Z.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",As);else if(typeof addEventListener=="function"){const r="onpagehide"in z?"pagehide":"unload";addEventListener(r,As,!1)}}function As(){for(let r in Z.requests)Z.requests.hasOwnProperty(r)&&Z.requests[r].abort()}const Rr=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),wt=z.WebSocket||z.MozWebSocket,Ts=!0,gc="arraybuffer",Ps=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class bc extends Or{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,s=Ps?{}:xi(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=Ts&&!Ps?t?new wt(e,t):new wt(e):new wt(e,t,s)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const s=e[t],i=t===e.length-1;Pr(s,this.supportsBinary,a=>{const c={};try{Ts&&this.ws.send(a)}catch{}i&&Rr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=$i()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!wt}}class yc extends Or{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=tc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(t).getReader(),i=ec();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const a=()=>{s.read().then(({done:h,value:d})=>{h||(this.onPacket(d),a())}).catch(h=>{})};a();const c={type:"open"};this.query.sid&&(c.data=`{"sid":"${this.query.sid}"}`),this.writer.write(c).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const s=e[t],i=t===e.length-1;this.writer.write(s).then(()=>{i&&Rr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const wc={websocket:bc,webtransport:yc,polling:mc},vc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,_c=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function dr(r){if(r.length>2e3)throw"URI too long";const e=r,t=r.indexOf("["),s=r.indexOf("]");t!=-1&&s!=-1&&(r=r.substring(0,t)+r.substring(t,s).replace(/:/g,";")+r.substring(s,r.length));let i=vc.exec(r||""),a={},c=14;for(;c--;)a[_c[c]]=i[c]||"";return t!=-1&&s!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a.pathNames=xc(a,a.path),a.queryKey=Ec(a,a.query),a}function xc(r,e){const t=/\/{2,9}/g,s=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function Ec(r,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,i,a){i&&(t[i]=a)}),t}let Ai=class Te extends B{constructor(e,t={}){super(),this.binaryType=gc,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=dr(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=dr(t.host).host),zt(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=lc(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=_i,t.transport=e,this.id&&(t.sid=this.id);const s=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new wc[e](s)}open(){let e;if(this.opts.rememberUpgrade&&Te.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),s=!1;Te.priorWebsocketSuccess=!1;const i=()=>{s||(t.send([{type:"ping",data:"probe"}]),t.once("packet",w=>{if(!s)if(w.type==="pong"&&w.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Te.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(b(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const v=new Error("probe error");v.transport=t.name,this.emitReserved("upgradeError",v)}}))};function a(){s||(s=!0,b(),t.close(),t=null)}const c=w=>{const v=new Error("probe error: "+w);v.transport=t.name,a(),this.emitReserved("upgradeError",v)};function h(){c("transport closed")}function d(){c("socket closed")}function m(w){t&&w.name!==t.name&&a()}const b=()=>{t.removeListener("open",i),t.removeListener("error",c),t.removeListener("close",h),this.off("close",d),this.off("upgrading",m)};t.once("open",i),t.once("error",c),t.once("close",h),this.once("close",d),this.once("upgrading",m),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Te.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let s=0;s<this.writeBuffer.length;s++){const i=this.writeBuffer[s].data;if(i&&(t+=oc(i)),s>0&&t>this.maxPayload)return this.writeBuffer.slice(0,s);t+=2}return this.writeBuffer}write(e,t,s){return this.sendPacket("message",e,t,s),this}send(e,t,s){return this.sendPacket("message",e,t,s),this}sendPacket(e,t,s,i){if(typeof t=="function"&&(i=t,t=void 0),typeof s=="function"&&(i=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const a={type:e,data:t,options:s};this.emitReserved("packetCreate",a),this.writeBuffer.push(a),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},s=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}onError(e){Te.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let s=0;const i=e.length;for(;s<i;s++)~this.transports.indexOf(e[s])&&t.push(e[s]);return t}};Ai.protocol=_i;function $c(r,e="",t){let s=r;t=t||typeof location<"u"&&location,r==null&&(r=t.protocol+"//"+t.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<"u"?r=t.protocol+"//"+r:r="https://"+r),s=dr(r)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const a=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+a+":"+s.port+e,s.href=s.protocol+"://"+a+(t&&t.port===s.port?"":":"+s.port),s}const kc=typeof ArrayBuffer=="function",Sc=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,Ti=Object.prototype.toString,Ac=typeof Blob=="function"||typeof Blob<"u"&&Ti.call(Blob)==="[object BlobConstructor]",Tc=typeof File=="function"||typeof File<"u"&&Ti.call(File)==="[object FileConstructor]";function Br(r){return kc&&(r instanceof ArrayBuffer||Sc(r))||Ac&&r instanceof Blob||Tc&&r instanceof File}function kt(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let t=0,s=r.length;t<s;t++)if(kt(r[t]))return!0;return!1}if(Br(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return kt(r.toJSON(),!0);for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&kt(r[t]))return!0;return!1}function Pc(r){const e=[],t=r.data,s=r;return s.data=pr(t,e),s.attachments=e.length,{packet:s,buffers:e}}function pr(r,e){if(!r)return r;if(Br(r)){const t={_placeholder:!0,num:e.length};return e.push(r),t}else if(Array.isArray(r)){const t=new Array(r.length);for(let s=0;s<r.length;s++)t[s]=pr(r[s],e);return t}else if(typeof r=="object"&&!(r instanceof Date)){const t={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=pr(r[s],e));return t}return r}function Cc(r,e){return r.data=fr(r.data,e),delete r.attachments,r}function fr(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=fr(r[t],e);else if(typeof r=="object")for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=fr(r[t],e));return r}const Oc=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Rc=5;var k;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(k||(k={}));class Bc{constructor(e){this.replacer=e}encode(e){return(e.type===k.EVENT||e.type===k.ACK)&&kt(e)?this.encodeAsBinary({type:e.type===k.EVENT?k.BINARY_EVENT:k.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===k.BINARY_EVENT||e.type===k.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Pc(e),s=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(s),i}}function Cs(r){return Object.prototype.toString.call(r)==="[object Object]"}class Ur extends B{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const s=t.type===k.BINARY_EVENT;s||t.type===k.BINARY_ACK?(t.type=s?k.EVENT:k.ACK,this.reconstructor=new Uc(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Br(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const s={type:Number(e.charAt(0))};if(k[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===k.BINARY_EVENT||s.type===k.BINARY_ACK){const a=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const c=e.substring(a,t);if(c!=Number(c)||e.charAt(t)!=="-")throw new Error("Illegal attachments");s.attachments=Number(c)}if(e.charAt(t+1)==="/"){const a=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););s.nsp=e.substring(a,t)}else s.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const a=t+1;for(;++t;){const c=e.charAt(t);if(c==null||Number(c)!=c){--t;break}if(t===e.length)break}s.id=Number(e.substring(a,t+1))}if(e.charAt(++t)){const a=this.tryParse(e.substr(t));if(Ur.isPayloadValid(s.type,a))s.data=a;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case k.CONNECT:return Cs(t);case k.DISCONNECT:return t===void 0;case k.CONNECT_ERROR:return typeof t=="string"||Cs(t);case k.EVENT:case k.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Oc.indexOf(t[0])===-1);case k.ACK:case k.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Uc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Cc(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Ic=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Ur,Encoder:Bc,get PacketType(){return k},protocol:Rc},Symbol.toStringTag,{value:"Module"}));function H(r,e,t){return r.on(e,t),function(){r.off(e,t)}}const Lc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Pi extends B{constructor(e,t,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[H(e,"open",this.onopen.bind(this)),H(e,"packet",this.onpacket.bind(this)),H(e,"error",this.onerror.bind(this)),H(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Lc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const s={type:k.EVENT,data:t};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const c=this.ids++,h=t.pop();this._registerAckCallback(c,h),s.id=c}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var s;const i=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const a=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let h=0;h<this.sendBuffer.length;h++)this.sendBuffer[h].id===e&&this.sendBuffer.splice(h,1);t.call(this,new Error("operation has timed out"))},i),c=(...h)=>{this.io.clearTimeoutFn(a),t.apply(this,h)};c.withError=!0,this.acks[e]=c}emitWithAck(e,...t){return new Promise((s,i)=>{const a=(c,h)=>c?i(c):s(h);a.withError=!0,t.push(a),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...a)=>s!==this._queue[0]?void 0:(i!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...a)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:k.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case k.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case k.EVENT:case k.BINARY_EVENT:this.onevent(e);break;case k.ACK:case k.BINARY_ACK:this.onack(e);break;case k.DISCONNECT:this.ondisconnect();break;case k.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const s of t)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let s=!1;return function(...i){s||(s=!0,t.packet({type:k.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:k.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const s of t)s.apply(this,e.data)}}}function Me(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}Me.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=Math.floor(e*10)&1?r+t:r-t}return Math.min(r,this.max)|0};Me.prototype.reset=function(){this.attempts=0};Me.prototype.setMin=function(r){this.ms=r};Me.prototype.setMax=function(r){this.max=r};Me.prototype.setJitter=function(r){this.jitter=r};class mr extends B{constructor(e,t){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,zt(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((s=t.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new Me({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||Ic;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ai(this.uri,this.opts);const t=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const i=H(t,"open",function(){s.onopen(),e&&e()}),a=h=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",h),e?e(h):this.maybeReconnectOnOpen()},c=H(t,"error",a);if(this._timeout!==!1){const h=this._timeout,d=this.setTimeoutFn(()=>{i(),a(new Error("timeout")),t.close()},h);this.opts.autoUnref&&d.unref(),this.subs.push(()=>{this.clearTimeoutFn(d)})}return this.subs.push(i),this.subs.push(c),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(H(e,"ping",this.onping.bind(this)),H(e,"data",this.ondata.bind(this)),H(e,"error",this.onerror.bind(this)),H(e,"close",this.onclose.bind(this)),H(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Rr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new Pi(this,e,t),this.nsps[e]=s),s}_destroy(e){const t=Object.keys(this.nsps);for(const s of t)if(this.nsps[s].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let s=0;s<t.length;s++)this.engine.write(t[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const He={};function St(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const t=$c(r,e.path||"/socket.io"),s=t.source,i=t.id,a=t.path,c=He[i]&&a in He[i].nsps,h=e.forceNew||e["force new connection"]||e.multiplex===!1||c;let d;return h?d=new mr(s,e):(He[i]||(He[i]=new mr(s,e)),d=He[i]),t.query&&!e.query&&(e.query=t.queryKey),d.socket(t.path,e)}Object.assign(St,{Manager:mr,Socket:Pi,io:St,connect:St});const Dc=P`
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
    margin-top: 2em;
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
`,Fc=P`
  .form-container {
    border: 1px solid #ccc;
    width: 20em;
    height: 7em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .question {
    font-size: 1.2em;
    margin: 0;
    text-align: center;
  }

  .choices-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .choice {
    flex: 1;
    text-align: center;
    padding: 1.5em 0;
    margin: 0;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .choice:hover {
    background-color: #e0e0e0;
  }

  .choice:first-child {
    border-right: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .choice:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .results-container {
    border: 1px solid #ccc;
    width: 20em;
    height: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1em;
  }

  .results-header {
    font-size: 1.2em;
    margin: 0;
    text-align: center;
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
  }

  .result:first-child {
    border-right: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .result:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;var Nc=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,ut=(r,e,t,s)=>{for(var i=s>1?void 0:s?Mc(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Nc(e,t,i),i};let ve=class extends S{constructor(){super(...arguments),this.numberYes=0,this.hasUserVotedYet=!1,this.numberOfUsers=1,this.numberNo=0}updateYesVotes(){this.hasUserVotedYet?console.log("user cannot vote twice"):(this.numberYes+=1,this.hasUserVotedYet=!0,this.dispatchSingleVote("YES"),this.checkMajorityDecision())}updateNoVotes(){this.hasUserVotedYet?console.log("user cannot vote twice"):(this.numberNo+=1,this.hasUserVotedYet=!0,this.dispatchSingleVote("NO"),this.checkMajorityDecision())}checkMajorityDecision(){const r=Math.floor(this.numberOfUsers/2)+1;this.numberYes>=r?this.dispatchVotingMajorityReached("YES"):this.numberNo>=r&&this.dispatchVotingMajorityReached("NO")}dispatchVotingMajorityReached(r){console.log("decision dispatched!");const e=new CustomEvent("voting-decision-made",{detail:{decision:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}dispatchSingleVote(r){console.log("single vote dispatched!");const e=new CustomEvent("single-vote-made",{detail:{vote:r},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return y`
      <section class="form-container">
        <h2 class="question">Does this song match the vibe?</h2>
        <ul class="choices-list">
          <li class="choice" @click=${this.updateYesVotes}>YES</li>
          <li class="choice" @click=${this.updateNoVotes}>NO</li>
        </ul>
      </section>
      <section class="results-container">
        <h2 class="results-header">Results out of ${this.numberOfUsers}</h2>
        <ul class="results-list">
          <li class="result">${this.numberYes} YES</li>
          <li class="result">${this.numberNo} NO</li>
        </ul>
      </section>
    `}};ve.styles=Fc;ut([E()],ve.prototype,"numberYes",2);ut([E()],ve.prototype,"hasUserVotedYet",2);ut([_()],ve.prototype,"numberOfUsers",2);ut([E()],ve.prototype,"numberNo",2);ve=ut([A("voting-form")],ve);var jc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,F=(r,e,t,s)=>{for(var i=s>1?void 0:s?qc(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&jc(e,t,i),i};let D=class extends S{constructor(){super(...arguments),this.userDetails=null,this.messages=[],this.users=[],this.isInputFocused=!1,this.playlist=[],this.submittedTrackList=[],this.chosenVibe="fricken hype",this.isPlaying=!1,this.isLoading=!1,this.loadingProgress=0,this.audio=null,this.numberYes=0,this.numberNo=0,this.userWhoIsChoosingSong=!1,this.currentSong=null}connectedCallback(){var r;super.connectedCallback(),this.socket=St("ws://localhost:3000"),this.addEventListener("single-track-submitted",e=>{const t=e;this._handleSongSubmittedByUser(t.detail.track)}),this.addEventListener("voting-decision-made",e=>{const t=e;this._handleMajorityReached(t.detail.decision)}),this.addEventListener("single-vote-made",e=>{const t=e;this._handleSingleVoteMade(t.detail.vote)}),this.userDetails&&((r=this.socket)==null||r.emit("userDetails",this.userDetails)),this.socket.on("message",e=>{this.messages=[...this.messages,e]}),this.socket.on("track-submitted",e=>{this.submittedTrackList=[...this.submittedTrackList,e]}),this.socket.on("is-loading",e=>{this.isLoading=e,this.startGameLoading()}),this.socket.on("vibe-submitted",e=>{this.chosenVibe=e}),this.socket.on("voting-decision-made",e=>{if(e.toUpperCase()==="YES"){const t=this.submittedTrackList.pop();t?this.playlist=[...this.playlist,t]:console.error("No track to add to the playlist")}}),this.socket.on("single-vote-made",e=>{e.toUpperCase()==="YES"?this.numberYes+=1:this.numberNo+=1}),this.socket.on("current-song",e=>{this.currentSong=e}),this.socket.on("user-chosen-to-pick",e=>{var t,s;console.log("user-chosen-to-pick within frontend websocket receiver: ",e),console.log("userName",(t=this.userDetails)==null?void 0:t.name),e===((s=this.userDetails)==null?void 0:s.name)&&(this.userWhoIsChoosingSong=!0)}),this.socket.on("users",e=>{this.users=e}),this.socket.on("connect",()=>{console.log("Connected to WebSocket server")}),this.socket.on("disconnect",()=>{console.log("Disconnected from WebSocket server")})}disconnectedCallback(){super.disconnectedCallback(),this.socket&&this.socket.disconnect(),this.removeEventListener("single-track-submitted",this._handleSongSubmittedByUser),this.removeEventListener("single-vote-made",this._handleSingleVoteMade),this.removeEventListener("voting-decision-made",this._handleMajorityReached)}_handleMajorityReached(r){var e;console.log("decision within majority reached event listener: ",r),(e=this.socket)==null||e.emit("voting-decision-made",r)}_handleSingleVoteMade(r){var e;console.log("single vote made: ",r),(e=this.socket)==null||e.emit("single-vote-made",r)}_handleSongSubmittedByUser(r){var e,t,s;if(r){console.log("submitting track from the front end"),(e=this.socket)==null||e.emit("track-submitted",r);const i={name:r.name,artist:r.artists[0].name,albumCover:r.album.images[0].url,previewURL:r.preview_url,recommendedBy:((t=this.userDetails)==null?void 0:t.name)||"Unknown"};this.currentSong=i,console.log("emitting song from the frontend, ",i),(s=this.socket)==null||s.emit("current-song",i),this.userWhoIsChoosingSong=!1}}handleInputFocus(){this.isInputFocused=!0}handleInputBlur(){this.isInputFocused=!1}handleKeydown(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("input");r.key==="Enter"&&this.isInputFocused&&(e!=null&&e.value.trim())&&this.sendMessage()}sendMessage(){var e,t;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("input");if(r&&r.value.trim()&&this.userDetails){const s={text:r.value.trim(),sender:this.userDetails.name,profilePic:this.userDetails.profilePic};(t=this.socket)==null||t.emit("message",s),r.value=""}}render(){var r,e,t,s;return y`
      <section class="game-columns">
        <section class="left-column">
          <section class="game-info">
            <h3 class="game-sub-header">Round #</h3>
            <a href="/app/home" class="leave-game">Leave Game</a>
          </section>
          <section class="last-recommended-song">
            <h4 class="sub-sub-header">Last Song Recommended By:</h4>
            <p class="subtext">Enter user name here.</p>
          </section>
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
          <p class="subtext">The vibe: ${this.chosenVibe}</p>
          ${this.userWhoIsChoosingSong?y`<div class="song-picker-holder">
                <h3 class="game-sub-header">Pick a Song.</h3>
                <song-picker .multiPicker=${!1}></song-picker>
              </div>`:""}
          ${this.currentSong?y`
                <div class="song-player-component">
                  <h3 class="song-name">${(r=this.currentSong)==null?void 0:r.name}</h3>
                  <p class="artist-name">${(e=this.currentSong)==null?void 0:e.artist}</p>
                  <img
                    src="${(t=this.currentSong)==null?void 0:t.albumCover}"
                    alt="Album cover"
                    class="album-cover"
                  />
                  <p class="recommended-by">
                    Recommended by: ${(s=this.currentSong)==null?void 0:s.recommendedBy}
                  </p>
                  <button @click="${this.playSong}">
                    ${this.isPlaying?"Stop Song":"Play"}
                  </button>
                  <audio></audio>
                </div>
              `:""}
          <voting-form
            .numberYes=${this.numberYes}
            .numberNo=${this.numberNo}
            .numberOfUsers=${this.users.length}
          ></voting-form>
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
                  <li class="chat-message">
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
              ${this.users.map(r=>y`
                  <div class="user">
                    <img
                      src="/images/${r.profilePic}.png"
                      alt="${r.name}"
                    />
                    <span class="username">${r.name}</span>
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
    `}submitIsLoadingToServer(){var r;this.isLoading=!0,(r=this.socket)==null||r.emit("is-loading",this.isLoading)}startGameLoading(){this.isLoading=!0,this.loadingProgress=0;const r=10,e=20,t=setInterval(()=>{console.log("within interval:"),this.loadingProgress+=e,this.loadingProgress>=100&&(clearInterval(t),this.loadingProgress=100,this.isLoading=!1,this.startGameLogic())},r)}startGameLogic(){var r;if(console.log("startGameLogic Ran!"),this.users){const e=this.users[0];console.log("randomUser",e),(r=this.socket)==null||r.emit("user-chosen-to-pick",e.name)}}handleVibeSubmit(r){var s;r.preventDefault();const t=r.target.elements.namedItem("vibe");this.chosenVibe=t.value,(s=this.socket)==null||s.emit("vibe-submitted",this.chosenVibe),this.closeModal(),this.requestUpdate()}closeModal(){this.chosenVibe&&this.requestUpdate()}playSong(){var r,e;(r=this.currentSong)!=null&&r.previewURL&&(this.audio||(this.audio=((e=this.shadowRoot)==null?void 0:e.querySelector("audio"))||null),this.audio&&(this.isPlaying?this.audio.pause():(this.audio.src=this.currentSong.previewURL,this.audio.play()),this.isPlaying=!this.isPlaying))}};D.styles=Dc;F([E()],D.prototype,"userDetails",2);F([E()],D.prototype,"messages",2);F([E()],D.prototype,"users",2);F([E()],D.prototype,"isInputFocused",2);F([E()],D.prototype,"playlist",2);F([E()],D.prototype,"submittedTrackList",2);F([_()],D.prototype,"chosenVibe",2);F([E()],D.prototype,"isPlaying",2);F([E()],D.prototype,"isLoading",2);F([E()],D.prototype,"loadingProgress",2);F([E()],D.prototype,"numberYes",2);F([E()],D.prototype,"numberNo",2);F([E()],D.prototype,"userWhoIsChoosingSong",2);F([E()],D.prototype,"currentSong",2);D=F([A("game-feature")],D);var zc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,Vt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Vc(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&zc(e,t,i),i};let De=class extends Fe{constructor(){super(...arguments),this.userDetails=null}get userid(){var r;return(r=this.location)==null?void 0:r.params.userid}async _getUserFromDatabase(r){const e="http://localhost:3000";try{const t=await fetch(`${e}/profile/${r}`);if(!t.ok)throw new Error(`Error fetching profile: ${t.statusText}`);return await t.json()}catch(t){throw console.error("Error fetching user profile: ",t),t}}connectedCallback(){super.connectedCallback(),this.location&&this.location.params&&this.location.params.userid?this._getUserFromDatabase(this.location.params.userid).then(r=>{this.userDetails={name:r.name||"Unknown",profilePic:r.profileImage||"defaultProfileImage"},console.log("User details set:",this.userDetails)}).catch(r=>{console.error("Failed to fetch user profile:",r)}):console.error("User ID is not available in location parameters")}render(){return this.userDetails?y`
      <section class="gameFeature">
        <game-feature .userDetails=${this.userDetails}></game-feature>
      </section>
    `:y`<p>Loading...</p>`}};De.styles=[Ya];Vt([_({attribute:!1})],De.prototype,"location",2);Vt([_({reflect:!0})],De.prototype,"userid",1);Vt([E()],De.prototype,"userDetails",2);De=Vt([A("chat-room-page")],De);var Hc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Yc=(r,e,t,s)=>{for(var i=s>1?void 0:s?Wc(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(i=(s?c(e,t,i):c(i))||i);return s&&i&&Hc(e,t,i),i};let Gc=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"/createProfile",component:"create-profile-page"},{path:"app/chatRoom/:userid",component:"chat-room-page"},{path:"(.*)",component:"not-found-page"}],Os=class extends Ys{constructor(){super(An)}render(){return y`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${Gc}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("MTVAPPElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Os=Yc([A("mtv-app")],Os);
