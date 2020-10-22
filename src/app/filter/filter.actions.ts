import { createAction, props } from '@ngrx/store';
import { type } from 'os';

export type validFilters = 'all' | 'pendings' | 'completed';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: validFilters }>()
);
