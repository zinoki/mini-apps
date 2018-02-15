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

// define players
player_1 = 'red';
player_2 = 'black';


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
            board: boardMatrix,
            player_1: 'red',
            player_2: 'black',
            player_1_turn: true,
            player_2_turn: false
        };
        this.togglePiece = function(colIndex) {
            var player = player_1_turn ? player_1 : player_2;
            var rowIndex = nextEmptySquare(boardMatrix, colIndex);
            boardMatrix[rowIndex][colIndex] = player;
        };

    }
    render() {
        return (
        <div>
          <h1>Connect 404</h1>
          <Board matrix={this.state.board}/>
        </div>
        );
    }

}


var Board = function(props) {
    return (<table id="board">
    {props.matrix.map((row) => <BoardRow row={row}/>
  )}
      </table>
    );
  }



// var Board = function(props) {
//   return (<table id="board">
//   {props.matrix.map((row) => <tr>{row}</tr>
// )}
//     </table>
//   );
// }


var BoardRow = function(props) {
    return (<tr>
        {props.row.map((square) => <td>{square}</td>)}
        </tr>
    )
}










ReactDOM.render(<App />, document.getElementById('app'));