import { createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [

  new Todo('Save the world'),
  new Todo('Defeat Thanos'),
  new Todo('Build another ironman suit')


];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
