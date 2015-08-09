"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Helpers = require("./_helper");

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