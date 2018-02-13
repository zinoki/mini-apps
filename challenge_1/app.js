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

var render = function() {
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = boardMatrix[i];
    }
}

var toggleSquare = function(divID) {
    boardMatrix[squares[divID]] = currentPlayer;
    var tempPlayer = '';
    tempPlayer = currentPlayer;
    currentPlayer = nextPlayer;
    nextPlayer = tempPlayer;
    render()
}

// add event listeners
var addListener = function(divID) {
    var square = document.getElementById(divID);
    square.addEventListener('click', () => (toggleSquare(divID)));
}
addListener('square_0')
addListener('square_1')
addListener('square_2')
addListener('square_3')
addListener('square_4')
addListener('square_5')
addListener('square_6')
addListener('square_7')
addListener('square_8')







var resetGame = function() {
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
}

