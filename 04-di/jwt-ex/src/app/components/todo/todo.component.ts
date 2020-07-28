/**
 * Send a request to the server to grab the todo list
 * Will only work with a valid jwt token
 */

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from '../../task.service';
import { interval, Observable, of } from 'rxjs';
import { mergeMap, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'matrix-todo',
  template: `
    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoComponent implements OnInit {
  tasks$: Observable<any>

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.tasks$ = interval(1000 * 10).pipe(
      mergeMap(() => this._taskService.getTasks()),
      retry()
    )
  }
}
