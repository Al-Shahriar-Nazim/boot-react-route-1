import React from 'react';
import "./Todo.css"

const Todo = ({todo}) => {
    console.log(todo)
    return (
        <div className='style'>
            <h3>{todo.title}</h3>
        </div>
    );
};

export default Todo;