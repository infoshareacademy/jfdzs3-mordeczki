import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Menu from '../../components/Menu/Menu.component';

class About extends Component {
    render() {
        return ( 
            <div>
                <Header name="Dzial about" />
                <Menu />
                <p>Zawartosc działu about</p>
                <Footer name="Footer" />
            </div>
            )
        
    }
}

export default About;