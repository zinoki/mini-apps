class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frame: 0,
            playerScore: 0,
            strikeBallCounter: 0,
            pinsRemaining: 10,
            ballNumber: 1,
            board: [[null, null, 1, null, null, null, null], [null, null, 1, null, 1, null, null], [null, 1, null, 1, null, 1, null], [1, null, 1, null, 1, null, 1]]
        };
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(Board, { board: this.state.board })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(PinSelection, { pinsRemaining: this.state.pinsRemaining })
            )
        );
    }
}

var Board = function (props) {
    return React.createElement(
        'div',
        null,
        props.board
    );
};

var PinSelection = function (props) {
    return React.createElement(
        'div',
        null,
        props.pinsRemaining
    );
    // display pins available to hit
    // if ballNumber === 1: there are up to 10 pins
    // if after selection pinsRemaining = 0, 
};

/*
    1
   2 3 
  4 5 6
 7 8 9 10
10 pins

10 frames (turns)
each frame represents one turn for a bowler
in a frame a bowler is allowed to roll the ball up to two times
two chances to knock down all ten pins
if you fail to knock down all ten pins in one frame, this is an openframe
and scores the exact number of pins you knock down
if you knock down all ten pins with two balls, this is a spare
this scores 10 plus number of pins knocked down with next ball
if you knock down all ten pins with one ball this is a strike
this scores 10 plus number of pins knocked down with next two balls (could be up to 30 if two more strikes)
perfect game is 300 points
*/

// make sure to put components in correct order (ReactDOM.render should always be bottom)

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));