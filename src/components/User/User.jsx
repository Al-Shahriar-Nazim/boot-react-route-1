import React from 'react';
import "./user.css"

const User = ({user}) => {
    console.log(user)
    const {name,email} = user;
    return (
        <div className='style'>
            <h3>{name}</h3>
            <p><small>E-mail :{email}</small></p>
        </div>
    );
};

export default User;