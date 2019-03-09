import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class UserList extends Component {

    constructor(props) {
        super(props);
        this.usersArray = [
            { name: "Marcin", id: 666 },
            { name: "Sylwia", id: 123 },
            { name: "Amelia", id: 544 }
        ]
    }



    render() {
        return (
            <div>
                {this.usersArray.map((person) => (
                    <Link to={`/users/${person.id}/${person.name}`}>{person.name}</Link>
                ))}
            </div>);
    }
}

export default UserList;