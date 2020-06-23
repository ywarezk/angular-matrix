import { Component, OnInit, forwardRef, AfterViewInit, Input, Host, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-phone-number',
  template: `
    <select 
      [disabled]="isDisabled" 
      (blur)="notifyBlur()" 
      placeholder="prefix" 
      [formControl]="prefixControl">
      <option value="052">052</option>
      <option value="053">053</option>
    </select>
    <input 
      [disabled]="isDisabled" 
      (blur)="notifyBlur()" 
      type="tel" 
      placeholder="number" 
      [formControl]="numberControl" />
    <button (click)="reset()">
      Reset
    </button>
  `,
  styleUrls: ['./phone-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PhoneNumberComponent)
    }
  ]
})
export class PhoneNumberComponent implements ControlValueAccessor, AfterViewInit {
  prefixControl = new FormControl();
  numberControl = new FormControl();

  

  private _changeCb;
  public notifyBlur;
  public isDisabled = false;

  constructor(
    @Optional() private parent: ControlContainer,
  ) {
    // console.log(parent);
  }

  /**
   * when the class change the value in formControl or ngModel
   * prefix-number
   * @param obj 
   */
  writeValue(phoneNumber: string): void {
    if (!phoneNumber) {
      this.prefixControl.setValue("");
      this.numberControl.setValue("");  
      return;
    }
    const [prefix, number] = phoneNumber.split('-');
    this.prefixControl.setValue(prefix);
    this.numberControl.setValue(number);
  }

  /**
   * we get a callback
   * we need to call that callback when the template is changing the value
   * fn(newValue)
   * @param fn 
   */
  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  /**
   * call this function on blur event
   * @param fn 
   */
  registerOnTouched(fn: any): void {
    this.notifyBlur = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngAfterViewInit() {
    merge(
      this.prefixControl.valueChanges,
      this.numberControl.valueChanges
    ).subscribe(() => {
      this._changeCb(`${this.prefixControl.value}-${this.numberControl.value}`);
    });

    console.log(this.parent);
  }

  reset() {
    // this.prefixControl.setValue(null);
    // this.numberControl.setValue(null);
    this._changeCb(``);
  }
}
