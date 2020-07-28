import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../../app/login.service';

@Component({
  selector: 'matrix-login',
  template: `
    <form #loginForm="ngForm" (ngSubmit)="login(loginForm)">
      <input ngModel type="email" name="email" placeholder="Email..." />
      <input ngModel type="password" name="password" placeholder="Password..." />
      <button>
        Submit
      </button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  constructor(private _login: LoginService) { }

  login(loginForm: NgForm) {
    const {email, password} = loginForm.value;
    this._login.login(email, password).subscribe((tokenWrapper: any) => {
      localStorage.setItem('token', tokenWrapper.token);
    })
  }
}
