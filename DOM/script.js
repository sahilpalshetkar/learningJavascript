let cars = document.querySelector(".container").children


function getRandomColor() {
        let val1 = Math.ceil(0 + Math.random()* 255)
        let val2 = Math.ceil(0 + Math.random()* 255)
        let val3 = Math.ceil(0 + Math.random()* 255)

        // return ("rgb"+"("+val1+","+val2+","+val3+")")
        return `rgb(${val1},${val2},${val3})`
}

Array.from(cars).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
})

let bikes = document.querySelector(".container").children

Array.from(bikes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
})

Array.from(bikes).forEach(e=>{
    e.style.color = getRandomColor()
})