import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormArray, NgModel, NgForm, ControlValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>Forms tutorial</h1>

    <form #loginFormTemplate="ngForm" (ngSubmit)="login(loginFormTemplate)">
      <h1>Login Template driven</h1>

      <!-- input[ngModel] -->
      <input name="email" ngModel  />
      <input name="password" ngModel />
      <input name="stamRadio" type="radio" ngModel />
      <button>submit</button>
    </form>

    <form [formGroup]="loginForm">
      <h1>Login Reactive</h1>

      <!-- input[formControlName] -->
      <input name="email" formControlName="email" />
      <input name="password" formControlName="password" />
    </form>

    <button (click)="toggleRequired()">
      toggleRequired
    </button>

    <app-phone-number [(ngModel)]="hello"></app-phone-number>

    <p>
      {{phoneNumber.errors | json}}
    </p>
  `
})
export class AppComponent implements OnInit {
  email = 'yariv@nerdeez.com';
  password = '123456';
  isRequired = true;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  hello = '123-234234';

  phoneNumber = new FormControl('052-12345678', [
    Validators.required
  ]);

  login(form: NgForm) {
    // {email: '...', password: '... '}
    console.log(form.value);
    this.phoneNumber.setValue('052-345234');
  }

  ngOnInit() {
    this.phoneNumber.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  toggleRequired() {
    this.isRequired = !this.isRequired;

    if (this.isRequired) {
      this.phoneNumber.setValidators(
        [Validators.required]
      )
    } else {
      this.phoneNumber.setValidators(
        []
      )
    }
    
  }
}
