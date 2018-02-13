// Model
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

var boardMatrix = [null, null, null, null, null, null, null, null, null];
var player_x = 'X';
var player_o = 'O';
var currentPlayer = player_x;
var nextPlayer = player_o;




// View
// renders the board based on the boardMatrix array
var render = function() {
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = boardMatrix[i];
    }
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
var isWin = function(boardMatrix) {

}

// check for row win
var isRowWin = function(boardMatrix) {
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
    render();
}

