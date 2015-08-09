import Helpers from './_helper'

function _handleDescriptor(key, descriptor, input: Number) {
    var method = Helpers.getMethod(descriptor)

    descriptor.value = function(...args) {
        var propName = `_debounce_${key}`

        var _addTimer = ()=> {
            var timerId = setTimeout(()=> {
                clearTimeout(this[propName])
                delete this[propName]
                //fixme: how to return it?
                method.apply(this, args)
            }, input)

            Object.defineProperty(
                this,
                propName,
                {
                    enumerable: false,
                    configurable: true,
                    writable: false,
                    value: timerId
                }
            )
        }

        if(typeof this[propName] === "undefined") {
            _addTimer()
        } else {
            // clear timeout and add new
            clearTimeout(this[propName])
            _addTimer()
        }
    }

    return descriptor
}

function handleClass(target: Function, input: Number) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

            _handleDescriptor(key, descriptor, input)

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor, input: Number) {

    _handleDescriptor(key, descriptor, input)

    return descriptor
}

function handleProp(target: Function, key: String, descriptor, input: Number) {
    console.warn(`@debounce should not set on class properties.`)
    return descriptor
}

function debounce(input: Number) {

    if(typeof input !== "number") {
        Helpers.wrongInput('debounce', 'number', input)
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}

export default debounce