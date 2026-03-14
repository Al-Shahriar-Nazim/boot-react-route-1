import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    const{name,username,email} = user;
    console.log(user)
    return (
        <div>
            <h3>User details</h3>
            <h4>Name : {name}</h4>
            <p>User name :{username}</p>
            <p><small>Email :{email}</small></p>
        </div>
    );
};

export default UserDetails;