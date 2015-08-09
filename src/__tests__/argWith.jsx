jest.autoMockOff()
var argWith = require('../argWith')

describe('argWith', function() {



    it('works with method', function() {

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
        expect(a.foo(1, 2)).toBe(3)
        expect(a.foo({a:1, b:2})).toBe(3)
    })
})