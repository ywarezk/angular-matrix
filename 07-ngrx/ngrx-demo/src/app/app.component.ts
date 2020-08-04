import { Component, ChangeDetectionStrategy } from '@angular/core';
// import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Redux</h1>

    <matrix-todo-list-server></matrix-todo-list-server>

    <!-- <matrix-todo-list></matrix-todo-list>

    <matrix-create-todo></matrix-create-todo> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
