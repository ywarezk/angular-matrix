import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  /**
   * This method will only work if the request headers contain: Authorization: Bearer <valid token>
   */
  getTasks = () => {
    return this._http.get('https://academeez-login-ex.herokuapp.com/api/tasks');
  }
}
