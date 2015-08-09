'use strict';

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

jest.autoMockOff();
var enumerable = require('../enumerable');

describe('enumerable', function () {

    it('works with class', function () {
        var A = (function () {
            function A() {
                _classCallCheck(this, _A);
            }

            _createClass(A, [{
                key: 'foo',
                value: function foo() {}
            }, {
                key: 'bar',
                value: function bar() {}
            }]);

            var _A = A;
            A = enumerable(true)(A) || A;
            return A;
        })();

        var a = new A();
        var keys = [];

        for (var key in a) {
            keys.push(key);
        }

        expect(keys).toEqual(['foo', 'bar']);
    });

    it('works with method', function () {
        var A = (function () {
            function A() {
                _classCallCheck(this, A);
            }

            _createDecoratedClass(A, [{
                key: 'foo',
                decorators: [enumerable(true)],
                value: function foo() {}
            }, {
                key: 'bar',
                decorators: [enumerable(false)],
                value: function bar() {}
            }, {
                key: 'yo',
                decorators: [enumerable(true)],
                value: function yo() {}
            }]);

            return A;
        })();

        var a = new A();
        var keys = [];

        for (var key in a) {
            keys.push(key);
        }

        expect(keys).toEqual(['foo', 'yo']);
    });
});
/*it('works with props', function() {
      class A {
        @enumerable(true)
        foo = 1
        @enumerable(false)
        bar = 2
        @enumerable(true)
        yo = 3
    }
      var a = new A()
    var keys = []
      for(var key in a) {
        keys.push(key)
    }
      expect(keys).toEqual(['foo', 'yo'])
})*/

//# sourceMappingURL=enumerable.js.map