async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c){
    return a+b+c
}

(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
    
    let [x,y,...rest] = [1,5,6,7,8,9]
    console.log(x,y,rest);
    
    let obj = {
        c:1,
        d:2,
        e:3
    }
    let {c, d} = obj
    console.log(c,d)

    let arr = [2,4,5]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
})()
