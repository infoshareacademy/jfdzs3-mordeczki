import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Menu from '../../components/Menu/Menu.component';
import Tab from '../../components/Tab/Tab.component';

class Tabs extends Component {
    render() {
        return ( 
            <div>
                <Header name="Dzial Tabs" />
                <Menu />
                <Tab />
                <Footer name="Footer" />
            </div>
            )
        
    }
}

export default Tabs;