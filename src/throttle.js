"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helper = require("./_helper");

var _helper2 = _interopRequireDefault(_helper);

function _descriptorHandler(key, descriptor, input) {
    var method = descriptor.value;

    descriptor.value = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var propName = "_throttle_" + key,
            now = new Date();

        if (typeof this[propName] === "undefined") {
            // init throttle
            Object.defineProperty(this, propName, {
                enumerable: false,
                configurable: true, //hmm...
                writable: true,
                value: now
            });
            return method.apply(this, args);
        } else {
            // in throttle
            if (now - this[propName] > input) {
                this[propName] = now;
                method.apply(this, args);
            } else {
                // do nothing
                return false;
            }
        }
    };

    return descriptor;
}

function handleClass(target, input) {

    _helper2["default"].forEachClassOwnKeys(target, function (key) {

        if (typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

            descriptor = _descriptorHandler(key, descriptor, input);

            Object.defineProperty(target.prototype, key, descriptor);
        }
    });

    return target;
}

function handleMethod(target, key, descriptor, input) {

    descriptor = _descriptorHandler(key, descriptor, input);

    return descriptor;
}

function handleProp(target, key, descriptor, input) {
    console.warn("@throttle should not set on class properties.");
    return descriptor;
}

function throttle(input) {

    if (typeof input !== "number") {
        _helper2["default"].wrongInput("throttle", "number", input);
        return;
    }

    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        _helper2["default"].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports["default"] = throttle;
module.exports = exports["default"];

//# sourceMappingURL=throttle.js.map