class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFrame: 0,
            ballNumber: 1,
            inStrikeMode: false,
            inSpareMode: false,
            roundScores: [[10, 10, 10], [3, 6], [4, 4], [5, 3], [7, 3, 4], [4, 2], [2, 3], [4, 2], [7, 2], [3, 3]],
            pinsRemaining: 10
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
            ),
            React.createElement(
                'div',
                null,
                React.createElement(ScoreBoard, { roundScores: this.state.roundScores })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(CurrentScore, { roundScores: this.state.roundScores })
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

var CurrentScore = function (props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Current Score'
        ),
        React.createElement(
            'div',
            null,
            _.reduce(_.flatten([props.roundScores]), (a, b) => a + b)
        )
    );
};
var ScoreBoard = function (props) {
    return React.createElement(
        'table',
        null,
        React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                '1'
            ),
            React.createElement(
                'td',
                null,
                '2'
            ),
            React.createElement(
                'td',
                null,
                '3'
            ),
            React.createElement(
                'td',
                null,
                '4'
            ),
            React.createElement(
                'td',
                null,
                '5'
            ),
            React.createElement(
                'td',
                null,
                '6'
            ),
            React.createElement(
                'td',
                null,
                '7'
            ),
            React.createElement(
                'td',
                null,
                '8'
            ),
            React.createElement(
                'td',
                null,
                '9'
            ),
            React.createElement(
                'td',
                null,
                '10'
            )
        ),
        React.createElement(
            'tr',
            null,
            React.createElement(ScoreBoardRow, { cell: props.roundScores })
        )
    );
};

var ScoreBoardRow = function (props) {
    var row = props.cell;
    var scores = row.map(score => React.createElement(
        'td',
        null,
        score + '|'
    ));
    return scores;
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