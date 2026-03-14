import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const TodosDetails = () => {
    const todo = useLoaderData()
    const navigate = useNavigate()
    const {title,completed}= todo;

    return (
        <div>
            <h3>Todo details section</h3>
            <h4>{title}</h4>
            <p><small>Married :{completed}</small></p>
<button onClick={()=>navigate(-1)}>Back Of</button>
        </div>
    );
};

export default TodosDetails;