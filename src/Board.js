import React from 'react';
import Square from './Square';

export default class Board extends React.Component {

    renderSquare(i) {
        let cName = "square";
        if(this.props.yellow) {
            for(let x =0; x < this.props.yellow.length; x++) {
                if(i === this.props.yellow[x]) {
                    cName = "yellow";
                }
            }
        }
        return (
            <Square 
                value={this.props.squares[i]}
                cName={cName}
                onClick={() => this.props.onClick(i)}
            />);
    }

    render() {
        return (
        <div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}