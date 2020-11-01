import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "./actionTypes";
import { TodoItem } from "../Interfaces/shared";

const initialState: TodoItem[] = [
  //{ id: 1, description: "Change the World!", completed: false },
];

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      let newState = [...state];
      newState.push({
        id: state.length + 1,
        description: action.payload.description,
        completed: false,
      });
      return newState;
    }
    case TOGGLE_COMPLETED: {
      let newState = [...state];
      let item = newState.find((x) => x.id === action.payload.id);
      if (item) {
        item.completed = !item.completed;
      }
      return newState;
    }
    case DELETE_TODO: {
      let newState = state.filter(x => x.id !== action.payload.id);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default todos;
