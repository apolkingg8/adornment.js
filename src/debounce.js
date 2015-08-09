"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helper = require("./_helper");

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