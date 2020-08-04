import { createReducer, on } from '@ngrx/store';
import { addNewTodoItem } from '../actions/todo.actions';

const initialState = {
  tasks: [
    'walk with piglet',
    'Play with sweetness'
  ]
}

const featureReducer = createReducer(
  initialState,
  on(addNewTodoItem, (state, action) => {
    return {
      ...state,
      tasks: [...state.tasks, action.item]
    }
  })
);

export function todoReducer(state, action) {
  return featureReducer(state, action);
}
