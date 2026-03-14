import React from 'react';
import { useLoaderData } from 'react-router';

const CommentsDetails = () => {
    const comment = useLoaderData()
    const{name,email,body} = comment;
    const style ={
        border:"1px solid green",
        margin:'20px',
        padding:"30px",
        borderRadius:"30px",
    }
    return (
        <div style={style}>
            <h3>This is a comment details section</h3>
            <h3>{name}</h3>
            <p>E-mail :{email}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default CommentsDetails;