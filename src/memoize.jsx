import Helpers from './_helper'

function _hash(input) {
    var hash = 0, i, chr, len;
    if (input.length == 0) return hash;
    for (i = 0, len = input.length; i < len; i++) {
        chr   = input.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

function handleClass(target: Function) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
                method = Helpers.getMethod(descriptor)

            descriptor.value = function(...args) {
                const cacheName = `_memoizeCache_${key}`

                if(!this[cacheName]) {
                    //this[cacheName] = {}
                    Object.defineProperty(this, cacheName, {
                        enumerable: false,
                        configurable: false,
                        writable: true,
                        value: {}
                    })
                }

                var argHash = _hash(args.toString())

                if(typeof this[cacheName][argHash] === 'undefined') {
                    this[cacheName][argHash] = method.apply(this, args)
                }

                return this[cacheName][argHash]
            }

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor) {
    var method = Helpers.getMethod(descriptor)

    descriptor.value = function(...args) {
        const cacheName = `_memoizeCache_${key}`

        if(!this[cacheName]) {
            //this[cacheName] = {}
            Object.defineProperty(this, cacheName, {
                enumerable: false,
                configurable: false,
                writable: true,
                value: {}
            })
        }

        var argHash = _hash(args.toString())

        if(typeof this[cacheName][argHash] === 'undefined') {
            this[cacheName][argHash] = method.apply(this, args)
        }

        return this[cacheName][argHash]
    }

    return descriptor
}

function handleProp(target: Function, key: String, descriptor) {
    console.warn(`@memoize should not set on class properties.`)
    return descriptor
}

function memoize(...args) {
    Helpers.handler(args, null, handleClass, handleMethod, handleProp)
}

export default memoize