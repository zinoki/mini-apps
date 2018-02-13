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


var playerScores = {
    O: 0,
    X: 0
}
document.getElementById("score").innerHTML = "Player O: " + playerScores['O'] + " Player X: " + playerScores['X'];


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
        winHandler(player)
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
            winHandler(player);
        }
    }
}

// check diagonals
var checkDiagonal = function() {
    var player = boardMatrix[0];
    if (boardMatrix[0] !== null && boardMatrix[0] === boardMatrix[4] && boardMatrix[4] === boardMatrix[8]) {
        winHandler(player)
    }
    var player = boardMatrix[2];
    if (boardMatrix[2] !== null && boardMatrix[2] === boardMatrix[4] && boardMatrix[4] === boardMatrix[6]) {
        winHandler(player)
    }
}

// check win
var checkWin = function() {
    checkRows();
    checkColumns();
    checkDiagonal();
}

var winHandler = function(player) {
    playerScores[player]++;
    setTimeout(() => {
        resetGame();
    }, 100);
    document.getElementById("score").innerHTML = "Player O: " + playerScores['O'] + " Player X: " + playerScores['X'];
    return playerScores[player]
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