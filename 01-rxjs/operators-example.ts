// Operators
// operators are function
// utilities for dealing with data stream
// operators have several types: 
// 1- create operators
// 2 - transforming operators
// 3- errors
// 4- filter

import {interval, Observable} from 'rxjs';
import { map, filter } from 'rxjs/operators';

// create interval observable

const interval$: Observable<number> = interval(1000)

const intervalHelloWorld$: Observable<string> = interval$.pipe(
    filter((x) => x % 2 === 0),
    map(() => 'hello world'),
)

intervalHelloWorld$.subscribe(() => {
    
})