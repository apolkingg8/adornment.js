import Helpers from './_helper'

function handleClass(target: Function, input: Number) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
                method = Helpers.getMethod(descriptor)

            descriptor.value = function(...args) {
                setTimeout(()=> {
                    method.apply(this, args)
                }, input)
            }

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor, input: Number) {
    var method = descriptor.value;

    descriptor.value = function(...args) {
        setTimeout(()=> {
            method.apply(this, args)
        }, input)
    }

    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input: Number) {
    console.warn(`@delay should not set on class properties.`)
    return descriptor
}

function delay(input: Number) {

    if(typeof input !== "number") {
        Helpers.wrongInput('delay', 'number', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default delay