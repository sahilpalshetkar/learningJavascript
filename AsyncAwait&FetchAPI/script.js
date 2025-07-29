async function getData(){  
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 3500);
    })
}

async function main() {
    
console.log("Loading modules")

console.log("Do something else")

console.log("Load Data")

let data = await getData()

    console.log(data)
    console.log("Process data")
    console.log("task 2")
}
main()

// data.then(()=>{
//     console.log(data)
//     console.log("Process data")
//     console.log("task 2")
// })

/*<-------------------------------> */
async function getData2() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("resolved!");
        }, 4000);
    })
}

async function main2() {
    let data2 = await getData2()
    console.log(data2)
}
main2()

/*<------------------------------->*/
async function sahil() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Hey Sahil!");
        }, 4500);
    })
}

async function main3() {
    let data3 = await sahil()
    console.log(data3)
}
main3()

/*<------------------------------->*/
async function Sahil2() {
    return new Promise((resolve, reject)=>{
        setInterval(() => {
            resolve("You are a goat!")
        }, 5000);
    })
}

async function main4() {
    let s = await Sahil2()
    console.log(s)
}
main4()