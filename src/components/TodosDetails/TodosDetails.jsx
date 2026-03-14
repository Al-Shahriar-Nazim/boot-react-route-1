import React from 'react';
import { useLoaderData } from 'react-router';

const TodosDetails = () => {
    const todo = useLoaderData()
    const {title,completed}= todo;

    return (
        <div>
            <h3>Todo details section</h3>
            <h4>{title}</h4>
            <p><small>Married :{completed}</small></p>

        </div>
    );
};

export default TodosDetails;