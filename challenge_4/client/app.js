class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFrame: 1,
            ballNumber: 1,
            inStrikeMode: false,
            inSpareMode: false,
            roundScores: [[], [], [], [], [], [], [], [], [], []],
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
        this.setState({pinsRemaining: this.state.pinsRemaining-numPins});
        if (this.state.pinsRemaining === 0) {
            console.log('yes')
            this.setState({currentFrame: ++this.state.currentFrame})
            this.setState({pinsRemaining: 10})
        }

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
        {selectionArray.map((row, index) => 
          <tr><PinSelectionRow rows={row} bowl={bowl} rowIndex={index}/></tr>
        )}
        
        </table>
    )
    // display pins available to hit
    // if ballNumber === 1: there are up to 10 pins
    // if after selection pinsRemaining = 0, 
}

var PinSelectionRow = function({rows, bowl, pinsRemaining, rowIndex}) {
    var keypad = rows.map((row, index) => 
    <td onClick={()=> bowl(index+rowIndex*3)}>{row}</td>);
    return (
        keypad
    );
}


// make sure to put components in correct order (ReactDOM.render should always be bottom)

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
