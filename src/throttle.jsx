import Helpers from './_helper'

function _descriptorHandler(key, descriptor, input) {
    var method = descriptor.value;

    descriptor.value = function(...args) {
        var propName = `_throttle_${key}`,
            now = new Date()

        if(typeof this[propName] === "undefined") {
            // init throttle
            Object.defineProperty(
                this,
                propName,
                {
                    enumerable: false,
                    configurable: true, //hmm...
                    writable: true,
                    value: now
                }
            )
            return method.apply(this, args)
        } else {
            // in throttle
            if((now - this[propName]) > input) {
                this[propName] = now
                method.apply(this, args)
            } else {
                // do nothing
                return false
            }
        }
    }

    return descriptor
}

function handleClass(target: Function, input: Number) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

            descriptor = _descriptorHandler(key, descriptor, input)

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor, input: Number) {

    descriptor = _descriptorHandler(key, descriptor, input)

    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input: Number) {
    console.warn(`@throttle should not set on class properties.`)
    return descriptor
}

function throttle(input: Number) {

    if(typeof input !== "number") {
        Helpers.wrongInput('throttle', 'number', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default throttle