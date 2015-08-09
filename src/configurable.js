'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helper = require('./_helper');

var _helper2 = _interopRequireDefault(_helper);

function handleClass(target, input) {
    _helper2['default'].forEachClassOwnKeys(target, function (key) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

        descriptor.configurable = input;
        Object.defineProperty(target.prototype, key, descriptor);
    });
}

function handleMethod(target, key, descriptor, input) {
    descriptor.configurable = input;
    return descriptor;
}

function handleProp(target, key, descriptor, input) {

    /*if(!flag) {
        console.warn(`@configurable(false) should not set on class properties.`)
    } else {
        descriptor.configurable = flag
    }*/
    console.warn('@configurable() should not set on class properties.');
    //descriptor.configurable = input
    return descriptor;
}

function configurable(input) {

    if (typeof input !== 'boolean') {
        _helper2['default'].wrongInput('configurable', 'boolean', input);
        return function () {};
    }

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _helper2['default'].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports['default'] = configurable;
module.exports = exports['default'];

//# sourceMappingURL=configurable.js.map