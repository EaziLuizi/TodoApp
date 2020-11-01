import { stringify } from "querystring";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

function AddTodo() {
  const defaultState = "";
  const [state, setState] = useState(defaultState);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.trim() === "") {
      return;
    }
    dispatch(addTodo(state));
    setState(defaultState);
  };

  return (
    <div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          value={state}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
