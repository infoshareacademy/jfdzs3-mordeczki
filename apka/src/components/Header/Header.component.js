import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.component.css';

class Header extends Component {

    static propTypes = {
        name : PropTypes.string,
    }
    static defaultProps = {
        name : "Jestem difultowym naglowiem",
    }

    render() {
        return <div className="header_block"> {this.props.name } {this.props.children }</div>;
    }
}

export default Header;