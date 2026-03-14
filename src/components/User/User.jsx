import React from 'react';
import "./user.css"
import { Link } from 'react-router';

const User = ({user}) => {
    // console.log(user)
    const {name,email,id} = user;
    return (
        <div className='style'>
            <h3>{name}</h3>
            <p><small>E-mail :{email}</small></p>
            <Link to={`/users/${id}`}>
            show details
            </Link>
        </div>
    );
};

export default User;