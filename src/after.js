"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Helpers = require("./_helper");

var _Helpers2 = _interopRequireWildcard(_Helpers);

function _handleDescriptor(descriptor, key, input) {
    var method = _Helpers2["default"].getMethod(descriptor);

    descriptor.value = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var cacheName = "_after_" + key;

        if (this[cacheName] === undefined) {
            Object.defineProperty(this, cacheName, {
                enumerable: false,
                configurable: false,
                writable: true,
                value: 0
            });

            return null;
        } else {
            this[cacheName] += 1;

            if (this[cacheName] < input) {
                return null;
            } else {
                return method.apply(this, args);
            }
        }
    };

    return descriptor;
}

function handleClass(target, input) {

    _Helpers2["default"].forEachClassOwnKeys(target, function (key) {

        if (typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

            Object.defineProperty(target.prototype, key, _handleDescriptor(descriptor, key, input));
        }
    });

    return target;
}

function handleMethod(target, key, descriptor, input) {

    descriptor = _handleDescriptor(descriptor, key, input);

    return descriptor;
}

function handleProp(target, key, descriptor, input) {
    console.warn("@after should not set on class properties.");
    return descriptor;
}

function after(input) {

    if (typeof input !== "number") {
        _Helpers2["default"].wrongInput("after", "number", input);
        return;
    }

    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        _Helpers2["default"].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports["default"] = after;
module.exports = exports["default"];

//# sourceMappingURL=after.js.map