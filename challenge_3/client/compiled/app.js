var App = () => React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'hiiii World'
    ),
    React.createElement(Board, null)
);

var Board = () => React.createElement(
    'div',
    null,
    'hi'
);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));