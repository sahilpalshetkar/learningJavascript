setTimeout(() => {
  console.log("prints after 2 seconds.");
}, 2000);

console.log("The End!");

/*<-------------callback 1 learning--------------> */

function add(a, b, callback) {
    console.log(`The sum of ${a} and ${b} is ${a+b}`)
    callback();
}

function disp(){
  console.log("This must be printed after addition");
}

add(2, 4, disp);

/* <-----------callback 2 learning------------->*/
function greet(name, callback){
    console.log(`Hi ${name}`)
    callback();
}

function sayBye(){
    console.log("bye!")
}

greet("Sahil", sayBye)



/* <-----------callback 3 learning------------->*/
const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.unload = callback("Dheeraj");
  document.head.append(src);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

/* <-----------callback 4 learning------------->*/
const meet = (name, callback)=>{
    console.log(`Hi, ${name}`)
    callback();
}

const Bye = ()=>{
    console.log("bye!")
}

meet("pratik", Bye)

/* <-----------callback 5 learning------------->*/
const great = (name, callback)=>{
    console.log(`Hi, ${name}`)
    callback();
}

great("Shubham", ()=>{
    console.log("Take care!")
})