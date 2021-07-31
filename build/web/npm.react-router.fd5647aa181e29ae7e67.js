(self.webpackChunkpbm=self.webpackChunkpbm||[]).push([[617],{6550:(t,e,n)=>{"use strict";n.d(e,{AW:()=>v,F0:()=>f,rs:()=>y,s6:()=>l,LX:()=>d,k6:()=>x});var r=n(1788),o=n(7294),i=(n(5697),n(9731),n(4523)),a=n(2177),p=n(2122),u=n(9658),c=n.n(u),s=(n(9864),n(9756),n(8679),function(t){var e=(0,i.Z)();return e.displayName="Router-History",e}()),l=function(t){var e=(0,i.Z)();return e.displayName="Router",e}(),f=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}(0,r.Z)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.createElement(l.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(s.Provider,{children:this.props.children||null,value:this.props.history}))},e}(o.Component);o.Component,o.Component;var h={},m=0;function d(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,p=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=h[n]||(h[n]={});if(r[t])return r[t];var o=[],i={regexp:c()(t,o,e),keys:o};return m<1e4&&(r[t]=i,m++),i}(n,{end:i,strict:p,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],f=u.slice(1),d=t===l;return i&&!d?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:d,params:a.reduce((function(t,e,n){return t[e.name]=f[n],t}),{})}}),null)}var v=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return o.createElement(l.Consumer,null,(function(e){e||(0,a.Z)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?d(n.pathname,t.props):e.match,i=(0,p.Z)({},e,{location:n,match:r}),u=t.props,c=u.children,s=u.component,f=u.render;return Array.isArray(c)&&0===c.length&&(c=null),o.createElement(l.Provider,{value:i},i.match?c?"function"==typeof c?c(i):c:s?o.createElement(s,i):f?f(i):null:"function"==typeof c?c(i):null)}))},e}(o.Component);o.Component;var y=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return o.createElement(l.Consumer,null,(function(e){e||(0,a.Z)(!1);var n,r,i=t.props.location||e.location;return o.Children.forEach(t.props.children,(function(t){if(null==r&&o.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?d(i.pathname,(0,p.Z)({},t.props,{path:a})):e.match}})),r?o.cloneElement(n,{location:i,computedMatch:r}):null}))},e}(o.Component),g=o.useContext;function x(){return g(s)}},6585:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},9658:(t,e,n)=>{var r=n(6585);t.exports=function t(e,n,o){return r(n)||(o=n||o,n=[]),o=o||{},e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(t,e)}(e,n):r(e)?function(e,n,r){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],n,r).source);return s(new RegExp("(?:"+o.join("|")+")",l(r)),n)}(e,n,o):function(t,e,n){return f(i(t,n),e,n)}(e,n,o)},t.exports.parse=i,t.exports.compile=function(t,e){return p(i(t,e),e)},t.exports.tokensToFunction=p,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,p="",s=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],f=n[1],h=n.index;if(p+=t.slice(a,h),a=h+l.length,f)p+=f[1];else{var m=t[a],d=n[2],v=n[3],y=n[4],g=n[5],x=n[6],E=n[7];p&&(r.push(p),p="");var C=null!=d&&null!=m&&m!==d,w="+"===x||"*"===x,b="?"===x||"*"===x,k=n[2]||s,R=y||g;r.push({name:v||i++,prefix:d||"",delimiter:k,optional:b,repeat:w,partial:C,asterisk:!!E,pattern:R?c(R):E?".*":"[^"+u(k)+"]+?"})}}return a<t.length&&(p+=t.substr(a)),p&&r.push(p),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function p(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var i="",p=e||{},u=(o||{}).pretty?a:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var l,f=p[s.name];if(null==f){if(s.optional){s.partial&&(i+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(r(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=u(f[h]),!n[c].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?s.prefix:s.delimiter)+l}}else{if(l=s.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(f),!n[c].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+l+'"');i+=s.prefix+l}}else i+=s}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function c(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function s(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function f(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",p=0;p<t.length;p++){var c=t[p];if("string"==typeof c)a+=u(c);else{var f=u(c.prefix),h="(?:"+c.pattern+")";e.push(c),c.repeat&&(h+="(?:"+f+h+")*"),a+=h=c.optional?c.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var m=u(n.delimiter||"/"),d=a.slice(-m.length)===m;return o||(a=(d?a.slice(0,-m.length):a)+"(?:"+m+"(?=$))?"),a+=i?"$":o&&d?"":"(?="+m+"|$)",s(new RegExp("^"+a,l(n)),e)}}}]);
//# sourceMappingURL=npm.react-router.fd5647aa181e29ae7e67.js.map