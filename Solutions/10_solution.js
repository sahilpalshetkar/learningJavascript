// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(type) {
    return new Promise((resolve)=>{
        let delay = Math.ceil(Math.random() * 5000) + 1000

        setTimeout(() => {
            resolve(`Your ${type} is ready after ${delay} ms!`)
        }, delay);
    })
}

async function coffeeShop() {
    console.log("Brewing your coffee...")
    let coffee = await brewCoffee("Cappuccino")
    console.log(coffee)
}

coffeeShop()