import Deco from '../adornment.js'
//console.log('Deco', Deco)

var {
    writable,
    enumerable,
    configurable,
    autoBind,
    bindWith,
    defer,
    memoize,
    debounce,
    trace,
    traceComponent,
    deprecated,
    decorate,
    argWith
    } = Deco


function bar() {
    return 'bar'
}

var gg = {}


class A {

    @argWith(function(...args) {
        if(typeof args[0] === "object" && args.length === 1) {
            let {a, b} = args[0]
            return [a,b]
        }

        return args
    })
    foo(a, b) {
        return a + b
    }

}

var a = new A()

console.log(a.foo(1, 2))
console.log(a.foo({a:1, b: 2}))



