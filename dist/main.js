/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends2 = __webpack_require__(57);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vue = __webpack_require__(103);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(100);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _index = __webpack_require__(46);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _entry = __webpack_require__(45);
	
	var _entry2 = _interopRequireDefault(_entry);
	
	var _dialog = __webpack_require__(44);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Foo = { template: '<div>foo</div>' };
	var Bar = { template: '<div>bar</div>' };
	
	var routes = {
	    mode: 'abstract',
	    routes: [{
	        path: '/docs',
	        component: _entry2.default
	    }, {
	        path: '/dialog',
	        component: _dialog2.default
	    }]
	};
	_vue2.default.use(_vueRouter2.default);
	
	var router = new _vueRouter2.default(routes);
	
	var app = new _vue2.default((0, _extends3.default)({
	    router: router
	}, _index2.default)).$mount('#root');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(36)
	  , defined = __webpack_require__(19);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(6)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(8)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(5) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(35)
	  , toPrimitive    = __webpack_require__(29)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(40)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(26)('wks')
	  , uid        = __webpack_require__(18)
	  , Symbol     = __webpack_require__(1).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(56);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(55);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(1)
	  , core      = __webpack_require__(4)
	  , ctx       = __webpack_require__(65)
	  , hide      = __webpack_require__(7)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 23 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).f
	  , has = __webpack_require__(2)
	  , TAG = __webpack_require__(10)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(26)('keys')
	  , uid    = __webpack_require__(18);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(19);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(1)
	  , core           = __webpack_require__(4)
	  , LIBRARY        = __webpack_require__(22)
	  , wksExt         = __webpack_require__(31)
	  , defineProperty = __webpack_require__(8).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(10);

/***/ },
/* 32 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(1).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(5) && !__webpack_require__(6)(function(){
	  return Object.defineProperty(__webpack_require__(34)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(22)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(41)
	  , hide           = __webpack_require__(7)
	  , has            = __webpack_require__(2)
	  , Iterators      = __webpack_require__(21)
	  , $iterCreate    = __webpack_require__(69)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(77)
	  , ITERATOR       = __webpack_require__(10)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(74)
	  , enumBugKeys = __webpack_require__(20)
	  , IE_PROTO    = __webpack_require__(25)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(34)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(67).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(40)
	  , hiddenKeys = __webpack_require__(20).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(2)
	  , toIObject    = __webpack_require__(3)
	  , arrayIndexOf = __webpack_require__(64)(false)
	  , IE_PROTO     = __webpack_require__(25)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);

/***/ },
/* 42 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _keys = __webpack_require__(11);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(12);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __vue_exports__, __vue_options__;
	
	__vue_exports__ = __webpack_require__(49);
	
	var __vue_template__ = __webpack_require__(97);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if ((0, _typeof3.default)(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if ((0, _keys2.default)(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-3", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-3", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] dialog.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _keys = __webpack_require__(11);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(12);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __vue_exports__, __vue_options__;
	
	__vue_exports__ = __webpack_require__(50);
	
	var __vue_template__ = __webpack_require__(95);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if ((0, _typeof3.default)(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if ((0, _keys2.default)(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-1", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-1", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] entry.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _keys = __webpack_require__(11);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(12);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __vue_exports__, __vue_options__;
	
	__vue_exports__ = __webpack_require__(51);
	
	var __vue_template__ = __webpack_require__(96);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if ((0, _typeof3.default)(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if ((0, _keys2.default)(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-2", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-2", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _keys = __webpack_require__(11);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(12);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __vue_exports__, __vue_options__;
	
	__webpack_require__(101);
	
	__vue_exports__ = __webpack_require__(52);
	
	var __vue_template__ = __webpack_require__(98);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if ((0, _typeof3.default)(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if ((0, _keys2.default)(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-4", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-4", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _keys = __webpack_require__(11);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(12);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __vue_exports__, __vue_options__;
	
	__webpack_require__(102);
	
	__vue_exports__ = __webpack_require__(53);
	
	var __vue_template__ = __webpack_require__(99);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if ((0, _typeof3.default)(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if ((0, _keys2.default)(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-5", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-5", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional) {
	  console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.");
	}
	
	module.exports = __vue_exports__;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(47);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: {
	        vDialog: _index2.default
	    },
	    beforeCreate: function beforeCreate() {}
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 51 */
50,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vMask = __webpack_require__(48);
	
	var _vMask2 = _interopRequireDefault(_vMask);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var path = __webpack_require__(94);
	exports.default = {
	    name: 'v-dialog',
	    components: {
	        vMask: _vMask2.default
	    },
	    props: {
	        hasMask: {
	            type: Boolean,
	            default: true
	        },
	        type: {
	            type: String,
	            default: ''
	        },
	        show: {
	            type: Boolean,
	            default: true
	        },
	        dialogTransition: {
	            type: String,
	            default: 'vux-dialog'
	        },
	        scroll: {
	            type: Boolean,
	            default: true
	        },
	        title: {
	            type: String,
	            default: 'Title'
	        },
	        hasClose: {
	            type: Boolean,
	            default: false
	        },
	        hasTitle: {
	            type: Boolean,
	            default: true
	        }
	    }
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'v-mask',
		props: {
			maskTransition: {
				type: String,
				default: 'vux-fade'
			},
			show: {
				type: Boolean,
				default: true
			}
		},
		method: {
			hideOnBlur: function hideOnBlur() {
				this.show = false;
			}
		}
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(54);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = __webpack_require__(4).Object.assign;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	module.exports = __webpack_require__(4).Object.keys;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	__webpack_require__(85);
	__webpack_require__(88);
	__webpack_require__(89);
	module.exports = __webpack_require__(4).Symbol;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	__webpack_require__(90);
	module.exports = __webpack_require__(31).f('iterator');

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(3)
	  , toLength  = __webpack_require__(81)
	  , toIndex   = __webpack_require__(80);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(62);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(9)
	  , gOPS    = __webpack_require__(23)
	  , pIE     = __webpack_require__(16);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(33);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(38)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(7)(IteratorPrototype, __webpack_require__(10)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(9)
	  , toIObject = __webpack_require__(3);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(18)('meta')
	  , isObject = __webpack_require__(15)
	  , has      = __webpack_require__(2)
	  , setDesc  = __webpack_require__(8).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(6)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(9)
	  , gOPS     = __webpack_require__(23)
	  , pIE      = __webpack_require__(16)
	  , toObject = __webpack_require__(28)
	  , IObject  = __webpack_require__(36)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(6)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(8)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(9);
	
	module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(3)
	  , toPrimitive    = __webpack_require__(29)
	  , has            = __webpack_require__(2)
	  , IE8_DOM_DEFINE = __webpack_require__(35)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(3)
	  , gOPN      = __webpack_require__(39).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(2)
	  , toObject    = __webpack_require__(28)
	  , IE_PROTO    = __webpack_require__(25)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(4)
	  , fails   = __webpack_require__(6);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(19);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(63)
	  , step             = __webpack_require__(70)
	  , Iterators        = __webpack_require__(21)
	  , toIObject        = __webpack_require__(3);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(37)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(14);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(73)});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(28)
	  , $keys    = __webpack_require__(9);
	
	__webpack_require__(78)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 85 */
/***/ function(module, exports) {



/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(79)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(37)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(1)
	  , has            = __webpack_require__(2)
	  , DESCRIPTORS    = __webpack_require__(5)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(41)
	  , META           = __webpack_require__(72).KEY
	  , $fails         = __webpack_require__(6)
	  , shared         = __webpack_require__(26)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(18)
	  , wks            = __webpack_require__(10)
	  , wksExt         = __webpack_require__(31)
	  , wksDefine      = __webpack_require__(30)
	  , keyOf          = __webpack_require__(71)
	  , enumKeys       = __webpack_require__(66)
	  , isArray        = __webpack_require__(68)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(3)
	  , toPrimitive    = __webpack_require__(29)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(38)
	  , gOPNExt        = __webpack_require__(76)
	  , $GOPD          = __webpack_require__(75)
	  , $DP            = __webpack_require__(8)
	  , $keys          = __webpack_require__(9)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(39).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(16).f  = $propertyIsEnumerable;
	  __webpack_require__(23).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(22)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30)('asyncIterator');

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30)('observable');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	var global        = __webpack_require__(1)
	  , hide          = __webpack_require__(7)
	  , Iterators     = __webpack_require__(21)
	  , TO_STRING_TAG = __webpack_require__(10)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, i, u, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, fieldset,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\nscript {\n  display: none !important;\n}\nhtml {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-family: sans-serif;\n  font-size: 16px;\n}\nbody {\n  margin: 0;\n}\na,\nbutton,\na:focus,\nbutton:focus,\na:active,\na:hover {\n  outline: 0;\n}\na {\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n}\na[href]:hover {\n    cursor: pointer;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-size: 1em;\n  font-family: monospace, serif;\n}\npre {\n  white-space: pre-wrap;\n}\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  vertical-align: baseline;\n  font-size: 75%;\n  line-height: 0;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nfieldset {\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\nbutton,\ninput {\n  line-height: normal;\n}\nbutton,\nselect {\n  text-transform: none;\n}\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\nimg {\n  -webkit-user-drag: none;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  overflow: hidden;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\nbody,\n.ionic-body {\n  -webkit-touch-callout: none;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  color: #000;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  line-height: 17px;\n  text-rendering: optimizeLegibility;\n  -webkit-backface-visibility: hidden;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n}\nbody.grade-b,\nbody.grade-c {\n  text-rendering: auto;\n}\n.content {\n  position: relative;\n}\n.scroll-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  margin-top: -1px;\n  padding-top: 1px;\n  margin-bottom: -1px;\n  width: auto;\n  height: auto;\n}\n.menu .scroll-content.scroll-content-false {\n  z-index: 11;\n}\n.scroll-view {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin-top: -1px;\n}\n.scroll {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.scroll-bar {\n  position: absolute;\n  z-index: 9999;\n}\n.ng-animate .scroll-bar {\n  visibility: hidden;\n}\n.scroll-bar-h {\n  right: 2px;\n  bottom: 3px;\n  left: 2px;\n  height: 3px;\n}\n.scroll-bar-h .scroll-bar-indicator {\n    height: 100%;\n}\n.scroll-bar-v {\n  top: 2px;\n  right: 3px;\n  bottom: 2px;\n  width: 3px;\n}\n.scroll-bar-v .scroll-bar-indicator {\n    width: 100%;\n}\n.scroll-bar-indicator {\n  position: absolute;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: 1;\n  -webkit-transition: opacity 0.3s linear;\n  transition: opacity 0.3s linear;\n}\n.scroll-bar-indicator.scroll-bar-fade-out {\n    opacity: 0;\n}\n.platform-android .scroll-bar-indicator {\n  border-radius: 0;\n}\n.grade-b .scroll-bar-indicator,\n.grade-c .scroll-bar-indicator {\n  background: #aaa;\n}\n.grade-b .scroll-bar-indicator.scroll-bar-fade-out,\n  .grade-c .scroll-bar-indicator.scroll-bar-fade-out {\n    -webkit-transition: none;\n    transition: none;\n}\nion-infinite-scroll {\n  height: 60px;\n  width: 100%;\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n}\nion-infinite-scroll .icon {\n    color: #666666;\n    font-size: 30px;\n    color: #666666;\n}\nion-infinite-scroll:not(.active) .spinner,\n  ion-infinite-scroll:not(.active) .icon:before {\n    display: none;\n}\n.overflow-scroll {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n}\n.overflow-scroll .scroll {\n    position: static;\n    height: 100%;\n    -webkit-transform: translate3d(0, 0, 0);\n}\n.has-header {\n  top: 44px;\n}\n.no-header {\n  top: 0;\n}\n.has-subheader {\n  top: 88px;\n}\n.has-tabs-top {\n  top: 93px;\n}\n.has-header.has-subheader.has-tabs-top {\n  top: 137px;\n}\n.has-footer {\n  bottom: 44px;\n}\n.has-subfooter {\n  bottom: 88px;\n}\n.has-tabs,\n.bar-footer.has-tabs {\n  bottom: 49px;\n}\n.has-tabs.pane,\n  .bar-footer.has-tabs.pane {\n    bottom: 49px;\n    height: auto;\n}\n.has-footer.has-tabs {\n  bottom: 93px;\n}\n.pane {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n  z-index: 1;\n}\n.view {\n  z-index: 1;\n}\n.pane,\n.view {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  overflow: hidden;\n}\n.view-container {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\np {\n  margin: 0 0 8.5px;\n}\nsmall {\n  font-size: 85%;\n}\ncite {\n  font-style: normal;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  color: #000;\n  font-weight: 500;\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  line-height: 1.2;\n}\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small,\n  .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small {\n    font-weight: normal;\n    line-height: 1;\n}\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 17px;\n  margin-bottom: 8.5px;\n}\nh1:first-child, .h1:first-child,\n  h2:first-child, .h2:first-child,\n  h3:first-child, .h3:first-child {\n    margin-top: 0;\n}\nh1 + h1, h1 + .h1,\n  h1 + h2, h1 + .h2,\n  h1 + h3, h1 + .h3, .h1 + h1, .h1 + .h1,\n  .h1 + h2, .h1 + .h2,\n  .h1 + h3, .h1 + .h3,\n  h2 + h1,\n  h2 + .h1,\n  h2 + h2,\n  h2 + .h2,\n  h2 + h3,\n  h2 + .h3, .h2 + h1, .h2 + .h1,\n  .h2 + h2, .h2 + .h2,\n  .h2 + h3, .h2 + .h3,\n  h3 + h1,\n  h3 + .h1,\n  h3 + h2,\n  h3 + .h2,\n  h3 + h3,\n  h3 + .h3, .h3 + h1, .h3 + .h1,\n  .h3 + h2, .h3 + .h2,\n  .h3 + h3, .h3 + .h3 {\n    margin-top: 8.5px;\n}\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 8.5px;\n  margin-bottom: 8.5px;\n}\nh1, .h1 {\n  font-size: 31px;\n}\nh2, .h2 {\n  font-size: 25px;\n}\nh3, .h3 {\n  font-size: 21px;\n}\nh4, .h4 {\n  font-size: 15px;\n}\nh5, .h5 {\n  font-size: 12px;\n}\nh6, .h6 {\n  font-size: 11px;\n}\nh1 small, .h1 small {\n  font-size: 21px;\n}\nh2 small, .h2 small {\n  font-size: 15px;\n}\nh3 small, .h3 small,\nh4 small, .h4 small {\n  font-size: 12px;\n}\ndl {\n  margin-bottom: 17px;\n}\ndt,\ndd {\n  line-height: 1.42857;\n}\ndt {\n  font-weight: bold;\n}\nblockquote {\n  margin: 0 0 17px;\n  padding: 8.5px 17px;\n  border-left: 5px solid gray;\n}\nblockquote p {\n    font-weight: 300;\n    font-size: 15px;\n    line-height: 1.25;\n}\nblockquote p:last-child {\n    margin-bottom: 0;\n}\nblockquote small {\n    display: block;\n    line-height: 1.42857;\n}\nblockquote small:before {\n      content: '\\2014   \\A0';\n}\nq:before,\nq:after,\nblockquote:before,\nblockquote:after {\n  content: \"\";\n}\naddress {\n  display: block;\n  margin-bottom: 17px;\n  font-style: normal;\n  line-height: 1.42857;\n}\na.subdued {\n  padding-right: 10px;\n  color: #888;\n  text-decoration: none;\n}\na.subdued:hover {\n    text-decoration: none;\n}\na.subdued:last-child {\n    padding-right: 0;\n}\n.bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 9;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 5px;\n  width: 100%;\n  height: 44px;\n  border-width: 0;\n  border-style: solid;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid #ddd;\n  background-color: white;\n  background-size: 0;\n}\n@media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n.bar {\n      border: none;\n      background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n      background-position: bottom;\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n}\n}\n.bar.bar-clear {\n    border: none;\n    background: none;\n    color: #fff;\n}\n.bar.bar-clear .button {\n      color: #fff;\n}\n.bar.bar-clear .title {\n      color: #fff;\n}\n.bar.item-input-inset .item-input-wrapper {\n    margin-top: -1px;\n}\n.bar.item-input-inset .item-input-wrapper input {\n      padding-left: 8px;\n      width: 94%;\n      height: 28px;\n      background: transparent;\n}\n.bar.bar-light {\n    border-color: #ddd;\n    background-color: white;\n    background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n    color: #444;\n}\n.bar.bar-light .title {\n      color: #444;\n}\n.bar.bar-light.bar-footer {\n      background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%);\n}\n.bar.bar-stable {\n    border-color: #b2b2b2;\n    background-color: #f8f8f8;\n    background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n    color: #444;\n}\n.bar.bar-stable .title {\n      color: #444;\n}\n.bar.bar-stable.bar-footer {\n      background-image: linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n}\n.bar.bar-positive {\n    border-color: #979797;\n    background-color: #979797;\n    background-image: linear-gradient(0deg, #979797, #979797 50%, transparent 50%);\n    color: #fff;\n}\n.bar.bar-positive .title {\n      color: #fff;\n}\n.bar.bar-positive.bar-footer {\n      background-image: linear-gradient(180deg, #979797, #979797 50%, transparent 50%);\n}\n.bar.bar-calm {\n    border-color: #0a9dc7;\n    background-color: #11c1f3;\n    background-image: linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%);\n    color: #fff;\n}\n.bar.bar-calm .title {\n      color: #fff;\n}\n.bar.bar-calm.bar-footer {\n      background-image: linear-gradient(180deg, #0a9dc7, #0a9dc7 50%, transparent 50%);\n}\n.bar.bar-assertive {\n    border-color: #e42112;\n    background-color: #ef473a;\n    background-image: linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%);\n    color: #fff;\n}\n.bar.bar-assertive .title {\n      color: #fff;\n}\n.bar.bar-assertive.bar-footer {\n      background-image: linear-gradient(180deg, #e42112, #e42112 50%, transparent 50%);\n}\n.bar.bar-balanced {\n    border-color: #28a54c;\n    background-color: #33cd5f;\n    background-image: linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%);\n    color: #fff;\n}\n.bar.bar-balanced .title {\n      color: #fff;\n}\n.bar.bar-balanced.bar-footer {\n      background-image: linear-gradient(180deg, #28a54c, #979797 50%, transparent 50%);\n}\n.bar.bar-energized {\n    border-color: #e6b500;\n    background-color: #ffc900;\n    background-image: linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%);\n    color: #fff;\n}\n.bar.bar-energized .title {\n      color: #fff;\n}\n.bar.bar-energized.bar-footer {\n      background-image: linear-gradient(180deg, #e6b500, #e6b500 50%, transparent 50%);\n}\n.bar.bar-royal {\n    border-color: #6b46e5;\n    background-color: #886aea;\n    background-image: linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%);\n    color: #fff;\n}\n.bar.bar-royal .title {\n      color: #fff;\n}\n.bar.bar-royal.bar-footer {\n      background-image: linear-gradient(180deg, #6b46e5, #6b46e5 50%, transparent 50%);\n}\n.bar.bar-dark {\n    border-color: #111;\n    background-color: #444444;\n    background-image: linear-gradient(0deg, #111, #111 50%, transparent 50%);\n    color: #fff;\n}\n.bar.bar-dark .title {\n      color: #fff;\n}\n.bar.bar-dark.bar-footer {\n      background-image: linear-gradient(180deg, #111, #111 50%, transparent 50%);\n}\n.bar .title {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 0;\n    overflow: hidden;\n    margin: 0 10px;\n    min-width: 30px;\n    height: 43px;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 17px;\n    font-weight: 500;\n    line-height: 44px;\n}\n.bar .title.title-left {\n      text-align: left;\n}\n.bar .title.title-right {\n      text-align: right;\n}\n.bar .title a {\n    color: inherit;\n}\n.bar .button {\n    z-index: 1;\n    padding: 0 8px;\n    min-width: initial;\n    min-height: 31px;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 32px;\n}\n.bar .button.button-icon:before,\n    .bar .button .icon:before, .bar .button.icon:before, .bar .button.icon-left:before, .bar .button.icon-right:before {\n      padding-right: 2px;\n      padding-left: 2px;\n      font-size: 20px;\n      line-height: 32px;\n}\n.bar .button.button-icon {\n      font-size: 17px;\n}\n.bar .button.button-icon .icon:before, .bar .button.button-icon:before, .bar .button.button-icon.icon-left:before, .bar .button.button-icon.icon-right:before {\n        vertical-align: top;\n        font-size: 32px;\n        line-height: 32px;\n}\n.bar .button.button-clear {\n      padding-right: 2px;\n      padding-left: 2px;\n      font-weight: 300;\n      font-size: 17px;\n}\n.bar .button.button-clear .icon:before, .bar .button.button-clear.icon:before, .bar .button.button-clear.icon-left:before, .bar .button.button-clear.icon-right:before {\n        font-size: 32px;\n        line-height: 32px;\n}\n.bar .button.back-button {\n      display: block;\n      margin-right: 5px;\n      padding: 0;\n      white-space: nowrap;\n      font-weight: 400;\n}\n.bar .button.back-button.active, .bar .button.back-button.activated {\n      opacity: 0.2;\n}\n.bar .button-bar > .button,\n  .bar .buttons > .button {\n    min-height: 31px;\n    line-height: 32px;\n}\n.bar .button-bar + .button,\n  .bar .button + .button-bar {\n    margin-left: 5px;\n}\n.bar .buttons,\n  .bar .buttons.primary-buttons,\n  .bar .buttons.secondary-buttons {\n    display: inherit;\n}\n.bar .buttons span {\n    display: inline-block;\n}\n.bar .buttons-left span {\n    margin-right: 5px;\n    display: inherit;\n}\n.bar .buttons-right span {\n    margin-left: 5px;\n    display: inherit;\n}\n.bar .title + .button:last-child,\n  .bar > .button + .button:last-child,\n  .bar > .button.pull-right,\n  .bar .buttons.pull-right,\n  .bar .title + .buttons {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    bottom: 5px;\n}\n.platform-android .nav-bar-has-subheader .bar {\n  background-image: none;\n}\n.platform-android .bar .back-button .icon:before {\n  font-size: 24px;\n}\n.platform-android .bar .title {\n  font-size: 19px;\n  line-height: 44px;\n}\n.bar-light .button {\n  border-color: #ddd;\n  background-color: white;\n  color: #444;\n}\n.bar-light .button:hover {\n    color: #444;\n    text-decoration: none;\n}\n.bar-light .button.active, .bar-light .button.activated {\n    border-color: #ccc;\n    background-color: #fafafa;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-light .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #444;\n    font-size: 17px;\n}\n.bar-light .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-stable .button {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  color: #444;\n}\n.bar-stable .button:hover {\n    color: #444;\n    text-decoration: none;\n}\n.bar-stable .button.active, .bar-stable .button.activated {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-stable .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #444;\n    font-size: 17px;\n}\n.bar-stable .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-positive .button {\n  border-color: #979797;\n  background-color: #979797;\n  color: #fff;\n}\n.bar-positive .button:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.bar-positive .button.active, .bar-positive .button.activated {\n    border-color: #7e7e7e;\n    background-color: #7e7e7e;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-positive .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px;\n}\n.bar-positive .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-calm .button {\n  border-color: #0a9dc7;\n  background-color: #11c1f3;\n  color: #fff;\n}\n.bar-calm .button:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.bar-calm .button.active, .bar-calm .button.activated {\n    border-color: #0a9dc7;\n    background-color: #0a9dc7;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-calm .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px;\n}\n.bar-calm .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-assertive .button {\n  border-color: #e42112;\n  background-color: #ef473a;\n  color: #fff;\n}\n.bar-assertive .button:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.bar-assertive .button.active, .bar-assertive .button.activated {\n    border-color: #e42112;\n    background-color: #e42112;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-assertive .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px;\n}\n.bar-assertive .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-balanced .button {\n  border-color: #28a54c;\n  background-color: #33cd5f;\n  color: #fff;\n}\n.bar-balanced .button:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.bar-balanced .button.active, .bar-balanced .button.activated {\n    border-color: #28a54c;\n    background-color: #28a54c;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-balanced .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px;\n}\n.bar-balanced .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-energized .button {\n  border-color: #e6b500;\n  background-color: #ffc900;\n  color: #fff;\n}\n.bar-energized .button:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.bar-energized .button.active, .bar-energized .button.activated {\n    border-color: #e6b500;\n    background-color: #e6b500;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-energized .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px;\n}\n.bar-energized .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-royal .button {\n  border-color: #6b46e5;\n  background-color: #886aea;\n  color: #fff;\n}\n.bar-royal .button:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.bar-royal .button.active, .bar-royal .button.activated {\n    border-color: #6b46e5;\n    background-color: #6b46e5;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-royal .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px;\n}\n.bar-royal .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-dark .button {\n  border-color: #111;\n  background-color: #444444;\n  color: #fff;\n}\n.bar-dark .button:hover {\n    color: #fff;\n    text-decoration: none;\n}\n.bar-dark .button.active, .bar-dark .button.activated {\n    border-color: #000;\n    background-color: #262626;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.bar-dark .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px;\n}\n.bar-dark .button.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.bar-header {\n  top: 0;\n  border-top-width: 0;\n  border-bottom-width: 1px;\n}\n.bar-header.has-tabs-top {\n    border-bottom-width: 0px;\n    background-image: none;\n}\n.tabs-top .bar-header {\n  border-bottom-width: 0px;\n  background-image: none;\n}\n.bar-footer {\n  bottom: 0;\n  border-top-width: 1px;\n  border-bottom-width: 0;\n  background-position: top;\n  height: 44px;\n}\n.bar-footer.item-input-inset {\n    position: absolute;\n}\n.bar-tabs {\n  padding: 0;\n}\n.bar-subheader {\n  top: 44px;\n  display: block;\n  height: 44px;\n}\n.bar-subfooter {\n  bottom: 44px;\n  display: block;\n  height: 44px;\n}\n.nav-bar-block {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9;\n}\n.bar .back-button.hide,\n.bar .buttons .hide {\n  display: none;\n}\n.nav-bar-tabs-top .bar {\n  background-image: none;\n}\n.tabs {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: horizontal;\n  -moz-flex-direction: horizontal;\n  -ms-flex-direction: horizontal;\n  flex-direction: horizontal;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n  color: #444;\n  position: absolute;\n  bottom: 0;\n  z-index: 5;\n  width: 100%;\n  height: 49px;\n  border-style: solid;\n  border-top-width: 1px;\n  background-size: 0;\n  line-height: 49px;\n}\n.tabs .tab-item .badge {\n    background-color: #444;\n    color: #f8f8f8;\n}\n@media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n.tabs {\n      padding-top: 2px;\n      border-top: none !important;\n      border-bottom: none;\n      background-position: top;\n      background-size: 100% 1px;\n      background-repeat: no-repeat;\n}\n}\n.tabs-light > .tabs,\n.tabs.tabs-light {\n  border-color: #ddd;\n  background-color: #fff;\n  background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n  color: #444;\n}\n.tabs-light > .tabs .tab-item .badge,\n  .tabs.tabs-light .tab-item .badge {\n    background-color: #444;\n    color: #fff;\n}\n.tabs-stable > .tabs,\n.tabs.tabs-stable {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n  color: #444;\n}\n.tabs-stable > .tabs .tab-item .badge,\n  .tabs.tabs-stable .tab-item .badge {\n    background-color: #444;\n    color: #f8f8f8;\n}\n.tabs-positive > .tabs,\n.tabs.tabs-positive {\n  border-color: #979797;\n  background-color: #979797;\n  background-image: linear-gradient(0deg, #979797, #979797 50%, transparent 50%);\n  color: #fff;\n}\n.tabs-positive > .tabs .tab-item .badge,\n  .tabs.tabs-positive .tab-item .badge {\n    background-color: #fff;\n    color: #979797;\n}\n.tabs-calm > .tabs,\n.tabs.tabs-calm {\n  border-color: #0a9dc7;\n  background-color: #11c1f3;\n  background-image: linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%);\n  color: #fff;\n}\n.tabs-calm > .tabs .tab-item .badge,\n  .tabs.tabs-calm .tab-item .badge {\n    background-color: #fff;\n    color: #11c1f3;\n}\n.tabs-assertive > .tabs,\n.tabs.tabs-assertive {\n  border-color: #e42112;\n  background-color: #ef473a;\n  background-image: linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%);\n  color: #fff;\n}\n.tabs-assertive > .tabs .tab-item .badge,\n  .tabs.tabs-assertive .tab-item .badge {\n    background-color: #fff;\n    color: #ef473a;\n}\n.tabs-balanced > .tabs,\n.tabs.tabs-balanced {\n  border-color: #28a54c;\n  background-color: #33cd5f;\n  background-image: linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%);\n  color: #fff;\n}\n.tabs-balanced > .tabs .tab-item .badge,\n  .tabs.tabs-balanced .tab-item .badge {\n    background-color: #fff;\n    color: #33cd5f;\n}\n.tabs-energized > .tabs,\n.tabs.tabs-energized {\n  border-color: #e6b500;\n  background-color: #ffc900;\n  background-image: linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%);\n  color: #fff;\n}\n.tabs-energized > .tabs .tab-item .badge,\n  .tabs.tabs-energized .tab-item .badge {\n    background-color: #fff;\n    color: #ffc900;\n}\n.tabs-royal > .tabs,\n.tabs.tabs-royal {\n  border-color: #6b46e5;\n  background-color: #886aea;\n  background-image: linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%);\n  color: #fff;\n}\n.tabs-royal > .tabs .tab-item .badge,\n  .tabs.tabs-royal .tab-item .badge {\n    background-color: #fff;\n    color: #886aea;\n}\n.tabs-dark > .tabs,\n.tabs.tabs-dark {\n  border-color: #111;\n  background-color: #444;\n  background-image: linear-gradient(0deg, #111, #111 50%, transparent 50%);\n  color: #fff;\n}\n.tabs-dark > .tabs .tab-item .badge,\n  .tabs.tabs-dark .tab-item .badge {\n    background-color: #fff;\n    color: #444;\n}\n.tabs-striped .tabs {\n  background-color: white;\n  background-image: none;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  padding-top: 2px;\n}\n.tabs-striped .tab-item.tab-item-active, .tabs-striped .tab-item.active, .tabs-striped .tab-item.activated {\n  margin-top: -2px;\n  border-style: solid;\n  border-width: 2px 0 0 0;\n  border-color: #444;\n}\n.tabs-striped .tab-item.tab-item-active .badge, .tabs-striped .tab-item.active .badge, .tabs-striped .tab-item.activated .badge {\n    top: 2px;\n    opacity: 1;\n}\n.tabs-striped.tabs-light .tabs {\n  background-color: #fff;\n}\n.tabs-striped.tabs-light .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-light .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-light .tab-item.tab-item-active, .tabs-striped.tabs-light .tab-item.active, .tabs-striped.tabs-light .tab-item.activated {\n    margin-top: -2px;\n    color: #444;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #444;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-stable .tabs {\n  background-color: #f8f8f8;\n}\n.tabs-striped.tabs-stable .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-stable .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-stable .tab-item.tab-item-active, .tabs-striped.tabs-stable .tab-item.active, .tabs-striped.tabs-stable .tab-item.activated {\n    margin-top: -2px;\n    color: #444;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #444;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-positive .tabs {\n  background-color: #979797;\n}\n.tabs-striped.tabs-positive .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-positive .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-positive .tab-item.tab-item-active, .tabs-striped.tabs-positive .tab-item.active, .tabs-striped.tabs-positive .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-calm .tabs {\n  background-color: #11c1f3;\n}\n.tabs-striped.tabs-calm .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-calm .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-calm .tab-item.tab-item-active, .tabs-striped.tabs-calm .tab-item.active, .tabs-striped.tabs-calm .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-assertive .tabs {\n  background-color: #ef473a;\n}\n.tabs-striped.tabs-assertive .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-assertive .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-assertive .tab-item.tab-item-active, .tabs-striped.tabs-assertive .tab-item.active, .tabs-striped.tabs-assertive .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-balanced .tabs {\n  background-color: #33cd5f;\n}\n.tabs-striped.tabs-balanced .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-balanced .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-balanced .tab-item.tab-item-active, .tabs-striped.tabs-balanced .tab-item.active, .tabs-striped.tabs-balanced .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-energized .tabs {\n  background-color: #ffc900;\n}\n.tabs-striped.tabs-energized .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-energized .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-energized .tab-item.tab-item-active, .tabs-striped.tabs-energized .tab-item.active, .tabs-striped.tabs-energized .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-royal .tabs {\n  background-color: #886aea;\n}\n.tabs-striped.tabs-royal .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-royal .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-royal .tab-item.tab-item-active, .tabs-striped.tabs-royal .tab-item.active, .tabs-striped.tabs-royal .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-dark .tabs {\n  background-color: #444;\n}\n.tabs-striped.tabs-dark .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-dark .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-dark .tab-item.tab-item-active, .tabs-striped.tabs-dark .tab-item.active, .tabs-striped.tabs-dark .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff;\n}\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%;\n}\n.tabs-striped.tabs-background-light .tabs {\n  background-color: #fff;\n  background-image: none;\n}\n.tabs-striped.tabs-background-stable .tabs {\n  background-color: #f8f8f8;\n  background-image: none;\n}\n.tabs-striped.tabs-background-positive .tabs {\n  background-color: #979797;\n  background-image: none;\n}\n.tabs-striped.tabs-background-calm .tabs {\n  background-color: #11c1f3;\n  background-image: none;\n}\n.tabs-striped.tabs-background-assertive .tabs {\n  background-color: #ef473a;\n  background-image: none;\n}\n.tabs-striped.tabs-background-balanced .tabs {\n  background-color: #33cd5f;\n  background-image: none;\n}\n.tabs-striped.tabs-background-energized .tabs {\n  background-color: #ffc900;\n  background-image: none;\n}\n.tabs-striped.tabs-background-royal .tabs {\n  background-color: #886aea;\n  background-image: none;\n}\n.tabs-striped.tabs-background-dark .tabs {\n  background-color: #444;\n  background-image: none;\n}\n.tabs-striped.tabs-color-light .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-light .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-light .tab-item.tab-item-active, .tabs-striped.tabs-color-light .tab-item.active, .tabs-striped.tabs-color-light .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border: 0 solid #fff;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-light .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-light .tab-item.active .badge, .tabs-striped.tabs-color-light .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-stable .tab-item {\n  color: rgba(248, 248, 248, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-stable .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-stable .tab-item.tab-item-active, .tabs-striped.tabs-color-stable .tab-item.active, .tabs-striped.tabs-color-stable .tab-item.activated {\n    margin-top: -2px;\n    color: #f8f8f8;\n    border: 0 solid #f8f8f8;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-stable .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-stable .tab-item.active .badge, .tabs-striped.tabs-color-stable .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-positive .tab-item {\n  color: rgba(151, 151, 151, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-positive .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-positive .tab-item.tab-item-active, .tabs-striped.tabs-color-positive .tab-item.active, .tabs-striped.tabs-color-positive .tab-item.activated {\n    margin-top: -2px;\n    color: #979797;\n    border: 0 solid #979797;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-positive .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-positive .tab-item.active .badge, .tabs-striped.tabs-color-positive .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-calm .tab-item {\n  color: rgba(17, 193, 243, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-calm .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-calm .tab-item.tab-item-active, .tabs-striped.tabs-color-calm .tab-item.active, .tabs-striped.tabs-color-calm .tab-item.activated {\n    margin-top: -2px;\n    color: #11c1f3;\n    border: 0 solid #11c1f3;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-calm .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-calm .tab-item.active .badge, .tabs-striped.tabs-color-calm .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-assertive .tab-item {\n  color: rgba(239, 71, 58, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-assertive .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-assertive .tab-item.tab-item-active, .tabs-striped.tabs-color-assertive .tab-item.active, .tabs-striped.tabs-color-assertive .tab-item.activated {\n    margin-top: -2px;\n    color: #ef473a;\n    border: 0 solid #ef473a;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-assertive .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-assertive .tab-item.active .badge, .tabs-striped.tabs-color-assertive .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-balanced .tab-item {\n  color: rgba(51, 205, 95, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-balanced .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-balanced .tab-item.tab-item-active, .tabs-striped.tabs-color-balanced .tab-item.active, .tabs-striped.tabs-color-balanced .tab-item.activated {\n    margin-top: -2px;\n    color: #33cd5f;\n    border: 0 solid #33cd5f;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-balanced .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-balanced .tab-item.active .badge, .tabs-striped.tabs-color-balanced .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-energized .tab-item {\n  color: rgba(255, 201, 0, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-energized .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-energized .tab-item.tab-item-active, .tabs-striped.tabs-color-energized .tab-item.active, .tabs-striped.tabs-color-energized .tab-item.activated {\n    margin-top: -2px;\n    color: #ffc900;\n    border: 0 solid #ffc900;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-energized .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-energized .tab-item.active .badge, .tabs-striped.tabs-color-energized .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-royal .tab-item {\n  color: rgba(136, 106, 234, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-royal .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-royal .tab-item.tab-item-active, .tabs-striped.tabs-color-royal .tab-item.active, .tabs-striped.tabs-color-royal .tab-item.activated {\n    margin-top: -2px;\n    color: #886aea;\n    border: 0 solid #886aea;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-royal .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-royal .tab-item.active .badge, .tabs-striped.tabs-color-royal .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-striped.tabs-color-dark .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1;\n}\n.tabs-striped.tabs-color-dark .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-striped.tabs-color-dark .tab-item.tab-item-active, .tabs-striped.tabs-color-dark .tab-item.active, .tabs-striped.tabs-color-dark .tab-item.activated {\n    margin-top: -2px;\n    color: #444;\n    border: 0 solid #444;\n    border-top-width: 2px;\n}\n.tabs-striped.tabs-color-dark .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-dark .tab-item.active .badge, .tabs-striped.tabs-color-dark .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1;\n}\n.tabs-background-light .tabs,\n.tabs-background-light > .tabs {\n  background-color: #fff;\n  background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n  border-color: #ddd;\n}\n.tabs-background-stable .tabs,\n.tabs-background-stable > .tabs {\n  background-color: #f8f8f8;\n  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n  border-color: #b2b2b2;\n}\n.tabs-background-positive .tabs,\n.tabs-background-positive > .tabs {\n  background-color: #979797;\n  background-image: linear-gradient(0deg, #979797, #979797 50%, transparent 50%);\n  border-color: #979797;\n}\n.tabs-background-calm .tabs,\n.tabs-background-calm > .tabs {\n  background-color: #11c1f3;\n  background-image: linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%);\n  border-color: #0a9dc7;\n}\n.tabs-background-assertive .tabs,\n.tabs-background-assertive > .tabs {\n  background-color: #ef473a;\n  background-image: linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%);\n  border-color: #e42112;\n}\n.tabs-background-balanced .tabs,\n.tabs-background-balanced > .tabs {\n  background-color: #33cd5f;\n  background-image: linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%);\n  border-color: #28a54c;\n}\n.tabs-background-energized .tabs,\n.tabs-background-energized > .tabs {\n  background-color: #ffc900;\n  background-image: linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%);\n  border-color: #e6b500;\n}\n.tabs-background-royal .tabs,\n.tabs-background-royal > .tabs {\n  background-color: #886aea;\n  background-image: linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%);\n  border-color: #6b46e5;\n}\n.tabs-background-dark .tabs,\n.tabs-background-dark > .tabs {\n  background-color: #444;\n  background-image: linear-gradient(0deg, #111, #111 50%, transparent 50%);\n  border-color: #111;\n}\n.tabs-color-light .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1;\n}\n.tabs-color-light .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-light .tab-item.tab-item-active, .tabs-color-light .tab-item.active, .tabs-color-light .tab-item.activated {\n    color: #fff;\n    border: 0 solid #fff;\n}\n.tabs-color-light .tab-item.tab-item-active .badge, .tabs-color-light .tab-item.active .badge, .tabs-color-light .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-stable .tab-item {\n  color: rgba(248, 248, 248, 0.4);\n  opacity: 1;\n}\n.tabs-color-stable .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-stable .tab-item.tab-item-active, .tabs-color-stable .tab-item.active, .tabs-color-stable .tab-item.activated {\n    color: #f8f8f8;\n    border: 0 solid #f8f8f8;\n}\n.tabs-color-stable .tab-item.tab-item-active .badge, .tabs-color-stable .tab-item.active .badge, .tabs-color-stable .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-positive .tab-item {\n  color: rgba(151, 151, 151, 0.4);\n  opacity: 1;\n}\n.tabs-color-positive .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-positive .tab-item.tab-item-active, .tabs-color-positive .tab-item.active, .tabs-color-positive .tab-item.activated {\n    color: #979797;\n    border: 0 solid #979797;\n}\n.tabs-color-positive .tab-item.tab-item-active .badge, .tabs-color-positive .tab-item.active .badge, .tabs-color-positive .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-calm .tab-item {\n  color: rgba(17, 193, 243, 0.4);\n  opacity: 1;\n}\n.tabs-color-calm .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-calm .tab-item.tab-item-active, .tabs-color-calm .tab-item.active, .tabs-color-calm .tab-item.activated {\n    color: #11c1f3;\n    border: 0 solid #11c1f3;\n}\n.tabs-color-calm .tab-item.tab-item-active .badge, .tabs-color-calm .tab-item.active .badge, .tabs-color-calm .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-assertive .tab-item {\n  color: rgba(239, 71, 58, 0.4);\n  opacity: 1;\n}\n.tabs-color-assertive .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-assertive .tab-item.tab-item-active, .tabs-color-assertive .tab-item.active, .tabs-color-assertive .tab-item.activated {\n    color: #ef473a;\n    border: 0 solid #ef473a;\n}\n.tabs-color-assertive .tab-item.tab-item-active .badge, .tabs-color-assertive .tab-item.active .badge, .tabs-color-assertive .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-balanced .tab-item {\n  color: rgba(51, 205, 95, 0.4);\n  opacity: 1;\n}\n.tabs-color-balanced .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-balanced .tab-item.tab-item-active, .tabs-color-balanced .tab-item.active, .tabs-color-balanced .tab-item.activated {\n    color: #33cd5f;\n    border: 0 solid #33cd5f;\n}\n.tabs-color-balanced .tab-item.tab-item-active .badge, .tabs-color-balanced .tab-item.active .badge, .tabs-color-balanced .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-energized .tab-item {\n  color: rgba(255, 201, 0, 0.4);\n  opacity: 1;\n}\n.tabs-color-energized .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-energized .tab-item.tab-item-active, .tabs-color-energized .tab-item.active, .tabs-color-energized .tab-item.activated {\n    color: #ffc900;\n    border: 0 solid #ffc900;\n}\n.tabs-color-energized .tab-item.tab-item-active .badge, .tabs-color-energized .tab-item.active .badge, .tabs-color-energized .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-royal .tab-item {\n  color: rgba(136, 106, 234, 0.4);\n  opacity: 1;\n}\n.tabs-color-royal .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-royal .tab-item.tab-item-active, .tabs-color-royal .tab-item.active, .tabs-color-royal .tab-item.activated {\n    color: #886aea;\n    border: 0 solid #886aea;\n}\n.tabs-color-royal .tab-item.tab-item-active .badge, .tabs-color-royal .tab-item.active .badge, .tabs-color-royal .tab-item.activated .badge {\n      opacity: 1;\n}\n.tabs-color-dark .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1;\n}\n.tabs-color-dark .tab-item .badge {\n    opacity: 0.4;\n}\n.tabs-color-dark .tab-item.tab-item-active, .tabs-color-dark .tab-item.active, .tabs-color-dark .tab-item.activated {\n    color: #444;\n    border: 0 solid #444;\n}\n.tabs-color-dark .tab-item.tab-item-active .badge, .tabs-color-dark .tab-item.active .badge, .tabs-color-dark .tab-item.activated .badge {\n      opacity: 1;\n}\nion-tabs.tabs-color-active-light .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-light .tab-item.tab-item-active, ion-tabs.tabs-color-active-light .tab-item.active, ion-tabs.tabs-color-active-light .tab-item.activated {\n    color: #fff;\n}\nion-tabs.tabs-color-active-stable .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-stable .tab-item.tab-item-active, ion-tabs.tabs-color-active-stable .tab-item.active, ion-tabs.tabs-color-active-stable .tab-item.activated {\n    color: #f8f8f8;\n}\nion-tabs.tabs-color-active-positive .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-positive .tab-item.tab-item-active, ion-tabs.tabs-color-active-positive .tab-item.active, ion-tabs.tabs-color-active-positive .tab-item.activated {\n    color: #979797;\n}\nion-tabs.tabs-color-active-calm .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-calm .tab-item.tab-item-active, ion-tabs.tabs-color-active-calm .tab-item.active, ion-tabs.tabs-color-active-calm .tab-item.activated {\n    color: #11c1f3;\n}\nion-tabs.tabs-color-active-assertive .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-assertive .tab-item.tab-item-active, ion-tabs.tabs-color-active-assertive .tab-item.active, ion-tabs.tabs-color-active-assertive .tab-item.activated {\n    color: #ef473a;\n}\nion-tabs.tabs-color-active-balanced .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-balanced .tab-item.tab-item-active, ion-tabs.tabs-color-active-balanced .tab-item.active, ion-tabs.tabs-color-active-balanced .tab-item.activated {\n    color: #33cd5f;\n}\nion-tabs.tabs-color-active-energized .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-energized .tab-item.tab-item-active, ion-tabs.tabs-color-active-energized .tab-item.active, ion-tabs.tabs-color-active-energized .tab-item.activated {\n    color: #ffc900;\n}\nion-tabs.tabs-color-active-royal .tab-item {\n  color: #444;\n}\nion-tabs.tabs-color-active-royal .tab-item.tab-item-active, ion-tabs.tabs-color-active-royal .tab-item.active, ion-tabs.tabs-color-active-royal .tab-item.activated {\n    color: #886aea;\n}\nion-tabs.tabs-color-active-dark .tab-item {\n  color: #fff;\n}\nion-tabs.tabs-color-active-dark .tab-item.tab-item-active, ion-tabs.tabs-color-active-dark .tab-item.active, ion-tabs.tabs-color-active-dark .tab-item.activated {\n    color: #444;\n}\n.tabs-top.tabs-striped {\n  padding-bottom: 0;\n}\n.tabs-top.tabs-striped .tab-item {\n    background: transparent;\n    -webkit-transition: color .1s ease;\n    -moz-transition: color .1s ease;\n    -ms-transition: color .1s ease;\n    -o-transition: color .1s ease;\n    transition: color .1s ease;\n}\n.tabs-top.tabs-striped .tab-item.tab-item-active, .tabs-top.tabs-striped .tab-item.active, .tabs-top.tabs-striped .tab-item.activated {\n      margin-top: 1px;\n      border-width: 0px 0px 2px 0px !important;\n      border-style: solid;\n}\n.tabs-top.tabs-striped .tab-item.tab-item-active > .badge, .tabs-top.tabs-striped .tab-item.tab-item-active > i, .tabs-top.tabs-striped .tab-item.active > .badge, .tabs-top.tabs-striped .tab-item.active > i, .tabs-top.tabs-striped .tab-item.activated > .badge, .tabs-top.tabs-striped .tab-item.activated > i {\n        margin-top: -1px;\n}\n.tabs-top.tabs-striped .tab-item .badge {\n      -webkit-transition: color .2s ease;\n      -moz-transition: color .2s ease;\n      -ms-transition: color .2s ease;\n      -o-transition: color .2s ease;\n      transition: color .2s ease;\n}\n.tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.tab-item-active .tab-title, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.tab-item-active i, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.active .tab-title, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.active i, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.activated .tab-title, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.activated i {\n    display: block;\n    margin-top: -1px;\n}\n.tabs-top.tabs-striped.tabs-icon-left .tab-item {\n    margin-top: 1px;\n}\n.tabs-top.tabs-striped.tabs-icon-left .tab-item.tab-item-active .tab-title, .tabs-top.tabs-striped.tabs-icon-left .tab-item.tab-item-active i, .tabs-top.tabs-striped.tabs-icon-left .tab-item.active .tab-title, .tabs-top.tabs-striped.tabs-icon-left .tab-item.active i, .tabs-top.tabs-striped.tabs-icon-left .tab-item.activated .tab-title, .tabs-top.tabs-striped.tabs-icon-left .tab-item.activated i {\n      margin-top: -0.1em;\n}\n.tabs-top > .tabs,\n.tabs.tabs-top {\n  top: 44px;\n  padding-top: 0;\n  background-position: bottom;\n  border-top-width: 0;\n  border-bottom-width: 1px;\n}\n.tabs-top > .tabs .tab-item.tab-item-active .badge, .tabs-top > .tabs .tab-item.active .badge, .tabs-top > .tabs .tab-item.activated .badge,\n  .tabs.tabs-top .tab-item.tab-item-active .badge,\n  .tabs.tabs-top .tab-item.active .badge,\n  .tabs.tabs-top .tab-item.activated .badge {\n    top: 4%;\n}\n.tabs-top ~ .bar-header {\n  border-bottom-width: 0;\n}\n.tab-item {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  overflow: hidden;\n  max-width: 150px;\n  height: 100%;\n  color: inherit;\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  opacity: 0.7;\n}\n.tab-item:hover {\n    cursor: pointer;\n}\n.tab-item.tab-hidden {\n    display: none;\n}\n.tabs-item-hide > .tabs,\n.tabs.tabs-item-hide {\n  display: none;\n}\n.tabs-icon-top > .tabs .tab-item,\n.tabs-icon-top.tabs .tab-item,\n.tabs-icon-bottom > .tabs .tab-item,\n.tabs-icon-bottom.tabs .tab-item {\n  font-size: 10px;\n  line-height: 14px;\n}\n.tab-item .icon {\n  display: block;\n  margin: 0 auto;\n  height: 32px;\n  font-size: 32px;\n}\n.tabs-icon-left.tabs .tab-item,\n.tabs-icon-left > .tabs .tab-item,\n.tabs-icon-right.tabs .tab-item,\n.tabs-icon-right > .tabs .tab-item {\n  font-size: 10px;\n}\n.tabs-icon-left.tabs .tab-item .icon, .tabs-icon-left.tabs .tab-item .tab-title,\n  .tabs-icon-left > .tabs .tab-item .icon,\n  .tabs-icon-left > .tabs .tab-item .tab-title,\n  .tabs-icon-right.tabs .tab-item .icon,\n  .tabs-icon-right.tabs .tab-item .tab-title,\n  .tabs-icon-right > .tabs .tab-item .icon,\n  .tabs-icon-right > .tabs .tab-item .tab-title {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: -.1em;\n}\n.tabs-icon-left.tabs .tab-item .icon:before, .tabs-icon-left.tabs .tab-item .tab-title:before,\n    .tabs-icon-left > .tabs .tab-item .icon:before,\n    .tabs-icon-left > .tabs .tab-item .tab-title:before,\n    .tabs-icon-right.tabs .tab-item .icon:before,\n    .tabs-icon-right.tabs .tab-item .tab-title:before,\n    .tabs-icon-right > .tabs .tab-item .icon:before,\n    .tabs-icon-right > .tabs .tab-item .tab-title:before {\n      font-size: 24px;\n      line-height: 49px;\n}\n.tabs-icon-left > .tabs .tab-item .icon,\n.tabs-icon-left.tabs .tab-item .icon {\n  padding-right: 3px;\n}\n.tabs-icon-right > .tabs .tab-item .icon,\n.tabs-icon-right.tabs .tab-item .icon {\n  padding-left: 3px;\n}\n.tabs-icon-only > .tabs .icon,\n.tabs-icon-only.tabs .icon {\n  line-height: inherit;\n}\n.tab-item.has-badge {\n  position: relative;\n}\n.tab-item .badge {\n  position: absolute;\n  top: 4%;\n  right: 33%;\n  right: calc(50% - 26px);\n  padding: 1px 6px;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px;\n}\n.tab-item.tab-item-active,\n.tab-item.active,\n.tab-item.activated {\n  opacity: 1;\n}\n.tab-item.tab-item-active.tab-item-light,\n  .tab-item.active.tab-item-light,\n  .tab-item.activated.tab-item-light {\n    color: #fff;\n}\n.tab-item.tab-item-active.tab-item-stable,\n  .tab-item.active.tab-item-stable,\n  .tab-item.activated.tab-item-stable {\n    color: #f8f8f8;\n}\n.tab-item.tab-item-active.tab-item-positive,\n  .tab-item.active.tab-item-positive,\n  .tab-item.activated.tab-item-positive {\n    color: #979797;\n}\n.tab-item.tab-item-active.tab-item-calm,\n  .tab-item.active.tab-item-calm,\n  .tab-item.activated.tab-item-calm {\n    color: #11c1f3;\n}\n.tab-item.tab-item-active.tab-item-assertive,\n  .tab-item.active.tab-item-assertive,\n  .tab-item.activated.tab-item-assertive {\n    color: #ef473a;\n}\n.tab-item.tab-item-active.tab-item-balanced,\n  .tab-item.active.tab-item-balanced,\n  .tab-item.activated.tab-item-balanced {\n    color: #33cd5f;\n}\n.tab-item.tab-item-active.tab-item-energized,\n  .tab-item.active.tab-item-energized,\n  .tab-item.activated.tab-item-energized {\n    color: #ffc900;\n}\n.tab-item.tab-item-active.tab-item-royal,\n  .tab-item.active.tab-item-royal,\n  .tab-item.activated.tab-item-royal {\n    color: #886aea;\n}\n.tab-item.tab-item-active.tab-item-dark,\n  .tab-item.active.tab-item-dark,\n  .tab-item.activated.tab-item-dark {\n    color: #444;\n}\n.item.tabs {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n}\n.item.tabs .icon:before {\n    position: relative;\n}\n.tab-item.disabled,\n.tab-item[disabled] {\n  opacity: .4;\n  cursor: default;\n  pointer-events: none;\n}\n.nav-bar-tabs-top.hide ~ .view-container .tabs-top .tabs {\n  top: 0;\n}\n.pane[hide-nav-bar=\"true\"] .has-tabs-top {\n  top: 49px;\n}\n.menu {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 0;\n  overflow: hidden;\n  min-height: 100%;\n  max-height: 100%;\n  width: 275px;\n  background-color: #fff;\n}\n.menu .scroll-content {\n    z-index: 10;\n}\n.menu .bar-header {\n    z-index: 11;\n}\n.menu-content {\n  -webkit-transform: none;\n  transform: none;\n  box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.2), 1px 0px 2px rgba(0, 0, 0, 0.2);\n}\n.menu-open .menu-content .pane,\n.menu-open .menu-content .scroll-content {\n  pointer-events: none;\n  overflow: hidden;\n}\n.grade-b .menu-content,\n.grade-c .menu-content {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  right: -1px;\n  left: -1px;\n  border-right: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  box-shadow: none;\n}\n.menu-left {\n  left: 0;\n}\n.menu-right {\n  right: 0;\n}\n.aside-open.aside-resizing .menu-right {\n  display: none;\n}\n.menu-animated {\n  -webkit-transition: -webkit-transform 200ms ease;\n  transition: transform 200ms ease;\n}\n.modal-backdrop,\n.modal-backdrop-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n}\n.modal-backdrop-bg {\n  pointer-events: none;\n}\n.modal {\n  display: block;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  overflow: hidden;\n  min-height: 100%;\n  width: 100%;\n  background-color: #fff;\n}\n@media (min-width: 680px) {\n.modal {\n    top: 20%;\n    right: 20%;\n    bottom: 20%;\n    left: 20%;\n    min-height: 240px;\n    width: 60%;\n}\n.modal.ng-leave-active {\n    bottom: 0;\n}\n.platform-ios.platform-cordova .modal-wrapper .modal .bar-header:not(.bar-subheader) {\n    height: 44px;\n}\n.platform-ios.platform-cordova .modal-wrapper .modal .bar-header:not(.bar-subheader) > * {\n      margin-top: 0;\n}\n.platform-ios.platform-cordova .modal-wrapper .modal .tabs-top > .tabs,\n  .platform-ios.platform-cordova .modal-wrapper .modal .tabs.tabs-top {\n    top: 44px;\n}\n.platform-ios.platform-cordova .modal-wrapper .modal .has-header,\n  .platform-ios.platform-cordova .modal-wrapper .modal .bar-subheader {\n    top: 44px;\n}\n.platform-ios.platform-cordova .modal-wrapper .modal .has-subheader {\n    top: 88px;\n}\n.platform-ios.platform-cordova .modal-wrapper .modal .has-header.has-tabs-top {\n    top: 93px;\n}\n.platform-ios.platform-cordova .modal-wrapper .modal .has-header.has-subheader.has-tabs-top {\n    top: 137px;\n}\n}\n.modal-open {\n  pointer-events: none;\n}\n.modal-open .modal,\n  .modal-open .modal-backdrop {\n    pointer-events: auto;\n}\n.modal-open.loading-active .modal,\n  .modal-open.loading-active .modal-backdrop {\n    pointer-events: none;\n}\n.popover-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n}\n.popover-backdrop.active {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.popover {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  z-index: 10;\n  display: block;\n  margin-top: 12px;\n  margin-left: -110px;\n  height: 280px;\n  width: 220px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  opacity: 0;\n}\n.popover .item:first-child {\n    border-top: 0;\n}\n.popover .item:last-child {\n    border-bottom: 0;\n}\n.popover.popover-bottom {\n    margin-top: -12px;\n}\n.popover,\n.popover .bar-header {\n  border-radius: 2px;\n}\n.popover .scroll-content {\n  z-index: 1;\n  margin: 2px 0;\n}\n.popover .bar-header {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.popover .has-header {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.popover-arrow {\n  display: none;\n}\n.platform-ios .popover {\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n}\n.platform-ios .popover .bar-header {\n  -webkit-border-top-right-radius: 10px;\n  border-top-right-radius: 10px;\n  -webkit-border-top-left-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.platform-ios .popover .scroll-content {\n  margin: 8px 0;\n  border-radius: 10px;\n}\n.platform-ios .popover .scroll-content.has-header {\n  margin-top: 0;\n}\n.platform-ios .popover-arrow {\n  position: absolute;\n  display: block;\n  top: -17px;\n  width: 30px;\n  height: 19px;\n  overflow: hidden;\n}\n.platform-ios .popover-arrow:after {\n    position: absolute;\n    top: 12px;\n    left: 5px;\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border-radius: 3px;\n    content: '';\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n.platform-ios .popover-bottom .popover-arrow {\n  top: auto;\n  bottom: -10px;\n}\n.platform-ios .popover-bottom .popover-arrow:after {\n    top: -6px;\n}\n.platform-android .popover {\n  margin-top: -32px;\n  background-color: #fafafa;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n.platform-android .popover .item {\n    border-color: #fafafa;\n    background-color: #fafafa;\n    color: #4d4d4d;\n}\n.platform-android .popover.popover-bottom {\n    margin-top: 32px;\n}\n.platform-android .popover-backdrop,\n.platform-android .popover-backdrop.active {\n  background-color: transparent;\n}\n.popover-open {\n  pointer-events: none;\n}\n.popover-open .popover,\n  .popover-open .popover-backdrop {\n    pointer-events: auto;\n}\n.popover-open.loading-active .popover,\n  .popover-open.loading-active .popover-backdrop {\n    pointer-events: none;\n}\n@media (min-width: 680px) {\n.popover {\n    width: 360px;\n}\n}\n.popup-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  z-index: 12;\n  visibility: hidden;\n}\n.popup-container.popup-showing {\n    visibility: visible;\n}\n.popup-container.popup-hidden .popup {\n    -webkit-animation-name: scaleOut;\n    animation-name: scaleOut;\n    -webkit-animation-duration: 0.1s;\n    animation-duration: 0.1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.popup-container.active .popup {\n    -webkit-animation-name: superScaleIn;\n    animation-name: superScaleIn;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n.popup-container .popup {\n    width: 250px;\n    max-width: 100%;\n    max-height: 90%;\n    border-radius: 0px;\n    background-color: rgba(255, 255, 255, 0.9);\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -moz-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n.popup-container input,\n  .popup-container textarea {\n    width: 100%;\n}\n.popup-head {\n  padding: 15px 10px;\n  border-bottom: 1px solid #eee;\n  text-align: center;\n}\n.popup-title {\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n}\n.popup-sub-title {\n  margin: 5px 0 0 0;\n  padding: 0;\n  font-weight: normal;\n  font-size: 11px;\n}\n.popup-body {\n  padding: 10px;\n  overflow: auto;\n}\n.popup-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  padding: 10px;\n  min-height: 65px;\n}\n.popup-buttons .button {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -moz-box-flex: 1;\n    -moz-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    display: block;\n    min-height: 45px;\n    border-radius: 2px;\n    line-height: 20px;\n    margin-right: 5px;\n}\n.popup-buttons .button:last-child {\n      margin-right: 0px;\n}\n.popup-open {\n  pointer-events: none;\n}\n.popup-open.modal-open .modal {\n    pointer-events: none;\n}\n.popup-open .popup-backdrop, .popup-open .popup {\n    pointer-events: auto;\n}\n.loading-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 13;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  -webkit-transition: 0.2s opacity linear;\n  transition: 0.2s opacity linear;\n  visibility: hidden;\n  opacity: 0;\n}\n.loading-container:not(.visible) .icon,\n  .loading-container:not(.visible) .spinner {\n    display: none;\n}\n.loading-container.visible {\n    visibility: visible;\n}\n.loading-container.active {\n    opacity: 1;\n}\n.loading-container .loading {\n    padding: 20px;\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    text-align: center;\n    text-overflow: ellipsis;\n    font-size: 15px;\n}\n.loading-container .loading h1, .loading-container .loading h2, .loading-container .loading h3, .loading-container .loading h4, .loading-container .loading h5, .loading-container .loading h6 {\n      color: #fff;\n}\n.item {\n  border-color: #ddd;\n  background-color: #fff;\n  color: #444;\n  position: relative;\n  z-index: 2;\n  display: block;\n  margin: -1px;\n  padding: 16px;\n  border-width: 1px;\n  border-style: solid;\n  font-size: 16px;\n}\n.item h2 {\n    margin: 0 0 2px 0;\n    font-size: 16px;\n    font-weight: normal;\n}\n.item h3 {\n    margin: 0 0 4px 0;\n    font-size: 14px;\n}\n.item h4 {\n    margin: 0 0 4px 0;\n    font-size: 12px;\n}\n.item h5, .item h6 {\n    margin: 0 0 3px 0;\n    font-size: 10px;\n}\n.item p {\n    color: #666;\n    font-size: 14px;\n    margin-bottom: 2px;\n}\n.item h1:last-child,\n  .item h2:last-child,\n  .item h3:last-child,\n  .item h4:last-child,\n  .item h5:last-child,\n  .item h6:last-child,\n  .item p:last-child {\n    margin-bottom: 0;\n}\n.item .badge {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    top: 16px;\n    right: 32px;\n}\n.item.item-button-right .badge {\n    right: 67px;\n}\n.item.item-divider .badge {\n    top: 8px;\n}\n.item .badge + .badge {\n    margin-right: 5px;\n}\n.item.item-light {\n    border-color: #ddd;\n    background-color: #fff;\n    color: #444;\n}\n.item.item-stable {\n    border-color: #b2b2b2;\n    background-color: #f8f8f8;\n    color: #444;\n}\n.item.item-positive {\n    border-color: #979797;\n    background-color: #979797;\n    color: #fff;\n}\n.item.item-calm {\n    border-color: #0a9dc7;\n    background-color: #11c1f3;\n    color: #fff;\n}\n.item.item-assertive {\n    border-color: #e42112;\n    background-color: #ef473a;\n    color: #fff;\n}\n.item.item-balanced {\n    border-color: #28a54c;\n    background-color: #33cd5f;\n    color: #fff;\n}\n.item.item-energized {\n    border-color: #e6b500;\n    background-color: #ffc900;\n    color: #fff;\n}\n.item.item-royal {\n    border-color: #6b46e5;\n    background-color: #886aea;\n    color: #fff;\n}\n.item.item-dark {\n    border-color: #111;\n    background-color: #444;\n    color: #fff;\n}\n.item[ng-click]:hover {\n    cursor: pointer;\n}\n.list-borderless .item,\n.item-borderless {\n  border-width: 0;\n}\n.item.active,\n.item.activated,\n.item-complex.active .item-content,\n.item-complex.activated .item-content,\n.item .item-content.active,\n.item .item-content.activated {\n  border-color: #ccc;\n  background-color: #D9D9D9;\n}\n.item.active.item-light,\n  .item.activated.item-light,\n  .item-complex.active .item-content.item-light,\n  .item-complex.activated .item-content.item-light,\n  .item .item-content.active.item-light,\n  .item .item-content.activated.item-light {\n    border-color: #ccc;\n    background-color: #fafafa;\n}\n.item.active.item-stable,\n  .item.activated.item-stable,\n  .item-complex.active .item-content.item-stable,\n  .item-complex.activated .item-content.item-stable,\n  .item .item-content.active.item-stable,\n  .item .item-content.activated.item-stable {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5;\n}\n.item.active.item-positive,\n  .item.activated.item-positive,\n  .item-complex.active .item-content.item-positive,\n  .item-complex.activated .item-content.item-positive,\n  .item .item-content.active.item-positive,\n  .item .item-content.activated.item-positive {\n    border-color: #7e7e7e;\n    background-color: #7e7e7e;\n}\n.item.active.item-calm,\n  .item.activated.item-calm,\n  .item-complex.active .item-content.item-calm,\n  .item-complex.activated .item-content.item-calm,\n  .item .item-content.active.item-calm,\n  .item .item-content.activated.item-calm {\n    border-color: #0a9dc7;\n    background-color: #0a9dc7;\n}\n.item.active.item-assertive,\n  .item.activated.item-assertive,\n  .item-complex.active .item-content.item-assertive,\n  .item-complex.activated .item-content.item-assertive,\n  .item .item-content.active.item-assertive,\n  .item .item-content.activated.item-assertive {\n    border-color: #e42112;\n    background-color: #e42112;\n}\n.item.active.item-balanced,\n  .item.activated.item-balanced,\n  .item-complex.active .item-content.item-balanced,\n  .item-complex.activated .item-content.item-balanced,\n  .item .item-content.active.item-balanced,\n  .item .item-content.activated.item-balanced {\n    border-color: #28a54c;\n    background-color: #28a54c;\n}\n.item.active.item-energized,\n  .item.activated.item-energized,\n  .item-complex.active .item-content.item-energized,\n  .item-complex.activated .item-content.item-energized,\n  .item .item-content.active.item-energized,\n  .item .item-content.activated.item-energized {\n    border-color: #e6b500;\n    background-color: #e6b500;\n}\n.item.active.item-royal,\n  .item.activated.item-royal,\n  .item-complex.active .item-content.item-royal,\n  .item-complex.activated .item-content.item-royal,\n  .item .item-content.active.item-royal,\n  .item .item-content.activated.item-royal {\n    border-color: #6b46e5;\n    background-color: #6b46e5;\n}\n.item.active.item-dark,\n  .item.activated.item-dark,\n  .item-complex.active .item-content.item-dark,\n  .item-complex.activated .item-content.item-dark,\n  .item .item-content.active.item-dark,\n  .item .item-content.activated.item-dark {\n    border-color: #000;\n    background-color: #262626;\n}\n.item,\n.item h1,\n.item h2,\n.item h3,\n.item h4,\n.item h5,\n.item h6,\n.item p,\n.item-content,\n.item-content h1,\n.item-content h2,\n.item-content h3,\n.item-content h4,\n.item-content h5,\n.item-content h6,\n.item-content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\na.item {\n  color: inherit;\n  text-decoration: none;\n}\na.item:hover, a.item:focus {\n    text-decoration: none;\n}\n.item-complex,\na.item.item-complex,\nbutton.item.item-complex {\n  padding: 0;\n}\n.item-complex .item-content,\n.item-radio .item-content {\n  position: relative;\n  z-index: 2;\n  padding: 16px 49px 16px 16px;\n  border: none;\n  background-color: #fff;\n}\na.item-content {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n}\n.item-text-wrap .item,\n.item-text-wrap .item-content,\n.item-text-wrap,\n.item-text-wrap h1,\n.item-text-wrap h2,\n.item-text-wrap h3,\n.item-text-wrap h4,\n.item-text-wrap h5,\n.item-text-wrap h6,\n.item-text-wrap p,\n.item-complex.item-text-wrap .item-content,\n.item-body h1,\n.item-body h2,\n.item-body h3,\n.item-body h4,\n.item-body h5,\n.item-body h6,\n.item-body p {\n  overflow: visible;\n  white-space: normal;\n}\n.item-complex.item-text-wrap,\n.item-complex.item-text-wrap h1,\n.item-complex.item-text-wrap h2,\n.item-complex.item-text-wrap h3,\n.item-complex.item-text-wrap h4,\n.item-complex.item-text-wrap h5,\n.item-complex.item-text-wrap h6,\n.item-complex.item-text-wrap p {\n  overflow: visible;\n  white-space: normal;\n}\n.item-complex.item-light > .item-content {\n  border-color: #ddd;\n  background-color: #fff;\n  color: #444;\n}\n.item-complex.item-light > .item-content.active, .item-complex.item-light > .item-content:active {\n    border-color: #ccc;\n    background-color: #fafafa;\n}\n.item-complex.item-stable > .item-content {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  color: #444;\n}\n.item-complex.item-stable > .item-content.active, .item-complex.item-stable > .item-content:active {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5;\n}\n.item-complex.item-positive > .item-content {\n  border-color: #979797;\n  background-color: #979797;\n  color: #fff;\n}\n.item-complex.item-positive > .item-content.active, .item-complex.item-positive > .item-content:active {\n    border-color: #7e7e7e;\n    background-color: #7e7e7e;\n}\n.item-complex.item-calm > .item-content {\n  border-color: #0a9dc7;\n  background-color: #11c1f3;\n  color: #fff;\n}\n.item-complex.item-calm > .item-content.active, .item-complex.item-calm > .item-content:active {\n    border-color: #0a9dc7;\n    background-color: #0a9dc7;\n}\n.item-complex.item-assertive > .item-content {\n  border-color: #e42112;\n  background-color: #ef473a;\n  color: #fff;\n}\n.item-complex.item-assertive > .item-content.active, .item-complex.item-assertive > .item-content:active {\n    border-color: #e42112;\n    background-color: #e42112;\n}\n.item-complex.item-balanced > .item-content {\n  border-color: #28a54c;\n  background-color: #33cd5f;\n  color: #fff;\n}\n.item-complex.item-balanced > .item-content.active, .item-complex.item-balanced > .item-content:active {\n    border-color: #28a54c;\n    background-color: #28a54c;\n}\n.item-complex.item-energized > .item-content {\n  border-color: #e6b500;\n  background-color: #ffc900;\n  color: #fff;\n}\n.item-complex.item-energized > .item-content.active, .item-complex.item-energized > .item-content:active {\n    border-color: #e6b500;\n    background-color: #e6b500;\n}\n.item-complex.item-royal > .item-content {\n  border-color: #6b46e5;\n  background-color: #886aea;\n  color: #fff;\n}\n.item-complex.item-royal > .item-content.active, .item-complex.item-royal > .item-content:active {\n    border-color: #6b46e5;\n    background-color: #6b46e5;\n}\n.item-complex.item-dark > .item-content {\n  border-color: #111;\n  background-color: #444;\n  color: #fff;\n}\n.item-complex.item-dark > .item-content.active, .item-complex.item-dark > .item-content:active {\n    border-color: #000;\n    background-color: #262626;\n}\n.item-icon-left .icon,\n.item-icon-right .icon {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  font-size: 32px;\n}\n.item-icon-left .icon:before,\n  .item-icon-right .icon:before {\n    display: block;\n    width: 32px;\n    text-align: center;\n}\n.item .fill-icon {\n  min-width: 30px;\n  min-height: 30px;\n  font-size: 28px;\n}\n.item-icon-left {\n  padding-left: 54px;\n}\n.item-icon-left .icon {\n    left: 11px;\n}\n.item-complex.item-icon-left {\n  padding-left: 0;\n}\n.item-complex.item-icon-left .item-content {\n    padding-left: 54px;\n}\n.item-icon-right {\n  padding-right: 54px;\n}\n.item-icon-right .icon {\n    right: 11px;\n}\n.item-complex.item-icon-right {\n  padding-right: 0;\n}\n.item-complex.item-icon-right .item-content {\n    padding-right: 54px;\n}\n.item-icon-left.item-icon-right .icon:first-child {\n  right: auto;\n}\n.item-icon-left.item-icon-right .icon:last-child,\n.item-icon-left .item-delete .icon {\n  left: auto;\n}\n.item-icon-left .icon-accessory,\n.item-icon-right .icon-accessory {\n  color: #ccc;\n  font-size: 16px;\n}\n.item-icon-left .icon-accessory {\n  left: 3px;\n}\n.item-icon-right .icon-accessory {\n  right: 3px;\n}\n.item-button-left {\n  padding-left: 72px;\n}\n.item-button-left > .button,\n.item-button-left .item-content > .button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 8px;\n  left: 11px;\n  min-width: 34px;\n  min-height: 34px;\n  font-size: 18px;\n  line-height: 32px;\n}\n.item-button-left > .button .icon:before,\n  .item-button-left .item-content > .button .icon:before {\n    position: relative;\n    left: auto;\n    width: auto;\n    line-height: 31px;\n}\n.item-button-left > .button > .button,\n  .item-button-left .item-content > .button > .button {\n    margin: 0px 2px;\n    min-height: 34px;\n    font-size: 18px;\n    line-height: 32px;\n}\n.item-button-right,\na.item.item-button-right,\nbutton.item.item-button-right {\n  padding-right: 80px;\n}\n.item-button-right > .button,\n.item-button-right .item-content > .button,\n.item-button-right > .buttons,\n.item-button-right .item-content > .buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  min-width: 34px;\n  min-height: 34px;\n  font-size: 18px;\n  line-height: 32px;\n}\n.item-button-right > .button .icon:before,\n  .item-button-right .item-content > .button .icon:before,\n  .item-button-right > .buttons .icon:before,\n  .item-button-right .item-content > .buttons .icon:before {\n    position: relative;\n    left: auto;\n    width: auto;\n    line-height: 31px;\n}\n.item-button-right > .button > .button,\n  .item-button-right .item-content > .button > .button,\n  .item-button-right > .buttons > .button,\n  .item-button-right .item-content > .buttons > .button {\n    margin: 0px 2px;\n    min-width: 34px;\n    min-height: 34px;\n    font-size: 18px;\n    line-height: 32px;\n}\n.item-avatar,\n.item-avatar .item-content,\n.item-avatar-left,\n.item-avatar-left .item-content {\n  padding-left: 72px;\n  min-height: 72px;\n}\n.item-avatar > img:first-child,\n  .item-avatar .item-image,\n  .item-avatar .item-content > img:first-child,\n  .item-avatar .item-content .item-image,\n  .item-avatar-left > img:first-child,\n  .item-avatar-left .item-image,\n  .item-avatar-left .item-content > img:first-child,\n  .item-avatar-left .item-content .item-image {\n    position: absolute;\n    top: 16px;\n    left: 16px;\n    max-width: 40px;\n    max-height: 40px;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n.item-avatar-right,\n.item-avatar-right .item-content {\n  padding-right: 72px;\n  min-height: 72px;\n}\n.item-avatar-right > img:first-child,\n  .item-avatar-right .item-image,\n  .item-avatar-right .item-content > img:first-child,\n  .item-avatar-right .item-content .item-image {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    max-width: 40px;\n    max-height: 40px;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n.item-thumbnail-left,\n.item-thumbnail-left .item-content {\n  padding-top: 8px;\n  padding-left: 106px;\n  min-height: 100px;\n}\n.item-thumbnail-left > img:first-child,\n  .item-thumbnail-left .item-image,\n  .item-thumbnail-left .item-content > img:first-child,\n  .item-thumbnail-left .item-content .item-image {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    max-width: 80px;\n    max-height: 80px;\n    width: 100%;\n    height: 100%;\n}\n.item-avatar.item-complex,\n.item-avatar-left.item-complex,\n.item-thumbnail-left.item-complex {\n  padding-top: 0;\n  padding-left: 0;\n}\n.item-thumbnail-right,\n.item-thumbnail-right .item-content {\n  padding-top: 8px;\n  padding-right: 106px;\n  min-height: 100px;\n}\n.item-thumbnail-right > img:first-child,\n  .item-thumbnail-right .item-image,\n  .item-thumbnail-right .item-content > img:first-child,\n  .item-thumbnail-right .item-content .item-image {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    max-width: 80px;\n    max-height: 80px;\n    width: 100%;\n    height: 100%;\n}\n.item-avatar-right.item-complex,\n.item-thumbnail-right.item-complex {\n  padding-top: 0;\n  padding-right: 0;\n}\n.item-image {\n  padding: 0;\n  text-align: center;\n}\n.item-image img:first-child, .item-image .list-img {\n    width: 100%;\n    vertical-align: middle;\n}\n.item-body {\n  overflow: auto;\n  padding: 16px;\n  text-overflow: inherit;\n  white-space: normal;\n}\n.item-body h1, .item-body h2, .item-body h3, .item-body h4, .item-body h5, .item-body h6, .item-body p {\n    margin-top: 16px;\n    margin-bottom: 16px;\n}\n.item-divider {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: 30px;\n  background-color: #f5f5f5;\n  color: #222;\n  font-weight: 500;\n}\n.platform-ios .item-divider-platform,\n.item-divider-ios {\n  padding-top: 26px;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 13px;\n  background-color: #efeff4;\n  color: #555;\n}\n.platform-android .item-divider-platform,\n.item-divider-android {\n  font-weight: 300;\n  font-size: 13px;\n}\n.item-note {\n  float: right;\n  color: #aaa;\n  font-size: 14px;\n}\n.item-left-editable .item-content,\n.item-right-editable .item-content {\n  -webkit-transition-duration: 250ms;\n  transition-duration: 250ms;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-property: -webkit-transform;\n  -moz-transition-property: -moz-transform;\n  transition-property: transform;\n}\n.list-left-editing .item-left-editable .item-content,\n.item-left-editing.item-left-editable .item-content {\n  -webkit-transform: translate3d(50px, 0, 0);\n  transform: translate3d(50px, 0, 0);\n}\n.item-remove-animate.ng-leave {\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n}\n.item-remove-animate.ng-leave .item-content, .item-remove-animate.ng-leave:last-of-type {\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: ease-in;\n  transition-timing-function: ease-in;\n  -webkit-transition-property: all;\n  transition-property: all;\n}\n.item-remove-animate.ng-leave.ng-leave-active .item-content {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) !important;\n  transform: translate3d(-100%, 0, 0) !important;\n}\n.item-remove-animate.ng-leave.ng-leave-active:last-of-type {\n  opacity: 0;\n}\n.item-remove-animate.ng-leave.ng-leave-active ~ ion-item:not(.ng-leave) {\n  -webkit-transform: translate3d(0, -webkit-calc(-100% + 1px), 0);\n  transform: translate3d(0, calc(-100% + 1px), 0);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.25, 0.81, 0.24, 1);\n  transition-timing-function: cubic-bezier(0.25, 0.81, 0.24, 1);\n  -webkit-transition-property: all;\n  transition-property: all;\n}\n.item-left-edit {\n  -webkit-transition: all ease-in-out 125ms;\n  transition: all ease-in-out 125ms;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  width: 50px;\n  height: 100%;\n  line-height: 100%;\n  display: none;\n  opacity: 0;\n  -webkit-transform: translate3d(-21px, 0, 0);\n  transform: translate3d(-21px, 0, 0);\n}\n.item-left-edit .button {\n    height: 100%;\n}\n.item-left-edit .button.icon {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -moz-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      -webkit-align-items: center;\n      -moz-align-items: center;\n      align-items: center;\n      position: absolute;\n      top: 0;\n      height: 100%;\n}\n.item-left-edit.visible {\n    display: block;\n}\n.item-left-edit.visible.active {\n      opacity: 1;\n      -webkit-transform: translate3d(8px, 0, 0);\n      transform: translate3d(8px, 0, 0);\n}\n.list-left-editing .item-left-edit {\n  -webkit-transition-delay: 125ms;\n  transition-delay: 125ms;\n}\n.item-delete .button.icon {\n  color: #ef473a;\n  font-size: 24px;\n}\n.item-delete .button.icon:hover {\n    opacity: .7;\n}\n.item-right-edit {\n  -webkit-transition: all ease-in-out 250ms;\n  transition: all ease-in-out 250ms;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 3;\n  width: 75px;\n  height: 100%;\n  background: inherit;\n  padding-left: 20px;\n  display: block;\n  opacity: 0;\n  -webkit-transform: translate3d(75px, 0, 0);\n  transform: translate3d(75px, 0, 0);\n}\n.item-right-edit .button {\n    min-width: 50px;\n    height: 100%;\n}\n.item-right-edit .button.icon {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -moz-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      -webkit-align-items: center;\n      -moz-align-items: center;\n      align-items: center;\n      position: absolute;\n      top: 0;\n      height: 100%;\n      font-size: 32px;\n}\n.item-right-edit.visible {\n    display: block;\n}\n.item-right-edit.visible.active {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0);\n}\n.item-reorder .button.icon {\n  color: #444;\n  font-size: 32px;\n}\n.item-reordering {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 9;\n  width: 100%;\n  box-shadow: 0px 0px 10px 0px #aaa;\n}\n.item-reordering .item-reorder {\n    z-index: 9;\n}\n.item-placeholder {\n  opacity: 0.7;\n}\n.item-options {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  height: 100%;\n}\n.item-options .button {\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -moz-inline-flex;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    -moz-align-items: center;\n    align-items: center;\n}\n.item-options .button:before {\n      margin: 0 auto;\n}\n.list {\n  position: relative;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list:last-child {\n  margin-bottom: 0px;\n}\n.list:last-child.card {\n    margin-bottom: 40px;\n}\n.list-header {\n  margin-top: 20px;\n  padding: 5px 15px;\n  background-color: transparent;\n  color: #222;\n  font-weight: bold;\n}\n.card.list .list-item {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n.card,\n.list-inset {\n  overflow: hidden;\n  margin: 20px 10px;\n  border-radius: 2px;\n  background-color: #fff;\n}\n.card {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.card .item {\n    border-left: 0;\n    border-right: 0;\n}\n.card .item:first-child {\n    border-top: 0;\n}\n.card .item:last-child {\n    border-bottom: 0;\n}\n.padding .card, .padding .list-inset {\n  margin-left: 0;\n  margin-right: 0;\n}\n.card .item:first-child,\n.list-inset .item:first-child,\n.padding > .list .item:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n.card .item:first-child .item-content,\n  .list-inset .item:first-child .item-content,\n  .padding > .list .item:first-child .item-content {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n}\n.card .item:last-child,\n.list-inset .item:last-child,\n.padding > .list .item:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.card .item:last-child .item-content,\n  .list-inset .item:last-child .item-content,\n  .padding > .list .item:last-child .item-content {\n    border-bottom-right-radius: 2px;\n    border-bottom-left-radius: 2px;\n}\n.card .item:last-child,\n.list-inset .item:last-child {\n  margin-bottom: -1px;\n}\n.card .item,\n.list-inset .item,\n.padding > .list .item,\n.padding-horizontal > .list .item {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card .item.item-input input,\n  .list-inset .item.item-input input,\n  .padding > .list .item.item-input input,\n  .padding-horizontal > .list .item.item-input input {\n    padding-right: 44px;\n}\n.padding-left > .list .item {\n  margin-left: 0;\n}\n.padding-right > .list .item {\n  margin-right: 0;\n}\n.badge {\n  background-color: transparent;\n  color: #AAAAAA;\n  z-index: 1;\n  display: inline-block;\n  padding: 3px 8px;\n  min-width: 10px;\n  border-radius: 10px;\n  vertical-align: baseline;\n  text-align: center;\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n}\n.badge:empty {\n    display: none;\n}\n.tabs .tab-item .badge.badge-light,\n.badge.badge-light {\n  background-color: #fff;\n  color: #444;\n}\n.tabs .tab-item .badge.badge-stable,\n.badge.badge-stable {\n  background-color: #f8f8f8;\n  color: #444;\n}\n.tabs .tab-item .badge.badge-positive,\n.badge.badge-positive {\n  background-color: #979797;\n  color: #fff;\n}\n.tabs .tab-item .badge.badge-calm,\n.badge.badge-calm {\n  background-color: #11c1f3;\n  color: #fff;\n}\n.tabs .tab-item .badge.badge-assertive,\n.badge.badge-assertive {\n  background-color: #ef473a;\n  color: #fff;\n}\n.tabs .tab-item .badge.badge-balanced,\n.badge.badge-balanced {\n  background-color: #33cd5f;\n  color: #fff;\n}\n.tabs .tab-item .badge.badge-energized,\n.badge.badge-energized {\n  background-color: #ffc900;\n  color: #fff;\n}\n.tabs .tab-item .badge.badge-royal,\n.badge.badge-royal {\n  background-color: #886aea;\n  color: #fff;\n}\n.tabs .tab-item .badge.badge-dark,\n.badge.badge-dark {\n  background-color: #444;\n  color: #fff;\n}\n.button .badge {\n  position: relative;\n  top: -1px;\n}\n.slider {\n  position: relative;\n  visibility: hidden;\n  overflow: hidden;\n}\n.slider-slides {\n  position: relative;\n  height: 100%;\n}\n.slider-slide {\n  position: relative;\n  display: block;\n  float: left;\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n}\n.slider-slide-image > img {\n  width: 100%;\n}\n.slider-pager {\n  position: absolute;\n  bottom: 20px;\n  z-index: 1;\n  width: 100%;\n  height: 15px;\n  text-align: center;\n}\n.slider-pager .slider-pager-page {\n    display: inline-block;\n    margin: 0px 3px;\n    width: 15px;\n    color: #000;\n    text-decoration: none;\n    opacity: 0.3;\n}\n.slider-pager .slider-pager-page.active {\n      -webkit-transition: opacity 0.4s ease-in;\n      transition: opacity 0.4s ease-in;\n      opacity: 1;\n}\n.slider-slide.ng-enter, .slider-slide.ng-leave, .slider-slide.ng-animate,\n.slider-pager-page.ng-enter,\n.slider-pager-page.ng-leave,\n.slider-pager-page.ng-animate {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n.slider-slide.ng-animate,\n.slider-pager-page.ng-animate {\n  -webkit-animation: none 0s;\n  animation: none 0s;\n}\nform {\n  margin: 0 0 1.42857;\n}\nlegend {\n  display: block;\n  margin-bottom: 1.42857;\n  padding: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n  color: #444;\n  font-size: 18px;\n  line-height: 2.85714;\n}\nlegend small {\n    color: #f8f8f8;\n    font-size: 1.07143;\n}\nlabel,\ninput,\nbutton,\nselect,\ntextarea {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 1.42857;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n}\n.item-input {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  padding: 6px 0 5px 16px;\n}\n.item-input input {\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 220px;\n    -moz-box-flex: 1;\n    -moz-flex: 1 220px;\n    -ms-flex: 1 220px;\n    flex: 1 220px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    margin: 0;\n    padding-right: 24px;\n    background-color: transparent;\n}\n.item-input .button .icon {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 24px;\n    -moz-box-flex: 0;\n    -moz-flex: 0 0 24px;\n    -ms-flex: 0 0 24px;\n    flex: 0 0 24px;\n    position: static;\n    display: inline-block;\n    height: auto;\n    text-align: center;\n    font-size: 16px;\n}\n.item-input .button-bar {\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 220px;\n    -moz-box-flex: 1;\n    -moz-flex: 1 0 220px;\n    -ms-flex: 1 0 220px;\n    flex: 1 0 220px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n.item-input .icon {\n    min-width: 14px;\n}\n.platform-windowsphone .item-input input {\n  flex-shrink: 1;\n}\n.item-input-inset {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  padding: 10.66667px;\n}\n.item-input-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n  -moz-box-flex: 1;\n  -moz-flex: 1 0;\n  -ms-flex: 1 0;\n  flex: 1 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  padding-right: 8px;\n  padding-left: 8px;\n  background: #eee;\n}\n.item-input-inset .item-input-wrapper input {\n  padding-left: 4px;\n  height: 29px;\n  background: transparent;\n  line-height: 18px;\n}\n.item-input-wrapper ~ .button {\n  margin-left: 10.66667px;\n}\n.input-label {\n  display: table;\n  padding: 7px 10px 7px 0px;\n  max-width: 200px;\n  width: 35%;\n  color: #444;\n  font-size: 16px;\n}\n.placeholder-icon {\n  color: #aaa;\n}\n.placeholder-icon:first-child {\n    padding-right: 6px;\n}\n.placeholder-icon:last-child {\n    padding-left: 6px;\n}\n.item-stacked-label {\n  display: block;\n  background-color: transparent;\n  box-shadow: none;\n}\n.item-stacked-label .input-label, .item-stacked-label .icon {\n    display: inline-block;\n    padding: 4px 0 0 0px;\n    vertical-align: middle;\n}\n.item-stacked-label input,\n.item-stacked-label textarea {\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  padding: 4px 8px 3px 0;\n  border: none;\n  background-color: #fff;\n}\n.item-stacked-label input {\n  overflow: hidden;\n  height: 41px;\n}\n.item-floating-label {\n  display: block;\n  background-color: transparent;\n  box-shadow: none;\n}\n.item-floating-label .input-label {\n    position: relative;\n    padding: 5px 0 0 0;\n    opacity: 0;\n    top: 10px;\n    -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;\n    transition: opacity 0.15s ease-in, top 0.2s linear;\n}\n.item-floating-label .input-label.has-input {\n      opacity: 1;\n      top: 0;\n      -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;\n      transition: opacity 0.15s ease-in, top 0.2s linear;\n}\ntextarea,\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"datetime\"],\ninput[type=\"datetime-local\"],\ninput[type=\"date\"],\ninput[type=\"month\"],\ninput[type=\"time\"],\ninput[type=\"week\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"search\"],\ninput[type=\"tel\"],\ninput[type=\"color\"] {\n  display: block;\n  padding-top: 2px;\n  padding-left: 0;\n  height: 29px;\n  color: #111;\n  vertical-align: middle;\n  font-size: 12px;\n  line-height: 14px;\n}\n.platform-ios input[type=\"datetime-local\"],\n.platform-ios input[type=\"date\"],\n.platform-ios input[type=\"month\"],\n.platform-ios input[type=\"time\"],\n.platform-ios input[type=\"week\"],\n.platform-android input[type=\"datetime-local\"],\n.platform-android input[type=\"date\"],\n.platform-android input[type=\"month\"],\n.platform-android input[type=\"time\"],\n.platform-android input[type=\"week\"] {\n  padding-top: 8px;\n}\n.item-input input,\n.item-input textarea {\n  width: 100%;\n}\ntextarea {\n  padding-left: 0;\n}\ntextarea::-moz-placeholder {\n    color: #aaaaaa;\n}\ntextarea:-ms-input-placeholder {\n    color: #aaaaaa;\n}\ntextarea::-webkit-input-placeholder {\n    color: #aaaaaa;\n    text-indent: -3px;\n}\ntextarea {\n  height: auto;\n}\ntextarea,\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"datetime\"],\ninput[type=\"datetime-local\"],\ninput[type=\"date\"],\ninput[type=\"month\"],\ninput[type=\"time\"],\ninput[type=\"week\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"search\"],\ninput[type=\"tel\"],\ninput[type=\"color\"] {\n  border: 0;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 0;\n  line-height: normal;\n}\n.item-input input[type=\"file\"],\n.item-input input[type=\"image\"],\n.item-input input[type=\"submit\"],\n.item-input input[type=\"reset\"],\n.item-input input[type=\"button\"],\n.item-input input[type=\"radio\"],\n.item-input input[type=\"checkbox\"] {\n  width: auto;\n}\ninput[type=\"file\"] {\n  line-height: 31px;\n}\n.previous-input-focus,\n.cloned-text-input + input,\n.cloned-text-input + textarea {\n  position: absolute !important;\n  left: -9999px;\n  width: 200px;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #aaaaaa;\n}\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  color: #aaaaaa;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #aaaaaa;\n  text-indent: 0;\n}\ninput[disabled],\nselect[disabled],\ntextarea[disabled],\ninput[readonly]:not(.cloned-text-input),\ntextarea[readonly]:not(.cloned-text-input),\nselect[readonly] {\n  background-color: #f8f8f8;\n  cursor: not-allowed;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"][readonly],\ninput[type=\"checkbox\"][readonly] {\n  background-color: transparent;\n}\n.checkbox {\n  position: relative;\n  display: inline-block;\n  padding: 7px 7px;\n  cursor: pointer;\n}\n.checkbox input:before,\n  .checkbox .checkbox-icon:before {\n    border-color: #ddd;\n}\n.checkbox input:checked:before,\n  .checkbox input:checked + .checkbox-icon:before {\n    background: #979797;\n    border-color: #979797;\n}\n.checkbox-light input:before,\n.checkbox-light .checkbox-icon:before {\n  border-color: #ddd;\n}\n.checkbox-light input:checked:before,\n.checkbox-light input:checked + .checkbox-icon:before {\n  background: #ddd;\n  border-color: #ddd;\n}\n.checkbox-stable input:before,\n.checkbox-stable .checkbox-icon:before {\n  border-color: #b2b2b2;\n}\n.checkbox-stable input:checked:before,\n.checkbox-stable input:checked + .checkbox-icon:before {\n  background: #b2b2b2;\n  border-color: #b2b2b2;\n}\n.checkbox-positive input:before,\n.checkbox-positive .checkbox-icon:before {\n  border-color: #979797;\n}\n.checkbox-positive input:checked:before,\n.checkbox-positive input:checked + .checkbox-icon:before {\n  background: #979797;\n  border-color: #979797;\n}\n.checkbox-calm input:before,\n.checkbox-calm .checkbox-icon:before {\n  border-color: #11c1f3;\n}\n.checkbox-calm input:checked:before,\n.checkbox-calm input:checked + .checkbox-icon:before {\n  background: #11c1f3;\n  border-color: #11c1f3;\n}\n.checkbox-assertive input:before,\n.checkbox-assertive .checkbox-icon:before {\n  border-color: #ef473a;\n}\n.checkbox-assertive input:checked:before,\n.checkbox-assertive input:checked + .checkbox-icon:before {\n  background: #ef473a;\n  border-color: #ef473a;\n}\n.checkbox-balanced input:before,\n.checkbox-balanced .checkbox-icon:before {\n  border-color: #33cd5f;\n}\n.checkbox-balanced input:checked:before,\n.checkbox-balanced input:checked + .checkbox-icon:before {\n  background: #33cd5f;\n  border-color: #33cd5f;\n}\n.checkbox-energized input:before,\n.checkbox-energized .checkbox-icon:before {\n  border-color: #ffc900;\n}\n.checkbox-energized input:checked:before,\n.checkbox-energized input:checked + .checkbox-icon:before {\n  background: #ffc900;\n  border-color: #ffc900;\n}\n.checkbox-royal input:before,\n.checkbox-royal .checkbox-icon:before {\n  border-color: #886aea;\n}\n.checkbox-royal input:checked:before,\n.checkbox-royal input:checked + .checkbox-icon:before {\n  background: #886aea;\n  border-color: #886aea;\n}\n.checkbox-dark input:before,\n.checkbox-dark .checkbox-icon:before {\n  border-color: #444;\n}\n.checkbox-dark input:checked:before,\n.checkbox-dark input:checked + .checkbox-icon:before {\n  background: #444;\n  border-color: #444;\n}\n.checkbox input:disabled:before,\n.checkbox input:disabled + .checkbox-icon:before {\n  border-color: #ddd;\n}\n.checkbox input:disabled:checked:before,\n.checkbox input:disabled:checked + .checkbox-icon:before {\n  background: #ddd;\n}\n.checkbox.checkbox-input-hidden input {\n  display: none !important;\n}\n.checkbox input,\n.checkbox-icon {\n  position: relative;\n  width: 28px;\n  height: 28px;\n  display: block;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n.checkbox input:before,\n  .checkbox-icon:before {\n    display: table;\n    width: 100%;\n    height: 100%;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 28px;\n    background: #fff;\n    content: ' ';\n    -webkit-transition: background-color 20ms ease-in-out;\n    transition: background-color 20ms ease-in-out;\n}\n.checkbox input:checked:before,\ninput:checked + .checkbox-icon:before {\n  border-width: 2px;\n}\n.checkbox input:after,\n.checkbox-icon:after {\n  -webkit-transition: opacity 0.05s ease-in-out;\n  transition: opacity 0.05s ease-in-out;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  position: absolute;\n  top: 33%;\n  left: 25%;\n  display: table;\n  width: 14px;\n  height: 6px;\n  border: 1px solid #fff;\n  border-top: 0;\n  border-right: 0;\n  content: ' ';\n  opacity: 0;\n}\n.platform-android .checkbox-platform input:before,\n.platform-android .checkbox-platform .checkbox-icon:before,\n.checkbox-square input:before,\n.checkbox-square .checkbox-icon:before {\n  border-radius: 2px;\n  width: 72%;\n  height: 72%;\n  margin-top: 14%;\n  margin-left: 14%;\n  border-width: 2px;\n}\n.platform-android .checkbox-platform input:after,\n.platform-android .checkbox-platform .checkbox-icon:after,\n.checkbox-square input:after,\n.checkbox-square .checkbox-icon:after {\n  border-width: 2px;\n  top: 19%;\n  left: 25%;\n  width: 13px;\n  height: 7px;\n}\n.grade-c .checkbox input:after,\n.grade-c .checkbox-icon:after {\n  -webkit-transform: rotate(0);\n  transform: rotate(0);\n  top: 3px;\n  left: 4px;\n  border: none;\n  color: #fff;\n  content: '\\2713';\n  font-weight: bold;\n  font-size: 20px;\n}\n.checkbox input:checked:after,\ninput:checked + .checkbox-icon:after {\n  opacity: 1;\n}\n.item-checkbox {\n  padding-left: 60px;\n}\n.item-checkbox.active {\n    box-shadow: none;\n}\n.item-checkbox .checkbox {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  left: 8px;\n  z-index: 3;\n  margin-top: -21px;\n}\n.item-checkbox.item-checkbox-right {\n  padding-right: 60px;\n  padding-left: 16px;\n}\n.item-checkbox-right .checkbox input,\n.item-checkbox-right .checkbox-icon {\n  float: right;\n}\n.item-toggle {\n  pointer-events: none;\n}\n.toggle {\n  position: relative;\n  display: inline-block;\n  pointer-events: auto;\n  margin: -5px;\n  padding: 5px;\n}\n.toggle input:checked + .track {\n    border-color: #4cd964;\n    background-color: #4cd964;\n}\n.toggle.dragging .handle {\n    background-color: #f2f2f2 !important;\n}\n.toggle.toggle-light input:checked + .track {\n  border-color: #ddd;\n  background-color: #ddd;\n}\n.toggle.toggle-stable input:checked + .track {\n  border-color: #b2b2b2;\n  background-color: #b2b2b2;\n}\n.toggle.toggle-positive input:checked + .track {\n  border-color: #979797;\n  background-color: #979797;\n}\n.toggle.toggle-calm input:checked + .track {\n  border-color: #11c1f3;\n  background-color: #11c1f3;\n}\n.toggle.toggle-assertive input:checked + .track {\n  border-color: #ef473a;\n  background-color: #ef473a;\n}\n.toggle.toggle-balanced input:checked + .track {\n  border-color: #33cd5f;\n  background-color: #33cd5f;\n}\n.toggle.toggle-energized input:checked + .track {\n  border-color: #ffc900;\n  background-color: #ffc900;\n}\n.toggle.toggle-royal input:checked + .track {\n  border-color: #886aea;\n  background-color: #886aea;\n}\n.toggle.toggle-dark input:checked + .track {\n  border-color: #444;\n  background-color: #444;\n}\n.toggle input {\n  display: none;\n}\n.toggle .track {\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: background-color, border;\n  transition-property: background-color, border;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 51px;\n  height: 31px;\n  border: solid 2px #e6e6e6;\n  border-radius: 20px;\n  background-color: #fff;\n  content: ' ';\n  cursor: pointer;\n  pointer-events: none;\n}\n.platform-android4_2 .toggle .track {\n  -webkit-background-clip: padding-box;\n}\n.toggle .handle {\n  -webkit-transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);\n  transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);\n  -webkit-transition-property: background-color, transform;\n  transition-property: background-color, transform;\n  position: absolute;\n  display: block;\n  width: 27px;\n  height: 27px;\n  border-radius: 27px;\n  background-color: #fff;\n  top: 7px;\n  left: 7px;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15);\n}\n.toggle .handle:before {\n    position: absolute;\n    top: -4px;\n    left: -21.5px;\n    padding: 18.5px 34px;\n    content: \" \";\n}\n.toggle input:checked + .track .handle {\n  -webkit-transform: translate3d(20px, 0, 0);\n  transform: translate3d(20px, 0, 0);\n  background-color: #fff;\n}\n.item-toggle.active {\n  box-shadow: none;\n}\n.item-toggle,\n.item-toggle.item-complex .item-content {\n  padding-right: 99px;\n}\n.item-toggle.item-complex {\n  padding-right: 0;\n}\n.item-toggle .toggle {\n  position: absolute;\n  top: 10px;\n  right: 16px;\n  z-index: 3;\n}\n.toggle input:disabled + .track {\n  opacity: .6;\n}\n.toggle-small .track {\n  border: 0;\n  width: 34px;\n  height: 15px;\n  background: #9e9e9e;\n}\n.toggle-small input:checked + .track {\n  background: rgba(0, 150, 137, 0.5);\n}\n.toggle-small .handle {\n  top: 2px;\n  left: 4px;\n  width: 21px;\n  height: 21px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n}\n.toggle-small input:checked + .track .handle {\n  -webkit-transform: translate3d(16px, 0, 0);\n  transform: translate3d(16px, 0, 0);\n  background: #009689;\n}\n.toggle-small.item-toggle .toggle {\n  top: 19px;\n}\n.toggle-small .toggle-light input:checked + .track {\n  background-color: rgba(221, 221, 221, 0.5);\n}\n.toggle-small .toggle-light input:checked + .track .handle {\n  background-color: #ddd;\n}\n.toggle-small .toggle-stable input:checked + .track {\n  background-color: rgba(178, 178, 178, 0.5);\n}\n.toggle-small .toggle-stable input:checked + .track .handle {\n  background-color: #b2b2b2;\n}\n.toggle-small .toggle-positive input:checked + .track {\n  background-color: rgba(151, 151, 151, 0.5);\n}\n.toggle-small .toggle-positive input:checked + .track .handle {\n  background-color: #979797;\n}\n.toggle-small .toggle-calm input:checked + .track {\n  background-color: rgba(17, 193, 243, 0.5);\n}\n.toggle-small .toggle-calm input:checked + .track .handle {\n  background-color: #11c1f3;\n}\n.toggle-small .toggle-assertive input:checked + .track {\n  background-color: rgba(239, 71, 58, 0.5);\n}\n.toggle-small .toggle-assertive input:checked + .track .handle {\n  background-color: #ef473a;\n}\n.toggle-small .toggle-balanced input:checked + .track {\n  background-color: rgba(51, 205, 95, 0.5);\n}\n.toggle-small .toggle-balanced input:checked + .track .handle {\n  background-color: #33cd5f;\n}\n.toggle-small .toggle-energized input:checked + .track {\n  background-color: rgba(255, 201, 0, 0.5);\n}\n.toggle-small .toggle-energized input:checked + .track .handle {\n  background-color: #ffc900;\n}\n.toggle-small .toggle-royal input:checked + .track {\n  background-color: rgba(136, 106, 234, 0.5);\n}\n.toggle-small .toggle-royal input:checked + .track .handle {\n  background-color: #886aea;\n}\n.toggle-small .toggle-dark input:checked + .track {\n  background-color: rgba(68, 68, 68, 0.5);\n}\n.toggle-small .toggle-dark input:checked + .track .handle {\n  background-color: #444;\n}\n.item-radio {\n  padding: 0;\n}\n.item-radio:hover {\n    cursor: pointer;\n}\n.item-radio .item-content {\n  padding-right: 64px;\n}\n.item-radio .radio-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 3;\n  visibility: hidden;\n  padding: 14px;\n  height: 100%;\n  font-size: 24px;\n}\n.item-radio input {\n  position: absolute;\n  left: -9999px;\n}\n.item-radio input:checked + .radio-content .item-content {\n    background: #f7f7f7;\n}\n.item-radio input:checked + .radio-content .radio-icon {\n    visibility: visible;\n}\n.range input {\n  display: inline-block;\n  overflow: hidden;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-right: 2px;\n  padding-left: 1px;\n  width: auto;\n  height: 43px;\n  outline: none;\n  background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ccc), color-stop(100%, #ccc));\n  background: linear-gradient(to right, #ccc 0%, #ccc 100%);\n  background-position: center;\n  background-size: 99% 2px;\n  background-repeat: no-repeat;\n  -webkit-appearance: none;\n}\n.range input::-webkit-slider-thumb {\n    position: relative;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: #fff;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    -webkit-appearance: none;\n    border: 0;\n}\n.range input::-webkit-slider-thumb:before {\n    position: absolute;\n    top: 13px;\n    left: -2001px;\n    width: 2000px;\n    height: 2px;\n    background: #444;\n    content: ' ';\n}\n.range input::-webkit-slider-thumb:after {\n    position: absolute;\n    top: -15px;\n    left: -15px;\n    padding: 30px;\n    content: ' ';\n}\n.range input::-ms-track {\n    background: transparent;\n    border-color: transparent;\n    border-width: 11px 0 16px;\n    color: transparent;\n    margin-top: 20px;\n}\n.range input::-ms-thumb {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: #fff;\n    border-color: #fff;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\n    margin-left: 1px;\n    margin-right: 1px;\n    outline: none;\n}\n.range input::-ms-fill-lower {\n    height: 2px;\n    background: #444;\n}\n.range input::-ms-fill-upper {\n    height: 2px;\n    background: #ccc;\n}\n.range {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  padding: 2px 11px;\n}\n.range.range-light input::-webkit-slider-thumb:before {\n    background: #ddd;\n}\n.range.range-light input::-ms-fill-lower {\n    background: #ddd;\n}\n.range.range-stable input::-webkit-slider-thumb:before {\n    background: #b2b2b2;\n}\n.range.range-stable input::-ms-fill-lower {\n    background: #b2b2b2;\n}\n.range.range-positive input::-webkit-slider-thumb:before {\n    background: #979797;\n}\n.range.range-positive input::-ms-fill-lower {\n    background: #979797;\n}\n.range.range-calm input::-webkit-slider-thumb:before {\n    background: #11c1f3;\n}\n.range.range-calm input::-ms-fill-lower {\n    background: #11c1f3;\n}\n.range.range-balanced input::-webkit-slider-thumb:before {\n    background: #33cd5f;\n}\n.range.range-balanced input::-ms-fill-lower {\n    background: #33cd5f;\n}\n.range.range-assertive input::-webkit-slider-thumb:before {\n    background: #ef473a;\n}\n.range.range-assertive input::-ms-fill-lower {\n    background: #ef473a;\n}\n.range.range-energized input::-webkit-slider-thumb:before {\n    background: #ffc900;\n}\n.range.range-energized input::-ms-fill-lower {\n    background: #ffc900;\n}\n.range.range-royal input::-webkit-slider-thumb:before {\n    background: #886aea;\n}\n.range.range-royal input::-ms-fill-lower {\n    background: #886aea;\n}\n.range.range-dark input::-webkit-slider-thumb:before {\n    background: #444;\n}\n.range.range-dark input::-ms-fill-lower {\n    background: #444;\n}\n.range .icon {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0;\n  -moz-box-flex: 0;\n  -moz-flex: 0;\n  -ms-flex: 0;\n  flex: 0;\n  display: block;\n  min-width: 24px;\n  text-align: center;\n  font-size: 24px;\n}\n.range input {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.range-label {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  display: block;\n  white-space: nowrap;\n}\n.range-label:first-child {\n  padding-left: 5px;\n}\n.range input + .range-label {\n  padding-right: 5px;\n  padding-left: 0;\n}\n.platform-windowsphone .range input {\n  height: auto;\n}\n.item-select {\n  position: relative;\n}\n.item-select select {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0 48px 0 16px;\n    max-width: 65%;\n    border: none;\n    background: #fff;\n    color: #333;\n    text-indent: .01px;\n    text-overflow: '';\n    white-space: nowrap;\n    font-size: 12px;\n    cursor: pointer;\n    direction: rtl;\n}\n.item-select select::-ms-expand {\n    display: none;\n}\n.item-select option {\n    direction: ltr;\n}\n.item-select:after {\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    margin-top: -3px;\n    width: 0;\n    height: 0;\n    border-top: 5px solid;\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    color: #999;\n    content: \"\";\n    pointer-events: none;\n}\n.item-select.item-light select {\n    background: #fff;\n    color: #444;\n}\n.item-select.item-stable select {\n    background: #f8f8f8;\n    color: #444;\n}\n.item-select.item-stable:after, .item-select.item-stable .input-label {\n    color: #666666;\n}\n.item-select.item-positive select {\n    background: #979797;\n    color: #fff;\n}\n.item-select.item-positive:after, .item-select.item-positive .input-label {\n    color: #fff;\n}\n.item-select.item-calm select {\n    background: #11c1f3;\n    color: #fff;\n}\n.item-select.item-calm:after, .item-select.item-calm .input-label {\n    color: #fff;\n}\n.item-select.item-assertive select {\n    background: #ef473a;\n    color: #fff;\n}\n.item-select.item-assertive:after, .item-select.item-assertive .input-label {\n    color: #fff;\n}\n.item-select.item-balanced select {\n    background: #33cd5f;\n    color: #fff;\n}\n.item-select.item-balanced:after, .item-select.item-balanced .input-label {\n    color: #fff;\n}\n.item-select.item-energized select {\n    background: #ffc900;\n    color: #fff;\n}\n.item-select.item-energized:after, .item-select.item-energized .input-label {\n    color: #fff;\n}\n.item-select.item-royal select {\n    background: #886aea;\n    color: #fff;\n}\n.item-select.item-royal:after, .item-select.item-royal .input-label {\n    color: #fff;\n}\n.item-select.item-dark select {\n    background: #444;\n    color: #fff;\n}\n.item-select.item-dark:after, .item-select.item-dark .input-label {\n    color: #fff;\n}\nselect[multiple], select[size] {\n  height: auto;\n}\n.button {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  color: #444;\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0 12px;\n  min-width: 52px;\n  min-height: 47px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  vertical-align: top;\n  text-align: center;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  line-height: 42px;\n  cursor: pointer;\n}\n.button:hover {\n    color: #444;\n    text-decoration: none;\n}\n.button.active, .button.activated {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button:after {\n    position: absolute;\n    top: -6px;\n    right: -6px;\n    bottom: -6px;\n    left: -6px;\n    content: ' ';\n}\n.button .icon {\n    vertical-align: top;\n    pointer-events: none;\n}\n.button .icon:before, .button.icon:before, .button.icon-left:before, .button.icon-right:before {\n    display: inline-block;\n    padding: 0 0 1px 0;\n    vertical-align: inherit;\n    font-size: 24px;\n    line-height: 41px;\n    pointer-events: none;\n}\n.button.icon-left:before {\n    float: left;\n    padding-right: .2em;\n    padding-left: 0;\n}\n.button.icon-right:before {\n    float: right;\n    padding-right: 0;\n    padding-left: .2em;\n}\n.button.button-block, .button.button-full {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.button.button-light {\n    border-color: #ddd;\n    background-color: #fff;\n    color: #444;\n}\n.button.button-light:hover {\n      color: #444;\n      text-decoration: none;\n}\n.button.button-light.active, .button.button-light.activated {\n      border-color: #ccc;\n      background-color: #fafafa;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-light.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #ddd;\n}\n.button.button-light.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-light.button-outline {\n      border-color: #ddd;\n      background: transparent;\n      color: #ddd;\n}\n.button.button-light.button-outline.active, .button.button-light.button-outline.activated {\n        background-color: #ddd;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-stable {\n    border-color: #b2b2b2;\n    background-color: #f8f8f8;\n    color: #444;\n}\n.button.button-stable:hover {\n      color: #444;\n      text-decoration: none;\n}\n.button.button-stable.active, .button.button-stable.activated {\n      border-color: #a2a2a2;\n      background-color: #e5e5e5;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-stable.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #b2b2b2;\n}\n.button.button-stable.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-stable.button-outline {\n      border-color: #b2b2b2;\n      background: transparent;\n      color: #b2b2b2;\n}\n.button.button-stable.button-outline.active, .button.button-stable.button-outline.activated {\n        background-color: #b2b2b2;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-positive {\n    border-color: #979797;\n    background-color: #979797;\n    color: #fff;\n}\n.button.button-positive:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.button.button-positive.active, .button.button-positive.activated {\n      border-color: #7e7e7e;\n      background-color: #7e7e7e;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-positive.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #979797;\n}\n.button.button-positive.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-positive.button-outline {\n      border-color: #979797;\n      background: transparent;\n      color: #979797;\n}\n.button.button-positive.button-outline.active, .button.button-positive.button-outline.activated {\n        background-color: #979797;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-calm {\n    border-color: #0a9dc7;\n    background-color: #11c1f3;\n    color: #fff;\n}\n.button.button-calm:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.button.button-calm.active, .button.button-calm.activated {\n      border-color: #0a9dc7;\n      background-color: #0a9dc7;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-calm.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #11c1f3;\n}\n.button.button-calm.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-calm.button-outline {\n      border-color: #11c1f3;\n      background: transparent;\n      color: #11c1f3;\n}\n.button.button-calm.button-outline.active, .button.button-calm.button-outline.activated {\n        background-color: #11c1f3;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-assertive {\n    border-color: #e42112;\n    background-color: #ef473a;\n    color: #fff;\n}\n.button.button-assertive:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.button.button-assertive.active, .button.button-assertive.activated {\n      border-color: #e42112;\n      background-color: #e42112;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-assertive.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #ef473a;\n}\n.button.button-assertive.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-assertive.button-outline {\n      border-color: #ef473a;\n      background: transparent;\n      color: #ef473a;\n}\n.button.button-assertive.button-outline.active, .button.button-assertive.button-outline.activated {\n        background-color: #ef473a;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-balanced {\n    border-color: #28a54c;\n    background-color: #33cd5f;\n    color: #fff;\n}\n.button.button-balanced:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.button.button-balanced.active, .button.button-balanced.activated {\n      border-color: #28a54c;\n      background-color: #28a54c;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-balanced.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #33cd5f;\n}\n.button.button-balanced.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-balanced.button-outline {\n      border-color: #33cd5f;\n      background: transparent;\n      color: #33cd5f;\n}\n.button.button-balanced.button-outline.active, .button.button-balanced.button-outline.activated {\n        background-color: #33cd5f;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-energized {\n    border-color: #e6b500;\n    background-color: #ffc900;\n    color: #fff;\n}\n.button.button-energized:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.button.button-energized.active, .button.button-energized.activated {\n      border-color: #e6b500;\n      background-color: #e6b500;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-energized.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #ffc900;\n}\n.button.button-energized.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-energized.button-outline {\n      border-color: #ffc900;\n      background: transparent;\n      color: #ffc900;\n}\n.button.button-energized.button-outline.active, .button.button-energized.button-outline.activated {\n        background-color: #ffc900;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-royal {\n    border-color: #6b46e5;\n    background-color: #886aea;\n    color: #fff;\n}\n.button.button-royal:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.button.button-royal.active, .button.button-royal.activated {\n      border-color: #6b46e5;\n      background-color: #6b46e5;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-royal.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #886aea;\n}\n.button.button-royal.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-royal.button-outline {\n      border-color: #886aea;\n      background: transparent;\n      color: #886aea;\n}\n.button.button-royal.button-outline.active, .button.button-royal.button-outline.activated {\n        background-color: #886aea;\n        box-shadow: none;\n        color: #fff;\n}\n.button.button-dark {\n    border-color: #111;\n    background-color: #444;\n    color: #fff;\n}\n.button.button-dark:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.button.button-dark.active, .button.button-dark.activated {\n      border-color: #000;\n      background-color: #262626;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.button.button-dark.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #444;\n}\n.button.button-dark.button-icon {\n      border-color: transparent;\n      background: none;\n}\n.button.button-dark.button-outline {\n      border-color: #444;\n      background: transparent;\n      color: #444;\n}\n.button.button-dark.button-outline.active, .button.button-dark.button-outline.activated {\n        background-color: #444;\n        box-shadow: none;\n        color: #fff;\n}\n.button-small {\n  padding: 2px 4px 1px;\n  min-width: 28px;\n  min-height: 30px;\n  font-size: 12px;\n  line-height: 26px;\n}\n.button-small .icon:before, .button-small.icon:before, .button-small.icon-left:before, .button-small.icon-right:before {\n    font-size: 16px;\n    line-height: 19px;\n    margin-top: 3px;\n}\n.button-large {\n  padding: 0 16px;\n  min-width: 68px;\n  min-height: 59px;\n  font-size: 20px;\n  line-height: 53px;\n}\n.button-large .icon:before, .button-large.icon:before, .button-large.icon-left:before, .button-large.icon-right:before {\n    padding-bottom: 2px;\n    font-size: 32px;\n    line-height: 51px;\n}\n.button-icon {\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  padding: 0 6px;\n  min-width: initial;\n  border-color: transparent;\n  background: none;\n}\n.button-icon.button.active, .button-icon.button.activated {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    opacity: 0.3;\n}\n.button-icon .icon:before, .button-icon.icon:before {\n    font-size: 32px;\n}\n.button-clear {\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  padding: 0 6px;\n  max-height: 42px;\n  border-color: transparent;\n  background: none;\n  box-shadow: none;\n}\n.button-clear.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #b2b2b2;\n}\n.button-clear.button-icon {\n    border-color: transparent;\n    background: none;\n}\n.button-clear.active, .button-clear.activated {\n    opacity: 0.3;\n}\n.button-outline {\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  background: none;\n  box-shadow: none;\n}\n.button-outline.button-outline {\n    border-color: #b2b2b2;\n    background: transparent;\n    color: #b2b2b2;\n}\n.button-outline.button-outline.active, .button-outline.button-outline.activated {\n      background-color: #b2b2b2;\n      box-shadow: none;\n      color: #fff;\n}\n.padding > .button.button-block:first-child {\n  margin-top: 0;\n}\n.button-block {\n  display: block;\n  clear: both;\n}\n.button-block:after {\n    clear: both;\n}\n.button-full,\n.button-full > .button {\n  display: block;\n  margin-right: 0;\n  margin-left: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  border-radius: 0;\n}\nbutton.button-block,\nbutton.button-full,\n.button-full > button.button,\ninput.button.button-block {\n  width: 100%;\n}\na.button {\n  text-decoration: none;\n}\na.button .icon:before, a.button.icon:before, a.button.icon-left:before, a.button.icon-right:before {\n    margin-top: 2px;\n}\n.button.disabled,\n.button[disabled] {\n  opacity: .4;\n  cursor: default !important;\n  pointer-events: none;\n}\n.button-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n}\n.button-bar.button-bar-inline {\n    display: block;\n    width: auto;\n    *zoom: 1;\n}\n.button-bar.button-bar-inline:before, .button-bar.button-bar-inline:after {\n      display: table;\n      content: \"\";\n      line-height: 0;\n}\n.button-bar.button-bar-inline:after {\n      clear: both;\n}\n.button-bar.button-bar-inline > .button {\n      width: auto;\n      display: inline-block;\n      float: left;\n}\n.button-bar > .button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  overflow: hidden;\n  padding: 0 16px;\n  width: 0;\n  border-width: 1px 0px 1px 1px;\n  border-radius: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.button-bar > .button:before,\n  .button-bar > .button .icon:before {\n    line-height: 44px;\n}\n.button-bar > .button:first-child {\n    border-radius: 2px 0px 0px 2px;\n}\n.button-bar > .button:last-child {\n    border-right-width: 1px;\n    border-radius: 0px 2px 2px 0px;\n}\n.button-bar > .button-small:before,\n.button-bar > .button-small .icon:before {\n  line-height: 28px;\n}\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px;\n  width: 100%;\n}\n.row-wrap {\n  -webkit-flex-wrap: wrap;\n  -moz-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.row-no-padding {\n  padding: 0;\n}\n.row-no-padding > .col {\n    padding: 0;\n}\n.row + .row {\n  margin-top: -5px;\n  padding-top: 0;\n}\n.col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  padding: 5px;\n  width: 100%;\n}\n.row-top {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  -webkit-align-items: flex-start;\n  -moz-align-items: flex-start;\n  align-items: flex-start;\n}\n.row-bottom {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  -webkit-align-items: flex-end;\n  -moz-align-items: flex-end;\n  align-items: flex-end;\n}\n.row-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n}\n.row-stretch {\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  -webkit-align-items: stretch;\n  -moz-align-items: stretch;\n  align-items: stretch;\n}\n.row-baseline {\n  -webkit-box-align: baseline;\n  -ms-flex-align: baseline;\n  -webkit-align-items: baseline;\n  -moz-align-items: baseline;\n  align-items: baseline;\n}\n.col-top {\n  -webkit-align-self: flex-start;\n  -moz-align-self: flex-start;\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n}\n.col-bottom {\n  -webkit-align-self: flex-end;\n  -moz-align-self: flex-end;\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n}\n.col-center {\n  -webkit-align-self: center;\n  -moz-align-self: center;\n  -ms-flex-item-align: center;\n  align-self: center;\n}\n.col-offset-10 {\n  margin-left: 10%;\n}\n.col-offset-20 {\n  margin-left: 20%;\n}\n.col-offset-25 {\n  margin-left: 25%;\n}\n.col-offset-33, .col-offset-34 {\n  margin-left: 33.3333%;\n}\n.col-offset-50 {\n  margin-left: 50%;\n}\n.col-offset-66, .col-offset-67 {\n  margin-left: 66.6666%;\n}\n.col-offset-75 {\n  margin-left: 75%;\n}\n.col-offset-80 {\n  margin-left: 80%;\n}\n.col-offset-90 {\n  margin-left: 90%;\n}\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 10%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 10%;\n  -ms-flex: 0 0 10%;\n  flex: 0 0 10%;\n  max-width: 10%;\n}\n.col-20 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 20%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 20%;\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n.col-25 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 25%;\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-33, .col-34 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.3333%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 33.3333%;\n  -ms-flex: 0 0 33.3333%;\n  flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n}\n.col-50 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 50%;\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-66, .col-67 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.6666%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 66.6666%;\n  -ms-flex: 0 0 66.6666%;\n  flex: 0 0 66.6666%;\n  max-width: 66.6666%;\n}\n.col-75 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 75%;\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-80 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 80%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 80%;\n  -ms-flex: 0 0 80%;\n  flex: 0 0 80%;\n  max-width: 80%;\n}\n.col-90 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 90%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 90%;\n  -ms-flex: 0 0 90%;\n  flex: 0 0 90%;\n  max-width: 90%;\n}\n@media (max-width: 567px) {\n.responsive-sm {\n    -webkit-box-direction: normal;\n    -moz-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n.responsive-sm .col, .responsive-sm .col-10, .responsive-sm .col-20, .responsive-sm .col-25, .responsive-sm .col-33, .responsive-sm .col-34, .responsive-sm .col-50, .responsive-sm .col-66, .responsive-sm .col-67, .responsive-sm .col-75, .responsive-sm .col-80, .responsive-sm .col-90 {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      -moz-box-flex: 1;\n      -moz-flex: 1;\n      -ms-flex: 1;\n      flex: 1;\n      margin-bottom: 15px;\n      margin-left: 0;\n      max-width: 100%;\n      width: 100%;\n}\n}\n@media (max-width: 767px) {\n.responsive-md {\n    -webkit-box-direction: normal;\n    -moz-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n.responsive-md .col, .responsive-md .col-10, .responsive-md .col-20, .responsive-md .col-25, .responsive-md .col-33, .responsive-md .col-34, .responsive-md .col-50, .responsive-md .col-66, .responsive-md .col-67, .responsive-md .col-75, .responsive-md .col-80, .responsive-md .col-90 {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      -moz-box-flex: 1;\n      -moz-flex: 1;\n      -ms-flex: 1;\n      flex: 1;\n      margin-bottom: 15px;\n      margin-left: 0;\n      max-width: 100%;\n      width: 100%;\n}\n}\n@media (max-width: 1023px) {\n.responsive-lg {\n    -webkit-box-direction: normal;\n    -moz-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n.responsive-lg .col, .responsive-lg .col-10, .responsive-lg .col-20, .responsive-lg .col-25, .responsive-lg .col-33, .responsive-lg .col-34, .responsive-lg .col-50, .responsive-lg .col-66, .responsive-lg .col-67, .responsive-lg .col-75, .responsive-lg .col-80, .responsive-lg .col-90 {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      -moz-box-flex: 1;\n      -moz-flex: 1;\n      -ms-flex: 1;\n      flex: 1;\n      margin-bottom: 15px;\n      margin-left: 0;\n      max-width: 100%;\n      width: 100%;\n}\n}\n.hide {\n  display: none;\n}\n.opacity-hide {\n  opacity: 0;\n}\n.grade-b .opacity-hide,\n.grade-c .opacity-hide {\n  opacity: 1;\n  display: none;\n}\n.show {\n  display: block;\n}\n.opacity-show {\n  opacity: 1;\n}\n.invisible {\n  visibility: hidden;\n}\n.keyboard-open .hide-on-keyboard-open {\n  display: none;\n}\n.keyboard-open .tabs.hide-on-keyboard-open + .pane .has-tabs,\n.keyboard-open .bar-footer.hide-on-keyboard-open + .pane .has-footer {\n  bottom: 0;\n}\n.inline {\n  display: inline-block;\n}\n.disable-pointer-events {\n  pointer-events: none;\n}\n.enable-pointer-events {\n  pointer-events: auto;\n}\n.disable-user-behavior {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-drag: none;\n  -ms-touch-action: none;\n  -ms-content-zooming: none;\n}\n.click-block {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 99999;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  overflow: hidden;\n}\n.click-block-hide {\n  -webkit-transform: translate3d(-9999px, 0, 0);\n  transform: translate3d(-9999px, 0, 0);\n}\n.no-resize {\n  resize: none;\n}\n.block {\n  display: block;\n  clear: both;\n}\n.block:after {\n    display: block;\n    visibility: hidden;\n    clear: both;\n    height: 0;\n    content: \".\";\n}\n.full-image {\n  width: 100%;\n}\n.clearfix {\n  *zoom: 1;\n}\n.clearfix:before, .clearfix:after {\n    display: table;\n    content: \"\";\n    line-height: 0;\n}\n.clearfix:after {\n    clear: both;\n}\n.padding {\n  padding: 10px;\n}\n.padding-top,\n.padding-vertical {\n  padding-top: 10px;\n}\n.padding-right,\n.padding-horizontal {\n  padding-right: 10px;\n}\n.padding-bottom,\n.padding-vertical {\n  padding-bottom: 10px;\n}\n.padding-left,\n.padding-horizontal {\n  padding-left: 10px;\n}\n.iframe-wrapper {\n  position: fixed;\n  -webkit-overflow-scrolling: touch;\n  overflow: scroll;\n}\n.iframe-wrapper iframe {\n    height: 100%;\n    width: 100%;\n}\n.rounded {\n  border-radius: 3px;\n}\n.light, a.light {\n  color: #fff;\n}\n.light-bg {\n  background-color: #fff;\n}\n.light-border {\n  border-color: #ddd;\n}\n.stable, a.stable {\n  color: #f8f8f8;\n}\n.stable-bg {\n  background-color: #f8f8f8;\n}\n.stable-border {\n  border-color: #b2b2b2;\n}\n.positive, a.positive {\n  color: #979797;\n}\n.positive-bg {\n  background-color: #979797;\n}\n.positive-border {\n  border-color: #979797;\n}\n.calm, a.calm {\n  color: #11c1f3;\n}\n.calm-bg {\n  background-color: #11c1f3;\n}\n.calm-border {\n  border-color: #0a9dc7;\n}\n.assertive, a.assertive {\n  color: #ef473a;\n}\n.assertive-bg {\n  background-color: #ef473a;\n}\n.assertive-border {\n  border-color: #e42112;\n}\n.balanced, a.balanced {\n  color: #33cd5f;\n}\n.balanced-bg {\n  background-color: #33cd5f;\n}\n.balanced-border {\n  border-color: #28a54c;\n}\n.energized, a.energized {\n  color: #ffc900;\n}\n.energized-bg {\n  background-color: #ffc900;\n}\n.energized-border {\n  border-color: #e6b500;\n}\n.royal, a.royal {\n  color: #886aea;\n}\n.royal-bg {\n  background-color: #886aea;\n}\n.royal-border {\n  border-color: #6b46e5;\n}\n.dark, a.dark {\n  color: #444;\n}\n.dark-bg {\n  background-color: #444;\n}\n.dark-border {\n  border-color: #111;\n}\n[collection-repeat] {\n  left: 0 !important;\n  top: 0 !important;\n  position: absolute !important;\n  z-index: 1;\n}\n.collection-repeat-container {\n  position: relative;\n  z-index: 1;\n}\n.collection-repeat-after-container {\n  z-index: 0;\n  display: block;\n}\n.collection-repeat-after-container.horizontal {\n    display: inline-block;\n}\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak,\n.x-ng-cloak, .ng-hide:not(.ng-hide-animate) {\n  display: none !important;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader) {\n  height: 64px;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader).item-input-inset .item-input-wrapper {\n    margin-top: 19px !important;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader) > * {\n    margin-top: 20px;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .tabs-top > .tabs,\n.platform-ios.platform-cordova:not(.fullscreen) .tabs.tabs-top {\n  top: 64px;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .has-header,\n.platform-ios.platform-cordova:not(.fullscreen) .bar-subheader {\n  top: 64px;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .has-subheader {\n  top: 108px;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .has-header.has-tabs-top {\n  top: 113px;\n}\n.platform-ios.platform-cordova:not(.fullscreen) .has-header.has-subheader.has-tabs-top {\n  top: 157px;\n}\n.platform-ios.platform-cordova .popover .bar-header:not(.bar-subheader) {\n  height: 44px;\n}\n.platform-ios.platform-cordova .popover .bar-header:not(.bar-subheader).item-input-inset .item-input-wrapper {\n    margin-top: -1px;\n}\n.platform-ios.platform-cordova .popover .bar-header:not(.bar-subheader) > * {\n    margin-top: 0;\n}\n.platform-ios.platform-cordova .popover .has-header,\n.platform-ios.platform-cordova .popover .bar-subheader {\n  top: 44px;\n}\n.platform-ios.platform-cordova .popover .has-subheader {\n  top: 88px;\n}\n.platform-ios.platform-cordova.status-bar-hide {\n  margin-bottom: 20px;\n}\n@media (orientation: landscape) {\n.platform-ios.platform-browser.platform-ipad {\n    position: fixed;\n}\n}\n.platform-c:not(.enable-transitions) * {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n.slide-in-up {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n.slide-in-up.ng-enter,\n.slide-in-up > .ng-enter {\n  -webkit-transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms;\n  transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms;\n}\n.slide-in-up.ng-enter-active,\n.slide-in-up > .ng-enter-active {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.slide-in-up.ng-leave,\n.slide-in-up > .ng-leave {\n  -webkit-transition: all ease-in-out 250ms;\n  transition: all ease-in-out 250ms;\n}\n@-webkit-keyframes scaleOut {\nfrom {\n    -webkit-transform: scale(1);\n    opacity: 1;\n}\nto {\n    -webkit-transform: scale(0.8);\n    opacity: 0;\n}\n}\n@keyframes scaleOut {\nfrom {\n    transform: scale(1);\n    opacity: 1;\n}\nto {\n    transform: scale(0.8);\n    opacity: 0;\n}\n}\n@-webkit-keyframes superScaleIn {\nfrom {\n    -webkit-transform: scale(1.2);\n    opacity: 0;\n}\nto {\n    -webkit-transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes superScaleIn {\nfrom {\n    transform: scale(1.2);\n    opacity: 0;\n}\nto {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n[nav-view-transition=\"ios\"] [nav-view=\"entering\"],\n[nav-view-transition=\"ios\"] [nav-view=\"leaving\"] {\n  -webkit-transition-duration: 500ms;\n  transition-duration: 500ms;\n  -webkit-transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transition-property: opacity, -webkit-transform, box-shadow;\n  transition-property: opacity, transform, box-shadow;\n}\n[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"], [nav-view-transition=\"ios\"][nav-view-direction=\"back\"] {\n  background-color: #000;\n}\n[nav-view-transition=\"ios\"] [nav-view=\"active\"],\n[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"] [nav-view=\"entering\"],\n[nav-view-transition=\"ios\"][nav-view-direction=\"back\"] [nav-view=\"leaving\"] {\n  z-index: 3;\n}\n[nav-view-transition=\"ios\"][nav-view-direction=\"back\"] [nav-view=\"entering\"],\n[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"] [nav-view=\"leaving\"] {\n  z-index: 2;\n}\n[nav-bar-transition=\"ios\"] .title,\n[nav-bar-transition=\"ios\"] .buttons,\n[nav-bar-transition=\"ios\"] .back-text {\n  -webkit-transition-duration: 500ms;\n  transition-duration: 500ms;\n  -webkit-transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n}\n[nav-bar-transition=\"ios\"] [nav-bar=\"active\"],\n[nav-bar-transition=\"ios\"] [nav-bar=\"entering\"] {\n  z-index: 10;\n}\n[nav-bar-transition=\"ios\"] [nav-bar=\"active\"] .bar,\n  [nav-bar-transition=\"ios\"] [nav-bar=\"entering\"] .bar {\n    background: transparent;\n}\n[nav-bar-transition=\"ios\"] [nav-bar=\"cached\"] {\n  display: block;\n}\n[nav-bar-transition=\"ios\"] [nav-bar=\"cached\"] .header-item {\n    display: none;\n}\n[nav-view-transition=\"android\"] [nav-view=\"entering\"],\n[nav-view-transition=\"android\"] [nav-view=\"leaving\"] {\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: transform;\n}\n[nav-view-transition=\"android\"] [nav-view=\"active\"],\n[nav-view-transition=\"android\"][nav-view-direction=\"forward\"] [nav-view=\"entering\"],\n[nav-view-transition=\"android\"][nav-view-direction=\"back\"] [nav-view=\"leaving\"] {\n  z-index: 3;\n}\n[nav-view-transition=\"android\"][nav-view-direction=\"back\"] [nav-view=\"entering\"],\n[nav-view-transition=\"android\"][nav-view-direction=\"forward\"] [nav-view=\"leaving\"] {\n  z-index: 2;\n}\n[nav-bar-transition=\"android\"] .title,\n[nav-bar-transition=\"android\"] .buttons {\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n}\n[nav-bar-transition=\"android\"] [nav-bar=\"active\"],\n[nav-bar-transition=\"android\"] [nav-bar=\"entering\"] {\n  z-index: 10;\n}\n[nav-bar-transition=\"android\"] [nav-bar=\"active\"] .bar,\n  [nav-bar-transition=\"android\"] [nav-bar=\"entering\"] .bar {\n    background: transparent;\n}\n[nav-bar-transition=\"android\"] [nav-bar=\"cached\"] {\n  display: block;\n}\n[nav-bar-transition=\"android\"] [nav-bar=\"cached\"] .header-item {\n    display: none;\n}\n[nav-swipe=\"fast\"] [nav-view],\n[nav-swipe=\"fast\"] .title,\n[nav-swipe=\"fast\"] .buttons,\n[nav-swipe=\"fast\"] .back-text {\n  -webkit-transition-duration: 50ms;\n  transition-duration: 50ms;\n  -webkit-transition-timing-function: linear;\n  transition-timing-function: linear;\n}\n[nav-swipe=\"slow\"] [nav-view],\n[nav-swipe=\"slow\"] .title,\n[nav-swipe=\"slow\"] .buttons,\n[nav-swipe=\"slow\"] .back-text {\n  -webkit-transition-duration: 160ms;\n  transition-duration: 160ms;\n  -webkit-transition-timing-function: linear;\n  transition-timing-function: linear;\n}\n[nav-view=\"cached\"],\n[nav-bar=\"cached\"] {\n  display: none;\n}\n[nav-view=\"stage\"] {\n  opacity: 0;\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n}\n[nav-bar=\"stage\"] .title,\n[nav-bar=\"stage\"] .buttons,\n[nav-bar=\"stage\"] .back-text {\n  position: absolute;\n  opacity: 0;\n  -webkit-transition-duration: 0s;\n  transition-duration: 0s;\n}\n.dialog {\n  position: fixed;\n  z-index: 5000;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f8f8f8;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.dialog_confirm .dialog .dialog_head {\n    padding: 1.2em 20px .5em;\n}\n.dialog_confirm .dialog .dialog_body {\n    text-align: left;\n}\n.dialog-head {\n  padding: 1.2em 0 .5em;\n}\n.dialog-title {\n  font-weight: 400;\n  font-size: 17px;\n}\n.dialog-body {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #444;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.dialog-foot {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px;\n}\n.dialog-foot:after {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 1px;\n    border-top: 1px solid #d5d5d6;\n    color: #d5d5d6;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5);\n}\n@media screen and (min-width: 1024px) {\n.dialog {\n    width: 35%;\n}\n}\n.vux-fade-transition {\n  opacity: 1;\n  transition: opacity linear 0.2s;\n}\n.vux-fade-enter, .vux-fade-leave {\n  opacity: 0;\n}\n.vux-dialog-transition {\n  opacity: 1;\n  transition-duration: .4s;\n  transform: translate(-50%, -50%) scale(1) !important;\n  transition-property: transform, opacity !important;\n}\n.vux-dialog-enter, .vux-dialog-leave {\n  opacity: 0;\n}\n.vux-dialog-enter {\n  transform: translate(-50%, -50%) scale(1.185) !important;\n}\n.vux-dialog-leave {\n  transform: translate(-50%, -50%) scale(1) !important;\n}\n", "", {"version":3,"sources":["/./src/js/v-dialog/index.vue"],"names":[],"mappings":"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","file":"index.vue","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, i, u, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, fieldset,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font: inherit; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\nscript {\n  display: none !important; }\n\nhtml {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-family: sans-serif;\n  font-size: 16px; }\n\nbody {\n  margin: 0; }\n\na,\nbutton,\na:focus,\nbutton:focus,\na:active,\na:hover {\n  outline: 0; }\n\na {\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent; }\n  a[href]:hover {\n    cursor: pointer; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-size: 1em;\n  font-family: monospace, serif; }\n\npre {\n  white-space: pre-wrap; }\n\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  vertical-align: baseline;\n  font-size: 75%;\n  line-height: 0; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nfieldset {\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n  border: 1px solid #c0c0c0; }\n\nlegend {\n  padding: 0; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0; }\n\nbutton,\ninput {\n  line-height: normal; }\n\nbutton,\nselect {\n  text-transform: none; }\n\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ntextarea {\n  overflow: auto; }\n\nimg {\n  -webkit-user-drag: none; }\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse; }\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  overflow: hidden;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y; }\n\nbody,\n.ionic-body {\n  -webkit-touch-callout: none;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  color: #000;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  line-height: 17px;\n  text-rendering: optimizeLegibility;\n  -webkit-backface-visibility: hidden;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none; }\n\nbody.grade-b,\nbody.grade-c {\n  text-rendering: auto; }\n\n.content {\n  position: relative; }\n\n.scroll-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  margin-top: -1px;\n  padding-top: 1px;\n  margin-bottom: -1px;\n  width: auto;\n  height: auto; }\n\n.menu .scroll-content.scroll-content-false {\n  z-index: 11; }\n\n.scroll-view {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin-top: -1px; }\n\n.scroll {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none;\n  -webkit-transform-origin: left top;\n  transform-origin: left top; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.scroll-bar {\n  position: absolute;\n  z-index: 9999; }\n\n.ng-animate .scroll-bar {\n  visibility: hidden; }\n\n.scroll-bar-h {\n  right: 2px;\n  bottom: 3px;\n  left: 2px;\n  height: 3px; }\n  .scroll-bar-h .scroll-bar-indicator {\n    height: 100%; }\n\n.scroll-bar-v {\n  top: 2px;\n  right: 3px;\n  bottom: 2px;\n  width: 3px; }\n  .scroll-bar-v .scroll-bar-indicator {\n    width: 100%; }\n\n.scroll-bar-indicator {\n  position: absolute;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: 1;\n  -webkit-transition: opacity 0.3s linear;\n  transition: opacity 0.3s linear; }\n  .scroll-bar-indicator.scroll-bar-fade-out {\n    opacity: 0; }\n\n.platform-android .scroll-bar-indicator {\n  border-radius: 0; }\n\n.grade-b .scroll-bar-indicator,\n.grade-c .scroll-bar-indicator {\n  background: #aaa; }\n  .grade-b .scroll-bar-indicator.scroll-bar-fade-out,\n  .grade-c .scroll-bar-indicator.scroll-bar-fade-out {\n    -webkit-transition: none;\n    transition: none; }\n\nion-infinite-scroll {\n  height: 60px;\n  width: 100%;\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center; }\n  ion-infinite-scroll .icon {\n    color: #666666;\n    font-size: 30px;\n    color: #666666; }\n  ion-infinite-scroll:not(.active) .spinner,\n  ion-infinite-scroll:not(.active) .icon:before {\n    display: none; }\n\n.overflow-scroll {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute; }\n  .overflow-scroll .scroll {\n    position: static;\n    height: 100%;\n    -webkit-transform: translate3d(0, 0, 0); }\n\n.has-header {\n  top: 44px; }\n\n.no-header {\n  top: 0; }\n\n.has-subheader {\n  top: 88px; }\n\n.has-tabs-top {\n  top: 93px; }\n\n.has-header.has-subheader.has-tabs-top {\n  top: 137px; }\n\n.has-footer {\n  bottom: 44px; }\n\n.has-subfooter {\n  bottom: 88px; }\n\n.has-tabs,\n.bar-footer.has-tabs {\n  bottom: 49px; }\n  .has-tabs.pane,\n  .bar-footer.has-tabs.pane {\n    bottom: 49px;\n    height: auto; }\n\n.has-footer.has-tabs {\n  bottom: 93px; }\n\n.pane {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n  z-index: 1; }\n\n.view {\n  z-index: 1; }\n\n.pane,\n.view {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  overflow: hidden; }\n\n.view-container {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%; }\n\np {\n  margin: 0 0 8.5px; }\n\nsmall {\n  font-size: 85%; }\n\ncite {\n  font-style: normal; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  color: #000;\n  font-weight: 500;\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  line-height: 1.2; }\n  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small,\n  .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small {\n    font-weight: normal;\n    line-height: 1; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 17px;\n  margin-bottom: 8.5px; }\n  h1:first-child, .h1:first-child,\n  h2:first-child, .h2:first-child,\n  h3:first-child, .h3:first-child {\n    margin-top: 0; }\n  h1 + h1, h1 + .h1,\n  h1 + h2, h1 + .h2,\n  h1 + h3, h1 + .h3, .h1 + h1, .h1 + .h1,\n  .h1 + h2, .h1 + .h2,\n  .h1 + h3, .h1 + .h3,\n  h2 + h1,\n  h2 + .h1,\n  h2 + h2,\n  h2 + .h2,\n  h2 + h3,\n  h2 + .h3, .h2 + h1, .h2 + .h1,\n  .h2 + h2, .h2 + .h2,\n  .h2 + h3, .h2 + .h3,\n  h3 + h1,\n  h3 + .h1,\n  h3 + h2,\n  h3 + .h2,\n  h3 + h3,\n  h3 + .h3, .h3 + h1, .h3 + .h1,\n  .h3 + h2, .h3 + .h2,\n  .h3 + h3, .h3 + .h3 {\n    margin-top: 8.5px; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 8.5px;\n  margin-bottom: 8.5px; }\n\nh1, .h1 {\n  font-size: 31px; }\n\nh2, .h2 {\n  font-size: 25px; }\n\nh3, .h3 {\n  font-size: 21px; }\n\nh4, .h4 {\n  font-size: 15px; }\n\nh5, .h5 {\n  font-size: 12px; }\n\nh6, .h6 {\n  font-size: 11px; }\n\nh1 small, .h1 small {\n  font-size: 21px; }\n\nh2 small, .h2 small {\n  font-size: 15px; }\n\nh3 small, .h3 small,\nh4 small, .h4 small {\n  font-size: 12px; }\n\ndl {\n  margin-bottom: 17px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\nblockquote {\n  margin: 0 0 17px;\n  padding: 8.5px 17px;\n  border-left: 5px solid gray; }\n  blockquote p {\n    font-weight: 300;\n    font-size: 15px;\n    line-height: 1.25; }\n  blockquote p:last-child {\n    margin-bottom: 0; }\n  blockquote small {\n    display: block;\n    line-height: 1.42857; }\n    blockquote small:before {\n      content: '\\2014 \\00A0'; }\n\nq:before,\nq:after,\nblockquote:before,\nblockquote:after {\n  content: \"\"; }\n\naddress {\n  display: block;\n  margin-bottom: 17px;\n  font-style: normal;\n  line-height: 1.42857; }\n\na.subdued {\n  padding-right: 10px;\n  color: #888;\n  text-decoration: none; }\n  a.subdued:hover {\n    text-decoration: none; }\n  a.subdued:last-child {\n    padding-right: 0; }\n\n.bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 9;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 5px;\n  width: 100%;\n  height: 44px;\n  border-width: 0;\n  border-style: solid;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid #ddd;\n  background-color: white;\n  background-size: 0; }\n  @media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n    .bar {\n      border: none;\n      background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n      background-position: bottom;\n      background-size: 100% 1px;\n      background-repeat: no-repeat; } }\n  .bar.bar-clear {\n    border: none;\n    background: none;\n    color: #fff; }\n    .bar.bar-clear .button {\n      color: #fff; }\n    .bar.bar-clear .title {\n      color: #fff; }\n  .bar.item-input-inset .item-input-wrapper {\n    margin-top: -1px; }\n    .bar.item-input-inset .item-input-wrapper input {\n      padding-left: 8px;\n      width: 94%;\n      height: 28px;\n      background: transparent; }\n  .bar.bar-light {\n    border-color: #ddd;\n    background-color: white;\n    background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n    color: #444; }\n    .bar.bar-light .title {\n      color: #444; }\n    .bar.bar-light.bar-footer {\n      background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%); }\n  .bar.bar-stable {\n    border-color: #b2b2b2;\n    background-color: #f8f8f8;\n    background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n    color: #444; }\n    .bar.bar-stable .title {\n      color: #444; }\n    .bar.bar-stable.bar-footer {\n      background-image: linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%); }\n  .bar.bar-positive {\n    border-color: #979797;\n    background-color: #979797;\n    background-image: linear-gradient(0deg, #979797, #979797 50%, transparent 50%);\n    color: #fff; }\n    .bar.bar-positive .title {\n      color: #fff; }\n    .bar.bar-positive.bar-footer {\n      background-image: linear-gradient(180deg, #979797, #979797 50%, transparent 50%); }\n  .bar.bar-calm {\n    border-color: #0a9dc7;\n    background-color: #11c1f3;\n    background-image: linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%);\n    color: #fff; }\n    .bar.bar-calm .title {\n      color: #fff; }\n    .bar.bar-calm.bar-footer {\n      background-image: linear-gradient(180deg, #0a9dc7, #0a9dc7 50%, transparent 50%); }\n  .bar.bar-assertive {\n    border-color: #e42112;\n    background-color: #ef473a;\n    background-image: linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%);\n    color: #fff; }\n    .bar.bar-assertive .title {\n      color: #fff; }\n    .bar.bar-assertive.bar-footer {\n      background-image: linear-gradient(180deg, #e42112, #e42112 50%, transparent 50%); }\n  .bar.bar-balanced {\n    border-color: #28a54c;\n    background-color: #33cd5f;\n    background-image: linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%);\n    color: #fff; }\n    .bar.bar-balanced .title {\n      color: #fff; }\n    .bar.bar-balanced.bar-footer {\n      background-image: linear-gradient(180deg, #28a54c, #979797 50%, transparent 50%); }\n  .bar.bar-energized {\n    border-color: #e6b500;\n    background-color: #ffc900;\n    background-image: linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%);\n    color: #fff; }\n    .bar.bar-energized .title {\n      color: #fff; }\n    .bar.bar-energized.bar-footer {\n      background-image: linear-gradient(180deg, #e6b500, #e6b500 50%, transparent 50%); }\n  .bar.bar-royal {\n    border-color: #6b46e5;\n    background-color: #886aea;\n    background-image: linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%);\n    color: #fff; }\n    .bar.bar-royal .title {\n      color: #fff; }\n    .bar.bar-royal.bar-footer {\n      background-image: linear-gradient(180deg, #6b46e5, #6b46e5 50%, transparent 50%); }\n  .bar.bar-dark {\n    border-color: #111;\n    background-color: #444444;\n    background-image: linear-gradient(0deg, #111, #111 50%, transparent 50%);\n    color: #fff; }\n    .bar.bar-dark .title {\n      color: #fff; }\n    .bar.bar-dark.bar-footer {\n      background-image: linear-gradient(180deg, #111, #111 50%, transparent 50%); }\n  .bar .title {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 0;\n    overflow: hidden;\n    margin: 0 10px;\n    min-width: 30px;\n    height: 43px;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 17px;\n    font-weight: 500;\n    line-height: 44px; }\n    .bar .title.title-left {\n      text-align: left; }\n    .bar .title.title-right {\n      text-align: right; }\n  .bar .title a {\n    color: inherit; }\n  .bar .button {\n    z-index: 1;\n    padding: 0 8px;\n    min-width: initial;\n    min-height: 31px;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 32px; }\n    .bar .button.button-icon:before,\n    .bar .button .icon:before, .bar .button.icon:before, .bar .button.icon-left:before, .bar .button.icon-right:before {\n      padding-right: 2px;\n      padding-left: 2px;\n      font-size: 20px;\n      line-height: 32px; }\n    .bar .button.button-icon {\n      font-size: 17px; }\n      .bar .button.button-icon .icon:before, .bar .button.button-icon:before, .bar .button.button-icon.icon-left:before, .bar .button.button-icon.icon-right:before {\n        vertical-align: top;\n        font-size: 32px;\n        line-height: 32px; }\n    .bar .button.button-clear {\n      padding-right: 2px;\n      padding-left: 2px;\n      font-weight: 300;\n      font-size: 17px; }\n      .bar .button.button-clear .icon:before, .bar .button.button-clear.icon:before, .bar .button.button-clear.icon-left:before, .bar .button.button-clear.icon-right:before {\n        font-size: 32px;\n        line-height: 32px; }\n    .bar .button.back-button {\n      display: block;\n      margin-right: 5px;\n      padding: 0;\n      white-space: nowrap;\n      font-weight: 400; }\n    .bar .button.back-button.active, .bar .button.back-button.activated {\n      opacity: 0.2; }\n  .bar .button-bar > .button,\n  .bar .buttons > .button {\n    min-height: 31px;\n    line-height: 32px; }\n  .bar .button-bar + .button,\n  .bar .button + .button-bar {\n    margin-left: 5px; }\n  .bar .buttons,\n  .bar .buttons.primary-buttons,\n  .bar .buttons.secondary-buttons {\n    display: inherit; }\n  .bar .buttons span {\n    display: inline-block; }\n  .bar .buttons-left span {\n    margin-right: 5px;\n    display: inherit; }\n  .bar .buttons-right span {\n    margin-left: 5px;\n    display: inherit; }\n  .bar .title + .button:last-child,\n  .bar > .button + .button:last-child,\n  .bar > .button.pull-right,\n  .bar .buttons.pull-right,\n  .bar .title + .buttons {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    bottom: 5px; }\n\n.platform-android .nav-bar-has-subheader .bar {\n  background-image: none; }\n\n.platform-android .bar .back-button .icon:before {\n  font-size: 24px; }\n\n.platform-android .bar .title {\n  font-size: 19px;\n  line-height: 44px; }\n\n.bar-light .button {\n  border-color: #ddd;\n  background-color: white;\n  color: #444; }\n  .bar-light .button:hover {\n    color: #444;\n    text-decoration: none; }\n  .bar-light .button.active, .bar-light .button.activated {\n    border-color: #ccc;\n    background-color: #fafafa;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-light .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #444;\n    font-size: 17px; }\n  .bar-light .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-stable .button {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  color: #444; }\n  .bar-stable .button:hover {\n    color: #444;\n    text-decoration: none; }\n  .bar-stable .button.active, .bar-stable .button.activated {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-stable .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #444;\n    font-size: 17px; }\n  .bar-stable .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-positive .button {\n  border-color: #979797;\n  background-color: #979797;\n  color: #fff; }\n  .bar-positive .button:hover {\n    color: #fff;\n    text-decoration: none; }\n  .bar-positive .button.active, .bar-positive .button.activated {\n    border-color: #7e7e7e;\n    background-color: #7e7e7e;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-positive .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px; }\n  .bar-positive .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-calm .button {\n  border-color: #0a9dc7;\n  background-color: #11c1f3;\n  color: #fff; }\n  .bar-calm .button:hover {\n    color: #fff;\n    text-decoration: none; }\n  .bar-calm .button.active, .bar-calm .button.activated {\n    border-color: #0a9dc7;\n    background-color: #0a9dc7;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-calm .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px; }\n  .bar-calm .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-assertive .button {\n  border-color: #e42112;\n  background-color: #ef473a;\n  color: #fff; }\n  .bar-assertive .button:hover {\n    color: #fff;\n    text-decoration: none; }\n  .bar-assertive .button.active, .bar-assertive .button.activated {\n    border-color: #e42112;\n    background-color: #e42112;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-assertive .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px; }\n  .bar-assertive .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-balanced .button {\n  border-color: #28a54c;\n  background-color: #33cd5f;\n  color: #fff; }\n  .bar-balanced .button:hover {\n    color: #fff;\n    text-decoration: none; }\n  .bar-balanced .button.active, .bar-balanced .button.activated {\n    border-color: #28a54c;\n    background-color: #28a54c;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-balanced .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px; }\n  .bar-balanced .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-energized .button {\n  border-color: #e6b500;\n  background-color: #ffc900;\n  color: #fff; }\n  .bar-energized .button:hover {\n    color: #fff;\n    text-decoration: none; }\n  .bar-energized .button.active, .bar-energized .button.activated {\n    border-color: #e6b500;\n    background-color: #e6b500;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-energized .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px; }\n  .bar-energized .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-royal .button {\n  border-color: #6b46e5;\n  background-color: #886aea;\n  color: #fff; }\n  .bar-royal .button:hover {\n    color: #fff;\n    text-decoration: none; }\n  .bar-royal .button.active, .bar-royal .button.activated {\n    border-color: #6b46e5;\n    background-color: #6b46e5;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-royal .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px; }\n  .bar-royal .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-dark .button {\n  border-color: #111;\n  background-color: #444444;\n  color: #fff; }\n  .bar-dark .button:hover {\n    color: #fff;\n    text-decoration: none; }\n  .bar-dark .button.active, .bar-dark .button.activated {\n    border-color: #000;\n    background-color: #262626;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .bar-dark .button.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n    font-size: 17px; }\n  .bar-dark .button.button-icon {\n    border-color: transparent;\n    background: none; }\n\n.bar-header {\n  top: 0;\n  border-top-width: 0;\n  border-bottom-width: 1px; }\n  .bar-header.has-tabs-top {\n    border-bottom-width: 0px;\n    background-image: none; }\n\n.tabs-top .bar-header {\n  border-bottom-width: 0px;\n  background-image: none; }\n\n.bar-footer {\n  bottom: 0;\n  border-top-width: 1px;\n  border-bottom-width: 0;\n  background-position: top;\n  height: 44px; }\n  .bar-footer.item-input-inset {\n    position: absolute; }\n\n.bar-tabs {\n  padding: 0; }\n\n.bar-subheader {\n  top: 44px;\n  display: block;\n  height: 44px; }\n\n.bar-subfooter {\n  bottom: 44px;\n  display: block;\n  height: 44px; }\n\n.nav-bar-block {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9; }\n\n.bar .back-button.hide,\n.bar .buttons .hide {\n  display: none; }\n\n.nav-bar-tabs-top .bar {\n  background-image: none; }\n\n.tabs {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: horizontal;\n  -moz-flex-direction: horizontal;\n  -ms-flex-direction: horizontal;\n  flex-direction: horizontal;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n  color: #444;\n  position: absolute;\n  bottom: 0;\n  z-index: 5;\n  width: 100%;\n  height: 49px;\n  border-style: solid;\n  border-top-width: 1px;\n  background-size: 0;\n  line-height: 49px; }\n  .tabs .tab-item .badge {\n    background-color: #444;\n    color: #f8f8f8; }\n  @media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n    .tabs {\n      padding-top: 2px;\n      border-top: none !important;\n      border-bottom: none;\n      background-position: top;\n      background-size: 100% 1px;\n      background-repeat: no-repeat; } }\n\n.tabs-light > .tabs,\n.tabs.tabs-light {\n  border-color: #ddd;\n  background-color: #fff;\n  background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n  color: #444; }\n  .tabs-light > .tabs .tab-item .badge,\n  .tabs.tabs-light .tab-item .badge {\n    background-color: #444;\n    color: #fff; }\n\n.tabs-stable > .tabs,\n.tabs.tabs-stable {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n  color: #444; }\n  .tabs-stable > .tabs .tab-item .badge,\n  .tabs.tabs-stable .tab-item .badge {\n    background-color: #444;\n    color: #f8f8f8; }\n\n.tabs-positive > .tabs,\n.tabs.tabs-positive {\n  border-color: #979797;\n  background-color: #979797;\n  background-image: linear-gradient(0deg, #979797, #979797 50%, transparent 50%);\n  color: #fff; }\n  .tabs-positive > .tabs .tab-item .badge,\n  .tabs.tabs-positive .tab-item .badge {\n    background-color: #fff;\n    color: #979797; }\n\n.tabs-calm > .tabs,\n.tabs.tabs-calm {\n  border-color: #0a9dc7;\n  background-color: #11c1f3;\n  background-image: linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%);\n  color: #fff; }\n  .tabs-calm > .tabs .tab-item .badge,\n  .tabs.tabs-calm .tab-item .badge {\n    background-color: #fff;\n    color: #11c1f3; }\n\n.tabs-assertive > .tabs,\n.tabs.tabs-assertive {\n  border-color: #e42112;\n  background-color: #ef473a;\n  background-image: linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%);\n  color: #fff; }\n  .tabs-assertive > .tabs .tab-item .badge,\n  .tabs.tabs-assertive .tab-item .badge {\n    background-color: #fff;\n    color: #ef473a; }\n\n.tabs-balanced > .tabs,\n.tabs.tabs-balanced {\n  border-color: #28a54c;\n  background-color: #33cd5f;\n  background-image: linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%);\n  color: #fff; }\n  .tabs-balanced > .tabs .tab-item .badge,\n  .tabs.tabs-balanced .tab-item .badge {\n    background-color: #fff;\n    color: #33cd5f; }\n\n.tabs-energized > .tabs,\n.tabs.tabs-energized {\n  border-color: #e6b500;\n  background-color: #ffc900;\n  background-image: linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%);\n  color: #fff; }\n  .tabs-energized > .tabs .tab-item .badge,\n  .tabs.tabs-energized .tab-item .badge {\n    background-color: #fff;\n    color: #ffc900; }\n\n.tabs-royal > .tabs,\n.tabs.tabs-royal {\n  border-color: #6b46e5;\n  background-color: #886aea;\n  background-image: linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%);\n  color: #fff; }\n  .tabs-royal > .tabs .tab-item .badge,\n  .tabs.tabs-royal .tab-item .badge {\n    background-color: #fff;\n    color: #886aea; }\n\n.tabs-dark > .tabs,\n.tabs.tabs-dark {\n  border-color: #111;\n  background-color: #444;\n  background-image: linear-gradient(0deg, #111, #111 50%, transparent 50%);\n  color: #fff; }\n  .tabs-dark > .tabs .tab-item .badge,\n  .tabs.tabs-dark .tab-item .badge {\n    background-color: #fff;\n    color: #444; }\n\n.tabs-striped .tabs {\n  background-color: white;\n  background-image: none;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  padding-top: 2px; }\n\n.tabs-striped .tab-item.tab-item-active, .tabs-striped .tab-item.active, .tabs-striped .tab-item.activated {\n  margin-top: -2px;\n  border-style: solid;\n  border-width: 2px 0 0 0;\n  border-color: #444; }\n  .tabs-striped .tab-item.tab-item-active .badge, .tabs-striped .tab-item.active .badge, .tabs-striped .tab-item.activated .badge {\n    top: 2px;\n    opacity: 1; }\n\n.tabs-striped.tabs-light .tabs {\n  background-color: #fff; }\n\n.tabs-striped.tabs-light .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-light .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-light .tab-item.tab-item-active, .tabs-striped.tabs-light .tab-item.active, .tabs-striped.tabs-light .tab-item.activated {\n    margin-top: -2px;\n    color: #444;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #444; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-stable .tabs {\n  background-color: #f8f8f8; }\n\n.tabs-striped.tabs-stable .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-stable .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-stable .tab-item.tab-item-active, .tabs-striped.tabs-stable .tab-item.active, .tabs-striped.tabs-stable .tab-item.activated {\n    margin-top: -2px;\n    color: #444;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #444; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-positive .tabs {\n  background-color: #979797; }\n\n.tabs-striped.tabs-positive .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-positive .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-positive .tab-item.tab-item-active, .tabs-striped.tabs-positive .tab-item.active, .tabs-striped.tabs-positive .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-calm .tabs {\n  background-color: #11c1f3; }\n\n.tabs-striped.tabs-calm .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-calm .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-calm .tab-item.tab-item-active, .tabs-striped.tabs-calm .tab-item.active, .tabs-striped.tabs-calm .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-assertive .tabs {\n  background-color: #ef473a; }\n\n.tabs-striped.tabs-assertive .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-assertive .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-assertive .tab-item.tab-item-active, .tabs-striped.tabs-assertive .tab-item.active, .tabs-striped.tabs-assertive .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-balanced .tabs {\n  background-color: #33cd5f; }\n\n.tabs-striped.tabs-balanced .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-balanced .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-balanced .tab-item.tab-item-active, .tabs-striped.tabs-balanced .tab-item.active, .tabs-striped.tabs-balanced .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-energized .tabs {\n  background-color: #ffc900; }\n\n.tabs-striped.tabs-energized .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-energized .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-energized .tab-item.tab-item-active, .tabs-striped.tabs-energized .tab-item.active, .tabs-striped.tabs-energized .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-royal .tabs {\n  background-color: #886aea; }\n\n.tabs-striped.tabs-royal .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-royal .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-royal .tab-item.tab-item-active, .tabs-striped.tabs-royal .tab-item.active, .tabs-striped.tabs-royal .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-dark .tabs {\n  background-color: #444; }\n\n.tabs-striped.tabs-dark .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-dark .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-dark .tab-item.tab-item-active, .tabs-striped.tabs-dark .tab-item.active, .tabs-striped.tabs-dark .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border-style: solid;\n    border-width: 2px 0 0 0;\n    border-color: #fff; }\n\n.tabs-striped.tabs-top .tab-item.tab-item-active .badge, .tabs-striped.tabs-top .tab-item.active .badge, .tabs-striped.tabs-top .tab-item.activated .badge {\n  top: 4%; }\n\n.tabs-striped.tabs-background-light .tabs {\n  background-color: #fff;\n  background-image: none; }\n\n.tabs-striped.tabs-background-stable .tabs {\n  background-color: #f8f8f8;\n  background-image: none; }\n\n.tabs-striped.tabs-background-positive .tabs {\n  background-color: #979797;\n  background-image: none; }\n\n.tabs-striped.tabs-background-calm .tabs {\n  background-color: #11c1f3;\n  background-image: none; }\n\n.tabs-striped.tabs-background-assertive .tabs {\n  background-color: #ef473a;\n  background-image: none; }\n\n.tabs-striped.tabs-background-balanced .tabs {\n  background-color: #33cd5f;\n  background-image: none; }\n\n.tabs-striped.tabs-background-energized .tabs {\n  background-color: #ffc900;\n  background-image: none; }\n\n.tabs-striped.tabs-background-royal .tabs {\n  background-color: #886aea;\n  background-image: none; }\n\n.tabs-striped.tabs-background-dark .tabs {\n  background-color: #444;\n  background-image: none; }\n\n.tabs-striped.tabs-color-light .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-light .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-light .tab-item.tab-item-active, .tabs-striped.tabs-color-light .tab-item.active, .tabs-striped.tabs-color-light .tab-item.activated {\n    margin-top: -2px;\n    color: #fff;\n    border: 0 solid #fff;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-light .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-light .tab-item.active .badge, .tabs-striped.tabs-color-light .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-stable .tab-item {\n  color: rgba(248, 248, 248, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-stable .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-stable .tab-item.tab-item-active, .tabs-striped.tabs-color-stable .tab-item.active, .tabs-striped.tabs-color-stable .tab-item.activated {\n    margin-top: -2px;\n    color: #f8f8f8;\n    border: 0 solid #f8f8f8;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-stable .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-stable .tab-item.active .badge, .tabs-striped.tabs-color-stable .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-positive .tab-item {\n  color: rgba(151, 151, 151, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-positive .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-positive .tab-item.tab-item-active, .tabs-striped.tabs-color-positive .tab-item.active, .tabs-striped.tabs-color-positive .tab-item.activated {\n    margin-top: -2px;\n    color: #979797;\n    border: 0 solid #979797;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-positive .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-positive .tab-item.active .badge, .tabs-striped.tabs-color-positive .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-calm .tab-item {\n  color: rgba(17, 193, 243, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-calm .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-calm .tab-item.tab-item-active, .tabs-striped.tabs-color-calm .tab-item.active, .tabs-striped.tabs-color-calm .tab-item.activated {\n    margin-top: -2px;\n    color: #11c1f3;\n    border: 0 solid #11c1f3;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-calm .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-calm .tab-item.active .badge, .tabs-striped.tabs-color-calm .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-assertive .tab-item {\n  color: rgba(239, 71, 58, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-assertive .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-assertive .tab-item.tab-item-active, .tabs-striped.tabs-color-assertive .tab-item.active, .tabs-striped.tabs-color-assertive .tab-item.activated {\n    margin-top: -2px;\n    color: #ef473a;\n    border: 0 solid #ef473a;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-assertive .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-assertive .tab-item.active .badge, .tabs-striped.tabs-color-assertive .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-balanced .tab-item {\n  color: rgba(51, 205, 95, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-balanced .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-balanced .tab-item.tab-item-active, .tabs-striped.tabs-color-balanced .tab-item.active, .tabs-striped.tabs-color-balanced .tab-item.activated {\n    margin-top: -2px;\n    color: #33cd5f;\n    border: 0 solid #33cd5f;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-balanced .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-balanced .tab-item.active .badge, .tabs-striped.tabs-color-balanced .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-energized .tab-item {\n  color: rgba(255, 201, 0, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-energized .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-energized .tab-item.tab-item-active, .tabs-striped.tabs-color-energized .tab-item.active, .tabs-striped.tabs-color-energized .tab-item.activated {\n    margin-top: -2px;\n    color: #ffc900;\n    border: 0 solid #ffc900;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-energized .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-energized .tab-item.active .badge, .tabs-striped.tabs-color-energized .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-royal .tab-item {\n  color: rgba(136, 106, 234, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-royal .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-royal .tab-item.tab-item-active, .tabs-striped.tabs-color-royal .tab-item.active, .tabs-striped.tabs-color-royal .tab-item.activated {\n    margin-top: -2px;\n    color: #886aea;\n    border: 0 solid #886aea;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-royal .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-royal .tab-item.active .badge, .tabs-striped.tabs-color-royal .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-striped.tabs-color-dark .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1; }\n  .tabs-striped.tabs-color-dark .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-striped.tabs-color-dark .tab-item.tab-item-active, .tabs-striped.tabs-color-dark .tab-item.active, .tabs-striped.tabs-color-dark .tab-item.activated {\n    margin-top: -2px;\n    color: #444;\n    border: 0 solid #444;\n    border-top-width: 2px; }\n    .tabs-striped.tabs-color-dark .tab-item.tab-item-active .badge, .tabs-striped.tabs-color-dark .tab-item.active .badge, .tabs-striped.tabs-color-dark .tab-item.activated .badge {\n      top: 2px;\n      opacity: 1; }\n\n.tabs-background-light .tabs,\n.tabs-background-light > .tabs {\n  background-color: #fff;\n  background-image: linear-gradient(0deg, #ddd, #ddd 50%, transparent 50%);\n  border-color: #ddd; }\n\n.tabs-background-stable .tabs,\n.tabs-background-stable > .tabs {\n  background-color: #f8f8f8;\n  background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);\n  border-color: #b2b2b2; }\n\n.tabs-background-positive .tabs,\n.tabs-background-positive > .tabs {\n  background-color: #979797;\n  background-image: linear-gradient(0deg, #979797, #979797 50%, transparent 50%);\n  border-color: #979797; }\n\n.tabs-background-calm .tabs,\n.tabs-background-calm > .tabs {\n  background-color: #11c1f3;\n  background-image: linear-gradient(0deg, #0a9dc7, #0a9dc7 50%, transparent 50%);\n  border-color: #0a9dc7; }\n\n.tabs-background-assertive .tabs,\n.tabs-background-assertive > .tabs {\n  background-color: #ef473a;\n  background-image: linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%);\n  border-color: #e42112; }\n\n.tabs-background-balanced .tabs,\n.tabs-background-balanced > .tabs {\n  background-color: #33cd5f;\n  background-image: linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%);\n  border-color: #28a54c; }\n\n.tabs-background-energized .tabs,\n.tabs-background-energized > .tabs {\n  background-color: #ffc900;\n  background-image: linear-gradient(0deg, #e6b500, #e6b500 50%, transparent 50%);\n  border-color: #e6b500; }\n\n.tabs-background-royal .tabs,\n.tabs-background-royal > .tabs {\n  background-color: #886aea;\n  background-image: linear-gradient(0deg, #6b46e5, #6b46e5 50%, transparent 50%);\n  border-color: #6b46e5; }\n\n.tabs-background-dark .tabs,\n.tabs-background-dark > .tabs {\n  background-color: #444;\n  background-image: linear-gradient(0deg, #111, #111 50%, transparent 50%);\n  border-color: #111; }\n\n.tabs-color-light .tab-item {\n  color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n  .tabs-color-light .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-light .tab-item.tab-item-active, .tabs-color-light .tab-item.active, .tabs-color-light .tab-item.activated {\n    color: #fff;\n    border: 0 solid #fff; }\n    .tabs-color-light .tab-item.tab-item-active .badge, .tabs-color-light .tab-item.active .badge, .tabs-color-light .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-stable .tab-item {\n  color: rgba(248, 248, 248, 0.4);\n  opacity: 1; }\n  .tabs-color-stable .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-stable .tab-item.tab-item-active, .tabs-color-stable .tab-item.active, .tabs-color-stable .tab-item.activated {\n    color: #f8f8f8;\n    border: 0 solid #f8f8f8; }\n    .tabs-color-stable .tab-item.tab-item-active .badge, .tabs-color-stable .tab-item.active .badge, .tabs-color-stable .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-positive .tab-item {\n  color: rgba(151, 151, 151, 0.4);\n  opacity: 1; }\n  .tabs-color-positive .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-positive .tab-item.tab-item-active, .tabs-color-positive .tab-item.active, .tabs-color-positive .tab-item.activated {\n    color: #979797;\n    border: 0 solid #979797; }\n    .tabs-color-positive .tab-item.tab-item-active .badge, .tabs-color-positive .tab-item.active .badge, .tabs-color-positive .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-calm .tab-item {\n  color: rgba(17, 193, 243, 0.4);\n  opacity: 1; }\n  .tabs-color-calm .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-calm .tab-item.tab-item-active, .tabs-color-calm .tab-item.active, .tabs-color-calm .tab-item.activated {\n    color: #11c1f3;\n    border: 0 solid #11c1f3; }\n    .tabs-color-calm .tab-item.tab-item-active .badge, .tabs-color-calm .tab-item.active .badge, .tabs-color-calm .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-assertive .tab-item {\n  color: rgba(239, 71, 58, 0.4);\n  opacity: 1; }\n  .tabs-color-assertive .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-assertive .tab-item.tab-item-active, .tabs-color-assertive .tab-item.active, .tabs-color-assertive .tab-item.activated {\n    color: #ef473a;\n    border: 0 solid #ef473a; }\n    .tabs-color-assertive .tab-item.tab-item-active .badge, .tabs-color-assertive .tab-item.active .badge, .tabs-color-assertive .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-balanced .tab-item {\n  color: rgba(51, 205, 95, 0.4);\n  opacity: 1; }\n  .tabs-color-balanced .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-balanced .tab-item.tab-item-active, .tabs-color-balanced .tab-item.active, .tabs-color-balanced .tab-item.activated {\n    color: #33cd5f;\n    border: 0 solid #33cd5f; }\n    .tabs-color-balanced .tab-item.tab-item-active .badge, .tabs-color-balanced .tab-item.active .badge, .tabs-color-balanced .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-energized .tab-item {\n  color: rgba(255, 201, 0, 0.4);\n  opacity: 1; }\n  .tabs-color-energized .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-energized .tab-item.tab-item-active, .tabs-color-energized .tab-item.active, .tabs-color-energized .tab-item.activated {\n    color: #ffc900;\n    border: 0 solid #ffc900; }\n    .tabs-color-energized .tab-item.tab-item-active .badge, .tabs-color-energized .tab-item.active .badge, .tabs-color-energized .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-royal .tab-item {\n  color: rgba(136, 106, 234, 0.4);\n  opacity: 1; }\n  .tabs-color-royal .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-royal .tab-item.tab-item-active, .tabs-color-royal .tab-item.active, .tabs-color-royal .tab-item.activated {\n    color: #886aea;\n    border: 0 solid #886aea; }\n    .tabs-color-royal .tab-item.tab-item-active .badge, .tabs-color-royal .tab-item.active .badge, .tabs-color-royal .tab-item.activated .badge {\n      opacity: 1; }\n\n.tabs-color-dark .tab-item {\n  color: rgba(68, 68, 68, 0.4);\n  opacity: 1; }\n  .tabs-color-dark .tab-item .badge {\n    opacity: 0.4; }\n  .tabs-color-dark .tab-item.tab-item-active, .tabs-color-dark .tab-item.active, .tabs-color-dark .tab-item.activated {\n    color: #444;\n    border: 0 solid #444; }\n    .tabs-color-dark .tab-item.tab-item-active .badge, .tabs-color-dark .tab-item.active .badge, .tabs-color-dark .tab-item.activated .badge {\n      opacity: 1; }\n\nion-tabs.tabs-color-active-light .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-light .tab-item.tab-item-active, ion-tabs.tabs-color-active-light .tab-item.active, ion-tabs.tabs-color-active-light .tab-item.activated {\n    color: #fff; }\n\nion-tabs.tabs-color-active-stable .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-stable .tab-item.tab-item-active, ion-tabs.tabs-color-active-stable .tab-item.active, ion-tabs.tabs-color-active-stable .tab-item.activated {\n    color: #f8f8f8; }\n\nion-tabs.tabs-color-active-positive .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-positive .tab-item.tab-item-active, ion-tabs.tabs-color-active-positive .tab-item.active, ion-tabs.tabs-color-active-positive .tab-item.activated {\n    color: #979797; }\n\nion-tabs.tabs-color-active-calm .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-calm .tab-item.tab-item-active, ion-tabs.tabs-color-active-calm .tab-item.active, ion-tabs.tabs-color-active-calm .tab-item.activated {\n    color: #11c1f3; }\n\nion-tabs.tabs-color-active-assertive .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-assertive .tab-item.tab-item-active, ion-tabs.tabs-color-active-assertive .tab-item.active, ion-tabs.tabs-color-active-assertive .tab-item.activated {\n    color: #ef473a; }\n\nion-tabs.tabs-color-active-balanced .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-balanced .tab-item.tab-item-active, ion-tabs.tabs-color-active-balanced .tab-item.active, ion-tabs.tabs-color-active-balanced .tab-item.activated {\n    color: #33cd5f; }\n\nion-tabs.tabs-color-active-energized .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-energized .tab-item.tab-item-active, ion-tabs.tabs-color-active-energized .tab-item.active, ion-tabs.tabs-color-active-energized .tab-item.activated {\n    color: #ffc900; }\n\nion-tabs.tabs-color-active-royal .tab-item {\n  color: #444; }\n  ion-tabs.tabs-color-active-royal .tab-item.tab-item-active, ion-tabs.tabs-color-active-royal .tab-item.active, ion-tabs.tabs-color-active-royal .tab-item.activated {\n    color: #886aea; }\n\nion-tabs.tabs-color-active-dark .tab-item {\n  color: #fff; }\n  ion-tabs.tabs-color-active-dark .tab-item.tab-item-active, ion-tabs.tabs-color-active-dark .tab-item.active, ion-tabs.tabs-color-active-dark .tab-item.activated {\n    color: #444; }\n\n.tabs-top.tabs-striped {\n  padding-bottom: 0; }\n  .tabs-top.tabs-striped .tab-item {\n    background: transparent;\n    -webkit-transition: color .1s ease;\n    -moz-transition: color .1s ease;\n    -ms-transition: color .1s ease;\n    -o-transition: color .1s ease;\n    transition: color .1s ease; }\n    .tabs-top.tabs-striped .tab-item.tab-item-active, .tabs-top.tabs-striped .tab-item.active, .tabs-top.tabs-striped .tab-item.activated {\n      margin-top: 1px;\n      border-width: 0px 0px 2px 0px !important;\n      border-style: solid; }\n      .tabs-top.tabs-striped .tab-item.tab-item-active > .badge, .tabs-top.tabs-striped .tab-item.tab-item-active > i, .tabs-top.tabs-striped .tab-item.active > .badge, .tabs-top.tabs-striped .tab-item.active > i, .tabs-top.tabs-striped .tab-item.activated > .badge, .tabs-top.tabs-striped .tab-item.activated > i {\n        margin-top: -1px; }\n    .tabs-top.tabs-striped .tab-item .badge {\n      -webkit-transition: color .2s ease;\n      -moz-transition: color .2s ease;\n      -ms-transition: color .2s ease;\n      -o-transition: color .2s ease;\n      transition: color .2s ease; }\n  .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.tab-item-active .tab-title, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.tab-item-active i, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.active .tab-title, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.active i, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.activated .tab-title, .tabs-top.tabs-striped:not(.tabs-icon-left):not(.tabs-icon-top) .tab-item.activated i {\n    display: block;\n    margin-top: -1px; }\n  .tabs-top.tabs-striped.tabs-icon-left .tab-item {\n    margin-top: 1px; }\n    .tabs-top.tabs-striped.tabs-icon-left .tab-item.tab-item-active .tab-title, .tabs-top.tabs-striped.tabs-icon-left .tab-item.tab-item-active i, .tabs-top.tabs-striped.tabs-icon-left .tab-item.active .tab-title, .tabs-top.tabs-striped.tabs-icon-left .tab-item.active i, .tabs-top.tabs-striped.tabs-icon-left .tab-item.activated .tab-title, .tabs-top.tabs-striped.tabs-icon-left .tab-item.activated i {\n      margin-top: -0.1em; }\n\n.tabs-top > .tabs,\n.tabs.tabs-top {\n  top: 44px;\n  padding-top: 0;\n  background-position: bottom;\n  border-top-width: 0;\n  border-bottom-width: 1px; }\n  .tabs-top > .tabs .tab-item.tab-item-active .badge, .tabs-top > .tabs .tab-item.active .badge, .tabs-top > .tabs .tab-item.activated .badge,\n  .tabs.tabs-top .tab-item.tab-item-active .badge,\n  .tabs.tabs-top .tab-item.active .badge,\n  .tabs.tabs-top .tab-item.activated .badge {\n    top: 4%; }\n\n.tabs-top ~ .bar-header {\n  border-bottom-width: 0; }\n\n.tab-item {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  overflow: hidden;\n  max-width: 150px;\n  height: 100%;\n  color: inherit;\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  opacity: 0.7; }\n  .tab-item:hover {\n    cursor: pointer; }\n  .tab-item.tab-hidden {\n    display: none; }\n\n.tabs-item-hide > .tabs,\n.tabs.tabs-item-hide {\n  display: none; }\n\n.tabs-icon-top > .tabs .tab-item,\n.tabs-icon-top.tabs .tab-item,\n.tabs-icon-bottom > .tabs .tab-item,\n.tabs-icon-bottom.tabs .tab-item {\n  font-size: 10px;\n  line-height: 14px; }\n\n.tab-item .icon {\n  display: block;\n  margin: 0 auto;\n  height: 32px;\n  font-size: 32px; }\n\n.tabs-icon-left.tabs .tab-item,\n.tabs-icon-left > .tabs .tab-item,\n.tabs-icon-right.tabs .tab-item,\n.tabs-icon-right > .tabs .tab-item {\n  font-size: 10px; }\n  .tabs-icon-left.tabs .tab-item .icon, .tabs-icon-left.tabs .tab-item .tab-title,\n  .tabs-icon-left > .tabs .tab-item .icon,\n  .tabs-icon-left > .tabs .tab-item .tab-title,\n  .tabs-icon-right.tabs .tab-item .icon,\n  .tabs-icon-right.tabs .tab-item .tab-title,\n  .tabs-icon-right > .tabs .tab-item .icon,\n  .tabs-icon-right > .tabs .tab-item .tab-title {\n    display: inline-block;\n    vertical-align: top;\n    margin-top: -.1em; }\n    .tabs-icon-left.tabs .tab-item .icon:before, .tabs-icon-left.tabs .tab-item .tab-title:before,\n    .tabs-icon-left > .tabs .tab-item .icon:before,\n    .tabs-icon-left > .tabs .tab-item .tab-title:before,\n    .tabs-icon-right.tabs .tab-item .icon:before,\n    .tabs-icon-right.tabs .tab-item .tab-title:before,\n    .tabs-icon-right > .tabs .tab-item .icon:before,\n    .tabs-icon-right > .tabs .tab-item .tab-title:before {\n      font-size: 24px;\n      line-height: 49px; }\n\n.tabs-icon-left > .tabs .tab-item .icon,\n.tabs-icon-left.tabs .tab-item .icon {\n  padding-right: 3px; }\n\n.tabs-icon-right > .tabs .tab-item .icon,\n.tabs-icon-right.tabs .tab-item .icon {\n  padding-left: 3px; }\n\n.tabs-icon-only > .tabs .icon,\n.tabs-icon-only.tabs .icon {\n  line-height: inherit; }\n\n.tab-item.has-badge {\n  position: relative; }\n\n.tab-item .badge {\n  position: absolute;\n  top: 4%;\n  right: 33%;\n  right: calc(50% - 26px);\n  padding: 1px 6px;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px; }\n\n.tab-item.tab-item-active,\n.tab-item.active,\n.tab-item.activated {\n  opacity: 1; }\n  .tab-item.tab-item-active.tab-item-light,\n  .tab-item.active.tab-item-light,\n  .tab-item.activated.tab-item-light {\n    color: #fff; }\n  .tab-item.tab-item-active.tab-item-stable,\n  .tab-item.active.tab-item-stable,\n  .tab-item.activated.tab-item-stable {\n    color: #f8f8f8; }\n  .tab-item.tab-item-active.tab-item-positive,\n  .tab-item.active.tab-item-positive,\n  .tab-item.activated.tab-item-positive {\n    color: #979797; }\n  .tab-item.tab-item-active.tab-item-calm,\n  .tab-item.active.tab-item-calm,\n  .tab-item.activated.tab-item-calm {\n    color: #11c1f3; }\n  .tab-item.tab-item-active.tab-item-assertive,\n  .tab-item.active.tab-item-assertive,\n  .tab-item.activated.tab-item-assertive {\n    color: #ef473a; }\n  .tab-item.tab-item-active.tab-item-balanced,\n  .tab-item.active.tab-item-balanced,\n  .tab-item.activated.tab-item-balanced {\n    color: #33cd5f; }\n  .tab-item.tab-item-active.tab-item-energized,\n  .tab-item.active.tab-item-energized,\n  .tab-item.activated.tab-item-energized {\n    color: #ffc900; }\n  .tab-item.tab-item-active.tab-item-royal,\n  .tab-item.active.tab-item-royal,\n  .tab-item.activated.tab-item-royal {\n    color: #886aea; }\n  .tab-item.tab-item-active.tab-item-dark,\n  .tab-item.active.tab-item-dark,\n  .tab-item.activated.tab-item-dark {\n    color: #444; }\n\n.item.tabs {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0; }\n  .item.tabs .icon:before {\n    position: relative; }\n\n.tab-item.disabled,\n.tab-item[disabled] {\n  opacity: .4;\n  cursor: default;\n  pointer-events: none; }\n\n.nav-bar-tabs-top.hide ~ .view-container .tabs-top .tabs {\n  top: 0; }\n\n.pane[hide-nav-bar=\"true\"] .has-tabs-top {\n  top: 49px; }\n\n.menu {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 0;\n  overflow: hidden;\n  min-height: 100%;\n  max-height: 100%;\n  width: 275px;\n  background-color: #fff; }\n  .menu .scroll-content {\n    z-index: 10; }\n  .menu .bar-header {\n    z-index: 11; }\n\n.menu-content {\n  -webkit-transform: none;\n  transform: none;\n  box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.2), 1px 0px 2px rgba(0, 0, 0, 0.2); }\n\n.menu-open .menu-content .pane,\n.menu-open .menu-content .scroll-content {\n  pointer-events: none;\n  overflow: hidden; }\n\n.grade-b .menu-content,\n.grade-c .menu-content {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  right: -1px;\n  left: -1px;\n  border-right: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  box-shadow: none; }\n\n.menu-left {\n  left: 0; }\n\n.menu-right {\n  right: 0; }\n\n.aside-open.aside-resizing .menu-right {\n  display: none; }\n\n.menu-animated {\n  -webkit-transition: -webkit-transform 200ms ease;\n  transition: transform 200ms ease; }\n\n.modal-backdrop,\n.modal-backdrop-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%; }\n\n.modal-backdrop-bg {\n  pointer-events: none; }\n\n.modal {\n  display: block;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  overflow: hidden;\n  min-height: 100%;\n  width: 100%;\n  background-color: #fff; }\n\n@media (min-width: 680px) {\n  .modal {\n    top: 20%;\n    right: 20%;\n    bottom: 20%;\n    left: 20%;\n    min-height: 240px;\n    width: 60%; }\n  .modal.ng-leave-active {\n    bottom: 0; }\n  .platform-ios.platform-cordova .modal-wrapper .modal .bar-header:not(.bar-subheader) {\n    height: 44px; }\n    .platform-ios.platform-cordova .modal-wrapper .modal .bar-header:not(.bar-subheader) > * {\n      margin-top: 0; }\n  .platform-ios.platform-cordova .modal-wrapper .modal .tabs-top > .tabs,\n  .platform-ios.platform-cordova .modal-wrapper .modal .tabs.tabs-top {\n    top: 44px; }\n  .platform-ios.platform-cordova .modal-wrapper .modal .has-header,\n  .platform-ios.platform-cordova .modal-wrapper .modal .bar-subheader {\n    top: 44px; }\n  .platform-ios.platform-cordova .modal-wrapper .modal .has-subheader {\n    top: 88px; }\n  .platform-ios.platform-cordova .modal-wrapper .modal .has-header.has-tabs-top {\n    top: 93px; }\n  .platform-ios.platform-cordova .modal-wrapper .modal .has-header.has-subheader.has-tabs-top {\n    top: 137px; } }\n\n.modal-open {\n  pointer-events: none; }\n  .modal-open .modal,\n  .modal-open .modal-backdrop {\n    pointer-events: auto; }\n  .modal-open.loading-active .modal,\n  .modal-open.loading-active .modal-backdrop {\n    pointer-events: none; }\n\n.popover-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  background-color: transparent; }\n  .popover-backdrop.active {\n    background-color: rgba(0, 0, 0, 0.1); }\n\n.popover {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  z-index: 10;\n  display: block;\n  margin-top: 12px;\n  margin-left: -110px;\n  height: 280px;\n  width: 220px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  opacity: 0; }\n  .popover .item:first-child {\n    border-top: 0; }\n  .popover .item:last-child {\n    border-bottom: 0; }\n  .popover.popover-bottom {\n    margin-top: -12px; }\n\n.popover,\n.popover .bar-header {\n  border-radius: 2px; }\n\n.popover .scroll-content {\n  z-index: 1;\n  margin: 2px 0; }\n\n.popover .bar-header {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.popover .has-header {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.popover-arrow {\n  display: none; }\n\n.platform-ios .popover {\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);\n  border-radius: 10px; }\n\n.platform-ios .popover .bar-header {\n  -webkit-border-top-right-radius: 10px;\n  border-top-right-radius: 10px;\n  -webkit-border-top-left-radius: 10px;\n  border-top-left-radius: 10px; }\n\n.platform-ios .popover .scroll-content {\n  margin: 8px 0;\n  border-radius: 10px; }\n\n.platform-ios .popover .scroll-content.has-header {\n  margin-top: 0; }\n\n.platform-ios .popover-arrow {\n  position: absolute;\n  display: block;\n  top: -17px;\n  width: 30px;\n  height: 19px;\n  overflow: hidden; }\n  .platform-ios .popover-arrow:after {\n    position: absolute;\n    top: 12px;\n    left: 5px;\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border-radius: 3px;\n    content: '';\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg); }\n\n.platform-ios .popover-bottom .popover-arrow {\n  top: auto;\n  bottom: -10px; }\n  .platform-ios .popover-bottom .popover-arrow:after {\n    top: -6px; }\n\n.platform-android .popover {\n  margin-top: -32px;\n  background-color: #fafafa;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35); }\n  .platform-android .popover .item {\n    border-color: #fafafa;\n    background-color: #fafafa;\n    color: #4d4d4d; }\n  .platform-android .popover.popover-bottom {\n    margin-top: 32px; }\n\n.platform-android .popover-backdrop,\n.platform-android .popover-backdrop.active {\n  background-color: transparent; }\n\n.popover-open {\n  pointer-events: none; }\n  .popover-open .popover,\n  .popover-open .popover-backdrop {\n    pointer-events: auto; }\n  .popover-open.loading-active .popover,\n  .popover-open.loading-active .popover-backdrop {\n    pointer-events: none; }\n\n@media (min-width: 680px) {\n  .popover {\n    width: 360px; } }\n\n.popup-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  z-index: 12;\n  visibility: hidden; }\n  .popup-container.popup-showing {\n    visibility: visible; }\n  .popup-container.popup-hidden .popup {\n    -webkit-animation-name: scaleOut;\n    animation-name: scaleOut;\n    -webkit-animation-duration: 0.1s;\n    animation-duration: 0.1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both; }\n  .popup-container.active .popup {\n    -webkit-animation-name: superScaleIn;\n    animation-name: superScaleIn;\n    -webkit-animation-duration: 0.2s;\n    animation-duration: 0.2s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both; }\n  .popup-container .popup {\n    width: 250px;\n    max-width: 100%;\n    max-height: 90%;\n    border-radius: 0px;\n    background-color: rgba(255, 255, 255, 0.9);\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -moz-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  .popup-container input,\n  .popup-container textarea {\n    width: 100%; }\n\n.popup-head {\n  padding: 15px 10px;\n  border-bottom: 1px solid #eee;\n  text-align: center; }\n\n.popup-title {\n  margin: 0;\n  padding: 0;\n  font-size: 15px; }\n\n.popup-sub-title {\n  margin: 5px 0 0 0;\n  padding: 0;\n  font-weight: normal;\n  font-size: 11px; }\n\n.popup-body {\n  padding: 10px;\n  overflow: auto; }\n\n.popup-buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  padding: 10px;\n  min-height: 65px; }\n  .popup-buttons .button {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -moz-box-flex: 1;\n    -moz-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    display: block;\n    min-height: 45px;\n    border-radius: 2px;\n    line-height: 20px;\n    margin-right: 5px; }\n    .popup-buttons .button:last-child {\n      margin-right: 0px; }\n\n.popup-open {\n  pointer-events: none; }\n  .popup-open.modal-open .modal {\n    pointer-events: none; }\n  .popup-open .popup-backdrop, .popup-open .popup {\n    pointer-events: auto; }\n\n.loading-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 13;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  -webkit-transition: 0.2s opacity linear;\n  transition: 0.2s opacity linear;\n  visibility: hidden;\n  opacity: 0; }\n  .loading-container:not(.visible) .icon,\n  .loading-container:not(.visible) .spinner {\n    display: none; }\n  .loading-container.visible {\n    visibility: visible; }\n  .loading-container.active {\n    opacity: 1; }\n  .loading-container .loading {\n    padding: 20px;\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    text-align: center;\n    text-overflow: ellipsis;\n    font-size: 15px; }\n    .loading-container .loading h1, .loading-container .loading h2, .loading-container .loading h3, .loading-container .loading h4, .loading-container .loading h5, .loading-container .loading h6 {\n      color: #fff; }\n\n.item {\n  border-color: #ddd;\n  background-color: #fff;\n  color: #444;\n  position: relative;\n  z-index: 2;\n  display: block;\n  margin: -1px;\n  padding: 16px;\n  border-width: 1px;\n  border-style: solid;\n  font-size: 16px; }\n  .item h2 {\n    margin: 0 0 2px 0;\n    font-size: 16px;\n    font-weight: normal; }\n  .item h3 {\n    margin: 0 0 4px 0;\n    font-size: 14px; }\n  .item h4 {\n    margin: 0 0 4px 0;\n    font-size: 12px; }\n  .item h5, .item h6 {\n    margin: 0 0 3px 0;\n    font-size: 10px; }\n  .item p {\n    color: #666;\n    font-size: 14px;\n    margin-bottom: 2px; }\n  .item h1:last-child,\n  .item h2:last-child,\n  .item h3:last-child,\n  .item h4:last-child,\n  .item h5:last-child,\n  .item h6:last-child,\n  .item p:last-child {\n    margin-bottom: 0; }\n  .item .badge {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    top: 16px;\n    right: 32px; }\n  .item.item-button-right .badge {\n    right: 67px; }\n  .item.item-divider .badge {\n    top: 8px; }\n  .item .badge + .badge {\n    margin-right: 5px; }\n  .item.item-light {\n    border-color: #ddd;\n    background-color: #fff;\n    color: #444; }\n  .item.item-stable {\n    border-color: #b2b2b2;\n    background-color: #f8f8f8;\n    color: #444; }\n  .item.item-positive {\n    border-color: #979797;\n    background-color: #979797;\n    color: #fff; }\n  .item.item-calm {\n    border-color: #0a9dc7;\n    background-color: #11c1f3;\n    color: #fff; }\n  .item.item-assertive {\n    border-color: #e42112;\n    background-color: #ef473a;\n    color: #fff; }\n  .item.item-balanced {\n    border-color: #28a54c;\n    background-color: #33cd5f;\n    color: #fff; }\n  .item.item-energized {\n    border-color: #e6b500;\n    background-color: #ffc900;\n    color: #fff; }\n  .item.item-royal {\n    border-color: #6b46e5;\n    background-color: #886aea;\n    color: #fff; }\n  .item.item-dark {\n    border-color: #111;\n    background-color: #444;\n    color: #fff; }\n  .item[ng-click]:hover {\n    cursor: pointer; }\n\n.list-borderless .item,\n.item-borderless {\n  border-width: 0; }\n\n.item.active,\n.item.activated,\n.item-complex.active .item-content,\n.item-complex.activated .item-content,\n.item .item-content.active,\n.item .item-content.activated {\n  border-color: #ccc;\n  background-color: #D9D9D9; }\n  .item.active.item-light,\n  .item.activated.item-light,\n  .item-complex.active .item-content.item-light,\n  .item-complex.activated .item-content.item-light,\n  .item .item-content.active.item-light,\n  .item .item-content.activated.item-light {\n    border-color: #ccc;\n    background-color: #fafafa; }\n  .item.active.item-stable,\n  .item.activated.item-stable,\n  .item-complex.active .item-content.item-stable,\n  .item-complex.activated .item-content.item-stable,\n  .item .item-content.active.item-stable,\n  .item .item-content.activated.item-stable {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5; }\n  .item.active.item-positive,\n  .item.activated.item-positive,\n  .item-complex.active .item-content.item-positive,\n  .item-complex.activated .item-content.item-positive,\n  .item .item-content.active.item-positive,\n  .item .item-content.activated.item-positive {\n    border-color: #7e7e7e;\n    background-color: #7e7e7e; }\n  .item.active.item-calm,\n  .item.activated.item-calm,\n  .item-complex.active .item-content.item-calm,\n  .item-complex.activated .item-content.item-calm,\n  .item .item-content.active.item-calm,\n  .item .item-content.activated.item-calm {\n    border-color: #0a9dc7;\n    background-color: #0a9dc7; }\n  .item.active.item-assertive,\n  .item.activated.item-assertive,\n  .item-complex.active .item-content.item-assertive,\n  .item-complex.activated .item-content.item-assertive,\n  .item .item-content.active.item-assertive,\n  .item .item-content.activated.item-assertive {\n    border-color: #e42112;\n    background-color: #e42112; }\n  .item.active.item-balanced,\n  .item.activated.item-balanced,\n  .item-complex.active .item-content.item-balanced,\n  .item-complex.activated .item-content.item-balanced,\n  .item .item-content.active.item-balanced,\n  .item .item-content.activated.item-balanced {\n    border-color: #28a54c;\n    background-color: #28a54c; }\n  .item.active.item-energized,\n  .item.activated.item-energized,\n  .item-complex.active .item-content.item-energized,\n  .item-complex.activated .item-content.item-energized,\n  .item .item-content.active.item-energized,\n  .item .item-content.activated.item-energized {\n    border-color: #e6b500;\n    background-color: #e6b500; }\n  .item.active.item-royal,\n  .item.activated.item-royal,\n  .item-complex.active .item-content.item-royal,\n  .item-complex.activated .item-content.item-royal,\n  .item .item-content.active.item-royal,\n  .item .item-content.activated.item-royal {\n    border-color: #6b46e5;\n    background-color: #6b46e5; }\n  .item.active.item-dark,\n  .item.activated.item-dark,\n  .item-complex.active .item-content.item-dark,\n  .item-complex.activated .item-content.item-dark,\n  .item .item-content.active.item-dark,\n  .item .item-content.activated.item-dark {\n    border-color: #000;\n    background-color: #262626; }\n\n.item,\n.item h1,\n.item h2,\n.item h3,\n.item h4,\n.item h5,\n.item h6,\n.item p,\n.item-content,\n.item-content h1,\n.item-content h2,\n.item-content h3,\n.item-content h4,\n.item-content h5,\n.item-content h6,\n.item-content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\na.item {\n  color: inherit;\n  text-decoration: none; }\n  a.item:hover, a.item:focus {\n    text-decoration: none; }\n\n.item-complex,\na.item.item-complex,\nbutton.item.item-complex {\n  padding: 0; }\n\n.item-complex .item-content,\n.item-radio .item-content {\n  position: relative;\n  z-index: 2;\n  padding: 16px 49px 16px 16px;\n  border: none;\n  background-color: #fff; }\n\na.item-content {\n  display: block;\n  color: inherit;\n  text-decoration: none; }\n\n.item-text-wrap .item,\n.item-text-wrap .item-content,\n.item-text-wrap,\n.item-text-wrap h1,\n.item-text-wrap h2,\n.item-text-wrap h3,\n.item-text-wrap h4,\n.item-text-wrap h5,\n.item-text-wrap h6,\n.item-text-wrap p,\n.item-complex.item-text-wrap .item-content,\n.item-body h1,\n.item-body h2,\n.item-body h3,\n.item-body h4,\n.item-body h5,\n.item-body h6,\n.item-body p {\n  overflow: visible;\n  white-space: normal; }\n\n.item-complex.item-text-wrap,\n.item-complex.item-text-wrap h1,\n.item-complex.item-text-wrap h2,\n.item-complex.item-text-wrap h3,\n.item-complex.item-text-wrap h4,\n.item-complex.item-text-wrap h5,\n.item-complex.item-text-wrap h6,\n.item-complex.item-text-wrap p {\n  overflow: visible;\n  white-space: normal; }\n\n.item-complex.item-light > .item-content {\n  border-color: #ddd;\n  background-color: #fff;\n  color: #444; }\n  .item-complex.item-light > .item-content.active, .item-complex.item-light > .item-content:active {\n    border-color: #ccc;\n    background-color: #fafafa; }\n\n.item-complex.item-stable > .item-content {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  color: #444; }\n  .item-complex.item-stable > .item-content.active, .item-complex.item-stable > .item-content:active {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5; }\n\n.item-complex.item-positive > .item-content {\n  border-color: #979797;\n  background-color: #979797;\n  color: #fff; }\n  .item-complex.item-positive > .item-content.active, .item-complex.item-positive > .item-content:active {\n    border-color: #7e7e7e;\n    background-color: #7e7e7e; }\n\n.item-complex.item-calm > .item-content {\n  border-color: #0a9dc7;\n  background-color: #11c1f3;\n  color: #fff; }\n  .item-complex.item-calm > .item-content.active, .item-complex.item-calm > .item-content:active {\n    border-color: #0a9dc7;\n    background-color: #0a9dc7; }\n\n.item-complex.item-assertive > .item-content {\n  border-color: #e42112;\n  background-color: #ef473a;\n  color: #fff; }\n  .item-complex.item-assertive > .item-content.active, .item-complex.item-assertive > .item-content:active {\n    border-color: #e42112;\n    background-color: #e42112; }\n\n.item-complex.item-balanced > .item-content {\n  border-color: #28a54c;\n  background-color: #33cd5f;\n  color: #fff; }\n  .item-complex.item-balanced > .item-content.active, .item-complex.item-balanced > .item-content:active {\n    border-color: #28a54c;\n    background-color: #28a54c; }\n\n.item-complex.item-energized > .item-content {\n  border-color: #e6b500;\n  background-color: #ffc900;\n  color: #fff; }\n  .item-complex.item-energized > .item-content.active, .item-complex.item-energized > .item-content:active {\n    border-color: #e6b500;\n    background-color: #e6b500; }\n\n.item-complex.item-royal > .item-content {\n  border-color: #6b46e5;\n  background-color: #886aea;\n  color: #fff; }\n  .item-complex.item-royal > .item-content.active, .item-complex.item-royal > .item-content:active {\n    border-color: #6b46e5;\n    background-color: #6b46e5; }\n\n.item-complex.item-dark > .item-content {\n  border-color: #111;\n  background-color: #444;\n  color: #fff; }\n  .item-complex.item-dark > .item-content.active, .item-complex.item-dark > .item-content:active {\n    border-color: #000;\n    background-color: #262626; }\n\n.item-icon-left .icon,\n.item-icon-right .icon {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  font-size: 32px; }\n  .item-icon-left .icon:before,\n  .item-icon-right .icon:before {\n    display: block;\n    width: 32px;\n    text-align: center; }\n\n.item .fill-icon {\n  min-width: 30px;\n  min-height: 30px;\n  font-size: 28px; }\n\n.item-icon-left {\n  padding-left: 54px; }\n  .item-icon-left .icon {\n    left: 11px; }\n\n.item-complex.item-icon-left {\n  padding-left: 0; }\n  .item-complex.item-icon-left .item-content {\n    padding-left: 54px; }\n\n.item-icon-right {\n  padding-right: 54px; }\n  .item-icon-right .icon {\n    right: 11px; }\n\n.item-complex.item-icon-right {\n  padding-right: 0; }\n  .item-complex.item-icon-right .item-content {\n    padding-right: 54px; }\n\n.item-icon-left.item-icon-right .icon:first-child {\n  right: auto; }\n\n.item-icon-left.item-icon-right .icon:last-child,\n.item-icon-left .item-delete .icon {\n  left: auto; }\n\n.item-icon-left .icon-accessory,\n.item-icon-right .icon-accessory {\n  color: #ccc;\n  font-size: 16px; }\n\n.item-icon-left .icon-accessory {\n  left: 3px; }\n\n.item-icon-right .icon-accessory {\n  right: 3px; }\n\n.item-button-left {\n  padding-left: 72px; }\n\n.item-button-left > .button,\n.item-button-left .item-content > .button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 8px;\n  left: 11px;\n  min-width: 34px;\n  min-height: 34px;\n  font-size: 18px;\n  line-height: 32px; }\n  .item-button-left > .button .icon:before,\n  .item-button-left .item-content > .button .icon:before {\n    position: relative;\n    left: auto;\n    width: auto;\n    line-height: 31px; }\n  .item-button-left > .button > .button,\n  .item-button-left .item-content > .button > .button {\n    margin: 0px 2px;\n    min-height: 34px;\n    font-size: 18px;\n    line-height: 32px; }\n\n.item-button-right,\na.item.item-button-right,\nbutton.item.item-button-right {\n  padding-right: 80px; }\n\n.item-button-right > .button,\n.item-button-right .item-content > .button,\n.item-button-right > .buttons,\n.item-button-right .item-content > .buttons {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  min-width: 34px;\n  min-height: 34px;\n  font-size: 18px;\n  line-height: 32px; }\n  .item-button-right > .button .icon:before,\n  .item-button-right .item-content > .button .icon:before,\n  .item-button-right > .buttons .icon:before,\n  .item-button-right .item-content > .buttons .icon:before {\n    position: relative;\n    left: auto;\n    width: auto;\n    line-height: 31px; }\n  .item-button-right > .button > .button,\n  .item-button-right .item-content > .button > .button,\n  .item-button-right > .buttons > .button,\n  .item-button-right .item-content > .buttons > .button {\n    margin: 0px 2px;\n    min-width: 34px;\n    min-height: 34px;\n    font-size: 18px;\n    line-height: 32px; }\n\n.item-avatar,\n.item-avatar .item-content,\n.item-avatar-left,\n.item-avatar-left .item-content {\n  padding-left: 72px;\n  min-height: 72px; }\n  .item-avatar > img:first-child,\n  .item-avatar .item-image,\n  .item-avatar .item-content > img:first-child,\n  .item-avatar .item-content .item-image,\n  .item-avatar-left > img:first-child,\n  .item-avatar-left .item-image,\n  .item-avatar-left .item-content > img:first-child,\n  .item-avatar-left .item-content .item-image {\n    position: absolute;\n    top: 16px;\n    left: 16px;\n    max-width: 40px;\n    max-height: 40px;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n\n.item-avatar-right,\n.item-avatar-right .item-content {\n  padding-right: 72px;\n  min-height: 72px; }\n  .item-avatar-right > img:first-child,\n  .item-avatar-right .item-image,\n  .item-avatar-right .item-content > img:first-child,\n  .item-avatar-right .item-content .item-image {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    max-width: 40px;\n    max-height: 40px;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n\n.item-thumbnail-left,\n.item-thumbnail-left .item-content {\n  padding-top: 8px;\n  padding-left: 106px;\n  min-height: 100px; }\n  .item-thumbnail-left > img:first-child,\n  .item-thumbnail-left .item-image,\n  .item-thumbnail-left .item-content > img:first-child,\n  .item-thumbnail-left .item-content .item-image {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    max-width: 80px;\n    max-height: 80px;\n    width: 100%;\n    height: 100%; }\n\n.item-avatar.item-complex,\n.item-avatar-left.item-complex,\n.item-thumbnail-left.item-complex {\n  padding-top: 0;\n  padding-left: 0; }\n\n.item-thumbnail-right,\n.item-thumbnail-right .item-content {\n  padding-top: 8px;\n  padding-right: 106px;\n  min-height: 100px; }\n  .item-thumbnail-right > img:first-child,\n  .item-thumbnail-right .item-image,\n  .item-thumbnail-right .item-content > img:first-child,\n  .item-thumbnail-right .item-content .item-image {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    max-width: 80px;\n    max-height: 80px;\n    width: 100%;\n    height: 100%; }\n\n.item-avatar-right.item-complex,\n.item-thumbnail-right.item-complex {\n  padding-top: 0;\n  padding-right: 0; }\n\n.item-image {\n  padding: 0;\n  text-align: center; }\n  .item-image img:first-child, .item-image .list-img {\n    width: 100%;\n    vertical-align: middle; }\n\n.item-body {\n  overflow: auto;\n  padding: 16px;\n  text-overflow: inherit;\n  white-space: normal; }\n  .item-body h1, .item-body h2, .item-body h3, .item-body h4, .item-body h5, .item-body h6, .item-body p {\n    margin-top: 16px;\n    margin-bottom: 16px; }\n\n.item-divider {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  min-height: 30px;\n  background-color: #f5f5f5;\n  color: #222;\n  font-weight: 500; }\n\n.platform-ios .item-divider-platform,\n.item-divider-ios {\n  padding-top: 26px;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 13px;\n  background-color: #efeff4;\n  color: #555; }\n\n.platform-android .item-divider-platform,\n.item-divider-android {\n  font-weight: 300;\n  font-size: 13px; }\n\n.item-note {\n  float: right;\n  color: #aaa;\n  font-size: 14px; }\n\n.item-left-editable .item-content,\n.item-right-editable .item-content {\n  -webkit-transition-duration: 250ms;\n  transition-duration: 250ms;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-property: -webkit-transform;\n  -moz-transition-property: -moz-transform;\n  transition-property: transform; }\n\n.list-left-editing .item-left-editable .item-content,\n.item-left-editing.item-left-editable .item-content {\n  -webkit-transform: translate3d(50px, 0, 0);\n  transform: translate3d(50px, 0, 0); }\n\n.item-remove-animate.ng-leave {\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms; }\n\n.item-remove-animate.ng-leave .item-content, .item-remove-animate.ng-leave:last-of-type {\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: ease-in;\n  transition-timing-function: ease-in;\n  -webkit-transition-property: all;\n  transition-property: all; }\n\n.item-remove-animate.ng-leave.ng-leave-active .item-content {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) !important;\n  transform: translate3d(-100%, 0, 0) !important; }\n\n.item-remove-animate.ng-leave.ng-leave-active:last-of-type {\n  opacity: 0; }\n\n.item-remove-animate.ng-leave.ng-leave-active ~ ion-item:not(.ng-leave) {\n  -webkit-transform: translate3d(0, -webkit-calc(-100% + 1px), 0);\n  transform: translate3d(0, calc(-100% + 1px), 0);\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.25, 0.81, 0.24, 1);\n  transition-timing-function: cubic-bezier(0.25, 0.81, 0.24, 1);\n  -webkit-transition-property: all;\n  transition-property: all; }\n\n.item-left-edit {\n  -webkit-transition: all ease-in-out 125ms;\n  transition: all ease-in-out 125ms;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  width: 50px;\n  height: 100%;\n  line-height: 100%;\n  display: none;\n  opacity: 0;\n  -webkit-transform: translate3d(-21px, 0, 0);\n  transform: translate3d(-21px, 0, 0); }\n  .item-left-edit .button {\n    height: 100%; }\n    .item-left-edit .button.icon {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -moz-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      -webkit-align-items: center;\n      -moz-align-items: center;\n      align-items: center;\n      position: absolute;\n      top: 0;\n      height: 100%; }\n  .item-left-edit.visible {\n    display: block; }\n    .item-left-edit.visible.active {\n      opacity: 1;\n      -webkit-transform: translate3d(8px, 0, 0);\n      transform: translate3d(8px, 0, 0); }\n\n.list-left-editing .item-left-edit {\n  -webkit-transition-delay: 125ms;\n  transition-delay: 125ms; }\n\n.item-delete .button.icon {\n  color: #ef473a;\n  font-size: 24px; }\n  .item-delete .button.icon:hover {\n    opacity: .7; }\n\n.item-right-edit {\n  -webkit-transition: all ease-in-out 250ms;\n  transition: all ease-in-out 250ms;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 3;\n  width: 75px;\n  height: 100%;\n  background: inherit;\n  padding-left: 20px;\n  display: block;\n  opacity: 0;\n  -webkit-transform: translate3d(75px, 0, 0);\n  transform: translate3d(75px, 0, 0); }\n  .item-right-edit .button {\n    min-width: 50px;\n    height: 100%; }\n    .item-right-edit .button.icon {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: -moz-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      -webkit-align-items: center;\n      -moz-align-items: center;\n      align-items: center;\n      position: absolute;\n      top: 0;\n      height: 100%;\n      font-size: 32px; }\n  .item-right-edit.visible {\n    display: block; }\n    .item-right-edit.visible.active {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0); }\n\n.item-reorder .button.icon {\n  color: #444;\n  font-size: 32px; }\n\n.item-reordering {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 9;\n  width: 100%;\n  box-shadow: 0px 0px 10px 0px #aaa; }\n  .item-reordering .item-reorder {\n    z-index: 9; }\n\n.item-placeholder {\n  opacity: 0.7; }\n\n.item-options {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  height: 100%; }\n  .item-options .button {\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -moz-inline-flex;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    -moz-align-items: center;\n    align-items: center; }\n    .item-options .button:before {\n      margin: 0 auto; }\n\n.list {\n  position: relative;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 0;\n  margin-bottom: 20px; }\n\n.list:last-child {\n  margin-bottom: 0px; }\n  .list:last-child.card {\n    margin-bottom: 40px; }\n\n.list-header {\n  margin-top: 20px;\n  padding: 5px 15px;\n  background-color: transparent;\n  color: #222;\n  font-weight: bold; }\n\n.card.list .list-item {\n  padding-right: 1px;\n  padding-left: 1px; }\n\n.card,\n.list-inset {\n  overflow: hidden;\n  margin: 20px 10px;\n  border-radius: 2px;\n  background-color: #fff; }\n\n.card {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); }\n  .card .item {\n    border-left: 0;\n    border-right: 0; }\n  .card .item:first-child {\n    border-top: 0; }\n  .card .item:last-child {\n    border-bottom: 0; }\n\n.padding .card, .padding .list-inset {\n  margin-left: 0;\n  margin-right: 0; }\n\n.card .item:first-child,\n.list-inset .item:first-child,\n.padding > .list .item:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px; }\n  .card .item:first-child .item-content,\n  .list-inset .item:first-child .item-content,\n  .padding > .list .item:first-child .item-content {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px; }\n\n.card .item:last-child,\n.list-inset .item:last-child,\n.padding > .list .item:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px; }\n  .card .item:last-child .item-content,\n  .list-inset .item:last-child .item-content,\n  .padding > .list .item:last-child .item-content {\n    border-bottom-right-radius: 2px;\n    border-bottom-left-radius: 2px; }\n\n.card .item:last-child,\n.list-inset .item:last-child {\n  margin-bottom: -1px; }\n\n.card .item,\n.list-inset .item,\n.padding > .list .item,\n.padding-horizontal > .list .item {\n  margin-right: 0;\n  margin-left: 0; }\n  .card .item.item-input input,\n  .list-inset .item.item-input input,\n  .padding > .list .item.item-input input,\n  .padding-horizontal > .list .item.item-input input {\n    padding-right: 44px; }\n\n.padding-left > .list .item {\n  margin-left: 0; }\n\n.padding-right > .list .item {\n  margin-right: 0; }\n\n.badge {\n  background-color: transparent;\n  color: #AAAAAA;\n  z-index: 1;\n  display: inline-block;\n  padding: 3px 8px;\n  min-width: 10px;\n  border-radius: 10px;\n  vertical-align: baseline;\n  text-align: center;\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px; }\n  .badge:empty {\n    display: none; }\n\n.tabs .tab-item .badge.badge-light,\n.badge.badge-light {\n  background-color: #fff;\n  color: #444; }\n\n.tabs .tab-item .badge.badge-stable,\n.badge.badge-stable {\n  background-color: #f8f8f8;\n  color: #444; }\n\n.tabs .tab-item .badge.badge-positive,\n.badge.badge-positive {\n  background-color: #979797;\n  color: #fff; }\n\n.tabs .tab-item .badge.badge-calm,\n.badge.badge-calm {\n  background-color: #11c1f3;\n  color: #fff; }\n\n.tabs .tab-item .badge.badge-assertive,\n.badge.badge-assertive {\n  background-color: #ef473a;\n  color: #fff; }\n\n.tabs .tab-item .badge.badge-balanced,\n.badge.badge-balanced {\n  background-color: #33cd5f;\n  color: #fff; }\n\n.tabs .tab-item .badge.badge-energized,\n.badge.badge-energized {\n  background-color: #ffc900;\n  color: #fff; }\n\n.tabs .tab-item .badge.badge-royal,\n.badge.badge-royal {\n  background-color: #886aea;\n  color: #fff; }\n\n.tabs .tab-item .badge.badge-dark,\n.badge.badge-dark {\n  background-color: #444;\n  color: #fff; }\n\n.button .badge {\n  position: relative;\n  top: -1px; }\n\n.slider {\n  position: relative;\n  visibility: hidden;\n  overflow: hidden; }\n\n.slider-slides {\n  position: relative;\n  height: 100%; }\n\n.slider-slide {\n  position: relative;\n  display: block;\n  float: left;\n  width: 100%;\n  height: 100%;\n  vertical-align: top; }\n\n.slider-slide-image > img {\n  width: 100%; }\n\n.slider-pager {\n  position: absolute;\n  bottom: 20px;\n  z-index: 1;\n  width: 100%;\n  height: 15px;\n  text-align: center; }\n  .slider-pager .slider-pager-page {\n    display: inline-block;\n    margin: 0px 3px;\n    width: 15px;\n    color: #000;\n    text-decoration: none;\n    opacity: 0.3; }\n    .slider-pager .slider-pager-page.active {\n      -webkit-transition: opacity 0.4s ease-in;\n      transition: opacity 0.4s ease-in;\n      opacity: 1; }\n\n.slider-slide.ng-enter, .slider-slide.ng-leave, .slider-slide.ng-animate,\n.slider-pager-page.ng-enter,\n.slider-pager-page.ng-leave,\n.slider-pager-page.ng-animate {\n  -webkit-transition: none !important;\n  transition: none !important; }\n\n.slider-slide.ng-animate,\n.slider-pager-page.ng-animate {\n  -webkit-animation: none 0s;\n  animation: none 0s; }\n\nform {\n  margin: 0 0 1.42857; }\n\nlegend {\n  display: block;\n  margin-bottom: 1.42857;\n  padding: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n  color: #444;\n  font-size: 18px;\n  line-height: 2.85714; }\n  legend small {\n    color: #f8f8f8;\n    font-size: 1.07143; }\n\nlabel,\ninput,\nbutton,\nselect,\ntextarea {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 1.42857; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif; }\n\n.item-input {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  padding: 6px 0 5px 16px; }\n  .item-input input {\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 220px;\n    -moz-box-flex: 1;\n    -moz-flex: 1 220px;\n    -ms-flex: 1 220px;\n    flex: 1 220px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    margin: 0;\n    padding-right: 24px;\n    background-color: transparent; }\n  .item-input .button .icon {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 24px;\n    -moz-box-flex: 0;\n    -moz-flex: 0 0 24px;\n    -ms-flex: 0 0 24px;\n    flex: 0 0 24px;\n    position: static;\n    display: inline-block;\n    height: auto;\n    text-align: center;\n    font-size: 16px; }\n  .item-input .button-bar {\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 220px;\n    -moz-box-flex: 1;\n    -moz-flex: 1 0 220px;\n    -ms-flex: 1 0 220px;\n    flex: 1 0 220px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n  .item-input .icon {\n    min-width: 14px; }\n\n.platform-windowsphone .item-input input {\n  flex-shrink: 1; }\n\n.item-input-inset {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  padding: 10.66667px; }\n\n.item-input-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n  -moz-box-flex: 1;\n  -moz-flex: 1 0;\n  -ms-flex: 1 0;\n  flex: 1 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  padding-right: 8px;\n  padding-left: 8px;\n  background: #eee; }\n\n.item-input-inset .item-input-wrapper input {\n  padding-left: 4px;\n  height: 29px;\n  background: transparent;\n  line-height: 18px; }\n\n.item-input-wrapper ~ .button {\n  margin-left: 10.66667px; }\n\n.input-label {\n  display: table;\n  padding: 7px 10px 7px 0px;\n  max-width: 200px;\n  width: 35%;\n  color: #444;\n  font-size: 16px; }\n\n.placeholder-icon {\n  color: #aaa; }\n  .placeholder-icon:first-child {\n    padding-right: 6px; }\n  .placeholder-icon:last-child {\n    padding-left: 6px; }\n\n.item-stacked-label {\n  display: block;\n  background-color: transparent;\n  box-shadow: none; }\n  .item-stacked-label .input-label, .item-stacked-label .icon {\n    display: inline-block;\n    padding: 4px 0 0 0px;\n    vertical-align: middle; }\n\n.item-stacked-label input,\n.item-stacked-label textarea {\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  padding: 4px 8px 3px 0;\n  border: none;\n  background-color: #fff; }\n\n.item-stacked-label input {\n  overflow: hidden;\n  height: 41px; }\n\n.item-floating-label {\n  display: block;\n  background-color: transparent;\n  box-shadow: none; }\n  .item-floating-label .input-label {\n    position: relative;\n    padding: 5px 0 0 0;\n    opacity: 0;\n    top: 10px;\n    -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;\n    transition: opacity 0.15s ease-in, top 0.2s linear; }\n    .item-floating-label .input-label.has-input {\n      opacity: 1;\n      top: 0;\n      -webkit-transition: opacity 0.15s ease-in, top 0.2s linear;\n      transition: opacity 0.15s ease-in, top 0.2s linear; }\n\ntextarea,\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"datetime\"],\ninput[type=\"datetime-local\"],\ninput[type=\"date\"],\ninput[type=\"month\"],\ninput[type=\"time\"],\ninput[type=\"week\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"search\"],\ninput[type=\"tel\"],\ninput[type=\"color\"] {\n  display: block;\n  padding-top: 2px;\n  padding-left: 0;\n  height: 29px;\n  color: #111;\n  vertical-align: middle;\n  font-size: 12px;\n  line-height: 14px; }\n\n.platform-ios input[type=\"datetime-local\"],\n.platform-ios input[type=\"date\"],\n.platform-ios input[type=\"month\"],\n.platform-ios input[type=\"time\"],\n.platform-ios input[type=\"week\"],\n.platform-android input[type=\"datetime-local\"],\n.platform-android input[type=\"date\"],\n.platform-android input[type=\"month\"],\n.platform-android input[type=\"time\"],\n.platform-android input[type=\"week\"] {\n  padding-top: 8px; }\n\n.item-input input,\n.item-input textarea {\n  width: 100%; }\n\ntextarea {\n  padding-left: 0; }\n  textarea::-moz-placeholder {\n    color: #aaaaaa; }\n  textarea:-ms-input-placeholder {\n    color: #aaaaaa; }\n  textarea::-webkit-input-placeholder {\n    color: #aaaaaa;\n    text-indent: -3px; }\n\ntextarea {\n  height: auto; }\n\ntextarea,\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"datetime\"],\ninput[type=\"datetime-local\"],\ninput[type=\"date\"],\ninput[type=\"month\"],\ninput[type=\"time\"],\ninput[type=\"week\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"url\"],\ninput[type=\"search\"],\ninput[type=\"tel\"],\ninput[type=\"color\"] {\n  border: 0; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 0;\n  line-height: normal; }\n\n.item-input input[type=\"file\"],\n.item-input input[type=\"image\"],\n.item-input input[type=\"submit\"],\n.item-input input[type=\"reset\"],\n.item-input input[type=\"button\"],\n.item-input input[type=\"radio\"],\n.item-input input[type=\"checkbox\"] {\n  width: auto; }\n\ninput[type=\"file\"] {\n  line-height: 31px; }\n\n.previous-input-focus,\n.cloned-text-input + input,\n.cloned-text-input + textarea {\n  position: absolute !important;\n  left: -9999px;\n  width: 200px; }\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #aaaaaa; }\n\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  color: #aaaaaa; }\n\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #aaaaaa;\n  text-indent: 0; }\n\ninput[disabled],\nselect[disabled],\ntextarea[disabled],\ninput[readonly]:not(.cloned-text-input),\ntextarea[readonly]:not(.cloned-text-input),\nselect[readonly] {\n  background-color: #f8f8f8;\n  cursor: not-allowed; }\n\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"][readonly],\ninput[type=\"checkbox\"][readonly] {\n  background-color: transparent; }\n\n.checkbox {\n  position: relative;\n  display: inline-block;\n  padding: 7px 7px;\n  cursor: pointer; }\n  .checkbox input:before,\n  .checkbox .checkbox-icon:before {\n    border-color: #ddd; }\n  .checkbox input:checked:before,\n  .checkbox input:checked + .checkbox-icon:before {\n    background: #979797;\n    border-color: #979797; }\n\n.checkbox-light input:before,\n.checkbox-light .checkbox-icon:before {\n  border-color: #ddd; }\n\n.checkbox-light input:checked:before,\n.checkbox-light input:checked + .checkbox-icon:before {\n  background: #ddd;\n  border-color: #ddd; }\n\n.checkbox-stable input:before,\n.checkbox-stable .checkbox-icon:before {\n  border-color: #b2b2b2; }\n\n.checkbox-stable input:checked:before,\n.checkbox-stable input:checked + .checkbox-icon:before {\n  background: #b2b2b2;\n  border-color: #b2b2b2; }\n\n.checkbox-positive input:before,\n.checkbox-positive .checkbox-icon:before {\n  border-color: #979797; }\n\n.checkbox-positive input:checked:before,\n.checkbox-positive input:checked + .checkbox-icon:before {\n  background: #979797;\n  border-color: #979797; }\n\n.checkbox-calm input:before,\n.checkbox-calm .checkbox-icon:before {\n  border-color: #11c1f3; }\n\n.checkbox-calm input:checked:before,\n.checkbox-calm input:checked + .checkbox-icon:before {\n  background: #11c1f3;\n  border-color: #11c1f3; }\n\n.checkbox-assertive input:before,\n.checkbox-assertive .checkbox-icon:before {\n  border-color: #ef473a; }\n\n.checkbox-assertive input:checked:before,\n.checkbox-assertive input:checked + .checkbox-icon:before {\n  background: #ef473a;\n  border-color: #ef473a; }\n\n.checkbox-balanced input:before,\n.checkbox-balanced .checkbox-icon:before {\n  border-color: #33cd5f; }\n\n.checkbox-balanced input:checked:before,\n.checkbox-balanced input:checked + .checkbox-icon:before {\n  background: #33cd5f;\n  border-color: #33cd5f; }\n\n.checkbox-energized input:before,\n.checkbox-energized .checkbox-icon:before {\n  border-color: #ffc900; }\n\n.checkbox-energized input:checked:before,\n.checkbox-energized input:checked + .checkbox-icon:before {\n  background: #ffc900;\n  border-color: #ffc900; }\n\n.checkbox-royal input:before,\n.checkbox-royal .checkbox-icon:before {\n  border-color: #886aea; }\n\n.checkbox-royal input:checked:before,\n.checkbox-royal input:checked + .checkbox-icon:before {\n  background: #886aea;\n  border-color: #886aea; }\n\n.checkbox-dark input:before,\n.checkbox-dark .checkbox-icon:before {\n  border-color: #444; }\n\n.checkbox-dark input:checked:before,\n.checkbox-dark input:checked + .checkbox-icon:before {\n  background: #444;\n  border-color: #444; }\n\n.checkbox input:disabled:before,\n.checkbox input:disabled + .checkbox-icon:before {\n  border-color: #ddd; }\n\n.checkbox input:disabled:checked:before,\n.checkbox input:disabled:checked + .checkbox-icon:before {\n  background: #ddd; }\n\n.checkbox.checkbox-input-hidden input {\n  display: none !important; }\n\n.checkbox input,\n.checkbox-icon {\n  position: relative;\n  width: 28px;\n  height: 28px;\n  display: block;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none; }\n  .checkbox input:before,\n  .checkbox-icon:before {\n    display: table;\n    width: 100%;\n    height: 100%;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 28px;\n    background: #fff;\n    content: ' ';\n    -webkit-transition: background-color 20ms ease-in-out;\n    transition: background-color 20ms ease-in-out; }\n\n.checkbox input:checked:before,\ninput:checked + .checkbox-icon:before {\n  border-width: 2px; }\n\n.checkbox input:after,\n.checkbox-icon:after {\n  -webkit-transition: opacity 0.05s ease-in-out;\n  transition: opacity 0.05s ease-in-out;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  position: absolute;\n  top: 33%;\n  left: 25%;\n  display: table;\n  width: 14px;\n  height: 6px;\n  border: 1px solid #fff;\n  border-top: 0;\n  border-right: 0;\n  content: ' ';\n  opacity: 0; }\n\n.platform-android .checkbox-platform input:before,\n.platform-android .checkbox-platform .checkbox-icon:before,\n.checkbox-square input:before,\n.checkbox-square .checkbox-icon:before {\n  border-radius: 2px;\n  width: 72%;\n  height: 72%;\n  margin-top: 14%;\n  margin-left: 14%;\n  border-width: 2px; }\n\n.platform-android .checkbox-platform input:after,\n.platform-android .checkbox-platform .checkbox-icon:after,\n.checkbox-square input:after,\n.checkbox-square .checkbox-icon:after {\n  border-width: 2px;\n  top: 19%;\n  left: 25%;\n  width: 13px;\n  height: 7px; }\n\n.grade-c .checkbox input:after,\n.grade-c .checkbox-icon:after {\n  -webkit-transform: rotate(0);\n  transform: rotate(0);\n  top: 3px;\n  left: 4px;\n  border: none;\n  color: #fff;\n  content: '\\2713';\n  font-weight: bold;\n  font-size: 20px; }\n\n.checkbox input:checked:after,\ninput:checked + .checkbox-icon:after {\n  opacity: 1; }\n\n.item-checkbox {\n  padding-left: 60px; }\n  .item-checkbox.active {\n    box-shadow: none; }\n\n.item-checkbox .checkbox {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  left: 8px;\n  z-index: 3;\n  margin-top: -21px; }\n\n.item-checkbox.item-checkbox-right {\n  padding-right: 60px;\n  padding-left: 16px; }\n\n.item-checkbox-right .checkbox input,\n.item-checkbox-right .checkbox-icon {\n  float: right; }\n\n.item-toggle {\n  pointer-events: none; }\n\n.toggle {\n  position: relative;\n  display: inline-block;\n  pointer-events: auto;\n  margin: -5px;\n  padding: 5px; }\n  .toggle input:checked + .track {\n    border-color: #4cd964;\n    background-color: #4cd964; }\n  .toggle.dragging .handle {\n    background-color: #f2f2f2 !important; }\n\n.toggle.toggle-light input:checked + .track {\n  border-color: #ddd;\n  background-color: #ddd; }\n\n.toggle.toggle-stable input:checked + .track {\n  border-color: #b2b2b2;\n  background-color: #b2b2b2; }\n\n.toggle.toggle-positive input:checked + .track {\n  border-color: #979797;\n  background-color: #979797; }\n\n.toggle.toggle-calm input:checked + .track {\n  border-color: #11c1f3;\n  background-color: #11c1f3; }\n\n.toggle.toggle-assertive input:checked + .track {\n  border-color: #ef473a;\n  background-color: #ef473a; }\n\n.toggle.toggle-balanced input:checked + .track {\n  border-color: #33cd5f;\n  background-color: #33cd5f; }\n\n.toggle.toggle-energized input:checked + .track {\n  border-color: #ffc900;\n  background-color: #ffc900; }\n\n.toggle.toggle-royal input:checked + .track {\n  border-color: #886aea;\n  background-color: #886aea; }\n\n.toggle.toggle-dark input:checked + .track {\n  border-color: #444;\n  background-color: #444; }\n\n.toggle input {\n  display: none; }\n\n.toggle .track {\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: background-color, border;\n  transition-property: background-color, border;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 51px;\n  height: 31px;\n  border: solid 2px #e6e6e6;\n  border-radius: 20px;\n  background-color: #fff;\n  content: ' ';\n  cursor: pointer;\n  pointer-events: none; }\n\n.platform-android4_2 .toggle .track {\n  -webkit-background-clip: padding-box; }\n\n.toggle .handle {\n  -webkit-transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);\n  transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);\n  -webkit-transition-property: background-color, transform;\n  transition-property: background-color, transform;\n  position: absolute;\n  display: block;\n  width: 27px;\n  height: 27px;\n  border-radius: 27px;\n  background-color: #fff;\n  top: 7px;\n  left: 7px;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15); }\n  .toggle .handle:before {\n    position: absolute;\n    top: -4px;\n    left: -21.5px;\n    padding: 18.5px 34px;\n    content: \" \"; }\n\n.toggle input:checked + .track .handle {\n  -webkit-transform: translate3d(20px, 0, 0);\n  transform: translate3d(20px, 0, 0);\n  background-color: #fff; }\n\n.item-toggle.active {\n  box-shadow: none; }\n\n.item-toggle,\n.item-toggle.item-complex .item-content {\n  padding-right: 99px; }\n\n.item-toggle.item-complex {\n  padding-right: 0; }\n\n.item-toggle .toggle {\n  position: absolute;\n  top: 10px;\n  right: 16px;\n  z-index: 3; }\n\n.toggle input:disabled + .track {\n  opacity: .6; }\n\n.toggle-small .track {\n  border: 0;\n  width: 34px;\n  height: 15px;\n  background: #9e9e9e; }\n\n.toggle-small input:checked + .track {\n  background: rgba(0, 150, 137, 0.5); }\n\n.toggle-small .handle {\n  top: 2px;\n  left: 4px;\n  width: 21px;\n  height: 21px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25); }\n\n.toggle-small input:checked + .track .handle {\n  -webkit-transform: translate3d(16px, 0, 0);\n  transform: translate3d(16px, 0, 0);\n  background: #009689; }\n\n.toggle-small.item-toggle .toggle {\n  top: 19px; }\n\n.toggle-small .toggle-light input:checked + .track {\n  background-color: rgba(221, 221, 221, 0.5); }\n\n.toggle-small .toggle-light input:checked + .track .handle {\n  background-color: #ddd; }\n\n.toggle-small .toggle-stable input:checked + .track {\n  background-color: rgba(178, 178, 178, 0.5); }\n\n.toggle-small .toggle-stable input:checked + .track .handle {\n  background-color: #b2b2b2; }\n\n.toggle-small .toggle-positive input:checked + .track {\n  background-color: rgba(151, 151, 151, 0.5); }\n\n.toggle-small .toggle-positive input:checked + .track .handle {\n  background-color: #979797; }\n\n.toggle-small .toggle-calm input:checked + .track {\n  background-color: rgba(17, 193, 243, 0.5); }\n\n.toggle-small .toggle-calm input:checked + .track .handle {\n  background-color: #11c1f3; }\n\n.toggle-small .toggle-assertive input:checked + .track {\n  background-color: rgba(239, 71, 58, 0.5); }\n\n.toggle-small .toggle-assertive input:checked + .track .handle {\n  background-color: #ef473a; }\n\n.toggle-small .toggle-balanced input:checked + .track {\n  background-color: rgba(51, 205, 95, 0.5); }\n\n.toggle-small .toggle-balanced input:checked + .track .handle {\n  background-color: #33cd5f; }\n\n.toggle-small .toggle-energized input:checked + .track {\n  background-color: rgba(255, 201, 0, 0.5); }\n\n.toggle-small .toggle-energized input:checked + .track .handle {\n  background-color: #ffc900; }\n\n.toggle-small .toggle-royal input:checked + .track {\n  background-color: rgba(136, 106, 234, 0.5); }\n\n.toggle-small .toggle-royal input:checked + .track .handle {\n  background-color: #886aea; }\n\n.toggle-small .toggle-dark input:checked + .track {\n  background-color: rgba(68, 68, 68, 0.5); }\n\n.toggle-small .toggle-dark input:checked + .track .handle {\n  background-color: #444; }\n\n.item-radio {\n  padding: 0; }\n  .item-radio:hover {\n    cursor: pointer; }\n\n.item-radio .item-content {\n  padding-right: 64px; }\n\n.item-radio .radio-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 3;\n  visibility: hidden;\n  padding: 14px;\n  height: 100%;\n  font-size: 24px; }\n\n.item-radio input {\n  position: absolute;\n  left: -9999px; }\n  .item-radio input:checked + .radio-content .item-content {\n    background: #f7f7f7; }\n  .item-radio input:checked + .radio-content .radio-icon {\n    visibility: visible; }\n\n.range input {\n  display: inline-block;\n  overflow: hidden;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-right: 2px;\n  padding-left: 1px;\n  width: auto;\n  height: 43px;\n  outline: none;\n  background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ccc), color-stop(100%, #ccc));\n  background: linear-gradient(to right, #ccc 0%, #ccc 100%);\n  background-position: center;\n  background-size: 99% 2px;\n  background-repeat: no-repeat;\n  -webkit-appearance: none; }\n  .range input::-webkit-slider-thumb {\n    position: relative;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: #fff;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    -webkit-appearance: none;\n    border: 0; }\n  .range input::-webkit-slider-thumb:before {\n    position: absolute;\n    top: 13px;\n    left: -2001px;\n    width: 2000px;\n    height: 2px;\n    background: #444;\n    content: ' '; }\n  .range input::-webkit-slider-thumb:after {\n    position: absolute;\n    top: -15px;\n    left: -15px;\n    padding: 30px;\n    content: ' '; }\n  .range input::-ms-track {\n    background: transparent;\n    border-color: transparent;\n    border-width: 11px 0 16px;\n    color: transparent;\n    margin-top: 20px; }\n  .range input::-ms-thumb {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: #fff;\n    border-color: #fff;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);\n    margin-left: 1px;\n    margin-right: 1px;\n    outline: none; }\n  .range input::-ms-fill-lower {\n    height: 2px;\n    background: #444; }\n  .range input::-ms-fill-upper {\n    height: 2px;\n    background: #ccc; }\n\n.range {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center;\n  padding: 2px 11px; }\n  .range.range-light input::-webkit-slider-thumb:before {\n    background: #ddd; }\n  .range.range-light input::-ms-fill-lower {\n    background: #ddd; }\n  .range.range-stable input::-webkit-slider-thumb:before {\n    background: #b2b2b2; }\n  .range.range-stable input::-ms-fill-lower {\n    background: #b2b2b2; }\n  .range.range-positive input::-webkit-slider-thumb:before {\n    background: #979797; }\n  .range.range-positive input::-ms-fill-lower {\n    background: #979797; }\n  .range.range-calm input::-webkit-slider-thumb:before {\n    background: #11c1f3; }\n  .range.range-calm input::-ms-fill-lower {\n    background: #11c1f3; }\n  .range.range-balanced input::-webkit-slider-thumb:before {\n    background: #33cd5f; }\n  .range.range-balanced input::-ms-fill-lower {\n    background: #33cd5f; }\n  .range.range-assertive input::-webkit-slider-thumb:before {\n    background: #ef473a; }\n  .range.range-assertive input::-ms-fill-lower {\n    background: #ef473a; }\n  .range.range-energized input::-webkit-slider-thumb:before {\n    background: #ffc900; }\n  .range.range-energized input::-ms-fill-lower {\n    background: #ffc900; }\n  .range.range-royal input::-webkit-slider-thumb:before {\n    background: #886aea; }\n  .range.range-royal input::-ms-fill-lower {\n    background: #886aea; }\n  .range.range-dark input::-webkit-slider-thumb:before {\n    background: #444; }\n  .range.range-dark input::-ms-fill-lower {\n    background: #444; }\n\n.range .icon {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0;\n  -moz-box-flex: 0;\n  -moz-flex: 0;\n  -ms-flex: 0;\n  flex: 0;\n  display: block;\n  min-width: 24px;\n  text-align: center;\n  font-size: 24px; }\n\n.range input {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.range-label {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  display: block;\n  white-space: nowrap; }\n\n.range-label:first-child {\n  padding-left: 5px; }\n\n.range input + .range-label {\n  padding-right: 5px;\n  padding-left: 0; }\n\n.platform-windowsphone .range input {\n  height: auto; }\n\n.item-select {\n  position: relative; }\n  .item-select select {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0 48px 0 16px;\n    max-width: 65%;\n    border: none;\n    background: #fff;\n    color: #333;\n    text-indent: .01px;\n    text-overflow: '';\n    white-space: nowrap;\n    font-size: 12px;\n    cursor: pointer;\n    direction: rtl; }\n  .item-select select::-ms-expand {\n    display: none; }\n  .item-select option {\n    direction: ltr; }\n  .item-select:after {\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    margin-top: -3px;\n    width: 0;\n    height: 0;\n    border-top: 5px solid;\n    border-right: 5px solid transparent;\n    border-left: 5px solid transparent;\n    color: #999;\n    content: \"\";\n    pointer-events: none; }\n  .item-select.item-light select {\n    background: #fff;\n    color: #444; }\n  .item-select.item-stable select {\n    background: #f8f8f8;\n    color: #444; }\n  .item-select.item-stable:after, .item-select.item-stable .input-label {\n    color: #666666; }\n  .item-select.item-positive select {\n    background: #979797;\n    color: #fff; }\n  .item-select.item-positive:after, .item-select.item-positive .input-label {\n    color: #fff; }\n  .item-select.item-calm select {\n    background: #11c1f3;\n    color: #fff; }\n  .item-select.item-calm:after, .item-select.item-calm .input-label {\n    color: #fff; }\n  .item-select.item-assertive select {\n    background: #ef473a;\n    color: #fff; }\n  .item-select.item-assertive:after, .item-select.item-assertive .input-label {\n    color: #fff; }\n  .item-select.item-balanced select {\n    background: #33cd5f;\n    color: #fff; }\n  .item-select.item-balanced:after, .item-select.item-balanced .input-label {\n    color: #fff; }\n  .item-select.item-energized select {\n    background: #ffc900;\n    color: #fff; }\n  .item-select.item-energized:after, .item-select.item-energized .input-label {\n    color: #fff; }\n  .item-select.item-royal select {\n    background: #886aea;\n    color: #fff; }\n  .item-select.item-royal:after, .item-select.item-royal .input-label {\n    color: #fff; }\n  .item-select.item-dark select {\n    background: #444;\n    color: #fff; }\n  .item-select.item-dark:after, .item-select.item-dark .input-label {\n    color: #fff; }\n\nselect[multiple], select[size] {\n  height: auto; }\n\n.button {\n  border-color: #b2b2b2;\n  background-color: #f8f8f8;\n  color: #444;\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0 12px;\n  min-width: 52px;\n  min-height: 47px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  vertical-align: top;\n  text-align: center;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  line-height: 42px;\n  cursor: pointer; }\n  .button:hover {\n    color: #444;\n    text-decoration: none; }\n  .button.active, .button.activated {\n    border-color: #a2a2a2;\n    background-color: #e5e5e5;\n    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n  .button:after {\n    position: absolute;\n    top: -6px;\n    right: -6px;\n    bottom: -6px;\n    left: -6px;\n    content: ' '; }\n  .button .icon {\n    vertical-align: top;\n    pointer-events: none; }\n  .button .icon:before, .button.icon:before, .button.icon-left:before, .button.icon-right:before {\n    display: inline-block;\n    padding: 0 0 1px 0;\n    vertical-align: inherit;\n    font-size: 24px;\n    line-height: 41px;\n    pointer-events: none; }\n  .button.icon-left:before {\n    float: left;\n    padding-right: .2em;\n    padding-left: 0; }\n  .button.icon-right:before {\n    float: right;\n    padding-right: 0;\n    padding-left: .2em; }\n  .button.button-block, .button.button-full {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .button.button-light {\n    border-color: #ddd;\n    background-color: #fff;\n    color: #444; }\n    .button.button-light:hover {\n      color: #444;\n      text-decoration: none; }\n    .button.button-light.active, .button.button-light.activated {\n      border-color: #ccc;\n      background-color: #fafafa;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-light.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #ddd; }\n    .button.button-light.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-light.button-outline {\n      border-color: #ddd;\n      background: transparent;\n      color: #ddd; }\n      .button.button-light.button-outline.active, .button.button-light.button-outline.activated {\n        background-color: #ddd;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-stable {\n    border-color: #b2b2b2;\n    background-color: #f8f8f8;\n    color: #444; }\n    .button.button-stable:hover {\n      color: #444;\n      text-decoration: none; }\n    .button.button-stable.active, .button.button-stable.activated {\n      border-color: #a2a2a2;\n      background-color: #e5e5e5;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-stable.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #b2b2b2; }\n    .button.button-stable.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-stable.button-outline {\n      border-color: #b2b2b2;\n      background: transparent;\n      color: #b2b2b2; }\n      .button.button-stable.button-outline.active, .button.button-stable.button-outline.activated {\n        background-color: #b2b2b2;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-positive {\n    border-color: #979797;\n    background-color: #979797;\n    color: #fff; }\n    .button.button-positive:hover {\n      color: #fff;\n      text-decoration: none; }\n    .button.button-positive.active, .button.button-positive.activated {\n      border-color: #7e7e7e;\n      background-color: #7e7e7e;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-positive.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #979797; }\n    .button.button-positive.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-positive.button-outline {\n      border-color: #979797;\n      background: transparent;\n      color: #979797; }\n      .button.button-positive.button-outline.active, .button.button-positive.button-outline.activated {\n        background-color: #979797;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-calm {\n    border-color: #0a9dc7;\n    background-color: #11c1f3;\n    color: #fff; }\n    .button.button-calm:hover {\n      color: #fff;\n      text-decoration: none; }\n    .button.button-calm.active, .button.button-calm.activated {\n      border-color: #0a9dc7;\n      background-color: #0a9dc7;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-calm.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #11c1f3; }\n    .button.button-calm.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-calm.button-outline {\n      border-color: #11c1f3;\n      background: transparent;\n      color: #11c1f3; }\n      .button.button-calm.button-outline.active, .button.button-calm.button-outline.activated {\n        background-color: #11c1f3;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-assertive {\n    border-color: #e42112;\n    background-color: #ef473a;\n    color: #fff; }\n    .button.button-assertive:hover {\n      color: #fff;\n      text-decoration: none; }\n    .button.button-assertive.active, .button.button-assertive.activated {\n      border-color: #e42112;\n      background-color: #e42112;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-assertive.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #ef473a; }\n    .button.button-assertive.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-assertive.button-outline {\n      border-color: #ef473a;\n      background: transparent;\n      color: #ef473a; }\n      .button.button-assertive.button-outline.active, .button.button-assertive.button-outline.activated {\n        background-color: #ef473a;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-balanced {\n    border-color: #28a54c;\n    background-color: #33cd5f;\n    color: #fff; }\n    .button.button-balanced:hover {\n      color: #fff;\n      text-decoration: none; }\n    .button.button-balanced.active, .button.button-balanced.activated {\n      border-color: #28a54c;\n      background-color: #28a54c;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-balanced.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #33cd5f; }\n    .button.button-balanced.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-balanced.button-outline {\n      border-color: #33cd5f;\n      background: transparent;\n      color: #33cd5f; }\n      .button.button-balanced.button-outline.active, .button.button-balanced.button-outline.activated {\n        background-color: #33cd5f;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-energized {\n    border-color: #e6b500;\n    background-color: #ffc900;\n    color: #fff; }\n    .button.button-energized:hover {\n      color: #fff;\n      text-decoration: none; }\n    .button.button-energized.active, .button.button-energized.activated {\n      border-color: #e6b500;\n      background-color: #e6b500;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-energized.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #ffc900; }\n    .button.button-energized.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-energized.button-outline {\n      border-color: #ffc900;\n      background: transparent;\n      color: #ffc900; }\n      .button.button-energized.button-outline.active, .button.button-energized.button-outline.activated {\n        background-color: #ffc900;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-royal {\n    border-color: #6b46e5;\n    background-color: #886aea;\n    color: #fff; }\n    .button.button-royal:hover {\n      color: #fff;\n      text-decoration: none; }\n    .button.button-royal.active, .button.button-royal.activated {\n      border-color: #6b46e5;\n      background-color: #6b46e5;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-royal.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #886aea; }\n    .button.button-royal.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-royal.button-outline {\n      border-color: #886aea;\n      background: transparent;\n      color: #886aea; }\n      .button.button-royal.button-outline.active, .button.button-royal.button-outline.activated {\n        background-color: #886aea;\n        box-shadow: none;\n        color: #fff; }\n  .button.button-dark {\n    border-color: #111;\n    background-color: #444;\n    color: #fff; }\n    .button.button-dark:hover {\n      color: #fff;\n      text-decoration: none; }\n    .button.button-dark.active, .button.button-dark.activated {\n      border-color: #000;\n      background-color: #262626;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1); }\n    .button.button-dark.button-clear {\n      border-color: transparent;\n      background: none;\n      box-shadow: none;\n      color: #444; }\n    .button.button-dark.button-icon {\n      border-color: transparent;\n      background: none; }\n    .button.button-dark.button-outline {\n      border-color: #444;\n      background: transparent;\n      color: #444; }\n      .button.button-dark.button-outline.active, .button.button-dark.button-outline.activated {\n        background-color: #444;\n        box-shadow: none;\n        color: #fff; }\n\n.button-small {\n  padding: 2px 4px 1px;\n  min-width: 28px;\n  min-height: 30px;\n  font-size: 12px;\n  line-height: 26px; }\n  .button-small .icon:before, .button-small.icon:before, .button-small.icon-left:before, .button-small.icon-right:before {\n    font-size: 16px;\n    line-height: 19px;\n    margin-top: 3px; }\n\n.button-large {\n  padding: 0 16px;\n  min-width: 68px;\n  min-height: 59px;\n  font-size: 20px;\n  line-height: 53px; }\n  .button-large .icon:before, .button-large.icon:before, .button-large.icon-left:before, .button-large.icon-right:before {\n    padding-bottom: 2px;\n    font-size: 32px;\n    line-height: 51px; }\n\n.button-icon {\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  padding: 0 6px;\n  min-width: initial;\n  border-color: transparent;\n  background: none; }\n  .button-icon.button.active, .button-icon.button.activated {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    opacity: 0.3; }\n  .button-icon .icon:before, .button-icon.icon:before {\n    font-size: 32px; }\n\n.button-clear {\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  padding: 0 6px;\n  max-height: 42px;\n  border-color: transparent;\n  background: none;\n  box-shadow: none; }\n  .button-clear.button-clear {\n    border-color: transparent;\n    background: none;\n    box-shadow: none;\n    color: #b2b2b2; }\n  .button-clear.button-icon {\n    border-color: transparent;\n    background: none; }\n  .button-clear.active, .button-clear.activated {\n    opacity: 0.3; }\n\n.button-outline {\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  background: none;\n  box-shadow: none; }\n  .button-outline.button-outline {\n    border-color: #b2b2b2;\n    background: transparent;\n    color: #b2b2b2; }\n    .button-outline.button-outline.active, .button-outline.button-outline.activated {\n      background-color: #b2b2b2;\n      box-shadow: none;\n      color: #fff; }\n\n.padding > .button.button-block:first-child {\n  margin-top: 0; }\n\n.button-block {\n  display: block;\n  clear: both; }\n  .button-block:after {\n    clear: both; }\n\n.button-full,\n.button-full > .button {\n  display: block;\n  margin-right: 0;\n  margin-left: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  border-radius: 0; }\n\nbutton.button-block,\nbutton.button-full,\n.button-full > button.button,\ninput.button.button-block {\n  width: 100%; }\n\na.button {\n  text-decoration: none; }\n  a.button .icon:before, a.button.icon:before, a.button.icon-left:before, a.button.icon-right:before {\n    margin-top: 2px; }\n\n.button.disabled,\n.button[disabled] {\n  opacity: .4;\n  cursor: default !important;\n  pointer-events: none; }\n\n.button-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%; }\n  .button-bar.button-bar-inline {\n    display: block;\n    width: auto;\n    *zoom: 1; }\n    .button-bar.button-bar-inline:before, .button-bar.button-bar-inline:after {\n      display: table;\n      content: \"\";\n      line-height: 0; }\n    .button-bar.button-bar-inline:after {\n      clear: both; }\n    .button-bar.button-bar-inline > .button {\n      width: auto;\n      display: inline-block;\n      float: left; }\n\n.button-bar > .button {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  overflow: hidden;\n  padding: 0 16px;\n  width: 0;\n  border-width: 1px 0px 1px 1px;\n  border-radius: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .button-bar > .button:before,\n  .button-bar > .button .icon:before {\n    line-height: 44px; }\n  .button-bar > .button:first-child {\n    border-radius: 2px 0px 0px 2px; }\n  .button-bar > .button:last-child {\n    border-right-width: 1px;\n    border-radius: 0px 2px 2px 0px; }\n\n.button-bar > .button-small:before,\n.button-bar > .button-small .icon:before {\n  line-height: 28px; }\n\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px;\n  width: 100%; }\n\n.row-wrap {\n  -webkit-flex-wrap: wrap;\n  -moz-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.row-no-padding {\n  padding: 0; }\n  .row-no-padding > .col {\n    padding: 0; }\n\n.row + .row {\n  margin-top: -5px;\n  padding-top: 0; }\n\n.col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -moz-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  padding: 5px;\n  width: 100%; }\n\n.row-top {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  -webkit-align-items: flex-start;\n  -moz-align-items: flex-start;\n  align-items: flex-start; }\n\n.row-bottom {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  -webkit-align-items: flex-end;\n  -moz-align-items: flex-end;\n  align-items: flex-end; }\n\n.row-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  align-items: center; }\n\n.row-stretch {\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  -webkit-align-items: stretch;\n  -moz-align-items: stretch;\n  align-items: stretch; }\n\n.row-baseline {\n  -webkit-box-align: baseline;\n  -ms-flex-align: baseline;\n  -webkit-align-items: baseline;\n  -moz-align-items: baseline;\n  align-items: baseline; }\n\n.col-top {\n  -webkit-align-self: flex-start;\n  -moz-align-self: flex-start;\n  -ms-flex-item-align: start;\n  align-self: flex-start; }\n\n.col-bottom {\n  -webkit-align-self: flex-end;\n  -moz-align-self: flex-end;\n  -ms-flex-item-align: end;\n  align-self: flex-end; }\n\n.col-center {\n  -webkit-align-self: center;\n  -moz-align-self: center;\n  -ms-flex-item-align: center;\n  align-self: center; }\n\n.col-offset-10 {\n  margin-left: 10%; }\n\n.col-offset-20 {\n  margin-left: 20%; }\n\n.col-offset-25 {\n  margin-left: 25%; }\n\n.col-offset-33, .col-offset-34 {\n  margin-left: 33.3333%; }\n\n.col-offset-50 {\n  margin-left: 50%; }\n\n.col-offset-66, .col-offset-67 {\n  margin-left: 66.6666%; }\n\n.col-offset-75 {\n  margin-left: 75%; }\n\n.col-offset-80 {\n  margin-left: 80%; }\n\n.col-offset-90 {\n  margin-left: 90%; }\n\n.col-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 10%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 10%;\n  -ms-flex: 0 0 10%;\n  flex: 0 0 10%;\n  max-width: 10%; }\n\n.col-20 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 20%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 20%;\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%; }\n\n.col-25 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 25%;\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-33, .col-34 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.3333%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 33.3333%;\n  -ms-flex: 0 0 33.3333%;\n  flex: 0 0 33.3333%;\n  max-width: 33.3333%; }\n\n.col-50 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 50%;\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-66, .col-67 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.6666%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 66.6666%;\n  -ms-flex: 0 0 66.6666%;\n  flex: 0 0 66.6666%;\n  max-width: 66.6666%; }\n\n.col-75 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 75%;\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-80 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 80%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 80%;\n  -ms-flex: 0 0 80%;\n  flex: 0 0 80%;\n  max-width: 80%; }\n\n.col-90 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 90%;\n  -moz-box-flex: 0;\n  -moz-flex: 0 0 90%;\n  -ms-flex: 0 0 90%;\n  flex: 0 0 90%;\n  max-width: 90%; }\n\n@media (max-width: 567px) {\n  .responsive-sm {\n    -webkit-box-direction: normal;\n    -moz-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n    .responsive-sm .col, .responsive-sm .col-10, .responsive-sm .col-20, .responsive-sm .col-25, .responsive-sm .col-33, .responsive-sm .col-34, .responsive-sm .col-50, .responsive-sm .col-66, .responsive-sm .col-67, .responsive-sm .col-75, .responsive-sm .col-80, .responsive-sm .col-90 {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      -moz-box-flex: 1;\n      -moz-flex: 1;\n      -ms-flex: 1;\n      flex: 1;\n      margin-bottom: 15px;\n      margin-left: 0;\n      max-width: 100%;\n      width: 100%; } }\n\n@media (max-width: 767px) {\n  .responsive-md {\n    -webkit-box-direction: normal;\n    -moz-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n    .responsive-md .col, .responsive-md .col-10, .responsive-md .col-20, .responsive-md .col-25, .responsive-md .col-33, .responsive-md .col-34, .responsive-md .col-50, .responsive-md .col-66, .responsive-md .col-67, .responsive-md .col-75, .responsive-md .col-80, .responsive-md .col-90 {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      -moz-box-flex: 1;\n      -moz-flex: 1;\n      -ms-flex: 1;\n      flex: 1;\n      margin-bottom: 15px;\n      margin-left: 0;\n      max-width: 100%;\n      width: 100%; } }\n\n@media (max-width: 1023px) {\n  .responsive-lg {\n    -webkit-box-direction: normal;\n    -moz-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n    .responsive-lg .col, .responsive-lg .col-10, .responsive-lg .col-20, .responsive-lg .col-25, .responsive-lg .col-33, .responsive-lg .col-34, .responsive-lg .col-50, .responsive-lg .col-66, .responsive-lg .col-67, .responsive-lg .col-75, .responsive-lg .col-80, .responsive-lg .col-90 {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      -moz-box-flex: 1;\n      -moz-flex: 1;\n      -ms-flex: 1;\n      flex: 1;\n      margin-bottom: 15px;\n      margin-left: 0;\n      max-width: 100%;\n      width: 100%; } }\n\n.hide {\n  display: none; }\n\n.opacity-hide {\n  opacity: 0; }\n\n.grade-b .opacity-hide,\n.grade-c .opacity-hide {\n  opacity: 1;\n  display: none; }\n\n.show {\n  display: block; }\n\n.opacity-show {\n  opacity: 1; }\n\n.invisible {\n  visibility: hidden; }\n\n.keyboard-open .hide-on-keyboard-open {\n  display: none; }\n\n.keyboard-open .tabs.hide-on-keyboard-open + .pane .has-tabs,\n.keyboard-open .bar-footer.hide-on-keyboard-open + .pane .has-footer {\n  bottom: 0; }\n\n.inline {\n  display: inline-block; }\n\n.disable-pointer-events {\n  pointer-events: none; }\n\n.enable-pointer-events {\n  pointer-events: auto; }\n\n.disable-user-behavior {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-drag: none;\n  -ms-touch-action: none;\n  -ms-content-zooming: none; }\n\n.click-block {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 99999;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  overflow: hidden; }\n\n.click-block-hide {\n  -webkit-transform: translate3d(-9999px, 0, 0);\n  transform: translate3d(-9999px, 0, 0); }\n\n.no-resize {\n  resize: none; }\n\n.block {\n  display: block;\n  clear: both; }\n  .block:after {\n    display: block;\n    visibility: hidden;\n    clear: both;\n    height: 0;\n    content: \".\"; }\n\n.full-image {\n  width: 100%; }\n\n.clearfix {\n  *zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    display: table;\n    content: \"\";\n    line-height: 0; }\n  .clearfix:after {\n    clear: both; }\n\n.padding {\n  padding: 10px; }\n\n.padding-top,\n.padding-vertical {\n  padding-top: 10px; }\n\n.padding-right,\n.padding-horizontal {\n  padding-right: 10px; }\n\n.padding-bottom,\n.padding-vertical {\n  padding-bottom: 10px; }\n\n.padding-left,\n.padding-horizontal {\n  padding-left: 10px; }\n\n.iframe-wrapper {\n  position: fixed;\n  -webkit-overflow-scrolling: touch;\n  overflow: scroll; }\n  .iframe-wrapper iframe {\n    height: 100%;\n    width: 100%; }\n\n.rounded {\n  border-radius: 3px; }\n\n.light, a.light {\n  color: #fff; }\n\n.light-bg {\n  background-color: #fff; }\n\n.light-border {\n  border-color: #ddd; }\n\n.stable, a.stable {\n  color: #f8f8f8; }\n\n.stable-bg {\n  background-color: #f8f8f8; }\n\n.stable-border {\n  border-color: #b2b2b2; }\n\n.positive, a.positive {\n  color: #979797; }\n\n.positive-bg {\n  background-color: #979797; }\n\n.positive-border {\n  border-color: #979797; }\n\n.calm, a.calm {\n  color: #11c1f3; }\n\n.calm-bg {\n  background-color: #11c1f3; }\n\n.calm-border {\n  border-color: #0a9dc7; }\n\n.assertive, a.assertive {\n  color: #ef473a; }\n\n.assertive-bg {\n  background-color: #ef473a; }\n\n.assertive-border {\n  border-color: #e42112; }\n\n.balanced, a.balanced {\n  color: #33cd5f; }\n\n.balanced-bg {\n  background-color: #33cd5f; }\n\n.balanced-border {\n  border-color: #28a54c; }\n\n.energized, a.energized {\n  color: #ffc900; }\n\n.energized-bg {\n  background-color: #ffc900; }\n\n.energized-border {\n  border-color: #e6b500; }\n\n.royal, a.royal {\n  color: #886aea; }\n\n.royal-bg {\n  background-color: #886aea; }\n\n.royal-border {\n  border-color: #6b46e5; }\n\n.dark, a.dark {\n  color: #444; }\n\n.dark-bg {\n  background-color: #444; }\n\n.dark-border {\n  border-color: #111; }\n\n[collection-repeat] {\n  left: 0 !important;\n  top: 0 !important;\n  position: absolute !important;\n  z-index: 1; }\n\n.collection-repeat-container {\n  position: relative;\n  z-index: 1; }\n\n.collection-repeat-after-container {\n  z-index: 0;\n  display: block; }\n  .collection-repeat-after-container.horizontal {\n    display: inline-block; }\n\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak,\n.x-ng-cloak, .ng-hide:not(.ng-hide-animate) {\n  display: none !important; }\n\n.platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader) {\n  height: 64px; }\n  .platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader).item-input-inset .item-input-wrapper {\n    margin-top: 19px !important; }\n  .platform-ios.platform-cordova:not(.fullscreen) .bar-header:not(.bar-subheader) > * {\n    margin-top: 20px; }\n\n.platform-ios.platform-cordova:not(.fullscreen) .tabs-top > .tabs,\n.platform-ios.platform-cordova:not(.fullscreen) .tabs.tabs-top {\n  top: 64px; }\n\n.platform-ios.platform-cordova:not(.fullscreen) .has-header,\n.platform-ios.platform-cordova:not(.fullscreen) .bar-subheader {\n  top: 64px; }\n\n.platform-ios.platform-cordova:not(.fullscreen) .has-subheader {\n  top: 108px; }\n\n.platform-ios.platform-cordova:not(.fullscreen) .has-header.has-tabs-top {\n  top: 113px; }\n\n.platform-ios.platform-cordova:not(.fullscreen) .has-header.has-subheader.has-tabs-top {\n  top: 157px; }\n\n.platform-ios.platform-cordova .popover .bar-header:not(.bar-subheader) {\n  height: 44px; }\n  .platform-ios.platform-cordova .popover .bar-header:not(.bar-subheader).item-input-inset .item-input-wrapper {\n    margin-top: -1px; }\n  .platform-ios.platform-cordova .popover .bar-header:not(.bar-subheader) > * {\n    margin-top: 0; }\n\n.platform-ios.platform-cordova .popover .has-header,\n.platform-ios.platform-cordova .popover .bar-subheader {\n  top: 44px; }\n\n.platform-ios.platform-cordova .popover .has-subheader {\n  top: 88px; }\n\n.platform-ios.platform-cordova.status-bar-hide {\n  margin-bottom: 20px; }\n\n@media (orientation: landscape) {\n  .platform-ios.platform-browser.platform-ipad {\n    position: fixed; } }\n\n.platform-c:not(.enable-transitions) * {\n  -webkit-transition: none !important;\n  transition: none !important; }\n\n.slide-in-up {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n\n.slide-in-up.ng-enter,\n.slide-in-up > .ng-enter {\n  -webkit-transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms;\n  transition: all cubic-bezier(0.1, 0.7, 0.1, 1) 400ms; }\n\n.slide-in-up.ng-enter-active,\n.slide-in-up > .ng-enter-active {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slide-in-up.ng-leave,\n.slide-in-up > .ng-leave {\n  -webkit-transition: all ease-in-out 250ms;\n  transition: all ease-in-out 250ms; }\n\n@-webkit-keyframes scaleOut {\n  from {\n    -webkit-transform: scale(1);\n    opacity: 1; }\n  to {\n    -webkit-transform: scale(0.8);\n    opacity: 0; } }\n\n@keyframes scaleOut {\n  from {\n    transform: scale(1);\n    opacity: 1; }\n  to {\n    transform: scale(0.8);\n    opacity: 0; } }\n\n@-webkit-keyframes superScaleIn {\n  from {\n    -webkit-transform: scale(1.2);\n    opacity: 0; }\n  to {\n    -webkit-transform: scale(1);\n    opacity: 1; } }\n\n@keyframes superScaleIn {\n  from {\n    transform: scale(1.2);\n    opacity: 0; }\n  to {\n    transform: scale(1);\n    opacity: 1; } }\n\n[nav-view-transition=\"ios\"] [nav-view=\"entering\"],\n[nav-view-transition=\"ios\"] [nav-view=\"leaving\"] {\n  -webkit-transition-duration: 500ms;\n  transition-duration: 500ms;\n  -webkit-transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transition-property: opacity, -webkit-transform, box-shadow;\n  transition-property: opacity, transform, box-shadow; }\n\n[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"], [nav-view-transition=\"ios\"][nav-view-direction=\"back\"] {\n  background-color: #000; }\n\n[nav-view-transition=\"ios\"] [nav-view=\"active\"],\n[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"] [nav-view=\"entering\"],\n[nav-view-transition=\"ios\"][nav-view-direction=\"back\"] [nav-view=\"leaving\"] {\n  z-index: 3; }\n\n[nav-view-transition=\"ios\"][nav-view-direction=\"back\"] [nav-view=\"entering\"],\n[nav-view-transition=\"ios\"][nav-view-direction=\"forward\"] [nav-view=\"leaving\"] {\n  z-index: 2; }\n\n[nav-bar-transition=\"ios\"] .title,\n[nav-bar-transition=\"ios\"] .buttons,\n[nav-bar-transition=\"ios\"] .back-text {\n  -webkit-transition-duration: 500ms;\n  transition-duration: 500ms;\n  -webkit-transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition-timing-function: cubic-bezier(0.36, 0.66, 0.04, 1);\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform; }\n\n[nav-bar-transition=\"ios\"] [nav-bar=\"active\"],\n[nav-bar-transition=\"ios\"] [nav-bar=\"entering\"] {\n  z-index: 10; }\n  [nav-bar-transition=\"ios\"] [nav-bar=\"active\"] .bar,\n  [nav-bar-transition=\"ios\"] [nav-bar=\"entering\"] .bar {\n    background: transparent; }\n\n[nav-bar-transition=\"ios\"] [nav-bar=\"cached\"] {\n  display: block; }\n  [nav-bar-transition=\"ios\"] [nav-bar=\"cached\"] .header-item {\n    display: none; }\n\n[nav-view-transition=\"android\"] [nav-view=\"entering\"],\n[nav-view-transition=\"android\"] [nav-view=\"leaving\"] {\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: transform; }\n\n[nav-view-transition=\"android\"] [nav-view=\"active\"],\n[nav-view-transition=\"android\"][nav-view-direction=\"forward\"] [nav-view=\"entering\"],\n[nav-view-transition=\"android\"][nav-view-direction=\"back\"] [nav-view=\"leaving\"] {\n  z-index: 3; }\n\n[nav-view-transition=\"android\"][nav-view-direction=\"back\"] [nav-view=\"entering\"],\n[nav-view-transition=\"android\"][nav-view-direction=\"forward\"] [nav-view=\"leaving\"] {\n  z-index: 2; }\n\n[nav-bar-transition=\"android\"] .title,\n[nav-bar-transition=\"android\"] .buttons {\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0.6, 0.2, 1);\n  -webkit-transition-property: opacity;\n  transition-property: opacity; }\n\n[nav-bar-transition=\"android\"] [nav-bar=\"active\"],\n[nav-bar-transition=\"android\"] [nav-bar=\"entering\"] {\n  z-index: 10; }\n  [nav-bar-transition=\"android\"] [nav-bar=\"active\"] .bar,\n  [nav-bar-transition=\"android\"] [nav-bar=\"entering\"] .bar {\n    background: transparent; }\n\n[nav-bar-transition=\"android\"] [nav-bar=\"cached\"] {\n  display: block; }\n  [nav-bar-transition=\"android\"] [nav-bar=\"cached\"] .header-item {\n    display: none; }\n\n[nav-swipe=\"fast\"] [nav-view],\n[nav-swipe=\"fast\"] .title,\n[nav-swipe=\"fast\"] .buttons,\n[nav-swipe=\"fast\"] .back-text {\n  -webkit-transition-duration: 50ms;\n  transition-duration: 50ms;\n  -webkit-transition-timing-function: linear;\n  transition-timing-function: linear; }\n\n[nav-swipe=\"slow\"] [nav-view],\n[nav-swipe=\"slow\"] .title,\n[nav-swipe=\"slow\"] .buttons,\n[nav-swipe=\"slow\"] .back-text {\n  -webkit-transition-duration: 160ms;\n  transition-duration: 160ms;\n  -webkit-transition-timing-function: linear;\n  transition-timing-function: linear; }\n\n[nav-view=\"cached\"],\n[nav-bar=\"cached\"] {\n  display: none; }\n\n[nav-view=\"stage\"] {\n  opacity: 0;\n  -webkit-transition-duration: 0;\n  transition-duration: 0; }\n\n[nav-bar=\"stage\"] .title,\n[nav-bar=\"stage\"] .buttons,\n[nav-bar=\"stage\"] .back-text {\n  position: absolute;\n  opacity: 0;\n  -webkit-transition-duration: 0s;\n  transition-duration: 0s; }\n\n.dialog {\n  position: fixed;\n  z-index: 5000;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f8f8f8;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden; }\n  .dialog_confirm .dialog .dialog_head {\n    padding: 1.2em 20px .5em; }\n  .dialog_confirm .dialog .dialog_body {\n    text-align: left; }\n\n.dialog-head {\n  padding: 1.2em 0 .5em; }\n\n.dialog-title {\n  font-weight: 400;\n  font-size: 17px; }\n\n.dialog-body {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #444;\n  word-wrap: break-word;\n  word-break: break-all; }\n\n.dialog-foot {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px; }\n  .dialog-foot:after {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 1px;\n    border-top: 1px solid #d5d5d6;\n    color: #d5d5d6;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5); }\n\n@media screen and (min-width: 1024px) {\n  .dialog {\n    width: 35%; } }\n\n.vux-fade-transition {\n  opacity: 1;\n  transition: opacity linear 0.2s; }\n\n.vux-fade-enter, .vux-fade-leave {\n  opacity: 0; }\n\n.vux-dialog-transition {\n  opacity: 1;\n  transition-duration: .4s;\n  transform: translate(-50%, -50%) scale(1) !important;\n  transition-property: transform, opacity !important; }\n\n.vux-dialog-enter, .vux-dialog-leave {\n  opacity: 0; }\n\n.vux-dialog-enter {\n  transform: translate(-50%, -50%) scale(1.185) !important; }\n\n.vux-dialog-leave {\n  transform: translate(-50%, -50%) scale(1) !important; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	exports.i(__webpack_require__(93), "");
	
	// module
	exports.push([module.id, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, ".mask {\n    position: fixed;\n    z-index: 1000;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n}\n\n.mask_transparent {\n    position: fixed;\n    z-index: 5001;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n}\n\n.mask_transition {\n    display: none;\n    position: fixed;\n    z-index: 1000;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0);\n    transition:background .3s;\n}\n\n.fade_toggle {\n    background: rgba(0,0,0,.6);\n}", "", {"version":3,"sources":["/./src/js/v-mask/_mask.scss"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,OAAO;IACP,QAAQ;IACR,4BAA4B;CAC/B;;AAED;IACI,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,OAAO;IACP,QAAQ;CACX;;AAED;IACI,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,OAAO;IACP,QAAQ;IACR,0BAA0B;IAC1B,0BAA0B;CAC7B;;AAED;IACI,2BAA2B;CAC9B","file":"_mask.scss","sourcesContent":[".mask {\n    position: fixed;\n    z-index: 1000;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n}\n\n.mask_transparent {\n    position: fixed;\n    z-index: 5001;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n}\n\n.mask_transition {\n    display: none;\n    position: fixed;\n    z-index: 1000;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0);\n    transition:background .3s;\n}\n\n.fade_toggle {\n    background: rgba(0,0,0,.6);\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	
	  return parts;
	}
	
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	
	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();
	
	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	
	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)
	
	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};
	
	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	
	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');
	
	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	
	  return (isAbsolute ? '/' : '') + path;
	};
	
	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};
	
	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};
	
	
	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);
	
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	
	  return outputParts.join('/');
	};
	
	exports.sep = '/';
	exports.delimiter = ':';
	
	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	
	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }
	
	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }
	
	  return root + dir;
	};
	
	
	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};
	
	
	exports.extname = function(path) {
	  return splitPath(path)[3];
	};
	
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	
	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('aside', {
	    staticClass: "aside-container"
	  }, [_h('ul', [_m(0), " ", _h('li', {}, [_h('router-link', {
	    attrs: {
	      "to": "/dialog",
	      "append": ""
	    }
	  }, ["dialog"])])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('li', {
	    staticClass: "type-divider"
	  }, ["元组件"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [_h('transition', {
	    attrs: {
	      "name": "fade",
	      "mode": "out-in"
	    }
	  }, [_h('router-view', {
	    staticClass: "view"
	  })])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2", module.exports)
	  }
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [_h('vDialog', [_m(0), " ", _h('div', {
	    slot: "foot",
	    attrs: {
	      "style": "text-align:center; padding:10px 0;"
	    }
	  }, [_m(1), " ", _m(2)])]), " ", _m(3)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', ["这是内容"])
	}},function (){with(this) {
	  return _h('button', {
	    staticClass: "button button-balanced"
	  }, ["确认"])
	}},function (){with(this) {
	  return _h('button', {
	    staticClass: "button button-stable"
	  }, ["取消"])
	}},function (){with(this) {
	  return _h('div', ["dialog 组件"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3", module.exports)
	  }
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [(hasMask) ? _h('vMask') : _e(), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (show),
	      expression: "show"
	    }],
	    staticClass: "dialog",
	    on: {
	      "touchmove": function($event) {
	        !this.scroll && $event.preventDefault()
	      }
	    }
	  }, [_h('div', {
	    class: type,
	    attrs: {
	      "transition": dialogTransition
	    }
	  }, [(hasTitle) ? _h('div', {
	    staticClass: "dialog-head"
	  }, ["\n                " + _s(title) + "\n                ", (hasClose) ? _h('i', {
	    staticClass: "dialig-close"
	  }) : _e()]) : _e(), " ", _h('div', {
	    staticClass: "dialog-body"
	  }, [_t("default")]), " ", _h('div', {
	    staticClass: "dialog-foot"
	  }, [_t("foot")])])])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4", module.exports)
	  }
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (show),
	      expression: "show"
	    }],
	    staticClass: "mask",
	    attrs: {
	      "transition": maskTransition
	    },
	    on: {
	      "click": function($event) {
	        hideOnBlur && (show = false)
	      }
	    }
	  })
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5", module.exports)
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vue-router v2.0.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.VueRouter = factory());
	}(this, (function () { 'use strict';
	
	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;
	
	    data.routerView = true
	
	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	    var depth = 0
	    var inactive = false
	
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }
	
	    data.routerViewDepth = depth
	    var matched = route.matched[depth]
	    if (!matched) {
	      return h()
	    }
	
	    var name = props.name
	    var component = inactive
	      ? cache[name]
	      : (cache[name] = matched.components[name])
	
	    if (!inactive) {
	      var hooks = data.hook || (data.hook = {})
	      hooks.init = function (vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.destroy = function (vnode) {
	        if (matched.instances[name] === vnode.child) {
	          matched.instances[name] = undefined
	        }
	      }
	    }
	
	    return h(component, data, children)
	  }
	}
	
	/*  */
	
	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }
	
	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }
	
	  var stack = base.split('/')
	
	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }
	
	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }
	
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }
	
	  return stack.join('/')
	}
	
	function parsePath (path) {
	  var hash = ''
	  var query = ''
	
	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }
	
	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
	  }
	
	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}
	
	/*  */
	
	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}
	
	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}
	
	/*  */
	
	var encode = encodeURIComponent
	var decode = decodeURIComponent
	
	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};
	
	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}
	
	function parseQuery (query) {
	  var res = Object.create(null)
	
	  query = query.trim().replace(/^(\?|#|&)/, '')
	
	  if (!query) {
	    return res
	  }
	
	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null
	
	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })
	
	  return res
	}
	
	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).sort().map(function (key) {
	    var val = obj[key]
	
	    if (val === undefined) {
	      return ''
	    }
	
	    if (val === null) {
	      return encode(key)
	    }
	
	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }
	
	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}
	
	/*  */
	
	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}
	
	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	})
	
	function formatMatch (record) {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}
	
	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';
	
	  return (path || '/') + stringifyQuery(query) + hash
	}
	
	var trailingSlashRE = /\/$/
	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}
	
	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};
	
	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}
	
	function isIncludedRoute (current, target) {
	  return (
	    current.path.indexOf(target.path) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}
	
	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}
	
	/*  */
	
	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw
	  if (next.name || next._normalized) {
	    return next
	  }
	
	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
	  }
	
	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	/*  */
	
	// work around weird flow bug
	var toTypes = [String, Object]
	
	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String
	  },
	  render: function render (h) {
	    var this$1 = this;
	
	    var router = this.$router
	    var current = this.$route
	    var to = normalizeLocation(this.to, current, this.append)
	    var resolved = router.match(to)
	    var fullPath = resolved.redirectedFrom || resolved.fullPath
	    var base = router.history.base
	    var href = base ? cleanPath(base + fullPath) : fullPath
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = to.path ? createRoute(null, to) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)
	
	    var on = {
	      click: function (e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) { return }
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) { return }
	        e.preventDefault()
	        if (this$1.replace) {
	          router.replace(to)
	        } else {
	          router.push(to)
	        }
	      }
	    }
	
	    var data = {
	      class: classes
	    }
	
	    if (this.tag === 'a') {
	      data.on = on
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        var aData = a.data || (a.data = {})
	        aData.on = on
	        var aAttrs = aData.attrs || (aData.attrs = {})
	        aAttrs.href = href
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on
	      }
	    }
	
	    return h(this.tag, data, this.$slots.default)
	  }
	}
	
	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}
	
	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true
	
	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })
	
	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })
	
	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })
	
	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)
	}
	
	var __moduleExports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};
	
	var isarray = __moduleExports
	
	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp
	var parse_1 = parse
	var compile_1 = compile
	var tokensToFunction_1 = tokensToFunction
	var tokensToRegExp_1 = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string} str
	 * @return {!Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: escapeGroup(pattern)
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }
	
	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)
	
	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }
	
	  return attachKeys(re, keys)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }
	
	  return new RegExp('^' + route, flags(options))
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []
	
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys)
	    keys = []
	  } else if (!options) {
	    options = {}
	  }
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	
	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;
	
	/*  */
	
	function createRouteMap (routes) {
	  var pathMap = Object.create(null)
	  var nameMap = Object.create(null)
	
	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })
	
	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}
	
	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  assert(path != null, "\"path\" is required in a route configuration.")
	
	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }
	
	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (false) {}
	    route.children.forEach(function (child) {
	      addRouteRecord(pathMap, nameMap, child, record)
	    })
	  }
	
	  if (route.alias) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
	      })
	    } else {
	      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
	    }
	  }
	
	  pathMap[record.path] = record
	  if (name) { nameMap[name] = record }
	}
	
	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}
	
	/*  */
	
	var regexpCache = Object.create(null)
	
	var regexpCompileCache = Object.create(null)
	
	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;
	
	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;
	
	    if (name) {
	      var record = nameMap[name]
	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }
	
	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect
	
	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }
	
	    if (!redirect || typeof redirect !== 'object') {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	
	    var re = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params
	
	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }
	
	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }
	
	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }
	
	  return match
	}
	
	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var keys, regexp
	  var hit = regexpCache[path]
	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = index(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }
	  var m = pathname.match(regexp)
	
	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }
	
	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) { params[key.name] = val }
	  }
	
	  return true
	}
	
	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    assert(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    return ''
	  }
	}
	
	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}
	
	/*  */
	
	var inBrowser = typeof window !== 'undefined'
	
	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent
	
	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }
	
	  return window.history && 'pushState' in window.history
	})()
	
	/*  */
	
	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}
	
	/*  */
	
	
	var History = function History (router, base) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = START
	  this.pending = null
	};
	
	History.prototype.listen = function listen (cb) {
	  this.cb = cb
	};
	
	History.prototype.transitionTo = function transitionTo (location, cb) {
	    var this$1 = this;
	
	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    cb && cb(route)
	    this$1.ensureURL()
	  })
	};
	
	History.prototype.confirmTransition = function confirmTransition (route, cb) {
	    var this$1 = this;
	
	  var current = this.current
	  if (isSameRoute(route, current)) {
	    this.ensureURL()
	    return
	  }
	
	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;
	
	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )
	
	  this.pending = route
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) { return }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL()
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        this$1.push(to)
	      } else {
	        // confirm transition and pass on the value
	        next(to)
	      }
	    })
	  }
	
	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	      return this$1.current === route
	    })
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending === route) {
	        this$1.pending = null
	        cb(route)
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};
	
	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev)
	  })
	};
	
	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}
	
	function resolveQueue (
	  current,
	  next
	) {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}
	
	function extractLeaveGuards (matched) {
	  return flatMapComponents(matched, function (def, instance) {
	    var guard = def && def.beforeRouteLeave
	    if (guard) {
	      return function routeLeaveGuard () {
	        return guard.apply(instance, arguments)
	      }
	    }
	  }).reverse()
	}
	
	function extractEnterGuards (
	  matched,
	  cbs,
	  isValid
	) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    var guard = def && def.beforeRouteEnter
	    if (guard) {
	      return function routeEnterGuard (to, from, next) {
	        return guard(to, from, function (cb) {
	          next(cb)
	          if (typeof cb === 'function') {
	            cbs.push(function () {
	              // #750
	              // if a router-view is wrapped with an out-in transition,
	              // the instance may not have been registered at this time.
	              // we will need to poll for registration until current route
	              // is no longer valid.
	              poll(cb, match.instances, key, isValid)
	            })
	          }
	        })
	      }
	    }
	  })
	}
	
	function poll (cb, instances, key, isValid) {
	  if (instances[key]) {
	    cb(instances[key])
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid)
	    }, 16)
	  }
	}
	
	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }
	
	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	          next(false)
	        }
	
	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
	        }
	      }
	    }
	  })
	}
	
	function flatMapComponents (
	  matched,
	  fn
	) {
	  return Array.prototype.concat.apply([], matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}
	
	/*  */
	
	function saveScrollPosition (key) {
	  if (!key) { return }
	  window.sessionStorage.setItem(key, JSON.stringify({
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }))
	}
	
	function getScrollPosition (key) {
	  if (!key) { return }
	  return JSON.parse(window.sessionStorage.getItem(key))
	}
	
	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}
	
	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}
	
	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}
	
	function isNumber (v) {
	  return typeof v === 'number'
	}
	
	/*  */
	
	
	var genKey = function () { return String(Date.now()); }
	var _key = genKey()
	
	var HTML5History = (function (History) {
	  function HTML5History (router, base) {
	    var this$1 = this;
	
	    History.call(this, router, base)
	
	    this.transitionTo(getLocation(this.base))
	
	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })
	
	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }
	
	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;
	
	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n)
	  };
	
	  HTML5History.prototype.push = function push (location) {
	    var this$1 = this;
	
	    var current = this.current
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };
	
	  HTML5History.prototype.replace = function replace (location) {
	    var this$1 = this;
	
	    var current = this.current
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };
	
	  HTML5History.prototype.ensureURL = function ensureURL () {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      replaceState(cleanPath(this.base + this.current.fullPath))
	    }
	  };
	
	  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }
	
	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    assert(typeof behavior === 'function', "scrollBehavior must be a function")
	
	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && typeof shouldScroll.selector === 'string') {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }
	
	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };
	
	  return HTML5History;
	}(History));
	
	function getLocation (base) {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}
	
	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'assign' : 'replace'](url)
	  }
	}
	
	function replaceState (url) {
	  pushState(url, true)
	}
	
	/*  */
	
	
	var HashHistory = (function (History) {
	  function HashHistory (router, base, fallback) {
	    var this$1 = this;
	
	    History.call(this, router, base)
	
	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }
	
	    ensureSlash()
	    this.transitionTo(getHash(), function () {
	      window.addEventListener('hashchange', function () {
	        this$1.onHashChange()
	      })
	    })
	  }
	
	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;
	
	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };
	
	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.push = function push (location) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.replace = function replace (location) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };
	
	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n)
	  };
	
	  HashHistory.prototype.ensureURL = function ensureURL () {
	    if (getHash() !== this.current.fullPath) {
	      replaceHash(this.current.fullPath)
	    }
	  };
	
	  return HashHistory;
	}(History));
	
	function ensureSlash () {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}
	
	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}
	
	function pushHash (path) {
	  window.location.hash = path
	}
	
	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}
	
	/*  */
	
	
	var AbstractHistory = (function (History) {
	  function AbstractHistory (router) {
	    History.call(this, router)
	    this.stack = []
	    this.index = -1
	  }
	
	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;
	
	  AbstractHistory.prototype.push = function push (location) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };
	
	  AbstractHistory.prototype.replace = function replace (location) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };
	
	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;
	
	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex]
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(route)
	    })
	  };
	
	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };
	
	  return AbstractHistory;
	}(History));
	
	/*  */
	
	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};
	
	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])
	
	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode
	};
	
	var prototypeAccessors = { currentRoute: {} };
	
	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};
	
	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;
	
	  assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )
	
	  this.app = app
	
	  var ref = this;
	    var mode = ref.mode;
	    var options = ref.options;
	    var fallback = ref.fallback;
	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this)
	      break
	    default:
	      assert(false, ("invalid mode: " + mode))
	  }
	
	  this.history.listen(function (route) {
	    this$1.app._route = route
	  })
	};
	
	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn)
	};
	
	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn)
	};
	
	VueRouter.prototype.push = function push (location) {
	  this.history.push(location)
	};
	
	VueRouter.prototype.replace = function replace (location) {
	  this.history.replace(location)
	};
	
	VueRouter.prototype.go = function go (n) {
	  this.history.go(n)
	};
	
	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};
	
	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};
	
	VueRouter.prototype.getMatchedComponents = function getMatchedComponents () {
	  if (!this.currentRoute) {
	    return []
	  }
	  return [].concat.apply([], this.currentRoute.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};
	
	Object.defineProperties( VueRouter.prototype, prototypeAccessors );
	
	VueRouter.install = install
	
	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}
	
	return VueRouter;
	
	})));

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(43)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v2.0.3
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	/*  */
	
	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}
	
	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}
	
	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}
	
	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);
	
	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}
	
	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}
	
	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});
	
	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}
	
	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}
	
	/**
	 * Perform no operation.
	 */
	function noop () {}
	
	/**
	 * Always return false.
	 */
	var no = function () { return false; };
	
	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}
	
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}
	
	/*  */
	
	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),
	
	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,
	
	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,
	
	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,
	
	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),
	
	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,
	
	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,
	
	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,
	
	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,
	
	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],
	
	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],
	
	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,
	
	  /**
	   * Server rendering?
	   */
	  _isServer: process.env.VUE_ENV === 'server'
	};
	
	/*  */
	
	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w\.\$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}
	
	/*  */
	/* globals MutationObserver */
	
	// can we use __proto__?
	var hasProto = '__proto__' in {};
	
	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]';
	
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}
	
	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	
	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }
	
	  return function queueNextTick (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx); }
	      : cb;
	    callbacks.push(func);
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	  }
	})();
	
	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };
	
	    return Set;
	  }());
	}
	
	/* not type checking this file because flow doesn't play well with Proxy */
	
	var hasProxy;
	var proxyHandlers;
	var initProxy;
	
	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );
	
	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);
	
	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        );
	      }
	      return has || !isAllowed
	    }
	  };
	
	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}
	
	/*  */
	
	
	var uid$2 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++;
	  this.subs = [];
	};
	
	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};
	
	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};
	
	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};
	
	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];
	
	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}
	
	function popTarget () {
	  Dep.target = targetStack.pop();
	}
	
	/*  */
	
	
	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
	
	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	
	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });
	
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }
	
	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	
	  resetSchedulerState();
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}
	
	/*  */
	
	var uid$1 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};
	
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};
	
	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};
	
	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          process.env.NODE_ENV !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          );
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;
	
	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;
	
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};
	
	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val, seen) {
	  var i, keys;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = Array.isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) { traverse(val[i], seen); }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) { traverse(val[keys[i]], seen); }
	    }
	  }
	}
	
	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;
	
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});
	
	/*  */
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}
	
	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return
	      }
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}
	
	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}
	
	/*  */
	
	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	  initWatch(vm);
	}
	
	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      } else {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	      }
	    };
	
	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}
	
	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}
	
	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};
	
	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}
	
	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
	        warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	    }
	  }
	}
	
	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}
	
	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}
	
	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	
	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;
	
	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}
	
	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	/*  */
	
	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	};
	
	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};
	
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}
	
	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}
	
	/*  */
	
	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}
	
	/*  */
	
	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      capture = name.charAt(0) === '!';
	      event = capture ? name.slice(1) : name;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name;
	      remove$$1(event, oldOn[name].invoker);
	    }
	  }
	}
	
	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;
	
	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}
	
	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}
	
	/*  */
	
	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text;
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res
	  }
	}
	
	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}
	
	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}
	
	/*  */
	
	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}
	
	/*  */
	
	var activeInstance = null;
	
	function initLifecycle (vm) {
	  var options = vm.$options;
	
	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }
	
	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;
	
	  vm.$children = [];
	  vm.$refs = {};
	
	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}
	
	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };
	
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    var prevVnode = vm._vnode;
	    vm._vnode = vnode;
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };
	
	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false;
	      }
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
	      vm.$forceUpdate();
	    }
	  };
	
	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };
	
	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}
	
	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}
	
	/*  */
	
	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);
	
	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }
	
	  if (isObject(Ctor)) {
	    Ctor = Vue$2.extend(Ctor);
	  }
	
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }
	
	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }
	
	  data = data || {};
	
	  // extract props
	  var propsData = extractProps(data, Ctor);
	
	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }
	
	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;
	
	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }
	
	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);
	
	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}
	
	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}
	
	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}
	
	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  }
	}
	
	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}
	
	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}
	
	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}
	
	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;
	
	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue$2.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };
	
	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };
	
	    var res = factory(resolve, reject);
	
	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }
	
	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}
	
	function extractProps (data, Ctor) {
	  // we are only extrating raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}
	
	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}
	
	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}
	
	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __);
	    b(_, __);
	  }
	}
	
	/*  */
	
	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}
	
	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}
	
	/*  */
	
	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}
	
	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;
	
	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }
	
	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          setTimeout(function () { throw e }, 0);
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	
	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;
	
	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (typeof tree[i] !== 'string') {
	          tree[i].isStatic = true;
	          tree[i].key = "__static__" + index + "_" + i;
	        }
	      }
	    } else {
	      tree.isStatic = true;
	      tree.key = "__static__" + index;
	    }
	    return tree
	  };
	
	  // filter resolution helper
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };
	
	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };
	
	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && process.env.NODE_ENV !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  };
	
	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };
	
	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  };
	}
	
	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}
	
	/*  */
	
	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var on = bind$1(vm.$on, vm);
	  var off = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}
	
	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };
	
	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };
	
	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };
	
	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}
	
	/*  */
	
	var uid = 0;
	
	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	
	  function initInternalComponent (vm, options) {
	    var opts = vm.$options = Object.create(resolveConstructorOptions(vm));
	    // doing this because it's faster than dynamic enumeration.
	    opts.parent = options.parent;
	    opts.propsData = options.propsData;
	    opts._parentVnode = options._parentVnode;
	    opts._parentListeners = options._parentListeners;
	    opts._renderChildren = options._renderChildren;
	    opts._componentTag = options._componentTag;
	    if (options.render) {
	      opts.render = options.render;
	      opts.staticRenderFns = options.staticRenderFns;
	    }
	  }
	
	  function resolveConstructorOptions (vm) {
	    var Ctor = vm.constructor;
	    var options = Ctor.options;
	    if (Ctor.super) {
	      var superOptions = Ctor.super.options;
	      var cachedSuperOptions = Ctor.superOptions;
	      if (superOptions !== cachedSuperOptions) {
	        // super option changed
	        Ctor.superOptions = superOptions;
	        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	        if (options.name) {
	          options.components[options.name] = Ctor;
	        }
	      }
	    }
	    return options
	  }
	}
	
	function Vue$2 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$2)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}
	
	initMixin(Vue$2);
	stateMixin(Vue$2);
	eventsMixin(Vue$2);
	lifecycleMixin(Vue$2);
	renderMixin(Vue$2);
	
	var warn = noop;
	var formatComponentName;
	
	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';
	
	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };
	
	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };
	
	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}
	
	/*  */
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;
	
	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};
	
	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};
	
	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 */
	function normalizeComponents (options) {
	  if (options.components) {
	    var components = options.components;
	    var def;
	    for (var key in components) {
	      var lower = key.toLowerCase();
	      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'Do not use built-in or reserved HTML elements as component ' +
	          'id: ' + key
	        );
	        continue
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue$2.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}
	
	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  normalizeComponents(child);
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$2) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}
	
	/*  */
	
	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}
	
	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, name) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + name + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}
	
	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}
	
	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}
	
	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}
	
	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});
	
	/*  */
	
	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}
	
	/*  */
	
	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	}
	
	/*  */
	
	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	        name = null;
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub
	  };
	}
	
	/*  */
	
	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = Vue.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}
	
	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;
	
	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};
	
	var builtInComponents = {
	  KeepAlive: KeepAlive
	};
	
	/*  */
	
	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;
	
	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });
	
	  extend(Vue.options.components, builtInComponents);
	
	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}
	
	initGlobalAPI(Vue$2);
	
	Object.defineProperty(Vue$2.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	});
	
	Vue$2.version = '2.0.3';
	
	/*  */
	
	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted');
	
	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
	
	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);
	
	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	);
	
	
	
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	
	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};
	
	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};
	
	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};
	
	/*  */
	
	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}
	
	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}
	
	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}
	
	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}
	
	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}
	
	/*  */
	
	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};
	
	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);
	
	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);
	
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);
	
	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);
	
	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);
	
	
	
	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};
	
	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}
	
	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}
	
	/*  */
	
	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}
	
	/*  */
	
	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}
	
	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}
	
	function createTextNode (text) {
	  return document.createTextNode(text)
	}
	
	function createComment (text) {
	  return document.createComment(text)
	}
	
	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}
	
	function removeChild (node, child) {
	  node.removeChild(child);
	}
	
	function appendChild (node, child) {
	  node.appendChild(child);
	}
	
	function parentNode (node) {
	  return node.parentNode
	}
	
	function nextSibling (node) {
	  return node.nextSibling
	}
	
	function tagName (node) {
	  return node.tagName
	}
	
	function setTextContent (node, text) {
	  node.textContent = text;
	}
	
	function childNodes (node) {
	  return node.childNodes
	}
	
	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}
	
	
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});
	
	/*  */
	
	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};
	
	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }
	
	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}
	
	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */
	
	var emptyNode = new VNode('', {}, []);
	
	var hooks$1 = ['create', 'update', 'remove', 'destroy'];
	
	function isUndef (s) {
	  return s == null
	}
	
	function isDef (s) {
	  return s != null
	}
	
	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}
	
	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}
	
	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};
	
	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;
	
	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }
	
	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }
	
	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }
	
	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    nodeOps.removeChild(parent, el);
	  }
	
	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i;
	    var data = vnode.data;
	    vnode.isRootInsert = !nested;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        return vnode.elm
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	      createChildren(vnode, children, insertedVnodeQueue);
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm
	  }
	
	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }
	
	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }
	
	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }
	
	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }
	
	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }
	
	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	    }
	  }
	
	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }
	
	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }
	
	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }
	
	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, before;
	
	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;
	
	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }
	
	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        vnode.isCloned) {
	      vnode.elm = oldVnode.elm;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }
	
	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }
	
	  var bailed = false;
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }
	
	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }
	
	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }
	
	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];
	
	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	
	        createElm(vnode, insertedVnodeQueue);
	
	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm;
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }
	
	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }
	
	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}
	
	/*  */
	
	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};
	
	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
	
	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];
	
	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }
	
	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }
	
	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }
	
	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}
	
	var emptyModifiers = Object.create(null);
	
	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}
	
	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}
	
	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}
	
	var baseModules = [
	  ref,
	  directives
	];
	
	/*  */
	
	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }
	
	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}
	
	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}
	
	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};
	
	/*  */
	
	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }
	
	  var cls = genClassForVnode(vnode);
	
	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }
	
	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}
	
	var klass = {
	  create: updateClass,
	  update: updateClass
	};
	
	// skip type checking this file because we need to attach private properties
	// to elements
	
	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
	  updateListeners(on, oldOn, add, remove, vnode.context);
	}
	
	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};
	
	/*  */
	
	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }
	
	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = undefined;
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0;
	    }
	    cur = props[key];
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}
	
	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};
	
	/*  */
	
	var prefixes = ['Webkit', 'Moz', 'ms'];
	
	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});
	
	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name;
	  var el = vnode.elm;
	  var oldStyle = oldVnode.data.style || {};
	  var style = vnode.data.style || {};
	
	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	    return
	  }
	
	  var needClone = style.__ob__;
	
	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style);
	  }
	
	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style);
	  }
	
	  for (name in oldStyle) {
	    if (style[name] == null) {
	      el.style[normalize(name)] = '';
	    }
	  }
	  for (name in style) {
	    cur = style[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      el.style[normalize(name)] = cur == null ? '' : cur;
	    }
	  }
	}
	
	var style = {
	  create: updateStyle,
	  update: updateStyle
	};
	
	/*  */
	
	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}
	
	/*  */
	
	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';
	
	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}
	
	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}
	
	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}
	
	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}
	
	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}
	
	var transformRE = /\b(transform|all)(,|$)/;
	
	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);
	
	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}
	
	function getTimeout (delays, durations) {
	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}
	
	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}
	
	/*  */
	
	function enter (vnode) {
	  var el = vnode.elm;
	
	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }
	
	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	
	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode;
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance;
	
	  var isAppear = !context._isMounted || !vnode.isRootInsert;
	
	  if (isAppear && !appear && appear !== '') {
	    return
	  }
	
	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;
	
	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });
	
	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }
	
	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }
	
	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb);
	  }
	
	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}
	
	function leave (vnode, rm) {
	  var el = vnode.elm;
	
	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }
	
	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }
	
	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }
	
	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	
	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;
	
	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });
	
	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }
	
	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}
	
	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}
	
	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});
	
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}
	
	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};
	
	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];
	
	/*  */
	
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);
	
	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });
	
	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */
	
	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;
	
	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}
	
	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (
	      (vnode.tag === 'textarea' || el.type === 'text') &&
	      !binding.modifiers.lazy
	    ) {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matchig
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};
	
	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}
	
	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}
	
	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}
	
	function onCompositionStart (e) {
	  e.target.composing = true;
	}
	
	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}
	
	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}
	
	/*  */
	
	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}
	
	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;
	
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;
	
	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};
	
	var platformDirectives = {
	  model: model,
	  show: show
	};
	
	/*  */
	
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	
	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};
	
	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recrusively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}
	
	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}
	
	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}
	
	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}
	
	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;
	
	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }
	
	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }
	
	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }
	
	    var mode = this.mode;
	
	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }
	
	    var rawChild = children[0];
	
	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }
	
	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }
	
	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }
	
	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);
	
	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }
	
	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }
	
	    return rawChild
	  }
	};
	
	/*  */
	
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	
	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);
	
	delete props.mode;
	
	var TransitionGroup = {
	  props: props,
	
	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);
	
	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }
	
	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }
	
	    return h(tag, null, children)
	  },
	
	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },
	
	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || (this.name + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }
	
	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);
	
	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line
	
	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },
	
	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};
	
	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}
	
	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}
	
	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}
	
	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};
	
	/*  */
	
	// install platform specific utils
	Vue$2.config.isUnknownElement = isUnknownElement;
	Vue$2.config.isReservedTag = isReservedTag;
	Vue$2.config.getTagNamespace = getTagNamespace;
	Vue$2.config.mustUseProp = mustUseProp;
	
	// install platform runtime directives & components
	extend(Vue$2.options.directives, platformDirectives);
	extend(Vue$2.options.components, platformComponents);
	
	// install platform patch function
	Vue$2.prototype.__patch__ = config._isServer ? noop : patch$1;
	
	// wrap mount
	Vue$2.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$2);
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);
	
	module.exports = Vue$2;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }
/******/ ])));
//# sourceMappingURL=main.js.map