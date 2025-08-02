// let obj = {
//     a: 1,
//     b: "sahil"
// }
// console.log(obj)

// let animal = {
//     eats:true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("Im eating...")
    }
    jumps(){
        console.log("Im jumping...")
    }
}
let a = new Animal("Bunny");
console.log(a)

class Lion extends Animal{
    constructor(name){
        super(name)
    }
    eats(){
        super.eats()
        console.log("Im eating...roar")
    }
}
let b = new Lion("sherr")
console.log(b)