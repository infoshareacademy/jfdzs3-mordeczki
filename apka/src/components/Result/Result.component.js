import React, { Component } from 'react';
import './Result.component.css';

class Result extends Component {
    render() {
        return <div className="result_block">Moj wynik: {this.props.result }</div>;
    }
}

export default Result;