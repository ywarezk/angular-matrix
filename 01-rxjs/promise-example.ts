// Promise

// class
// wraps async code of a single pulse pattern
// facade

// promise that after 1 sec sends hello world
const timerPromise: Promise<string> = new Promise((resolve, reject) => {
    console.log('async function in promise');
    setTimeout(() => {
        // resolve('hello world');
        // resolve('hello')
        reject(new Error('something happened'))
    }, 1000);
});

const anotherPromise: Promise<boolean | string> = timerPromise.then((msg: string) => {
    // console.log(msg);
    // return 10;
    return Promise.resolve(true);
}, (err) => {
    return 'something'
});

timerPromise.then((msg: string) => {
    // console.log(msg);
});

timerPromise.then((msg: string) => {
    // console.log(msg);
});

// promise chaining

// promise1
//     .then(() => ...)
//     .catch(() => ...) // throw new Error()
//     .then(() => ...)
//     .then(() => ...)
//     .catch(() => ...)

async function hello() {
    try {
        const helloWorld = await timerPromise;
        // await promise2;
    } catch(err) {

    }
    
}

