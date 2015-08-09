import Helpers from './_helper'


function handleClass(target: Function) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
                method = Helpers.getMethod(descriptor)

            descriptor.value = function(...args) {
                const cacheName = `_once_${key}`

                if(this[cacheName] !== true) {
                    Object.defineProperty(this, cacheName, {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value: true
                    })

                    return method.apply(this, args)
                } else {
                    //console.warn(`@once ${key} already done.`)
                    return null
                }
            }

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor) {
    var method = Helpers.getMethod(descriptor)

    descriptor.value = function(...args) {
        const cacheName = `_once_${key}`

        if(this[cacheName] !== true) {
            Object.defineProperty(this, cacheName, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: true
            })

            return method.apply(this, args)
        } else {
            //console.warn(`@once ${key} already done.`)
            return null
        }
    }

    return descriptor
}

function handleProp(target: Function, key: String, descriptor) {
    console.warn(`@once should not set on class properties.`)
    return descriptor
}

function once(...args) {
    Helpers.handler(args, null, handleClass, handleMethod, handleProp)
}

export default once