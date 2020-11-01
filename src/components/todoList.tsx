import { connect, useDispatch } from "react-redux";
import React from "react";
import { TodoItem } from "../Interfaces/shared";
import store from "../redux/store";
import Todo from "./todo";

function TodoList() {
  const state = store.getState();

  const items = state.map((item: TodoItem) => (
    <Todo key={item.id} todo={item} />
  ));

  return <div className="todo-list-container">{items}</div>;
}

const mapStateToProps = (state: TodoItem[]) => {
  return { state };
};

export default connect(mapStateToProps)(TodoList);
