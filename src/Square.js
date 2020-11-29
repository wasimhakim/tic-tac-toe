import React from 'react';

function Square(props) {
        return(
            <button 
                className={props.cName} 
                onClick={props.onClick} >
            {props.value}
            </button>
        );
}

export default Square;