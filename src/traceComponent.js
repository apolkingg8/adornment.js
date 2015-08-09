'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _trace = require('./trace');

var _trace2 = _interopRequireDefault(_trace);

var LIFE_CYCLE = ['getInitialState', 'getDefaultProps', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'render'];

function traceComponent() {
    var input = arguments[0] === undefined ? {} : arguments[0];

    input.whiteList = LIFE_CYCLE;
    return (0, _trace2['default'])(input);
}
exports['default'] = traceComponent;
module.exports = exports['default'];

//# sourceMappingURL=traceComponent.js.map