import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Menu.component.css';

class Menu extends PureComponent {

    state = {
        isFixed : false,
    };

    showMenu = () => {
        if (window.scrollY > 600 && !this.state.isFixed) {
            this.setState({ isFixed: true })
        } else if (window.scrollY <+ 600 && this.state.isFixed) {
            this.setState({ isFixed: false })
        } 
    }

    componentDidUpdate() {
      //  console.log('Komponent has been mounted: ', this.state.isFixed);
      }


    componentDidMount() {
       // console.log('Komponent has been mounted: ', this.state.isFixed);
        document.addEventListener('scroll', this.showMenu);
      }

    render() {
        return ( 
            <div className={ this.state.isFixed ? 'navigationFixed' : 'navigation'}>
                <Link to="/">Start</Link><br />
                <Link to="about">About us</Link><br/>
                <Link to="count">Count</Link><br/>
                <Link to="tabs">Tabs</Link><br/>
                <Link to="contact">Contact</Link><br/>
            </div>
        )
    }
}

export default Menu;