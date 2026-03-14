import React from 'react';
import "./Todo.css"
import { Link } from 'react-router';

const Todo = ({todo}) => {
    console.log(todo)
    const{title,id}=todo;
    return (
        <div className='style'>
            <h3>{title}</h3>
            <Link to={`/todos/${id}`}>
            Display All 
            </Link>
        </div>
    );
};

export default Todo;