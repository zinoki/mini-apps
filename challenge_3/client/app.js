// make an empty board

var boardMaker = function(rows, cols) {
    var boardMatrix = [];
    for (var i = 0; i < rows; i++) {
        var row = new Array(cols).fill(null);
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

var isRowWin = function(rowIndex, colIndex, player) {
    var inARow = 0;
    var row = boardMatrix[rowIndex];
    for (var i = 0; i < row.length; i++) {
            if (row[i] === player) {
                inARow++;
                if (inARow === 4) {
                    console.log(player + ' wins!');
                    return true;
                }
            } else {
                inARow = 0;
            }

    }
    return false;
}
var isColumnWin = function(rowIndex, colIndex, player) {
    var inColumn = 0;
    for (var i = rowIndex; i < boardMatrix.length; i++) {
        var row = boardMatrix[i];
        if (row[colIndex] === player) {
            inColumn++;
            if (inColumn === 4) {
                console.log(player + ' wins!');
                return true;
            }
        } else {
            inColumn = 0;
        }
    }
    return false;
}
// check for diagonal win

var isDiagonalWin = function(rowIndex, colIndex, player) {
    var leftD = 0;
    var rightD = 0;
    var colLeft = colIndex;
    var colRight = colIndex;
    for (var i = rowIndex; i < boardMatrix.length; i++) {
        var row = boardMatrix[i];
        if (row[colRight] === player) {
            rightD++;
            if (rightD === 4) {
                console.log(player + ' wins!');
                return true;
            }
        } else {
            rightD = 0;
        }
        if (colRight + 1 <= row.length) {
            ++colRight;
        }
        if (row[colLeft] === player) {
            leftD++;
            if (leftD === 4) {
                console.log(player + ' wins!');
                return true;
            }
        } else {
            leftD = 0;
        }
        if (colLeft - 1 >= 0) {
            --colLeft;
        }

    }
    return false;


}

// check for win
var isWin = function(rowIndex, colIndex, player) {
    if (isRowWin(rowIndex, colIndex, player) || isColumnWin(rowIndex, colIndex, player) || isDiagonalWin(rowIndex, colIndex, player)) {
        return true;
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
        
    }
    togglePiece(colIndex) {
        var player = this.state.player_1_turn ? this.state.player_1 : this.state.player_2;
        var rowIndex = nextEmptySquare(this.state.board, colIndex);
        this.state.board[rowIndex][colIndex]  = player;
        this.setState({board: this.state.board});
        this.setState({player_1_turn: !this.state.player_1_turn});
        this.setState({player_2_turn: !this.state.player_2_turn});
        if(isWin(rowIndex, colIndex, player)) {
            alert(player + ' wins!');
        }

    }
    render() {
        return (
        <div>
          <h1>Connect 404</h1>
          <Board matrix={this.state.board} togglePiece={this.togglePiece.bind(this)}/>
        </div>
        );
    }

}


var Board = function(props) {
    return (<table id="board">
    {props.matrix.map((row, rowIndex) => <BoardRow row={row} rowIndex={rowIndex} togglePiece={props.togglePiece.bind(this)}/>
  )}
      </table>
    );
  }




var BoardRow = function(props) {

    return (<tr>
        {props.row.map((square, colIndex) => <td className={square || "cell"} onClick={()=>props.togglePiece(colIndex)}>{square}</td>)}
        </tr>
    )
}



ReactDOM.render(<App />, document.getElementById('app'));