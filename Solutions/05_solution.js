// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function main(sum) {
//     for (let i = 0; i < sum.length; i++) {
//         if (sum[i] < 0) {
//             break;
//         }
//         sum[i] += sum[i+1] 
//     }
//     return sum
// }

// let a = main([1,2,3,4])
// console.log(a)

function sumSelector(arr){
    let sum = 0;
    for (const element of arr) {
        if (element < 0) {
            break;
        }
        sum += element
    }
    return sum;
}
console.log(sumSelector([1,2,3,4,5]))
console.log(sumSelector([1,2,3,-4,5]))