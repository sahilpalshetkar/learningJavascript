// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// 8. Async Array Mapping:
// Write an asynchronous function that takes an array of numbers
// and returns a new array of Promises where each number is multiplied by 2
// after a delay of 500 milliseconds.

// function asyncDoubleArray(arr) {
//     return arr.map(num => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(num * 2);
//             }, 500);
//         });
//     });
// }


// const numbers = [1, 2, 3, 4];

// async function runAsyncMap() {
//     const promiseArray = asyncDoubleArray(numbers);
//     const result = await Promise.all(promiseArray);
//     console.log(result);
// }

// runAsyncMap();



function delayDouble(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    });
}


async function asyncDoubleArray(arr) {
    const result = [];
    for (let num of arr) {
        const doubled = await delayDouble(num);
        result.push(doubled);
    }
    return result;
}


async function run() {
    const numbers = [1, 2, 3, 4, 10];
    const doubledArray = await asyncDoubleArray(numbers);
    console.log(doubledArray);
}

run();
