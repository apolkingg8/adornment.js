import Helpers from './_helper'

function _handleDescriptor(descriptor, key, input) {
    var method = Helpers.getMethod(descriptor)

    descriptor.value = function(...args) {
        const cacheName = `_after_${key}`

        if(this[cacheName] === undefined) {
            Object.defineProperty(this, cacheName, {
                enumerable: false,
                configurable: false,
                writable: true,
                value: 0
            })

            return null
        } else {
            this[cacheName] += 1

            if(this[cacheName] < input) {
                return null
            } else {
                return method.apply(this, args)
            }
        }
    }

    return descriptor
}

function handleClass(target: Function, input) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

            Object.defineProperty(target.prototype, key, _handleDescriptor(descriptor, key, input))
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor, input) {

    descriptor = _handleDescriptor(descriptor, key, input)

    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input) {
    console.warn(`@after should not set on class properties.`)
    return descriptor
}

function after(input) {

    if(typeof input !== "number") {
        Helpers.wrongInput('after', 'number', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default after