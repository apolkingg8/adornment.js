jest.autoMockOff()
var configurable = require('../configurable')

describe('configurable', function() {

    it('works with class', function() {

        @configurable(false)
        class A {
            foo() {}
            bar() {}
        }

        expect(function() {
            delete A.prototype.foo
        }).toThrow()
        expect(function() {
            delete A.prototype.bar
        }).toThrow()
    })

    it('works with method', function() {

        class A {
            @configurable(false)
            foo() {}
            @configurable(true)
            yo() {}
            @configurable(false)
            bar() {}
        }

        expect(function() {
            delete A.prototype.foo
        }).toThrow()
        expect(
            Object.getOwnPropertyDescriptor(A.prototype, 'yo').configurable
        ).toBe(true)
        expect(function() {
            delete A.prototype.bar
        }).toThrow()
    })
})