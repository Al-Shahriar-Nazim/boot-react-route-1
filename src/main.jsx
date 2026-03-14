import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Users from "./components/Users/Users.jsx";
import Todos from "./components/Todos/Todos.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import TodosDetails from "./components/TodosDetails/TodosDetails.jsx";
import Comments from "./components/Comments/Comments.jsx";
import CommentsDetails from "./components/CommentsDetails/CommentsDetails.jsx";

const todoPromised = fetch("https://jsonplaceholder.typicode.com/todos").then(
  (res) => res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users/:userId",
        Component: UserDetails,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: "/todo",
        // loader:()=>fetch(""),
        // Component:Todos
        element: (
          <Suspense fallback={<span>Loading......</span>}>
            <Todos todoPromised={todoPromised}></Todos>
          </Suspense>
        ),
      },
      {
        path: "todos/:todoId",
        Component: TodosDetails,
        loader: ({ params }) => {
          console.log(params.todoId);
          return fetch(
            `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
          );
        },
      },
      {
        path: "/comment",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        Component: Comments,
      },
      {
        path: "/comments/:commentId",
        Component: CommentsDetails,
        loader: ({ params }) => {
          console.log(params.commentId);
          const commentFetch = fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.commentId}`,
          );
          return commentFetch;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
