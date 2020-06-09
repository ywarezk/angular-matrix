import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }
  
  search = (searchStr: string = '') => {
    return this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchStr}`)
  }
}
