class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFrame: 0,
            ballNumber: 1,
            inStrikeMode: false,
            inSpareMode: false,
            roundScores: [[10, 10, 10], [3, 6], [4, 4], [5, 4], [7, 3, 4], [4, 2], [2, 3], [4, 2], [7, 2], [3, 3]],
            pinsRemaining: 10
        };
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                null,
                React.createElement(PinSelection, { pinsRemaining: this.state.pinsRemaining })
            ),
            React.createElement(
                "div",
                null,
                React.createElement(ScoreBoard, { roundScores: this.state.roundScores })
            ),
            React.createElement(
                "div",
                null,
                React.createElement(CurrentScore, { roundScores: this.state.roundScores })
            )
        );
    }
}

// var Board = function(board) {
//     return (
//         <div>{board}</div>
//     );
// }

var CurrentScore = function ({ roundScores }) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "Current Score"
        ),
        React.createElement(
            "div",
            null,
            _.reduce(_.flatten([roundScores]), (a, b) => a + b)
        )
    );
};
var ScoreBoard = function ({ roundScores }) {
    return React.createElement(
        "table",
        { id: "scoreboard" },
        React.createElement(
            "th",
            null,
            "Rounds"
        ),
        React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                "# 1"
            ),
            React.createElement(
                "td",
                null,
                "# 2"
            ),
            React.createElement(
                "td",
                null,
                "# 3"
            ),
            React.createElement(
                "td",
                null,
                "# 4"
            ),
            React.createElement(
                "td",
                null,
                "# 5"
            ),
            React.createElement(
                "td",
                null,
                "# 6"
            ),
            React.createElement(
                "td",
                null,
                "# 7"
            ),
            React.createElement(
                "td",
                null,
                "# 8"
            ),
            React.createElement(
                "td",
                null,
                "# 9"
            ),
            React.createElement(
                "td",
                null,
                "# 10"
            )
        ),
        React.createElement(
            "tr",
            null,
            React.createElement(ScoreBoardRow, { cell: roundScores })
        )
    );
};

var ScoreBoardRow = function ({ cell }) {
    var scores = cell.map(score => React.createElement(
        "td",
        null,
        score + ' '
    ));
    return scores;
};

var PinSelection = function ({ pinsRemaining }) {
    var selectionArray = [[], [], [], []];
    for (var i = 0; i <= pinsRemaining; i++) {
        if (i <= 2) {
            selectionArray[0].push(i);
        } else if (i <= 5) {
            selectionArray[1].push(i);
        } else if (i <= 8) {
            selectionArray[2].push(i);
        } else if (i <= 10) {
            selectionArray[3].push(i);
        }
    }
    var rowBuild = selectionArray.map(row => React.createElement(PinSelectionRow, { cell: row }));

    return React.createElement(
        "table",
        { id: "selection" },
        selectionArray.map(row => React.createElement(
            "tr",
            null,
            React.createElement(PinSelectionRow, { rows: row })
        ))
    );
    // display pins available to hit
    // if ballNumber === 1: there are up to 10 pins
    // if after selection pinsRemaining = 0, 
};

var PinSelectionRow = function ({ rows }) {
    console.log(rows);
    var keypad = rows.map(row => React.createElement(
        "td",
        null,
        row
    ));
    return keypad;
};

var CellSelect = function ({ cell }) {
    var cells = { cell };

    return cells;
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