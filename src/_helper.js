'use strict';

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

Object.defineProperty(exports, '__esModule', {
    value: true
});

function handler(args, input, handleClass, handleMethod, handleProp) {

    if (args.length === 1 && typeof args[0] === 'function') {
        handleClass && handleClass(args[0], input);
    } else if (args.length === 2) {
        // for typescript
        handleProp && handleProp.apply(undefined, _toConsumableArray(args).concat([input]));
    } else if (args.length === 3 && typeof args[0] === 'object' && typeof args[1] === 'string' && typeof args[2] === 'object') {

        if (typeof args[2].value === 'function' || typeof args[2].get === 'function' || typeof args[2].initializer() === 'function') {
            handleMethod && handleMethod.apply(undefined, _toConsumableArray(args).concat([input]));
        } else if (args[2].initializer) {
            handleProp && handleProp.apply(undefined, _toConsumableArray(args).concat([input]));
        } else {
            console.warn('wrong descriptor:', [args], input);
        }
    } else {
        console.warn('wrong arguments:', [args]);
    }
}

function forEachClassOwnKeys(target, callback) {

    Object.getOwnPropertyNames(target.prototype).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        callback(key);
    });
}

function getMethod(descriptor) {
    if (typeof descriptor.value !== 'undefined') {
        return descriptor.value;
    } else if (typeof descriptor.initializer !== 'undefined') {
        console.warn('you should not set a decorator with fat arrow. ');
        return descriptor.initializer();
    } else if (typeof descriptor.get !== 'undefined') {
        // must a decorator after autoBind
        var _method = descriptor.get(true);
        delete descriptor.get;
        delete descriptor.set;
        return _method;
    } else {
        console.warn('wrong method descriptor:', descriptor);
    }
}

function wrongInput(decoratorName, expectType, got) {
    console.warn('wrongInput with @' + decoratorName + '(): expect ' + expectType + ', got ' + typeof got);
}

function notSupportClass(decoratorName) {
    console.warn('@' + decoratorName + ' can not use with class.');
}

exports['default'] = {
    handler: handler, wrongInput: wrongInput, notSupportClass: notSupportClass, getMethod: getMethod,
    forEachClassOwnKeys: forEachClassOwnKeys
};
module.exports = exports['default'];

//# sourceMappingURL=_helper.js.map