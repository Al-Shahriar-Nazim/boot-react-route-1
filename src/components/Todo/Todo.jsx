import React from 'react';
import "./Todo.css"
import { Link, useNavigate } from 'react-router';

const Todo = ({todo}) => {
    const navigate = useNavigate()
    console.log(todo)
    const{title,id}=todo;
    return (
        <div className='style'>
            <h3>{title}</h3>
            <Link to={`/todos/${id}`}>
            Display All 
            </Link>
            <button onClick={()=>navigate(`/todos/${id}`)}>Details of</button>
        </div>
    );
};

export default Todo;