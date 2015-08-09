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