'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

jest.autoMockOff();
var decorate = require('../decorate');

describe('decorate', function () {

    it('works with class', function () {

        function bar() {
            return true;
        }

        var A = (function () {
            function A() {
                _classCallCheck(this, _A);
            }

            _createClass(A, [{
                key: 'foo',
                value: function foo(a, b) {
                    return a + b;
                }
            }]);

            var _A = A;
            A = decorate([bar])(A) || A;
            return A;
        })();

        var a = new A();
        expect(a.bar()).toBe(true);
    });
});

//# sourceMappingURL=decorate.js.map