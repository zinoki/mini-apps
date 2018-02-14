// var boardMatrix = new Array(6).fill(new Array(7).fill(0));
// var boardMatrix = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
// ]


var boardMaker = function (rows, cols) {
    var boardMatrix = [];
    for (var i = 0; i < rows; i++) {
        var row = new Array(cols).fill(0);
        boardMatrix.push(row);
    }
    return boardMatrix;
};

var boardMatrix = boardMaker(6, 7);
var nextEmptySquare = function (boardMatrix, colIndex) {
    for (var rowIndex = boardMatrix.length - 1; i >= 0; i--) {
        var row = boardMatrix[rowIndex];
        if (row[colIndex]) {
            return rowIndex;
        }
        // check column index at each row until you find an empty one
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: boardMatrix
        };
        this.togglePiece = function (column, player) {
            // this.state.board[ = player
        };
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Connect 404'
            ),
            React.createElement(Board, null)
        );
    }

}

var Board = () => function () {
    return;
    React.createElement(
        'div',
        null,
        'hi'
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));