import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "./actionTypes";

export const addTodo = (description: string) => ({
  type: ADD_TODO,
  payload: {
    description,
  },
});

export const toggleCompleted = (id: number) => ({
  type: TOGGLE_COMPLETED,
  payload: {
    id,
  },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});