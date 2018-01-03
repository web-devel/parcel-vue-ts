// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped, ModuleConfig) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(ModuleConfig);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({11:[function(require,module,exports) {
var e=require("vueify/lib/insert-css").insert(".ecosystem a[data-v-3dbbf657]{color:purple}");!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue-property-decorator"),t=require("vuex-class"),r=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){e(t,r);function o(){this.constructor=t}t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),o=function(e,t,r,o){var n,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(s=(c<3?n(s):c>3?n(t,r,s):n(t,r))||s);return c>3&&s&&Object.defineProperty(t,r,s),s},n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(c){r(s,c);function s(){return null!==c&&c.apply(this,arguments)||this}return o([(0,t.State)("ecosystem"),n("design:type",Array)],s.prototype,"list",void 0),s=o([e.Component],s)}(e.Vue);exports.default=c}(),module.exports.__esModule&&(module.exports=module.exports.default);var t="function"==typeof module.exports?module.exports.options:module.exports;t.render=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"ecosystem"},e._l(e.list,function(t){return r("li",{key:t.label},[r("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.label))])])}))},t.staticRenderFns=[],t._scopeId="data-v-3dbbf657";
},{"vueify/lib/insert-css":17,"vue-property-decorator":16,"vuex-class":20}]},{},[11])