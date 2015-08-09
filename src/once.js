"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Helpers = require("./_helper");

var _Helpers2 = _interopRequireWildcard(_Helpers);

function handleClass(target) {

    _Helpers2["default"].forEachClassOwnKeys(target, function (key) {

        if (typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
                method = _Helpers2["default"].getMethod(descriptor);

            descriptor.value = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var cacheName = "_once_" + key;

                if (this[cacheName] !== true) {
                    Object.defineProperty(this, cacheName, {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value: true
                    });

                    return method.apply(this, args);
                } else {
                    //console.warn(`@once ${key} already done.`)
                    return null;
                }
            };

            Object.defineProperty(target.prototype, key, descriptor);
        }
    });

    return target;
}

function handleMethod(target, key, descriptor) {
    var method = _Helpers2["default"].getMethod(descriptor);

    descriptor.value = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var cacheName = "_once_" + key;

        if (this[cacheName] !== true) {
            Object.defineProperty(this, cacheName, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: true
            });

            return method.apply(this, args);
        } else {
            //console.warn(`@once ${key} already done.`)
            return null;
        }
    };

    return descriptor;
}

function handleProp(target, key, descriptor) {
    console.warn("@once should not set on class properties.");
    return descriptor;
}

function once() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
    }

    _Helpers2["default"].handler(args, null, handleClass, handleMethod, handleProp);
}

exports["default"] = once;
module.exports = exports["default"];

//# sourceMappingURL=once.js.map