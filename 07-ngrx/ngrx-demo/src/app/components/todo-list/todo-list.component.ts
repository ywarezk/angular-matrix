import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'matrix-todo-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task}}
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListComponent implements OnInit {
  tasks$: Observable<string[]> = this._store.pipe(
    map((state: any) => state.todo.tasks)
  )

  constructor(private _store: Store) { }

  ngOnInit() { }
}
