import Helpers from './_helper'

function _descriptorHandler(descriptor, key) {
    var method = Helpers.getMethod(descriptor)

    delete descriptor.value
    delete descriptor.writable

    descriptor.get = function _autoBind(delayBind) {
        var propName = `_autoBind_${key}`

        if(!delayBind) {
            if (this[propName] === undefined) {
                Object.defineProperty(this, propName, {
                    enumerable: false,
                    configurable: false,
                    value: this
                })

                return method.bind(this)
            } else {
                return method.bind(this[propName])
            }
        } else {
            return method
        }
    }

    descriptor._autoBinded = false

    return descriptor
}

function handleClass(target: Function) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

            Object.defineProperty(target.prototype, key, _descriptorHandler(descriptor, key))
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor) {
    //todo: need find another way with autoBind

    descriptor = _descriptorHandler(descriptor, key)

    return descriptor
}

function handleProp(target: Function, key: String, descriptor) {
    console.warn(`@autoBind should not set on class properties.`)
    return descriptor
}

function autoBind(...args) {
    Helpers.handler(args, null, handleClass, handleMethod, handleProp)
}

export default autoBind