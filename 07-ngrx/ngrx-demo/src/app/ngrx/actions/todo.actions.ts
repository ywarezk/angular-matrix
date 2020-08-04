import { createAction, props } from '@ngrx/store';

export const addNewTodoItem = createAction(
  '[todo] Add new todo item',
  props<{ item: string }>()
)
