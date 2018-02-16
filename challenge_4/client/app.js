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
        return (
            <div>
              <div><PinSelection pinsRemaining={this.state.pinsRemaining} bowl={this.bowl.bind(this)}/></div>
              <div><ScoreBoard roundScores={this.state.roundScores}/></div>
              <div><CurrentScore roundScores={this.state.roundScores}/></div>
            </div>
        );
    }
    bowl(numPins) {

        console.log('ball number', this.state.ballNumber);
        var frame = this.state.currentFrame;
        console.log('frame', frame);
        // handle strikes
        if ((this.state.pinsRemaining - numPins) === 0 && this.state.ballNumber === 1) {
            var strikes = this.state.strikeIndexes.slice();
            strikes.push(frame);
            this.setState({strikeIndexes: strikes});
            this.strikeHandler(strikes)
        }
        // handle spares
        if ((this.state.pinsRemaining - numPins) === 0 && this.state.ballNumber === 2) {
            var spares = this.state.spareIndexes.slice();
            spares.push(frame);
            this.setState({spareIndexes: spares});
            this.spareHandler(spares)
        }

        // update the scoreboard with numPins otherwise
        var updatedScores = this.state.roundScores.slice();
        updatedScores[frame - 1].push(numPins);
        this.setState({roundScores: updatedScores});
        this.setState({pinsRemaining: this.state.pinsRemaining-numPins});
        this.setState({ballNumber: ++this.state.ballNumber})

        // if there are no pins remaining or ball number is greater than 2 reset the pins and move to next frame
        if (this.state.pinsRemaining-numPins === 0 || this.state.ballNumber > 2) {
            this.setState({currentFrame: ++this.state.currentFrame})
            this.setState({pinsRemaining: 10})
            this.setState({ballNumber: 1})
        }
        console.log('pins remaining ', this.state.pinsRemaining-numPins)
        console.log('ball number', this.state.ballNumber);

        console.log('strikes', this.state.strikeIndexes)

    }
    strikeHandler(strikes) {
        console.log('strike handlee', strikes)

    }
    spareHandler(spares) {
        console.log('spare handler', spares);
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
