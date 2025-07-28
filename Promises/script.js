console.log('This is promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if (a<0.111) {
        reject("No random number was not supporting you")
    }
    else{
    
    setTimeout(() => {
        console.log("Yes, I am done")
        resolve("Sahil")
    }, 3000);
}
})

prom1.then((a)=>{
    console.log(a)
})