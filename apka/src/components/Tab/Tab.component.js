import React, { Component } from 'react';
import './Tab.component.css';



const x = [{
    id : 1,
    name : 'Tab 1',
    text : 'Zawartosc zakladki 1'},
    {
        id : 2,
        name : 'Tab 2',
        text : 'Zawartosc zakladki 2'},
        {
            id : 3,
            name : 'Tab 3',
            text : 'Zawartosc zakladki 3'}
]

class Tab extends Component {




    state = {
        activeTab : null,
    };

    handleClick = (active) => {
            this.setState({ activeTab: 1 })
    }

    componentDidMount() {
        console.log('Komponent has been mounted: ', this.state);
      }
    
      componentDidUpdate() {
        console.log('Komponent has been updated: ', this.state);
      }

    render() {
        return (
            <div>
            <button onClick={ this.handleClick }>Tab 1</button>
            <p>{ x}</p>
            </div>
        )
    }
}

export default Tab;