import React, { Component } from 'react';
import './Button.component.css';

class Button extends Component {
    render() {
        return <div className="button_block" 
        onClick={ this.props.action }>{ this.props.name }</div>;
    }
}

export default Button;