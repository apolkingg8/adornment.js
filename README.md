[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Built with babel](http://img.shields.io/badge/transpiled%20with-babel-bfb222.svg?style=flat-square)](http://babeljs.io/)
[![jest pass](https://img.shields.io/badge/jest-pass-green.svg?style=flat-square)](https://facebook.github.io/jest/docs/api.html#config-collectcoverage-boolean)

# Adornment.js
An useful ES7 class decorator lib.

## Install
`npm install adornment --save`

## Menu

### Descriptor Decorators

* [writable(writable: Bool)](#writablewritable-bool)
* [enumerable(enumerable: Bool)](#enumerableenumerable-bool)
* [configurable(configurable: Bool)](#configurableconfigurable-bool)

### Class Decorators

* [decorate(methods: Array<Function>)](#decoratemethods-arrayfunction)
* [autoBind](#autobind)

### Method Decorators

* [bindWith(target: Object)](#bindwithtarget-object)
* [memoize](#memoize)
* [curry](#curry)
* [curryRight](#curryright)
* [defer](#defer)
* [delay(wait: Number)](#delaywait-number)
* [throttle(wait: Number)](#throttlewait-number)
* [debounce](#debounce)
* [once](#once)
* [before(times: Number)](#beforetimes-number)
* [after(times: Number)](#aftertimes-number)
* [argWith(func: Function)](#argwithfunc-function)

### Dev Decorators

* [trace({logger, blackList, whiteList, perf})](#trace-logger-blacklist-whitelist-perf)
* [deprecated(hint)](#deprecatedhint)

### React Component Decorators

* [traceComponent({logger, perf})](#tracecomponentlogger-perf)
* [reactMixin(Mixin)](#reactmixinmixin)


## Usage

### Descriptor Decorators

#### writable(writable: Bool) 
```js
class A {

    @writable(false)
    foo() {}

    bar() {}
}

var a = new A()
a.foo = 123 // throw error
```
notice: Can not use `@writable` with ES7 class props, that will cause initial fail.
 
#### enumerable(enumerable: Bool)
```js
class A {

    @enumerable(true)
    foo() {}

    @enumerable(false)
    bar() {}

    @enumerable(true)
    yo() {}
}

var a = new A()

for(var key in a) {
    console.log(key)
}
// => 'foo' 'yo'
```
#### configurable(Bool)
```js
class A {
    @configurable(false)
    foo() {}
}

delete A.prototype.foo // throw Error
```
### Class Decorators

#### decorate(methods: Array\<Function\>)
Decorate methods on your class.

```js
function bar() {
    return 'barrrr'
}

@decorate([bar])
class A {

    foo(a, b) {
        return a + b
    }

}

var a = new A()
a.bar() // => 'barrrr'
```

#### autoBind

```js
@autoBind
class A {

    foo() {
        return this
    }

    bar() {
        return this
    }
}

var a = new A()
var _foo = a.foo,
    _bar = a.bar

console.log(_foo() === a) // true
console.log(_bar()) // window or undefined
```

**NOTICE:** `@autoBind` should put **AFTER ALL** other decorators. For example:

```js
// this will NOT work

@trace
class A {

    @autoBind
    @defer
    foo() {
        return this
    }

    bar() {
        return this
    }
}
```
```js
// works fine

@trace
@autoBind
class A {

    @defer
    foo() {
        return this
    }

    bar() {
        return this
    }
}
```

### Method Decorators

#### bindWith(target: Object)
```js
var q = {qq: 123}

class A {

    @bindWith(q)
    foo() {
        return this
    }
}

var a = new A()
var _foo = a.foo

console.log(_foo() === q) // true
```

#### memoize
```js
class A {

    addCount = 0

    @memoize
    add(a, b) {
        this.addCount ++
        return a + b
    }
}

var a = new A()

a.add(1, 2) // => 3
a.add(1, 2) // => 3
a.add(1, 2) // => 3
console.log(a.addCount) // => 1
a.add(2, 2) // => 4
console.log(a.addCount) // => 2
```
#### curry
WIP

#### curryRight
WIP

#### defer
```js
class A {

    @defer
    foo() {
        console.log('foo')
    }
}

var a = new A()

a.foo()
console.log('bar')

/*
=>
bar
foo
*/
```
#### delay(wait: Number)
```js
class A {

    @delay(10)
    foo() {
        console.log('foo')
    }
}

var a = new A()

a.foo()
console.log('bar')

/*
=>
bar
foo
*/
```
#### throttle(wait: Number)
```js
class A {

    fooCount = 0

    @throttle(100)
    foo() {
        this.fooCount ++
    }
}

var a = new A()

a.foo()
a.foo()
a.foo()
console.log(a.fooCount) // => 1

setTimeout(()=> {
    a.foo()
    console.log(a.fooCount) // => 2
}, 150)
```
#### debounce(wait: Number)
```js
class A {

    fooCount = 0

    @debounce(100)
    foo() {
        this.fooCount ++
    }
}

var a = new A()

a.foo()
a.foo()
console.log(a.fooCount) // => 0

setTimeout(()=> {
    console.log(a.fooCount) // => 1
}, 150)
```
#### once
```js
class A {
    fooCount = 0

    @once
    foo(a, b) {
        this.fooCount ++
        return a + b
    }
}

var a = new A()
console.log(a.foo(1, 1)) // => 2
// Always return null after triggered once.
console.log(a.foo(1, 1)) // => null
console.log(a.foo(1, 1)) // => null
```

#### before(times)
```js
class A {

    @before(3)
    foo(a, b) {
        return a + b
    }
}

var a = new A()

a.foo(1, 2) // => 3
a.foo(1, 2) // => 3
a.foo(1, 2) // => null
```

#### after(times)
```js
class A {

    @after(3)
    foo(a, b) {
        return a + b
    }
}

var a = new A()

a.foo(1, 2) // => null
a.foo(1, 2) // => null
a.foo(1, 2) // => null
a.foo(1, 2) // => 3
```

#### argWith(func: Function)
```js
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
a.foo(1,2) // => 3
a.foo({a:1, b:2}) // => 3
```

### Dev Decorators

#### trace({logger, blackList, whiteList, perf})
Log function input, output and cost time.
* `logger: Function`: You can use cust logger like [debug](https://www.npmjs.com/package/debug), default use `console.log` 
```js
class A {

    @trace({
        perf: true
    })
    add(a, b) {
        console.log('adding')
        return a + b
    }
}

var a = new A()
a.add(1,2)
/*
=>
@trace: add with args: [1, 2] this: a
adding
@trace: add return 3 cost 0.012345678 ms.
*/
```
with class:

```js
@trace({
    blackList: ['foo'],
    perf: true,
})
class A {

    foo(bar) {
        console.log('bar')
    }

    add(a, b) {
        console.log('adding')
        return a + b
    }
}

var a = new A()
a.add(1,2)
a.bar()
/*
=>
@trace: add with args: [1, 2] this: a
adding
@trace: add return 3 cost 0.012345678 ms.
bar
*/
```
#### deprecated(hint)
```js
class A {

    @deprecated(`Please use 'newAdd()'`)
    add(a, b) {
        return a + b
    }

    newAdd() {
    }
}

var a = new A()
console.log(a.add(1,2))
/*
=>
Warning: add is deprecated. Please use 'newAdd()'
3
*/
```

### React Component Decorators

#### traceComponent({logger, perf})
Trace the React component lifecycle. Same as `@trace` with
```js
whiteList: [
'getInitialState',
'getDefaultProps',
'componentWillMount',
'componentDidMount',
'componentWillReceiveProps',
'shouldComponentUpdate',
'componentWillUpdate',
'componentDidUpdate',
'componentWillUnmount',
'render'
]
```

```js
@traceComponent
class A extends React.Component {

    foo() {
        console.log('foo')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
}
/*
=>
@trace: shouldComponentUpdate with args: [{}, {}] this: ReactElement
@trace: shouldComponentUpdate return true cost 0.012345678 ms.
*/
```
#### reactMixin(Mixin)
WIP

###
[Tests](src/__tests__/) with [jest](https://github.com/facebook/jest).
```
npm test
```

### License
MIT