import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="container">
          <h1 className="heading">my todo list</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
