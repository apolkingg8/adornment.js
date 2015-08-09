jest.autoMockOff()
var decorate = require('../decorate')

describe('decorate', function() {


    it('works with class', function() {

        function bar() {
            return true
        }

        @decorate([bar])
        class A {

            foo(a, b) {
                return a + b
            }

        }

        var a = new A()
        expect(a.bar()).toBe(true)
    })
})