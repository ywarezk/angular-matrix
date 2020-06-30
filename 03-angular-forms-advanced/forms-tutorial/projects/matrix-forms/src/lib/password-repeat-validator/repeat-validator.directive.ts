import { Validator, AbstractControl, ValidationErrors, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { repeatPassword } from './validator';

@Directive({
    selector: '[matrixRepeatPassword]', 
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: RepeatPasswordValidator
        }
    ]  
})
export class RepeatPasswordValidator implements Validator {
    @Input('matrixRepeatPassword')
    passwordRepeatFieldNames: [string, string] = ['password', 'repeatPassword']

    validate(control: FormGroup): ValidationErrors {
        return repeatPassword(
            this.passwordRepeatFieldNames[0], this.passwordRepeatFieldNames[1]
            )(control);
    }    
}