var _0x11bb=["from","isArray","length","uuid","xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx","random","toString","first","concat","reduce","shrink","last","slice","unikey","object","assign","reverse","apply","iterator","function","constructor","prototype","symbol","Invalid attempt to spread non-iterable instance","call","[object Arguments]"];!function(r,t){!function(t){for(;--t;)r.push(r.shift())}(++t)}(_0x11bb,382);var _0x1faa=function(r,t){return _0x11bb[r-=0]};function _typeof(r){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol[_0x1faa("0x0")]?function(r){return typeof r}:function(r){return r&&typeof Symbol===_0x1faa("0x1")&&r[_0x1faa("0x2")]===Symbol&&r!==Symbol[_0x1faa("0x3")]?_0x1faa("0x4"):typeof r})(r)}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError(_0x1faa("0x5"))}function _iterableToArray(r){if(Symbol[_0x1faa("0x0")]in Object(r)||Object[_0x1faa("0x3")].toString[_0x1faa("0x6")](r)===_0x1faa("0x7"))return Array[_0x1faa("0x8")](r)}function _arrayWithoutHoles(r){if(Array[_0x1faa("0x9")](r)){for(var t=0,n=new Array(r.length);t<r[_0x1faa("0xa")];t++)n[t]=r[t];return n}}String[_0x1faa("0x3")][_0x1faa("0xb")]=function(){return _0x1faa("0xc").replace(/[xy]/g,function(r){var t=16*Math[_0x1faa("0xd")]()|0;return("x"===r?t:3&t|8)[_0x1faa("0xe")](16)})},Array[_0x1faa("0x3")][_0x1faa("0xf")]=function(){return this[0]},Array[_0x1faa("0x3")].last=function(){return this[this.length-1]},Array[_0x1faa("0x3")].flatMap=function(r){return this.reduce(function(t,n){return _toConsumableArray(t)[_0x1faa("0x10")](_toConsumableArray(r(n)))},[])},Array[_0x1faa("0x3")].flatten=function(){return this[_0x1faa("0x11")](function(r,t){return _toConsumableArray(r).concat(_toConsumableArray(t))},[])},Array[_0x1faa("0x3")][_0x1faa("0x12")]=function(r){return this.reduce(function(t,n){return t[_0x1faa("0x13")]()[_0x1faa("0xa")]<r?_toConsumableArray(t[_0x1faa("0x14")](0,t[_0x1faa("0xa")]-1))[_0x1faa("0x10")]([_toConsumableArray(t.last())[_0x1faa("0x10")]([curr])]):t.concat([[curr]])},[])},Array[_0x1faa("0x3")][_0x1faa("0x15")]=function(r){return this.map(function(r){return _typeof(r)===_0x1faa("0x16")?Object[_0x1faa("0x17")]({},r,{"@@key":"".uuid()}):r})},Function.prototype.flip=function(){var r=this;return function(){for(var t=arguments[_0x1faa("0xa")],n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return r.apply(void 0,_toConsumableArray(n[_0x1faa("0x18")]()))}},Function[_0x1faa("0x3")].invoke=function(){return this[_0x1faa("0x19")](void 0,arguments)},Function[_0x1faa("0x3")].combine=function(r){var t=this;return function(){return t(r[_0x1faa("0x19")](void 0,arguments))}},require("source-map-support/register"),module.exports=function(r){var t={};function n(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return r[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},n.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="/",n(n.s=5)}([function(r,t){r.exports=require("express")},function(r,t,n){"use strict";n.r(t);var e={port:process.env.PORT||8e3},a=n(4),o=n(0),x=n(3),u=n(2),f=o();f.use(o.json()),f.use(o.urlencoded({extended:!1})),f.use("/",x),f.use("/users",u),f.use(function(r,t,n){n(a(404))}),f.use(function(r,t,n){n.locals.message=r.message,n.locals.error="development"===t.app.get("env")?r:{},n.status(r.status||500),n.render("error")}),f.listen(e.port,r=>{r?console.log("Something Went Wrong"):console.log(`Server running at ${e.port}`)})},function(r,t,n){var e=n(0).Router();e.get("/",function(r,t){t.send("respond with a resource")}),r.exports=e},function(r,t,n){var e=n(0).Router();e.get("/",function(r,t){t.send({title:"Express"})}),r.exports=e},function(r,t){r.exports=require("http-errors")},function(r,t,n){r.exports=n(1)}]);
//# sourceMappingURL=main.map