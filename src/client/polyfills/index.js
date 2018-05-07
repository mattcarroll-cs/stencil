

export function applyPolyfills(window, cb) {
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (function(z,A){z.ES6Promise=A()})(window,function(){function z(){return function(){return process.nextTick(l)}}function A(){return"undefined"!==typeof B?function(){B(l)}:C()}function R(){var a=0,b=new J(l),c=document.createTextNode("");b.observe(c,{characterData:!0});return function(){c.data=a=++a%2}}function S(){var a=new MessageChannel;a.port1.onmessage=l;return function(){return a.port2.postMessage(0)}}function C(){var a=setTimeout;return function(){return a(l,1)}}function l(){for(var a=0;a<p;a+=2)(0,q[a])(q[a+1]),q[a]=void 0,q[a+1]=void 0;p=0}function T(){try{var a=Function("return this")().require("vertx");B=a.runOnLoop||a.runOnContext;return A()}catch(b){return C()}}function D(a,b){var c=this,e=new this.constructor(r);void 0===e[x]&&K(e);var d=c._state;if(d){var f=arguments[d-1];k(function(){return L(d,e,f,c._result)})}else E(c,e,a,b);return e}function F(a){if(a&&"object"===typeof a&&a.constructor===this)return a;var b=new this(r);v(b,a);return b}function r(){}function M(a){try{return a.then}catch(b){return n.error=b,n}}function U(a,b,c,e){try{a.call(b,c,e)}catch(d){return d}}function V(a,b,c){k(function(a){var d=!1,e=U(c,b,function(c){d||(d=!0,b!==c?v(a,c):m(a,c))},function(b){d||(d=!0,h(a,b))},"Settle: "+(a._label||" unknown promise"));!d&&e&&(d=!0,h(a,e))},a)}function W(a,b){b._state===w?m(a,b._result):b._state===t?h(a,b._result):E(b,void 0,function(b){return v(a,b)},function(b){return h(a,b)})}function N(a,b,c){b.constructor===a.constructor&&c===D&&b.constructor.resolve===F?W(a,b):c===n?(h(a,n.error),n.error=null):void 0===c?m(a,b):"function"===typeof c?V(a,b,c):m(a,b)}function v(a,b){if(a===b)h(a,new TypeError("You cannot resolve a promise with itself"));else{var c=typeof b;null===b||"object"!==c&&"function"!==c?m(a,b):N(a,b,M(b))}}function X(a){a._onerror&&a._onerror(a._result);G(a)}function m(a,b){a._state===u&&(a._result=b,a._state=w,0!==a._subscribers.length&&k(G,a))}function h(a,b){a._state===u&&(a._state=t,a._result=b,k(X,a))}function E(a,b,c,e){var d=a._subscribers,f=d.length;a._onerror=null;d[f]=b;d[f+w]=c;d[f+t]=e;0===f&&a._state&&k(G,a)}function G(a){var b=a._subscribers,c=a._state;if(0!==b.length){for(var e,d,f=a._result,g=0;g<b.length;g+=3)e=b[g],d=b[g+c],e?L(c,e,d,f):d(f);a._subscribers.length=0}}function L(a,b,c,e){var d="function"===typeof c,f=void 0,g=void 0,k=void 0,l=void 0;if(d){try{f=c(e)}catch(Y){n.error=Y,f=n}f===n?(l=!0,g=f.error,f.error=null):k=!0;if(b===f){h(b,new TypeError("A promises callback cannot return that same promise."));return}}else f=e,k=!0;b._state===u&&(d&&k?v(b,f):l?h(b,g):a===w?m(b,f):a===t&&h(b,f))}function Z(a,b){try{b(function(b){v(a,b)},function(b){h(a,b)})}catch(c){h(a,c)}}function K(a){a[x]=O++;a._state=void 0;a._result=void 0;a._subscribers=[]}var H=void 0,P=H=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},p=0,B=void 0,I=void 0,k=function(a,b){q[p]=a;q[p+1]=b;p+=2;2===p&&(I?I(l):Q())},y=(H="undefined"!==typeof window?window:void 0)||{},J=y.MutationObserver||y.WebKitMutationObserver;y="undefined"===typeof self&&"undefined"!==typeof process&&"[object process]"==={}.toString.call(process);var aa="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel,q=Array(1E3),Q=void 0;Q=y?z():J?R():aa?S():void 0===H&&"function"===typeof require?T():C();var x=Math.random().toString(36).substring(2),u=void 0,w=1,t=2,n={error:null},O=0,ba=function(){function a(a,c){this._instanceConstructor=a;this.promise=new a(r);this.promise[x]||K(this.promise);P(c)?(this._remaining=this.length=c.length,this._result=Array(this.length),0===this.length?m(this.promise,this._result):(this.length=this.length||0,this._enumerate(c),0===this._remaining&&m(this.promise,this._result))):h(this.promise,Error("Array Methods must be provided an Array"))}a.prototype._enumerate=function(a){for(var b=0;this._state===u&&b<a.length;b++)this._eachEntry(a[b],b)};a.prototype._eachEntry=function(a,c){var b=this._instanceConstructor,d=b.resolve;d===F?(d=M(a),d===D&&a._state!==u?this._settledAt(a._state,c,a._result):"function"!==typeof d?(this._remaining--,this._result[c]=a):b===g?(b=new b(r),N(b,a,d),this._willSettleAt(b,c)):this._willSettleAt(new b(function(b){return b(a)}),c)):this._willSettleAt(d(a),c)};a.prototype._settledAt=function(a,c,e){var b=this.promise;b._state===u&&(this._remaining--,a===t?h(b,e):this._result[c]=e);0===this._remaining&&m(b,this._result)};a.prototype._willSettleAt=function(a,c){var b=this;E(a,void 0,function(a){return b._settledAt(w,c,a)},function(a){return b._settledAt(t,c,a)})};return a}(),g=function(){function a(b){this[x]=O++;this._result=this._state=void 0;this._subscribers=[];if(r!==b){if("function"!==typeof b)throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(this instanceof a)Z(this,b);else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");}}a.prototype["catch"]=function(a){return this.then(null,a)};a.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){throw c;})})};return a}();g.prototype.then=D;g.all=function(a){return(new ba(this,a)).promise};g.race=function(a){var b=this;return P(a)?new b(function(c,e){for(var d=a.length,f=0;f<d;f++)b.resolve(a[f]).then(c,e)}):new b(function(a,b){return b(new TypeError("You must pass an array to race."))})};g.resolve=F;g.reject=function(a){var b=new this(r);h(b,a);return b};g._setScheduler=function(a){I=a};g._setAsap=function(a){k=a};g._asap=k;g.polyfill=function(){var a=void 0;if("undefined"!==typeof global)a=global;else if("undefined"!==typeof self)a=self;else try{a=Function("return this")()}catch(e){throw Error("polyfill failed because global object is unavailable in this environment");}var b=a.Promise;if(b){var c=null;try{c=Object.prototype.toString.call(b.resolve())}catch(e){}if("[object Promise]"===c&&!b.cast)return}a.Promise=g};g.Promise=g;g.polyfill();return g});

  const promises = [];

  if (!window.customElements || (window.Element && (!window.Element.prototype.closest || !window.Element.prototype.matches || !window.Element.prototype.remove))) {
    promises.push(import('./polyfills/dom.js'));
  }

  if ('function' !== typeof Object.assign || !Object.entries) {
    promises.push(import('./polyfills/object.js'));
  }

  if (!Array.prototype.find || !Array.prototype.includes) {
    promises.push(import('./polyfills/array.js'));
  }

  if (!String.prototype.startsWith || !String.prototype.endsWith) {
    promises.push(import('./polyfills/string.js'));
  }

  if (!window.fetch) {
    promises.push(import('./polyfills/fetch.js'));
  }

  Promise.all(promises).then(function(results) {
    results.forEach(function(polyfillModule) {
      polyfillModule.applyPolyfill(window, window.document);
    });

    cb();
  });
}
