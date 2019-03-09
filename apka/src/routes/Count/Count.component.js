import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Menu from '../../components/Menu/Menu.component';
import Counter from '../../components/Counter/Counter.component';

class Count extends Component {
    render() {
        return ( 
            <div>
                <Header name="Dzial Count" />
                <Menu />
                <Counter />
                <Footer name="Footer" />
            </div>
            )
        
    }
}

export default Count;