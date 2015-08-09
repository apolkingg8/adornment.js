/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _Deco = __webpack_require__(1);

	var _Deco2 = _interopRequireWildcard(_Deco);

	//console.log('Deco', Deco)

	var writable = _Deco2['default'].writable;
	var enumerable = _Deco2['default'].enumerable;
	var configurable = _Deco2['default'].configurable;
	var autoBind = _Deco2['default'].autoBind;
	var bindWith = _Deco2['default'].bindWith;
	var defer = _Deco2['default'].defer;
	var memoize = _Deco2['default'].memoize;
	var debounce = _Deco2['default'].debounce;
	var trace = _Deco2['default'].trace;
	var traceComponent = _Deco2['default'].traceComponent;
	var deprecated = _Deco2['default'].deprecated;
	var decorate = _Deco2['default'].decorate;
	var argWith = _Deco2['default'].argWith;

	function bar() {
	    return 'bar';
	}

	var gg = {};

	var A = (function () {
	    function A() {
	        _classCallCheck(this, A);
	    }

	    _createDecoratedClass(A, [{
	        key: 'foo',
	        decorators: [argWith(function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            if (typeof args[0] === 'object' && args.length === 1) {
	                var _args$0 = args[0];
	                var _a = _args$0.a;
	                var b = _args$0.b;

	                return [_a, b];
	            }

	            return args;
	        })],
	        value: function foo(a, b) {
	            return a + b;
	        }
	    }]);

	    return A;
	})();

	var a = new A();

	console.log(a.foo(1, 2));
	console.log(a.foo({ a: 1, b: 2 }));

	//# sourceMappingURL=_test.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _writable = __webpack_require__(4);

	var _writable2 = _interopRequireWildcard(_writable);

	var _enumerable = __webpack_require__(5);

	var _enumerable2 = _interopRequireWildcard(_enumerable);

	var _configurable = __webpack_require__(6);

	var _configurable2 = _interopRequireWildcard(_configurable);

	var _autoBind = __webpack_require__(7);

	var _autoBind2 = _interopRequireWildcard(_autoBind);

	var _bindWith = __webpack_require__(8);

	var _bindWith2 = _interopRequireWildcard(_bindWith);

	var _defer = __webpack_require__(9);

	var _defer2 = _interopRequireWildcard(_defer);

	var _memoize = __webpack_require__(2);

	var _memoize2 = _interopRequireWildcard(_memoize);

	var _debounce = __webpack_require__(10);

	var _debounce2 = _interopRequireWildcard(_debounce);

	var _trace = __webpack_require__(11);

	var _trace2 = _interopRequireWildcard(_trace);

	var _traceComponent = __webpack_require__(12);

	var _traceComponent2 = _interopRequireWildcard(_traceComponent);

	var _deprecated = __webpack_require__(13);

	var _deprecated2 = _interopRequireWildcard(_deprecated);

	var _decorate = __webpack_require__(14);

	var _decorate2 = _interopRequireWildcard(_decorate);

	var _argWith = __webpack_require__(15);

	var _argWith2 = _interopRequireWildcard(_argWith);

	exports['default'] = {
	    writable: _writable2['default'],
	    enumerable: _enumerable2['default'],
	    configurable: _configurable2['default'],
	    autoBind: _autoBind2['default'],
	    bindWith: _bindWith2['default'],
	    defer: _defer2['default'],
	    memoize: _memoize2['default'],
	    debounce: _debounce2['default'],
	    trace: _trace2['default'],
	    traceComponent: _traceComponent2['default'],
	    deprecated: _deprecated2['default'],
	    decorate: _decorate2['default'],
	    argWith: _argWith2['default']
	};
	module.exports = exports['default'];

	//# sourceMappingURL=adornment.jsnt.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helper = __webpack_require__(3);

	var _helper2 = _interopRequireDefault(_helper);

	function _hash(input) {
	    var hash = 0,
	        i,
	        chr,
	        len;
	    if (input.length == 0) return hash;
	    for (i = 0, len = input.length; i < len; i++) {
	        chr = input.charCodeAt(i);
	        hash = (hash << 5) - hash + chr;
	        hash |= 0;
	    }
	    return hash;
	}

	function handleClass(target) {

	    _helper2['default'].forEachClassOwnKeys(target, function (key) {

	        if (typeof target.prototype[key] === 'function') {
	            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
	                method = _helper2['default'].getMethod(descriptor);

	            descriptor.value = function () {
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                var cacheName = '_memoizeCache_' + key;

	                if (!this[cacheName]) {
	                    //this[cacheName] = {}
	                    Object.defineProperty(this, cacheName, {
	                        enumerable: false,
	                        configurable: false,
	                        writable: true,
	                        value: {}
	                    });
	                }

	                var argHash = _hash(args.toString());

	                if (typeof this[cacheName][argHash] === 'undefined') {
	                    this[cacheName][argHash] = method.apply(this, args);
	                }

	                return this[cacheName][argHash];
	            };

	            Object.defineProperty(target.prototype, key, descriptor);
	        }
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor) {
	    var method = _helper2['default'].getMethod(descriptor);

	    descriptor.value = function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        var cacheName = '_memoizeCache_' + key;

	        if (!this[cacheName]) {
	            //this[cacheName] = {}
	            Object.defineProperty(this, cacheName, {
	                enumerable: false,
	                configurable: false,
	                writable: true,
	                value: {}
	            });
	        }

	        var argHash = _hash(args.toString());

	        if (typeof this[cacheName][argHash] === 'undefined') {
	            this[cacheName][argHash] = method.apply(this, args);
	        }

	        return this[cacheName][argHash];
	    };

	    return descriptor;
	}

	function handleProp(target, key, descriptor) {
	    console.warn('@memoize should not set on class properties.');
	    return descriptor;
	}

	function memoize() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	    }

	    _helper2['default'].handler(args, null, handleClass, handleMethod, handleProp);
	}

	exports['default'] = memoize;
	module.exports = exports['default'];

	//# sourceMappingURL=memoize.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function handler(args, input, handleClass, handleMethod, handleProp) {

	    if (args.length === 1 && typeof args[0] === 'function') {
	        handleClass && handleClass(args[0], input);
	    } else if (args.length === 2) {
	        // for typescript
	        handleProp && handleProp.apply(undefined, _toConsumableArray(args).concat([input]));
	    } else if (args.length === 3 && typeof args[0] === 'object' && typeof args[1] === 'string' && typeof args[2] === 'object') {

	        if (typeof args[2].value === 'function' || typeof args[2].get === 'function' || typeof args[2].initializer() === 'function') {
	            handleMethod && handleMethod.apply(undefined, _toConsumableArray(args).concat([input]));
	        } else if (args[2].initializer) {
	            handleProp && handleProp.apply(undefined, _toConsumableArray(args).concat([input]));
	        } else {
	            console.warn('wrong descriptor:', [args], input);
	        }
	    } else {
	        console.warn('wrong arguments:', [args]);
	    }
	}

	function forEachClassOwnKeys(target, callback) {

	    Object.getOwnPropertyNames(target.prototype).forEach(function (key) {
	        if (key === 'constructor') {
	            return;
	        }
	        callback(key);
	    });
	}

	function getMethod(descriptor) {
	    if (typeof descriptor.value !== 'undefined') {
	        return descriptor.value;
	    } else if (typeof descriptor.initializer !== 'undefined') {
	        console.warn('you should not set a decorator with fat arrow. ');
	        return descriptor.initializer();
	    } else if (typeof descriptor.get !== 'undefined') {
	        // must a decorator after autoBind
	        var _method = descriptor.get(true);
	        delete descriptor.get;
	        delete descriptor.set;
	        return _method;
	    } else {
	        console.warn('wrong method descriptor:', descriptor);
	    }
	}

	function wrongInput(decoratorName, expectType, got) {
	    console.warn('wrongInput with @' + decoratorName + '(): expect ' + expectType + ', got ' + typeof got);
	}

	function notSupportClass(decoratorName) {
	    console.warn('@' + decoratorName + ' can not use with class.');
	}

	exports['default'] = {
	    handler: handler, wrongInput: wrongInput, notSupportClass: notSupportClass, getMethod: getMethod,
	    forEachClassOwnKeys: forEachClassOwnKeys
	};
	module.exports = exports['default'];

	//# sourceMappingURL=_helper.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helper = __webpack_require__(3);

	var _helper2 = _interopRequireDefault(_helper);

	function handleClass(target, input) {
	    _helper2['default'].forEachClassOwnKeys(target, function (key) {
	        var describe = Object.getOwnPropertyDescriptor(target.prototype, key);

	        describe.writable = input;
	        Object.defineProperty(target.prototype, key, describe);
	    });
	}

	function handleMethod(target, key, descriptor, input) {
	    descriptor.writable = input;
	    return descriptor;
	}

	function handleProp(target, key, descriptor, input) {
	    /*var initializer = descriptor.initializer
	    debugger
	     descriptor.initializer = function(...args) {
	        debugger
	        //var describer = Object.getOwnPropertyDescriptor(this.__proto__, key)
	        //describer.value = initializer.apply(this, args)
	        //Object.defineProperty(this.__proto__, key, describer)
	        //describer.writable = flag
	        //todo: that's works but not save...
	        setTimeout(()=> {
	            var _descriptor = Object.getOwnPropertyDescriptor(this, key)
	            //debugger
	            _descriptor.writable = flag
	            Object.defineProperty(this, key, _descriptor)
	        },0)
	        return initializer.apply(this, args)
	    }*/
	    /*if(!flag) {
	        console.warn(`@writable(false) should not set on class properties.`)
	    } else {
	        descriptor.writable = flag
	    }*/
	    console.warn('@writable() should not set on class properties.');
	    return descriptor;
	}

	function writable(input) {

	    if (typeof input !== 'boolean') {
	        _helper2['default'].wrongInput('writable', 'boolean', input);
	        return;
	    }

	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        _helper2['default'].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}

	exports['default'] = writable;
	module.exports = exports['default'];

	//# sourceMappingURL=writable.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _Helpers = __webpack_require__(3);

	var _Helpers2 = _interopRequireWildcard(_Helpers);

	function handleClass(target, input) {
	    _Helpers2['default'].forEachClassOwnKeys(target, function (key) {
	        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	        descriptor.enumerable = input;
	        Object.defineProperty(target.prototype, key, descriptor);
	    });
	}

	function handleMethod(target, key, descriptor, input) {

	    descriptor.enumerable = input;
	    return descriptor;
	}

	function handleProp(target, key, descriptor, input) {
	    descriptor.enumerable = input;

	    //console.warn(`@enumerable() should not set on class properties.`)
	    return descriptor;
	}

	function enumerable(input) {

	    if (typeof input !== 'boolean') {
	        _Helpers2['default'].wrongInput('enumerable', 'boolean', input);
	        return;
	    }

	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        _Helpers2['default'].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}

	exports['default'] = enumerable;
	module.exports = exports['default'];

	//# sourceMappingURL=enumerable.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helper = __webpack_require__(3);

	var _helper2 = _interopRequireDefault(_helper);

	function handleClass(target, input) {
	    _helper2['default'].forEachClassOwnKeys(target, function (key) {
	        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	        descriptor.configurable = input;
	        Object.defineProperty(target.prototype, key, descriptor);
	    });
	}

	function handleMethod(target, key, descriptor, input) {
	    descriptor.configurable = input;
	    return descriptor;
	}

	function handleProp(target, key, descriptor, input) {

	    /*if(!flag) {
	        console.warn(`@configurable(false) should not set on class properties.`)
	    } else {
	        descriptor.configurable = flag
	    }*/
	    console.warn('@configurable() should not set on class properties.');
	    //descriptor.configurable = input
	    return descriptor;
	}

	function configurable(input) {

	    if (typeof input !== 'boolean') {
	        _helper2['default'].wrongInput('configurable', 'boolean', input);
	        return function () {};
	    }

	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        _helper2['default'].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}

	exports['default'] = configurable;
	module.exports = exports['default'];

	//# sourceMappingURL=configurable.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(3);

	var _Helpers2 = _interopRequireWildcard(_Helpers);

	function _descriptorHandler(descriptor, key) {
	    var method = _Helpers2["default"].getMethod(descriptor);

	    delete descriptor.value;
	    delete descriptor.writable;

	    descriptor.get = function _autoBind(delayBind) {
	        var propName = "_autoBind_" + key;

	        if (!delayBind) {
	            if (this[propName] === undefined) {
	                Object.defineProperty(this, propName, {
	                    enumerable: false,
	                    configurable: false,
	                    value: this
	                });

	                return method.bind(this);
	            } else {
	                return method.bind(this[propName]);
	            }
	        } else {
	            return method;
	        }
	    };

	    descriptor._autoBinded = false;

	    return descriptor;
	}

	function handleClass(target) {

	    _Helpers2["default"].forEachClassOwnKeys(target, function (key) {

	        if (typeof target.prototype[key] === "function") {
	            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	            Object.defineProperty(target.prototype, key, _descriptorHandler(descriptor, key));
	        }
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor) {
	    //todo: need find another way with autoBind

	    descriptor = _descriptorHandler(descriptor, key);

	    return descriptor;
	}

	function handleProp(target, key, descriptor) {
	    console.warn("@autoBind should not set on class properties.");
	    return descriptor;
	}

	function autoBind() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    _Helpers2["default"].handler(args, null, handleClass, handleMethod, handleProp);
	}

	exports["default"] = autoBind;
	module.exports = exports["default"];

	//# sourceMappingURL=autoBind.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _helper = __webpack_require__(3);

	var _helper2 = _interopRequireDefault(_helper);

	function handleClass(target, input) {

	    _helper2["default"].forEachClassOwnKeys(target, function (key) {

	        if (typeof target.prototype[key] === "function") {
	            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
	                method = _helper2["default"].getMethod(descriptor);

	            //delete descriptor.value
	            //delete descriptor.writable

	            /*descriptor.get = function() {
	                return method.bind(input);
	            }*/
	            descriptor.value = method.bind(input);

	            Object.defineProperty(target.prototype, key, descriptor);
	        }
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor, input) {
	    var method = _helper2["default"].getMethod(descriptor);

	    /*delete descriptor.value
	    delete descriptor.writable
	     descriptor.get = function() {
	        return method.bind(input);
	    }*/
	    descriptor.value = method.bind(input);

	    return descriptor;
	}

	function handleProp(target, key, descriptor, input) {
	    console.warn("@bindWith should not set on class properties.");
	    return descriptor;
	}

	function bindWith(input) {

	    if (typeof input !== "object") {
	        _helper2["default"].wrongInput("bindWith", "Object", input);
	        return;
	    }

	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        _helper2["default"].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}

	exports["default"] = bindWith;
	module.exports = exports["default"];

	//# sourceMappingURL=bindWith.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Helpers = __webpack_require__(3);

	var _Helpers2 = _interopRequireWildcard(_Helpers);

	function handleClass(target) {

	    _Helpers2["default"].forEachClassOwnKeys(target, function (key) {

	        if (typeof target.prototype[key] === "function") {
	            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
	                method = _Helpers2["default"].getMethod(descriptor);

	            descriptor.value = function () {
	                var _this = this;

	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                setTimeout(function () {
	                    method.apply(_this, args);
	                }, 0);
	            };

	            Object.defineProperty(target.prototype, key, descriptor);
	        }
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor) {
	    var method = descriptor.value;

	    descriptor.value = function () {
	        var _this2 = this;

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        setTimeout(function () {
	            method.apply(_this2, args);
	        }, 0);
	    };

	    return descriptor;
	}

	function handleProp(target, key, descriptor) {
	    console.warn("@defer should not set on class properties.");
	    return descriptor;
	}

	function defer() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	    }

	    _Helpers2["default"].handler(args, null, handleClass, handleMethod, handleProp);
	}

	exports["default"] = defer;
	module.exports = exports["default"];

	//# sourceMappingURL=defer.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _helper = __webpack_require__(3);

	var _helper2 = _interopRequireDefault(_helper);

	function _handleDescriptor(key, descriptor, input) {
	    var method = _helper2["default"].getMethod(descriptor);

	    descriptor.value = function () {
	        var _this = this;

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var propName = "_debounce_" + key;

	        var _addTimer = function _addTimer() {
	            var timerId = setTimeout(function () {
	                clearTimeout(_this[propName]);
	                delete _this[propName];
	                //fixme: how to return it?
	                method.apply(_this, args);
	            }, input);

	            Object.defineProperty(_this, propName, {
	                enumerable: false,
	                configurable: true,
	                writable: false,
	                value: timerId
	            });
	        };

	        if (typeof this[propName] === "undefined") {
	            _addTimer();
	        } else {
	            // clear timeout and add new
	            clearTimeout(this[propName]);
	            _addTimer();
	        }
	    };

	    return descriptor;
	}

	function handleClass(target, input) {

	    _helper2["default"].forEachClassOwnKeys(target, function (key) {

	        if (typeof target.prototype[key] === "function") {
	            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	            _handleDescriptor(key, descriptor, input);

	            Object.defineProperty(target.prototype, key, descriptor);
	        }
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor, input) {

	    _handleDescriptor(key, descriptor, input);

	    return descriptor;
	}

	function handleProp(target, key, descriptor, input) {
	    console.warn("@debounce should not set on class properties.");
	    return descriptor;
	}

	function debounce(input) {

	    if (typeof input !== "number") {
	        _helper2["default"].wrongInput("debounce", "number", input);
	        return;
	    }

	    return function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        _helper2["default"].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}

	exports["default"] = debounce;
	module.exports = exports["default"];

	//# sourceMappingURL=debounce.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _Helpers = __webpack_require__(3);

	var _Helpers2 = _interopRequireWildcard(_Helpers);

	function _descriptorHandler(key, descriptor, input) {
	    var method = _Helpers2['default'].getMethod(descriptor);
	    var logger = input.logger;
	    var blackList = input.blackList;
	    var whiteList = input.whiteList;
	    var perf = input.perf;

	    logger = logger || console.log.bind(console);
	    blackList = blackList || [];
	    whiteList = whiteList || [];

	    var _shouldLog = function _shouldLog() {
	        if (blackList.length > 0) {
	            return !(blackList.indexOf(key) > 0);
	        }if (whiteList.length > 0) {
	            return whiteList.indexOf(key) > 0;
	        }return true;
	    };

	    function setPerf() {
	        if (window.performance) {
	            return window.performance.now();
	        } else {
	            return new Date();
	        }
	    }

	    descriptor.value = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        if (_shouldLog()) {
	            logger('@trace:', key, 'with args:', args, 'this:', this);

	            if (perf && !this._trace_perfStart) {
	                Object.defineProperty(this, '_trace_perfStart', {
	                    enumerable: false,
	                    writable: false,
	                    configurable: true,
	                    value: setPerf()
	                });
	            }
	        }

	        var temp = method.apply(this, args);

	        if (_shouldLog()) {

	            if (perf) {
	                var cost = setPerf() - this._trace_perfStart;
	                delete this._trace_perfStart;
	                logger('@trace:', key, 'return', temp, 'cost ' + cost + ' ms.');
	            } else {
	                logger('@trace:', key, 'return', temp);
	            }
	        }

	        return temp;
	    };

	    return descriptor;
	}

	function handleClass(target, input) {

	    _Helpers2['default'].forEachClassOwnKeys(target, function (key) {

	        if (typeof target.prototype[key] === 'function') {
	            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	            descriptor = _descriptorHandler(key, descriptor, input);

	            Object.defineProperty(target.prototype, key, descriptor);
	        }
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor, input) {

	    return _descriptorHandler(key, descriptor, input);
	}

	function handleProp(target, key, descriptor, input) {
	    console.warn('@trace should not set on class properties.');
	    return descriptor;
	}

	function trace() {
	    var input = arguments[0] === undefined ? {} : arguments[0];
	    var logger = input.logger;
	    var blackList = input.blackList;
	    var whiteList = input.whiteList;
	    var perf = input.perf;

	    if (typeof input !== 'object') {
	        _Helpers2['default'].wrongInput('trace', 'object', input);
	        return;
	    } else if (typeof logger !== 'function' && typeof logger !== 'undefined') {
	        console.warn('@trace: Type Error, logger must be a function, not ' + typeof logger + '}');
	        return;
	    } else if (typeof blackList !== 'undefined' && blackList.constructor !== Array) {
	        console.warn('@trace: Type Error, blackList must be a Array, not ' + typeof blackList + '}');
	        return;
	    } else if (typeof whiteList !== 'undefined' && whiteList.constructor !== Array) {
	        console.warn('@trace: Type Error, whiteList must be a Array, not ' + typeof whiteList + '}');
	        return;
	    } else if (blackList && whiteList) {
	        console.warn('@trace: You can not use both blackList and whiteList.');
	        return;
	    }

	    return function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        _Helpers2['default'].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}
	exports['default'] = trace;
	module.exports = exports['default'];

	//# sourceMappingURL=trace.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _trace = __webpack_require__(11);

	var _trace2 = _interopRequireDefault(_trace);

	var LIFE_CYCLE = ['getInitialState', 'getDefaultProps', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'render'];

	function traceComponent() {
	    var input = arguments[0] === undefined ? {} : arguments[0];

	    input.whiteList = LIFE_CYCLE;
	    return (0, _trace2['default'])(input);
	}
	exports['default'] = traceComponent;
	module.exports = exports['default'];

	//# sourceMappingURL=traceComponent.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helper = __webpack_require__(3);

	var _helper2 = _interopRequireDefault(_helper);

	function _descriptorHandler(key, descriptor, input) {
	    var method = descriptor.value;

	    descriptor.value = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        console.warn('' + key + ' is deprecated. ' + input);
	        return method.apply(this, args);
	    };

	    return descriptor;
	}

	function handleClass(target, input) {

	    _helper2['default'].forEachClassOwnKeys(target, function (key) {

	        if (typeof target.prototype[key] === 'function') {
	            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

	            descriptor = _descriptorHandler(key, descriptor, input);

	            Object.defineProperty(target.prototype, key, descriptor);
	        }
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor, input) {

	    return _descriptorHandler(key, descriptor, input);
	}

	function handleProp(target, key, descriptor, input) {
	    console.warn('@deprecated should not set on class properties.');
	    return descriptor;
	}

	function deprecated() {
	    var input = arguments[0] === undefined ? '' : arguments[0];

	    if (typeof input !== 'string') {
	        _helper2['default'].wrongInput('deprecated', 'string', input);
	        return;
	    }

	    return function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        _helper2['default'].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}
	exports['default'] = deprecated;
	module.exports = exports['default'];

	//# sourceMappingURL=deprecated.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _Helpers = __webpack_require__(3);

	var _Helpers2 = _interopRequireWildcard(_Helpers);

	function handleClass(target, input) {

	    input.forEach(function (val) {

	        if (val.name === 'constructor') {
	            console.warn('@decorate method name should not be \'constructor\'.');
	            return target;
	        }

	        if (typeof val !== 'function') {
	            console.warn('@decorate(Array<Function>): expect Function, got ' + typeof val, val);
	            return target;
	        }

	        target.prototype[val.name] = val;
	    });

	    return target;
	}

	function handleMethod(target, key, descriptor, input) {

	    console.warn('@decorate should set on class.');
	    return descriptor;
	}

	function handleProp(target, key, descriptor, input) {
	    console.warn('@decorate should set on class.');
	    return descriptor;
	}

	function decorate(input) {

	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        _Helpers2['default'].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}

	exports['default'] = decorate;
	module.exports = exports['default'];

	//# sourceMappingURL=decorate.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _Helpers = __webpack_require__(3);

	var _Helpers2 = _interopRequireWildcard(_Helpers);

	function handleClass(target, input) {
	    console.warn('@argWith should only set on class method.');
	    return target;
	}

	function handleMethod(target, key, descriptor, input) {
	    var method = _Helpers2['default'].getMethod(descriptor);

	    descriptor.value = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var newArgs = input.apply(undefined, args);

	        return method.apply(this, newArgs);
	    };

	    return descriptor;
	}

	function handleProp(target, key, descriptor, input) {
	    console.warn('@argWith should only set on class method.');
	    return descriptor;
	}

	function argWith(input) {

	    if (typeof input !== 'function') {
	        _Helpers2['default'].wrongInput('argWith', 'function', input);
	        return;
	    }

	    return function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        _Helpers2['default'].handler(args, input, handleClass, handleMethod, handleProp);
	    };
	}

	exports['default'] = argWith;
	module.exports = exports['default'];

	//# sourceMappingURL=argWith.js.map

/***/ }
/******/ ]);