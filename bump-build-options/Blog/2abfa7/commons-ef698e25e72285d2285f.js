(self.webpackChunk_saulo_dev_blog=self.webpackChunk_saulo_dev_blog||[]).push([[351],{2161:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4834:function(e,t,n){"use strict";var r,o,i,a,c=n(3980),u=n.n(c),s=n(2773),l=n.n(s),f=n(2161),p=n.n(f),d=n(2784),m=n(308),h=n.n(m),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(C).map((function(e){return C[e]})),"charset"),T="cssText",w="href",E="http-equiv",A="innerHTML",O="itemprop",S="name",x="property",j="rel",N="src",k="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),z=[C.NOSCRIPT,C.SCRIPT,C.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,C.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},V=function(e){return Q(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===j&&"canonical"===e[n].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(C.BODY,r),ue(C.HTML,o),ce(f,p);var d={baseTag:se(C.BASE,n),linkTags:se(C.LINK,i),metaTags:se(C.META,a),noscriptTags:se(C.NOSCRIPT,c),scriptTags:se(C.SCRIPT,s),styleTags:se(C.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(C.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[d.createElement(C.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(C.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(g,o,r),link:pe(C.LINK,i,r),meta:pe(C.META,a,r),noscript:pe(C.NOSCRIPT,c,r),script:pe(C.SCRIPT,u,r),style:pe(C.STYLE,s,r),title:pe(C.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:$([w,k],e),bodyAttributes:G(y,e),defer:Q(e,I),encode:Q(e,_),htmlAttributes:G(g,e),linkTags:J(C.LINK,[j,w],e),metaTags:J(C.META,[S,b,E,x,O],e),noscriptTags:J(C.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:J(C.SCRIPT,[N,A],e),styleTags:J(C.STYLE,[T],e),title:K(e),titleAttributes:G(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=me,a=i=function(e){function t(){return B(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case C.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case C.BODY:return F({},o,{bodyAttributes:F({},i)});case C.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},Z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind,t.Z=he},2773:function(e,t,n){"use strict";var r,o=n(2784),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},3058:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(2784),o=n(9844),i=n(2497),a=n(8970),c=n(3416),u=i.default.div.withConfig({displayName:"Navbar__NavbarStyled",componentId:"sc-1ssi13a-0"})(["background-color:",";min-height:35px;"],(function(e){return e.theme.colors.gray3})),s=(0,i.default)(a.T).withConfig({displayName:"Navbar__CenterSingleColumnStyled",componentId:"sc-1ssi13a-1"})(["display:flex;"]),l=function(e){var t=e.className,n=e.children;return r.createElement(i.ThemeProvider,{theme:c.Z},r.createElement(u,{className:t},r.createElement(a.r,null,r.createElement(s,null,n))))},f=n(9035),p=(0,f.Z)((function(e){var t=e.size;return r.createElement("svg",{width:t,height:t,fill:"none",viewBox:"0 0 13 7",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M7.33395 4.71281C7.37609 4.76698 7.39715 4.8362 7.39715 4.92046C7.39715 4.99871 7.36706 5.07094 7.30687 5.13715C7.24668 5.20335 7.17746 5.23646 7.09922 5.23646C6.9668 5.23646 6.86448 5.19132 6.79225 5.10103L5.21229 3.10576L3.65038 5.11006C3.57815 5.19432 3.49689 5.23646 3.40661 5.23646C3.31633 5.23646 3.23808 5.20636 3.17187 5.14617C3.11168 5.08598 3.08159 5.01677 3.08159 4.93852C3.08159 4.85426 3.10265 4.77902 3.14479 4.71281L4.86018 2.61823L3.16284 0.532674C3.12071 0.472485 3.09965 0.400258 3.09965 0.315993C3.09965 0.231728 3.12974 0.159501 3.18993 0.0993121C3.25614 0.033104 3.3404 0 3.44272 0C3.55106 0 3.63533 0.0451419 3.69552 0.135426L5.25743 2.11264L6.81934 0.126397C6.87351 0.0481513 6.94874 0.00902838 7.04505 0.00902838C7.14135 0.00300946 7.2226 0.033104 7.28881 0.0993121C7.35502 0.159501 7.38812 0.228719 7.38812 0.306965C7.38812 0.379192 7.37007 0.4454 7.33395 0.505589L5.61856 2.61823L7.33395 4.71281Z",fill:"#9CDCFE"}),r.createElement("path",{d:"M10.2501 0.0361135C11.0747 0.0361135 11.7308 0.312984 12.2183 0.866724C12.435 1.10748 12.5945 1.38134 12.6968 1.68831C12.8051 1.99527 12.8593 2.30525 12.8593 2.61823C12.8593 2.93121 12.8051 3.24119 12.6968 3.54815C12.5945 3.85512 12.435 4.12898 12.2183 4.36973C11.7308 4.92347 11.0747 5.20034 10.2501 5.20034H8.76044C8.67015 5.20034 8.59191 5.16724 8.5257 5.10103C8.45949 5.03482 8.42639 4.95658 8.42639 4.86629V0.379192C8.42639 0.288908 8.45949 0.210662 8.5257 0.144454C8.59191 0.072227 8.67015 0.0361135 8.76044 0.0361135H10.2501ZM10.1689 4.56836C10.7828 4.56836 11.2763 4.38779 11.6495 4.02666C12.0167 3.66552 12.2002 3.19604 12.2002 2.61823C12.2002 2.04041 12.0167 1.57094 11.6495 1.2098C11.2763 0.848667 10.7828 0.6681 10.1689 0.6681H9.10351V4.56836H10.1689Z",fill:"#9CDCFE"}),r.createElement("path",{d:"M1.43551 6.37702C1.98323 6.37702 2.25408 6.20548 2.24807 5.8624C2.24807 5.75406 2.19389 5.6698 2.08555 5.60961C1.97721 5.54942 1.84179 5.49826 1.67928 5.45613C1.51677 5.414 1.33921 5.36885 1.1466 5.3207C0.953998 5.27255 0.773431 5.20634 0.604901 5.12208C0.436371 5.03781 0.297936 4.92947 0.189596 4.79706C0.0812554 4.65862 0.0270851 4.49009 0.0270851 4.29147C0.0270851 4.09284 0.0571797 3.92431 0.117369 3.78588C0.177558 3.64142 0.267842 3.51804 0.38822 3.41571C0.647034 3.19301 1.00817 3.08167 1.47162 3.08167C1.8448 3.08167 2.20292 3.14185 2.546 3.26223C2.61221 3.28631 2.66337 3.32844 2.69948 3.38863C2.74162 3.4428 2.76268 3.50299 2.76268 3.5692C2.76268 3.62939 2.73259 3.68958 2.6724 3.74976C2.61823 3.80995 2.56406 3.84005 2.50989 3.84005C2.45572 3.84005 2.38951 3.82801 2.31126 3.80394C2.07653 3.73171 1.81771 3.69559 1.53482 3.69559C1.25193 3.69559 1.03826 3.74375 0.893809 3.84005C0.749355 3.93635 0.677128 4.05673 0.677128 4.20118C0.677128 4.33962 0.731298 4.44194 0.839639 4.50815C0.947979 4.56834 1.0834 4.62251 1.24592 4.67066C1.41445 4.71881 1.59501 4.76395 1.78762 4.80608C1.98624 4.84822 2.16681 4.91142 2.32932 4.99568C2.71453 5.1943 2.90714 5.49826 2.90714 5.90755C2.90714 6.22655 2.78676 6.48235 2.546 6.67496C2.29321 6.89164 1.93508 6.99998 1.47162 6.99998C0.978074 6.99998 0.532674 6.88863 0.135426 6.66593C0.0511608 6.60574 0.00601892 6.53351 0 6.44925C0 6.35897 0.0270851 6.28373 0.0812554 6.22354C0.141445 6.15733 0.201634 6.12423 0.261823 6.12423C0.322012 6.12423 0.400258 6.14529 0.496561 6.18743C0.77945 6.31382 1.09243 6.37702 1.43551 6.37702Z",fill:"#569CD6"}))})),d=(0,f.Z)((function(e){var t=e.size;return r.createElement("svg",{width:t,height:t,fill:"none",viewBox:"0 0 9 9",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M1 1L8 8M8 1L1 8",stroke:"currentColor"}))})),m=n(5561),h=i.default.div.withConfig({displayName:"Tab__TabWrapper",componentId:"sc-x4uhne-0"})(["background-color:",";padding:",";display:inline-flex;justify-content:flex-start;align-items:center;height:35px;min-width:150px;cursor:pointer;text-decoration:none;","{margin-right:",";}","{margin-left:auto;opacity:",";}:hover{","{opacity:1;}}"],(function(e){return e.active?e.theme.colors.background:e.theme.colors.gray2}),(function(e){return e.theme.spaces.px8+" "+e.theme.spaces.px12}),p,(function(e){return e.theme.spaces.px6}),d,(function(e){return e.active?"1":"0"}),d),y=(0,i.default)((function(e){var t=e.active,n=e.title,o=e.className;return r.createElement(h,{active:t,className:o},r.createElement(p,{size:16}),r.createElement(m.Z,{color:"neutral",size:"px12"},n),r.createElement(d,{size:12,color:"neutral"}))})).withConfig({displayName:"Tab",componentId:"sc-x4uhne-1"})([""]),g=n(3065),v=(0,i.default)(o.rU).withConfig({displayName:"Navbar__LinkStyled",componentId:"sc-1o08uxx-0"})([":link{text-decoration:none;}"]),C=(0,g.Z)((function(){var e=(0,r.useState)(""),t=e[0],n=e[1],o=function(e){return function(t){t.isPartiallyCurrent&&n(e)}},i="hello.sxd",a="blog.sxd";return r.createElement(l,null,r.createElement(v,{to:"/",getProps:o(i)},r.createElement(y,{title:i,active:t===i})),r.createElement(v,{to:"/blog",partiallyActive:!0,getProps:o(a)},r.createElement(y,{title:a,active:t===a})))})),b=function(e){return function(t){return r.createElement("div",{style:{display:"grid",rowGap:0,height:"100vh",width:"100vw",gridTemplateRows:"[navbar-start] auto [navbar-end content-start] 1fr [content-end]"}},r.createElement("div",{style:{gridRow:"navbar-start / navbar-end"}},r.createElement(C,null)),r.createElement("div",{style:{gridRow:"content-start / content-end",overflow:"scroll"}},r.createElement(e,t)))}}},9035:function(e,t,n){"use strict";var r=n(1461),o=n(2784),i=n(2497),a=n(1961),c=["className"],u=i.default.div.withConfig({displayName:"iconWrap__IconWrapper",componentId:"sc-44qq1f-0"})(["display:inline-block;line-height:0;color:",";"],(function(e){return e.color}));t.Z=function(e){return(0,i.default)((function(t){var n=t.className,i=(0,r.Z)(t,c);return o.createElement(u,{className:n,color:a.D[i.color]||a.D.neutral},o.createElement(e,Object.assign({size:100},i)))})).withConfig({displayName:"iconWrap",componentId:"sc-44qq1f-1"})([""])}},8970:function(e,t,n){"use strict";n.d(t,{T:function(){return u},r:function(){return a}});var r=n(2784),o=n(2497),i=o.default.div.withConfig({displayName:"Grid__GridStyled",componentId:"sc-132tsiy-0"})(["display:grid;grid-template-columns:1fr [content-start] 1200px [content-end] 1fr;@media (max-width:1200px){grid-template-columns:1fr [content-start] 900px [content-end] 1fr;}@media (max-width:900px){grid-template-columns:24px [content-start] 1fr [content-end] 24px;}@media (max-width:400px){grid-template-columns:9px [content-start] 1fr [content-end] 9px;}"]),a=function(e){var t=e.children,n=e.className;return r.createElement(i,{className:n},t)},c=o.default.div.withConfig({displayName:"Grid__CenterSingleColumnStyled",componentId:"sc-132tsiy-1"})(["grid-column-start:content-start;grid-column-end:content-end;"]),u=function(e){var t=e.children,n=e.className;return r.createElement(c,{className:n},t)}},5561:function(e,t,n){"use strict";var r=n(2784),o=n(2497),i=n(1961),a=o.default.span.withConfig({displayName:"SpanText__SpanTextStyled",componentId:"sc-gwg0hi-0"})(["font-family:",";font-size:",";font-weight:",";color:",";margin:",";line-height:1.5;"],(function(e){return e.theme.font.family.primary}),(function(e){return e.size&&e.theme.font.sizes[e.size]}),(function(e){return e.theme.font.weights[e.fontWeight]||e.theme.font.weights.retina}),(function(e){return e.theme.colors[e.color]||i.D.neutral}),(function(e){return e.theme.spaces.px0}));t.Z=function(e){var t=e.children,n=e.color,o=e.size,i=e.className,c=e.fontWeight;return r.createElement(a,{color:n,size:o,className:i,fontWeight:c},t)}},1461:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=commons-ef698e25e72285d2285f.js.map