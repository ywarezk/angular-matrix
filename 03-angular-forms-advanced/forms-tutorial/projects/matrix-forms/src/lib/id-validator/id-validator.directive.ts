import { Directive } from "@angular/core";
import { Validator, ValidationErrors, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { idValidator } from './id-validator';

@Directive({
    selector: '[matrixId]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: IdValidatorDirective
        }
    ]
})
export class IdValidatorDirective implements Validator {
    validate(control: FormControl): ValidationErrors {
        return idValidator(control);
    }    
}