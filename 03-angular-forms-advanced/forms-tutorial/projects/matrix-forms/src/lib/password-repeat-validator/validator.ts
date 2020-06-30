/**
 * ValidatorFn
 * new FormControl('', [passwordRepeat])
 */

import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';


export function repeatPassword(passwordField: string, repeatPasswordField: string) {
    
    const repeatPassword: ValidatorFn = (control: FormGroup) => {
        const password = control.controls[passwordField];
        const repeatPassword = control.controls[repeatPasswordField]
        if (password.value === repeatPassword.value) {
            return null
        } else {
            return {
                repeatPassword: 'they are not equal'
            }
        }        
    }

    return repeatPassword;
}

