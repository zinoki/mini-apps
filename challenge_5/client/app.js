var boardMaker = function() {
    var board = [
        [null, 'black', null, 'black', null, 'black', null, 'black'],
        ['black', null, 'black', null, 'black', null, 'black', null],
        [null, 'black', null, 'black', null, 'black', null, 'black'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['white', null, 'white', null, 'white', null, 'white', null],
        [null, 'white', null, 'white', null, 'white', null, 'white'],
        ['white', null, 'white', null, 'white', null, 'white', null]
    ]
    return board;
}



var checkerBoard = boardMaker();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: checkerBoard
        };
    }
    render() {
        console.log(this.state.board);
        return (
            <div>
        <div>hiiiii</div>
        <Board />
        </div>
        )
    }
}



var Board = function(props) {
    return (
        <div>This is board
            <BoardRow />
        </div>
        
    );
}


var BoardRow = function(props) {
    return (
        <div>This is board row</div>
    )
}








ReactDOM.render(<App />, document.getElementById("app"));