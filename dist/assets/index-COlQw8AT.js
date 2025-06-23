(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,re=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),le=new WeakMap;let ye=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(re&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&le.set(t,e))}return e}toString(){return this.cssText}};const Oe=o=>new ye(typeof o=="string"?o:o+"",void 0,se),f=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new ye(t,o,se)},Pe=(o,e)=>{if(re)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=L.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,o.appendChild(s)}},ce=re?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Oe(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ee,defineProperty:Ce,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:je,getOwnPropertySymbols:Ue,getPrototypeOf:Te}=Object,x=globalThis,de=x.trustedTypes,Me=de?de.emptyScript:"",K=x.reactiveElementPolyfillSupport,U=(o,e)=>o,B={toAttribute(o,e){switch(e){case Boolean:o=o?Me:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ie=(o,e)=>!Ee(o,e),pe={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ce(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=Ne(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const l=r==null?void 0:r.call(this);i.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=Te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,s=[...je(t),...Ue(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(ce(r))}else e!==void 0&&t.push(ce(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var i;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:B).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:B;this._$Em=r,this[r]=l.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??ie)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,n]of r)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[U("elementProperties")]=new Map,E[U("finalized")]=new Map,K==null||K({ReactiveElement:E}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,V=T.trustedTypes,he=V?V.createPolicy("lit-html",{createHTML:o=>o}):void 0,_e="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,xe="?"+_,Re=`<${xe}>`,S=document,M=()=>S.createComment(""),R=o=>o===null||typeof o!="object"&&typeof o!="function",oe=Array.isArray,De=o=>oe(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",F=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,ge=/>/g,A=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,me=/"/g,Ae=/^(?:script|style|textarea|title)$/i,ke=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=ke(1),C=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ve=new WeakMap,w=S.createTreeWalker(S,129);function we(o,e){if(!oe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}const He=(o,e)=>{const t=o.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",n=j;for(let l=0;l<t;l++){const a=o[l];let d,h,c=-1,$=0;for(;$<a.length&&(n.lastIndex=$,h=n.exec(a),h!==null);)$=n.lastIndex,n===j?h[1]==="!--"?n=ue:h[1]!==void 0?n=ge:h[2]!==void 0?(Ae.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=A):h[3]!==void 0&&(n=A):n===A?h[0]===">"?(n=r??j,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?A:h[3]==='"'?me:fe):n===me||n===fe?n=A:n===ue||n===ge?n=j:(n=A,r=void 0);const y=n===A&&o[l+1].startsWith("/>")?" ":"";i+=n===j?a+Re:c>=0?(s.push(d),a.slice(0,c)+_e+a.slice(c)+_+y):a+_+(c===-2?l:y)}return[we(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class D{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,n=0;const l=e.length-1,a=this.parts,[d,h]=He(e,t);if(this.el=D.createElement(d,s),w.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=w.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(_e)){const $=h[n++],y=r.getAttribute(c).split(_),I=/([.?@])?(.*)/.exec($);a.push({type:1,index:i,name:I[2],strings:y,ctor:I[1]==="."?Ie:I[1]==="?"?Le:I[1]==="@"?Be:W}),r.removeAttribute(c)}else c.startsWith(_)&&(a.push({type:6,index:i}),r.removeAttribute(c));if(Ae.test(r.tagName)){const c=r.textContent.split(_),$=c.length-1;if($>0){r.textContent=V?V.emptyScript:"";for(let y=0;y<$;y++)r.append(c[y],M()),w.nextNode(),a.push({type:2,index:++i});r.append(c[$],M())}}}else if(r.nodeType===8)if(r.data===xe)a.push({type:2,index:i});else{let c=-1;for(;(c=r.data.indexOf(_,c+1))!==-1;)a.push({type:7,index:i}),c+=_.length-1}i++}}static createElement(e,t){const s=S.createElement("template");return s.innerHTML=e,s}}function N(o,e,t=o,s){var n,l;if(e===C)return e;let r=s!==void 0?(n=t.o)==null?void 0:n[s]:t.l;const i=R(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,s)),s!==void 0?(t.o??(t.o=[]))[s]=r:t.l=r),r!==void 0&&(e=N(o,r._$AS(o,e.values),r,s)),e}class ze{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??S).importNode(t,!0);w.currentNode=r;let i=w.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new H(i,i.nextSibling,this,e):a.type===1?d=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(d=new Ve(i,this,e)),this._$AV.push(d),a=s[++l]}n!==(a==null?void 0:a.index)&&(i=w.nextNode(),n++)}return w.currentNode=S,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class H{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,t,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this.v=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),R(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):De(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=D.createElement(we(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{const n=new ze(r,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new D(e)),t}k(e){oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new H(this.O(M()),this.O(M()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this.v=e,(t=this._$AP)==null||t.call(this,e))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,r){const i=this.strings;let n=!1;if(i===void 0)e=N(this,e,t,0),n=!R(e)||e!==this._$AH&&e!==C,n&&(this._$AH=e);else{const l=e;let a,d;for(e=i[0],a=0;a<i.length-1;a++)d=N(this,l[s+a],t,a),d===C&&(d=this._$AH[a]),n||(n=!R(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d??"")+i[a+1]),this._$AH[a]=d}n&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ie extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Le extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Be extends W{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??p)===C)return;const s=this._$AH,r=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ve{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const Z=T.litHtmlPolyfillSupport;Z==null||Z(D,H),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.2.0");const qe=(o,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const i=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new H(e.insertBefore(M(),i),i,void 0,t??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends E{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return C}}var be;u._$litElement$=!0,u.finalized=!0,(be=globalThis.litElementHydrateSupport)==null||be.call(globalThis,{LitElement:u});const G=globalThis.litElementPolyfillSupport;G==null||G({LitElement:u});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:ie},Ke=(o=We,e,t)=>{const{kind:s,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(t.name,o),s==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.P(n,void 0,o),l}}}if(s==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+s)};function g(o){return(e,t)=>typeof t=="object"?Ke(o,e,t):((s,r,i)=>{const n=r.hasOwnProperty(i);return r.constructor.createProperty(i,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(r,i):void 0})(o,e,t)}var Fe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,z=(o,e,t,s)=>{for(var r=s>1?void 0:s?Ze(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Fe(e,t,r),r};let O=class extends u{constructor(){super(...arguments),this.color="secondary",this.type="simple",this.text="button",this.size=200}render(){return m`
        <button class=${this.color+"-"+this.type}>
            ${this.text}
        </button>
        `}};O.styles=f`
        button {
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.0);
        }
        
        button:hover {
            background-color: var(--primary);
        }
    
        .primary-simple { background-color: var(--primary); }
        .secondary-simple { background-color: var(--secondary); }
        .green-simple { background-color: var(--green); }
        .info-simple { background-color: var(--info); }
        .light-simple { background-color: var(--light); }
        .dark-simple { background-color: var(--dark); }

        .primary-outline { 
            color: var(--primary);
            /* border: 1px solid var(--primary); */
        }
        .secondary-outline { 
            color: var(--secondary);
            /* border: 1px solid var(--secondary); */
        }
        .info-outline { 
            color: var(--info);
            /* border: 1px solid var(--info); */
        }
        .light-outline { 
            color: var(--light);
            /* border: 1px solid var(--light); */	
        }
        .dark-outline { 
            color: var(--dark);
            /* border: 1px solid var(--dark); */
        }
    `;z([g({type:String})],O.prototype,"color",2);z([g({type:String})],O.prototype,"type",2);z([g({type:String})],O.prototype,"text",2);z([g({type:Number})],O.prototype,"size",2);O=z([v("simple-button")],O);var Ge=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Je=(o,e,t,s)=>{for(var r=s>1?void 0:s?Ye(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Ge(e,t,r),r};let Y=class extends u{openLink(){window.open("https://drive.google.com/drive/folders/18BRzUAUO1v1VmHjOnGNkeM_tkZaKbAnz?usp=sharing","_blank")}render(){return m`
            <div class="container-resources">
                <button class="download-button" @click="${()=>this.openLink()}">
                    <div class="docs">
                        <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="css-i6dzq1"
                        >
                            <path
                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            ></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        VIEW CV FOLDER
                    </div>
                    <div class="download">
                        <a href="CV.png" download="">
                            <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="css-i6dzq1"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </button>
            </div>
        `}};Y.styles=f`
        .container-resources {
            background-color: var(--dark-transparent);
            border-radius: 12px;
            padding: 16px;
            text-align: center;
        }
        
        h1 {
            margin: 0;
        }
        
        a {
            text-decoration: none;
        }
        
        /* DOWNLOAD CV BUTTON */
        .download-button {
            position: relative;
            border-width: 0;
            color: white;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            border-radius: 6px;
            z-index: 1;
            padding: 0;
        }

        .download-button .docs {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            min-height: 40px;
            padding: 0 10px;
            border-radius: 6px;
            z-index: 1;
            background-color: var(--primary);
            border: solid 1px #e8e8e82d;
            transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }
        

        .download {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 90%;
            margin: 0 auto;
            z-index: -1;
            border-radius: 0 0 6px 6px;
            transform: translateY(0%);
            background-color: var(--green);
            border: solid 1px #01e0572d;
            transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .download-button:hover .download {
            transform: translateY(100%);
        }

        .download svg polyline,
        .download svg line {
            animation: docs 1s infinite;
        }

        @keyframes docs {
            0% {
                transform: translateY(0%);
            }

            50% {
                transform: translateY(-15%);
            }

            100% {
                transform: translateY(0%);
            }
        }

    `;Y=Je([v("resources-page")],Y);var Qe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,ne=(o,e,t,s)=>{for(var r=s>1?void 0:s?Xe(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Qe(e,t,r),r};let k=class extends u{constructor(){super(...arguments),this.srcimg="default",this.color="defautl"}render(){return m`
            <div class="contour">
                <div class="card">
                    <div class="card-title">
                        Card Title
                    </div>
                    <div class="card-scontent">
                        <slot></slot>
                    </div>
                </div>
                <div class="footer-image">
                    <img 
                        src="https://picsum.photos/200/300"
                        alt=""
                    >
                </div>
            </div>
        `}};k.styles=f`
        .contour {
            // margin: 12px 0;
            // border-radius: 8px;
        }
        
        .card {
            /* POSITION AND SIZE */
            display: flex;
            padding: 16px;
            border-radius: 8px 8px 0 0;
            /* BACKGROUND and EFECTS */
            background: var(--dark);
            flex-direction: column;
        }
        
        .card-title {
            color: var(--light);
            font-size: 1.5em;
            padding: 10px;
            text-align: center;
        }
        
        .footer-image {
            border-radius: 0 0 8px 8px;
            overflow: hidden;
        }
        .footer-image img {
            object-fit: cover;
            max-height: 124px;
            width: 100%;
            filter: blur(2px);
            border-radius: 0 0 8px 8px;
            transition: filter 0.3s ease, max-height 0.3s ease; /* Transición suave */
        }
        
        hr {
            color: var(--light);
            width: 100%;
        }
        
        /* HOVERS AND ANIMATED */
        .footer-image img:hover {
            filter: none;
            max-height: 200px;
        }
    `;ne([g({type:String})],k.prototype,"srcimg",2);ne([g({type:String})],k.prototype,"color",2);k=ne([v("simple-card")],k);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,rt=(o,e,t,s)=>{for(var r=s>1?void 0:s?tt(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&et(e,t,r),r};let J=class extends u{render(){return m`
            <span>
                Linux
            </span>
        `}};J.styles=f`
        span {
            background: #42b883;
            border-radius: 15px;
            padding: 4px 14px;
        }
    `;J=rt([v("s-label")],J);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,ot=(o,e,t,s)=>{for(var r=s>1?void 0:s?it(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&st(e,t,r),r};let Q=class extends u{render(){return m`
        <div class="container-projects">
            <div class="skills-category">
                <h2>Skills</h2>
                <div class="skills">
                    <s-label></s-label>
                    <s-label></s-label>
                    <s-label></s-label>
                </div>
            </div>
            <div class="project-category">
                <div class="projects-list">
                    <h2>Projects</h2>
                    <div class="projects">
                        <simple-card>...</simple-card>
                        <simple-card>...</simple-card>
                        <simple-card>...</simple-card>
                        <simple-card>...</simple-card>
                    </div>
                </div>
            </div>
        </div>
        `}};Q.styles=f`
        /* BASICS CSS */
        h2 {
            color: var(--green);
        }
        /* COMPONENTS CSS */
        .container-projects {
            display: grid;
            grid-template-columns: 30% 70%;
            border-radius: 12px;
            background-color: var(--dark-transparent);
        }
        
        .skills-category h2 {
            margin: 16px;
            text-align: left;
        }
        .skills {
            margin: 16px;
            grid-template-columns: 50% 50%;
        }
        
        .project-category h2 {
            margin: 16px;
            text-align: left;
        }
        .projects {
            display: grid;
            grid-template-columns: 50% 50%;
        }
        
        simple-card {
            margin: 16px;
        }
                
        /* RESPONSIVE CSS */
        @media (max-width: 800px) {
            .container-projects {
                grid-template-columns: 100%;
            }
            .skills {
                grid-template-columns: 100%;
            }
            .projects {
                grid-template-columns: 100%;
            }
            .skills-category h2{
                text-align: center;
            }
            .project-category h2 {
                text-align: center;
            }
        }
    `;Q=ot([v("projects-page")],Q);var nt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,P=(o,e,t,s)=>{for(var r=s>1?void 0:s?at(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&nt(e,t,r),r};let b=class extends u{constructor(){super(...arguments),this.size=200,this.shadow=0,this.borderRadius="0",this.alt="",this.border=0}render(){return m`
            <img
                src="${this.src}"
                alt="${this.alt}"
                style="
                    width: ${this.size}px; 
                    height: ${this.size}px; 
                    box-shadow: 0 0 4px rgba(0,0,0,${this.shadow}); 
                    border-radius: ${this.borderRadius==="circle"?"50%":this.borderRadius};
                    outline: ${this.border>0?this.border+"px solid var(--primary)":"none"};
                    outline-offset: ${this.border>0?"4px":"0"};
                "
            />
        `}};b.styles=f`
        img {
            object-fit: cover;
        }
    `;P([g({type:String})],b.prototype,"src",2);P([g({type:Number})],b.prototype,"size",2);P([g({type:Number})],b.prototype,"shadow",2);P([g({type:String})],b.prototype,"borderRadius",2);P([g({type:String})],b.prototype,"alt",2);P([g({type:Number})],b.prototype,"border",2);b=P([v("s-img")],b);var lt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,dt=(o,e,t,s)=>{for(var r=s>1?void 0:s?ct(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&lt(e,t,r),r};let X=class extends u{render(){return m`
        <div class="container-info">
            <div class="perfil-image">
                <s-img 
                    src="img-perfil.jpg" 
                    borderRadius="circle" 
                    border=4
                ></s-img>
                <h2>Hey I am</h2>
                <h1>Ricardo De Jesus Moo Vargas</h1>
                <h2>nice to meet you 👏</h2>
            </div>
            
            <div class="perfil-description">
                <h1>Profile</h1>
               <p>
                   Ingeniero en sistemas computacionales egresado de la Universidad
                   Autónoma de Campeche, Facultad de Ingeniería. Con un enfoque en
                   la resolución de problemas mediante la creación de software tanto
                   Web como especializado para automatización. Mis puntos fuertes están
                   actualmente en el desarrollo frontend con conocimientos basicos de
                   backend. Tengo la aspiración de convertirme en un desarrollador
                   full stack con habilidades de arquitecto de software.
               </p>
            </div>
        </div>
        `}};X.styles=f`
        .container-info {
            /* POSITION AND SIZE */
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr auto;
            border-radius: 12px;
        }
        
        .perfil-image {
            /* POSITION AND SIZE */
            margin: 0 12px;
            grid-column: 1/2;
            display: grid;
            place-items: center;
            text-align: center;
            /* BACKGROUND, COLORS AND EFECTS */
            color: var(--dark);
        }
        .perfil-image h1{
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }
        
        .perfil-description {
            /* POSITION AND SIZE */
            margin: 0 12px;
            grid-column: 2/3;
            padding: 16px;
            border-radius: 8px;
            /* BACKGROUND, COOLORS and EFECTS */
            background-color: var(--dark-transparent);
        }
        
        
        h1 {
            margin: 0;
            color: var(--green)
        }
        
        @media (max-width: 800px) {
            .container-info { grid-template-columns: auto 1fr auto }
            .perfil-image { grid-column: 2/3 }
            .perfil-description { grid-column: 2/3; text-align: center }
            .perfil-image h1 { margin: 12px 0; }
        }
    `;X=dt([v("info-page")],X);var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Se=(o,e,t,s)=>{for(var r=s>1?void 0:s?ht(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&pt(e,t,r),r};let q=class extends u{constructor(){super(...arguments),this.open=!1}toggleMenu(){this.open=!this.open}closeMenu(){this.open=!1}render(){return m`
      <div @click="${this.toggleMenu}">
        <slot name="trigger">Menú</slot>
      </div>
      <div class="menu ${this.open?"open":""}" @mouseleave="${this.closeMenu}">
        <slot></slot>
      </div>
    `}};q.styles=f`
      :host {
        position: relative;
        display: inline-block;
      }
    
      .menu {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        min-width: 150px;
        padding: 8px 0;
        display: none;
        z-index: 1000; /* Asegura que esté por encima del navbar */
      }
    
      .menu.open {
        display: block;
      }
    
      .menu-item {
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.2s;
      }
    
      .menu-item:hover {
        background: #f0f0f0;
      }
    `;Se([g({type:Boolean})],q.prototype,"open",2);q=Se([v("dropdown-menu")],q);var ut=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,ft=(o,e,t,s)=>{for(var r=s>1?void 0:s?gt(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&ut(e,t,r),r};let ee=class extends u{render(){return m`
            <nav>
                <div class="nav-logo">
                    <a href="#">
                        <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 11L17.6965 12.5268C19.239 13.9151 20.0103 14.6093 20.0103 15.5C20.0103 16.3907 19.239 17.0849 17.6965 18.4732L16 20" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M13.9868 5L11.9934 12.5L10 20" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M8.00005 4.82959L6.30358 6.35641C4.76102 7.74471 3.98975 8.43886 3.98975 9.32959C3.98975 10.2203 4.76102 10.9145 6.30358 12.3028L8.00005 13.8296" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </a>
                </div>
                <div class="nav-body">
                    <ul class="list">
                        <li><a href="#">👨‍💻About Me</a></li>
                        <li><a href="#">🛠️Projects</a></li>
                        <li><a href="#">🥇Certificates and Recognitions</a></li>
                    </ul>
                </div>
                <div class="nav-right">
                    <simple-button color="green" type="simple" text="Menu"/>
                </div>
            </nav>
        `}};ee.styles=f`
        nav {
            display: flex;
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 70%;
            border-radius: 8px;
            align-items: center;
            overflow: visible; /* Asegura que el fondo no se desborde */
            /* transparencies */
            background-color: rgba(255, 255, 255, 0.8);
            z-index: 10; // procura que el objeto siempre este por encima de los demas
            backdrop-filter: blur(5px); /* Aplica el desenfoque al fondo */
            -webkit-backdrop-filter: blur(10px); /* Soporte para Safari */
            /* Shadows */
            box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.37);
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .nav-logo {
            margin-left: 12px;
        }

        .nav-body {
            margin-left: 12px;
        }

        .nav-right {
            margin-left: auto;
            padding: 12px;
        }

        .list {
            list-style: none;
            display: none;
            padding: 0;
            @media (min-width: 800px) {
                display: flex;
            }

            li a {
                color: var(--green);
                margin-left: 8px;
                text-decoration: none;
            }
        }

        .nav-logo a:hover {
            color: var(--primary);
        }

        .list li a:hover {
            color: var(--primary);
        }
    `;ee=ft([v("nav-bar")],ee);const ae=class ae{render(){return m`
            <div class="contacts-bar">
                <span>👩‍🦰</span>
                <span>👩‍🦰</span>
                <span>👩‍🦰</span>
                <span>👩‍🦰</span>
            </div>
        `}};ae.styles=f`
        .contacts-bar {
            
        }
    `;let $e=ae;var mt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,$t=(o,e,t,s)=>{for(var r=s>1?void 0:s?vt(e,t):e,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&mt(e,t,r),r};let te=class extends u{render(){return m`
        <header>
            <nav-bar></nav-bar>
        </header>
        <main class="content">
            <info-page></info-page>
            <resources-page></resources-page>
            <projects-page></projects-page>
        </main>
        <footer>
            <p> <strong>©</strong> 2024 Ricardo J Moo Vargas</p>
        </footer>
    `}};te.styles=f`
        main {
            margin-bottom: 90px;
            display: grid;
            grid-template-columns: 10% 2fr 10%;
            grid-template-rows: auto auto auto;
        }

        info-page {
            grid-column: 2 / 3;
            margin: 24px 0;
            padding: 8px;
        }
        projects-page {
            grid-column: 2 / 3;
            margin: 24px 0;
            padding: 8px;
        }
        
        resources-page {
            grid-column: 2 / 3;
            margin: 24px 0;
            padding: 8px;
        }
        
        footer {
            // POSITIONS
            bottom: 0;  
            left: 0;
            min-height: 90px;
            text-align: center;
            padding: 16px;
            /* BACKGROUNDS AND COLORS */
            background-color: var(--deep-dark);
            color: var(--light);
        }
    `;te=$t([v("app-router")],te);
