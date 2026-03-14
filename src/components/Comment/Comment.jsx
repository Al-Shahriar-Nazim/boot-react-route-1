import React from 'react';
import { Link } from 'react-router';

const Comment = ({comment}) => {
    const {name,email,id} =comment;
    const style ={
        border:"1px solid steelblue",
        margin:"10px",
        padding:"20px",
        borderRadius:"20px"
    }
    return (
        <div style={style}>
            <h3>{name}</h3>
            <p><small>E-mail :{email}</small></p>
            <button>
                <Link to={`/comments/${id}`}>Show Details</Link>
            </button>
        </div>
    );
};

export default Comment;