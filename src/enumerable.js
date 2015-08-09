'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Helpers = require('./_helper');

var _Helpers2 = _interopRequireWildcard(_Helpers);

function handleClass(target, input) {
    _Helpers2['default'].forEachClassOwnKeys(target, function (key) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

        descriptor.enumerable = input;
        Object.defineProperty(target.prototype, key, descriptor);
    });
}

function handleMethod(target, key, descriptor, input) {

    descriptor.enumerable = input;
    return descriptor;
}

function handleProp(target, key, descriptor, input) {
    descriptor.enumerable = input;

    //console.warn(`@enumerable() should not set on class properties.`)
    return descriptor;
}

function enumerable(input) {

    if (typeof input !== 'boolean') {
        _Helpers2['default'].wrongInput('enumerable', 'boolean', input);
        return;
    }

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _Helpers2['default'].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports['default'] = enumerable;
module.exports = exports['default'];

//# sourceMappingURL=enumerable.js.map