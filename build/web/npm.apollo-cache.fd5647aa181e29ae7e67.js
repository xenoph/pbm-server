(self.webpackChunkpbm=self.webpackChunkpbm||[]).push([[193],{2644:(e,t,i)=>{"use strict";i.d(t,{R:()=>d});var n=i(7637);function r(e){return{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:a(e)}]}}function a(e){if("number"==typeof e||"boolean"==typeof e||"string"==typeof e||null==e)return null;if(Array.isArray(e))return a(e[0]);var t=[];return Object.keys(e).forEach((function(i){var n={kind:"Field",name:{kind:"Name",value:i},selectionSet:a(e[i])||void 0};t.push(n)})),{kind:"SelectionSet",selections:t}}var o,u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:null}]}}]},d=function(){function e(){}return e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.read({query:e.query,variables:e.variables,optimistic:t})},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.read({query:(0,n.Yk)(e.fragment,e.fragmentName),variables:e.variables,rootId:e.id,optimistic:t})},e.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:e.query,variables:e.variables})},e.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,variables:e.variables,query:(0,n.Yk)(e.fragment,e.fragmentName)})},e.prototype.writeData=function(e){var t,i,n=e.id,o=e.data;if(void 0!==n){var d=null;try{d=this.read({rootId:n,optimistic:!1,query:u})}catch(e){}var s=d&&d.__typename||"__ClientData",l=Object.assign({__typename:s},o);this.writeFragment({id:n,fragment:(t=l,i=s,{kind:"Document",definitions:[{kind:"FragmentDefinition",typeCondition:{kind:"NamedType",name:{kind:"Name",value:i||"__FakeType"}},name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:a(t)}]}),data:l})}else this.writeQuery({query:r(o),data:o})},e}();o||(o={})}}]);
//# sourceMappingURL=npm.apollo-cache.fd5647aa181e29ae7e67.js.map