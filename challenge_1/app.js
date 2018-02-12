var player_x = 'X';
var player_o = 'O';

var currentPlayer = player_x;

// Player X starts first
// app detects win or tie and displays appropriate message 
// button resets new round of gameplay

// event handler to toggleSquare
// toggleSquare takes in a player and toggles the square that is clicked on 
// while the game is not over it concludes the function by changing the event handler to toggle square to other player's piece



var toggleSquare = function(player) {
  // input the player's piece in the square that was clicked on
  var square = document.getElementById("square-1");
  square.innerHTML = 'Y';
}



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
