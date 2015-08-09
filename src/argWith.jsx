import Helpers from './_helper'

function handleClass(target: Function, input) {
    console.warn(`@argWith should only set on class method.`)
    return target
}

function handleMethod(target: Function, key: String, descriptor, input) {
    var method = Helpers.getMethod(descriptor)

    descriptor.value = function(...args) {
        var newArgs = input(...args)

        return method.apply(this, newArgs)
    }

    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input) {
    console.warn(`@argWith should only set on class method.`)
    return descriptor
}

function argWith(input) {

    if(typeof input !== "function") {
        Helpers.wrongInput('argWith', 'function', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default argWith