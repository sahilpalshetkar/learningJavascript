console.log("Sahil is a hacker");
console.log("Pratik is a hecker");

setTimeout(() => {
  console.log("prints after 2 seconds.");
}, 2000);

setTimeout(() => {
  console.log("prints after 2.5 seconds");
}, 2000);

console.log("The End!");


function add(a, b, callback) {
    console.log(`The sum of ${a} and ${b} is ${a+b}`)
    callback();
}

function disp(){
  console.log("This must be printed after addition");
}

add(2, 4, disp);


const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.unload = callback("Sahil");
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)