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
render();

// Controller




var toggleSquare = function() {
    // input the player's piece in the square that was clicked on
    var tempPlayer = '';
    var square = document.getElementById("square-1");
    square.innerHTML = currentPlayer;
    tempPlayer = currentPlayer;
    currentPlayer = nextPlayer;
    nextPlayer = tempPlayer;
  }

// Player X starts first
// app detects win or tie and displays appropriate message 
// button resets new round of gameplay

// event handler to toggleSquare
// toggleSquare takes in a player and toggles the square that is clicked on 
// while the game is not over it concludes the function by changing the event handler to toggle square to other player's piece







toggleSquare();
// event handler



var resetGame = function() {
    // grab all elements on table
    // change innerHTML to be ""
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
}

// resetGame();
