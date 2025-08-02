// let obj = {
//     a: 1,
//     b: "sahil"
// }
// console.log(obj)

// const { use } = require("react");

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

// --------------------------------
class User{
    constructor(name){
        //invokes the setter
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name)//John

user.name = "" //Name is too