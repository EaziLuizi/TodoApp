import React from "react";
import { TodoItem } from "../Interfaces/shared";
import { connect, useDispatch } from "react-redux";
import { toggleCompleted } from "../redux/actions";

function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => dispatch(toggleCompleted(todo.id))}
    >
      <div>{todo.description}</div>
      <div className="todo-item-actions">
        <input
          type="checkbox"
          id={`check-${todo.id}`}
          checked={todo.completed}
          readOnly
        />
        <span
          className="todo-item-delete"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (window.confirm("Are you sure you want to delete this item?")) {
              //todo - implement delete functionality
            }
          }}
        >
          <i className="fa fa-trash"></i>
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: TodoItem) => {
  return { state };
};

export default connect(mapStateToProps)(Todo);
