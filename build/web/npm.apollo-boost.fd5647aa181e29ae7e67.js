/*! For license information please see npm.apollo-boost.fd5647aa181e29ae7e67.js.LICENSE.txt */
(self.webpackChunkpbm=self.webpackChunkpbm||[]).push([[433],{5273:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>p});var n=function(e,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},c=t(817),o=t(6097),i=t(9904),s=t(3330),a=t(8528),f=t(3615),u=t(1467),h=["request","uri","credentials","headers","fetch","fetchOptions","clientState","onError","cacheRedirects","cache","name","version","resolvers","typeDefs","fragmentMatcher"];const p=function(e){function r(r){void 0===r&&(r={}),r&&Object.keys(r).filter((function(e){return-1===h.indexOf(e)})).length;var t=r.request,n=r.uri,c=r.credentials,p=r.headers,l=r.fetch,d=r.fetchOptions,b=r.clientState,m=r.cacheRedirects,v=r.onError,w=r.name,y=r.version,g=r.resolvers,O=r.typeDefs,k=r.fragmentMatcher,_=r.cache;(0,u.kG)(!_||!m,1),_||(_=m?new s.h4({cacheRedirects:m}):new s.h4);var q=v?(0,f.q)(v):(0,f.q)((function(e){var r=e.graphQLErrors;e.networkError,r&&r.forEach((function(e){return e.message,e.locations,e.path,!0}))})),D=!!t&&new o.i0((function(e,r){return new i.Z((function(n){var c;return Promise.resolve(e).then((function(e){return t(e)})).then((function(){c=r(e).subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)})})).catch(n.error.bind(n)),function(){c&&c.unsubscribe()}}))})),E=new a.u({uri:n||"/graphql",fetch:l,fetchOptions:d||{},credentials:c||"same-origin",headers:p||{}}),P=o.i0.from([q,D,E].filter((function(e){return!!e}))),M=g,j=O,x=k;return b&&(b.defaults&&_.writeData({data:b.defaults}),M=b.resolvers,j=b.typeDefs,x=b.fragmentMatcher),e.call(this,{cache:_,link:P,name:w,version:y,resolvers:M,typeDefs:j,fragmentMatcher:x})||this}return function(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}(r,e),r}(c.ZP)}}]);
//# sourceMappingURL=npm.apollo-boost.fd5647aa181e29ae7e67.js.map