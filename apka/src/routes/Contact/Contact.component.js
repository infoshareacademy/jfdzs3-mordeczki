import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Menu from '../../components/Menu/Menu.component';

class Contact extends Component {
    render() {
        return ( 
            <div>
                <Header name="Dzial kontakt" />
                <Menu />
                <p>Zawartosc działu kontakt</p>
                <Footer name="Footer" />
            </div>
        )
    }
}

export default Contact;