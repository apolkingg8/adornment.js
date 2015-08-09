import trace from './trace'

const LIFE_CYCLE = [
    'getInitialState',
    'getDefaultProps',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
    'render'
]

function traceComponent(input = {}) {
    input.whiteList = LIFE_CYCLE
    return trace(input)
}
export default traceComponent