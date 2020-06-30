import { ValidatorFn, FormControl } from '@angular/forms';

const idRegExp = /^0[0-9]{8}$/

export const idValidator: ValidatorFn = (control: FormControl) => {
    if (control.value.match(idRegExp)) {
        return null;
    } else {
        return {
            'matrixId': 'bad id format'
        }
    }
}