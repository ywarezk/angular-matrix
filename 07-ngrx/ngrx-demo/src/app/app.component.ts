import { Component, ChangeDetectionStrategy } from '@angular/core';
// import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Redux</h1>

    <nav>
      <ul>
        <li>
          <a routerLink="/">home</a>
        </li>
        <li>
          <a routerLink="/about">about</a>
        </li>
      </ul>
    </nav>

    <!-- <matrix-todo-list-server></matrix-todo-list-server> -->

    <!-- <matrix-todo-list></matrix-todo-list>

    <matrix-create-todo></matrix-create-todo> -->

    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
