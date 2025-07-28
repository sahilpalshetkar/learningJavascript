console.log('This is promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if (a<0.5) {
        reject("No random number was not supporting you")
    }
    else{
        
    setTimeout(() => {
        console.log("Yes, I am done")
        resolve("Sahil")
    }, 3000);
}
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if (a<0.5) {
        reject("No random number was not supporting you2")
    }
    else{
    
    setTimeout(() => {
        console.log("Yes, I am done2")
        resolve("Sahil2")
    }, 2000);
}
})

let p3 = Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})