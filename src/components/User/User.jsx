import React from 'react';
import "./user.css"
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {
    // console.log(user)
    const navigate = useNavigate()
    const {name,email,id} = user;
    const handleNavigate=()=>{
        navigate(`/users/${id}`)
    }
    return (
        <div className='style'>
            <h3>{name}</h3>
            <p><small>E-mail :{email}</small></p>
            <Link to={`/users/${id}`}>
            show details
            </Link>
            <button onClick={()=>handleNavigate()}>Details of</button>
        </div>
    );
};

export default User;