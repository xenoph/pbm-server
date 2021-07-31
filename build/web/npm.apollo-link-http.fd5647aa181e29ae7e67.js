/*! For license information please see npm.apollo-link-http.fd5647aa181e29ae7e67.js.LICENSE.txt */
(self.webpackChunkpbm=self.webpackChunkpbm||[]).push([[633],{8528:(e,r,t)=>{"use strict";t.d(r,{u:()=>c});var n=function(e,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},o=function(){return(o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},i=t(6097),a=t(9904),s=t(8731),c=function(e){function r(r){return e.call(this,function(e){void 0===e&&(e={});var r=e.uri,t=void 0===r?"/graphql":r,n=e.fetch,c=e.includeExtensions,u=e.useGETForQueries,p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(e,["uri","fetch","includeExtensions","useGETForQueries"]);(0,s.U2)(n),n||(n=fetch);var l={http:{includeExtensions:c},options:p.fetchOptions,credentials:p.credentials,headers:p.headers};return new i.i0((function(e){var r=(0,s.rg)(e,t),c=e.getContext(),p={};if(c.clientAwareness){var f=c.clientAwareness,h=f.name,d=f.version;h&&(p["apollographql-client-name"]=h),d&&(p["apollographql-client-version"]=d)}var v,y=o({},p,c.headers),b={http:c.http,options:c.fetchOptions,credentials:c.credentials,headers:y},O=(0,s.E4)(e,s.SC,l,b),m=O.options,g=O.body;if(!m.signal){var E=(0,s.$g)(),x=E.controller,w=E.signal;(v=x)&&(m.signal=w)}if(u&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(m.method="GET"),"GET"===m.method){var j=function(e,r){var t=[],n=function(e,r){t.push(e+"="+encodeURIComponent(r))};if("query"in r&&n("query",r.query),r.operationName&&n("operationName",r.operationName),r.variables){var o=void 0;try{o=(0,s.gE)(r.variables,"Variables map")}catch(e){return{parseError:e}}n("variables",o)}if(r.extensions){var i=void 0;try{i=(0,s.gE)(r.extensions,"Extensions map")}catch(e){return{parseError:e}}n("extensions",i)}var a="",c=e,u=e.indexOf("#");-1!==u&&(a=e.substr(u),c=e.substr(0,u));var p=-1===c.indexOf("?")?"?":"&";return{newURI:c+p+t.join("&")+a}}(r,g),q=j.newURI,_=j.parseError;if(_)return(0,i.Qc)(_);r=q}else try{m.body=(0,s.gE)(g,"Payload")}catch(_){return(0,i.Qc)(_)}return new a.Z((function(t){return n(r,m).then((function(r){return e.setContext({response:r}),r})).then((0,s.dO)(e)).then((function(e){return t.next(e),t.complete(),e})).catch((function(e){"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e))})),function(){v&&v.abort()}}))}))}(r).request)||this}return function(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}(r,e),r}(i.i0)}}]);
//# sourceMappingURL=npm.apollo-link-http.fd5647aa181e29ae7e67.js.map