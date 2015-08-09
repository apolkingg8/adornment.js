'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Helpers = require('./_helper');

var _Helpers2 = _interopRequireWildcard(_Helpers);

function handleClass(target, input) {

    input.forEach(function (val) {

        if (val.name === 'constructor') {
            console.warn('@decorate method name should not be \'constructor\'.');
            return target;
        }

        if (typeof val !== 'function') {
            console.warn('@decorate(Array<Function>): expect Function, got ' + typeof val, val);
            return target;
        }

        target.prototype[val.name] = val;
    });

    return target;
}

function handleMethod(target, key, descriptor, input) {

    console.warn('@decorate should set on class.');
    return descriptor;
}

function handleProp(target, key, descriptor, input) {
    console.warn('@decorate should set on class.');
    return descriptor;
}

function decorate(input) {

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _Helpers2['default'].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports['default'] = decorate;
module.exports = exports['default'];

//# sourceMappingURL=decorate.js.map