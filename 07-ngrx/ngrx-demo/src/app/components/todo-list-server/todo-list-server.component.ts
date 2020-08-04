import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityCollectionServiceFactory, EntityCollectionService} from '@ngrx/data';

@Component({
  selector: 'matrix-todo-list-server',
  template: `
    <h1>todo list from server</h1>
    <ul>
      <li *ngFor="let task of taskDataCollection.entities$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListServerComponent implements OnInit {
  taskDataCollection: EntityCollectionService<any>;

  constructor(factory: EntityCollectionServiceFactory) {
    this.taskDataCollection = factory.create('Task');
  }

  ngOnInit() {
    // localhost:4200/api/task
    setTimeout(() => {
      this.taskDataCollection.getAll();
    }, 1000)

  }
}
