import Helpers from './_helper'

function handleClass(target: Function, input: Boolean) {
    Helpers.forEachClassOwnKeys(target, function(key) {
        var describe = Object.getOwnPropertyDescriptor(target.prototype, key)

        describe.writable = input
        Object.defineProperty(
            target.prototype,
            key,
            describe
        )
    })
}

function handleMethod(target: Function, key: String, descriptor, input: Boolean) {
    descriptor.writable = input
    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input: Boolean) {
    /*var initializer = descriptor.initializer
    debugger

    descriptor.initializer = function(...args) {
        debugger
        //var describer = Object.getOwnPropertyDescriptor(this.__proto__, key)
        //describer.value = initializer.apply(this, args)
        //Object.defineProperty(this.__proto__, key, describer)
        //describer.writable = flag
        //todo: that's works but not save...
        setTimeout(()=> {
            var _descriptor = Object.getOwnPropertyDescriptor(this, key)
            //debugger
            _descriptor.writable = flag
            Object.defineProperty(this, key, _descriptor)
        },0)
        return initializer.apply(this, args)
    }*/
    /*if(!flag) {
        console.warn(`@writable(false) should not set on class properties.`)
    } else {
        descriptor.writable = flag
    }*/
    console.warn(`@writable() should not set on class properties.`)
    return descriptor
}

function writable(input: Boolean) {

    if(typeof input !== "boolean") {
        Helpers.wrongInput('writable', 'boolean', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default writable