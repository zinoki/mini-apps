class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFrame: 1,
            ballNumber: 1,
            strikeIndexes: [],
            spareIndexes: [],
            roundScores: [[], [], [], [], [], [], [], [], [], []],
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
                React.createElement(PinSelection, { pinsRemaining: this.state.pinsRemaining, bowl: this.bowl.bind(this) })
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
    bowl(numPins) {
        console.log('ball number', this.state.ballNumber);
        var frame = this.state.currentFrame;
        console.log('frame', frame);
        var updatedScores = this.state.roundScores.slice();
        updatedScores[frame - 1].push(numPins);
        this.setState({ roundScores: updatedScores });
        this.setState({ pinsRemaining: this.state.pinsRemaining - numPins });
        this.setState({ ballNumber: ++this.state.ballNumber });
        if (this.state.pinsRemaining - numPins === 0) {
            console.log('yes');
            this.setState({ currentFrame: ++this.state.currentFrame });
            this.setState({ pinsRemaining: 10 });
            this.setState({ ballNumber: 1 });
        }
    }
}

var CurrentScore = function ({ roundScores }) {
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
            _.reduce(_.flatten([roundScores]), (a, b) => a + b)
        )
    );
};
var ScoreBoard = function ({ roundScores }) {
    return React.createElement(
        'table',
        { id: 'scoreboard' },
        React.createElement(
            'th',
            null,
            'Rounds'
        ),
        React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                '# 1'
            ),
            React.createElement(
                'td',
                null,
                '# 2'
            ),
            React.createElement(
                'td',
                null,
                '# 3'
            ),
            React.createElement(
                'td',
                null,
                '# 4'
            ),
            React.createElement(
                'td',
                null,
                '# 5'
            ),
            React.createElement(
                'td',
                null,
                '# 6'
            ),
            React.createElement(
                'td',
                null,
                '# 7'
            ),
            React.createElement(
                'td',
                null,
                '# 8'
            ),
            React.createElement(
                'td',
                null,
                '# 9'
            ),
            React.createElement(
                'td',
                null,
                '# 10'
            )
        ),
        React.createElement(
            'tr',
            null,
            React.createElement(ScoreBoardRow, { cell: roundScores })
        )
    );
};

var ScoreBoardRow = function ({ cell }) {
    var scores = cell.map(score => React.createElement(
        'td',
        null,
        score + ' '
    ));
    return scores;
};

var PinSelection = function ({ pinsRemaining, bowl }) {
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
        'table',
        { id: 'selection' },
        selectionArray.map((row, index) => React.createElement(
            'tr',
            null,
            React.createElement(PinSelectionRow, { rows: row, bowl: bowl, rowIndex: index })
        ))
    );
};

var PinSelectionRow = function ({ rows, bowl, pinsRemaining, rowIndex }) {
    var keypad = rows.map((row, index) => React.createElement(
        'td',
        { onClick: () => bowl(index + rowIndex * 3) },
        row
    ));
    return keypad;
};

// make sure to put components in correct order (ReactDOM.render should always be bottom)

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));