jest.autoMockOff()
var autoBind = require('../autoBind')

describe('autoBind', function() {

    it('works with class', function() {

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
        var _foo = a.foo
        expect(_foo()).toBe(a)
        var _bar = a.bar
        expect(_bar()).toBe(a)
    })

    it('works with method', function() {

        class A {
            @autoBind
            foo() {
                return this
            }

            yo() {
                return this
            }

            @autoBind
            bar() {
                return this
            }
        }

        var a = new A()
        var _foo = a.foo
        expect(_foo()).toBe(a)
        var _yo = a.yo
        expect(_yo()).not.toBe(a)
        var _bar = a.bar
        expect(_bar()).toBe(a)
    })
})