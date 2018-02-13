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




// View
// renders the board based on the boardMatrix array
var render = function() {
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = boardMatrix[i];
    }
    // if iswin
      // display Player __ wins
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
var makeArrayOfArrays = function(array) {
    var matrix = [];
    for (var i = 0; i < 3; i++) {
        matrix.push([array[0 + i], array[1 + i], array[2 + i]]);
    }
    return matrix;
}

// // check row is win
// var checkRow = function(array) {

// }
// var checkRows = function(boardMatrix) {
//     var matrix = makeArrayOfArrays(boardMatrix);
//     for (var i = 0; i < matrix.length; i++) {

//     }
// }



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

