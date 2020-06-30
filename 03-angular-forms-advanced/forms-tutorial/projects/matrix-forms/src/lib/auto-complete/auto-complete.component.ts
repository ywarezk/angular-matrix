import { Component, OnInit, forwardRef } from '@angular/core';
import { TaskService } from '../task.service';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Task } from '../task';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'matrix-auto-complete',
  template: `
    <h1>AutoComplete component</h1>

    <input 
      (blur)="touchedCb()" 
      type="search" 
      placeholder="Search..." 
      [formControl]="inputControl" />
    <ul>
      <li *ngFor="let task of items$ | async" (click)="selectTask(task)">
        {{task.title}}
      </li>
    </ul>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AutoCompleteComponent
    }
  ]
})
export class AutoCompleteComponent implements ControlValueAccessor, OnInit {
  inputControl = new FormControl();

  items$: Observable<Task[]>;

  selectedId: number;
  private _changeCb: any;
  touchedCb: any;

  constructor(private _taskService: TaskService) { }

  writeValue(obj: Task): void {
    this.selectedId = obj?.id;  
  }
  
  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.touchedCb = fn;
  }

  ngOnInit() {
    this.items$ = this.inputControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap(search => this._taskService.searchTasks(search))
    )
  }

  selectTask(item: Task) {
    this._changeCb(item);
  }
}
