import Helpers from './_helper'

function _descriptorHandler(key, descriptor, input) {
    var method = Helpers.getMethod(descriptor)
    var {logger, blackList, whiteList, perf} = input

    logger = logger || console.log.bind(console)
    blackList = blackList || []
    whiteList = whiteList || []

    var _shouldLog = function() {
        if(blackList.length > 0) return !(blackList.indexOf(key) > 0)
        if(whiteList.length > 0) return (whiteList.indexOf(key) > 0)
        return true
    }

    function setPerf() {
        if(window.performance) {
            return window.performance.now()
        } else {
            return new Date()
        }
    }

    descriptor.value = function(...args) {

        if(_shouldLog()) {
            logger('@trace:', key, `with args:`, args, `this:`, this)

            if(perf && !this._trace_perfStart) {
                Object.defineProperty(this, '_trace_perfStart', {
                    enumerable: false,
                    writable: false,
                    configurable: true,
                    value: setPerf()
                })
            }
        }

        var temp = method.apply(this, args)

        if(_shouldLog()) {

            if(perf) {
                var cost = setPerf() - this._trace_perfStart
                delete this._trace_perfStart
                logger('@trace:', key, `return`, temp, `cost ${cost} ms.`)
            } else {
                logger('@trace:', key, `return`, temp)
            }
        }

        return temp
    }

    return descriptor
}

function handleClass(target: Function, input) {

    Helpers.forEachClassOwnKeys(target, function(key) {

        if(typeof target.prototype[key] === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)

            descriptor = _descriptorHandler(key, descriptor, input)

            Object.defineProperty(target.prototype, key, descriptor)
        }
    })

    return target
}

function handleMethod(target: Function, key: String, descriptor, input) {

    return _descriptorHandler(key, descriptor, input)
}

function handleProp(target: Function, key: String, descriptor, input) {
    console.warn(`@trace should not set on class properties.`)
    return descriptor
}

function trace(input = {}) {

    var {logger, blackList, whiteList, perf} = input

    if(typeof input !== "object") {
        Helpers.wrongInput('trace', 'object', input)
        return;
    } else if((typeof logger !== "function") && (typeof logger !== "undefined")) {
        console.warn(`@trace: Type Error, logger must be a function, not ${typeof logger}}`)
        return;
    } else if((typeof blackList !== "undefined") && (blackList.constructor !== Array)) {
        console.warn(`@trace: Type Error, blackList must be a Array, not ${typeof blackList}}`)
        return;
    } else if((typeof whiteList !== "undefined") && (whiteList.constructor !== Array)) {
        console.warn(`@trace: Type Error, whiteList must be a Array, not ${typeof whiteList}}`)
        return;
    } else if(blackList && whiteList) {
        console.warn('@trace: You can not use both blackList and whiteList.')
        return;
    }

    return function(...args) {
        Helpers.handler(args, input, handleClass, handleMethod, handleProp)
    }
}
export default trace