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
        return (
            <div>
              <div><Board board={this.state.board}/></div>
              <div><PinSelection pinsRemaining={this.state.pinsRemaining}/></div>
              <div><ScoreBoard roundScores={this.state.roundScores}/></div>
              <div><CurrentScore roundScores={this.state.roundScores}/></div>
            </div>
        );
    }
}

var Board = function(props) {
    return (
        <div>{props.board}</div>
    );
}

var CurrentScore = function(props) {
    return (
        <div>
            <h2>Current Score</h2>
            <div>{_.reduce(_.flatten([props.roundScores]), (a, b) => a + b)}</div>
        </div>
    )
}
var ScoreBoard = function(props) {
    return (
        <table>
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
            <tr><ScoreBoardRow cell={props.roundScores} /></tr>
        </table>
    )
}

var ScoreBoardRow = function(props) {
    var row = props.cell;
    var scores = row.map((score) => 
      <td>{score + ' '}</td>)
    return (
        scores
    )
}

var PinSelection = function({pinsRemaining}) {
    var selectionArray = new Array(pinsRemaining).fill(1);
    console.log(selectionArray);
    return (
        <div>{selectionArray}</div>
    )
    // display pins available to hit
    // if ballNumber === 1: there are up to 10 pins
    // if after selection pinsRemaining = 0, 
}



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

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
