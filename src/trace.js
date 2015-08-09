'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Helpers = require('./_helper');

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