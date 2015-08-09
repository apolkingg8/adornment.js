jest.autoMockOff()
var enumerable = require('../enumerable')

describe('enumerable', function() {

    it('works with class', function() {

        @enumerable(true)
        class A {
            foo() {}
            bar() {}
        }

        var a = new A()
        var keys = []

        for(var key in a) {
            keys.push(key)
        }

        expect(keys).toEqual(['foo', 'bar'])
    })

    it('works with method', function() {

        class A {
            @enumerable(true)
            foo() {}
            @enumerable(false)
            bar() {}
            @enumerable(true)
            yo() {}
        }

        var a = new A()
        var keys = []

        for(var key in a) {
            keys.push(key)
        }

        expect(keys).toEqual(['foo', 'yo'])
    })

    /*it('works with props', function() {

        class A {
            @enumerable(true)
            foo = 1
            @enumerable(false)
            bar = 2
            @enumerable(true)
            yo = 3
        }

        var a = new A()
        var keys = []

        for(var key in a) {
            keys.push(key)
        }

        expect(keys).toEqual(['foo', 'yo'])
    })*/
})