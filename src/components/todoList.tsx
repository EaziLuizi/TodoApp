import { connect, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { TodoItem } from "../Interfaces/shared";
import store from "../redux/store";
import { toggleCompleted } from "../redux/actions";

function TodoList() {
  const state = store.getState();
  const dispatch = useDispatch();

  const items = state.map((item: TodoItem) => (
    <div
      key={item.id}
      onClick={() => dispatch(toggleCompleted(item.id))}
      className={`todo-item ${item.completed ? "completed" : ""}`}
    >
      <div>{item.description}</div>
    </div>
  ));

  return <div>{items}</div>;
}

const mapStateToProps = (state: TodoItem[]) => {
  return { state };
};

export default connect(mapStateToProps)(TodoList);
