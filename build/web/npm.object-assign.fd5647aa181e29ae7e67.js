/*! For license information please see npm.object-assign.fd5647aa181e29ae7e67.js.LICENSE.txt */
(self.webpackChunkpbm=self.webpackChunkpbm||[]).push([[290],{7418:r=>{"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,c){for(var a,i,s=o(r),b=1;b<arguments.length;b++){for(var f in a=Object(arguments[b]))t.call(a,f)&&(s[f]=a[f]);if(e){i=e(a);for(var p=0;p<i.length;p++)n.call(a,i[p])&&(s[i[p]]=a[i[p]])}}return s}}}]);
//# sourceMappingURL=npm.object-assign.fd5647aa181e29ae7e67.js.map