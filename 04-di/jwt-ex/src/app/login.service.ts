import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  /**
   * sends a login request to the server
   * for correct login enter email: yariv@nerdeez.com, password: 12345678
   * @param email
   * @param password
   */
  login = (email: string, password: string) => {
    return this._http.post('https://academeez-login-ex.herokuapp.com/api/users/login', {
      email, password
    })
  }
}
