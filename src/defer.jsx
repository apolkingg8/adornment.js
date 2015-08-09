import Helpers from './_helper'

function handleClass(target: Function) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
                method = Helpers.getMethod(descriptor)

            descriptor.value = function(...args) {
                setTimeout(()=> {
                    method.apply(this, args)
                }, 0)
            }

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor) {
    var method = descriptor.value;

    descriptor.value = function(...args) {
        setTimeout(()=> {
            method.apply(this, args)
        }, 0)
    }

    return descriptor
}

function handleProp(target: Function, key: String, descriptor) {
    console.warn(`@defer should not set on class properties.`)
    return descriptor
}

function defer(...args) {
    Helpers.handler(args, null, handleClass, handleMethod, handleProp)
}

export default defer