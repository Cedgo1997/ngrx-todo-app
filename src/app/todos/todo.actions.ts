import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create', props<{ text: string }>());
export const check = createAction('[TODO] Check', props<{ id: number }>());
export const edit = createAction('[TODO] Edit', props<{ text: string, id: number }>());
