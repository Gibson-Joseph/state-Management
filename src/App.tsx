import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddTodo } from "./Todos/AddTodos";
// import { ListTodos } from "./Todos/ListTodos";
import Todos from "./Todos/Todos";

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
