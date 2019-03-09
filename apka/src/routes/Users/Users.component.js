import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Menu from '../../components/Menu/Menu.component';
import UserList from '../../components/UserList/usersList.component';

class Users extends Component {
    render() {
        return (
            <div>
                <Header name="Dzial Users" />
                <Menu />
                <p>Identyfikator usera to: {this.props.match.params.id}, 
                a jego Imie to: {this.props.match.params.name}</p>
                <UserList />
                <Footer name="Footer" />
            </div>
        )

    }
}

export default Users;