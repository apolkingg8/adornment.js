import Helpers from './_helper'

function handleClass(target: Function, input: Boolean) {
    Helpers.forEachClassOwnKeys(target, function(key) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

        descriptor.configurable = input
        Object.defineProperty(
            target.prototype,
            key,
            descriptor
        )
    })
}

function handleMethod(target: Function, key: String, descriptor, input: Boolean) {
    descriptor.configurable = input
    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input: Boolean) {

    /*if(!flag) {
        console.warn(`@configurable(false) should not set on class properties.`)
    } else {
        descriptor.configurable = flag
    }*/
    console.warn(`@configurable() should not set on class properties.`)
    //descriptor.configurable = input
    return descriptor
}

function configurable(input: Boolean) {

    if(typeof input !== "boolean") {
        Helpers.wrongInput('configurable', 'boolean', input)
        return function(){};
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default configurable