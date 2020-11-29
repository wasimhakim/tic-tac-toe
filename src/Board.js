import React from 'react';
import Square from './Square';

function Board(props) {

    const renderSquare = (i) =>  {
        let cName = "square";
        if(props.yellow) {
            for(let x =0; x < props.yellow.length; x++) {
                if(i === props.yellow[x]) {
                    cName = "yellow";
                }
            }
        }
        return (
            <Square 
                value={props.squares[i]}
                cName={cName}
                onClick={() => props.onClick(i)}
            />);
    };

    const show = () => {
        return (
        <div>
            <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
            <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
        </div>
        );
    }

    return show();
}

export default Board;