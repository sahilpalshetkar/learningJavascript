// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [2, 2, 4, 4, 6, 8, 10, 12, 12, 14, 16, 18]

// let sahil = []

// function main() {
//     for (const element of arr) {
//         sahil.push(element*2)
//     }
// }
// main()

// console.log(sahil)

let sahil = []

function main() {
    for (let i = 0; i < arr.length; i++) {
        if (i >0 && arr[i] === arr[i-1]) {
            sahil.push(arr[i])
        }
        else {
            sahil.push(arr[i]*2)
        }
        
    }
}
main()
console.log(sahil)