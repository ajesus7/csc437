(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=globalThis,hr=yt.ShadowRoot&&(yt.ShadyCSS===void 0||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ur=Symbol(),Fr=new WeakMap;let Ai=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ur)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Fr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fr.set(t,e))}return e}toString(){return this.cssText}};const Ms=r=>new Ai(typeof r=="string"?r:r+"",void 0,ur),R=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new Ai(t,r,ur)},js=(r,e)=>{if(hr)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=yt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Nr=hr?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ms(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qs,defineProperty:zs,getOwnPropertyDescriptor:Hs,getOwnPropertyNames:Vs,getOwnPropertySymbols:Ws,getPrototypeOf:Ks}=Object,ae=globalThis,Mr=ae.trustedTypes,Ys=Mr?Mr.emptyScript:"",Wt=ae.reactiveElementPolyfillSupport,He=(r,e)=>r,$t={toAttribute(r,e){switch(e){case Boolean:r=r?Ys:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},pr=(r,e)=>!qs(r,e),jr={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:pr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ae.litPropertyMetadata??(ae.litPropertyMetadata=new WeakMap);class Te extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=jr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&zs(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=Hs(this.prototype,e)??{get(){return this[t]},set(c){this[t]=c}};return{get(){return s==null?void 0:s.call(this)},set(c){const h=s==null?void 0:s.call(this);a.call(this,c),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??jr}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;const e=Ks(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){const t=this.properties,i=[...Vs(t),...Ws(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Nr(s))}else e!==void 0&&t.push(Nr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return js(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var a;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const c=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:$t).toAttribute(t,i.type);this._$Em=e,c==null?this.removeAttribute(s):this.setAttribute(s,c),this._$Em=null}}_$AK(e,t){var a;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const c=i.getPropertyOptions(s),h=typeof c.converter=="function"?{fromAttribute:c.converter}:((a=c.converter)==null?void 0:a.fromAttribute)!==void 0?c.converter:$t;this._$Em=s,this[s]=h.fromAttribute(t,c.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??pr)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,c]of this._$Ep)this[a]=c;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,c]of s)c.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],c)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[He("elementProperties")]=new Map,Te[He("finalized")]=new Map,Wt==null||Wt({ReactiveElement:Te}),(ae.reactiveElementVersions??(ae.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=globalThis,At=Ve.trustedTypes,qr=At?At.createPolicy("lit-html",{createHTML:r=>r}):void 0,Si="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,Ti="?"+oe,Js=`<${Ti}>`,de=document,Ke=()=>de.createComment(""),Ye=r=>r===null||typeof r!="object"&&typeof r!="function",ki=Array.isArray,Gs=r=>ki(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Kt=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zr=/-->/g,Hr=/>/g,ue=RegExp(`>|${Kt}(?:([^\\s"'>=/]+)(${Kt}*=${Kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vr=/'/g,Wr=/"/g,Ci=/^(?:script|style|textarea|title)$/i,Xs=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),x=Xs(1),Pe=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Kr=new WeakMap,pe=de.createTreeWalker(de,129);function Pi(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return qr!==void 0?qr.createHTML(e):e}const Qs=(r,e)=>{const t=r.length-1,i=[];let s,a=e===2?"<svg>":"",c=je;for(let h=0;h<t;h++){const p=r[h];let m,y,b=-1,w=0;for(;w<p.length&&(c.lastIndex=w,y=c.exec(p),y!==null);)w=c.lastIndex,c===je?y[1]==="!--"?c=zr:y[1]!==void 0?c=Hr:y[2]!==void 0?(Ci.test(y[2])&&(s=RegExp("</"+y[2],"g")),c=ue):y[3]!==void 0&&(c=ue):c===ue?y[0]===">"?(c=s??je,b=-1):y[1]===void 0?b=-2:(b=c.lastIndex-y[2].length,m=y[1],c=y[3]===void 0?ue:y[3]==='"'?Wr:Vr):c===Wr||c===Vr?c=ue:c===zr||c===Hr?c=je:(c=ue,s=void 0);const v=c===ue&&r[h+1].startsWith("/>")?" ":"";a+=c===je?p+Js:b>=0?(i.push(m),p.slice(0,b)+Si+p.slice(b)+oe+v):p+oe+(b===-2?h:v)}return[Pi(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class Je{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,c=0;const h=e.length-1,p=this.parts,[m,y]=Qs(e,t);if(this.el=Je.createElement(m,i),pe.currentNode=this.el.content,t===2){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(s=pe.nextNode())!==null&&p.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const b of s.getAttributeNames())if(b.endsWith(Si)){const w=y[c++],v=s.getAttribute(b).split(oe),D=/([.?@])?(.*)/.exec(w);p.push({type:1,index:a,name:D[2],strings:v,ctor:D[1]==="."?en:D[1]==="?"?tn:D[1]==="@"?rn:Ut}),s.removeAttribute(b)}else b.startsWith(oe)&&(p.push({type:6,index:a}),s.removeAttribute(b));if(Ci.test(s.tagName)){const b=s.textContent.split(oe),w=b.length-1;if(w>0){s.textContent=At?At.emptyScript:"";for(let v=0;v<w;v++)s.append(b[v],Ke()),pe.nextNode(),p.push({type:2,index:++a});s.append(b[w],Ke())}}}else if(s.nodeType===8)if(s.data===Ti)p.push({type:2,index:a});else{let b=-1;for(;(b=s.data.indexOf(oe,b+1))!==-1;)p.push({type:7,index:a}),b+=oe.length-1}a++}}static createElement(e,t){const i=de.createElement("template");return i.innerHTML=e,i}}function Oe(r,e,t=r,i){var c,h;if(e===Pe)return e;let s=i!==void 0?(c=t._$Co)==null?void 0:c[i]:t._$Cl;const a=Ye(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=Oe(r,s._$AS(r,e.values),s,i)),e}class Zs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??de).importNode(t,!0);pe.currentNode=s;let a=pe.nextNode(),c=0,h=0,p=i[0];for(;p!==void 0;){if(c===p.index){let m;p.type===2?m=new rt(a,a.nextSibling,this,e):p.type===1?m=new p.ctor(a,p.name,p.strings,this,e):p.type===6&&(m=new sn(a,this,e)),this._$AV.push(m),p=i[++h]}c!==(p==null?void 0:p.index)&&(a=pe.nextNode(),c++)}return pe.currentNode=de,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class rt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Oe(this,e,t),Ye(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Gs(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==I&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(de.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Je.createElement(Pi(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const c=new Zs(s,this),h=c.u(this.options);c.p(t),this.T(h),this._$AH=c}}_$AC(e){let t=Kr.get(e.strings);return t===void 0&&Kr.set(e.strings,t=new Je(e)),t}k(e){ki(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new rt(this.S(Ke()),this.S(Ke()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ut{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(e,t=this,i,s){const a=this.strings;let c=!1;if(a===void 0)e=Oe(this,e,t,0),c=!Ye(e)||e!==this._$AH&&e!==Pe,c&&(this._$AH=e);else{const h=e;let p,m;for(e=a[0],p=0;p<a.length-1;p++)m=Oe(this,h[i+p],t,p),m===Pe&&(m=this._$AH[p]),c||(c=!Ye(m)||m!==this._$AH[p]),m===I?e=I:e!==I&&(e+=(m??"")+a[p+1]),this._$AH[p]=m}c&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class en extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class tn extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class rn extends Ut{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=Oe(this,e,t,0)??I)===Pe)return;const i=this._$AH,s=e===I&&i!==I||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==I&&(i===I||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class sn{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Oe(this,e)}}const Yt=Ve.litHtmlPolyfillSupport;Yt==null||Yt(Je,rt),(Ve.litHtmlVersions??(Ve.litHtmlVersions=[])).push("3.1.2");const nn=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new rt(e.insertBefore(Ke(),a),a,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Pe}};var $i;S._$litElement$=!0,S.finalized=!0,($i=globalThis.litElementHydrateSupport)==null||$i.call(globalThis,{LitElement:S});const Jt=globalThis.litElementPolyfillSupport;Jt==null||Jt({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:pr},an=(r=on,e,t)=>{const{kind:i,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(t.name,r),i==="accessor"){const{name:c}=t;return{set(h){const p=e.get.call(this);e.set.call(this,h),this.requestUpdate(c,p,r)},init(h){return h!==void 0&&this.P(c,void 0,r),h}}}if(i==="setter"){const{name:c}=t;return function(h){const p=this[c];e.call(this,h),this.requestUpdate(c,p,r)}}throw Error("Unsupported decorator location: "+i)};function _(r){return(e,t)=>typeof t=="object"?an(r,e,t):((i,s,a)=>{const c=s.hasOwnProperty(a);return s.constructor.createProperty(a,c?{...i,wrapped:!0}:i),c?Object.getOwnPropertyDescriptor(s,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(r){return _({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Oi=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yr=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,c)),this.unsubscribe=c},this.host=e,t.context!==void 0){const a=t;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Oi(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class cn{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ln=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Jr=class extends cn{constructor(e,t,i){var s,a;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=c=>{const h=c.composedPath()[0];c.context===this.context&&h!==this.host&&(c.stopPropagation(),this.addCallback(c.callback,h,c.subscribe))},this.onProviderRequest=c=>{const h=c.composedPath()[0];if(c.context!==this.context||h===this.host)return;const p=new Set;for(const[m,{consumerHost:y}]of this.subscriptions)p.has(m)||(p.add(m),y.dispatchEvent(new Oi(this.context,m,!0)));c.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(a=(s=this.host).addController)==null||a.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ln(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ri({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Jr(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var a;return(a=i.get(this))==null||a.setValue(s),e.set.call(this,s)},init(s){var a;return(a=i.get(this))==null||a.setValue(s),s}};{e.constructor.addInitializer(c=>{i.set(c,new Jr(c,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let a;if(s===void 0){const c=new WeakMap;a={get:function(){return c.get(this)},set:function(h){i.get(this).setValue(h),c.set(this,h)},configurable:!0,enumerable:!0}}else{const c=s.set;a={...s,set:function(h){i.get(this).setValue(h),c==null||c.call(this,h)}}}return void Object.defineProperty(e,t,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bi({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Yr(this,{context:r,callback:s=>{this[i.name]=s},subscribe:e})}):t.constructor.addInitializer(s=>{new Yr(s,{context:r,callback:a=>{s[i]=a},subscribe:e})})}}let hn=class extends S{constructor(e,t){super(),this.model=t,this.updateFn=e,this.addEventListener("mvu:message",i=>{const s=i.detail;console.log("Got message: ",s),this.receive(s)})}receive(e){if(this.model){const t=this.updateFn(this.model,e),i=t;typeof(i==null?void 0:i.then)=="function"?i.then(s=>{const a=s(this.model);this.model=a}):this.model=t}}},un=class extends S{dispatchMessage(e,t=this){const i=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(i)}};class pn{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:i}=t,s=this._handlers.get(i);return s?s(t,e):e}}function dn(r){return e=>Object.assign({},e,r)}function fn(r){return r}const mn="http://localhost:3000",gn=`${mn}`,yn="/api",er="JWT_AUTH_TOKEN",ne=class ne{constructor(){this.authenticated=!1,this.username="music_listener",this.signOut=()=>{}}static deauthenticate(e){const t=new ne;return console.log("Deauthenticating",e,ne._theUser),e===ne._theUser&&(localStorage.removeItem(er),ne._theUser=t),t}};ne._theUser=new ne;let z=ne;class Ge extends z{constructor(e,t){super();const s=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(window.atob(s).split("").map(function(h){return"%"+("00"+h.charCodeAt(0).toString(16)).slice(-2)}).join("")),c=JSON.parse(a);console.log("Token payload",c),this.token=e,this.authenticated=!0,this.username=c.username,this.signOut=t}static authenticate(e,t){return z._theUser=new Ge(e,t),localStorage.setItem(er,e),z._theUser}static authenticateFromLocalStorage(e){const t=localStorage.getItem(er);return t?Ge.authenticate(t,e):z._theUser}}class dr{constructor(e){this._base=yn,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=z._theUser.authenticated,i={"Content-Type":"application/json"};if(t){const a={Authorization:`Bearer ${z._theUser.token}`};return e?{...i,...a}:a}else return e?{...i}:void 0}_url(e){return`${gn}${this._base}${e}`}}class Gr extends dr{constructor(e){super(Object.fromEntries(e))}}class Ui extends dr{constructor(){super(void 0)}}var bn=Object.defineProperty,Ii=(r,e,t,i)=>{for(var s=void 0,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=c(e,t,s)||s);return s&&bn(e,t,s),s};const Li="MTVModel",Xr={user:new z},wn=()=>new pn,Di=dn,Fi=fn;class Ni extends hn{constructor(e){super(e,Xr),this.model=Xr}}Ii([Ri({context:Li}),T()],Ni.prototype,"model");class it extends un{getFromModel(e){if(this._model)return this._model[e]}}Ii([Bi({context:Li,subscribe:!0}),_({attribute:!1})],it.prototype,"_model");const fr=wn(),_n=fr.update;fr.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Ui().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Di({profile:t}):Fi)});fr.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new dr(t).put(`/profiles/${e}`).then(i=>{if(i.status===200)return i.json()}).then(i=>{i&&console.log("Profile:",i)}).then(i=>i?Di({profile:i}):Fi)});const vn=R`
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
`,xn=R`
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
`;var En=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,st=(r,e,t,i)=>{for(var s=i>1?void 0:i?$n(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&En(e,t,s),s};let fe=class extends S{constructor(){super(),this.names=[],this.namesOriginalOrder=[],this.listAttributes=[],this.sort_state="unsorted",this.initializedNamesOriginalOrder=!1,this.names=[],this.namesOriginalOrder=[...this.names],this.listAttributes=[]}_onStateChanged(r){const e=r.target;this.initializedNamesOriginalOrder||(this.namesOriginalOrder=[...this.names],this.initializedNamesOriginalOrder=!0),this.sort_state=="unsorted"?this.names.sort((t,i)=>{const s=t[0].toUpperCase(),a=i[0].toUpperCase();return s<a?-1:s>a?1:0}):this.sort_state=="sorted"&&(this.names=[...this.namesOriginalOrder]),this.sort_state=e.filteredState}render(){return x`
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
    `}};fe.styles=[xn];st([_({type:Array})],fe.prototype,"names",2);st([_({type:Array})],fe.prototype,"namesOriginalOrder",2);st([_({type:Array})],fe.prototype,"listAttributes",2);st([T()],fe.prototype,"sort_state",2);fe=st([C("sortable-list")],fe);const An=R`
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
`;var Sn=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,It=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Sn(e,t,s),s};let Re=class extends S{constructor(){super(),this.names=[],this.listAttributes=[],this.sort_state="unsorted",this.names=[],this.listAttributes=[]}render(){return x`
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
    `}};Re.styles=[An];It([_({type:Array})],Re.prototype,"names",2);It([_({type:Array})],Re.prototype,"listAttributes",2);It([T()],Re.prototype,"sort_state",2);Re=It([C("general-list")],Re);const kn=R`
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
`;var Cn=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Cn(e,t,s),s};let Xe=class extends S{constructor(){super(...arguments),this.artists=[],this.listAttributes=""}render(){return x`
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
    `}};Xe.styles=[kn];mr([_({type:Array})],Xe.prototype,"artists",2);mr([_({type:String})],Xe.prototype,"listAttributes",2);Xe=mr([C("favorites-list")],Xe);const On=R`
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
`;var Rn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,_e=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Rn(e,t,s),s};let ee=class extends S{constructor(){super(...arguments),this.open=!1,this.align="left",this.profileImageLink=""}_signOutUser(){console.log("Log Out Clicked.");const r=new CustomEvent("userSignOutTriggeredWithinDropDown",{bubbles:!0,composed:!0});this.dispatchEvent(r)}render(){return x`
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
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};ee.styles=[On];_e([_({reflect:!0,type:Boolean})],ee.prototype,"open",2);_e([_()],ee.prototype,"align",2);_e([_()],ee.prototype,"profileImage",2);_e([_()],ee.prototype,"profileUserID",2);_e([_()],ee.prototype,"profileDescription",2);_e([_()],ee.prototype,"profileImageLink",2);ee=_e([C("drop-down")],ee);const Un=R`
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
`;var In=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Mi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ln(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&In(e,t,s),s};let St=class extends S{constructor(){super(...arguments),this.on=!1}render(){return x`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});document.body.classList.contains("dark-mode")?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode")):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")),this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};St.styles=[Un];Mi([_({reflect:!0,type:Boolean})],St.prototype,"on",2);St=Mi([C("color-mode-switch")],St);const Dn=R`
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
`;var Fn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Lt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Fn(e,t,s),s};let Be=class extends S{constructor(){super(),this.title="",this.description="",this.user_id=0,this.title="",this.description=""}render(){return x`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `}};Be.styles=[Dn];Lt([_()],Be.prototype,"title",2);Lt([_()],Be.prototype,"description",2);Lt([_()],Be.prototype,"user_id",2);Be=Lt([C("default-card")],Be);const Mn=R`
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
`;var jn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,gr=(r,e,t,i)=>{for(var s=i>1?void 0:i?qn(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&jn(e,t,s),s};let Qe=class extends S{constructor(){super(...arguments),this.on=!1,this.filteredState=""}render(){return x`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`}_onInput(){this.filteredState=="unsorted"?this.filteredState="sorted":this.filteredState="unsorted",this.dispatchEvent(new Event("state-changed"))}};Qe.styles=[Mn];gr([_({reflect:!0,type:Boolean})],Qe.prototype,"on",2);gr([_()],Qe.prototype,"filteredState",2);Qe=gr([C("toggle-switch")],Qe);const zn=R`
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
`;function Tt(r){return r=r||[],Array.isArray(r)?r:[r]}function H(r){return`[Vaadin.Router] ${r}`}function Hn(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const kt="module",Ct="nomodule",tr=[kt,Ct];function Qr(r){if(!r.match(/.+\.[m]?js$/))throw new Error(H(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function ji(r){if(!r||!q(r.path))throw new Error(H('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!me(r.action)&&!Array.isArray(r.children)&&!me(r.children)&&!Pt(e)&&!t.some(i=>q(r[i])))throw new Error(H(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(q(e))Qr(e);else if(tr.some(i=>i in e))tr.forEach(i=>i in e&&Qr(e[i]));else throw new Error(H('Expected route bundle to include either "'+Ct+'" or "'+kt+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn(H(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function Zr(r){Tt(r).forEach(e=>ji(e))}function ei(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===kt?t.setAttribute("type",kt):e===Ct&&t.setAttribute(Ct,""),t.async=!0),new Promise((i,s)=>{t.onreadystatechange=t.onload=a=>{t.__dynamicImportLoaded=!0,i(a)},t.onerror=a=>{t.parentNode&&t.parentNode.removeChild(t),s(a)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function Vn(r){return q(r)?ei(r):Promise.race(tr.filter(e=>e in r).map(e=>ei(r[e],e)))}function We(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function Pt(r){return typeof r=="object"&&!!r}function me(r){return typeof r=="function"}function q(r){return typeof r=="string"}function qi(r){const e=new Error(H(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const Ce=new class{};function Wn(r){const e=r.port,t=r.protocol,a=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${a}`}function ti(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let h=0;h<t.length;h++){const p=t[h];if(p.nodeName&&p.nodeName.toLowerCase()==="a"){e=p;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Wn(e))!==window.location.origin)return;const{pathname:s,search:a,hash:c}=e;We("go",{pathname:s,search:a,hash:c})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Kn={activate(){window.document.addEventListener("click",ti)},inactivate(){window.document.removeEventListener("click",ti)}},Yn=/Trident/.test(navigator.userAgent);Yn&&!me(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ri(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;We("go",{pathname:e,search:t,hash:i})}const Jn={activate(){window.addEventListener("popstate",ri)},inactivate(){window.removeEventListener("popstate",ri)}};var Le=Yi,Gn=yr,Xn=to,Qn=Vi,Zn=Ki,zi="/",Hi="./",eo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function yr(r,e){for(var t=[],i=0,s=0,a="",c=e&&e.delimiter||zi,h=e&&e.delimiters||Hi,p=!1,m;(m=eo.exec(r))!==null;){var y=m[0],b=m[1],w=m.index;if(a+=r.slice(s,w),s=w+y.length,b){a+=b[1],p=!0;continue}var v="",D=r[s],he=m[2],jt=m[3],Fe=m[4],xe=m[5];if(!p&&a.length){var Ee=a.length-1;h.indexOf(a[Ee])>-1&&(v=a[Ee],a=a.slice(0,Ee))}a&&(t.push(a),a="",p=!1);var qt=v!==""&&D!==void 0&&D!==v,Z=xe==="+"||xe==="*",lt=xe==="?"||xe==="*",Ne=v||c,ht=jt||Fe;t.push({name:he||i++,prefix:v,delimiter:Ne,optional:lt,repeat:Z,partial:qt,pattern:ht?ro(ht):"[^"+se(Ne)+"]+?"})}return(a||s<r.length)&&t.push(a+r.substr(s)),t}function to(r,e){return Vi(yr(r,e))}function Vi(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,s){for(var a="",c=s&&s.encode||encodeURIComponent,h=0;h<r.length;h++){var p=r[h];if(typeof p=="string"){a+=p;continue}var m=i?i[p.name]:void 0,y;if(Array.isArray(m)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but got array');if(m.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var b=0;b<m.length;b++){if(y=c(m[b],p),!e[h].test(y))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'"');a+=(b===0?p.prefix:p.delimiter)+y}continue}if(typeof m=="string"||typeof m=="number"||typeof m=="boolean"){if(y=c(String(m),p),!e[h].test(y))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but got "'+y+'"');a+=p.prefix+y;continue}if(p.optional){p.partial&&(a+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be '+(p.repeat?"an array":"a string"))}return a}}function se(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ro(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Wi(r){return r&&r.sensitive?"":"i"}function io(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function so(r,e,t){for(var i=[],s=0;s<r.length;s++)i.push(Yi(r[s],e,t).source);return new RegExp("(?:"+i.join("|")+")",Wi(t))}function no(r,e,t){return Ki(yr(r,t),e,t)}function Ki(r,e,t){t=t||{};for(var i=t.strict,s=t.start!==!1,a=t.end!==!1,c=se(t.delimiter||zi),h=t.delimiters||Hi,p=[].concat(t.endsWith||[]).map(se).concat("$").join("|"),m=s?"^":"",y=r.length===0,b=0;b<r.length;b++){var w=r[b];if(typeof w=="string")m+=se(w),y=b===r.length-1&&h.indexOf(w[w.length-1])>-1;else{var v=w.repeat?"(?:"+w.pattern+")(?:"+se(w.delimiter)+"(?:"+w.pattern+"))*":w.pattern;e&&e.push(w),w.optional?w.partial?m+=se(w.prefix)+"("+v+")?":m+="(?:"+se(w.prefix)+"("+v+"))?":m+=se(w.prefix)+"("+v+")"}}return a?(i||(m+="(?:"+c+")?"),m+=p==="$"?"$":"(?="+p+")"):(i||(m+="(?:"+c+"(?="+p+"))?"),y||(m+="(?="+c+"|"+p+")")),new RegExp(m,Wi(t))}function Yi(r,e,t){return r instanceof RegExp?io(r,e):Array.isArray(r)?so(r,e,t):no(r,e,t)}Le.parse=Gn;Le.compile=Xn;Le.tokensToFunction=Qn;Le.tokensToRegExp=Zn;const{hasOwnProperty:oo}=Object.prototype,rr=new Map;rr.set("|false",{keys:[],pattern:/(?:)/});function ii(r){try{return decodeURIComponent(r)}catch{return r}}function ao(r,e,t,i,s){t=!!t;const a=`${r}|${t}`;let c=rr.get(a);if(!c){const m=[];c={keys:m,pattern:Le(r,m,{end:t,strict:r===""})},rr.set(a,c)}const h=c.pattern.exec(e);if(!h)return null;const p=Object.assign({},s);for(let m=1;m<h.length;m++){const y=c.keys[m-1],b=y.name,w=h[m];(w!==void 0||!oo.call(p,b))&&(y.repeat?p[b]=w?w.split(y.delimiter).map(ii):[]:p[b]=w&&ii(w))}return{path:h[0],keys:(i||[]).concat(c.keys),params:p}}function Ji(r,e,t,i,s){let a,c,h=0,p=r.path||"";return p.charAt(0)==="/"&&(t&&(p=p.substr(1)),t=!0),{next(m){if(r===m)return{done:!0};const y=r.__children=r.__children||r.children;if(!a&&(a=ao(p,e,!y,i,s),a))return{done:!1,value:{route:r,keys:a.keys,params:a.params,path:a.path}};if(a&&y)for(;h<y.length;){if(!c){const w=y[h];w.parent=r;let v=a.path.length;v>0&&e.charAt(v)==="/"&&(v+=1),c=Ji(w,e.substr(v),t,a.keys,a.params)}const b=c.next(m);if(!b.done)return{done:!1,value:b.value};c=null,h++}return{done:!0}}}}function co(r){if(me(r.route.action))return r.route.action(r)}function lo(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function ho(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function uo(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const s={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let a=r.chain.length;for(;a--&&r.chain[a].route&&r.chain[a].route!==t.parent;)r.chain.pop()}r.chain.push(s)}}class Ze{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||co,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Zr(e);const t=[...Tt(e)];this.root.__children=t}addRoutes(e){return Zr(e),this.root.__children.push(...Tt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,q(e)?{pathname:e}:e),i=Ji(this.root,this.__normalizePathname(t.pathname),this.baseUrl),s=this.resolveRoute;let a=null,c=null,h=t;function p(m,y=a.value.route,b){const w=b===null&&a.value.route;return a=c||i.next(w),c=null,!m&&(a.done||!lo(y,a.value.route))?(c=a,Promise.resolve(Ce)):a.done?Promise.reject(qi(t)):(h=Object.assign(h?{chain:h.chain?h.chain.slice(0):[]}:{},t,a.value),uo(h,a.value),Promise.resolve(s(h)).then(v=>v!=null&&v!==Ce?(h.result=v.result||v,h):p(m,y,v)))}return t.next=p,Promise.resolve().then(()=>p(!0,this.root)).catch(m=>{const y=ho(h);if(m?console.warn(y):m=new Error(y),m.context=m.context||h,m instanceof DOMException||(m.code=m.code||500),this.errorHandler)return h.result=this.errorHandler(m),h;throw m})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}Ze.pathToRegexp=Le;const{pathToRegexp:si}=Ze,ni=new Map;function Gi(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];a.parent=e,Gi(r,a,a.__children||a.children)}}function oi(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function ai(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function po(r,e={}){if(!(r instanceof Ze))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,s)=>{let a=oi(t,i);if(!a&&(t.clear(),Gi(t,r.root,r.root.__children),a=oi(t,i),!a))throw new Error(`Route "${i}" not found`);let c=ni.get(a.fullPath);if(!c){let p=ai(a),m=a.parent;for(;m;){const v=ai(m);v&&(p=v.replace(/\/$/,"")+"/"+p.replace(/^\//,"")),m=m.parent}const y=si.parse(p),b=si.tokensToFunction(y),w=Object.create(null);for(let v=0;v<y.length;v++)q(y[v])||(w[y[v].name]=!0);c={toPath:b,keys:w},ni.set(p,c),a.fullPath=p}let h=c.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){const p={},m=Object.keys(s);for(let b=0;b<m.length;b++){const w=m[b];c.keys[w]||(p[w]=s[w])}const y=e.stringifyQueryParams(p);y&&(h+=y.charAt(0)==="?"?y:`?${y}`)}return h}}let ci=[];function fo(r){ci.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),ci=r}const mo=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},go=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function li(r,e){return r.classList.add(e),new Promise(t=>{if(mo(r)){const i=r.getBoundingClientRect(),s=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${s}`),go(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const yo=256;function Gt(r){return r!=null}function bo(r){const e=Object.assign({},r);return delete e.next,e}function M({pathname:r="",search:e="",hash:t="",chain:i=[],params:s={},redirectFrom:a,resolver:c},h){const p=i.map(m=>m.route);return{baseUrl:c&&c.baseUrl||"",pathname:r,search:e,hash:t,routes:p,route:h||p.length&&p[p.length-1]||null,params:s,redirectFrom:a,getUrl:(m={})=>wt(Y.pathToRegexp.compile(Xi(p))(Object.assign({},s,m)),c)}}function hi(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function wo(r,e){e.location=M(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function bt(r,e,t){if(me(r))return r.apply(t,e)}function ui(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return bt(t[r],e,t)}}function _o(r,e){if(!Array.isArray(r)&&!Pt(r))throw new Error(H(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=Tt(r);for(let i=0;i<t.length;i++)ji(t[i]),e.__children.push(t[i])}function pt(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function wt(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Xi(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class Y extends Ze{constructor(e,t){const i=document.head.querySelector("base"),s=i&&i.getAttribute("href");super([],Object.assign({baseUrl:s&&Ze.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=c=>this.__resolveRoute(c);const a=Y.NavigationTrigger;Y.setTriggers.apply(Y,Object.keys(a).map(c=>a[c])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=M({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();me(t.children)&&(i=i.then(()=>t.children(bo(e))).then(a=>{!Gt(a)&&!me(t.children)&&(a=t.children),_o(a,t)}));const s={redirect:a=>hi(e,a),component:a=>{const c=document.createElement(a);return this.__createdByRouter.set(c,!0),c}};return i.then(()=>{if(this.__isLatestRender(e))return bt(t.action,[e,s],t)}).then(a=>{if(Gt(a)&&(a instanceof HTMLElement||a.redirect||a===Ce))return a;if(q(t.redirect))return s.redirect(t.redirect);if(t.bundle)return Vn(t.bundle).then(()=>{},()=>{throw new Error(H(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(a=>{if(Gt(a))return a;if(q(t.component))return s.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},q(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(s).then(a=>this.__fullyResolveChain(a)).then(a=>{if(this.__isLatestRender(a)){const c=this.__previousContext;if(a===c)return this.__updateBrowserHistory(c,!0),this.location;if(this.location=M(a),t&&this.__updateBrowserHistory(a,i===1),We("location-changed",{router:this,location:this.location}),a.__skipAttach)return this.__copyUnchangedElements(a,c),this.__previousContext=a,this.location;this.__addAppearingContent(a,c);const h=this.__animateIfNeeded(a);return this.__runOnAfterEnterCallbacks(a),this.__runOnAfterLeaveCallbacks(a,c),h.then(()=>{if(this.__isLatestRender(a))return this.__removeDisappearingContent(),this.__previousContext=a,this.location})}}).catch(a=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(s),pt(this.__outlet&&this.__outlet.children),this.location=M(Object.assign(s,{resolver:this})),We("error",Object.assign({router:this,error:a},s)),a}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const a=i!==t?i:e,h=wt(Xi(i.chain),i.resolver)===i.pathname,p=(m,y=m.route,b)=>m.next(void 0,y,b).then(w=>w===null||w===Ce?h?m:y.parent!==null?p(m,y.parent,w):w:w);return p(i).then(m=>{if(m===null||m===Ce)throw qi(a);return m&&m!==Ce&&m!==i?this.__fullyResolveChain(a,m):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(wo(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(H(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Hn(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],s=e.chain;let a=Promise.resolve();const c=()=>({cancel:!0}),h=p=>hi(e,p);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let p=0;p<Math.min(i.length,s.length)&&!(i[p].route!==s[p].route||i[p].path!==s[p].path&&i[p].element!==s[p].element||!this.__isReusableElement(i[p].element,s[p].element));p=++e.__divergedChainIndex);if(e.__skipAttach=s.length===i.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let p=s.length-1;p>=0;p--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:c},i[p]);for(let p=0;p<s.length;p++)a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:c,redirect:h},s[p]),i[p].element.location=M(e,i[p].route)}else for(let p=i.length-1;p>=e.__divergedChainIndex;p--)a=this.__runOnBeforeLeaveCallbacks(a,e,{prevent:c},i[p])}if(!e.__skipAttach)for(let p=0;p<s.length;p++)p<e.__divergedChainIndex?p<i.length&&i[p].element&&(i[p].element.location=M(e,i[p].route)):(a=this.__runOnBeforeEnterCallbacks(a,e,{prevent:c,redirect:h},s[p]),s[p].element&&(s[p].element.location=M(e,s[p].route)));return a.then(p=>{if(p){if(p.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(p.redirect)return this.__redirect(p.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,s){const a=M(t);return e.then(c=>{if(this.__isLatestRender(t))return ui("onBeforeLeave",[a,i,this],s.element)(c)}).then(c=>{if(!(c||{}).redirect)return c})}__runOnBeforeEnterCallbacks(e,t,i,s){const a=M(t,s.route);return e.then(c=>{if(this.__isLatestRender(t))return ui("onBeforeEnter",[a,i,this],s.element)(c)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>yo)throw new Error(H(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(H(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},s){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const a=s?"replaceState":"pushState";window.history[a](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){const a=t&&t.chain[s].element;if(a)if(a.parentNode===i)e.chain[s].element=a,i=a;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(a=>this.__addedByRouter.get(a)&&a!==e.result);let s=i;for(let a=e.__divergedChainIndex;a<e.chain.length;a++){const c=e.chain[a].element;c&&(s.appendChild(c),this.__addedByRouter.set(c,!0),s===i&&this.__appearingContent.push(c),s=c)}}__removeDisappearingContent(){this.__disappearingContent&&pt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(pt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const s=t.chain[i].element;if(s)try{const a=M(e);bt(s.onAfterLeave,[a,{},t.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&pt(s.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},s=M(e,e.chain[t].route);bt(i.onAfterEnter,[s,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],s=[],a=e.chain;let c;for(let h=a.length;h>0;h--)if(a[h-1].route.animate){c=a[h-1].route.animate;break}if(t&&i&&c){const h=Pt(c)&&c.leave||"leaving",p=Pt(c)&&c.enter||"entering";s.push(li(t,h)),s.push(li(i,p))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:s}=e?e.detail:window.location;q(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:s},!0))}static setTriggers(...e){fo(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=po(this)),wt(this.__urlForName(e,t),this)}urlForPath(e,t){return wt(Y.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:s}=q(e)?this.__createUrl(e,"http://a"):e;return We("go",{pathname:t,search:i,hash:s})}}const vo=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,_t=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function xo(){function r(){return!0}return Qi(r)}function Eo(){try{return $o()?!0:Ao()?_t?!So():!xo():!1}catch{return!1}}function $o(){return localStorage.getItem("vaadin.developmentmode.force")}function Ao(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function So(){return!!(_t&&Object.keys(_t).map(e=>_t[e]).filter(e=>e.productionMode).length>0)}function Qi(r,e){if(typeof r!="function")return;const t=vo.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const pi=function(r,e){if(window.Vaadin.developmentMode)return Qi(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Eo());function To(){}const ko=function(){if(typeof pi=="function")return pi(To)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ko();Y.NavigationTrigger={POPSTATE:Jn,CLICK:Kn};var Co=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,br=(r,e,t,i)=>{for(var s=i>1?void 0:i?Po(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Co(e,t,s),s};let et=class extends S{constructor(r){super(),this.redirectAfterSubmit=!1,this.profile=r}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),i={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),spotify:t.get("spotify")==="true"},s=new CustomEvent("profile-update",{detail:{profile:i},bubbles:!0,composed:!0});console.log("profile-update Event being sent to DOM"),this.dispatchEvent(s);const a=new CustomEvent("update-using",{detail:{profile:i},bubbles:!0,composed:!0});console.log("profile update event being sent to profile component to update using"),this.dispatchEvent(a),this.requestUpdate(),this.redirectAfterSubmit&&Y.go("/app/home")}render(){var r,e,t,i,s,a;return x`
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
                    .value=${(i=this.profile)==null?void 0:i.timezone}
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
                          ?checked=${((s=this.profile)==null?void 0:s.spotify)===!0}
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
          `}};et.styles=[zn];br([_({type:Object})],et.prototype,"profile",2);br([_({type:Boolean})],et.prototype,"redirectAfterSubmit",2);et=br([C("edit-profile-form")],et);var Oo=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ro(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Oo(e,t,s),s};let ge=class extends S{constructor(){super(...arguments),this.path="",this.editMode=!1,this.profileEditText="Edit Profile."}get profile(){return this.using||{}}connectedCallback(){super.connectedCallback(),this.addEventListener("update-using",this._handleUsingUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("update-using",this._handleUsingUpdate)}_handleUsingUpdate(r){r.detail&&r.detail.profile&&(this.using=r.detail.profile,this._changeEditMode(),this.requestUpdate())}_changeEditMode(){this.editMode=!this.editMode,this.profileEditText=this.editMode?"Close Edit Menu.":"Edit Profile."}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),i={...this.profile,name:t.get("name"),bio:t.get("bio"),musicTaste:t.get("musicTaste"),timezone:t.get("timezone"),profileImage:t.get("profileImage"),spotify:t.get("spotify")==="true"};this.using=i,this.requestUpdate(),console.log("Form submitted with:",i);const s=new CustomEvent("profile-update",{detail:{profile:i},bubbles:!0,composed:!0});this.dispatchEvent(s),this._changeEditMode()}render(){const{name:r,profileImage:e,profileDescription:t,bio:i}=this.profile;return x`
      ${this.editMode?x`<edit-profile-form .profile=${this.profile}></edit-profile-form>`:""}

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
    `}};ge.styles=vn;nt([_()],ge.prototype,"path",2);nt([_()],ge.prototype,"editMode",2);nt([_()],ge.prototype,"profileEditText",2);nt([_({attribute:!1})],ge.prototype,"using",2);ge=nt([C("user-profile")],ge);var Bo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,Zi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uo(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Bo(e,t,s),s};let ir=class extends S{constructor(){super(...arguments),this.router=new Y(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return x`<slot></slot>`}};Zi([_({attribute:!1})],ir.prototype,"routes",2);ir=Zi([C("vaadin-router")],ir);const Io=R`
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
`;var Lo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,ce=(r,e,t,i)=>{for(var s=i>1?void 0:i?Do(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Lo(e,t,s),s};let es="auth",G=class extends S{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Ge.authenticateFromLocalStorage(()=>this._signOut()),this.showLoginForm=!1,this.whereToRedirect="/createProfile",this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this._handleSignOutEvent=r=>{console.log("Sign out event received",r),this._signOut()}}isAuthenticated(){return this.user.authenticated}toggleLoginForm(){this.showLoginForm=!this.showLoginForm,this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!1,this.requestUpdate()}firstUpdated(){this._toggleDialog(!this.isAuthenticated())}_loginUser(r,e){const t=new FormData;t.append("username",r),t.append("pwd",e),new Gr(t).base().post("/login").then(s=>{if(s.status===200)return s.json();throw this.loginStatus=s.status,new Error(`Login failed with status: ${s.status}`)}).then(s=>{console.log("Log In Request Successful!"),this.user=Ge.authenticate(s.token,()=>this._signOut()),this._toggleDialog(!1),console.log("WTR within login ",this.whereToRedirect),Y.go(this.whereToRedirect==="app/home"?"app/home":`/createProfile/${r}`),this.requestUpdate()}).catch(s=>console.error("Login Error:",s))}_handleLoginSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),i=t.get("username"),s=t.get("pwd");this.whereToRedirect="app/home",typeof i=="string"&&typeof s=="string"?this._loginUser(i,s):console.error("Username or password field is missing or not correctly entered.")}async _handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e),i=t.get("username"),s=t.get("pwd");if(!i||!s)throw this.communicateResultToUser("error"),new Error("Username or password missing from form data.");try{const c=await new Gr(t).base().post("/signup");if(c.status===201)await this.createNewUserProfileAfterRegisterSuccess(i),this.whereToRedirect=`/createProfile/${i}`,console.log("whereToRedirect within Register: ",this.whereToRedirect),this.communicateResultToUser("success"),this._loginUser(i,s);else throw new Error(`Failed to register. Status: ${c.status}`)}catch(a){console.error("Error during registration:",a),this.communicateResultToUser("error")}}async createNewUserProfileAfterRegisterSuccess(r){const e="http://localhost:3000";try{const t=await fetch(`${e}/profileCreation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:r})});if(!t.ok)throw new Error(`Failed to create profile: ${t.statusText}`);const i=await t.json();return console.log("Profile created:",i),i}catch(t){return console.error("Error creating profile:",t),null}}communicateResultToUser(r){r==="error"&&(this.showSignUpErrorMessage=!this.showSignUpErrorMessage),r==="success"&&(this.showSignUpErrorMessage=!1,this.showSignUpSuccessMessage=!0)}connectedCallback(){super.connectedCallback(),this.addEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("userSignOutTriggeredWithinDropDown",this._handleSignOutEvent)}render(){const r=x`
      <dialog class="formsContainer">
        ${this.showLoginForm?x` <form @submit=${this._handleLoginSubmit} class="loginForm">
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
            </form>`:x`<form @submit=${this._handleRegister} class="registrationForm">
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
              ${this.showSignUpErrorMessage?x`<p class="errorMessage">
                    There was an error with signing you up, please try again.
                  </p>`:x``}
              ${this.showSignUpSuccessMessage?x`<p class="successMessage">
                    Sign up successful. If you are not redirected shortly,
                    please
                    <span @click=${this.toggleLoginForm} class="signInLink"
                      >log in here.</span
                    >
                  </p>`:x``}
              <p class="loginSignupLink">
                Already have an account?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign In</span
                >
              </p>
            </form>`}
      </dialog>
    `;return x`${this.isAuthenticated()?"":r} <slot></slot>`}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=z.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};G.styles=[Io];ce([T()],G.prototype,"loginStatus",2);ce([T()],G.prototype,"registerStatus",2);ce([Ri({context:es}),T()],G.prototype,"user",2);ce([T()],G.prototype,"showLoginForm",2);ce([T()],G.prototype,"whereToRedirect",2);ce([T()],G.prototype,"showSignUpErrorMessage",2);ce([T()],G.prototype,"showSignUpSuccessMessage",2);G=ce([C("auth-required")],G);const Fo=R`
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
`;var No=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mo(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&No(e,t,s),s};let tt=class extends S{constructor(){super(...arguments),this.user=new z}render(){const{profileImage:r,profileDescription:e,userid:t}=this.profile||{};return x`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${r}"
          profileDescription="${e}"
          profileUserID="${t}"
        ></drop-down>
      </section>
    `}updated(r){if(console.log("Profile Data has been updated",r),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Ui().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile:",t),this.profile=t})}_signOut(){console.log("Signout"),this.user.signOut()}};tt.styles=[Fo];wr([T()],tt.prototype,"profile",2);wr([Bi({context:es,subscribe:!0}),_({attribute:!1})],tt.prototype,"user",2);tt=wr([C("match-the-vibe-header")],tt);var jo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,ot=(r,e,t,i)=>{for(var s=i>1?void 0:i?qo(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&jo(e,t,s),s};let ye=class extends it{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return x`
      <section class="profile-page">
        <user-profile .using=${this.profile}> </user-profile>
      </section>
    `}};ye.styles=[R`
      :host {
        display: contents;
      }

      .profile-page {
        display: flex;
        justify-content: center;
      }
    `];ot([_({attribute:!1})],ye.prototype,"location",2);ot([_({reflect:!0})],ye.prototype,"userid",1);ot([_({reflect:!0})],ye.prototype,"edit",1);ot([_()],ye.prototype,"profile",1);ye=ot([C("profile-page")],ye);const zo=R`
  .feed-container {
    width: 50em;
    margin-top: 3em;
  }

  h2 {
    font-size: 2em;
  }
`,Ho=R``,Vo=R`
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
`,Wo=R`
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
`;var Ko=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,ts=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yo(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Ko(e,t,s),s};let Ot=class extends S{_handleClick(){console.log("track clicked!"),this.dispatchEvent(new CustomEvent("track-selected",{detail:{track:this.track},bubbles:!0,composed:!0}))}render(){if(!this.track)return x`
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
    `}};Ot.styles=[Wo];ts([_({type:Object})],Ot.prototype,"track",2);Ot=ts([C("track-card")],Ot);var _r={},Dt={};Dt.byteLength=Xo;Dt.toByteArray=Zo;Dt.fromByteArray=ra;var K=[],F=[],Jo=typeof Uint8Array<"u"?Uint8Array:Array,Xt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Se=0,Go=Xt.length;Se<Go;++Se)K[Se]=Xt[Se],F[Xt.charCodeAt(Se)]=Se;F[45]=62;F[95]=63;function rs(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Xo(r){var e=rs(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Qo(r,e,t){return(e+t)*3/4-t}function Zo(r){var e,t=rs(r),i=t[0],s=t[1],a=new Jo(Qo(r,i,s)),c=0,h=s>0?i-4:i,p;for(p=0;p<h;p+=4)e=F[r.charCodeAt(p)]<<18|F[r.charCodeAt(p+1)]<<12|F[r.charCodeAt(p+2)]<<6|F[r.charCodeAt(p+3)],a[c++]=e>>16&255,a[c++]=e>>8&255,a[c++]=e&255;return s===2&&(e=F[r.charCodeAt(p)]<<2|F[r.charCodeAt(p+1)]>>4,a[c++]=e&255),s===1&&(e=F[r.charCodeAt(p)]<<10|F[r.charCodeAt(p+1)]<<4|F[r.charCodeAt(p+2)]>>2,a[c++]=e>>8&255,a[c++]=e&255),a}function ea(r){return K[r>>18&63]+K[r>>12&63]+K[r>>6&63]+K[r&63]}function ta(r,e,t){for(var i,s=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),s.push(ea(i));return s.join("")}function ra(r){for(var e,t=r.length,i=t%3,s=[],a=16383,c=0,h=t-i;c<h;c+=a)s.push(ta(r,c,c+a>h?h:c+a));return i===1?(e=r[t-1],s.push(K[e>>2]+K[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],s.push(K[e>>10]+K[e>>4&63]+K[e<<2&63]+"=")),s.join("")}var vr={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */vr.read=function(r,e,t,i,s){var a,c,h=s*8-i-1,p=(1<<h)-1,m=p>>1,y=-7,b=t?s-1:0,w=t?-1:1,v=r[e+b];for(b+=w,a=v&(1<<-y)-1,v>>=-y,y+=h;y>0;a=a*256+r[e+b],b+=w,y-=8);for(c=a&(1<<-y)-1,a>>=-y,y+=i;y>0;c=c*256+r[e+b],b+=w,y-=8);if(a===0)a=1-m;else{if(a===p)return c?NaN:(v?-1:1)*(1/0);c=c+Math.pow(2,i),a=a-m}return(v?-1:1)*c*Math.pow(2,a-i)};vr.write=function(r,e,t,i,s,a){var c,h,p,m=a*8-s-1,y=(1<<m)-1,b=y>>1,w=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=i?0:a-1,D=i?1:-1,he=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(h=isNaN(e)?1:0,c=y):(c=Math.floor(Math.log(e)/Math.LN2),e*(p=Math.pow(2,-c))<1&&(c--,p*=2),c+b>=1?e+=w/p:e+=w*Math.pow(2,1-b),e*p>=2&&(c++,p/=2),c+b>=y?(h=0,c=y):c+b>=1?(h=(e*p-1)*Math.pow(2,s),c=c+b):(h=e*Math.pow(2,b-1)*Math.pow(2,s),c=0));s>=8;r[t+v]=h&255,v+=D,h/=256,s-=8);for(c=c<<s|h,m+=s;m>0;r[t+v]=c&255,v+=D,c/=256,m-=8);r[t+v-D]|=he*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(r){const e=Dt,t=vr,i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=h,r.SlowBuffer=xe,r.INSPECT_MAX_BYTES=50;const s=2147483647;r.kMaxLength=s,h.TYPED_ARRAY_SUPPORT=a(),!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{const l=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(l,n),l.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function c(l){if(l>s)throw new RangeError('The value "'+l+'" is invalid for option "size"');const n=new Uint8Array(l);return Object.setPrototypeOf(n,h.prototype),n}function h(l,n,o){if(typeof l=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(l)}return p(l,n,o)}h.poolSize=8192;function p(l,n,o){if(typeof l=="string")return w(l,n);if(ArrayBuffer.isView(l))return D(l);if(l==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l);if(W(l,ArrayBuffer)||l&&W(l.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(W(l,SharedArrayBuffer)||l&&W(l.buffer,SharedArrayBuffer)))return he(l,n,o);if(typeof l=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const u=l.valueOf&&l.valueOf();if(u!=null&&u!==l)return h.from(u,n,o);const d=jt(l);if(d)return d;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof l[Symbol.toPrimitive]=="function")return h.from(l[Symbol.toPrimitive]("string"),n,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof l)}h.from=function(l,n,o){return p(l,n,o)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array);function m(l){if(typeof l!="number")throw new TypeError('"size" argument must be of type number');if(l<0)throw new RangeError('The value "'+l+'" is invalid for option "size"')}function y(l,n,o){return m(l),l<=0?c(l):n!==void 0?typeof o=="string"?c(l).fill(n,o):c(l).fill(n):c(l)}h.alloc=function(l,n,o){return y(l,n,o)};function b(l){return m(l),c(l<0?0:Fe(l)|0)}h.allocUnsafe=function(l){return b(l)},h.allocUnsafeSlow=function(l){return b(l)};function w(l,n){if((typeof n!="string"||n==="")&&(n="utf8"),!h.isEncoding(n))throw new TypeError("Unknown encoding: "+n);const o=Ee(l,n)|0;let u=c(o);const d=u.write(l,n);return d!==o&&(u=u.slice(0,d)),u}function v(l){const n=l.length<0?0:Fe(l.length)|0,o=c(n);for(let u=0;u<n;u+=1)o[u]=l[u]&255;return o}function D(l){if(W(l,Uint8Array)){const n=new Uint8Array(l);return he(n.buffer,n.byteOffset,n.byteLength)}return v(l)}function he(l,n,o){if(n<0||l.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(l.byteLength<n+(o||0))throw new RangeError('"length" is outside of buffer bounds');let u;return n===void 0&&o===void 0?u=new Uint8Array(l):o===void 0?u=new Uint8Array(l,n):u=new Uint8Array(l,n,o),Object.setPrototypeOf(u,h.prototype),u}function jt(l){if(h.isBuffer(l)){const n=Fe(l.length)|0,o=c(n);return o.length===0||l.copy(o,0,0,n),o}if(l.length!==void 0)return typeof l.length!="number"||Vt(l.length)?c(0):v(l);if(l.type==="Buffer"&&Array.isArray(l.data))return v(l.data)}function Fe(l){if(l>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return l|0}function xe(l){return+l!=l&&(l=0),h.alloc(+l)}h.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==h.prototype},h.compare=function(n,o){if(W(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),W(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(n)||!h.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===o)return 0;let u=n.length,d=o.length;for(let f=0,g=Math.min(u,d);f<g;++f)if(n[f]!==o[f]){u=n[f],d=o[f];break}return u<d?-1:d<u?1:0},h.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(n,o){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return h.alloc(0);let u;if(o===void 0)for(o=0,u=0;u<n.length;++u)o+=n[u].length;const d=h.allocUnsafe(o);let f=0;for(u=0;u<n.length;++u){let g=n[u];if(W(g,Uint8Array))f+g.length>d.length?(h.isBuffer(g)||(g=h.from(g)),g.copy(d,f)):Uint8Array.prototype.set.call(d,g,f);else if(h.isBuffer(g))g.copy(d,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=g.length}return d};function Ee(l,n){if(h.isBuffer(l))return l.length;if(ArrayBuffer.isView(l)||W(l,ArrayBuffer))return l.byteLength;if(typeof l!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof l);const o=l.length,u=arguments.length>2&&arguments[2]===!0;if(!u&&o===0)return 0;let d=!1;for(;;)switch(n){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Ht(l).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Dr(l).length;default:if(d)return u?-1:Ht(l).length;n=(""+n).toLowerCase(),d=!0}}h.byteLength=Ee;function qt(l,n,o){let u=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,n>>>=0,o<=n))return"";for(l||(l="utf8");;)switch(l){case"hex":return Os(this,n,o);case"utf8":case"utf-8":return kr(this,n,o);case"ascii":return Cs(this,n,o);case"latin1":case"binary":return Ps(this,n,o);case"base64":return Ts(this,n,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Rs(this,n,o);default:if(u)throw new TypeError("Unknown encoding: "+l);l=(l+"").toLowerCase(),u=!0}}h.prototype._isBuffer=!0;function Z(l,n,o){const u=l[n];l[n]=l[o],l[o]=u}h.prototype.swap16=function(){const n=this.length;if(n%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let o=0;o<n;o+=2)Z(this,o,o+1);return this},h.prototype.swap32=function(){const n=this.length;if(n%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let o=0;o<n;o+=4)Z(this,o,o+3),Z(this,o+1,o+2);return this},h.prototype.swap64=function(){const n=this.length;if(n%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let o=0;o<n;o+=8)Z(this,o,o+7),Z(this,o+1,o+6),Z(this,o+2,o+5),Z(this,o+3,o+4);return this},h.prototype.toString=function(){const n=this.length;return n===0?"":arguments.length===0?kr(this,0,n):qt.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(n){if(!h.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n?!0:h.compare(this,n)===0},h.prototype.inspect=function(){let n="";const o=r.INSPECT_MAX_BYTES;return n=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(n+=" ... "),"<Buffer "+n+">"},i&&(h.prototype[i]=h.prototype.inspect),h.prototype.compare=function(n,o,u,d,f){if(W(n,Uint8Array)&&(n=h.from(n,n.offset,n.byteLength)),!h.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(o===void 0&&(o=0),u===void 0&&(u=n?n.length:0),d===void 0&&(d=0),f===void 0&&(f=this.length),o<0||u>n.length||d<0||f>this.length)throw new RangeError("out of range index");if(d>=f&&o>=u)return 0;if(d>=f)return-1;if(o>=u)return 1;if(o>>>=0,u>>>=0,d>>>=0,f>>>=0,this===n)return 0;let g=f-d,E=u-o;const P=Math.min(g,E),k=this.slice(d,f),O=n.slice(o,u);for(let A=0;A<P;++A)if(k[A]!==O[A]){g=k[A],E=O[A];break}return g<E?-1:E<g?1:0};function lt(l,n,o,u,d){if(l.length===0)return-1;if(typeof o=="string"?(u=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Vt(o)&&(o=d?0:l.length-1),o<0&&(o=l.length+o),o>=l.length){if(d)return-1;o=l.length-1}else if(o<0)if(d)o=0;else return-1;if(typeof n=="string"&&(n=h.from(n,u)),h.isBuffer(n))return n.length===0?-1:Ne(l,n,o,u,d);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(l,n,o):Uint8Array.prototype.lastIndexOf.call(l,n,o):Ne(l,[n],o,u,d);throw new TypeError("val must be string, number or Buffer")}function Ne(l,n,o,u,d){let f=1,g=l.length,E=n.length;if(u!==void 0&&(u=String(u).toLowerCase(),u==="ucs2"||u==="ucs-2"||u==="utf16le"||u==="utf-16le")){if(l.length<2||n.length<2)return-1;f=2,g/=2,E/=2,o/=2}function P(O,A){return f===1?O[A]:O.readUInt16BE(A*f)}let k;if(d){let O=-1;for(k=o;k<g;k++)if(P(l,k)===P(n,O===-1?0:k-O)){if(O===-1&&(O=k),k-O+1===E)return O*f}else O!==-1&&(k-=k-O),O=-1}else for(o+E>g&&(o=g-E),k=o;k>=0;k--){let O=!0;for(let A=0;A<E;A++)if(P(l,k+A)!==P(n,A)){O=!1;break}if(O)return k}return-1}h.prototype.includes=function(n,o,u){return this.indexOf(n,o,u)!==-1},h.prototype.indexOf=function(n,o,u){return lt(this,n,o,u,!0)},h.prototype.lastIndexOf=function(n,o,u){return lt(this,n,o,u,!1)};function ht(l,n,o,u){o=Number(o)||0;const d=l.length-o;u?(u=Number(u),u>d&&(u=d)):u=d;const f=n.length;u>f/2&&(u=f/2);let g;for(g=0;g<u;++g){const E=parseInt(n.substr(g*2,2),16);if(Vt(E))return g;l[o+g]=E}return g}function Es(l,n,o,u){return ut(Ht(n,l.length-o),l,o,u)}function $s(l,n,o,u){return ut(Ls(n),l,o,u)}function As(l,n,o,u){return ut(Dr(n),l,o,u)}function Ss(l,n,o,u){return ut(Ds(n,l.length-o),l,o,u)}h.prototype.write=function(n,o,u,d){if(o===void 0)d="utf8",u=this.length,o=0;else if(u===void 0&&typeof o=="string")d=o,u=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(u)?(u=u>>>0,d===void 0&&(d="utf8")):(d=u,u=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-o;if((u===void 0||u>f)&&(u=f),n.length>0&&(u<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");d||(d="utf8");let g=!1;for(;;)switch(d){case"hex":return ht(this,n,o,u);case"utf8":case"utf-8":return Es(this,n,o,u);case"ascii":case"latin1":case"binary":return $s(this,n,o,u);case"base64":return As(this,n,o,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ss(this,n,o,u);default:if(g)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),g=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ts(l,n,o){return n===0&&o===l.length?e.fromByteArray(l):e.fromByteArray(l.slice(n,o))}function kr(l,n,o){o=Math.min(l.length,o);const u=[];let d=n;for(;d<o;){const f=l[d];let g=null,E=f>239?4:f>223?3:f>191?2:1;if(d+E<=o){let P,k,O,A;switch(E){case 1:f<128&&(g=f);break;case 2:P=l[d+1],(P&192)===128&&(A=(f&31)<<6|P&63,A>127&&(g=A));break;case 3:P=l[d+1],k=l[d+2],(P&192)===128&&(k&192)===128&&(A=(f&15)<<12|(P&63)<<6|k&63,A>2047&&(A<55296||A>57343)&&(g=A));break;case 4:P=l[d+1],k=l[d+2],O=l[d+3],(P&192)===128&&(k&192)===128&&(O&192)===128&&(A=(f&15)<<18|(P&63)<<12|(k&63)<<6|O&63,A>65535&&A<1114112&&(g=A))}}g===null?(g=65533,E=1):g>65535&&(g-=65536,u.push(g>>>10&1023|55296),g=56320|g&1023),u.push(g),d+=E}return ks(u)}const Cr=4096;function ks(l){const n=l.length;if(n<=Cr)return String.fromCharCode.apply(String,l);let o="",u=0;for(;u<n;)o+=String.fromCharCode.apply(String,l.slice(u,u+=Cr));return o}function Cs(l,n,o){let u="";o=Math.min(l.length,o);for(let d=n;d<o;++d)u+=String.fromCharCode(l[d]&127);return u}function Ps(l,n,o){let u="";o=Math.min(l.length,o);for(let d=n;d<o;++d)u+=String.fromCharCode(l[d]);return u}function Os(l,n,o){const u=l.length;(!n||n<0)&&(n=0),(!o||o<0||o>u)&&(o=u);let d="";for(let f=n;f<o;++f)d+=Fs[l[f]];return d}function Rs(l,n,o){const u=l.slice(n,o);let d="";for(let f=0;f<u.length-1;f+=2)d+=String.fromCharCode(u[f]+u[f+1]*256);return d}h.prototype.slice=function(n,o){const u=this.length;n=~~n,o=o===void 0?u:~~o,n<0?(n+=u,n<0&&(n=0)):n>u&&(n=u),o<0?(o+=u,o<0&&(o=0)):o>u&&(o=u),o<n&&(o=n);const d=this.subarray(n,o);return Object.setPrototypeOf(d,h.prototype),d};function U(l,n,o){if(l%1!==0||l<0)throw new RangeError("offset is not uint");if(l+n>o)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(n,o,u){n=n>>>0,o=o>>>0,u||U(n,o,this.length);let d=this[n],f=1,g=0;for(;++g<o&&(f*=256);)d+=this[n+g]*f;return d},h.prototype.readUintBE=h.prototype.readUIntBE=function(n,o,u){n=n>>>0,o=o>>>0,u||U(n,o,this.length);let d=this[n+--o],f=1;for(;o>0&&(f*=256);)d+=this[n+--o]*f;return d},h.prototype.readUint8=h.prototype.readUInt8=function(n,o){return n=n>>>0,o||U(n,1,this.length),this[n]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(n,o){return n=n>>>0,o||U(n,2,this.length),this[n]|this[n+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(n,o){return n=n>>>0,o||U(n,2,this.length),this[n]<<8|this[n+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(n,o){return n=n>>>0,o||U(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+this[n+3]*16777216},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(n,o){return n=n>>>0,o||U(n,4,this.length),this[n]*16777216+(this[n+1]<<16|this[n+2]<<8|this[n+3])},h.prototype.readBigUInt64LE=ie(function(n){n=n>>>0,Ae(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&Me(n,this.length-8);const d=o+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24,f=this[++n]+this[++n]*2**8+this[++n]*2**16+u*2**24;return BigInt(d)+(BigInt(f)<<BigInt(32))}),h.prototype.readBigUInt64BE=ie(function(n){n=n>>>0,Ae(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&Me(n,this.length-8);const d=o*2**24+this[++n]*2**16+this[++n]*2**8+this[++n],f=this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+u;return(BigInt(d)<<BigInt(32))+BigInt(f)}),h.prototype.readIntLE=function(n,o,u){n=n>>>0,o=o>>>0,u||U(n,o,this.length);let d=this[n],f=1,g=0;for(;++g<o&&(f*=256);)d+=this[n+g]*f;return f*=128,d>=f&&(d-=Math.pow(2,8*o)),d},h.prototype.readIntBE=function(n,o,u){n=n>>>0,o=o>>>0,u||U(n,o,this.length);let d=o,f=1,g=this[n+--d];for(;d>0&&(f*=256);)g+=this[n+--d]*f;return f*=128,g>=f&&(g-=Math.pow(2,8*o)),g},h.prototype.readInt8=function(n,o){return n=n>>>0,o||U(n,1,this.length),this[n]&128?(255-this[n]+1)*-1:this[n]},h.prototype.readInt16LE=function(n,o){n=n>>>0,o||U(n,2,this.length);const u=this[n]|this[n+1]<<8;return u&32768?u|4294901760:u},h.prototype.readInt16BE=function(n,o){n=n>>>0,o||U(n,2,this.length);const u=this[n+1]|this[n]<<8;return u&32768?u|4294901760:u},h.prototype.readInt32LE=function(n,o){return n=n>>>0,o||U(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24},h.prototype.readInt32BE=function(n,o){return n=n>>>0,o||U(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]},h.prototype.readBigInt64LE=ie(function(n){n=n>>>0,Ae(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&Me(n,this.length-8);const d=this[n+4]+this[n+5]*2**8+this[n+6]*2**16+(u<<24);return(BigInt(d)<<BigInt(32))+BigInt(o+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24)}),h.prototype.readBigInt64BE=ie(function(n){n=n>>>0,Ae(n,"offset");const o=this[n],u=this[n+7];(o===void 0||u===void 0)&&Me(n,this.length-8);const d=(o<<24)+this[++n]*2**16+this[++n]*2**8+this[++n];return(BigInt(d)<<BigInt(32))+BigInt(this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+u)}),h.prototype.readFloatLE=function(n,o){return n=n>>>0,o||U(n,4,this.length),t.read(this,n,!0,23,4)},h.prototype.readFloatBE=function(n,o){return n=n>>>0,o||U(n,4,this.length),t.read(this,n,!1,23,4)},h.prototype.readDoubleLE=function(n,o){return n=n>>>0,o||U(n,8,this.length),t.read(this,n,!0,52,8)},h.prototype.readDoubleBE=function(n,o){return n=n>>>0,o||U(n,8,this.length),t.read(this,n,!1,52,8)};function L(l,n,o,u,d,f){if(!h.isBuffer(l))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>d||n<f)throw new RangeError('"value" argument is out of bounds');if(o+u>l.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(n,o,u,d){if(n=+n,o=o>>>0,u=u>>>0,!d){const E=Math.pow(2,8*u)-1;L(this,n,o,u,E,0)}let f=1,g=0;for(this[o]=n&255;++g<u&&(f*=256);)this[o+g]=n/f&255;return o+u},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(n,o,u,d){if(n=+n,o=o>>>0,u=u>>>0,!d){const E=Math.pow(2,8*u)-1;L(this,n,o,u,E,0)}let f=u-1,g=1;for(this[o+f]=n&255;--f>=0&&(g*=256);)this[o+f]=n/g&255;return o+u},h.prototype.writeUint8=h.prototype.writeUInt8=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,1,255,0),this[o]=n&255,o+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,2,65535,0),this[o]=n&255,this[o+1]=n>>>8,o+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,2,65535,0),this[o]=n>>>8,this[o+1]=n&255,o+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,4,4294967295,0),this[o+3]=n>>>24,this[o+2]=n>>>16,this[o+1]=n>>>8,this[o]=n&255,o+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,4,4294967295,0),this[o]=n>>>24,this[o+1]=n>>>16,this[o+2]=n>>>8,this[o+3]=n&255,o+4};function Pr(l,n,o,u,d){Lr(n,u,d,l,o,7);let f=Number(n&BigInt(4294967295));l[o++]=f,f=f>>8,l[o++]=f,f=f>>8,l[o++]=f,f=f>>8,l[o++]=f;let g=Number(n>>BigInt(32)&BigInt(4294967295));return l[o++]=g,g=g>>8,l[o++]=g,g=g>>8,l[o++]=g,g=g>>8,l[o++]=g,o}function Or(l,n,o,u,d){Lr(n,u,d,l,o,7);let f=Number(n&BigInt(4294967295));l[o+7]=f,f=f>>8,l[o+6]=f,f=f>>8,l[o+5]=f,f=f>>8,l[o+4]=f;let g=Number(n>>BigInt(32)&BigInt(4294967295));return l[o+3]=g,g=g>>8,l[o+2]=g,g=g>>8,l[o+1]=g,g=g>>8,l[o]=g,o+8}h.prototype.writeBigUInt64LE=ie(function(n,o=0){return Pr(this,n,o,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=ie(function(n,o=0){return Or(this,n,o,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(n,o,u,d){if(n=+n,o=o>>>0,!d){const P=Math.pow(2,8*u-1);L(this,n,o,u,P-1,-P)}let f=0,g=1,E=0;for(this[o]=n&255;++f<u&&(g*=256);)n<0&&E===0&&this[o+f-1]!==0&&(E=1),this[o+f]=(n/g>>0)-E&255;return o+u},h.prototype.writeIntBE=function(n,o,u,d){if(n=+n,o=o>>>0,!d){const P=Math.pow(2,8*u-1);L(this,n,o,u,P-1,-P)}let f=u-1,g=1,E=0;for(this[o+f]=n&255;--f>=0&&(g*=256);)n<0&&E===0&&this[o+f+1]!==0&&(E=1),this[o+f]=(n/g>>0)-E&255;return o+u},h.prototype.writeInt8=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,1,127,-128),n<0&&(n=255+n+1),this[o]=n&255,o+1},h.prototype.writeInt16LE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,2,32767,-32768),this[o]=n&255,this[o+1]=n>>>8,o+2},h.prototype.writeInt16BE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,2,32767,-32768),this[o]=n>>>8,this[o+1]=n&255,o+2},h.prototype.writeInt32LE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,4,2147483647,-2147483648),this[o]=n&255,this[o+1]=n>>>8,this[o+2]=n>>>16,this[o+3]=n>>>24,o+4},h.prototype.writeInt32BE=function(n,o,u){return n=+n,o=o>>>0,u||L(this,n,o,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[o]=n>>>24,this[o+1]=n>>>16,this[o+2]=n>>>8,this[o+3]=n&255,o+4},h.prototype.writeBigInt64LE=ie(function(n,o=0){return Pr(this,n,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=ie(function(n,o=0){return Or(this,n,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Rr(l,n,o,u,d,f){if(o+u>l.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Br(l,n,o,u,d){return n=+n,o=o>>>0,d||Rr(l,n,o,4),t.write(l,n,o,u,23,4),o+4}h.prototype.writeFloatLE=function(n,o,u){return Br(this,n,o,!0,u)},h.prototype.writeFloatBE=function(n,o,u){return Br(this,n,o,!1,u)};function Ur(l,n,o,u,d){return n=+n,o=o>>>0,d||Rr(l,n,o,8),t.write(l,n,o,u,52,8),o+8}h.prototype.writeDoubleLE=function(n,o,u){return Ur(this,n,o,!0,u)},h.prototype.writeDoubleBE=function(n,o,u){return Ur(this,n,o,!1,u)},h.prototype.copy=function(n,o,u,d){if(!h.isBuffer(n))throw new TypeError("argument should be a Buffer");if(u||(u=0),!d&&d!==0&&(d=this.length),o>=n.length&&(o=n.length),o||(o=0),d>0&&d<u&&(d=u),d===u||n.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(u<0||u>=this.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),n.length-o<d-u&&(d=n.length-o+u);const f=d-u;return this===n&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,u,d):Uint8Array.prototype.set.call(n,this.subarray(u,d),o),f},h.prototype.fill=function(n,o,u,d){if(typeof n=="string"){if(typeof o=="string"?(d=o,o=0,u=this.length):typeof u=="string"&&(d=u,u=this.length),d!==void 0&&typeof d!="string")throw new TypeError("encoding must be a string");if(typeof d=="string"&&!h.isEncoding(d))throw new TypeError("Unknown encoding: "+d);if(n.length===1){const g=n.charCodeAt(0);(d==="utf8"&&g<128||d==="latin1")&&(n=g)}}else typeof n=="number"?n=n&255:typeof n=="boolean"&&(n=Number(n));if(o<0||this.length<o||this.length<u)throw new RangeError("Out of range index");if(u<=o)return this;o=o>>>0,u=u===void 0?this.length:u>>>0,n||(n=0);let f;if(typeof n=="number")for(f=o;f<u;++f)this[f]=n;else{const g=h.isBuffer(n)?n:h.from(n,d),E=g.length;if(E===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(f=0;f<u-o;++f)this[f+o]=g[f%E]}return this};const $e={};function zt(l,n,o){$e[l]=class extends o{constructor(){super(),Object.defineProperty(this,"message",{value:n.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${l}]`,this.stack,delete this.name}get code(){return l}set code(d){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:d,writable:!0})}toString(){return`${this.name} [${l}]: ${this.message}`}}}zt("ERR_BUFFER_OUT_OF_BOUNDS",function(l){return l?`${l} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),zt("ERR_INVALID_ARG_TYPE",function(l,n){return`The "${l}" argument must be of type number. Received type ${typeof n}`},TypeError),zt("ERR_OUT_OF_RANGE",function(l,n,o){let u=`The value of "${l}" is out of range.`,d=o;return Number.isInteger(o)&&Math.abs(o)>2**32?d=Ir(String(o)):typeof o=="bigint"&&(d=String(o),(o>BigInt(2)**BigInt(32)||o<-(BigInt(2)**BigInt(32)))&&(d=Ir(d)),d+="n"),u+=` It must be ${n}. Received ${d}`,u},RangeError);function Ir(l){let n="",o=l.length;const u=l[0]==="-"?1:0;for(;o>=u+4;o-=3)n=`_${l.slice(o-3,o)}${n}`;return`${l.slice(0,o)}${n}`}function Bs(l,n,o){Ae(n,"offset"),(l[n]===void 0||l[n+o]===void 0)&&Me(n,l.length-(o+1))}function Lr(l,n,o,u,d,f){if(l>o||l<n){const g=typeof n=="bigint"?"n":"";let E;throw n===0||n===BigInt(0)?E=`>= 0${g} and < 2${g} ** ${(f+1)*8}${g}`:E=`>= -(2${g} ** ${(f+1)*8-1}${g}) and < 2 ** ${(f+1)*8-1}${g}`,new $e.ERR_OUT_OF_RANGE("value",E,l)}Bs(u,d,f)}function Ae(l,n){if(typeof l!="number")throw new $e.ERR_INVALID_ARG_TYPE(n,"number",l)}function Me(l,n,o){throw Math.floor(l)!==l?(Ae(l,o),new $e.ERR_OUT_OF_RANGE("offset","an integer",l)):n<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${n}`,l)}const Us=/[^+/0-9A-Za-z-_]/g;function Is(l){if(l=l.split("=")[0],l=l.trim().replace(Us,""),l.length<2)return"";for(;l.length%4!==0;)l=l+"=";return l}function Ht(l,n){n=n||1/0;let o;const u=l.length;let d=null;const f=[];for(let g=0;g<u;++g){if(o=l.charCodeAt(g),o>55295&&o<57344){if(!d){if(o>56319){(n-=3)>-1&&f.push(239,191,189);continue}else if(g+1===u){(n-=3)>-1&&f.push(239,191,189);continue}d=o;continue}if(o<56320){(n-=3)>-1&&f.push(239,191,189),d=o;continue}o=(d-55296<<10|o-56320)+65536}else d&&(n-=3)>-1&&f.push(239,191,189);if(d=null,o<128){if((n-=1)<0)break;f.push(o)}else if(o<2048){if((n-=2)<0)break;f.push(o>>6|192,o&63|128)}else if(o<65536){if((n-=3)<0)break;f.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((n-=4)<0)break;f.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return f}function Ls(l){const n=[];for(let o=0;o<l.length;++o)n.push(l.charCodeAt(o)&255);return n}function Ds(l,n){let o,u,d;const f=[];for(let g=0;g<l.length&&!((n-=2)<0);++g)o=l.charCodeAt(g),u=o>>8,d=o%256,f.push(d),f.push(u);return f}function Dr(l){return e.toByteArray(Is(l))}function ut(l,n,o,u){let d;for(d=0;d<u&&!(d+o>=n.length||d>=l.length);++d)n[d+o]=l[d];return d}function W(l,n){return l instanceof n||l!=null&&l.constructor!=null&&l.constructor.name!=null&&l.constructor.name===n.name}function Vt(l){return l!==l}const Fs=function(){const l="0123456789abcdef",n=new Array(256);for(let o=0;o<16;++o){const u=o*16;for(let d=0;d<16;++d)n[u+d]=l[o]+l[d]}return n}();function ie(l){return typeof BigInt>"u"?Ns:l}function Ns(){throw new Error("BigInt not supported")}})(_r);const ia=R`
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
`;var sa=Object.defineProperty,na=Object.getOwnPropertyDescriptor,Ft=(r,e,t,i)=>{for(var s=i>1?void 0:i?na(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&sa(e,t,s),s};let Ue=class extends S{constructor(){super(...arguments),this.accessToken="",this.currentTracks=[]}async findSong(r){const e=`https://api.spotify.com/v1/tracks/${r}`;try{await this.authenticate();const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const i=await t.json();return this.currentTracks=[...this.currentTracks,i],i}catch(t){return console.error("Error searching for track:",t),null}}async authenticate(){const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+_r.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(t.ok){const i=await t.json();this.accessToken=i.access_token}else console.error("Spotify authentication failed")}async connectedCallback(){var r;super.connectedCallback(),(r=this.comment)!=null&&r.SongIDs&&await this.fetchAllTracks(this.comment.SongIDs)}async fetchAllTracks(r){try{this.currentTracks=[];const e=r.map(i=>this.findSong(i)),t=await Promise.all(e);this.currentTracks=t.filter(i=>i!==null),this.requestUpdate()}catch(e){console.error("Error fetching tracks:",e)}}render(){if(!this.comment)return x`
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
          ${this.currentTracks.map(i=>x`
              <div class="track-info">
                <img
                  src="${i.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${i.name}</p>
                  <p class="track-artist">
                    ${i.artists.map(s=>s.name).join(", ")}
                  </p>
                </section>
              </div>
            `)}
        </section>
      </section>
    `}};Ue.styles=[ia];Ft([_({type:Object})],Ue.prototype,"comment",2);Ft([_({type:String})],Ue.prototype,"accessToken",2);Ft([T()],Ue.prototype,"currentTracks",2);Ue=Ft([C("comment-card")],Ue);const oa=R`
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
  button.recommend-songs {
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
  button.recommend-songs {
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
    margin-left: 1.51em;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0.3em 2em 1em 2em;
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
`;function aa(r,e){const t=r.selectedTracks.findIndex(i=>i.id===e.id);t>-1?r.selectedTracks=[...r.selectedTracks.slice(0,t),...r.selectedTracks.slice(t+1)]:r.selectedTracks=[...r.selectedTracks,e]}function is(r){r.topTracks=[]}function ss(r){r.selectedTracks=[]}async function ca(r,e){const t=await fetch(`https://api.spotify.com/v1/artists/${e}/top-tracks?market=US`,{method:"GET",headers:{Authorization:`Bearer ${r.accessToken}`,"Content-Type":"application/json"}});if(t.ok){const i=await t.json();i&&i.tracks?r.topTracks=i.tracks:console.log("No tracks found or data is malformed")}else throw new Error(`Error: ${t.statusText}`)}async function ns(r){const i=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+_r.Buffer.from("7fd3e17624134115b09da726f05a671c:09d164c52b1e43d9bcef963d9f2a8aac").toString("base64")},body:"grant_type=client_credentials"});if(i.ok){const s=await i.json();r.accessToken=s.access_token}else console.error("Spotify authentication failed")}async function os(r){if(!r.requestedSearchQuery.trim())return;const e=`https://api.spotify.com/v1/search?q=${encodeURIComponent(r.requestedSearchQuery)}&type=track&limit=10`;try{await ns(r);const t=await fetch(e,{method:"GET",headers:{Authorization:`Bearer ${r.accessToken}`,"Content-Type":"application/json"}});if(!t.ok)throw new Error(`Error: ${t.statusText}`);const i=await t.json();i.tracks.items.length>0?r.topTracks=i.tracks.items:(r.topTracks=[],alert("No tracks found. Please try another search."))}catch(t){console.error("Error searching for tracks:",t)}}async function la(r,e){r.preventDefault();const t=r.target,i=new FormData(t);e.requestedSearchQuery=i.get("inputted-artist-name"),await os(e)}async function ha(r,e){var m;r.preventDefault(),e.submissionSuccess=null;const t=r.target,i=new FormData(t),s="http://localhost:3000";let a=i.get("input-comment");const c=e.selectedTracks.map(y=>y.id),h=`${s}/posts/${(m=e.post)==null?void 0:m._id}`,p={userName:"aidan",commentTime:new Date,commentMessage:a,SongIDs:c};try{if((await fetch(h,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).ok)console.log("Comment successfully added"),is(e),ss(e),e.submissionSuccess=!0,t.reset(),e._handleCommentAdded();else throw new Error("Failed to post comment")}catch(y){console.error("Error:",y),e.submissionSuccess=!1}}var ua=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,le=(r,e,t,i)=>{for(var s=i>1?void 0:i?pa(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&ua(e,t,s),s};let X=class extends S{constructor(){super(...arguments),this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.topTracks=[],this.selectedTracks=[],this.expandedClass="feed-single-post"}async _authenticate(){await ns(this)}_selectTrack(r){aa(this,r)}async _recommendTracks(r){await ha(r,this)}_handleSubmit(r){la(r,this)}_clearTopTracks(){is(this)}_clearSelectedTracks(){ss(this)}async fetchTopTracks(r){await ca(this,r)}async searchSpotify(){await os(this)}render(){return x`
      <section class="expanded-window">
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
        <section class="search-and-selected">
          <section class="query-results">
            <h3 class="search-results">Search Results</h3>
            ${this.topTracks.length>0?x`<div class="track-box-search-results">
                    ${this.topTracks.slice(0,5).map(r=>x`<track-card .track=${r}></track-card>`)}
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
              ${this.selectedTracks.map(r=>x`<track-card .track=${r}></track-card>`)}
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
            <form class="comment-message-form" @submit=${this._recommendTracks}>
              <input
                type="text"
                id="input-comment"
                name="input-comment"
                placeholder="Leave a message..."
              />
              <button class="recommend-songs" type="submit">Submit</button>
            </form>
          </section>
        </section>
      </section>
    `}};X.styles=[oa];le([T()],X.prototype,"submissionSuccess",2);le([_()],X.prototype,"expandedText",2);le([_({type:String})],X.prototype,"requestedSearchQuery",2);le([_({type:String})],X.prototype,"accessToken",2);le([_()],X.prototype,"topTracks",2);le([_()],X.prototype,"selectedTracks",2);le([T()],X.prototype,"expandedClass",2);X=le([C("song-picker")],X);var da=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,re=(r,e,t,i)=>{for(var s=i>1?void 0:i?fa(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&da(e,t,s),s};let V=class extends S{constructor(){super(),this.getPostComments=[],this.expanded=!1,this.submissionSuccess=null,this.expandedText="unexpanded",this.requestedSearchQuery="",this.accessToken="",this.expandedClass="feed-single-post"}_calculateTimeFromDate(){var s;const r=(s=this.post)!=null&&s.postTime?new Date(this.post.postTime):void 0;if(!r)return console.error("Posted time is undefined"),"Post time cannot be found.";let i=(new Date().getTime()-r.getTime())/(1e3*60*60);return i=Math.round(i),i<1?"Less than an hour ago.":i>23?`${i%24} days ago`:`${i} hours ago`}_expand(){this.expanded=!this.expanded,this.expandedClass==="feed-single-post"?this.expandedClass="feed-single-post-expanded":this.expandedClass="feed-single-post"}connectedCallback(){var r;super.connectedCallback(),(!this.getPostComments||this.getPostComments.length===0)&&(this.getPostComments=((r=this.post)==null?void 0:r.comments)||[])}async _handleCommentAdded(){var e;console.log("Comment Created, Now Refreshing Component");const r="http://localhost:3000";if(console.log("SERVER URL FROM COMMENT ADDED: ",r),!((e=this.post)!=null&&e._id)){console.error("Post ID is undefined.");return}try{const t=await fetch(`${r}/comments/${this.post._id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch comments");const i=await t.json();this.getPostComments=[...i]}catch(t){console.error("Error fetching comments:",t)}}render(){var e,t;const r=this._calculateTimeFromDate();return x`
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

        ${this.expanded?x` <song-picker></song-picker>`:""}
      </section>
    `}};V.styles=Vo;re([_({type:Object})],V.prototype,"post",2);re([T()],V.prototype,"getPostComments",2);re([T()],V.prototype,"expanded",2);re([T()],V.prototype,"submissionSuccess",2);re([_()],V.prototype,"expandedText",2);re([_({type:String})],V.prototype,"requestedSearchQuery",2);re([_({type:String})],V.prototype,"accessToken",2);re([T()],V.prototype,"expandedClass",2);V=re([C("feed-post")],V);var ma=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,as=(r,e,t,i)=>{for(var s=i>1?void 0:i?ga(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&ma(e,t,s),s};let Rt=class extends S{constructor(){super(...arguments),this.posts=[]}render(){return x`
      <div class="posts-container">
        ${this.posts.map(r=>x` <feed-post .post=${r}></feed-post>`)}
      </div>
    `}};Rt.styles=[Ho];as([_({type:Array})],Rt.prototype,"posts",2);Rt=as([C("feed-post-list")],Rt);const ya=R`
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
`;var ba=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,Nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?wa(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&ba(e,t,s),s};let Ie=class extends S{constructor(){super(...arguments),this.expanded=!1,this.submissionSuccess=!1,this.errorMessage=!1}_togglePost(){this.expanded=!this.expanded,this.submissionSuccess=!1,this.errorMessage=!1}async _submitPost(r){r.preventDefault(),this.submissionSuccess=!1;const e=r.target;let i=new FormData(e).get("input-message");i?(console.log("submitting post!"),this._sendPostRequest(i,e)):(console.log("error with message!"),this.errorMessage=!0)}async _sendPostRequest(r,e){const t={userid:"65caf83fcdc541534288d60b",userName:"aidan",postTime:new Date,postMessage:r,comments:[]},i="http://localhost:3000";console.log("new post: ",t);try{const s=`${i}/posts`;if((await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)console.log("Post added successfully!"),this.submissionSuccess=!0,this.expanded=!this.expanded,e.reset(),this._sendUpdateToRefreshMainFeed();else throw new Error("Failed to create post.")}catch(s){console.error("Error: ",s),this.submissionSuccess=!1}}_sendUpdateToRefreshMainFeed(){const r=new CustomEvent("post-created",{bubbles:!0,composed:!0});console.log("dispatching event: ",r),this.dispatchEvent(r)}render(){return x`
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
    `}};Ie.styles=[ya];Nt([T()],Ie.prototype,"expanded",2);Nt([T()],Ie.prototype,"submissionSuccess",2);Nt([T()],Ie.prototype,"errorMessage",2);Ie=Nt([C("create-post")],Ie);var _a=Object.defineProperty,va=Object.getOwnPropertyDescriptor,cs=(r,e,t,i)=>{for(var s=i>1?void 0:i?va(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&_a(e,t,s),s};let Bt=class extends S{constructor(){super(...arguments),this.posts=[]}async connectedCallback(){super.connectedCallback(),this.addEventListener("post-created",()=>this._handlePostCreated()),await this._fetchData()}async _handlePostCreated(){console.log("Post Created, Now Refreshing Component"),await this._fetchData()}async _fetchData(){console.log("fetching posts!");const r="http://localhost:3000";try{const e=await fetch(`${r}/posts`);if(e.ok){const t=await e.json();this.posts=t,this.posts=this.posts.reverse(),console.log("POSTS RECEIVED: ",this.posts)}else console.error("Failed to fetch posts:",e.status)}catch(e){console.error("Error fetching posts:",e)}}render(){return x`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <create-post></create-post>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `}};Bt.styles=[zo];cs([T()],Bt.prototype,"posts",2);Bt=cs([C("main-feed")],Bt);var xa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,at=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ea(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&xa(e,t,s),s};let be=class extends it{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}render(){return x`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `}};be.styles=R`
    .feed-page {
      display: flex;
      justify-content: center;
    }
  `;at([_({attribute:!1})],be.prototype,"location",2);at([_({reflect:!0})],be.prototype,"userid",1);at([_({reflect:!0})],be.prototype,"edit",1);at([_()],be.prototype,"profile",1);be=at([C("home-page")],be);const $a=R`
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
`;var Aa=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,ct=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sa(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&Aa(e,t,s),s};let we=class extends it{get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get edit(){var r;return(r=this.location)==null?void 0:r.params.edit}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}connectedCallback(){super.connectedCallback(),this.addEventListener("profile-update",r=>this._handleProfileUpdate(r))}_handleProfileUpdate(r){console.log("Profile updated",r.detail.profile);const e=this.userid;e?this.dispatchMessage({type:"ProfileSaved",userid:e,profile:r.detail.profile}):console.error("UserID is undefined.")}render(){return x`
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
    `}};we.styles=$a;ct([_({attribute:!1})],we.prototype,"location",2);ct([_({reflect:!0})],we.prototype,"userid",1);ct([_({reflect:!0})],we.prototype,"edit",1);ct([_()],we.prototype,"profile",1);we=ct([C("create-profile-page")],we);const Q=Object.create(null);Q.open="0";Q.close="1";Q.ping="2";Q.pong="3";Q.message="4";Q.upgrade="5";Q.noop="6";const vt=Object.create(null);Object.keys(Q).forEach(r=>{vt[Q[r]]=r});const sr={type:"error",data:"parser error"},ls=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",hs=typeof ArrayBuffer=="function",us=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,xr=({type:r,data:e},t,i)=>ls&&e instanceof Blob?t?i(e):di(e,i):hs&&(e instanceof ArrayBuffer||us(e))?t?i(e):di(new Blob([e]),i):i(Q[r]+(e||"")),di=(r,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(r)};function fi(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Qt;function Ta(r,e){if(ls&&r.data instanceof Blob)return r.data.arrayBuffer().then(fi).then(e);if(hs&&(r.data instanceof ArrayBuffer||us(r.data)))return e(fi(r.data));xr(r,!1,t=>{Qt||(Qt=new TextEncoder),e(Qt.encode(t))})}const mi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ze=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<mi.length;r++)ze[mi.charCodeAt(r)]=r;const ka=r=>{let e=r.length*.75,t=r.length,i,s=0,a,c,h,p;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const m=new ArrayBuffer(e),y=new Uint8Array(m);for(i=0;i<t;i+=4)a=ze[r.charCodeAt(i)],c=ze[r.charCodeAt(i+1)],h=ze[r.charCodeAt(i+2)],p=ze[r.charCodeAt(i+3)],y[s++]=a<<2|c>>4,y[s++]=(c&15)<<4|h>>2,y[s++]=(h&3)<<6|p&63;return m},Ca=typeof ArrayBuffer=="function",Er=(r,e)=>{if(typeof r!="string")return{type:"message",data:ps(r,e)};const t=r.charAt(0);return t==="b"?{type:"message",data:Pa(r.substring(1),e)}:vt[t]?r.length>1?{type:vt[t],data:r.substring(1)}:{type:vt[t]}:sr},Pa=(r,e)=>{if(Ca){const t=ka(r);return ps(t,e)}else return{base64:!0,data:r}},ps=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},ds="",Oa=(r,e)=>{const t=r.length,i=new Array(t);let s=0;r.forEach((a,c)=>{xr(a,!1,h=>{i[c]=h,++s===t&&e(i.join(ds))})})},Ra=(r,e)=>{const t=r.split(ds),i=[];for(let s=0;s<t.length;s++){const a=Er(t[s],e);if(i.push(a),a.type==="error")break}return i};function Ba(){return new TransformStream({transform(r,e){Ta(r,t=>{const i=t.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const a=new DataView(s.buffer);a.setUint8(0,126),a.setUint16(1,i)}else{s=new Uint8Array(9);const a=new DataView(s.buffer);a.setUint8(0,127),a.setBigUint64(1,BigInt(i))}r.data&&typeof r.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let Zt;function dt(r){return r.reduce((e,t)=>e+t.length,0)}function ft(r,e){if(r[0].length===e)return r.shift();const t=new Uint8Array(e);let i=0;for(let s=0;s<e;s++)t[s]=r[0][i++],i===r[0].length&&(r.shift(),i=0);return r.length&&i<r[0].length&&(r[0]=r[0].slice(i)),t}function Ua(r,e){Zt||(Zt=new TextDecoder);const t=[];let i=0,s=-1,a=!1;return new TransformStream({transform(c,h){for(t.push(c);;){if(i===0){if(dt(t)<1)break;const p=ft(t,1);a=(p[0]&128)===128,s=p[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(dt(t)<2)break;const p=ft(t,2);s=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),i=3}else if(i===2){if(dt(t)<8)break;const p=ft(t,8),m=new DataView(p.buffer,p.byteOffset,p.length),y=m.getUint32(0);if(y>Math.pow(2,21)-1){h.enqueue(sr);break}s=y*Math.pow(2,32)+m.getUint32(4),i=3}else{if(dt(t)<s)break;const p=ft(t,s);h.enqueue(Er(a?p:Zt.decode(p),e)),i=0}if(s===0||s>r){h.enqueue(sr);break}}}})}const fs=4;function B(r){if(r)return Ia(r)}function Ia(r){for(var e in B.prototype)r[e]=B.prototype[e];return r}B.prototype.on=B.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};B.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};B.prototype.off=B.prototype.removeListener=B.prototype.removeAllListeners=B.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var i,s=0;s<t.length;s++)if(i=t[s],i===e||i.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+r],this};B.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+r],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,s=t.length;i<s;++i)t[i].apply(this,e)}return this};B.prototype.emitReserved=B.prototype.emit;B.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};B.prototype.hasListeners=function(r){return!!this.listeners(r).length};const N=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function ms(r,...e){return e.reduce((t,i)=>(r.hasOwnProperty(i)&&(t[i]=r[i]),t),{})}const La=N.setTimeout,Da=N.clearTimeout;function Mt(r,e){e.useNativeTimers?(r.setTimeoutFn=La.bind(N),r.clearTimeoutFn=Da.bind(N)):(r.setTimeoutFn=N.setTimeout.bind(N),r.clearTimeoutFn=N.clearTimeout.bind(N))}const Fa=1.33;function Na(r){return typeof r=="string"?Ma(r):Math.ceil((r.byteLength||r.size)*Fa)}function Ma(r){let e=0,t=0;for(let i=0,s=r.length;i<s;i++)e=r.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function ja(r){let e="";for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return e}function qa(r){let e={},t=r.split("&");for(let i=0,s=t.length;i<s;i++){let a=t[i].split("=");e[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}return e}class za extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class $r extends B{constructor(e){super(),this.writable=!1,Mt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,i){return super.emitReserved("error",new za(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Er(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=ja(e);return t.length?"?"+t:""}}const gs="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),nr=64,Ha={};let gi=0,mt=0,yi;function bi(r){let e="";do e=gs[r%nr]+e,r=Math.floor(r/nr);while(r>0);return e}function ys(){const r=bi(+new Date);return r!==yi?(gi=0,yi=r):r+"."+bi(gi++)}for(;mt<nr;mt++)Ha[gs[mt]]=mt;let bs=!1;try{bs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Va=bs;function ws(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Va))return new XMLHttpRequest}catch{}if(!e)try{return new N[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Wa(){}const Ka=function(){return new ws({xdomain:!1}).responseType!=null}();class Ya extends $r{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let s=location.port;s||(s=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=Ka&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};Ra(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Oa(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=ys()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new J(this.uri(),e)}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(s,a)=>{this.onError("xhr post error",s,a)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class J extends B{constructor(e,t){super(),Mt(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=ms(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const i=this.xhr=new ws(t);try{i.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(i.timeout=this.opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(i)),i.readyState===4&&(i.status===200||i.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof i.status=="number"?i.status:0)},0))},i.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=J.requestsCount++,J.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Wa,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete J.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}J.requestsCount=0;J.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",wi);else if(typeof addEventListener=="function"){const r="onpagehide"in N?"pagehide":"unload";addEventListener(r,wi,!1)}}function wi(){for(let r in J.requests)J.requests.hasOwnProperty(r)&&J.requests[r].abort()}const Ar=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),gt=N.WebSocket||N.MozWebSocket,_i=!0,Ja="arraybuffer",vi=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ga extends $r{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,i=vi?{}:ms(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=_i&&!vi?t?new gt(e,t):new gt(e):new gt(e,t,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],s=t===e.length-1;xr(i,this.supportsBinary,a=>{const c={};try{_i&&this.ws.send(a)}catch{}s&&Ar(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=ys()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!gt}}class Xa extends $r{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=Ua(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(t).getReader(),s=Ba();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const a=()=>{i.read().then(({done:h,value:p})=>{h||(this.onPacket(p),a())}).catch(h=>{})};a();const c={type:"open"};this.query.sid&&(c.data=`{"sid":"${this.query.sid}"}`),this.writer.write(c).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],s=t===e.length-1;this.writer.write(i).then(()=>{s&&Ar(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Qa={websocket:Ga,webtransport:Xa,polling:Ya},Za=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ec=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function or(r){if(r.length>2e3)throw"URI too long";const e=r,t=r.indexOf("["),i=r.indexOf("]");t!=-1&&i!=-1&&(r=r.substring(0,t)+r.substring(t,i).replace(/:/g,";")+r.substring(i,r.length));let s=Za.exec(r||""),a={},c=14;for(;c--;)a[ec[c]]=s[c]||"";return t!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a.pathNames=tc(a,a.path),a.queryKey=rc(a,a.query),a}function tc(r,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function rc(r,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,a){s&&(t[s]=a)}),t}let _s=class ke extends B{constructor(e,t={}){super(),this.binaryType=Ja,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=or(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=or(t.host).host),Mt(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=qa(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=fs,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Qa[e](i)}open(){let e;if(this.opts.rememberUpgrade&&ke.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),i=!1;ke.priorWebsocketSuccess=!1;const s=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",b=>{if(!i)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;ke.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(y(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const w=new Error("probe error");w.transport=t.name,this.emitReserved("upgradeError",w)}}))};function a(){i||(i=!0,y(),t.close(),t=null)}const c=b=>{const w=new Error("probe error: "+b);w.transport=t.name,a(),this.emitReserved("upgradeError",w)};function h(){c("transport closed")}function p(){c("socket closed")}function m(b){t&&b.name!==t.name&&a()}const y=()=>{t.removeListener("open",s),t.removeListener("error",c),t.removeListener("close",h),this.off("close",p),this.off("upgrading",m)};t.once("open",s),t.once("error",c),t.once("close",h),this.once("close",p),this.once("upgrading",m),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onOpen(){if(this.readyState="open",ke.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(t+=Na(s)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(e,t,i){return this.sendPacket("message",e,t,i),this}send(e,t,i){return this.sendPacket("message",e,t,i),this}sendPacket(e,t,i,s){if(typeof t=="function"&&(s=t,t=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const a={type:e,data:t,options:i};this.emitReserved("packetCreate",a),this.writeBuffer.push(a),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){ke.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let i=0;const s=e.length;for(;i<s;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};_s.protocol=fs;function ic(r,e="",t){let i=r;t=t||typeof location<"u"&&location,r==null&&(r=t.protocol+"//"+t.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<"u"?r=t.protocol+"//"+r:r="https://"+r),i=or(r)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const a=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+a+":"+i.port+e,i.href=i.protocol+"://"+a+(t&&t.port===i.port?"":":"+i.port),i}const sc=typeof ArrayBuffer=="function",nc=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,vs=Object.prototype.toString,oc=typeof Blob=="function"||typeof Blob<"u"&&vs.call(Blob)==="[object BlobConstructor]",ac=typeof File=="function"||typeof File<"u"&&vs.call(File)==="[object FileConstructor]";function Sr(r){return sc&&(r instanceof ArrayBuffer||nc(r))||oc&&r instanceof Blob||ac&&r instanceof File}function xt(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let t=0,i=r.length;t<i;t++)if(xt(r[t]))return!0;return!1}if(Sr(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return xt(r.toJSON(),!0);for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&xt(r[t]))return!0;return!1}function cc(r){const e=[],t=r.data,i=r;return i.data=ar(t,e),i.attachments=e.length,{packet:i,buffers:e}}function ar(r,e){if(!r)return r;if(Sr(r)){const t={_placeholder:!0,num:e.length};return e.push(r),t}else if(Array.isArray(r)){const t=new Array(r.length);for(let i=0;i<r.length;i++)t[i]=ar(r[i],e);return t}else if(typeof r=="object"&&!(r instanceof Date)){const t={};for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=ar(r[i],e));return t}return r}function lc(r,e){return r.data=cr(r.data,e),delete r.attachments,r}function cr(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=cr(r[t],e);else if(typeof r=="object")for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=cr(r[t],e));return r}const hc=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],uc=5;var $;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})($||($={}));class pc{constructor(e){this.replacer=e}encode(e){return(e.type===$.EVENT||e.type===$.ACK)&&xt(e)?this.encodeAsBinary({type:e.type===$.EVENT?$.BINARY_EVENT:$.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===$.BINARY_EVENT||e.type===$.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=cc(e),i=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(i),s}}function xi(r){return Object.prototype.toString.call(r)==="[object Object]"}class Tr extends B{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===$.BINARY_EVENT;i||t.type===$.BINARY_ACK?(t.type=i?$.EVENT:$.ACK,this.reconstructor=new dc(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Sr(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if($[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===$.BINARY_EVENT||i.type===$.BINARY_ACK){const a=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const c=e.substring(a,t);if(c!=Number(c)||e.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(c)}if(e.charAt(t+1)==="/"){const a=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(a,t)}else i.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const a=t+1;for(;++t;){const c=e.charAt(t);if(c==null||Number(c)!=c){--t;break}if(t===e.length)break}i.id=Number(e.substring(a,t+1))}if(e.charAt(++t)){const a=this.tryParse(e.substr(t));if(Tr.isPayloadValid(i.type,a))i.data=a;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case $.CONNECT:return xi(t);case $.DISCONNECT:return t===void 0;case $.CONNECT_ERROR:return typeof t=="string"||xi(t);case $.EVENT:case $.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&hc.indexOf(t[0])===-1);case $.ACK:case $.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class dc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=lc(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const fc=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Tr,Encoder:pc,get PacketType(){return $},protocol:uc},Symbol.toStringTag,{value:"Module"}));function j(r,e,t){return r.on(e,t),function(){r.off(e,t)}}const mc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class xs extends B{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[j(e,"open",this.onopen.bind(this)),j(e,"packet",this.onpacket.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(mc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const i={type:$.EVENT,data:t};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const c=this.ids++,h=t.pop();this._registerAckCallback(c,h),i.id=c}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,t){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const a=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let h=0;h<this.sendBuffer.length;h++)this.sendBuffer[h].id===e&&this.sendBuffer.splice(h,1);t.call(this,new Error("operation has timed out"))},s),c=(...h)=>{this.io.clearTimeoutFn(a),t.apply(this,h)};c.withError=!0,this.acks[e]=c}emitWithAck(e,...t){return new Promise((i,s)=>{const a=(c,h)=>c?s(c):i(h);a.withError=!0,t.push(a),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...a)=>i!==this._queue[0]?void 0:(s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...a)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:$.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){const i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case $.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case $.EVENT:case $.BINARY_EVENT:this.onevent(e);break;case $.ACK:case $.BINARY_ACK:this.onack(e);break;case $.DISCONNECT:this.ondisconnect();break;case $.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...s){i||(i=!0,t.packet({type:$.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:$.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function De(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}De.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=Math.floor(e*10)&1?r+t:r-t}return Math.min(r,this.max)|0};De.prototype.reset=function(){this.attempts=0};De.prototype.setMin=function(r){this.ms=r};De.prototype.setMax=function(r){this.max=r};De.prototype.setJitter=function(r){this.jitter=r};class lr extends B{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Mt(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new De({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||fc;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new _s(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=j(t,"open",function(){i.onopen(),e&&e()}),a=h=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",h),e?e(h):this.maybeReconnectOnOpen()},c=j(t,"error",a);if(this._timeout!==!1){const h=this._timeout,p=this.setTimeoutFn(()=>{s(),a(new Error("timeout")),t.close()},h);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(s),this.subs.push(c),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(j(e,"ping",this.onping.bind(this)),j(e,"data",this.ondata.bind(this)),j(e,"error",this.onerror.bind(this)),j(e,"close",this.onclose.bind(this)),j(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Ar(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new xs(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const qe={};function Et(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const t=ic(r,e.path||"/socket.io"),i=t.source,s=t.id,a=t.path,c=qe[s]&&a in qe[s].nsps,h=e.forceNew||e["force new connection"]||e.multiplex===!1||c;let p;return h?p=new lr(i,e):(qe[s]||(qe[s]=new lr(i,e)),p=qe[s]),t.query&&!e.query&&(e.query=t.queryKey),p.socket(t.path,e)}Object.assign(Et,{Manager:lr,Socket:xs,io:Et,connect:Et});const gc=R`
  .user-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid black;
    justify-content: center;
    gap: 1em;
  }
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    border: 2px solid black;
    width: 8em;
    height: 11em;
    background: lightblue;
  }
  .user img {
    width: 4em;
    height: 4em;
    border: 1px solid black;
    border-radius: 50%;
    margin-top: 1.5em;
  }

  .username {
    margin-top: 0.75em;
  }
`;var yc=Object.defineProperty,bc=Object.getOwnPropertyDescriptor,ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?bc(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&yc(e,t,s),s};let te=class extends it{constructor(){super(...arguments),this.userDetails=null,this.messages=[],this.users=[]}get userid(){var r;return console.log(),(r=this.location)==null?void 0:r.params.userid}get profile(){return this.getFromModel("profile")}async _getUserFromDatabase(r){console.log("Getting user with this id: ",r);const e="http://localhost:3000";try{const t=await fetch(`${e}/profile/${r}`);if(!t.ok)throw new Error(`Error fetching profile: ${t.statusText}`);const i=await t.json();return console.log("User profile data received: ",i),i}catch(t){throw console.error("Error fetching user profile: ",t),t}}connectedCallback(){super.connectedCallback(),this.socket=Et("ws://localhost:3000"),this.location&&this.location.params&&this.location.params.userid?this._getUserFromDatabase(this.location.params.userid).then(r=>{var e;this.userDetails={name:r.name||"Unknown",profilePic:r.profileImage||"defaultProfileImage"},(e=this.socket)==null||e.emit("userDetails",this.userDetails)}).catch(r=>{console.error("Failed to fetch user profile:",r)}):console.error("User ID is not available in location parameters"),this.socket.on("message",r=>{this.messages=[...this.messages,r]}),this.socket.on("users",r=>{this.users=r}),this.socket.on("connect",()=>{console.log("Connected to WebSocket server")}),this.socket.on("disconnect",()=>{console.log("Disconnected from WebSocket server")})}disconnectedCallback(){super.disconnectedCallback(),this.socket&&this.socket.disconnect()}sendMessage(){var e,t;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("input");if(console.log("within send message"),console.log("user details: ",this.userDetails),r&&r.value.trim()&&this.userDetails){console.log("everything exists within send message");const i={text:r.value.trim(),sender:this.userDetails.name};(t=this.socket)==null||t.emit("message",i),r.value=""}}render(){return x`
      <div>
        <div class="user-list">
          ${this.users.map(r=>x`
              <div class="user">
                <img src="/images/${r.profilePic}.png" alt="${r.name}" />
                <span class="username">${r.name}</span>
              </div>
            `)}
        </div>
        <ul>
          ${this.messages.map(r=>x`<li>${r}</li>`)}
        </ul>
        <input placeholder="message" />
        <button @click="${this.sendMessage}">Send</button>
      </div>
    `}};te.styles=gc;ve([_({attribute:!1})],te.prototype,"location",2);ve([_({reflect:!0})],te.prototype,"userid",1);ve([_()],te.prototype,"profile",1);ve([T()],te.prototype,"userDetails",2);ve([T()],te.prototype,"messages",2);ve([T()],te.prototype,"users",2);te=ve([C("chat-room-page")],te);var wc=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,vc=(r,e,t,i)=>{for(var s=i>1?void 0:i?_c(e,t):e,a=r.length-1,c;a>=0;a--)(c=r[a])&&(s=(i?c(e,t,s):c(s))||s);return i&&s&&wc(e,t,s),s};let xc=[{path:"/app/profile/:userid/:edit(edit)",component:"profile-page"},{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/home",component:"home-page"},{path:"/createProfile/:userid",component:"create-profile-page"},{path:"/chatRoom/:userid",component:"chat-room-page"},{path:"(.*)",component:"not-found-page"}],Ei=class extends Ni{constructor(){super(_n)}render(){return x`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${xc}> </vaadin-router>
      </auth-required>
    `}updated(r){console.log("MTVAPPElement updated:",r.keys()),r.has("model")&&(console.log("New model",this.model),this.requestUpdate())}};Ei=vc([C("mtv-app")],Ei);
