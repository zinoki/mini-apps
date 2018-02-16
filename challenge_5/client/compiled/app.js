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
            React.createElement(Board, { board: this.state.board })
        );
    }
}

var Board = function ({ board }) {
    return React.createElement(
        'table',
        null,
        board.map((row, index) => React.createElement(BoardRow, { row: row, rowIndex: index }))
    );
};

var BoardRow = function ({ row, rowIndex }) {
    return React.createElement(
        'tr',
        null,
        row.map((square, colIndex) => React.createElement(
            'td',
            null,
            square
        ))
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));