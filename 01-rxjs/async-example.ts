// async code
// code that will run in the future

// |---------+|

setTimeout(() => {
    console.log('this will run in the future')
}, 1000);

setInterval(() => {
    console.log('this will run every second')
}, 1000);

// Bad patterns
// nested callback / callback hell

// firstAsync(() => {
//     firstAsync2(() => {
//         firstAsync3(() => {
//             ...
//         })
//     })
// })

// const firstElm = await firstAsync();
// const second = await firstAsync2();
// const third = await firstAsync3();

// parallel
// await Promise.all([firstAsync1, firstAsync2]);
// await firstAsync3;

// classifying your async code





