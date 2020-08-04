import { createAction, props } from '@ngrx/store';

export const addNewTodoItem = createAction(
  '[todo] Add new todo item',
  props<{ item: string }>()
)


export const loadFromLocalStorage = createAction(
  '[noam] Load',
  props<{ data: any }>()
)
