"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helper = require("./_helper");

var _helper2 = _interopRequireDefault(_helper);

function handleClass(target, input) {

    _helper2["default"].forEachClassOwnKeys(target, function (key) {

        if (typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
                method = _helper2["default"].getMethod(descriptor);

            descriptor.value = function () {
                var _this = this;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                setTimeout(function () {
                    method.apply(_this, args);
                }, input);
            };

            Object.defineProperty(target.prototype, key, descriptor);
        }
    });

    return target;
}

function handleMethod(target, key, descriptor, input) {
    var method = descriptor.value;

    descriptor.value = function () {
        var _this2 = this;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        setTimeout(function () {
            method.apply(_this2, args);
        }, input);
    };

    return descriptor;
}

function handleProp(target, key, descriptor, input) {
    console.warn("@delay should not set on class properties.");
    return descriptor;
}

function delay(input) {

    if (typeof input !== "number") {
        _helper2["default"].wrongInput("delay", "number", input);
        return;
    }

    return function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        _helper2["default"].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports["default"] = delay;
module.exports = exports["default"];

//# sourceMappingURL=delay.js.map