'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _Deco = require('./deco');

var _Deco2 = _interopRequireWildcard(_Deco);

//console.log('Deco', Deco)

var writable = _Deco2['default'].writable;
var enumerable = _Deco2['default'].enumerable;
var configurable = _Deco2['default'].configurable;
var autoBind = _Deco2['default'].autoBind;
var bindWith = _Deco2['default'].bindWith;
var defer = _Deco2['default'].defer;
var memoize = _Deco2['default'].memoize;
var debounce = _Deco2['default'].debounce;
var trace = _Deco2['default'].trace;
var traceComponent = _Deco2['default'].traceComponent;
var deprecated = _Deco2['default'].deprecated;
var decorate = _Deco2['default'].decorate;
var argWith = _Deco2['default'].argWith;

function bar() {
    return 'bar';
}

var gg = {};

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

console.log(a.foo(1, 2));
console.log(a.foo({ a: 1, b: 2 }));

//# sourceMappingURL=_test.js.map