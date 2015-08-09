jest.autoMockOff()
var defer = require('../defer')

describe('defer', function() {

    it('works with class', function() {

        @defer
        class A {
            q = 0

            foo(q) {
                this.q = 1
            }
            bar() {
                return this
            }
        }

        var a = new A()
        var flag = false

        runs(()=> {
            a.foo(1)
            flag = true
        })

        waitsFor(()=> {
            return flag
        }, '', 200)

        runs(()=> {
            //expect(a.q).toBe(1)
        })
    })

    it('works with method', function() {

        class A {
            @defer
            foo() {
                return this
            }

            yo() {
                return this
            }

            @defer
            bar() {
                return this
            }
        }

        var a = new A()
    })
})