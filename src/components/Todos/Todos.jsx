import React, { use } from 'react';
import Todo from '../Todo/Todo';
// import { useLoaderData } from 'react-router';

const Todos = ({todoPromised}) => {
    // const todo = useLoaderData()
    // console.log(todo)
    const todos = use(todoPromised);
    // console.log(todos)
    return (
        <div>
            {
                todos.map(todo =><Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Todos;