import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormArray, NgModel, NgForm, ControlValueAccessor, Validators, FormBuilder } from '@angular/forms';
import {repeatPassword} from 'matrix-forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>Forms tutorial</h1>

    <form #loginFormTemplate="ngForm" (ngSubmit)="login(loginFormTemplate)">
      <h1>Login Template driven</h1>

      <!-- input[ngModel] -->
      <input name="email" ngModel required  />
      <input name="password" ngModel />
      <input name="stamRadio" type="radio" ngModel />
      <button>submit</button>
    </form>

    <form [formGroup]="loginForm">
      <h1>Login Reactive</h1>

      <!-- input[formControlName] -->
      <input name="email" formControlName="email" required email minLength="2" />
      <input name="password" formControlName="password" />
    </form>

    <p>
      {{loginForm.controls.email.errors | json}}
    </p>

    <button (click)="toggleRequired()">
      toggleRequired
    </button>

    <app-phone-number [(ngModel)]="hello"></app-phone-number>

    <p>
      {{phoneNumber.errors | json}}
    </p>

    <h1>Autocomplete</h1>

    <p>
      {{autoComplete.value | json}}
    </p>

    <matrix-auto-complete [formControl]="autoComplete"></matrix-auto-complete>

    <h1>Custom Validation</h1>
    <form [formGroup]="passwordForm" [matrixRepeatPassword]="['password', 'repeatPassword']" >
      <input type="password" placeholder="password" formControlName="password" />
      <input type="password" placeholder="repeat password" formControlName="repeatPassword" />
    </form>

    <p>
    {{
      passwordForm.errors | json
    }}
    </p>

    <h1>
      Id Validation Directive
    </h1>

    <input placeholder="id" [formControl]="idControl" matrixId />

    {{
      idControl.errors | json
    }}
    

    <h1>Dynamic forms</h1>

    <h2>Phone numbers</h2>

    <form [formGroup]="phonesForm" (ngSubmit)="sendPhones()">
      <div formArrayName="phones">
        <ng-container *ngFor="let control of $any(phonesForm.controls.phones).controls">
          <app-phone-number [formControl]="control"></app-phone-number>
        </ng-container>
      </div>
      
      <button (click)="addPhone()" >Add phone number</button>
    </form>

    {{
      phonesForm.value | json
    }}
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
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(5)
  ]);

  autoComplete = new FormControl();

  passwordForm = new FormGroup({
    password: new FormControl(),
    repeatPassword: new FormControl()
  })

  idControl = new FormControl()

  // new FormGroup
  phonesForm = this._formBuilder.group({
    // new FormArray([ ])
    phones: this._formBuilder.array([
      // new FormControl('052-2441431')
      '052-2441431'
    ])
  });

  addPhone() {
    (<FormArray>this.phonesForm.controls.phones).push(
      new FormControl()
      // this._formBuilder.control()
    )
  }

  sendPhones() {
    console.log(this.phonesForm.value);
  }

  constructor(private _formBuilder: FormBuilder) {

  }

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
