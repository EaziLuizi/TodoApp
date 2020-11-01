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
      <div className="App"></div>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;
