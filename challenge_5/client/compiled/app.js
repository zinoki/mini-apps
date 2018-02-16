var boardMaker = function () {
    var board = [[null, 'black', null, 'black', null, 'black', null, 'black'], ['black', null, 'black', null, 'black', null, 'black', null], [null, 'black', null, 'black', null, 'black', null, 'black'], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], ['white', null, 'white', null, 'white', null, 'white', null], [null, 'white', null, 'white', null, 'white', null, 'white'], ['white', null, 'white', null, 'white', null, 'white', null]];
    return board;
};

var checkerBoard = boardMaker();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: checkerBoard
        };
    }
    render() {
        console.log(this.state.board);
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                'hiiiii'
            ),
            React.createElement(Board, null)
        );
    }
}

var Board = function (props) {
    return React.createElement(
        'div',
        null,
        'This is board',
        React.createElement(BoardRow, null)
    );
};

var BoardRow = function (props) {
    return React.createElement(
        'div',
        null,
        'This is board row'
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));