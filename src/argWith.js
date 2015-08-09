'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Helpers = require('./_helper');

var _Helpers2 = _interopRequireWildcard(_Helpers);

function handleClass(target, input) {
    console.warn('@argWith should only set on class method.');
    return target;
}

function handleMethod(target, key, descriptor, input) {
    var method = _Helpers2['default'].getMethod(descriptor);

    descriptor.value = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var newArgs = input.apply(undefined, args);

        return method.apply(this, newArgs);
    };

    return descriptor;
}

function handleProp(target, key, descriptor, input) {
    console.warn('@argWith should only set on class method.');
    return descriptor;
}

function argWith(input) {

    if (typeof input !== 'function') {
        _Helpers2['default'].wrongInput('argWith', 'function', input);
        return;
    }

    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        _Helpers2['default'].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports['default'] = argWith;
module.exports = exports['default'];

//# sourceMappingURL=argWith.js.map