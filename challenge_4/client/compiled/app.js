class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFrame: 1,
            ballNumber: 1,
            inStrikeMode: false,
            inSpareMode: false,
            roundScores: [[10], [3, 6], [4, 4], [5, 4], [7, 3, 4], [4, 2], [2, 3], [4, 2], [7, 2], [3, 3]],
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
                React.createElement(PinSelection, { pinsRemaining: this.state.pinsRemaining, bowl: this.bowl.bind(this) })
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
    bowl(numPins) {
        var frame = this.state.currentFrame;
        var updatedScores = this.state.roundScores.slice();
        updatedScores[frame - 1].push(numPins);

        this.setState({ roundScores: updatedScores });

        console.log(this.state.inStrikeMode);
        // this.setState({pinsRemaining: this.pinsRemaining - numPins})
    }
}

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

var PinSelection = function ({ pinsRemaining, bowl }) {
    // bowl(3);
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

// make sure to put components in correct order (ReactDOM.render should always be bottom)

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));