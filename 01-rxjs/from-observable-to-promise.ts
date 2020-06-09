// how to turn promise to observable and how from observable to promise

// promise -> observable

import {from, Observable, interval} from 'rxjs';
import { first, take } from 'rxjs/operators';

// like promise one pulse and than closing
const someObservable$: Observable<number> = from(Promise.resolve(10))

// observable -> promise
// if observable is infinite
// promise pending
// if observable finite
// promise resolved with the last pulse

const timerObservable: Observable<number> = interval(1000);



const timerPromise = timerObservable.pipe(take(5)).toPromise()

