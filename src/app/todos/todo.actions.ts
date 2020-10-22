import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create', props<{ text: string }>());
export const check = createAction('[TODO] Check', props<{ id: number }>());
export const edit = createAction(
  '[TODO] Edit',
  props<{ text: string; id: number }>()
);
export const erase = createAction('[TODO] Delete', props<{ id: number }>());
export const checkAll = createAction(
  '[TODO] Check All',
  props<{ completed: boolean }>()
);
export const eraseAll = createAction('[TODO] Erase All');
