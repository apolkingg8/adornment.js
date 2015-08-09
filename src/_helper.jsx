
function handler(args, input, handleClass, handleMethod, handleProp) {

    if (args.length === 1
        && typeof args[0] === 'function') {
        handleClass && handleClass(args[0], input);
    }
    else if(args.length === 2) {
        // for typescript
        handleProp && handleProp(...args, input)
    } else if (args.length === 3
        && typeof args[0] === 'object'
        && typeof args[1] === 'string'
        && typeof args[2] === 'object') {

        if((typeof args[2].value === "function")
            || (typeof args[2].get === "function")
            || (typeof args[2].initializer() === "function")) {
            handleMethod && handleMethod(...args, input);
        } else if(args[2].initializer) {
            handleProp && handleProp(...args, input)
        } else {
            console.warn(`wrong descriptor:`, [args], input)
        }
    }
    else {
        console.warn(`wrong arguments:`, [args])
    }
}

function forEachClassOwnKeys(target: Function, callback: Function) {

    Object.getOwnPropertyNames(target.prototype).forEach(function(key) {
        if(key === 'constructor') {
            return;
        }
        callback(key)
    })
}

function getMethod(descriptor) {
    if(typeof descriptor.value !== "undefined") {
        return descriptor.value
    } else if(typeof descriptor.initializer !== "undefined") {
        console.warn(`you should not set a decorator with fat arrow. `)
        return descriptor.initializer()
    } else if(typeof descriptor.get !== "undefined") {
        // must a decorator after autoBind
        let _method = descriptor.get(true)
        delete descriptor.get
        delete descriptor.set
        return _method
    } else {
        console.warn('wrong method descriptor:', descriptor)
    }
}

function wrongInput(decoratorName, expectType: String, got) {
    console.warn(`wrongInput with @${decoratorName}(): expect ${expectType}, got ${typeof got}`);
}

function notSupportClass(decoratorName) {
    console.warn(`@${decoratorName} can not use with class.`);
}

export default {
    handler, wrongInput, notSupportClass, getMethod,
    forEachClassOwnKeys
}
