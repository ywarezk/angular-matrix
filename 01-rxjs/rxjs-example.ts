// RXJS
// solve async code that can to run more than once
// 0, 1, n, infinite
// Observable

// setInterval - wrap it in observable
// every second send hello world

import { Observable, Subscription } from 'rxjs';

// HttpClient.get
// Router.events
// FormControl.valueChange
const interval$: Observable<string> = new Observable((observer) => {
    console.log('async function in observable');
    let counter = 0;
    const intervalId = setInterval(() => {
        counter++;
        if (counter < 4) {
            observer.next('hello world');
        } else {
            // observer.complete()
            observer.error(new Error('something happened that made the datastream close unexpectly'))
        }
        
    }, 1000)

    return () => {
        clearInterval(intervalId);
    }
}); 

const sub : Subscription = interval$.subscribe((msg: string) => {
    // console.log(msg)
}, 
(err) => {
    console.log(err.message);
}, 
() => {
    console.log('datastream is closed');
}
);
// sub.unsubscribe();

interval$.subscribe((msg: string) => {
    // console.log(msg)
});

interval$.subscribe((msg: string) => {
    // console.log(msg)
});

// Promise Vs Observable
// promise calls resolve once, 
// observable calls next multiple times


// Promise VS Observable
// Promise will run the async function once
// Observable will run the async function for every listener
// 0 listener - observable will not run the async function
// Observable is lazy


// Promise VS Observable
// Observable is cancelable


// Promise VS Observable
// Promise can be in one of the following states: Pending -> resolved / rejected
// Observable can be in one of the following states: Cold, Hot -> complete?/ error?



