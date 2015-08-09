import Helpers from './_helper'

function handleClass(target: Function, input: Object) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key),
                method = Helpers.getMethod(descriptor)

            //delete descriptor.value
            //delete descriptor.writable

            /*descriptor.get = function() {
                return method.bind(input);
            }*/
            descriptor.value = method.bind(input);

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor, input: Object) {
    var method = Helpers.getMethod(descriptor)

    /*delete descriptor.value
    delete descriptor.writable

    descriptor.get = function() {
        return method.bind(input);
    }*/
    descriptor.value = method.bind(input);

    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input: Object) {
    console.warn(`@bindWith should not set on class properties.`)
    return descriptor
}

function bindWith(input: Object) {

    if(typeof input !== "object") {
        Helpers.wrongInput('bindWith', 'Object', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default bindWith