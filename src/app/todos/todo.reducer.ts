import { createReducer, on } from '@ngrx/store';
import { check, checkAll, create, edit, erase, eraseAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Defeat Thanos'),
  new Todo('Build another ironman suit'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(check, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { text, id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(erase, (state, { id }) => state.filter((todo) => todo.id != id)),

  on(checkAll, (state, { completed }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed,
      };
    });
  }),

  on(eraseAll, (state) => {
    return state.filter((todo) => !todo.completed);
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
