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

const todoPromised = fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json())

const router = createBrowserRouter([
 {
  path:"/",
  Component:Root,
  children:[
    {index:true,Component:Home},
    {
      path:"/about",
      Component:About
    },
    {
      path:"/users",
      loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
      Component:Users
    },
    {
      path:"/todo",
      // loader:()=>fetch(""),
      // Component:Todos
      element:<Suspense fallback={<span>Loading......</span>}>
        <Todos todoPromised={todoPromised}></Todos>
      </Suspense>
    }
  ]
 }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
