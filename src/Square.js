import React from 'react';

export default class Square extends React.Component {
    render() {
        return(
            <button 
                className={this.props.cName} 
                onClick={this.props.onClick} >
            {this.props.value}
            </button>
        );
    }
}