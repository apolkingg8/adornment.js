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