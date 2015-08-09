'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helper = require('./_helper');

var _helper2 = _interopRequireDefault(_helper);

function handleClass(target, input) {
    _helper2['default'].forEachClassOwnKeys(target, function (key) {
        var describe = Object.getOwnPropertyDescriptor(target.prototype, key);

        describe.writable = input;
        Object.defineProperty(target.prototype, key, describe);
    });
}

function handleMethod(target, key, descriptor, input) {
    descriptor.writable = input;
    return descriptor;
}

function handleProp(target, key, descriptor, input) {
    /*var initializer = descriptor.initializer
    debugger
     descriptor.initializer = function(...args) {
        debugger
        //var describer = Object.getOwnPropertyDescriptor(this.__proto__, key)
        //describer.value = initializer.apply(this, args)
        //Object.defineProperty(this.__proto__, key, describer)
        //describer.writable = flag
        //todo: that's works but not save...
        setTimeout(()=> {
            var _descriptor = Object.getOwnPropertyDescriptor(this, key)
            //debugger
            _descriptor.writable = flag
            Object.defineProperty(this, key, _descriptor)
        },0)
        return initializer.apply(this, args)
    }*/
    /*if(!flag) {
        console.warn(`@writable(false) should not set on class properties.`)
    } else {
        descriptor.writable = flag
    }*/
    console.warn('@writable() should not set on class properties.');
    return descriptor;
}

function writable(input) {

    if (typeof input !== 'boolean') {
        _helper2['default'].wrongInput('writable', 'boolean', input);
        return;
    }

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _helper2['default'].handler(args, input, handleClass, handleMethod, handleProp);
    };
}

exports['default'] = writable;
module.exports = exports['default'];

//# sourceMappingURL=writable.js.map