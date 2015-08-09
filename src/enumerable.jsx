import Helpers from './_helper'

function handleClass(target: Function, input: Boolean) {
    Helpers.forEachClassOwnKeys(target, function(key) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

        descriptor.enumerable = input
        Object.defineProperty(
            target.prototype,
            key,
            descriptor
        )
    })
}

function handleMethod(target: Function, key: String, descriptor, input: Boolean) {

    descriptor.enumerable = input
    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input: Boolean) {
    descriptor.enumerable = input

    //console.warn(`@enumerable() should not set on class properties.`)
    return descriptor
}


function enumerable(input: Boolean) {

    if(typeof input !== "boolean") {
        Helpers.wrongInput('enumerable', 'boolean', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default enumerable