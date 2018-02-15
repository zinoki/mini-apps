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
        return (
            <div>
              <div><PinSelection pinsRemaining={this.state.pinsRemaining} bowl={this.bowl.bind(this)}/></div>
              <div><ScoreBoard roundScores={this.state.roundScores}/></div>
              <div><CurrentScore roundScores={this.state.roundScores}/></div>
            </div>
        );
    }
    bowl(numPins) {
        var frame = this.state.currentFrame;
        var updatedScores = this.state.roundScores.slice();
        updatedScores[frame - 1].push(numPins);

        
        this.setState({roundScores: updatedScores});

        console.log(this.state.inStrikeMode);
        // this.setState({pinsRemaining: this.pinsRemaining - numPins})
    }
}


var CurrentScore = function({roundScores}) {
    return (
        <div>
            <h2>Current Score</h2>
            <div>{_.reduce(_.flatten([roundScores]), (a, b) => a + b)}</div>
        </div>
    )
}
var ScoreBoard = function({roundScores}) {
    return (
        <table id="scoreboard">
            <th>Rounds</th>
            <tr>
                <td># 1</td>
                <td># 2</td>
                <td># 3</td>
                <td># 4</td>
                <td># 5</td>
                <td># 6</td>
                <td># 7</td>
                <td># 8</td>
                <td># 9</td>
                <td># 10</td>
            </tr>
            <tr><ScoreBoardRow cell={roundScores} /></tr>
        </table>
    )
}

var ScoreBoardRow = function({cell}) {
    var scores = cell.map((score) => 
      <td>{score + ' '}</td>)
    return (
        scores
    )
}

var PinSelection = function({pinsRemaining, bowl}) {
    // bowl(3);
    var selectionArray = [[], [], [], []];
    for (var i = 0; i <= pinsRemaining; i++) {
        if (i <= 2) {
            selectionArray[0].push(i)
        } else if (i <= 5) {
            selectionArray[1].push(i)
        } else if (i <= 8) {
            selectionArray[2].push(i)
        } else if (i <= 10) {
            selectionArray[3].push(i);
        }
    }

    var rowBuild = selectionArray.map(row => 
    <PinSelectionRow cell={row}/>
        );
        
    return (
        <table id="selection">
        {selectionArray.map(row => 
          <tr><PinSelectionRow rows={row}/></tr>
        )}
        
        </table>
    )
    // display pins available to hit
    // if ballNumber === 1: there are up to 10 pins
    // if after selection pinsRemaining = 0, 
}

var PinSelectionRow = function({rows}) {
    console.log(rows);
    var keypad = rows.map(row => 
    <td>{row}</td>);
    return (
        keypad
    );
}

var CellSelect = function({cell}) {
    var cells = {cell}

    return (
        cells
    )
}


// make sure to put components in correct order (ReactDOM.render should always be bottom)

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
