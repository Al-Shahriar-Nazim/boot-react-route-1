import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const navigate = useNavigate()
    const user = useLoaderData()
    const{name,username,email} = user;
    console.log(user)
    return (
        <div>
            <h3>User details</h3>
            <h4>Name : {name}</h4>
            <p>User name :{username}</p>
            <p><small>Email :{email}</small></p>
            <button onClick={()=>navigate(-1)}>Back of</button>
        </div>
    );
};

export default UserDetails;