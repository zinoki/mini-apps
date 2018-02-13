// Model
// div tag relative to array position
var squares = {
    square_0: 0,
    square_1: 1,
    square_2: 2, 
    square_3: 3,
    square_4: 4,
    square_5: 5,
    square_6: 6,
    square_7: 7,
    square_8: 8
};
// initial setup
var boardMatrix = [null, null, null, null, null, null, null, null, null];
var currentPlayer = 'X';
var nextPlayer = 'O';
var score_one = 0;
var score_two = 0;




// View
// renders the board based on the boardMatrix array
var render = function() {
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = boardMatrix[i];
    }
    checkWin();
}


// Controller
// check for conflict
var isOpen = function(divID) {
    return (!boardMatrix[squares[divID]])
}



// put's current player's piece in empty spots
var toggleSquare = function(divID) {
    if (isOpen(divID)) {
        boardMatrix[squares[divID]] = currentPlayer;
        var tempPlayer = '';
        tempPlayer = currentPlayer;
        currentPlayer = nextPlayer;
        nextPlayer = tempPlayer;
        render()
    }
}

// check for end of game
var makeArrayOfArrays = function(boardMatrix) {
    var matrix = [];
    matrix.push([boardMatrix[0], boardMatrix[1], boardMatrix[2]])
    matrix.push([boardMatrix[3], boardMatrix[4], boardMatrix[5]])
    matrix.push([boardMatrix[6], boardMatrix[7], boardMatrix[8]])
    return matrix;
}

// check row is win
var checkRow = function(array) {
    var player = array[0];
    if (player !== null && (array[0] === array[1]) && (array[1] === array[2])) {
        document.getElementById('winner').innerHTML = "Player " + player + ' wins!'
        setTimeout(() => {
            resetGame();
        }, 100);
    }
}

// check all rows
var checkRows = function() {
    var matrix = makeArrayOfArrays(boardMatrix);
    for (var i = 0; i < 3; i++) {
        checkRow(matrix[i]);
    }
}

// check one column
var checkColumns = function() {
    var matrix = makeArrayOfArrays(boardMatrix);
    for (var i = 0; i < 3; i++) {
        var player = matrix[0][i];
        if (player !== null && matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
            document.getElementById('winner').innerHTML = "Player " + player + ' wins!'
            setTimeout(() => {
                resetGame();
            }, 100);
        }
    }
}

// check diagonals
var checkDiagonal = function() {
    if (boardMatrix[0] !== null && boardMatrix[0] === boardMatrix[4] && boardMatrix[4] === boardMatrix[8]) {
        console.log('win')
    }
    if (boardMatrix[2] !== null && boardMatrix[2] === boardMatrix[4] && boardMatrix[4] === boardMatrix[6]) {
        console.log('win')
    }
}

// check win
var checkWin = function() {
    checkRows();
    checkColumns();
    checkDiagonal();
}

// add event listeners
var addListener = function(divID) {
    var square = document.getElementById(divID);
    square.addEventListener('click', () => (toggleSquare(divID)));
}

for (var key in squares) {
    addListener(key);
}


// resetGame is called when reset button is clicked
var resetGame = function() {
    boardMatrix = [null, null, null, null, null, null, null, null, null];
    currentPlayer = 'X';
    nextPlayer = 'O';
    render();
}