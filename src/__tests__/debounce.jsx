jest.autoMockOff()
var debounce = require('../debounce')

describe('debounce', function() {

    it('works with class', function() {

        @debounce(100)
        class A {
            fooCount = 0
            barCount = 0

            foo(a,b) {
                this.fooCount++
                return a+b
            }
            bar(a,b) {
                this.barCount++
                return a*b
            }
        }

        var a = new A()

        a.foo()
        a.foo()
        a.foo()
        expect(a.fooCount).toBe(0)
    })

    it('works with method', function() {

        class A {
            fooCount = 0

            @debounce(100)
            foo(a, b) {
                this.fooCount ++
                return a + b
            }
        }

        var a = new A()

        a.foo()
        a.foo()
        a.foo()
        expect(a.fooCount).toBe(0)
    })
})