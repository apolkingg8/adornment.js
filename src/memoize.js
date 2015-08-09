'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helper = require('./_helper');

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