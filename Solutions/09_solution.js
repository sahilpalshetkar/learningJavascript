// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(orderId) {
    return new Promise((resolve)=>{
        let delay = Math.floor( Math.random() * 2000) + 1000

        setTimeout(() => {
            resolve(`${orderId} has been placed successfully!`)
        }, delay);
    })
}

async function shop() {
    console.log("placing your order...")
    let confirmation = await placeOrder(101)
    console.log(confirmation)
}

shop()