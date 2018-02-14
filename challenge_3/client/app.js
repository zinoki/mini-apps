// make an empty board

var boardMaker = function(rows, cols) {
    var boardMatrix = [];
    for (var i = 0; i < rows; i++) {
        var row = new Array(cols).fill(0);
        boardMatrix.push(row);
    }
    return boardMatrix;
}

var boardMatrix = boardMaker(6, 7);



// function that returns row index closest to bottom depending on column index chosen
var nextEmptySquare = function(boardMatrix, colIndex) {
    for (var rowIndex = boardMatrix.length - 1; rowIndex >= 0; rowIndex--) {
        var row = boardMatrix[rowIndex];
        if (!row[colIndex]) {
            return rowIndex;
        }
    }
    return false;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: boardMatrix
        };
        this.togglePiece = function(column, player) {
            // this.state.board[ = player
        };

    }
    render() {
        return (
        <div>
          <h1>Connect 404</h1>
          <Board />
        </div>
        );
    }

}


var Board = () => function() {
  return 
  (<div>hi</div>);
}


ReactDOM.render(<App />, document.getElementById('app'));