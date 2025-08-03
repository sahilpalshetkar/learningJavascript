// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// let sahil = "Sahil"

// function main() {
//     let reverse = sahil.split('').reverse().join('')

//     return sahil + reverse
// }
// let a = main()
// console.log(a)


function main(sahil) {
    let reverse = sahil.split('').reverse().join('')

    return sahil + reverse
}
console.log(main("Harishchandra"))
console.log(main("Sakharam"))
console.log(main("Palshetkar"))