jest.autoMockOff()
var bindWith = require('../bindWith')

describe('bindWith', function() {

    it('works with class', function() {

        var q = {qq: 123}

        @bindWith(q)
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
        expect(_foo()).toBe(q)
        var _bar = a.bar
        expect(_bar()).toBe(q)
    })

    it('works with method', function() {

        var q = {qq: 123}

        class A {
            @bindWith(q)
            foo() {
                return this
            }

            yo() {
                return this
            }

            @bindWith(q)
            bar() {
                return this
            }
        }

        var a = new A()
        var _foo = a.foo
        expect(_foo()).toBe(q)
        var _yo = a.yo
        expect(_yo()).not.toBe(q)
        var _bar = a.bar
        expect(_bar()).toBe(q)
    })
})