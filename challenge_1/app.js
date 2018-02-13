// Model
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


// render()


var toggleSquare = function(divID) {
    var square = document.getElementById(divID);
    var tempPlayer = '';
    // var square = document.getElementById("square-1");
    console.log('hi')
    square.innerHTML = currentPlayer;
    tempPlayer = currentPlayer;
    currentPlayer = nextPlayer;
    nextPlayer = tempPlayer;
    // render()
}

// add event listeners
var addListener = function(divID) {
    var square = document.getElementById(divID);
    square.addEventListener('click', () => (toggleSquare(divID)));
}
addListener('square-0')
addListener('square-1')
addListener('square-2')
addListener('square-3')
addListener('square-4')
addListener('square-5')
addListener('square-6')
addListener('square-7')
addListener('square-8')







var resetGame = function() {
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
}

