import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  searchTasks = (searchStr: string): Observable<Task[]> => {
    return this._http.get<Task[]>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchStr}`);
  }
}
