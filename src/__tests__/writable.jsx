jest.autoMockOff()
var writable = require('../writable')

describe('writable', function() {

    it('works with class', function() {

        @writable(false)
        class A {
            foo() {}
            bar() {}
        }

        var a = new A()
        expect(function() {
            a.foo = 234
        }).toThrow()
        expect(function() {
            a.bar = 234
        }).toThrow()
    })

    it('works with method', function() {

        class A {
            @writable(false)
            foo() {}
            @writable(true)
            yo() {}
            @writable(false)
            bar() {}
        }
        var a = new A()
        expect(function() {
            a.foo = 234
        }).toThrow()
        a.yo = 456
        expect(a.yo).toEqual(456)
        expect(function() {
            a.bar = 234
        }).toThrow()
    })
})