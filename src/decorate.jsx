import Helpers from './_helper'

function handleClass(target: Function, input) {

    input.forEach((val)=> {

        if(val.name === 'constructor') {
            console.warn(`@decorate method name should not be 'constructor'.`)
            return target
        }

        if(typeof val !== "function") {
            console.warn(`@decorate(Array<Function>): expect Function, got ${typeof val}`, val)
            return target
        }

        target.prototype[val.name] = val
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor, input) {

    console.warn(`@decorate should set on class.`)
    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input) {
    console.warn(`@decorate should set on class.`)
    return descriptor
}

function decorate(input) {

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default decorate