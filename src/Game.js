import React, {useState} from 'react';
import Board from './Board';

function Game(props) {
        const [details, setDetails] = useState({
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        });

    const handleClick = (i) => {
        const history = details.history.slice(0, details.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = details.xIsNext ? 'X' : 'O';
        setDetails({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !details.xIsNext,
        })
    }

    const jumpTo = (step) => {
        setDetails({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    
    const restart = () => {
        setDetails({
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        });
    }
    
    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [squares[a], [a, b, c]];
          }
        }
        return null;
      }

    const render = () => {
        const history = details.history;
        const current = history[details.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}><button onClick={() => jumpTo(move)}>{desc}</button></li>
            );
        });
        let status;
        let finish;
        let makeYellow;
        if(winner) {
            status = 'Winner: ' + winner[0];
            finish = 'Game Over';
            makeYellow = winner[1];
        } else {
            status = 'Next player: ' + (details.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                <Board 
                    squares = {current.squares}
                    yellow = {makeYellow}
                    onClick={(i) => handleClick(i)}
                />
                </div>
                <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
                <div>{finish}</div>
                <button onClick={() => {restart()}}>Restart</button>
                </div>
            </div>
        );
    }
    return render();
}

export default Game;