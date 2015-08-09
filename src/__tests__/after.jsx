jest.autoMockOff()
var after = require('../after')

describe('after', function() {

    it('works with class', function() {

        @after(3)
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

        expect(a.foo(1, 2)).toBe(null)
        expect(a.foo(1, 2)).toBe(null)
        expect(a.foo(1, 2)).toBe(null)
        expect(a.foo(1, 2)).toBe(3)
        expect(a.fooCount).toBe(1)
        expect(a.foo(1, 2)).toBe(3)
        expect(a.fooCount).toBe(2)

        expect(a.bar(1, 2)).toBe(null)
        expect(a.bar(1, 2)).toBe(null)
        expect(a.bar(1, 2)).toBe(null)
        expect(a.bar(1, 2)).toBe(2)
        expect(a.barCount).toBe(1)
        expect(a.bar(1, 2)).toBe(2)
        expect(a.barCount).toBe(2)
    })

    it('works with method', function() {

        class A {
            fooCount = 0

            @after(3)
            foo(a, b) {
                this.fooCount ++
                return a + b
            }
        }

        var a = new A()
        var a2 = new A()

        expect(a.foo(1, 2)).toBe(null)
        expect(a.foo(1, 2)).toBe(null)
        expect(a.foo(1, 2)).toBe(null)
        expect(a.foo(1, 2)).toBe(3)
        expect(a.fooCount).toBe(1)
        expect(a.foo(1, 2)).toBe(3)
        expect(a.fooCount).toBe(2)

        expect(a2.foo(1, 2)).toBe(null)
        expect(a2.foo(1, 2)).toBe(null)
        expect(a2.foo(1, 2)).toBe(null)
        expect(a2.foo(1, 2)).toBe(3)
        expect(a2.fooCount).toBe(1)
        expect(a2.foo(1, 2)).toBe(3)
        expect(a2.fooCount).toBe(2)
    })
})