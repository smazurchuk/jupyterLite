"use strict";(self.webpackChunk_jupyterlite_javascript_kernel_extension=self.webpackChunk_jupyterlite_javascript_kernel_extension||[]).push([[290,322],{290:(e,t,r)=>{r.r(t),r.d(t,{JavaScriptKernel:()=>E});var n=r(671),a=r(629),s=r(526);const o=Symbol("Comlink.proxy"),i=Symbol("Comlink.endpoint"),c=Symbol("Comlink.releaseProxy"),u=Symbol("Comlink.thrown"),l=e=>"object"==typeof e&&null!==e||"function"==typeof e,p=new Map([["proxy",{canHandle:e=>l(e)&&e[o],serialize(e){const{port1:t,port2:r}=new MessageChannel;return m(e,t),[r,[r]]},deserialize:e=>(e.start(),h(e))}],["throw",{canHandle:e=>l(e)&&u in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function m(e,t=self){t.addEventListener("message",(function r(n){if(!n||!n.data)return;const{id:a,type:s,path:i}=Object.assign({path:[]},n.data),c=(n.data.argumentList||[]).map(f);let l;try{const t=i.slice(0,-1).reduce(((e,t)=>e[t]),e),r=i.reduce(((e,t)=>e[t]),e);switch(s){case"GET":l=r;break;case"SET":t[i.slice(-1)[0]]=f(n.data.value),l=!0;break;case"APPLY":l=r.apply(t,c);break;case"CONSTRUCT":l=function(e){return Object.assign(e,{[o]:!0})}(new r(...c));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;m(e,r),l=function(e,t){return g.set(e,t),e}(t,[t])}break;case"RELEASE":l=void 0;break;default:return}}catch(e){l={value:e,[u]:0}}Promise.resolve(l).catch((e=>({value:e,[u]:0}))).then((e=>{const[n,o]=w(e);t.postMessage(Object.assign(Object.assign({},n),{id:a}),o),"RELEASE"===s&&(t.removeEventListener("message",r),d(t))}))})),t.start&&t.start()}function d(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function h(e,t){return v(e,[],t)}function y(e){if(e)throw new Error("Proxy has been released and is not useable")}function v(e,t=[],r=function(){}){let n=!1;const a=new Proxy(r,{get(r,s){if(y(n),s===c)return()=>k(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{d(e),n=!0}));if("then"===s){if(0===t.length)return{then:()=>a};const r=k(e,{type:"GET",path:t.map((e=>e.toString()))}).then(f);return r.then.bind(r)}return v(e,[...t,s])},set(r,a,s){y(n);const[o,i]=w(s);return k(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:o},i).then(f)},apply(r,a,s){y(n);const o=t[t.length-1];if(o===i)return k(e,{type:"ENDPOINT"}).then(f);if("bind"===o)return v(e,t.slice(0,-1));const[c,u]=b(s);return k(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(f)},construct(r,a){y(n);const[s,o]=b(a);return k(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:s},o).then(f)}});return a}function b(e){const t=e.map(w);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const g=new WeakMap;function w(e){for(const[t,r]of p)if(r.canHandle(e)){const[n,a]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},a]}return[{type:"RAW",value:e},g.get(e)||[]]}function f(e){switch(e.type){case"HANDLER":return p.get(e.name).deserialize(e.value);case"RAW":return e.value}}function k(e,t,r){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===a&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),r)}))}class E extends a.BaseKernel{constructor(e){super(e),this._ready=new s.PromiseDelegate,this._worker=this.initWorker(e),this._worker.onmessage=e=>this._processWorkerMessage(e.data),this.remoteKernel=this.initRemote(e),this._ready.resolve()}dispose(){this.isDisposed||(this._worker.terminate(),this._worker=null,super.dispose())}get ready(){return this._ready.promise}async kernelInfoRequest(){return{implementation:"JavaScript",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"javascript"},file_extension:".js",mimetype:"text/javascript",name:"javascript",nbconvert_exporter:"javascript",pygments_lexer:"javascript",version:"es2017"},protocol_version:"5.3",status:"ok",banner:"A JavaScript kernel running in the browser",help_links:[{text:"JavaScript Kernel",url:"https://github.com/jupyterlite/jupyterlite"}]}}async executeRequest(e){const t=await this.remoteKernel.execute(e,this.parent);return t.execution_count=this.executionCount,t}async completeRequest(e){return await this.remoteKernel.complete(e,this.parent)}async inspectRequest(e){throw new Error("Not implemented")}async isCompleteRequest(e){throw new Error("Not implemented")}async commInfoRequest(e){throw new Error("Not implemented")}inputReply(e){throw new Error("Not implemented")}async commOpen(e){throw new Error("Not implemented")}async commMsg(e){throw new Error("Not implemented")}async commClose(e){throw new Error("Not implemented")}initWorker(e){return new Worker(new URL(r.p+r.u(866),r.b),{type:void 0})}initRemote(e){const t=h(this._worker);return t.initialize({baseUrl:n.PageConfig.getBaseUrl()}),t}_processWorkerMessage(e){var t,r,n,a,s,o,i;if(!e.type)return;const c=e.parentHeader||this.parentHeader;switch(e.type){case"stream":{const r=null!==(t=e.bundle)&&void 0!==t?t:{name:"stdout",text:""};this.stream(r,c);break}case"input_request":{const t=null!==(r=e.content)&&void 0!==r?r:{prompt:"",password:!1};this.inputRequest(t,c);break}case"display_data":{const t=null!==(n=e.bundle)&&void 0!==n?n:{data:{},metadata:{},transient:{}};this.displayData(t,c);break}case"update_display_data":{const t=null!==(a=e.bundle)&&void 0!==a?a:{data:{},metadata:{},transient:{}};this.updateDisplayData(t,c);break}case"clear_output":{const t=null!==(s=e.bundle)&&void 0!==s?s:{wait:!1};this.clearOutput(t,c);break}case"execute_result":{const t=null!==(o=e.bundle)&&void 0!==o?o:{execution_count:0,data:{},metadata:{}};this.publishExecuteResult(t,c);break}case"execute_error":{const t=null!==(i=e.bundle)&&void 0!==i?i:{ename:"",evalue:"",traceback:[]};this.publishExecuteError(t,c);break}case"comm_msg":case"comm_open":case"comm_close":this.handleComm(e.type,e.content,e.metadata,e.buffers,e.parentHeader)}}}}}]);