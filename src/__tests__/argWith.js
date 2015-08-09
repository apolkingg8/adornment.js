'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

jest.autoMockOff();
var argWith = require('../argWith');

describe('argWith', function () {

    it('works with method', function () {
        var A = (function () {
            function A() {
                _classCallCheck(this, A);
            }

            _createDecoratedClass(A, [{
                key: 'foo',
                decorators: [argWith(function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    if (typeof args[0] === 'object' && args.length === 1) {
                        var _args$0 = args[0];
                        var _a = _args$0.a;
                        var b = _args$0.b;

                        return [_a, b];
                    }

                    return args;
                })],
                value: function foo(a, b) {
                    return a + b;
                }
            }]);

            return A;
        })();

        var a = new A();
        expect(a.foo(1, 2)).toBe(3);
        expect(a.foo({ a: 1, b: 2 })).toBe(3);
    });
});

//# sourceMappingURL=argWith.js.map