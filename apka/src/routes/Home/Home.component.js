import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Menu from '../../components/Menu/Menu.component';
import './Home.component.css';

class Home extends Component {




    render() {
        return (
            <div>
                <Header>Dzieckoooo!</Header>
                <Menu />
                <p className="homeContent">Zawartosc działu home</p>
                <Footer name="Footer" />
            </div>
        )

    }
}

export default Home;