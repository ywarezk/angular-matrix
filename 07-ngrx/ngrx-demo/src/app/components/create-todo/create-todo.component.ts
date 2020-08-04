import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNewTodoItem } from '../../ngrx/actions/todo.actions';

@Component({
  selector: 'matrix-create-todo',
  template: `
    <form (submit)="addTodo($event)">
      <input type="text" (input)="newTodo = $event.target.value" />
      <button>Add item to todo list</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateTodoComponent {
  newTodo: string = '';

  constructor(private _store: Store) {}

  addTodo(event) {
    event.preventDefault();
    this._store.dispatch(addNewTodoItem({item: this.newTodo}));
  }
}
