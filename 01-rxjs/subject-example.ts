// Subject

// create data stream
// one data stream for all listeners
// create pulse without an async function

import { Subject, BehaviorSubject } from 'rxjs';

const intervalSubject$: Subject<string> = new Subject();


setInterval(() => {
    intervalSubject$.next('hello world');
}, 1000)

intervalSubject$.subscribe((msg: string) => {

});

const behaviourExample : BehaviorSubject<string> = new BehaviorSubject('hello world')
behaviourExample.value;
behaviourExample.next('foo bar')
behaviourExample.subscribe((msg) => {

})

behaviourExample.next('1, 2, 4')